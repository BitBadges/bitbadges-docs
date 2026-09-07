/**
 * Build the single-file corpus dump that agents fetch at /for-llms.txt.
 *
 * This used to be a committed 1.6 MB file that a workflow rewrote and pushed
 * back to master on every content change. That fought the repo's own rules
 * (master forbids direct pushes) and left the file stale whenever the push
 * failed. It is a build artifact, so it is built: `bun run sync` calls this and
 * writes straight into public/, and nothing is committed.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { docsConfig } from '../src/lib/docs/config';
import { getAllFiles } from '../src/lib/docs/content';

/**
 * Generated reference trees are excluded. `sdk/reference` alone is 1647 pages
 * of TypeDoc and would dwarf the hand-written corpus; both are browsable and
 * indexed on the site, and llms.txt points at them.
 */
const EXCLUDED = /^(sdk\/reference|chain\/proto)\//;

export function renderCorpus(entries: { file: string; body: string }[]): string {
  const header = [
    '# BitBadges documentation, every page in one file',
    `# Generated from the corpus at build time. Page count: ${entries.length}.`,
    '# The SDK reference (/sdk/reference) and proto schema (/chain/proto) are',
    '# generated separately and excluded here; browse them on the site.',
    '',
  ].join('\n');

  const body = entries
    .map(({ file, body }) => `\n\n## File: ${file}\n\n${body.trim()}\n`)
    .join('');

  return `${header}${body}`;
}

export async function generate(): Promise<{ pages: number; bytes: number }> {
  const files = (await getAllFiles()).filter((file) => !EXCLUDED.test(file));
  const entries = await Promise.all(
    files.sort().map(async (file) => ({
      file,
      body: await fs.readFile(path.join(docsConfig.contentDir, file), 'utf8'),
    })),
  );

  const text = renderCorpus(entries);
  // `llms-full.txt` is the name the llms.txt convention uses for the full dump;
  // `for-llms.txt` predates it and stays so existing links keep working.
  const target = path.resolve(process.cwd(), 'public', 'for-llms.txt');
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, text);
  await fs.writeFile(path.resolve(process.cwd(), 'public', 'llms-full.txt'), text);
  return { pages: entries.length, bytes: Buffer.byteLength(text) };
}

if (import.meta.main) {
  const { pages, bytes } = await generate();
  console.log(`for-llms: ${pages} page(s), ${(bytes / 1024 / 1024).toFixed(2)} MB -> public/for-llms.txt`);
}
