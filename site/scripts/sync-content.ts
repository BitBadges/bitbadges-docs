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
import { generate as generateForLlms } from './gen-for-llms';

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
/** Routes that exist in the generated SDK reference, for checking TypeDoc links. */
async function sdkReferenceRoutes(): Promise<Set<string>> {
  const routes = new Set<string>();
  const walk = async (dir: string): Promise<void> => {
    const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
        continue;
      }
      if (!entry.name.endsWith('.md')) continue;
      const rel = path
        .relative(docsConfig.contentDir, full)
        .replace(/\.md$/, '')
        .replace(/\/README$/, '');
      routes.add(`/${rel}`);
    }
  };
  await walk(path.join(docsConfig.contentDir, 'sdk', 'reference'));
  return routes;
}

async function syncOpenApi(): Promise<string> {
  const sdkRoutes = await sdkReferenceRoutes();
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
      const { spec, report } = sanitizeOpenApi(folded, {
        sdkRouteExists: (route) => sdkRoutes.has(route),
      });
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
      if (report.repointedSdkLinks || report.unlinkedSdkLinks) {
        console.log(
          `openapi: repointed ${report.repointedSdkLinks} TypeDoc link(s) at /sdk/reference` +
            (report.unlinkedSdkLinks ? `, unlinked ${report.unlinkedSdkLinks} with no page` : ''),
        );
      }
      return candidate;
    }
  }
  return '';
}

const copied = await syncAssets();
console.log(`assets: ${copied} file(s) updated in ${path.relative(process.cwd(), assetsDir)}`);

// The chain LCD spec is generated by scripts/gen-chain-openapi.ts and committed
// under openapi/. Mirror it into public/ the same way the BitBadges spec is, so
// a build needs no chain checkout.
const chainFrom = path.resolve(process.cwd(), 'openapi/chain-openapi.json');
const chainTo = path.join(publicDir, 'chain-openapi.json');
if (await fs.access(chainFrom).then(() => true).catch(() => false)) {
  await fs.mkdir(publicDir, { recursive: true });
  const copied = await copyIfStale(chainFrom, chainTo);
  console.log(`chain openapi: ${copied ? 'copied' : 'already current'} -> ${path.relative(process.cwd(), chainTo)}`);
} else {
  console.log('chain openapi: no committed spec — /chain-api-reference will be empty');
}

// llms.txt is the curated nav-derived index (scripts/gen-llms.ts writes it
// into the content root); for-llms.txt is the full corpus dump, built here so
// nothing has to be committed. Both are served from public/.
const llmsIndex = path.join(docsConfig.contentDir, 'llms.txt');
if (await fs.access(llmsIndex).then(() => true).catch(() => false)) {
  await fs.mkdir(publicDir, { recursive: true });
  await copyIfStale(llmsIndex, path.join(publicDir, 'llms.txt'));
} else {
  console.log('llms: llms.txt is missing from the content root');
}

const corpus = await generateForLlms();
console.log(`for-llms: ${corpus.pages} page(s), ${(corpus.bytes / 1024 / 1024).toFixed(2)} MB`);

const spec = await syncOpenApi();
console.log(spec ? `openapi: copied from ${path.relative(process.cwd(), spec)}` : 'openapi: no spec found — API reference will be empty');

// next.config.ts reads this at build time; see README "Redirects".
const redirects = await loadRedirects(docsConfig.redirectsDir);
await fs.writeFile(path.resolve(process.cwd(), 'redirects.json'), `${JSON.stringify(redirects, null, 2)}\n`);
console.log(`redirects: ${redirects.length} rule(s) from ${path.relative(process.cwd(), docsConfig.redirectsDir)}`);

const records = await buildSearchRecords();
await fs.writeFile(path.join(publicDir, 'search-index.json'), JSON.stringify(records));
console.log(`search: ${records.length} records indexed`);
