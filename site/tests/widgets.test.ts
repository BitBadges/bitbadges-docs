/**
 * The widget maintenance loop.
 *
 * 1. Every example of every registered widget validates against its schema
 *    and renders to real HTML (snapshotted, so a look change is a reviewable
 *    diff: `bun test -u tests/widgets.test.ts` to accept one).
 * 2. The directive plugin resolves both syntaxes and fails loudly, with file
 *    and line, on an unknown name, bad JSON or invalid props.
 * 3. Every `::widget` in the markdown corpus renders through the real
 *    pipeline, so a typo in a page fails here before it ships as nothing.
 */
import { describe, expect, test } from 'bun:test';
import fs from 'node:fs/promises';
import path from 'node:path';

import { createWidgetElement, widgetNames, widgets, type WidgetName } from '../src/components/widgets';
import { docsConfig } from '../src/lib/docs/config';
import { getAllFiles } from '../src/lib/docs/content';
import { renderDoc } from '../src/lib/docs/markdown';
import { renderStatic } from '../src/lib/docs/react-static';

const opts = { filePath: 'token-standard/x.md', assetsPrefix: '/docs-assets', basePath: '' };
const ALICE = 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d';

/** Things that mean a prop leaked through unformatted. */
const LEAKS = /undefined|\[object Object\]|NaN|null(?![a-z])/;

describe('widget registry', () => {
  test('every widget has at least one example', () => {
    for (const name of widgetNames) expect(widgets[name].examples.length).toBeGreaterThan(0);
  });

  for (const name of widgetNames) {
    for (const example of widgets[name].examples) {
      test(`${name} / ${example.name} validates, renders and matches its snapshot`, () => {
        expect(widgets[name].schema.safeParse(example.props).success).toBe(true);
        const html = renderStatic(createWidgetElement(name, example.props));
        expect(html.length).toBeGreaterThan(100);
        // One wrapper class carries the code-figure surface, so every widget matches by construction.
        expect(html).toMatch(new RegExp(`^<div class="widget widget-surface[^"]*" data-widget="${name}"`));
        expect(html).not.toMatch(LEAKS);
        // No hand-drawn marks: every chain or token logo is one of the frontend's image files.
        expect(html).not.toContain('url(#w-');
        expect(html).toMatchSnapshot();
      });
    }
  }

  test('invalid props are rejected with the widget name and the failing path', () => {
    expect(() => createWidgetElement('address', {})).toThrow(/widget "address": invalid props: address/);
    expect(() => createWidgetElement('permissions-grid', { permissions: { canFly: [] } })).toThrow(/permission keys must be one of/);
    expect(() => createWidgetElement('swap', { from: { symbol: 'A', amount: '1' } })).toThrow(/to/);
  });

  test('address chips use the frontend logo files, the circular BitBadges mark for bb1 addresses', () => {
    const bb = renderStatic(createWidgetElement('address', { address: ALICE }));
    expect(bb).toMatch(/<img src="\/widgets\/bitbadges-logo\.svg"[^>]*data-site-asset/);
    const eth = renderStatic(createWidgetElement('address', { address: '0x0bc63cfe31d5218eb414b142c799e20964a54a1a' }));
    expect(eth).toContain('src="/widgets/eth-logo.webp"');
    const sol = renderStatic(createWidgetElement('address', { address: '4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T', chain: 'Solana' }));
    expect(sol).toContain('src="/widgets/solana-logo.webp"');
    const cosmos = renderStatic(createWidgetElement('address', { address: 'cosmos1p0rrel3365scadq5k9pv0x0zp9j22js6xz2v6f', chain: 'Cosmos' }));
    expect(cosmos).toContain('src="/widgets/cosmos-logo.webp"');
  });

  test('swap token rows use the frontend logo files', () => {
    const html = renderStatic(
      createWidgetElement('swap', { from: { symbol: 'ATOM', amount: '5' }, to: { symbol: 'USDC', amount: '1' } }),
    );
    expect(html).toContain('src="/widgets/cosmos-logo.webp"');
    expect(html).toContain('src="/widgets/usdc.webp"');
    const badge = renderStatic(createWidgetElement('swap', { from: { symbol: 'BADGE', amount: '5' }, to: { symbol: 'BTC', amount: '1' } }));
    expect(badge).toContain('src="/widgets/bitbadges-logo.svg"');
    expect(badge).toContain('src="/widgets/bitcoin-logo.webp"');
  });

  test('every logo a widget references exists under public/widgets', async () => {
    const files = new Set(await fs.readdir(path.resolve(import.meta.dirname, '../public/widgets')));
    for (const name of widgetNames) {
      for (const example of widgets[name].examples) {
        const html = renderStatic(createWidgetElement(name, example.props));
        // Logos sit directly under public/widgets; sample artwork one level down.
        for (const m of html.matchAll(/src="\/widgets\/([^"]+)"/g)) {
          const parts = m[1].split('/');
          const dir = parts.length > 1 ? await fs.readdir(path.resolve(import.meta.dirname, `../public/widgets/${parts.slice(0, -1).join('/')}`)) : [...files];
          expect(dir.includes(parts[parts.length - 1])).toBe(true);
        }
      }
    }
  });

  test('renders the same html for the same props', () => {
    const a = renderStatic(createWidgetElement('address', { address: ALICE }));
    const b = renderStatic(createWidgetElement('address', { address: ALICE }));
    expect(a).toBe(b);
  });
});

