/**
 * Screenshot every widget example on the gallery page into `_docs/widgets/`,
 * light and dark, and write an image index next to them.
 *
 * Manual refresh step after a widget changes its look:
 *
 *     cd site && bun scripts/widget-gallery-screenshots.ts
 *
 * Wrapping audit at narrow content widths (the content column is the viewport
 * minus the shell, so pass the column width you want to test):
 *
 *     cd site && bun scripts/widget-gallery-screenshots.ts --widths=360,540,900 --out=/tmp/widget-shots
 *
 * `--widths` writes one `<width>px/` folder per width under the output dir and
 * leaves the default set alone; `--out` redirects the output dir.
 *
 * Playwright is not a dependency of this site. The script borrows the copy in
 * the frontend checkout (override with `PLAYWRIGHT_MODULE=/path/to/playwright`)
 * and skips with a message when none is found. Set `BASE_URL` to reuse a running
 * server; otherwise it starts `next dev` on a free port and stops it after.
 */
import { spawn, type ChildProcess } from 'node:child_process';
import fs from 'node:fs/promises';
import net from 'node:net';
import os from 'node:os';
import path from 'node:path';

const siteDir = path.resolve(import.meta.dirname, '..');

/** `--widths=360,540` and `--out=DIR`; anything else is an error. */
function parseArgs(argv: string[]): { widths: number[] | null; outDir: string } {
  let widths: number[] | null = null;
  let outDir = path.resolve(siteDir, '..', '_docs', 'widgets');
  for (const arg of argv) {
    const [key, value] = arg.split('=', 2);
    if (key === '--widths' && value) {
      widths = value.split(',').map((w) => Number(w.trim()));
      if (widths.some((w) => !Number.isInteger(w) || w < 200)) throw new Error(`--widths: expected integers >= 200, got "${value}"`);
    } else if (key === '--out' && value) {
      outDir = path.resolve(value);
    } else {
      throw new Error(`unknown argument "${arg}" (use --widths=360,540 and/or --out=DIR)`);
    }
  }
  return { widths, outDir };
}

const { widths, outDir: outRoot } = parseArgs(process.argv.slice(2));
const playwrightModule =
  process.env.PLAYWRIGHT_MODULE ?? path.join(os.homedir(), 'CompSci/bitbadges/bitbadges-frontend/node_modules/playwright');

type Playwright = { chromium: { launch(opts?: { headless?: boolean }): Promise<Browser> } };
type Browser = { newPage(opts?: object): Promise<Page>; close(): Promise<void> };
type Page = {
  goto(url: string, opts?: object): Promise<unknown>;
  locator(sel: string): Locator;
  evaluate<T>(fn: (arg: T) => void, arg: T): Promise<void>;
  waitForTimeout(ms: number): Promise<void>;
};
type Locator = {
  count(): Promise<number>;
  nth(i: number): Locator;
  getAttribute(name: string): Promise<string | null>;
  screenshot(opts: { path: string }): Promise<unknown>;
  waitFor(): Promise<void>;
};

async function loadPlaywright(): Promise<Playwright | null> {
  try {
    await fs.access(playwrightModule);
  } catch {
    return null;
  }
  return (await import(playwrightModule)) as Playwright;
}

function freePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(0, () => {
      const { port } = server.address() as net.AddressInfo;
      server.close(() => resolve(port));
    });
    server.on('error', reject);
  });
}

async function waitForServer(url: string, timeoutMs: number): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`server at ${url} did not come up within ${timeoutMs / 1000}s`);
}

async function main() {
  const playwright = await loadPlaywright();
  if (!playwright) {
    console.log(`playwright not found at ${playwrightModule}; set PLAYWRIGHT_MODULE or install it. Nothing written.`);
    return;
  }

  let server: ChildProcess | null = null;
  let baseUrl = process.env.BASE_URL;
  if (!baseUrl) {
    const port = await freePort();
    baseUrl = `http://localhost:${port}`;
    server = spawn('bun', ['run', 'next', 'dev', '-p', String(port)], { cwd: siteDir, stdio: 'inherit' });
    await waitForServer(`${baseUrl}/widgets`, 180_000);
  }

  const browser = await playwright.chromium.launch({ headless: true });
  try {
    for (const width of widths ?? [null]) {
      const outDir = width === null ? outRoot : path.join(outRoot, `${width}px`);
      await capture(browser, baseUrl, outDir, width);
    }
  } finally {
    await browser.close();
    server?.kill();
  }
}

/**
 * One full pass (both themes) into `outDir`. With `columnWidth`, the gallery's
 * content column is pinned to that many CSS px so wrapping can be checked at
 * phone, narrow-tablet and desktop widths.
 */
async function capture(browser: Browser, baseUrl: string, outDir: string, columnWidth: number | null) {
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });

  const rows: { widget: string; example: string; light: string; dark: string }[] = [];
  {
    for (const theme of ['light', 'dark'] as const) {
      const page = await browser.newPage({ viewport: { width: 1100, height: 900 }, deviceScaleFactor: 2 });
      await page.goto(`${baseUrl}/widgets`, { waitUntil: 'networkidle' });
      await page.evaluate(
        ({ mode, width }) => {
          document.documentElement.classList.toggle('dark', mode === 'dark');
          if (width !== null) {
            for (const el of document.querySelectorAll<HTMLElement>('[data-widget-example]')) el.style.width = `${width}px`;
          }
        },
        { mode: theme, width: columnWidth },
      );
      await page.waitForTimeout(300);

      const blocks = page.locator('[data-widget-example]');
      const total = await blocks.count();
      for (let i = 0; i < total; i++) {
        const block = blocks.nth(i);
        const id = (await block.getAttribute('data-widget-example')) ?? `unknown-${i}`;
        const [widget, example] = id.split('/');
        const file = `${widget}--${example}${theme === 'dark' ? '--dark' : ''}.png`;
        await block.screenshot({ path: path.join(outDir, file) });
        let row = rows.find((r) => r.widget === widget && r.example === example);
        if (!row) {
          row = { widget, example, light: '', dark: '' };
          rows.push(row);
        }
        row[theme] = file;
        console.log(`wrote ${path.relative(outRoot, path.join(outDir, file))}`);
      }
    }
  }

  const lines = [
    '# Widget gallery',
    '',
    'Screenshots of every widget example, generated by `site/scripts/widget-gallery-screenshots.ts`.',
    'Regenerate after a widget changes; the live page is `/widgets` on the site.',
    ...(columnWidth === null ? [] : ['', `Content column pinned to ${columnWidth}px (\`--widths\`).`]),
    '',
    '| Widget | Example | Light | Dark |',
    '| --- | --- | --- | --- |',
    ...rows.map((r) => `| \`${r.widget}\` | ${r.example} | ![${r.widget} ${r.example}](./${r.light}) | ![${r.widget} ${r.example} dark](./${r.dark}) |`),
    '',
  ];
  await fs.writeFile(path.join(outDir, 'README.md'), lines.join('\n'));
  console.log(`wrote ${rows.length} rows to ${path.join(outDir, 'README.md')}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
