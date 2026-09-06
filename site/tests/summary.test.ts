import { describe, expect, test } from 'bun:test';
import { parseSummary, flattenNav } from '../src/lib/docs/summary';

const SAMPLE = `# Table of contents

## Overview

* [👋 BitBadges Overview](README.md)
* [🎨 Use Cases](overview/use-cases.md)

## 🏗️ Token Standard

* [📚 Overview](x-tokenization/README.md)
* [🎓 Learn](learn/README.md)
  * [Explore!](learn/pre-readings.md)
  * [Balances](token-standard/learn/balance-system.md)
* [📚 BitBadges API](for-developers/bitbadges-api/README.md)
  * [Standard API Reference](https://bitbadges.stoplight.io/docs/bitbadges)
  * [Concepts](for-developers/bitbadges-api/concepts/README.md)
    * [Managing Views](for-developers/bitbadges-api/concepts/managing-views.md)
`;

describe('parseSummary', () => {
  const groups = parseSummary(SAMPLE);

  test('splits into the ## groups and drops the page title', () => {
    expect(groups.map((g) => g.title)).toEqual(['Overview', '🏗️ Token Standard']);
  });

  test('keeps emoji and text in item titles', () => {
    expect(groups[0].items[0].title).toBe('👋 BitBadges Overview');
  });

  test('maps README entries to directory routes and root to /', () => {
    expect(groups[0].items[0].href).toBe('/');
    expect(groups[1].items[0].href).toBe('/x-tokenization');
  });

  test('nests two-space indented children under their parent', () => {
    const learn = groups[1].items[1];
    expect(learn.title).toBe('🎓 Learn');
    expect(learn.children.map((c) => c.title)).toEqual(['Explore!', 'Balances']);
  });

  test('nests a third level under its second-level parent', () => {
    const api = groups[1].items[2];
    const concepts = api.children.find((c) => c.title === 'Concepts');
    expect(concepts?.children.map((c) => c.href)).toEqual(['/for-developers/bitbadges-api/concepts/managing-views']);
  });

  test('marks http entries external and preserves the url verbatim', () => {
    const api = groups[1].items[2];
    const ref = api.children[0];
    expect(ref.external).toBe(true);
    expect(ref.href).toBe('https://bitbadges.stoplight.io/docs/bitbadges');
  });

  test('marks internal entries as not external', () => {
    expect(groups[0].items[1].external).toBe(false);
  });
});

describe('flattenNav', () => {
  test('returns internal pages in reading order for prev/next', () => {
    const order = flattenNav(parseSummary(SAMPLE)).map((n) => n.href);
    expect(order).toEqual([
      '/',
      '/overview/use-cases',
      '/x-tokenization',
      '/learn',
      '/learn/pre-readings',
      '/token-standard/learn/balance-system',
      '/for-developers/bitbadges-api',
      '/for-developers/bitbadges-api/concepts',
      '/for-developers/bitbadges-api/concepts/managing-views',
    ]);
  });

  test('excludes external entries from the reading order', () => {
    expect(flattenNav(parseSummary(SAMPLE)).some((n) => n.external)).toBe(false);
  });
});