describe('::widget directive', () => {
  test('leaf form: attributes become props and the html lands in the page', async () => {
    const doc = await renderDoc(`# T\n\nBefore.\n\n::widget{name="address" address="${ALICE}" size="large"}\n\nAfter.`, opts);
    expect(doc.html).toContain('data-widget="address"');
    expect(doc.html).toContain('bb1p0rrel3...w70d');
    expect(doc.html).toContain('font-size:20px');
    expect(doc.html).not.toContain('::widget');
    expect(doc.html).toContain('<p>Before.</p>');
    expect(doc.html).toContain('<p>After.</p>');
  });

  test('container form: the JSON body is the props, attributes override, caption renders', async () => {
    const md = [
      '# T',
      '',
      ':::widget{name="transferability-row" caption="Anyone can mint."}',
      '{ "approvalId": "mint", "fromListId": "Mint", "criteria": ["1 BADGE per use"] }',
      ':::',
      '',
      'Then prose.',
    ].join('\n');
    const doc = await renderDoc(md, opts);
    expect(doc.html).toContain('data-widget="transferability-row"');
    expect(doc.html).toContain('1 BADGE per use');
    expect(doc.html).toContain('<p class="widget-caption text-sm text-[var(--fg-faint)]">Anyone can mint.</p>');
    expect(doc.html).toContain('<p>Then prose.</p>');
    expect(doc.html).not.toContain(':::');
  });

  test('container form accepts a json fence inside the body', async () => {
    const md = ['# T', '', ':::widget{name="address-list"}', '```json', `{ "addresses": ["${ALICE}", "Mint"] }`, '```', ':::'].join('\n');
    const doc = await renderDoc(md, opts);
    expect(doc.html).toContain('data-widget="address-list"');
    expect(doc.html).toContain('data-address="Mint"');
  });

  test('survives rehype-raw: svg attributes and inline styles are kept', async () => {
    const doc = await renderDoc(`# T\n\n::widget{name="address" address="${ALICE}"}`, opts);
    expect(doc.html).toContain('shape-rendering="crispEdges"');
    expect(doc.html).toMatch(/<svg[^>]*viewBox="0 0 5 5"/);
    expect(doc.html).toContain('style="width:20px;height:20px"');
  });

  test('widget logos keep their site path: the asset rewrite does not move them under docs-assets', async () => {
    const doc = await renderDoc(`# T\n\n::widget{name="address" address="${ALICE}"}`, opts);
    expect(doc.html).toContain('src="/widgets/bitbadges-logo.svg"');
    expect(doc.html).not.toContain('/docs-assets/widgets/');
  });

  test('unknown widget name fails with file and line', async () => {
    await expect(renderDoc('# T\n\n\n::widget{name="nope"}', opts)).rejects.toThrow(/token-standard\/x\.md:4: unknown widget "nope" \(known: /);
  });

  test('invalid props fail with file, line and the bad field', async () => {
    await expect(renderDoc('# T\n\n::widget{name="address" address=""}', opts)).rejects.toThrow(/x\.md:3: widget "address": invalid props: address/);
  });

  test('bad JSON body fails with file and line', async () => {
    await expect(renderDoc('# T\n\n:::widget{name="swap"}\n{ not json\n:::', opts)).rejects.toThrow(/x\.md:3: widget "swap" body is not valid JSON/);
  });

  test('missing name attribute fails', async () => {
    await expect(renderDoc('# T\n\n::widget{address="x"}', opts)).rejects.toThrow(/missing its name attribute/);
  });

  test('other directives still round-trip as literal text', async () => {
    const doc = await renderDoc('# T\n\n::something{a="b"}\n\nbadges:1:utoken', opts);
    expect(doc.html).toContain('::something');
    expect(doc.html).toContain('badges:1:utoken');
  });
});

describe('::widget in the corpus', () => {
  test('every widget directive in the docs resolves and renders', async () => {
    const files = await getAllFiles();
    const used: string[] = [];
    let rendered = 0;
    for (const file of files) {
      const source = await fs.readFile(path.join(docsConfig.contentDir, file), 'utf8');
      const directives = source.match(/^:{2,3}widget\b.*$/gm);
      if (!directives) continue;
      used.push(file);
      // renderDoc throws with file:line for an unknown name or invalid props.
      const doc = await renderDoc(source, { filePath: file, assetsPrefix: docsConfig.assetsPrefix, basePath: docsConfig.basePath });
      const count = (doc.html.match(/data-widget="/g) ?? []).length;
      expect(`${file}: ${count} rendered of ${directives.length}`).toBe(`${file}: ${directives.length} rendered of ${directives.length}`);
      expect(doc.html).not.toContain('::widget');
      rendered += count;
    }
    // The pipeline is proven by real pages; drop below this and the feature is unwired.
    expect(used.length).toBeGreaterThanOrEqual(3);
    expect(rendered).toBeGreaterThanOrEqual(3);
  });

  test('every widget name used in the corpus is registered', async () => {
    const files = await getAllFiles();
    const names = new Set<string>();
    for (const file of files) {
      const source = await fs.readFile(path.join(docsConfig.contentDir, file), 'utf8');
      for (const m of source.matchAll(/^:{2,3}widget\{[^}]*\bname="([^"]+)"/gm)) names.add(m[1]);
    }
    const unknown = [...names].filter((n) => !(widgetNames as string[]).includes(n as WidgetName));
    expect(unknown).toEqual([]);
  });
});
