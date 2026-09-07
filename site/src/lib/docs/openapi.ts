/**
 * Prepare an OpenAPI document for the self-hosted reference.
 *
 * Stoplight is not a plain OpenAPI renderer — it honours vendor extensions and
 * tolerates spec defects that a strict renderer does not. This module closes
 * both gaps so the self-hosted reference shows the same surface Stoplight
 * publishes today:
 *
 *   1. `x-internal: true` hides an item from Stoplight's published docs. Scalar
 *      ignores the extension, so anything marked internal is removed here.
 *   2. Directly self-referential schemas make Scalar's dereferencer recurse
 *      until the stack overflows. The back-edge is replaced with a titled stub.
 *   3. `$ref`s pointing at schemas that do not exist are stubbed, so one broken
 *      reference cannot blank the whole page.
 *
 * The input document is never mutated.
 *
 * The second half of the file folds the API tab's markdown pages into the
 * document (`foldApiDocs`), so the Scalar page reads as one place.
 */
import { resolveDocLink } from './paths';

type Json = Record<string, any>;

export type SanitizeOptions = {
  /**
   * Wrap the top-level sections of `info.description` under a single heading.
   *
   * Scalar turns every heading in the description into a sidebar entry. The
   * BitBadges description has seven `h1`s, which push the actual endpoints far
   * down the rail. Demoting them under one parent collapses them into a single
   * expandable section.
   */
  groupDescriptionUnder?: string;
};

export type SanitizeReport = {
  /** `"<method> <path>"` for each operation hidden by `x-internal`. */
  hiddenOperations: string[];
  /** Schema names whose self-reference was replaced with a stub. */
  cutSelfRefs: string[];
  /** Schema names referenced but never defined in the source document. */
  stubbedRefs: string[];
  /** Count of GitHub Pages TypeDoc links repointed at the in-site SDK reference. */
  repointedSdkLinks: number;
};

const HTTP_METHODS = new Set(['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace']);
const SCHEMA_PREFIX = '#/components/schemas/';

const isInternal = (node: unknown): boolean =>
  typeof node === 'object' && node !== null && (node as Json)['x-internal'] === true;

/** Deep clone that drops every item flagged `x-internal: true`. */
function pruneInternal(node: unknown): unknown {
  if (Array.isArray(node)) return node.filter((item) => !isInternal(item)).map(pruneInternal);
  if (typeof node !== 'object' || node === null) return node;

  const out: Json = {};
  for (const [key, value] of Object.entries(node as Json)) {
    if (isInternal(value)) continue;
    out[key] = pruneInternal(value);
  }
  return out;
}

/** Every schema name reachable via a local `$ref`. */
function collectRefs(node: unknown, found: Set<string>): Set<string> {
  if (Array.isArray(node)) {
    for (const item of node) collectRefs(item, found);
    return found;
  }
  if (typeof node !== 'object' || node === null) return found;

  for (const [key, value] of Object.entries(node as Json)) {
    if (key === '$ref' && typeof value === 'string' && value.startsWith(SCHEMA_PREFIX)) {
      found.add(value.slice(SCHEMA_PREFIX.length));
    } else {
      collectRefs(value, found);
    }
  }
  return found;
}

/** Replace `$ref`s back to `owner` with a titled stub, breaking the cycle. */
function cutSelfReference(node: unknown, owner: string): { value: unknown; cut: boolean } {
  if (Array.isArray(node)) {
    let cut = false;
    const value = node.map((item) => {
      const result = cutSelfReference(item, owner);
      cut ||= result.cut;
      return result.value;
    });
    return { value, cut };
  }
  if (typeof node !== 'object' || node === null) return { value: node, cut: false };

  const source = node as Json;
  if (source.$ref === `${SCHEMA_PREFIX}${owner}`) {
    return {
      value: { title: owner, description: `Recursive reference to ${owner}.` },
      cut: true,
    };
  }

  let cut = false;
  const out: Json = {};
  for (const [key, value] of Object.entries(source)) {
    const result = cutSelfReference(value, owner);
    cut ||= result.cut;
    out[key] = result.value;
  }
  return { value: out, cut };
}

