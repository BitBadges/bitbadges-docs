/**
 * The raw Markdown a page serves at `<route>.md`: frontmatter gone, a title
 * H1 present, widgets stripped, and every internal link absolute so an agent
 * can follow it without the site's link resolver.
 */
import { describe, expect, test } from 'bun:test';
import fs from 'node:fs/promises';
import path from 'node:path';

import { docsConfig } from '../src/lib/docs/config';
import { markdownRoute, pageMarkdown } from '../src/lib/docs/page-markdown';
import { stripWidgets } from '../src/lib/docs/widgets';

const options = {
  filePath: 'token-standard/concepts/transferability.md',
  siteUrl: 'https://docs.bitbadges.io',
  basePath: '',
  assetsPrefix: '/docs-assets',
};

describe('stripWidgets', () => {
  test('removes a leaf directive line', () => {
    const out = stripWidgets('Before.\n\n::widget{name="address" address="bb1abc"}\n\nAfter.\n');
    expect(out).toBe('Before.\n\nAfter.\n');
  });

  test('removes a container directive with its JSON body', () => {
    const md = 'Intro.\n\n:::widget{name="swap" caption="One sentence."}\n{\n  "a": 1\n}\n:::\n\nOutro.\n';
    expect(stripWidgets(md)).toBe('Intro.\n\nOutro.\n');
  });

  test('leaves a fenced code block that documents the syntax untouched', () => {
    const md = 'Syntax:\n\n```\n::widget{name="address"}\n:::widget{name="swap"}\n{}\n:::\n```\n';
    expect(stripWidgets(md)).toBe(md);
  });

  test('keeps other directives (hints, content refs) as they are', () => {
    const md = ':::hint{style="info"}\nRead this.\n:::\n';
    expect(stripWidgets(md)).toBe(md);
  });
});

describe('markdownRoute', () => {
  test('the root page is index.md; every other route gets a .md suffix', () => {
    expect(markdownRoute('/')).toBe('/index.md');
    expect(markdownRoute('/agents/setup')).toBe('/agents/setup.md');
    expect(markdownRoute('/token-standard/concepts/balances')).toBe('/token-standard/concepts/balances.md');
  });
});

describe('pageMarkdown', () => {
  test('promotes the frontmatter title to an H1 when the body has none', () => {
    const source = '---\ntitle: Balances\ndescription: "What a balance is."\n---\n\nA balance is an amount.\n';
    const out = pageMarkdown(source, options);
    expect(out.startsWith('# Balances\n\nA balance is an amount.')).toBe(true);
    expect(out).not.toContain('---');
    expect(out).not.toContain('description:');
  });

  test('keeps an authored H1 and does not add a second one', () => {
    const source = '---\ndescription: "x"\n---\n\n# Transferability\n\nBody.\n';
    const out = pageMarkdown(source, options);
    expect(out.match(/^# /gm)).toHaveLength(1);
    expect(out.startsWith('# Transferability')).toBe(true);
  });

  test('rewrites relative page links and images to absolute site URLs', () => {
    const source = [
      '# T',
      '',
      'See [Balances](balances.md#ownership) and [Messages](../messages/README.md) and [Root](/agents/setup).',
      '',
      '![Diagram](../../.gitbook/assets/flow.png)',
      '',
      '[External](https://example.com/a.md) stays.',
    ].join('\n');
    const out = pageMarkdown(source, options);
    expect(out).toContain('[Balances](https://docs.bitbadges.io/token-standard/concepts/balances#ownership)');
    expect(out).toContain('[Messages](https://docs.bitbadges.io/token-standard/messages)');
    expect(out).toContain('[Root](https://docs.bitbadges.io/agents/setup)');
    expect(out).toContain('![Diagram](https://docs.bitbadges.io/docs-assets/.gitbook/assets/flow.png)');
    expect(out).toContain('[External](https://example.com/a.md)');
    expect(out).not.toMatch(/\]\(\.\.?\//);
  });

  test('carries the mount point when the docs live under a sub-path', () => {
    const source = '# T\n\n[Balances](balances.md)\n\n![D](../../.gitbook/assets/flow.png)\n';
    const out = pageMarkdown(source, { ...options, basePath: '/docs' });
    expect(out).toContain('(https://docs.bitbadges.io/docs/token-standard/concepts/balances)');
    expect(out).toContain('(https://docs.bitbadges.io/docs/docs-assets/.gitbook/assets/flow.png)');
  });

  test('a real page with a widget serves no directive and no relative link', async () => {
    const source = await fs.readFile(path.join(docsConfig.contentDir, options.filePath), 'utf8');
    expect(source).toContain(':::widget');
    const out = pageMarkdown(source, options);
    expect(out).not.toContain('::widget');
    expect(out).not.toMatch(/\]\(\.\.?\//);
    expect(out).toContain('https://docs.bitbadges.io/token-standard/');
    expect(out.startsWith('# ')).toBe(true);
  });
});
