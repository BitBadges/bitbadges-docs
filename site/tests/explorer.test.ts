/**
 * The Explorer tab frames two third-party sites inside the docs shell. The
 * risk is not rendering — it is the wiring: the tab must own both routes, the
 * links must point at the right explorer, and the iframe sandbox must stay
 * narrow enough that a framed site cannot navigate the docs page away.
 */
import { describe, expect, test } from 'bun:test';

import {
  EXPLORERS,
  EXPLORER_ROUTES,
  EXPLORER_SANDBOX,
  EXPLORER_TAB_LABEL,
  getExplorer,
} from '../src/app/explorer/explorers';
import { getNav } from '../src/lib/docs/content';
import { activeTabIndex, tabsFromNav } from '../src/lib/docs/tabs';

describe('explorer targets', () => {
  test('exposes exactly the cosmos and evm explorers, in that order', () => {
    expect(EXPLORERS.map((e) => e.id)).toEqual(['cosmos', 'evm']);
    expect(EXPLORER_ROUTES).toEqual(['/explorer/cosmos', '/explorer/evm']);
  });

  test('each target points at its own https origin and shows that origin to the reader', () => {
    for (const explorer of EXPLORERS) {
      const url = new URL(explorer.url);
      expect(url.protocol).toBe('https:');
      expect(url.hostname.endsWith('bitbadges.io')).toBe(true);
      // The caption exists so a reader can tell this is a different site; it
      // has to be the site actually framed, not a hand-typed label.
      expect(explorer.origin).toBe(url.host);
    }
  });

  test('the two targets are distinct sites', () => {
    expect(EXPLORERS[0].url).not.toBe(EXPLORERS[1].url);
    expect(new Set(EXPLORERS.map((e) => e.origin)).size).toBe(2);
  });

  test('getExplorer resolves by id and rejects an unknown one', () => {
    expect(getExplorer('evm').route).toBe('/explorer/evm');
    // @ts-expect-error — guarding the runtime path, not the type-checked one.
    expect(() => getExplorer('solana')).toThrow();
  });
});

describe('iframe sandbox', () => {
  const tokens = EXPLORER_SANDBOX.split(' ');

  test('grants only the permissions a framed explorer needs', () => {
    expect(tokens.sort()).toEqual(
      ['allow-forms', 'allow-popups', 'allow-popups-to-escape-sandbox', 'allow-same-origin', 'allow-scripts'].sort(),
    );
  });

  test('never lets the framed site navigate the docs page away', () => {
    expect(tokens).not.toContain('allow-top-navigation');
    expect(tokens).not.toContain('allow-top-navigation-by-user-activation');
  });

  test('never grants downloads, modals or pointer lock', () => {
    expect(tokens).not.toContain('allow-downloads');
    expect(tokens).not.toContain('allow-modals');
    expect(tokens).not.toContain('allow-pointer-lock');
  });
});

const tabs = tabsFromNav(await getNav());

describe('Explorer tab wiring', () => {

  test('SUMMARY.md yields an Explorer tab owning both explorer routes', () => {
    const tab = tabs.find((t) => t.label === EXPLORER_TAB_LABEL);
    expect(tab).toBeDefined();
    expect(tab!.routes).toEqual(EXPLORER_ROUTES);
    expect(tab!.href).toBe('/explorer/cosmos');
  });

  test('both explorer routes light up the Explorer tab, and only that tab', () => {
    const index = tabs.findIndex((t) => t.label === EXPLORER_TAB_LABEL);
    for (const route of EXPLORER_ROUTES) {
      expect(activeTabIndex(tabs, route)).toBe(index);
    }
    // The bare /explorer redirect target resolves to the same tab.
    expect(activeTabIndex(tabs, '/explorer')).toBe(index);
  });

  test('the Explorer tab does not swallow another tab\'s routes', () => {
    const index = tabs.findIndex((t) => t.label === EXPLORER_TAB_LABEL);
    expect(activeTabIndex(tabs, '/api-reference')).not.toBe(index);
    expect(activeTabIndex(tabs, '/chain-api-reference')).not.toBe(index);
  });
});
