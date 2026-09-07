import { describe, expect, test } from 'bun:test';
import { renderDoc } from '../src/lib/docs/markdown';

const opts = { filePath: 'for-developers/getting-started.md', assetsPrefix: '/docs-assets', basePath: '' };

describe('renderDoc — page shell', () => {
  test('lifts the leading h1 into the title and drops it from the body', async () => {
    const doc = await renderDoc('# 🔨 Getting Started\n\nBody text.', opts);
    expect(doc.title).toBe('🔨 Getting Started');
    expect(doc.html).not.toContain('<h1');
    expect(doc.html).toContain('Body text.');
  });

  test('reads the frontmatter description and keeps it out of the body', async () => {
    const doc = await renderDoc('---\ndescription: A short blurb\n---\n\n# T\n\nBody.', opts);
    expect(doc.description).toBe('A short blurb');
    expect(doc.html).not.toContain('A short blurb');
  });

  test('falls back to the file name when there is no h1', async () => {
    const doc = await renderDoc('Just body text.', opts);
    expect(doc.title).toBe('getting-started');
  });
});

describe('renderDoc — headings and table of contents', () => {
  test('collects h2 and h3 headings with slugged ids', async () => {
    const doc = await renderDoc('# T\n\n## Quick Start\n\n### Install the CLI\n', opts);
    expect(doc.headings).toEqual([
      { depth: 2, id: 'quick-start', text: 'Quick Start' },
      { depth: 3, id: 'install-the-cli', text: 'Install the CLI' },
    ]);
    expect(doc.html).toContain('id="quick-start"');
  });

  test('ignores h4 and deeper in the table of contents', async () => {
    const doc = await renderDoc('# T\n\n#### Too deep\n', opts);
    expect(doc.headings).toEqual([]);
  });
});

describe('renderDoc — link and asset rewriting', () => {
  test('rewrites a relative doc link to a site route', async () => {
    const doc = await renderDoc('# T\n\nSee [Installation](cli/installation.md).', opts);
    expect(doc.html).toContain('href="/for-developers/cli/installation"');
  });

  test('marks external links so they open in a new tab safely', async () => {
    const doc = await renderDoc('# T\n\n[site](https://bitbadges.io/create)', opts);
    expect(doc.html).toContain('rel="noopener noreferrer"');
    expect(doc.html).toContain('target="_blank"');
  });

  test('rewrites a relative markdown image to the assets prefix', async () => {
    const doc = await renderDoc('# T\n\n![alt](../.gitbook/assets/logo.png)', opts);
    expect(doc.html).toContain('src="/docs-assets/.gitbook/assets/logo.png"');
  });

  // Every image in the corpus is authored as raw <figure><img> HTML, because
  // GitBook asset names contain spaces and parentheses that CommonMark rejects.
  test('rewrites images inside raw figure html and url-encodes spaces', async () => {
    const doc = await renderDoc(
      '# T\n\n<figure><img src="../.gitbook/assets/image (4) (1).png" alt=""><figcaption></figcaption></figure>',
      opts,
    );
    expect(doc.html).toContain('<figure>');
    expect(doc.html).toContain('src="/docs-assets/.gitbook/assets/image%20(4)%20(1).png"');
  });

  test('resolves deeply nested ../ image paths against the source file', async () => {
    const doc = await renderDoc(
      '# T\n\n<figure><img src="../../images/x.png" alt=""></figure>',
      { ...opts, filePath: 'a/b/c/page.md' },
    );
    expect(doc.html).toContain('src="/docs-assets/a/images/x.png"');
  });

  test('resolves .gitbook/assets images from the content root whatever the depth', async () => {
    const doc = await renderDoc(
      '# T\n\n<figure><img src="../../.gitbook/assets/x.png" alt=""></figure>\n\n![](../../../../../.gitbook/assets/y.png)',
      { ...opts, filePath: 'a/b/c/page.md' },
    );
    expect(doc.html).toContain('src="/docs-assets/.gitbook/assets/x.png"');
    expect(doc.html).toContain('src="/docs-assets/.gitbook/assets/y.png"');
  });

  test('leaves an absolute image url alone', async () => {
    const doc = await renderDoc('# T\n\n![](https://cdn.example.com/a.png)', opts);
    expect(doc.html).toContain('https://cdn.example.com/a.png');
  });

  test('prefixes internal routes with basePath when mounted under a sub-path', async () => {
    const doc = await renderDoc('# T\n\n[x](cli/installation.md)', { ...opts, basePath: '/docs' });
    expect(doc.html).toContain('href="/docs/for-developers/cli/installation"');
  });
});

