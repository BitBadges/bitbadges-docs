/**
 * Capture every screenshot in `frontend-screenshots/manifest.ts` in light and
 * dark, or (with --check) verify the committed set offline.
 *
 *   bun run screenshots              capture every entry, both themes
 *   bun run screenshots -- home.png  recapture one entry, both themes
 *   bun run screenshots:check        offline manifest / PNG / doc-reference check
 *
 * Each entry names its base: production (`https://bitbadges.io`, the default)
 * or the local dev server for screens production does not have yet. Playwright
 * and the mock-wallet harness are loaded from a frontend checkout
 * (`BITBADGES_FRONTEND_DIR`, default: a `bitbadges-frontend` sibling of this
 * repo), so the docs repo carries no browser dependency of its own.
 *
 * Determinism: fixed 1440x900 viewport at 1x, reduced motion, CSS animations
 * and transitions off, the browser clock pinned to FIXED_TIME, the policies
 * banner and chaosnet modal pre-dismissed, and per-entry masks over chrome
 * that reports live state. Re-running against the same data yields the same
 * bytes, so a diff in git means the UI changed.
 *
 * Details in `frontend-screenshots/README.md`.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { inflateSync } from 'node:zlib';

import { docsConfig } from '../src/lib/docs/config';
import { checkScreenshots } from './frontend-screenshots/check';
import { ASSETS_DIR, BASE_URLS, SCREENSHOTS, THEMES, themedFile, type Base, type Screenshot, type Theme } from './frontend-screenshots/manifest';

const CONTENT_DIR = docsConfig.contentDir;
const OUT_DIR = path.join(CONTENT_DIR, ASSETS_DIR);
const FRONTEND_DIR = process.env.BITBADGES_FRONTEND_DIR ?? path.resolve(CONTENT_DIR, '..', 'bitbadges-frontend');
const VIEWPORT = { width: 1440, height: 900 };
/** The browser's Date is pinned here so relative times render the same every run. */
const FIXED_TIME = '2026-09-07T17:00:00.000Z';
/** PNGs above this are downscaled with `sips` (macOS) so the repo stays small. */
const MAX_BYTES = 400 * 1024;
const SETTLE_MS = 2500;

// The harness signs with the chain id of AGENT_NETWORK; production is mainnet.
process.env.AGENT_NETWORK ??= 'mainnet';

function fail(msg: string): never {
  console.error(msg);
  process.exit(1);
}

async function loadHarness() {
  const agent = path.join(FRONTEND_DIR, 'src/__tests__/playwright/agent');
  if (!fs.existsSync(agent)) {
    fail(`Frontend harness not found at ${agent}. Set BITBADGES_FRONTEND_DIR to a bitbadges-frontend checkout.`);
  }
  // Absolute-path imports resolve @playwright/test and @cosmjs from the
  // frontend's node_modules, which is the point: no dependency lands here.
  const pw = await import(path.join(FRONTEND_DIR, 'node_modules/@playwright/test/index.js'));
  const wallet = await import(path.join(agent, 'wallet-inject.ts'));
  const session = await import(path.join(agent, 'session.ts'));
  return { pw, wallet, session };
}

async function waitForServer(base: Base): Promise<void> {
  const url = BASE_URLS[base];
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(180_000) });
    if (!res.ok) fail(`${url} answered HTTP ${res.status}`);
  } catch (e) {
    fail(`${url} (${base}) is unreachable (${(e as Error).message}).${base === 'local' ? ' Start the frontend on port 3000 first.' : ''}`);
  }
}

/** Animations off at the CSS level too; reducedMotion alone leaves antd transitions running. */
const NO_MOTION_CSS = '*, *::before, *::after { animation: none !important; transition: none !important; caret-color: transparent !important; }';

/**
 * The dev server compiles a route on first hit, which can take well over 30 s,
 * and it occasionally restarts mid-run; one retry after a pause covers both.
 */
async function gotoWithRetry(page: any, route: string): Promise<void> {
  for (let attempt = 1; ; attempt++) {
    try {
      await page.goto(route, { waitUntil: 'domcontentloaded', timeout: 120_000 });
      return;
    } catch (e) {
      if (attempt >= 3) throw e;
      console.log(`  retrying ${route} (${(e as Error).message.split('\n')[0]})`);
      await new Promise((r) => setTimeout(r, 15_000));
    }
  }
}

