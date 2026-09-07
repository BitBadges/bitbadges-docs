/**
 * Capture every screenshot in `frontend-screenshots/manifest.ts` from a running
 * BitBadges frontend, or (with --check) verify the committed set offline.
 *
 *   bun run screenshots            capture all (needs the local stack)
 *   bun run screenshots -- home.png  capture one entry
 *   bun run screenshots:check      offline manifest / PNG / doc-reference check
 *
 * Playwright and the mock-wallet harness are loaded from the frontend checkout
 * (`BITBADGES_FRONTEND_DIR`, default: a `bitbadges-frontend` sibling of this
 * repo), so the docs repo carries no browser dependency of its own.
 *
 * Determinism: fixed 1440x900 viewport at 1x, reduced motion, CSS animations
 * off, the browser clock pinned to FIXED_TIME, and per-entry masks over chrome
 * that reports live state. Re-running against the same data yields the same
 * bytes, so a diff in git means the UI changed.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { docsConfig } from '../src/lib/docs/config';
import { checkScreenshots } from './frontend-screenshots/check';
import { ASSETS_DIR, SCREENSHOTS, type Screenshot } from './frontend-screenshots/manifest';

const CONTENT_DIR = docsConfig.contentDir;
const OUT_DIR = path.join(CONTENT_DIR, ASSETS_DIR);
const BASE_URL = process.env.DOCS_SHOT_BASE_URL ?? 'http://localhost:3000';
const FRONTEND_DIR = process.env.BITBADGES_FRONTEND_DIR ?? path.resolve(CONTENT_DIR, '..', 'bitbadges-frontend');
const VIEWPORT = { width: 1440, height: 900 };
/** The browser's Date is pinned here so relative times render the same every run. */
const FIXED_TIME = '2026-09-07T17:00:00.000Z';
/** PNGs above this are downscaled with `sips` (macOS) so the repo stays small. */
const MAX_BYTES = 400 * 1024;
const SETTLE_MS = 1500;

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

async function waitForServer(): Promise<void> {
  try {
    const res = await fetch(BASE_URL, { signal: AbortSignal.timeout(180_000) });
    if (!res.ok) fail(`${BASE_URL} answered HTTP ${res.status}`);
  } catch (e) {
    fail(`${BASE_URL} is unreachable (${(e as Error).message}). Start the frontend on port 3000 first.`);
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
  // The policies banner auto-closes after 8 s of real time; close it now so
  // the settle delay does not decide whether it appears in the shot.
  await page.getByRole('button', { name: '×' }).first().click({ timeout: 1_000 }).catch(() => undefined);
  await page.addStyleTag({ content: NO_MOTION_CSS });
  await page.waitForTimeout(SETTLE_MS);
}

function shrinkIfLarge(file: string): void {
  const original = fs.statSync(file).size;
  if (original <= MAX_BYTES || os.platform() !== 'darwin') return;
  // Step the width down until the PNG fits; a photographic hero can need two steps.
  for (const width of [1200, 1000, 800]) {
    execFileSync('sips', ['--resampleWidth', String(width), file], { stdio: 'ignore' });
    if (fs.statSync(file).size <= MAX_BYTES) break;
  }
  console.log(`  downscaled ${path.basename(file)}: ${Math.round(original / 1024)} KB -> ${Math.round(fs.statSync(file).size / 1024)} KB`);
}

async function capture(only?: string): Promise<void> {
  const shots = only ? SCREENSHOTS.filter((s) => s.file === only) : SCREENSHOTS;
  if (shots.length === 0) fail(`No manifest entry named ${only}`);
  await waitForServer();
  const { pw, wallet, session } = await loadHarness();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await pw.chromium.launch();
  try {
    // One context per setup: the signed-in one carries a real session cookie.
    for (const setup of ['public', 'signed-in'] as const) {
      const batch = shots.filter((s) => (s.setup ?? 'public') === setup);
      if (batch.length === 0) continue;

      const context = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1, baseURL: BASE_URL, reducedMotion: 'reduce' });
      await wallet.injectWallet(context);
      await wallet.seedInterstitialDismissals(context);

      if (setup === 'signed-in') {
        // Sign in on the real clock: the challenge carries a timestamp the API checks.
        const login = await context.newPage();
        await login.goto('/connect', { waitUntil: 'domcontentloaded' });
        await session.signIn(login);
        if (!(await session.isSignedIn(login))) fail('Sign-in through the mock wallet did not produce a session.');
        await login.close();
      }

      const page = await context.newPage();
      await page.clock.install({ time: FIXED_TIME });
      await page.emulateMedia({ reducedMotion: 'reduce' });

      for (const shot of batch) {
        const out = path.join(OUT_DIR, shot.file);
        process.stdout.write(`${shot.file}  <-  ${shot.route}\n`);
        await gotoWithRetry(page, shot.route);
        await settle(page, session, shot);
        await page.screenshot({
          path: out,
          fullPage: shot.fullPage ?? false,
          animations: 'disabled',
          caret: 'hide',
          mask: shot.mask?.map((sel) => page.locator(sel)),
          maskColor: '#1e293b'
        });
        shrinkIfLarge(out);
      }
      await context.close();
    }
  } finally {
    await browser.close();
  }
  console.log(`\n${shots.length} screenshot(s) written to ${ASSETS_DIR}/`);
}

function check(): void {
  const result = checkScreenshots(CONTENT_DIR);
  if (result.ok) {
    console.log(`screenshots: ${SCREENSHOTS.length} manifest entries, all PNGs present and referenced.`);
    return;
  }
  console.error('screenshots: check failed');
  for (const p of result.problems) console.error(`  - ${p}`);
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.includes('--check')) check();
else await capture(args.find((a) => !a.startsWith('--')));
