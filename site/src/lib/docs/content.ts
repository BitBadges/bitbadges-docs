/**
 * Filesystem access to the docs corpus: navigation, page lookup, and the
 * catalogue used for static generation and the search index.
 *
 * Results are memoised per process — the corpus is read-only at build time.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { docsConfig, type DocsConfig } from './config';
import { renderDoc, type RenderedDoc } from './markdown';
import { filePathToRoute, routeToCandidates } from './paths';
import { flattenNav, parseSummary, type NavGroup, type NavNode } from './summary';
import { activeTabIndex, tabsFromNav } from './tabs';

export type DocPage = RenderedDoc & {
  route: string;
  filePath: string;
  prev: NavNode | null;
  next: NavNode | null;
  editUrl: string | null;
};

const MEDIA = /\.(png|jpe?g|gif|svg|webp|avif|ico|pdf|mp4|webm|mov|json|ya?ml|txt|zip)$/i;

/** Markdown files that are structure, not content. */
const NOT_A_PAGE = new Set(['SUMMARY.md']);

let navCache: Promise<NavGroup[]> | null = null;
let filesCache: Promise<string[]> | null = null;
let titleCache: Promise<Map<string, string>> | null = null;

function config(): DocsConfig {
  return docsConfig;
}

async function readIfPresent(absolute: string): Promise<string | null> {
  try {
    return await fs.readFile(absolute, 'utf8');
  } catch {
    return null;
  }
}

/** Every content-root-relative path under the corpus, excluding hidden and excluded dirs. */
async function walk(dir: string, base = ''): Promise<string[]> {
  const { contentDir, excludedDirs } = config();
  const entries = await fs.readdir(path.join(contentDir, dir), { withFileTypes: true });
  const out: string[] = [];

  for (const entry of entries) {
    const relative = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.') || excludedDirs.includes(entry.name)) continue;
      out.push(...(await walk(path.join(dir, entry.name), relative)));
    } else if (entry.name.endsWith('.md') && !entry.name.includes('.backup.') && !NOT_A_PAGE.has(relative)) {
      out.push(relative);
    }
  }
  return out;
}

export function getNav(): Promise<NavGroup[]> {
  navCache ??= (async () => {
    const summary = await readIfPresent(path.join(config().contentDir, 'SUMMARY.md'));
    return summary ? parseSummary(summary) : [];
  })();
  return navCache;
}

/**
 * Route -> page title for every page, used to label content-ref cards.
 *
 * Reads titles with a cheap scan rather than a full render; the markdown
 * pipeline is far too expensive to run twice over the corpus.
 */
export function getTitleMap(): Promise<Map<string, string>> {
  titleCache ??= (async () => {
    const cfg = config();
    const map = new Map<string, string>();

    for (const file of await getAllFiles()) {
      const source = await readIfPresent(path.join(cfg.contentDir, file));
      if (source === null) continue;

      const body = source.replace(/^---\n[\s\S]*?\n---\n/, '');
      const heading = /^\s{0,3}#\s+(.+)$/m.exec(body);
      const frontmatter = /^---\n[\s\S]*?^title:\s*(.+?)\s*$/m.exec(source);
      const title = heading?.[1]?.trim() ?? frontmatter?.[1]?.replace(/^["']|["']$/g, '');
      if (title) map.set(filePathToRoute(file), title);
    }
    return map;
  })();
  return titleCache;
}

export function getAllFiles(): Promise<string[]> {
  filesCache ??= walk('.');
  return filesCache;
}

/** Routes to pre-render: everything in the nav, plus any unlisted page. */
export async function getAllRoutes(): Promise<string[]> {
  const files = await getAllFiles();
  return [...new Set(files.map(filePathToRoute))].sort();
}

export async function getDoc(route: string): Promise<DocPage | null> {
  const cfg = config();
  const normalized = route === '' ? '/' : route;

  for (const candidate of routeToCandidates(normalized)) {
    if (NOT_A_PAGE.has(candidate)) continue;
    if (candidate.split('/').some((seg) => seg.startsWith('.') || cfg.excludedDirs.includes(seg))) continue;
    const source = await readIfPresent(path.join(cfg.contentDir, candidate));
    if (source === null) continue;

    const titles = await getTitleMap();
    const rendered = await renderDoc(source, {
      filePath: candidate,
      assetsPrefix: cfg.assetsPrefix,
      basePath: cfg.basePath,
      resolveTitle: (route) => titles.get(route),
    });

    // Prev/next never crosses a tab boundary — each tab reads as its own book.
    const tabs = tabsFromNav(await getNav());
    const order = flattenNav(tabs[activeTabIndex(tabs, normalized)].groups);
    const index = order.findIndex((node) => node.href === normalized);

    return {
      ...rendered,
      route: normalized,
      filePath: candidate,
      prev: index > 0 ? order[index - 1] : null,
      next: index >= 0 && index < order.length - 1 ? order[index + 1] : null,
      editUrl: cfg.editBaseUrl ? `${cfg.editBaseUrl}/${candidate}` : null,
    };
  }

  return null;
}

/** Routes whose pages are machine-generated reference material. */
const GENERATED_REFERENCE = /^\/(sdk\/reference|chain\/proto)\//;

export type SearchRecord = {
  id: string;
  route: string;
  title: string;
  section: string;
  description: string;
  text: string;
};

/** Flat records for the client-side index — one per page plus one per h2/h3. */
export async function buildSearchRecords(): Promise<SearchRecord[]> {
  const cfg = config();
  const nav = await getNav();
  const sectionOf = new Map<string, string>();
  for (const group of nav) {
    for (const node of flattenNav([group])) sectionOf.set(node.href, group.title ?? '');
  }

  const records: SearchRecord[] = [];
  for (const file of await getAllFiles()) {
    const source = await readIfPresent(path.join(cfg.contentDir, file));
    if (source === null) continue;

    const route = filePathToRoute(file);
    const doc = await renderDoc(source, {
      filePath: file,
      assetsPrefix: cfg.assetsPrefix,
      basePath: cfg.basePath,
    });
    const section = sectionOf.get(route) ?? '';

    records.push({
      id: route,
      route,
      title: doc.title,
      section,
      description: doc.description ?? '',
      // Generated reference trees (SDK TypeDoc, proto) are thousands of pages.
      // Indexing 4 KB each pushed search-index.json past 7 MB, and their value
      // in search is the symbol name, not the prose. Index a short lead instead.
      text: doc.text.slice(0, GENERATED_REFERENCE.test(route) ? 400 : 4000),
    });

    for (const heading of doc.headings) {
      records.push({
        id: `${route}#${heading.id}`,
        route: `${route}#${heading.id}`,
        title: heading.text,
        section: doc.title,
        description: '',
        text: '',
      });
    }
  }
  return records;
}

export { MEDIA as MEDIA_EXTENSIONS };
