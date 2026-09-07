/**
 * Top-level tabs derived from the `##` groups of SUMMARY.md.
 *
 * One tab per group; the sidebar, prev/next pagination and the mobile drawer
 * all scope themselves to the active tab. Pure functions over the nav tree so
 * the same answer is available on the server (pagination) and the client
 * (Shell, Sidebar).
 */
import { flattenNav, type NavGroup } from './summary';

export type NavTab = {
  /** Group title with any leading emoji removed. */
  label: string;
  /** First word of the label — what the segmented control shows on phones. */
  short: string;
  /** First internal page of the tab; where the tab link goes. */
  href: string;
  groups: NavGroup[];
  /** Every internal route the tab owns, used for prefix matching. */
  routes: string[];
  /**
   * URL prefixes the tab also owns: the first segment of its href plus a slug
   * of its label. Lets pages that are served but not listed in SUMMARY.md
   * (the api/* sources behind the Scalar reference) still light up their tab.
   */
  prefixes: string[];
};

export const API_REFERENCE_ROUTE = '/api-reference';

/** The second Scalar reference: the chain LCD, owned by the Chain tab. */
export const CHAIN_API_REFERENCE_ROUTE = '/chain-api-reference';

/** The `##` group whose pages sit alongside the Scalar API reference. */
const API_TAB_LABEL = 'API';

/** The `##` group that owns the chain LCD reference. */
const CHAIN_TAB_LABEL = 'Chain';

const LEADING_EMOJI = /^(?:[\p{Extended_Pictographic}\p{Emoji_Component}\uFE0F\u200D]|\s)+/u;

export function stripLeadingEmoji(title: string): string {
  return title.replace(LEADING_EMOJI, '').trim();
}

const slug = (label: string) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** `/api-reference` from `/api-reference/x`, plus `/api` from the label `API`; root contributes nothing. */
function prefixesFor(label: string, href: string): string[] {
  const out: string[] = [];
  const first = href.split('/')[1];
  if (first) out.push(`/${first}`);
  const fromLabel = slug(label);
  if (fromLabel && !out.includes(`/${fromLabel}`)) out.push(`/${fromLabel}`);
  return out;
}

export function tabsFromNav(groups: NavGroup[]): NavTab[] {
  const tabs: NavTab[] = [];

  for (const group of groups) {
    const routes = flattenNav([group]).map((n) => n.href);
    if (routes.length === 0) continue;
    const label = group.title ? stripLeadingEmoji(group.title) : 'Docs';
    const href = routes[0];
    tabs.push({ label, short: label.split(/\s+/)[0], href, groups: [group], routes, prefixes: prefixesFor(label, href) });
  }

  // The chain reference is a Next route, not a markdown page. SUMMARY.md lists
  // it, but claim it here too so the Chain tab still highlights if that line is
  // ever dropped — `/chain-api-reference` is not under the `/chain` prefix.
  const chain = tabs.find((t) => t.label === CHAIN_TAB_LABEL);
  if (chain && !chain.routes.includes(CHAIN_API_REFERENCE_ROUTE)) chain.routes.push(CHAIN_API_REFERENCE_ROUTE);

  const api = tabs.find((t) => t.label === API_TAB_LABEL);
  if (api) {
    if (!api.routes.includes(API_REFERENCE_ROUTE)) api.routes.push(API_REFERENCE_ROUTE);
  } else {
    const label = 'API Reference';
    tabs.push({
      label,
      short: 'API',
      href: API_REFERENCE_ROUTE,
      groups: [],
      routes: [API_REFERENCE_ROUTE],
      prefixes: prefixesFor(label, API_REFERENCE_ROUTE),
    });
  }

  return tabs;
}

function prefixLength(route: string, pathname: string): number {
  if (route === pathname) return route.length;
  if (route === '/') return 0;
  return pathname.startsWith(`${route}/`) ? route.length : -1;
}

/**
 * Index of the tab owning `pathname`: the longest route- or prefix-match on a
 * segment boundary. The first tab owns `/` and anything no tab claims.
 */
export function activeTabIndex(tabs: NavTab[], pathname: string): number {
  const clean = pathname.replace(/\/+$/, '') || '/';
  let best = 0;
  let bestLength = -1;

  tabs.forEach((tab, index) => {
    for (const route of [...tab.routes, ...tab.prefixes]) {
      const length = prefixLength(route, clean);
      if (length > bestLength) {
        best = index;
        bestLength = length;
      }
    }
  });

  return best;
}