const MAX_HEADING_DEPTH = 6;

/** Demote every markdown heading by one level, ignoring fenced code blocks. */
export function demoteHeadings(markdown: string): string {
  const lines = markdown.split('\n');
  let fence: string | null = null;

  return lines
    .map((line) => {
      const fenceMatch = /^\s{0,3}(`{3,}|~{3,})/.exec(line);
      if (fenceMatch) {
        const marker = fenceMatch[1][0];
        if (fence === null) fence = marker;
        else if (marker === fence) fence = null;
        return line;
      }
      if (fence !== null) return line;

      const heading = /^(#{1,6})(\s+)/.exec(line);
      if (!heading || heading[1].length >= MAX_HEADING_DEPTH) return line;
      return `#${line}`;
    })
    .join('\n');
}

/**
 * The upstream spec links type and method docs at the retired GitHub Pages
 * TypeDoc site. That reference now lives in this corpus under /sdk/reference,
 * so rewrite the links at sync time; doing it here means the next upstream
 * pull cannot reintroduce them.
 *
 * `interfaces/iGetAccountPayload`      -> `/sdk/reference/interfaces/i-get-account-payload`
 * `classes/BitBadgesAPI.html#getaccount` -> `/sdk/reference/classes/bit-badges-api#getaccount`
 */
const GH_PAGES_TYPEDOC = /https?:\/\/bitbadges\.github\.io\/bitbadgesjs\/([a-z]+)\/([A-Za-z0-9_]+)(?:\.html)?(#[A-Za-z0-9_-]*)?/g;

const kebab = (symbol: string): string =>
  symbol
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();

export function repointSdkLinks<T>(node: T): { value: T; count: number } {
  let count = 0;
  const walk = (value: unknown): unknown => {
    if (typeof value === 'string') {
      return value.replace(GH_PAGES_TYPEDOC, (_match, group: string, symbol: string, hash = '') => {
        count += 1;
        return `/sdk/reference/${group}/${kebab(symbol)}${hash}`;
      });
    }
    if (Array.isArray(value)) return value.map(walk);
    if (value && typeof value === 'object') {
      return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, walk(v)]));
    }
    return value;
  };
  return { value: walk(node) as T, count };
}

export function sanitizeOpenApi<T extends Json>(
  input: T,
  options: SanitizeOptions = {},
): { spec: T; report: SanitizeReport } {
  const hiddenOperations: string[] = [];

  for (const [route, item] of Object.entries((input.paths ?? {}) as Json)) {
    if (isInternal(item)) {
      for (const method of Object.keys(item as Json)) {
        if (HTTP_METHODS.has(method)) hiddenOperations.push(`${method} ${route}`);
      }
      continue;
    }
    for (const [method, operation] of Object.entries(item as Json)) {
      if (HTTP_METHODS.has(method) && isInternal(operation)) hiddenOperations.push(`${method} ${route}`);
    }
  }

  const pruned = pruneInternal(input) as T;
  const { value: spec, count: repointedSdkLinks } = repointSdkLinks(pruned);

  // A path item with every operation hidden would render as an empty entry.
  if (spec.paths) {
    for (const [route, item] of Object.entries(spec.paths as Json)) {
      const hasOperation = Object.keys(item as Json).some((key) => HTTP_METHODS.has(key));
      if (!hasOperation) delete (spec.paths as Json)[route];
    }
  }

  const schemas = (spec.components?.schemas ?? {}) as Json;

  const cutSelfRefs: string[] = [];
  for (const [name, schema] of Object.entries(schemas)) {
    const { value, cut } = cutSelfReference(schema, name);
    if (cut) {
      schemas[name] = value;
      cutSelfRefs.push(name);
    }
  }

  const stubbedRefs: string[] = [];
  for (const name of collectRefs(spec, new Set())) {
    if (name in schemas) continue;
    schemas[name] = {
      title: name,
      description: `\`${name}\` is referenced by this API but is not defined in the source OpenAPI document.`,
    };
    stubbedRefs.push(name);
  }

  if (stubbedRefs.length > 0) {
    const target = spec as Json;
    target.components ??= {};
    target.components.schemas = schemas;
  }

  const description = spec.info?.description;
  if (options.groupDescriptionUnder && typeof description === 'string') {
    (spec.info as Json).description = `# ${options.groupDescriptionUnder}\n\n${demoteHeadings(description)}`;
  }

  return {
    spec,
    report: {
      hiddenOperations: hiddenOperations.sort(),
      cutSelfRefs: cutSelfRefs.sort(),
      stubbedRefs: stubbedRefs.sort(),
      repointedSdkLinks,
    },
  };
}

