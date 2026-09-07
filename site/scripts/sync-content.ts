/**
 * Copy everything the site serves statically out of the content repo and into
 * public/, then build the search index.
 *
 * Runs before dev and build. Keeping this a separate step (rather than reading
 * the content tree at request time) means the site works identically under
 * `next start`, a static export, or embedded in another app.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { docsConfig } from '../src/lib/docs/config';
import { buildSearchRecords, MEDIA_EXTENSIONS } from '../src/lib/docs/content';
import { API_FOLD, foldApiDocs, foldedPageFiles, sanitizeOpenApi } from '../src/lib/docs/openapi';
import { loadRedirects } from '../src/lib/docs/redirects';

const publicDir = path.resolve(process.cwd(), 'public');
const assetsDir = path.join(publicDir, docsConfig.assetsPrefix.replace(/^\//, ''));

/** Copy `src` to `dest` unless the destination is already current. */
async function copyIfStale(src: string, dest: string): Promise<boolean> {
  const [srcStat, destStat] = await Promise.all([
    fs.stat(src),
    fs.stat(dest).catch(() => null),
  ]);
  if (destStat && destStat.mtimeMs >= srcStat.mtimeMs && destStat.size === srcStat.size) return false;
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.copyFile(src, dest);
  return true;
}

async function syncAssets(dir = '.'): Promise<number> {
  const entries = await fs.readdir(path.join(docsConfig.contentDir, dir), { withFileTypes: true });
  let copied = 0;

  for (const entry of entries) {
    const relative = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // `.gitbook/assets` holds every image, so hidden dirs are included here —
      // only version control and the site's own folder are skipped.
      if (entry.name === '.git' || docsConfig.excludedDirs.includes(entry.name)) continue;
      copied += await syncAssets(relative);
      continue;
    }
    if (!MEDIA_EXTENSIONS.test(entry.name)) continue;
    const from = path.join(docsConfig.contentDir, relative);
    const to = path.join(assetsDir, relative);
    if (await copyIfStale(from, to)) copied += 1;
  }
  return copied;
}

/** The API tab's markdown, keyed by content-relative path, for the fold. */
async function loadApiPages(): Promise<Map<string, string>> {
  const pages = new Map<string, string>();
  for (const file of foldedPageFiles(API_FOLD)) {
    pages.set(file, await fs.readFile(path.join(docsConfig.contentDir, file), 'utf8'));
  }
  return pages;
}

/**
 * Fold the API tab's markdown into the spec, sanitize it, and place it where
 * the API reference page can fetch it. The fold builds `info.description` as
 * one `# Overview` plus a `#` section per page, so the sanitizer's
 * `groupDescriptionUnder` (which wraps and demotes everything) is not applied
 * on top — that would push every folded section out of Scalar's sidebar.
 */
async function syncOpenApi(): Promise<string> {
  const candidates = [
    process.env.DOCS_OPENAPI_SOURCE,
    path.resolve(process.cwd(), 'openapi/openapi.json'),
    path.resolve(process.cwd(), '../../bitbadgesjs/packages/bitbadgesjs-sdk/openapi-hosted/openapi.json'),
  ].filter(Boolean) as string[];

  for (const candidate of candidates) {
    if (await fs.access(candidate).then(() => true).catch(() => false)) {
      const source = JSON.parse(await fs.readFile(candidate, 'utf8'));
      const pages = await loadApiPages();
      const { spec: folded, report: fold } = foldApiDocs(source, pages, { basePath: docsConfig.basePath });
      const { spec, report } = sanitizeOpenApi(folded);
      console.log(`openapi: folded ${pages.size} api/ page(s) into info.description and tag(s) ${fold.tags.join(', ')}`);

      await fs.mkdir(publicDir, { recursive: true });
      await fs.writeFile(path.join(publicDir, 'openapi.json'), JSON.stringify(spec));

      if (report.hiddenOperations.length) {
        console.log(`openapi: hid ${report.hiddenOperations.length} x-internal operation(s)`);
      }
      if (report.cutSelfRefs.length) {
        console.log(`openapi: cut self-reference in ${report.cutSelfRefs.join(', ')}`);
      }
      if (report.stubbedRefs.length) {
        console.log(`openapi: stubbed undefined schema(s) ${report.stubbedRefs.join(', ')}`);
      }
      return candidate;
    }
  }
  return '';
}

const copied = await syncAssets();
console.log(`assets: ${copied} file(s) updated in ${path.relative(process.cwd(), assetsDir)}`);

const spec = await syncOpenApi();
console.log(spec ? `openapi: copied from ${path.relative(process.cwd(), spec)}` : 'openapi: no spec found — API reference will be empty');

// next.config.ts reads this at build time; see README "Redirects".
const redirects = await loadRedirects(docsConfig.redirectsDir);
await fs.writeFile(path.resolve(process.cwd(), 'redirects.json'), `${JSON.stringify(redirects, null, 2)}\n`);
console.log(`redirects: ${redirects.length} rule(s) from ${path.relative(process.cwd(), docsConfig.redirectsDir)}`);

const records = await buildSearchRecords();
await fs.writeFile(path.join(publicDir, 'search-index.json'), JSON.stringify(records));
console.log(`search: ${records.length} records indexed`);
