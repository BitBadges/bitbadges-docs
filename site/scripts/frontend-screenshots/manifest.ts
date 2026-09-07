/**
 * The one list every frontend screenshot comes from.
 *
 * Adding a screenshot is one entry here plus one `![...]` reference in the doc
 * page named by `page`. `bun run screenshots` captures every entry;
 * `bun run screenshots:check` (and the bun test) verifies the PNGs, the manifest
 * and the doc references agree without opening a browser.
 */

export type Screenshot = {
  /** PNG filename under `.gitbook/assets/frontend/`. */
  file: string;
  /** Frontend route to open, relative to the app base URL. */
  route: string;
  /** Repo-relative doc page that embeds the image. */
  page: string;
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
  fullPage?: boolean;
};

/** Where the PNGs live, relative to the docs repo root. */
export const ASSETS_DIR = '.gitbook/assets/frontend';

/** Address the mock wallet signs as (the public all-`abandon` BIP39 vector). */
export const AGENT_ADDRESS = 'bb19rl4cm2hmr8afy4kldpxz3fka4jguq0ala9wry';

/** Sample ids for dynamic routes. Override per run with env vars. */
export const SAMPLE = {
  collectionId: process.env.DOCS_SHOT_COLLECTION_ID ?? '1',
  address: process.env.DOCS_SHOT_ADDRESS ?? AGENT_ADDRESS,
  /** A claim link is `/collections/<id>?claimId=<challengeTrackerId>&approvalId=<approvalId>`. */
  claimId: process.env.DOCS_SHOT_CLAIM_ID ?? 'd98822e75741c09a2317c3effbe8bdd38c3194ff2d068bedd21cc3c201f78773',
  approvalId: process.env.DOCS_SHOT_APPROVAL_ID ?? 'edaac8f198d4193bbfc1c5cfe826518d71c5d24b484a2a68507ce8c214779202'
};

/** Chrome that reports live chain state; painted over on every shot. */
const LIVE_CHROME = ['[data-testid="block-height"]', 'time'];

export const SCREENSHOTS: Screenshot[] = [
  { file: 'home.png', route: '/', page: 'using-the-frontend/README.md', mask: LIVE_CHROME },
  { file: 'connect.png', route: '/connect', page: 'using-the-frontend/connect-a-wallet.md', mask: LIVE_CHROME },
  {
    file: 'connect-signed-in.png',
    route: '/connect',
    page: 'using-the-frontend/connect-a-wallet.md',
    setup: 'signed-in',
    mask: LIVE_CHROME
  },
  { file: 'browse.png', route: '/browse', page: 'using-the-frontend/browse-and-search.md', mask: LIVE_CHROME },
  {
    file: 'search.png',
    route: '/search',
    page: 'using-the-frontend/browse-and-search.md',
    fill: { selector: 'input[placeholder*="Enter an Address"]', value: SAMPLE.collectionId },
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
  { file: 'create.png', route: '/create', page: 'using-the-frontend/create-tab-and-in-site-forms.md', mask: LIVE_CHROME },
  {
    file: 'create-programmatic.png',
    route: '/create',
    page: 'using-the-frontend/create-tab-and-in-site-forms.md',
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
  {
    file: 'review-and-sign.png',
    route: '/mint/local-builder',
    page: 'using-the-frontend/review-and-sign.md',
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
    route: '/developer?tab=apiKeys',
    page: 'using-the-frontend/developer-portal.md',
    setup: 'signed-in',
    mask: LIVE_CHROME
  },
  {
    file: 'developer-claims.png',
    route: '/developer?tab=claims',
    page: 'using-the-frontend/claims-and-distribution.md',
    setup: 'signed-in',
    mask: LIVE_CHROME
  },
  {
    file: 'account.png',
    route: `/account/${SAMPLE.address}`,
    page: 'using-the-frontend/account-and-balances.md',
    setup: 'signed-in',
    mask: LIVE_CHROME
  },
  {
    file: 'account-activity.png',
    route: `/account/${SAMPLE.address}?tab=activity`,
    page: 'using-the-frontend/account-and-balances.md',
    setup: 'signed-in',
    mask: LIVE_CHROME
  },
  {
    file: 'collection-claim.png',
    route: `/collections/${SAMPLE.collectionId}?claimId=${SAMPLE.claimId}&approvalId=${SAMPLE.approvalId}`,
    page: 'using-the-frontend/claims-and-distribution.md',
    mask: LIVE_CHROME
  }
];