describe('renderDoc — GitBook blocks', () => {
  test('renders a hint as a styled callout carrying its variant', async () => {
    const doc = await renderDoc('# T\n\n{% hint style="warning" %}\n**Careful** now.\n{% endhint %}', opts);
    expect(doc.html).toContain('data-callout="warning"');
    expect(doc.html).toContain('<strong>Careful</strong>');
  });

  test('renders a content-ref as a card linking to the resolved route', async () => {
    const doc = await renderDoc(
      '# T\n\n{% content-ref url="cli/installation.md" %}\n[installation](cli/installation.md)\n{% endcontent-ref %}',
      opts,
    );
    expect(doc.html).toContain('data-content-ref');
    expect(doc.html).toContain('href="/for-developers/cli/installation"');
  });

  test('renders an embed as an external link card', async () => {
    const doc = await renderDoc('# T\n\n{% embed url="https://meta.discourse.org/t/x/1" %}', opts);
    expect(doc.html).toContain('data-embed');
    expect(doc.html).toContain('https://meta.discourse.org/t/x/1');
  });
});

describe('renderDoc — code and tables', () => {
  test('highlights fenced code and keeps the source text intact', async () => {
    const doc = await renderDoc('# T\n\n```bash\ncurl -fsSL https://install.bitbadges.io | sh\n```', opts);
    expect(doc.html).toContain('shiki');
    expect(doc.html).toContain('install.bitbadges.io');
  });

  test('records the language so the UI can label the block', async () => {
    const doc = await renderDoc('# T\n\n```bash\necho hi\n```', opts);
    expect(doc.html).toContain('data-lang="bash"');
  });

  test('renders GFM tables', async () => {
    const doc = await renderDoc('# T\n\n| a | b |\n| - | - |\n| 1 | 2 |\n', opts);
    expect(doc.html).toContain('<table>');
    expect(doc.html).toContain('<td>1</td>');
  });
});

describe('renderDoc — plain text extraction for search', () => {
  test('returns body text without markup or code blocks', async () => {
    const doc = await renderDoc('# T\n\nHello **world**.\n\n```js\nconst secret = 1;\n```\n', opts);
    expect(doc.text).toContain('Hello world.');
    expect(doc.text).not.toContain('const secret');
    expect(doc.text).not.toContain('**');
  });
});

describe('renderDoc — content chrome', () => {
  test('wraps a code block in a figure carrying the language', async () => {
    const doc = await renderDoc('# T\n\n```bash\necho hi\n```', opts);
    expect(doc.html).toContain('<figure data-code=""');
    expect(doc.html).toContain('<figcaption>');
    expect(doc.html).toMatch(/<figcaption>[\s\S]*bash[\s\S]*<\/figcaption>/);
  });

  test('marks a code figure as copyable with its raw source', async () => {
    const doc = await renderDoc('# T\n\n```bash\necho hi\n```', opts);
    expect(doc.html).toContain('data-code-source="echo hi"');
  });

  test('wraps a table so it scrolls instead of breaking the layout', async () => {
    const doc = await renderDoc('# T\n\n| a | b |\n| - | - |\n| 1 | 2 |\n', opts);
    expect(doc.html).toContain('<div class="table-scroll">');
    expect(doc.html).toMatch(/<div class="table-scroll"><table>/);
  });

  test('leaves an inline code span unwrapped', async () => {
    const doc = await renderDoc('# T\n\nUse `bb api` today.', opts);
    expect(doc.html).not.toContain('data-code=""');
    expect(doc.html).toContain('<code>bb api</code>');
  });
});

describe('renderDoc — content-ref card titles', () => {
  // GitBook renders a content-ref as a card showing the target page's title,
  // not the raw link text (which is usually just the file slug).
  const withTitles = { ...opts, resolveTitle: (route: string) => ({ '/for-developers/cli/installation': 'Installing the CLI' })[route] };

  test('replaces the card label with the target page title', async () => {
    const doc = await renderDoc(
      '# T\n\n{% content-ref url="cli/installation.md" %}\n[installation.md](cli/installation.md)\n{% endcontent-ref %}',
      withTitles,
    );
    expect(doc.html).toContain('Installing the CLI');
    expect(doc.html).not.toContain('>installation.md<');
  });

  test('keeps the original label when the target title is unknown', async () => {
    const doc = await renderDoc(
      '# T\n\n{% content-ref url="cli/unknown.md" %}\n[unknown.md](cli/unknown.md)\n{% endcontent-ref %}',
      withTitles,
    );
    expect(doc.html).toContain('unknown.md');
  });

  test('leaves ordinary links untouched', async () => {
    const doc = await renderDoc('# T\n\n[installation.md](cli/installation.md)', withTitles);
    expect(doc.html).toContain('>installation.md<');
    expect(doc.html).not.toContain('Installing the CLI');
  });
});
