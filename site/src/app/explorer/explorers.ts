/**
 * The two block explorers the docs frame.
 *
 * BitBadges runs a Cosmos-side explorer (ping.pub) and an EVM-side explorer;
 * they are separate deployments, so the tab shows one at a time and keeps the
 * choice in the URL. Both are third-party sites — the page frames them, it does
 * not vendor them, and the chrome says so.
 */
export type ExplorerId = 'cosmos' | 'evm';

export type ExplorerTarget = {
  id: ExplorerId;
  /** Label on the sub-tab control. */
  label: string;
  /** Route owned by this sub-tab. */
  route: string;
  /** Page the iframe loads and the "Open in new tab" control targets. */
  url: string;
  /** Host shown in the caption, so the reader can see it is a different site. */
  origin: string;
  title: string;
  description: string;
};

export const EXPLORER_TAB_LABEL = 'Explorer';

export const EXPLORERS: ExplorerTarget[] = [
  {
    id: 'cosmos',
    label: 'Cosmos',
    route: '/explorer/cosmos',
    url: 'https://explorer.bitbadges.io',
    origin: 'explorer.bitbadges.io',
    title: 'Cosmos Explorer',
    description:
      'Browse BitBadges chain blocks, transactions, validators and governance proposals in the Cosmos explorer.',
  },
  {
    id: 'evm',
    label: 'EVM',
    route: '/explorer/evm',
    url: 'https://evm.explorer.bitbadges.io',
    origin: 'evm.explorer.bitbadges.io',
    title: 'EVM Explorer',
    description: 'Browse BitBadges EVM blocks, transactions, contracts and token transfers in the EVM explorer.',
  },
];

export const EXPLORER_ROUTES = EXPLORERS.map((e) => e.route);

/**
 * Minimum sandbox for a framed explorer. Each token earns its place:
 *
 * - `allow-scripts`          both explorers are client-rendered SPAs; without
 *                            it the frame paints nothing at all.
 * - `allow-same-origin`      keeps the frame on its real origin, so its own API
 *                            calls, cookies and localStorage still work. An
 *                            opaque origin breaks every request it makes.
 * - `allow-forms`            the search and address-lookup fields submit forms.
 * - `allow-popups`           explorer rows link out (accounts, IBC counterparties).
 * - `allow-popups-to-escape-sandbox`
 *                            so a tab opened from the frame is a normal tab
 *                            rather than a second sandboxed document.
 *
 * Deliberately absent: `allow-top-navigation*` (a framed site must not be able
 * to navigate the docs page away), `allow-downloads`, `allow-modals`,
 * `allow-pointer-lock`.
 *
 * Note `allow-scripts` + `allow-same-origin` means the frame could remove its
 * own sandbox attribute. That is accepted: these are first-party BitBadges
 * deployments, and the sandbox here limits blast radius, it is not a trust
 * boundary against them.
 */
export const EXPLORER_SANDBOX =
  'allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox';

export function getExplorer(id: ExplorerId): ExplorerTarget {
  const found = EXPLORERS.find((e) => e.id === id);
  if (!found) throw new Error(`Unknown explorer: ${id}`);
  return found;
}
