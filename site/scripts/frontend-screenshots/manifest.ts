/**
 * The one list every frontend screenshot comes from.
 *
 * Adding a screenshot is one entry here plus one `![...]` reference to the
 * light file in the doc page named by `page`. `bun run screenshots` captures
 * every entry in both themes; `bun run screenshots:check` (and the bun test)
 * verifies the PNGs, the manifest and the doc references agree without opening
 * a browser.
 */

/** Which deployment an entry is captured from. */
export type Base = 'prod' | 'local';

export const BASE_URLS: Record<Base, string> = {
  prod: process.env.DOCS_SHOT_PROD_URL ?? 'https://bitbadges.io',
  local: process.env.DOCS_SHOT_LOCAL_URL ?? 'http://localhost:3000'
};

export const THEMES = ['light', 'dark'] as const;
export type Theme = (typeof THEMES)[number];

/**
 * The docs site pairs `<file>.png` with `<file>--dark.png` by name, so the
 * markdown references only the light file.
 */
export function themedFile(file: string, theme: Theme): string {
  return theme === 'light' ? file : file.replace(/\.png$/, '--dark.png');
}

export function isDarkFile(file: string): boolean {
  return file.endsWith('--dark.png');
}

export type Screenshot = {
  /** Light PNG filename under `.gitbook/assets/frontend/`; the dark twin is derived. */
  file: string;
  /** Frontend route to open, relative to the base URL. */
  route: string;
  /** Repo-relative doc page that embeds the (light) image. */
  page: string;
  /**
   * Deployment to capture from. Default: prod. Use `local` only for a screen
   * that production does not have yet, so the split stays explicit.
   */
  base?: Base;
  /** What the browser session needs before the route renders. Default: public. */
  setup?: 'signed-in';
  /** Text or CSS selector that must be visible before the shot is taken. */
  waitFor?: string;
  /** Text to type into an input once the page is ready. */
  fill?: { selector: string; value: string };
  /** Accessible name of a tab or button to click once the page is ready. */
  click?: string;
  /** Selectors painted over because their content changes run to run. */
  mask?: string[];
  /**
   * Set false for a route that paints its own background in both themes (the
   * landing page); the capture then verifies the theme by the html class only.
   */
  themedPaint?: false;
  fullPage?: boolean;
};

/** Where the PNGs live, relative to the docs repo root. */
export const ASSETS_DIR = '.gitbook/assets/frontend';

/** Address the mock wallet signs as (the public all-`abandon` BIP39 vector). */
export const AGENT_ADDRESS = 'bb19rl4cm2hmr8afy4kldpxz3fka4jguq0ala9wry';

/**
 * Mainnet collection 47, "NFTs": one of the BitBadges team's showcase
 * collections. It has real metadata and artwork, 100 tokens, a Mint approval
 * plus a post-mint transferable approval, trade volume, and no template view
 * that would replace the standard tabs. Picked by reading what
 * bitbadges.io/browse features (2026-09-07).
 */
export const SAMPLE_COLLECTION_ID = '47';

/**
 * Manager and creator of collection 47 (the `trevormil` account). It holds
 * balances in many collections and has transfer history, so the account pages
 * are not empty.
 */
export const SAMPLE_ADDRESS = 'bb18el5ug46umcws58m445ql5scgg2n3tzagfecvl';

/**
 * Mainnet collection 32, "Peer Member": the sample collection has no claim, so
 * the claim-link page uses this one. Its Mint approval carries a merkle
 * challenge (the claim) with 50000 uses, and the collection renders the
 * standard tabs, so the Claim tab appears the way the doc describes.
 */
export const SAMPLE_CLAIM = {
  collectionId: '32',
  claimId: '2a8e8ba9a711d913e698a712a443f6838f78f60b08e8d35df4d713ffc1a64b54',
  approvalId: '5d2307aabcb3d2ed52a96af8cbfb957c52baa3cac4b18c5ef6d27166ad50f9f8'
};

/** Sample ids for dynamic routes. Override per run with env vars. */
export const SAMPLE = {
  collectionId: process.env.DOCS_SHOT_COLLECTION_ID ?? SAMPLE_COLLECTION_ID,
  address: process.env.DOCS_SHOT_ADDRESS ?? SAMPLE_ADDRESS,
  claimCollectionId: process.env.DOCS_SHOT_CLAIM_COLLECTION_ID ?? SAMPLE_CLAIM.collectionId,
  /** A claim link is `/collections/<id>?claimId=<challengeTrackerId>&approvalId=<approvalId>`. */
  claimId: process.env.DOCS_SHOT_CLAIM_ID ?? SAMPLE_CLAIM.claimId,
  approvalId: process.env.DOCS_SHOT_APPROVAL_ID ?? SAMPLE_CLAIM.approvalId,
  /** Typed into the search page; the sample collection's name gives a Collections group. */
  searchQuery: process.env.DOCS_SHOT_SEARCH_QUERY ?? 'NFTs'
};

