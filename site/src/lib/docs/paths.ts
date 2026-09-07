/**
 * Route <-> file-path mapping for a GitBook-style content tree.
 *
 * GitBook addresses pages by repo-relative file path; the site addresses them by
 * URL route. `README.md` is the index of its directory, mirroring GitBook.
 * Everything here is pure string work so it can be reused unchanged wherever the
 * docs are mounted.
 */

/**
 * Collapse `.` / `..` segments.
 *
 * `clamp` decides what happens when the path climbs above the root. Link and
 * asset resolution clamps, because GitBook resolves over-relative links leniently
 * and the corpus relies on that. Route lookup does NOT clamp — there it is a
 * traversal attempt and must be rejected.
 */
function normalizeSegments(segments: string[], clamp = false): string[] | null {
  const out: string[] = [];
  for (const seg of segments) {
    if (seg === '' || seg === '.') continue;
    if (seg === '..') {
      if (out.length === 0) {
        if (clamp) continue;
        return null;
      }
      out.pop();
      continue;
    }
    out.push(seg);
  }
  return out;
}

/** `overview/use-cases.md` -> `/overview/use-cases`; `a/README.md` -> `/a`; `README.md` -> `/`. */
export function filePathToRoute(filePath: string): string {
  const trimmed = filePath.replace(/^\.\//, '').replace(/^\/+/, '');
  const withoutExt = trimmed.replace(/\.md$/i, '');
  const segments = normalizeSegments(withoutExt.split('/'), true) ?? [];
  if (segments.length > 0 && segments[segments.length - 1].toLowerCase() === 'readme') segments.pop();
  return segments.length === 0 ? '/' : `/${segments.join('/')}`;
}

/**
 * Content files that could serve a route, in priority order. Empty when the
 * route would escape the content root.
 */
export function routeToCandidates(route: string): string[] {
  const segments = normalizeSegments(route.split('/'));
  if (segments === null) return [];
  if (segments.length === 0) return ['README.md'];
  const joined = segments.join('/');
  return [`${joined}.md`, `${joined}/README.md`];
}

/**
 * Rewrite a link as authored inside `fromFile` into a site route.
 * External, protocol, absolute and anchor-only links pass through unchanged.
 */
export function resolveDocLink(fromFile: string, href: string): string {
  if (!href) return href;
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return href;
  if (href.startsWith('//') || href.startsWith('#') || href.startsWith('/')) return href;

  const hashIndex = href.indexOf('#');
  const hash = hashIndex === -1 ? '' : href.slice(hashIndex);
  const target = hashIndex === -1 ? href : href.slice(0, hashIndex);
  if (target === '') return href;

  // Only rewrite links that address documents; leave asset links to the image pass.
  const isDocLink = /\.md$/i.test(target) || target.endsWith('/');
  if (!isDocLink) return href;

  const fromDir = fromFile.replace(/^\.\//, '').split('/').slice(0, -1);
  const combined = normalizeSegments([...fromDir, ...target.split('/')], true);
  if (combined === null) return href;

  return `${filePathToRoute(combined.join('/'))}${hash}`;
}

const GITBOOK_ASSETS = '.gitbook/assets/';

/** Resolve a relative asset reference (image, download) to a content-root-relative path. */
export function resolveAssetPath(fromFile: string, src: string): string | null {
  if (!src || /^[a-z][a-z0-9+.-]*:/i.test(src) || src.startsWith('//')) return null;

  // `.gitbook/assets/` lives at the content root. Resolving it from there,
  // whatever the page's depth, lets pages move without their images breaking.
  const assetsIndex = src.indexOf(GITBOOK_ASSETS);
  if (assetsIndex !== -1) {
    const combined = normalizeSegments(src.slice(assetsIndex).split('/'), true) ?? [];
    return combined.length > 0 ? combined.join('/') : null;
  }

  const fromDir = fromFile.replace(/^\.\//, '').split('/').slice(0, -1);
  const base = src.startsWith('/') ? [] : fromDir;
  const combined = normalizeSegments([...base, ...src.split('/')], true);
  if (combined === null || combined.length === 0) return null;
  return combined.join('/');
}
