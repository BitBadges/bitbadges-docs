# Frontend screenshots

The `using-the-frontend/` pages embed captured screenshots of bitbadges.io.
Every entry in `manifest.ts` produces two PNGs under
`.gitbook/assets/frontend/`: `<file>.png` (light) and `<file>--dark.png`
(dark). Markdown references only the light file; the docs site pairs the dark
twin by name and shows the one that matches the reader's theme.

## Prerequisites

- A `bitbadges-frontend` checkout with `bun install` done. Playwright, its
  Chromium, and the mock-wallet harness (`src/__tests__/playwright/agent/`)
  load from there; the docs repo has no browser dependency. Default location:
  a sibling directory of this repo. Override with `BITBADGES_FRONTEND_DIR`.
- Network access to `https://bitbadges.io` for `base: 'prod'` entries (the
  default).
- The frontend dev server on `http://localhost:3000` for `base: 'local'`
  entries, with an indexer it can sign in against. Override the URL with
  `DOCS_SHOT_LOCAL_URL` (and `DOCS_SHOT_PROD_URL` for production).
- macOS for the automatic downscale of PNGs over 400 KB (`sips`). On another
  OS the script prints a warning and leaves the file as is.

Signed-in entries sign in with the harness's default unfunded mnemonic (the
all-`abandon` BIP39 vector). Signing a sign-in challenge is harmless and the
account holds nothing, so those screens show an empty portal. No real
credentials are involved anywhere.

## Run

```bash
cd site
bun run screenshots                 # every entry, light and dark
bun run screenshots -- home.png     # one entry, both themes
bun run screenshots:check           # offline: manifest, PNGs, doc references
bun test tests/frontend-screenshots.test.ts
```

`screenshots:check` and the test fail when either theme's PNG is missing,
when a page references a `--dark` file directly, when a page embeds a PNG the
manifest does not list, or when a PNG in the folder is not in the manifest.

## How a capture works

For each (base, session, theme) the script opens one browser context:

1. 1440x900 viewport at 1x, `colorScheme` set to the theme, reduced motion.
2. `localStorage.darkMode` set before the app boots (the frontend reads it and
   toggles the `dark` class on `<html>`); the `policies=accepted` cookie and
   the chaosnet acknowledgement are pre-seeded so no banner or modal appears.
3. The mock wallet is injected. Signed-in groups sign in on a throwaway page
   on the real clock, then re-open `/connect` and require the Sign Out button.
4. The capture page pins `Date` to a fixed time, opens the route, waits for
   the app and network to settle, applies the entry's `fill` and `click`,
   disables CSS animations and transitions, and waits a fixed settle delay.
5. The theme is verified, not assumed: the `dark` class on `<html>` must
   match, and the paint under three viewport points must be light or dark
   accordingly (skipped for `themedPaint: false` routes such as the landing
   page, which is dark in both themes).
6. The screenshot is taken with the entry's `mask` selectors painted over
   (feedback bubble, timestamps, live prices) and downscaled if over 400 KB.

Re-running against the same data gives the same bytes; a diff in git means the
UI changed.

## Add an entry

1. Add an object to `SCREENSHOTS` in `manifest.ts`: `file`, `route`, `page`,
   and, when needed, `base`, `setup: 'signed-in'`, `waitFor`, `fill`,
   `click`, `mask`, `themedPaint: false`, `fullPage`.
2. Reference the light file from the page named in `page`:
   `![alt text](../.gitbook/assets/frontend/<file>.png)`.
3. `bun run screenshots -- <file>.png`, then open both PNGs and check them.
4. `bun run screenshots:check`.

Use `base: 'local'` only for a screen production does not have yet, and say
why in a comment. Move it back to prod once the frontend deploys.

## Change the sample collection or address

The sample ids are named constants at the top of `manifest.ts`
(`SAMPLE_COLLECTION_ID`, `SAMPLE_ADDRESS`, `SAMPLE_CLAIM`), each with a
comment on why it was chosen. To try another one for a single run without
editing the file:

```bash
DOCS_SHOT_COLLECTION_ID=53 DOCS_SHOT_ADDRESS=bb1... bun run screenshots -- collection-overview.png
```

`DOCS_SHOT_CLAIM_COLLECTION_ID`, `DOCS_SHOT_CLAIM_ID`, `DOCS_SHOT_APPROVAL_ID`,
and `DOCS_SHOT_SEARCH_QUERY` cover the claim link and the search page. A claim
link is `/collections/<id>?claimId=<challengeTrackerId>&approvalId=<approvalId>`;
the ids come from the Mint approval's merkle challenge on the collection.

A good sample collection has real metadata and an image, more than one token,
a Mint approval, and no template view (quests, storefronts, and auctions
replace the standard tabs). After changing it, recapture every entry and
re-read the `using-the-frontend/` pages against the new images.
