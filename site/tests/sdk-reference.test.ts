/**
 * Gate over the generated SDK reference (`sdk/reference/`).
 *
 * The tree is committed content, so these run against the real files rather
 * than regenerating — regeneration needs a bitbadgesjs checkout and ~20s of
 * TypeDoc. If the tree is missing, every test skips with a pointer at the
 * command that produces it.
 */
import { describe, expect, test } from 'bun:test';
import fs from 'node:fs/promises';
import path from 'node:path';

import { docsConfig } from '../src/lib/docs/config';

const referenceDir = path.join(docsConfig.contentDir, 'sdk/reference');

const MISSING = 'sdk/reference/ is not generated — run `BITBADGESJS_DIR=../../bitbadgesjs bun run gen:sdk` from site/';

async function walk(dir: string, base = ''): Promise<string[]> {
  const entries = await fs.readdir(path.join(dir, base), { withFileTypes: true });
  const out: string[] = [];
  for (const entry of entries) {
    const relative = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) out.push(...(await walk(dir, relative)));
    else if (entry.name.endsWith('.md')) out.push(relative);
  }
  return out.sort();
}

const pages = await (async () => {
  const exists = await fs.stat(referenceDir).then((s) => s.isDirectory()).catch(() => false);
  if (!exists) return null;
  const files = await walk(referenceDir);
  return Promise.all(
    files.map(async (file) => ({ file, source: await fs.readFile(path.join(referenceDir, file), 'utf8') })),
  );
})();

if (pages === null) console.warn(`[skip] sdk reference tests: ${MISSING}`);

describe.skipIf(pages === null)(`sdk reference${pages === null ? ` — SKIPPED: ${MISSING}` : ''}`, () => {
  test('covers the SDK surface, not a handful of pages', () => {
    expect(pages!.length).toBeGreaterThan(50);
  });

  test('every page carries a one-line description in frontmatter', () => {
    const offenders = pages!
      .filter(({ source }) => {
        const frontmatter = /^---\n([\s\S]*?)\n---\n/.exec(source);
        if (!frontmatter) return true;
        const description = /^description:\s*(.+)$/m.exec(frontmatter[1])?.[1]?.trim();
        // JSON-quoted single line with real prose behind it.
        return !description || description === '""' || !/[A-Za-z]/.test(description);
      })
      .map(({ file }) => file);
    expect(offenders).toEqual([]);
  });

  test('every page has exactly one H1, and it opens the body', () => {
    const offenders: string[] = [];
    for (const { file, source } of pages!) {
      const body = source.replace(/^---\n[\s\S]*?\n---\n/, '');
      const outsideCode = body.replace(/^```[\s\S]*?^```/gm, '');
      const h1s = outsideCode.match(/^#\s+\S/gm) ?? [];
      if (h1s.length !== 1) offenders.push(`${file} (${h1s.length} h1)`);
      else if (!/^\s*#\s+\S/.test(outsideCode)) offenders.push(`${file} (h1 is not the first block)`);
    }
    expect(offenders).toEqual([]);
  });

  test('no page still points at the retired github.io reference', () => {
    const offenders = pages!.filter(({ source }) => source.includes('bitbadges.github.io')).map(({ file }) => file);
    expect(offenders).toEqual([]);
  });

  test('internal links are site routes, never raw .md paths', () => {
    const offenders: string[] = [];
    for (const { file, source } of pages!) {
      for (const [, href] of source.matchAll(/\]\(([^)\s]+)\)/g)) {
        if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('#')) continue;
        if (/\.md(#|$)/i.test(href)) offenders.push(`${file} -> ${href}`);
      }
    }
    expect(offenders).toEqual([]);
  });

  test('every in-tree link resolves to a page that exists', () => {
    const routes = new Set(
      pages!.map(({ file }) => {
        const segments = file.replace(/\.md$/, '').split('/');
        if (segments.at(-1)!.toLowerCase() === 'readme') segments.pop();
        return segments.length ? `/sdk/reference/${segments.join('/')}` : '/sdk/reference';
      }),
    );

    const broken: string[] = [];
    for (const { file, source } of pages!) {
      for (const [, href] of source.matchAll(/\]\((\/sdk\/reference[^)\s]*)\)/g)) {
        const route = href.split('#')[0].replace(/\/$/, '');
        if (!routes.has(route)) broken.push(`${file} -> ${href}`);
      }
    }
    expect(broken).toEqual([]);
  });

  test.each(['classes/bit-badges-api.md', 'classes/bit-badges-signing-client.md', 'classes/msg-transfer-tokens.md'])(
    'documents %s',
    (file) => {
      const page = pages!.find((p) => p.file === file);
      expect(page).toBeDefined();
      expect(page!.source.length).toBeGreaterThan(500);
    },
  );

  test('the root index warns the tree is generated', () => {
    const readme = pages!.find((p) => p.file === 'README.md');
    expect(readme).toBeDefined();
    expect(readme!.source).toContain('gen-sdk-reference.ts');
    expect(readme!.source).toContain('Do not hand-edit');
  });

  test('every nav group listed in SUMMARY.md has an index page', () => {
    const groups = ['classes', 'interfaces', 'functions', 'type-aliases', 'variables', 'enumerations'];
    const missing = groups.filter((group) => !pages!.some((p) => p.file === `${group}/README.md`));
    expect(missing).toEqual([]);
  });
});
