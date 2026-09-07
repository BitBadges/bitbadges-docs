/**
 * End-to-end gate over the real corpus. Synthetic unit tests prove the pieces;
 * this proves the actual 340+ pages render without leaking GitBook syntax,
 * without dangling internal links, and without broken images.
 */
import { describe, expect, test } from 'bun:test';
import fs from 'node:fs/promises';
import path from 'node:path';

import baseline from './content-issues.baseline.json' with { type: 'json' };
import { docsConfig } from '../src/lib/docs/config';
import { getAllFiles, getAllRoutes, getDoc, getNav } from '../src/lib/docs/content';
import { flattenNav } from '../src/lib/docs/summary';
import { tabsFromNav } from '../src/lib/docs/tabs';

// Corpus-size floors. They catch a walk that silently drops a directory, not
// the exact count; raise them after the docs restructure lands (the new tree
// has fewer, denser pages and a shorter SUMMARY.md).
const MIN_PAGES = 200;
const MIN_NAV_ENTRIES = 200;

/** Issues present now but absent from the recorded baseline. */
function newIssues(found: string[], recorded: string[]): string[] {
  const known = new Set(recorded);
  return [...new Set(found)].filter((issue) => !known.has(issue)).sort();
}

const rendered = await (async () => {
  const files = await getAllFiles();
  const docs = await Promise.all(
    files.map(async (file) => {
      const doc = await getDoc((await import('../src/lib/docs/paths')).filePathToRoute(file));
      return { file, doc };
    }),
  );
  return docs;
})();

describe('corpus', () => {
  test('discovers the full set of pages', () => {
    expect(rendered.length).toBeGreaterThan(MIN_PAGES);
    expect(rendered.every((r) => r.doc !== null)).toBe(true);
  });

  test('every page produces a non-empty title', () => {
    const untitled = rendered.filter((r) => !r.doc!.title.trim());
    expect(untitled.map((r) => r.file)).toEqual([]);
  });

  test('no page leaks GitBook liquid syntax into the html', () => {
    const leaking = rendered.filter((r) => /\{%|%\}/.test(r.doc!.html)).map((r) => r.file);
    expect(leaking).toEqual([]);
  });

  test('no page leaks an unprocessed directive marker', () => {
    const leaking = rendered.filter((r) => /<p>:::/.test(r.doc!.html)).map((r) => r.file);
    expect(leaking).toEqual([]);
  });

  test('no rendered link still points at a raw .md file', () => {
    const offenders: string[] = [];
    for (const { file, doc } of rendered) {
      for (const match of doc!.html.matchAll(/href="([^"]+)"/g)) {
        const href = match[1];
        if (href.startsWith('http') || href.startsWith('mailto:')) continue;
        if (/\.md(#|$)/i.test(href)) offenders.push(`${file} -> ${href}`);
      }
    }
    expect(offenders).toEqual([]);
  });

  test('no internal link breakage beyond the recorded baseline', async () => {
    // /api-reference is a Next route (Scalar), not a markdown page, so it is not in getAllRoutes().
    const routes = new Set([...(await getAllRoutes()), '/api-reference']);
    const broken: string[] = [];
    for (const { file, doc } of rendered) {
      for (const match of doc!.html.matchAll(/href="(\/[^"#]*)/g)) {
        const route = match[1].replace(/\/$/, '') || '/';
        if (route.startsWith(docsConfig.assetsPrefix)) continue;
        if (!routes.has(route)) broken.push(`${file} -> ${route}`);
      }
    }
    // These links are dead in the source markdown and 404 on GitBook today.
    // The baseline freezes the inherited rot; anything new fails the build.
    expect(newIssues(broken, baseline.brokenLinks)).toEqual([]);
  });

  test('no missing image beyond the recorded baseline', async () => {
    const missing: string[] = [];
    for (const { file, doc } of rendered) {
      for (const match of doc!.html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
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
        if (!exists) missing.push(`${file} -> ${relative}`);
      }
    }
    expect(newIssues(missing, baseline.missingImages)).toEqual([]);
  });
});

describe('navigation', () => {
  test('SUMMARY.md yields the expected shape', async () => {
    const nav = await getNav();
    expect(nav.length).toBeGreaterThan(3);
    expect(flattenNav(nav).length).toBeGreaterThan(MIN_NAV_ENTRIES);
  });

  test('every internal nav entry resolves to a real page', async () => {
    const routes = new Set([...(await getAllRoutes()), '/api-reference']);
    const dangling = flattenNav(await getNav())
      .map((n) => n.href)
      .filter((href) => !routes.has(href));
    expect(dangling).toEqual([]);
  });

  test('prev/next stays inside the tab: the last page of the first tab has no next', async () => {
    const tabs = tabsFromNav(await getNav());
    const first = flattenNav(tabs[0].groups);
    const second = flattenNav(tabs[1].groups);
    expect(second.length).toBeGreaterThan(0);

    const last = await getDoc(first.at(-1)!.href);
    expect(last!.next).toBeNull();
    const head = await getDoc(second[0].href);
    expect(head!.prev).toBeNull();
  });

  test('prev/next chain is wired for a page in the middle of the nav', async () => {
    const order = flattenNav(await getNav());
    const middle = order[Math.floor(order.length / 2)];
    const doc = await getDoc(middle.href);
    expect(doc).not.toBeNull();
    expect(doc!.prev).not.toBeNull();
    expect(doc!.next).not.toBeNull();
  });
});

describe('corpus exclusions', () => {
  test('the navigation file is not served as a documentation page', async () => {
    const routes = await getAllRoutes();
    expect(routes).not.toContain('/SUMMARY');
    expect(await getDoc('/SUMMARY')).toBeNull();
  });

  test('repo-internal docs are not served', async () => {
    const routes = await getAllRoutes();
    expect(routes.filter((r) => r.startsWith('/_docs'))).toEqual([]);
  });
});
