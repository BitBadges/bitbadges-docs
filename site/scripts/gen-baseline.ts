/**
 * Regenerate tests/content-issues.baseline.json from the current corpus.
 * Run after intentionally fixing (or knowingly adding) dead links or images.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { docsConfig } from '../src/lib/docs/config';
import { getAllFiles, getAllRoutes, getDoc } from '../src/lib/docs/content';
import { filePathToRoute } from '../src/lib/docs/paths';

const files = await getAllFiles();
const routes = new Set(await getAllRoutes());
const brokenLinks: string[] = [];
const missingImages: string[] = [];

for (const file of files) {
  const doc = await getDoc(filePathToRoute(file));
  if (!doc) continue;

  for (const match of doc.html.matchAll(/href="(\/[^"#]*)/g)) {
    const route = match[1].replace(/\/$/, '') || '/';
    if (route.startsWith(docsConfig.assetsPrefix)) continue;
    if (!routes.has(route)) brokenLinks.push(`${file} -> ${route}`);
  }

  for (const match of doc.html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    const src = match[1];
    if (!src.startsWith(docsConfig.assetsPrefix)) continue;
    const relative = src
      .slice(docsConfig.assetsPrefix.length + 1)
      .split('/')
      .map(decodeURIComponent)
      .join('/');
    const exists = await fs
      .access(path.join(docsConfig.contentDir, relative))
      .then(() => true)
      .catch(() => false);
    if (!exists) missingImages.push(`${file} -> ${relative}`);
  }
}

const baseline = {
  note: 'Content rot inherited from the GitBook corpus. These links/images are already dead upstream. Shrink this list; never grow it without a reason.',
  brokenLinks: [...new Set(brokenLinks)].sort(),
  missingImages: [...new Set(missingImages)].sort(),
};

await fs.writeFile('tests/content-issues.baseline.json', `${JSON.stringify(baseline, null, 2)}\n`);
console.log(`baseline: ${baseline.brokenLinks.length} broken links, ${baseline.missingImages.length} missing images`);