/* ==========================================================================
   Folding the API tab's markdown into the OpenAPI document

   The API tab is the Scalar reference. The prose pages under `api/` stay on
   disk (redirect targets, agent-readable source) but the reader meets them
   inside Scalar: the top-level pages become sections of `info.description`,
   the claims and sign-in groups become their tag's description.
   ========================================================================== */

export type FoldPage = { file: string; title?: string };

export type ApiFold = {
  /** First entry is the introduction; the rest become top-level sections. */
  intro: FoldPage[];
  /** Tag name -> pages; the first is the lead, the rest become `##` sections. */
  tags: Record<string, FoldPage[]>;
};

export const API_FOLD: ApiFold = {
  intro: [
    { file: 'api/README.md', title: 'Overview' },
    { file: 'api/pagination-and-views.md' },
    { file: 'api/swaps.md' },
    { file: 'api/self-hosting.md' },
  ],
  tags: {
    Claims: [
      { file: 'api/claims/README.md' },
      // Its H1 is "Claims" like the lead page; name the section by its role.
      { file: 'api/claims/endpoints.md', title: 'Endpoints' },
      { file: 'api/claims/plugins.md' },
      { file: 'api/claims/dynamic-stores.md' },
    ],
    'Sign In with BitBadges': [
      { file: 'api/sign-in/README.md' },
      { file: 'api/sign-in/setup.md' },
      { file: 'api/sign-in/authorization-url.md' },
      { file: 'api/sign-in/callback.md' },
      { file: 'api/sign-in/verification.md' },
      { file: 'api/sign-in/frameworks.md' },
    ],
  },
};

/** Every content-relative file the fold consumes. */
export function foldedPageFiles(fold: ApiFold): string[] {
  return [...fold.intro, ...Object.values(fold.tags).flat()].map((p) => p.file);
}

