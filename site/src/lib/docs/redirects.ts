/**
 * Redirects for pages that moved during a restructure.
 *
 * Source of truth: tab-separated `old<TAB>new` rows in `_docs/redirects/*.tsv`
 * (one row per line, `#` comments allowed). `sync` merges them into
 * `redirects.json`, which next.config.ts serves as permanent redirects.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { filePathToRoute } from './paths';

export type Redirect = { source: string; destination: string };

/** `learn/x.md`, `/learn/x/`, ` learn/x ` all become `/learn/x`; anchors survive. */
function normalizeRoute(raw: string): string {
  const trimmed = raw.trim();
  const hashIndex = trimmed.indexOf('#');
  const hash = hashIndex === -1 ? '' : trimmed.slice(hashIndex);
  const target = hashIndex === -1 ? trimmed : trimmed.slice(0, hashIndex);
  return `${filePathToRoute(target)}${hash}`;
}

/** Merge the rows of several TSV documents, deduping by source (first wins). */
export function parseRedirects(documents: string[]): Redirect[] {
  const bySource = new Map<string, string>();

  for (const document of documents) {
    for (const line of document.split('\n')) {
      if (!line.trim() || line.trim().startsWith('#')) continue;
      const [rawOld, rawNew] = line.split('\t');
      if (!rawOld?.trim() || !rawNew?.trim()) continue;

      const source = normalizeRoute(rawOld);
      const destination = normalizeRoute(rawNew);
      if (source === destination || bySource.has(source)) continue;
      bySource.set(source, destination);
    }
  }

  return [...bySource].map(([source, destination]) => ({ source, destination }));
}

/** Read and merge every `*.tsv` in `dir`; an absent directory yields no redirects. */
export async function loadRedirects(dir: string): Promise<Redirect[]> {
  const names = await fs.readdir(dir).catch(() => [] as string[]);
  const files = names.filter((n) => n.endsWith('.tsv')).sort();
  const documents = await Promise.all(files.map((n) => fs.readFile(path.join(dir, n), 'utf8')));
  return parseRedirects(documents);
}