/**
 * Force one theme before the app boots. The frontend reads `localStorage.darkMode`
 * (JSON boolean) and toggles the `dark` class on <html>; without the key it
 * follows prefers-color-scheme, which the context also sets.
 */
async function forceTheme(context: any, theme: Theme): Promise<void> {
  await context.addInitScript((dark: boolean) => {
    try {
      localStorage.setItem('darkMode', JSON.stringify(dark));
    } catch {
      // Storage can be unavailable on about:blank; the colorScheme fallback still applies.
    }
  }, theme === 'dark');
}

/**
 * Read one pixel of the rendered page. A 1x1 screenshot clip is a PNG whose
 * single scanline starts with a filter byte; with no left or upper neighbour
 * every filter type leaves the first pixel's bytes raw, so no decoder is needed.
 */
async function pixelAt(page: any, x: number, y: number): Promise<[number, number, number]> {
  const png: Buffer = await page.screenshot({ clip: { x, y, width: 1, height: 1 }, animations: 'disabled' });
  const idat: Buffer[] = [];
  for (let off = 8; off < png.length; ) {
    const len = png.readUInt32BE(off);
    const type = png.toString('ascii', off + 4, off + 8);
    if (type === 'IDAT') idat.push(png.subarray(off + 8, off + 8 + len));
    off += 12 + len;
  }
  const raw = inflateSync(Buffer.concat(idat));
  return [raw[1], raw[2], raw[3]];
}

/** Relative luminance, 0 (black) to 1 (white). */
function luminance([r, g, b]: [number, number, number]): number {
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

/**
 * Check the theme actually applied, two ways: the `dark` class on <html> (what
 * the app's CSS keys on) and the rendered pixels at three points of the
 * viewport below the header (what the reader sees). Fails rather than
 * committing a wrong-theme PNG.
 */
async function assertTheme(page: any, theme: Theme, shot: Screenshot, file: string): Promise<void> {
  const wantDark = theme === 'dark';
  const hasDarkClass = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  if (hasDarkClass !== wantDark) fail(`${file}: <html> ${hasDarkClass ? 'has' : 'lacks'} the dark class but the ${theme} theme was requested`);
  if (shot.themedPaint === false) return;
  const points: Array<[number, number]> = [
    [Math.round(VIEWPORT.width / 2), VIEWPORT.height - 40],
    [40, Math.round(VIEWPORT.height / 2)],
    [VIEWPORT.width - 40, Math.round(VIEWPORT.height / 2)]
  ];
  const pixels = [];
  for (const [x, y] of points) pixels.push(await pixelAt(page, x, y));
  const agree = pixels.filter((p) => (wantDark ? luminance(p) < 0.5 : luminance(p) > 0.5)).length;
  if (agree * 2 < pixels.length) {
    fail(`${file}: sampled pixels ${pixels.map((p) => `rgb(${p.join(', ')})`).join(', ')} do not look ${theme}`);
  }
}

async function settle(page: any, session: any, shot: Screenshot): Promise<void> {
  await page.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => undefined);
  await session.waitForAppReady(page);
  await session.dismissDevOverlay(page).catch(() => undefined);
  if (shot.waitFor) {
    const target = shot.waitFor.startsWith('text=') || /^[.#\[]/.test(shot.waitFor) ? page.locator(shot.waitFor) : page.getByText(shot.waitFor);
    await target.first().waitFor({ state: 'visible', timeout: 30_000 });
  }
  if (shot.fill) {
    await page.locator(shot.fill.selector).first().fill(shot.fill.value);
    await page.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => undefined);
  }
  if (shot.click) {
    await page.getByRole('tab', { name: shot.click }).or(page.getByRole('button', { name: shot.click })).first().click();
    await page.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => undefined);
  }
  // Belt and braces: the policies cookie is pre-seeded, but close the banner if it shows anyway.
  await page.getByRole('button', { name: '×' }).first().click({ timeout: 1_000 }).catch(() => undefined);
  await page.addStyleTag({ content: NO_MOTION_CSS });
  await page.waitForTimeout(SETTLE_MS);
}

function shrinkIfLarge(file: string): void {
  const original = fs.statSync(file).size;
  if (original <= MAX_BYTES) return;
  if (os.platform() !== 'darwin') {
    console.log(`  warning: ${path.basename(file)} is ${Math.round(original / 1024)} KB and sips is macOS-only; downscale it by hand`);
    return;
  }
  // Step the width down until the PNG fits; a photographic hero can need two steps.
  for (const width of [1200, 1000, 800]) {
    execFileSync('sips', ['--resampleWidth', String(width), file], { stdio: 'ignore' });
    if (fs.statSync(file).size <= MAX_BYTES) break;
  }
  console.log(`  downscaled ${path.basename(file)}: ${Math.round(original / 1024)} KB -> ${Math.round(fs.statSync(file).size / 1024)} KB`);
}

