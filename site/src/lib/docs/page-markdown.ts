/**
 * The Markdown twin of a page, served at `<route>.md` for agents.
 *
 * Frontmatter is dropped, the title becomes an H1 when the body has none,
 * widgets are stripped (their JSON sits in the code block beside them), and
 * every internal link and image becomes an absolute site URL so a reader with
 * no link resolver can follow it. Pure string work: it runs the same in the
 * sync script and in tests.
 */
import matter from 'gray-matter';

import { rewriteMarkdownLinks } from './openapi';
import { resolveAssetPath } from './paths';
import { stripWidgets } from './widgets';

export type PageMarkdownOptions = {
  /** Content-root-relative path of the source file, e.g. `agents/setup.md`. */
  filePath: string;
  /** Public origin, e.g. `https://docs.bitbadges.io`. */
  siteUrl: string;
  /** Route prefix when mounted under a sub-path, e.g. `/docs`. */
  basePath: string;
  /** Public URL prefix that serves the content tree's images. */
  assetsPrefix: string;
};

/** `/` -> `/index.md`; `/a/b` -> `/a/b.md`. */
export function markdownRoute(route: string): string {
  return route === '/' ? '/index.md' : `${route}.md`;
}

const FENCE = /^\s{0,3}(`{3,}|~{3,})/;
const IMAGE = /!\[([^\]]*)\]\(([^()\s]+)((?:\s+"[^"]*")?)\)/g;
const isExternal = (href: string) => /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//');

/** Point relative image references at the served asset tree, outside fenced code. */
function absoluteImages(markdown: string, options: PageMarkdownOptions): string {
  const { filePath, siteUrl, basePath, assetsPrefix } = options;
  let fence: string | null = null;
  return markdown
    .split('\n')
    .map((line) => {
      const fenceMatch = FENCE.exec(line);
      if (fenceMatch) {
        const marker = fenceMatch[1][0];
        if (fence === null) fence = marker;
        else if (marker === fence) fence = null;
        return line;
      }
      if (fence !== null) return line;
      return line.replace(IMAGE, (whole, alt: string, src: string, title: string) => {
        if (isExternal(src)) return whole;
        const asset = resolveAssetPath(filePath, src);
        if (!asset) return whole;
        const encoded = asset.split('/').map(encodeURIComponent).join('/');
        return `![${alt}](${siteUrl}${basePath}${assetsPrefix}/${encoded}${title})`;
      });
    })
    .join('\n');
}

export function pageMarkdown(source: string, options: PageMarkdownOptions): string {
  const { data, content } = matter(source);
  const fallbackTitle = options.filePath.split('/').pop()!.replace(/\.md$/i, '');
  const title = typeof data.title === 'string' && data.title.trim() ? data.title.trim() : fallbackTitle;

  let body = stripWidgets(content).trim();
  if (!/^\s{0,3}#\s+\S/m.test(body.split('\n')[0] ?? '')) body = `# ${title}\n\n${body}`;
  body = rewriteMarkdownLinks(options.filePath, body, `${options.siteUrl}${options.basePath}`);
  body = absoluteImages(body, options);
  return `${body.trim()}\n`;
}
