/**
 * The portability seam.
 *
 * Everything deployment-specific lives here. To mount these docs inside another
 * Next app (e.g. bitbadges.io), copy `src/lib/docs` + `src/components/docs` and
 * set `DOCS_CONTENT_DIR` / `DOCS_BASE_PATH` — no other file needs to change.
 */
import path from 'node:path';

export type DocsConfig = {
  /** Absolute path to the markdown root (the folder holding SUMMARY.md). */
  contentDir: string;
  /** Public URL prefix serving the content tree's images and downloads. */
  assetsPrefix: string;
  /** Route prefix when mounted under a sub-path, e.g. `/docs`. Empty at root. */
  basePath: string;
  siteName: string;
  siteDescription: string;
  /** URL of the OpenAPI document powering the API reference page. */
  openapiUrl: string;
  /** Base for "Edit this page" links; empty disables them. */
  editBaseUrl: string;
  /** Directory names never served as documentation. */
  excludedDirs: string[];
  /** Folder of `*.tsv` redirect tables merged into `redirects.json` by `sync`. */
  redirectsDir: string;
};

const env = (key: string, fallback: string) => process.env[key]?.trim() || fallback;

export const docsConfig: DocsConfig = {
  // turbopackIgnore keeps the bundler from tracing the whole content repo into
  // the server output; every page is prerendered, so nothing is read at runtime.
  contentDir: path.resolve(/* turbopackIgnore: true */ process.cwd(), env('DOCS_CONTENT_DIR', '..')),
  assetsPrefix: env('DOCS_ASSETS_PREFIX', '/docs-assets'),
  basePath: env('DOCS_BASE_PATH', '').replace(/\/$/, ''),
  siteName: env('DOCS_SITE_NAME', 'BitBadges Documentation'),
  siteDescription: env(
    'DOCS_SITE_DESCRIPTION',
    'Documentation for BitBadges — the next-generation token standard for RWAs, compliance, and payments.',
  ),
  openapiUrl: env('DOCS_OPENAPI_URL', '/openapi.json'),
  editBaseUrl: env('DOCS_EDIT_BASE_URL', 'https://github.com/trevormil/bitbadges-docs/edit/master'),
  excludedDirs: env('DOCS_EXCLUDED_DIRS', '_docs,_new,site,node_modules').split(',').map((s) => s.trim()),
  redirectsDir: path.resolve(/* turbopackIgnore: true */ process.cwd(), env('DOCS_REDIRECTS_DIR', '../_docs/redirects')),
};

/** Prefix an internal route with the mount point. */
export function withBasePath(route: string): string {
  if (!docsConfig.basePath) return route;
  return route === '/' ? docsConfig.basePath : `${docsConfig.basePath}${route}`;
}