const FENCE = /^\s{0,3}(`{3,}|~{3,})/;

/** Apply `fn` to each line outside fenced code blocks. */
function mapProse(markdown: string, fn: (line: string) => string): string {
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
      return fence === null ? fn(line) : line;
    })
    .join('\n');
}

const MARKDOWN_LINK = /\]\(([^()\s]+)((?:\s+"[^"]*")?)\)/g;

/**
 * Rewrite relative markdown links authored in `fromFile` to absolute site
 * routes so they work from inside the Scalar page. External links and
 * anchors pass through; internal routes get the mount `basePath`.
 */
export function rewriteMarkdownLinks(fromFile: string, markdown: string, basePath = ''): string {
  return mapProse(markdown, (line) =>
    line.replace(MARKDOWN_LINK, (_m, target: string, title: string) => {
      const resolved = resolveDocLink(fromFile, target);
      const mounted =
        basePath && resolved.startsWith('/') && !resolved.startsWith('//') ? `${basePath}${resolved}` : resolved;
      return `](${mounted}${title})`;
    }),
  );
}

const ALSO_IN_REFERENCE = /^This page is also part of the \[API reference\]\([^)]*\)\.$/;
const LIQUID_TAG = /^\s*\{%\s*(\w+)[^%]*%\}\s*$/;

/** GitBook hints become blockquotes; any other liquid tag line is dropped. */
function liquidToMarkdown(markdown: string): string {
  let inHint = false;
  const DROP = ' ';
  return mapProse(markdown, (line) => {
    const tag = LIQUID_TAG.exec(line);
    if (tag) {
      if (tag[1] === 'hint') inHint = true;
      else if (tag[1] === 'endhint') inHint = false;
      return DROP;
    }
    return inHint ? `> ${line}`.trimEnd() : line;
  })
    .split('\n')
    .filter((line) => line !== DROP)
    .join('\n');
}

export type FoldedPage = { title: string; body: string };

/**
 * Turn one markdown page into a fold-ready section: front matter and the H1
 * gone, links absolute, hints as blockquotes, comments and the "also part of
 * the API reference" pointer removed. Headings keep their authored level.
 */
export function prepareFoldedPage(file: string, source: string, title?: string, basePath = ''): FoldedPage {
  let body = source.replace(/^---\n[\s\S]*?\n---\n/, '');
  body = body.replace(/<!--[\s\S]*?-->/g, '');

  const h1 = /^\s{0,3}#\s+(.+?)\s*$/m.exec(body);
  if (h1) body = body.replace(h1[0], '');
  const resolvedTitle = title ?? h1?.[1] ?? file;

  body = mapProse(body, (line) => (ALSO_IN_REFERENCE.test(line.trim()) ? '' : line));
  body = liquidToMarkdown(body);
  body = rewriteMarkdownLinks(file, body, basePath);
  body = body.replace(/\n{3,}/g, '\n\n').trim();

  return { title: resolvedTitle, body };
}

export type FoldReport = {
  /** Tags whose description now carries folded pages. */
  tags: string[];
};

export type FoldOptions = { fold?: ApiFold; basePath?: string };

function requirePage(pages: Map<string, string>, file: string): string {
  const source = pages.get(file);
  if (source === undefined) throw new Error(`openapi fold: missing page ${file}`);
  return source;
}

/**
 * Replace `info.description` and the chosen tag descriptions with the API
 * tab's markdown.
 *
 * `info.description` is a single `# Overview` section. The lead page's body
 * follows it directly, then every other intro page becomes a `## <title>`
 * subsection with its own headings demoted to fit underneath. One H1 means
 * Scalar shows one Overview entry above the tags, with everything else nested
 * inside it rather than sitting beside it. Tag descriptions work the same way:
 * the lead page's body, then `## <title>` sections.
 *
 * Throws when a page or tag is missing: nothing may silently disappear.
 */
export function foldApiDocs<T extends Json>(
  input: T,
  pages: Map<string, string>,
  options: FoldOptions = {},
): { spec: T; report: FoldReport } {
  const fold = options.fold ?? API_FOLD;
  const basePath = options.basePath ?? '';
  const spec = structuredClone(input) as Json;

  const prepare = (page: FoldPage) =>
    prepareFoldedPage(page.file, requirePage(pages, page.file), page.title, basePath);

  spec.info ??= {};
  const [introLead, ...introRest] = fold.intro.map(prepare);
  spec.info.description = [
    `# ${introLead.title}`,
    introLead.body,
    ...introRest.map((page) => `## ${page.title}\n\n${demoteHeadings(page.body)}`),
  ].join('\n\n');

  const tags: Json[] = Array.isArray(spec.tags) ? spec.tags : [];
  const folded: string[] = [];
  for (const [name, group] of Object.entries(fold.tags)) {
    const tag = tags.find((t) => t.name === name);
    if (!tag) throw new Error(`openapi fold: tag "${name}" is not in the OpenAPI document`);
    const [lead, ...rest] = group.map(prepare);
    tag.description = [lead.body, ...rest.map((page) => `## ${page.title}\n\n${demoteHeadings(page.body)}`)].join(
      '\n\n',
    );
    folded.push(name);
  }

  return { spec: spec as T, report: { tags: folded } };
}
