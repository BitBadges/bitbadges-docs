import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import fs from 'node:fs';
import path from 'node:path';
import { docsConfig } from '../src/lib/docs/config';
import { buildSearchRecords } from '../src/lib/docs/content';
import { renderDoc } from '../src/lib/docs/markdown';
import { darkTwinOf } from '../src/lib/docs/themedImages';
import { stripWidgets } from '../src/lib/docs/widgets';
import { renderCorpus } from '../scripts/gen-for-llms';

const opts = { filePath: 'start/quickstart.md', assetsPrefix: '/docs-assets', basePath: '' };

describe('stripWidgets', () => {
  const md = [
    '# T', '', 'Before.', '',
    '::widget{name="address" address="bb1abc" caption="One."}', '',
    ':::widget{name="approval-criteria" caption="Two."}', '{ "coinTransfers": [] }', ':::', '',
    'After.', '',
  ].join('\n');

  test('drops leaf and container directives and keeps the prose', () => {
    const out = stripWidgets(md);
    expect(out).not.toContain('widget');
    expect(out).not.toContain('coinTransfers');
    expect(out).toContain('Before.');
    expect(out).toContain('After.');
  });

  test('leaves markdown without widgets untouched', () => {
    expect(stripWidgets('# T\n\n```json\n{"a": 1}\n```\n')).toBe('# T\n\n```json\n{"a": 1}\n```\n');
  });

  test('for-llms output carries no widget syntax from the corpus', async () => {
    const dir = path.join(docsConfig.contentDir, 'token-standard/concepts');
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
    const entries = files.map((f) => ({ file: f, body: stripWidgets(fs.readFileSync(path.join(dir, f), 'utf8')) }));
    const text = renderCorpus(entries);
    expect(text).not.toMatch(/^:{2,3}widget/m);
    expect(files.some((f) => fs.readFileSync(path.join(dir, f), 'utf8').includes('::widget'))).toBe(true);
  });

  test('search records carry no widget props', async () => {
    const records = await buildSearchRecords();
    const hit = records.filter((r) => r.text.includes('::widget') || r.text.includes('caption='));
    expect(hit.map((r) => r.route)).toEqual([]);
  }, 60_000);
});

describe('themed screenshot pairs', () => {
  const assets = path.join(docsConfig.contentDir, '.gitbook/assets');
  const light = path.join(assets, '__twin-test.png');
  const dark = path.join(assets, '__twin-test--dark.png');
  beforeAll(() => {
    fs.writeFileSync(light, '');
    fs.writeFileSync(dark, '');
  });
  afterAll(() => {
    fs.rmSync(light, { force: true });
    fs.rmSync(dark, { force: true });
  });

  test('darkTwinOf', () => {
    expect(darkTwinOf('frontend/home.png')).toBe('frontend/home--dark.png');
    expect(darkTwinOf('frontend/home--dark.png')).toBeNull();
    expect(darkTwinOf('noext')).toBeNull();
  });

  test('an image with a dark twin on disk renders both, tagged by theme', async () => {
    const doc = await renderDoc('# T\n\n![Home](../.gitbook/assets/__twin-test.png)\n', opts);
    expect(doc.html).toMatch(/<img src="\/docs-assets\/\.gitbook\/assets\/__twin-test\.png" alt="Home" loading="lazy" data-theme="light">/);
    expect(doc.html).toMatch(/<img src="\/docs-assets\/\.gitbook\/assets\/__twin-test--dark\.png" alt="Home" loading="lazy" data-theme="dark">/);
  });

  test('an image without a twin is untouched', async () => {
    const doc = await renderDoc('# T\n\n![Solo](../.gitbook/assets/__nope.png)\n', opts);
    expect(doc.html).not.toContain('data-theme');
    expect(doc.html.match(/<img /g)).toHaveLength(1);
  });
});

describe('inline code in tables', () => {
  test('the stylesheet keeps it on one line and lets the table scroll instead', () => {
    const css = fs.readFileSync(path.join(import.meta.dir, '../src/app/globals.css'), 'utf8');
    expect(css).toMatch(/\.doc table code \{[^}]*white-space: nowrap/);
    expect(css).toMatch(/\.doc \.table-scroll \{[^}]*overflow-x: auto/);
  });
});
