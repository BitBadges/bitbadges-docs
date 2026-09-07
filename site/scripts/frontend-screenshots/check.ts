/**
 * Offline consistency check between the manifest, the PNGs on disk (light and
 * dark twin per entry), and the doc pages that embed them. No browser, no
 * network: safe for CI.
 */
import fs from 'node:fs';
import path from 'node:path';

import { ASSETS_DIR, SCREENSHOTS, THEMES, isDarkFile, themedFile, type Screenshot } from './manifest';

const IMAGE_REF = /\.gitbook\/assets\/frontend\/([A-Za-z0-9._-]+\.png)/g;

/** Every `.gitbook/assets/frontend/*.png` reference in one markdown file. */
export function imageRefs(markdown: string): string[] {
  return [...markdown.matchAll(IMAGE_REF)].map((m) => m[1]);
}

/** Markdown files under the content root, skipping generated and tooling trees. */
function walkMarkdown(root: string, dir = '.'): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['.git', 'node_modules', 'site', '_docs'].includes(entry.name)) continue;
      if (rel === path.join('sdk', 'reference') || rel === path.join('chain', 'proto')) continue;
      out.push(...walkMarkdown(root, rel));
    } else if (entry.name.endsWith('.md')) {
      out.push(rel);
    }
  }
  return out;
}

export type CheckResult = { ok: boolean; problems: string[] };

export function checkScreenshots(contentDir: string, manifest: Screenshot[] = SCREENSHOTS): CheckResult {
  const problems: string[] = [];
  const byFile = new Map<string, Screenshot>();
  const expectedPngs = new Set<string>();

  for (const shot of manifest) {
    if (byFile.has(shot.file)) problems.push(`duplicate manifest entry: ${shot.file}`);
    if (isDarkFile(shot.file)) problems.push(`manifest entry ${shot.file} names the dark twin; list the light file, the dark one is derived`);
    byFile.set(shot.file, shot);
    for (const theme of THEMES) {
      const png = themedFile(shot.file, theme);
      expectedPngs.add(png);
      if (!fs.existsSync(path.join(contentDir, ASSETS_DIR, png))) {
        problems.push(`missing ${theme} PNG ${png} for manifest entry ${shot.file} (run: bun run screenshots -- ${shot.file})`);
      }
    }
    const pagePath = path.join(contentDir, shot.page);
    if (!fs.existsSync(pagePath)) {
      problems.push(`manifest entry ${shot.file} names a doc page that does not exist: ${shot.page}`);
    } else if (!imageRefs(fs.readFileSync(pagePath, 'utf8')).includes(shot.file)) {
      problems.push(`${shot.page} does not embed ${shot.file} (manifest says it should)`);
    }
  }

  for (const rel of walkMarkdown(contentDir)) {
    for (const file of imageRefs(fs.readFileSync(path.join(contentDir, rel), 'utf8'))) {
      if (isDarkFile(file)) problems.push(`${rel} references ${file} directly; reference the light file, the site pairs the dark twin`);
      else if (!byFile.has(file)) problems.push(`${rel} references ${file}, which is not in the manifest`);
    }
  }

  const assetsDir = path.join(contentDir, ASSETS_DIR);
  if (fs.existsSync(assetsDir)) {
    for (const name of fs.readdirSync(assetsDir)) {
      if (name.endsWith('.png') && !expectedPngs.has(name)) problems.push(`orphan PNG not in the manifest: ${ASSETS_DIR}/${name}`);
    }
  }

  return { ok: problems.length === 0, problems };
}
