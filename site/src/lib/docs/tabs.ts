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
};

export const API_REFERENCE_ROUTE = '/api-reference';

/** The `##` group whose pages sit alongside the Scalar API reference. */
const API_TAB_LABEL = 'API';

const LEADING_EMOJI = /^(?:[\p{Extended_Pictographic}\p{Emoji_Component}\uFE0F\u200D]|\s)+/u;

export function stripLeadingEmoji(title: string): string {
  return title.replace(LEADING_EMOJI, '').trim();
}

export function tabsFromNav(groups: NavGroup[]): NavTab[] {
  const tabs: NavTab[] = [];

  for (const group of groups) {
    const routes = flattenNav([group]).map((n) => n.href);
    if (routes.length === 0) continue;
    const label = group.title ? stripLeadingEmoji(group.title) : 'Docs';
    tabs.push({ label, short: label.split(/\s+/)[0], href: routes[0], groups: [group], routes });
  }

  const api = tabs.find((t) => t.label === API_TAB_LABEL);
  if (api) {
    api.routes.push(API_REFERENCE_ROUTE);
  } else {
    tabs.push({
      label: 'API Reference',
      short: 'API',
      href: API_REFERENCE_ROUTE,
      groups: [],
      routes: [API_REFERENCE_ROUTE],
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
 * Index of the tab owning `pathname`: the longest route-prefix match on a
 * segment boundary. The first tab owns `/` and anything no tab claims.
 */
export function activeTabIndex(tabs: NavTab[], pathname: string): number {
  const clean = pathname.replace(/\/+$/, '') || '/';
  let best = 0;
  let bestLength = -1;

  tabs.forEach((tab, index) => {
    for (const route of tab.routes) {
      const length = prefixLength(route, clean);
      if (length > bestLength) {
        best = index;
        bestLength = length;
      }
    }
  });

  return best;
}