/** Chrome that changes run to run; painted over on every shot. */
const LIVE_CHROME = [
  // Feedback bubble, bottom right on every page.
  'button[aria-label="Feedback"]',
  // Relative timestamps.
  'time'
];

/** The Swap panel lists live USD prices and 24h changes per asset. */
const LIVE_PRICES = ['text=/\\|\\s*24h/', 'text=/^\\$[0-9][0-9.,]*$/'];

export const SCREENSHOTS: Screenshot[] = [
  { file: 'home.png', route: '/', page: 'using-the-frontend/README.md', mask: LIVE_CHROME, themedPaint: false },
  { file: 'connect.png', route: '/connect', page: 'using-the-frontend/connect-a-wallet.md', mask: LIVE_CHROME },
  {
    file: 'connect-signed-in.png',
    route: '/connect',
    page: 'using-the-frontend/connect-a-wallet.md',
    setup: 'signed-in',
    mask: LIVE_CHROME
  },
  { file: 'browse.png', route: '/browse', page: 'using-the-frontend/browse-and-search.md', mask: [...LIVE_CHROME, ...LIVE_PRICES] },
  {
    file: 'search.png',
    route: '/search',
    page: 'using-the-frontend/browse-and-search.md',
    fill: { selector: 'input[placeholder*="Enter an Address"]', value: SAMPLE.searchQuery },
    mask: LIVE_CHROME
  },
  { file: 'browse-nfts.png', route: '/browse?tab=nfts', page: 'using-the-frontend/browse-and-search.md', mask: LIVE_CHROME },
  {
    file: 'collection-overview.png',
    route: `/collections/${SAMPLE.collectionId}`,
    page: 'using-the-frontend/collection-page.md',
    mask: LIVE_CHROME
  },
  {
    file: 'collection-details.png',
    route: `/collections/${SAMPLE.collectionId}?tab=overview`,
    page: 'using-the-frontend/collection-page.md',
    mask: LIVE_CHROME
  },
  {
    file: 'collection-distribution.png',
    route: `/collections/${SAMPLE.collectionId}?tab=distribution`,
    page: 'using-the-frontend/collection-page.md',
    mask: LIVE_CHROME
  },
  {
    file: 'collection-permissions.png',
    route: `/collections/${SAMPLE.collectionId}?tab=distribution`,
    page: 'using-the-frontend/collection-page.md',
    click: 'Permissions',
    mask: LIVE_CHROME
  },
  // The In-Site / Programmatic Create tab shipped with the dev-first builder
  // (frontend #328) and is not on production yet.
  { file: 'create.png', route: '/create', page: 'using-the-frontend/create-tab-and-in-site-forms.md', base: 'local', mask: LIVE_CHROME },
  {
    file: 'create-programmatic.png',
    route: '/create',
    page: 'using-the-frontend/create-tab-and-in-site-forms.md',
    base: 'local',
    click: 'Programmatic',
    mask: LIVE_CHROME
  },
  {
    file: 'mint-subscriptions.png',
    route: '/mint/subscriptions',
    page: 'using-the-frontend/create-tab-and-in-site-forms.md',
    setup: 'signed-in',
    mask: LIVE_CHROME
  },
  // Same release as the Create tab: the paste-a-code flow is local only.
  {
    file: 'review-and-sign.png',
    route: '/mint/local-builder',
    page: 'using-the-frontend/review-and-sign.md',
    base: 'local',
    setup: 'signed-in',
    mask: LIVE_CHROME
  },
  {
    file: 'developer-portal.png',
    route: '/developer',
    page: 'using-the-frontend/developer-portal.md',
    setup: 'signed-in',
    mask: LIVE_CHROME
  },
  {
    file: 'developer-api-keys.png',
    // Production ignores `?tab=` on the portal's first load; the sidebar click is reliable on both bases.
    route: '/developer',
    page: 'using-the-frontend/developer-portal.md',
    setup: 'signed-in',
    click: 'API Keys',
    mask: LIVE_CHROME
  },
  {
    file: 'developer-claims.png',
    route: '/developer',
    page: 'using-the-frontend/claims-and-distribution.md',
    setup: 'signed-in',
    click: 'Claims',
    mask: LIVE_CHROME
  },
  {
    file: 'account.png',
    route: `/account/${SAMPLE.address}`,
    page: 'using-the-frontend/account-and-balances.md',
    mask: LIVE_CHROME
  },
  {
    file: 'account-activity.png',
    route: `/account/${SAMPLE.address}?tab=activity`,
    page: 'using-the-frontend/account-and-balances.md',
    mask: LIVE_CHROME
  },
  {
    file: 'collection-claim.png',
    route: `/collections/${SAMPLE.claimCollectionId}?claimId=${SAMPLE.claimId}&approvalId=${SAMPLE.approvalId}`,
    page: 'using-the-frontend/claims-and-distribution.md',
    mask: LIVE_CHROME
  }
];