type Group = { base: Base; setup: 'public' | 'signed-in'; shots: Screenshot[] };

/** One browser context per (base, setup, theme); order: prod first, public first. */
function groups(shots: Screenshot[]): Group[] {
  const out: Group[] = [];
  for (const base of ['prod', 'local'] as const) {
    for (const setup of ['public', 'signed-in'] as const) {
      const batch = shots.filter((s) => (s.base ?? 'prod') === base && (s.setup ?? 'public') === setup);
      if (batch.length > 0) out.push({ base, setup, shots: batch });
    }
  }
  return out;
}

async function captureGroup(browser: any, harness: Awaited<ReturnType<typeof loadHarness>>, group: Group, theme: Theme): Promise<void> {
  const { wallet, session } = harness;
  const baseURL = BASE_URLS[group.base];
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
    baseURL,
    reducedMotion: 'reduce',
    colorScheme: theme
  });
  try {
    // Accept the policies banner and the mainnet chaosnet modal up front.
    await context.addCookies([{ name: 'policies', value: 'accepted', domain: new URL(baseURL).hostname, path: '/' }]);
    await wallet.seedInterstitialDismissals(context);
    await forceTheme(context, theme);
    await wallet.injectWallet(context);

    if (group.setup === 'signed-in') {
      // Sign in on the real clock: the challenge carries a timestamp the API checks.
      const login = await context.newPage();
      let signedIn = false;
      for (let attempt = 1; attempt <= 3 && !signedIn; attempt++) {
        await gotoWithRetry(login, '/connect');
        await session.signIn(login);
        // Re-open the page: the session cookie is what proves sign-in, not the picker's state.
        await gotoWithRetry(login, '/connect');
        await session.waitForAppReady(login);
        await login.waitForTimeout(3_000);
        signedIn = await session.isSignedIn(login);
        if (!signedIn) console.log(`  sign-in attempt ${attempt} did not produce a session; retrying`);
      }
      if (!signedIn) fail(`Sign-in through the mock wallet did not produce a session on ${baseURL}.`);
      await login.close();
    }

    const page = await context.newPage();
    await page.clock.install({ time: FIXED_TIME });
    await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: theme });

    for (const shot of group.shots) {
      const file = themedFile(shot.file, theme);
      const out = path.join(OUT_DIR, file);
      process.stdout.write(`${file}  <-  ${group.base} ${shot.route}\n`);
      await gotoWithRetry(page, shot.route);
      await settle(page, session, shot);
      await assertTheme(page, theme, shot, file);
      await page.screenshot({
        path: out,
        fullPage: shot.fullPage ?? false,
        animations: 'disabled',
        caret: 'hide',
        mask: shot.mask?.map((sel) => page.locator(sel)),
        maskColor: theme === 'dark' ? '#1e293b' : '#cbd5e1'
      });
      shrinkIfLarge(out);
    }
  } finally {
    await context.close();
  }
}

async function capture(only?: string): Promise<void> {
  const shots = only ? SCREENSHOTS.filter((s) => s.file === only || themedFile(s.file, 'dark') === only) : SCREENSHOTS;
  if (shots.length === 0) fail(`No manifest entry named ${only}`);
  const plan = groups(shots);
  for (const base of new Set(plan.map((g) => g.base))) await waitForServer(base);
  const harness = await loadHarness();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await harness.pw.chromium.launch();
  try {
    for (const group of plan) {
      for (const theme of THEMES) await captureGroup(browser, harness, group, theme);
    }
  } finally {
    await browser.close();
  }
  console.log(`\n${shots.length * THEMES.length} screenshot(s) written to ${ASSETS_DIR}/`);
}

function check(): void {
  const result = checkScreenshots(CONTENT_DIR);
  if (result.ok) {
    console.log(`screenshots: ${SCREENSHOTS.length} manifest entries, light and dark PNGs present and referenced.`);
    return;
  }
  console.error('screenshots: check failed');
  for (const p of result.problems) console.error(`  - ${p}`);
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.includes('--check')) check();
else await capture(args.find((a) => !a.startsWith('--')));
