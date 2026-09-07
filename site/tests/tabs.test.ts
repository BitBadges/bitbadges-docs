import { describe, expect, test } from 'bun:test';
import { parseSummary } from '../src/lib/docs/summary';
import { activeTabIndex, tabsFromNav, minimalRoutes } from '../src/lib/docs/tabs';

const NEW_SUMMARY = `# Table of contents

## 📘 Docs

* [Welcome](README.md)
* [Quickstart](start/quickstart.md)
* [Guides](guides/README.md)
  * [Create a collection](guides/create-a-collection.md)

## 🏗️ Token Standard

* [Overview](token-standard/README.md)
* [Messages](token-standard/messages/README.md)

## 🔌 API

* [Overview](api/README.md)
* [Claims](api/claims.md)

## 🧰 SDK & CLI

* [SDK](sdk/README.md)
* [CLI](cli/README.md)

## 🤖 Agents

* [Discord](https://discord.gg/bitbadges)
* [Install](agents/README.md)
`;

const OLD_SUMMARY = `# Table of contents

## Overview

* [Overview](README.md)
* [Use Cases](overview/use-cases.md)

## ⌨️ For Developers

* [Getting Started](for-developers/getting-started.md)
  * [Standard API Reference](https://bitbadges.stoplight.io/docs/bitbadges)
`;

describe('tabsFromNav — restructured SUMMARY', () => {
  const tabs = tabsFromNav(parseSummary(NEW_SUMMARY));

  test('one tab per ## group, emoji stripped from the label', () => {
    expect(tabs.map((t) => t.label)).toEqual(['Docs', 'Token Standard', 'API', 'SDK & CLI', 'Agents']);
  });

  test('short label is the first word', () => {
    expect(tabs.map((t) => t.short)).toEqual(['Docs', 'Token', 'API', 'SDK', 'Agents']);
  });

  test('href is the first internal page of the group, skipping external links', () => {
    expect(tabs.map((t) => t.href)).toEqual(['/', '/token-standard', '/api', '/sdk', '/agents']);
  });

  test('each tab carries only its own groups', () => {
    expect(tabs[1].groups.map((g) => g.title)).toEqual(['🏗️ Token Standard']);
    expect(tabs[3].groups.flatMap((g) => g.items.map((i) => i.href))).toEqual(['/sdk', '/cli']);
  });

  test('/api-reference belongs to the API tab and is not a separate tab', () => {
    expect(tabs.some((t) => t.href === '/api-reference')).toBe(false);
    expect(tabs[2].routes).toContain('/api-reference');
    expect(tabs[0].routes).not.toContain('/api-reference');
  });

  test('routes are the minimal covering set for the tab', () => {
    // Descendants are dropped: `activeTabIndex` matches by longest prefix, so
    // `/guides` already claims `/guides/create-a-collection`.
    expect(tabs[0].routes).toEqual(['/', '/start/quickstart', '/guides']);
  });
});

describe('tabsFromNav — legacy SUMMARY without an API group', () => {
  const tabs = tabsFromNav(parseSummary(OLD_SUMMARY));

  test('appends the API reference as its own trailing tab', () => {
    expect(tabs.map((t) => t.label)).toEqual(['Overview', 'For Developers', 'API Reference']);
    expect(tabs.at(-1)).toMatchObject({ href: '/api-reference', short: 'API', groups: [], routes: ['/api-reference'] });
  });
});

describe('activeTabIndex', () => {
  const tabs = tabsFromNav(parseSummary(NEW_SUMMARY));

  test('exact page match', () => {
    expect(activeTabIndex(tabs, '/token-standard/messages')).toBe(1);
    expect(activeTabIndex(tabs, '/cli')).toBe(3);
  });

  test('longest prefix wins for pages that are not in the nav', () => {
    expect(activeTabIndex(tabs, '/token-standard/messages/msg-create-collection')).toBe(1);
    expect(activeTabIndex(tabs, '/agents/anything/deep')).toBe(4);
  });

  test('the API reference route activates the API tab', () => {
    expect(activeTabIndex(tabs, '/api-reference')).toBe(2);
  });

  test('root and unowned pages fall back to the first tab', () => {
    expect(activeTabIndex(tabs, '/')).toBe(0);
    expect(activeTabIndex(tabs, '/nowhere/else')).toBe(0);
  });

  test('a prefix match must land on a segment boundary', () => {
    // "/api" must not claim "/apis-are-great".
    expect(activeTabIndex(tabs, '/apis-are-great')).toBe(0);
  });

  test('legacy nav: the trailing API Reference tab is active on its route', () => {
    const legacy = tabsFromNav(parseSummary(OLD_SUMMARY));
    expect(activeTabIndex(legacy, '/api-reference')).toBe(2);
    expect(activeTabIndex(legacy, '/for-developers/getting-started')).toBe(1);
  });
});

/** The restructured API group: Scalar is the whole tab, api/* pages are unlisted but still served. */
const SCALAR_SUMMARY = `# Table of contents

## 📘 Docs

* [Welcome](README.md)
* [Guides](guides/README.md)

## 🔌 API

* [OpenAPI reference](/api-reference)

## 🧰 SDK & CLI

* [SDK](sdk/README.md)
`;

describe('tabs — API tab owns its URL prefix', () => {
  const tabs = tabsFromNav(parseSummary(SCALAR_SUMMARY));
  const api = tabs.findIndex((t) => t.label === 'API');

  test('the API tab links straight to the Scalar reference', () => {
    expect(api).toBe(1);
    expect(tabs[api].href).toBe('/api-reference');
    expect(tabs[api].routes).toEqual(['/api-reference']);
  });

  test('every tab owns the prefixes derived from its label and first href', () => {
    expect(tabs[api].prefixes).toEqual(['/api-reference', '/api']);
    expect(tabs[2].prefixes).toEqual(['/sdk', '/sdk-cli']);
    expect(tabs[0].prefixes).toEqual(['/docs']);
  });

  test('an unlisted api/* page still activates the API tab, not Docs', () => {
    expect(activeTabIndex(tabs, '/api')).toBe(api);
    expect(activeTabIndex(tabs, '/api/claims/endpoints')).toBe(api);
    expect(activeTabIndex(tabs, '/api/sign-in/callback')).toBe(api);
    expect(activeTabIndex(tabs, '/api-reference')).toBe(api);
  });

  test('a prefix match still needs a segment boundary', () => {
    expect(activeTabIndex(tabs, '/apis-are-great')).toBe(0);
    expect(activeTabIndex(tabs, '/sdk/types')).toBe(2);
  });

  test('legacy nav: the appended API Reference tab owns /api-reference only', () => {
    const legacy = tabsFromNav(parseSummary(OLD_SUMMARY));
    expect(legacy.at(-1)!.prefixes).toEqual(['/api-reference']);
  });
});

describe('minimalRoutes', () => {
  test('drops routes an ancestor in the same tab already covers', () => {
    expect(
      minimalRoutes(['/sdk', '/sdk/reference', '/sdk/reference/classes/a', '/sdk/reference/classes/b', '/cli']),
    ).toEqual(['/sdk', '/cli']);
  });

  test('keeps siblings that share only a prefix string, not a path segment', () => {
    expect(minimalRoutes(['/api', '/api-reference'])).toEqual(['/api', '/api-reference']);
  });

  test('root never swallows the rest of the tab', () => {
    expect(minimalRoutes(['/', '/guides', '/about'])).toEqual(['/', '/guides', '/about']);
  });

  test('preserves nav order and dedupes', () => {
    expect(minimalRoutes(['/b', '/a', '/b'])).toEqual(['/b', '/a']);
  });
});
