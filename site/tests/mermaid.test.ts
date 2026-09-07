import { describe, expect, test } from 'bun:test';
import fs from 'node:fs/promises';
import path from 'node:path';
import { docsConfig } from '../src/lib/docs/config';
import { getAllFiles } from '../src/lib/docs/content';
import { renderDoc } from '../src/lib/docs/markdown';
import { renderMermaid } from '../src/lib/docs/mermaid';

const opts = { filePath: 'start/quickstart.md', assetsPrefix: '/docs-assets', basePath: '' };
const flow = 'flowchart LR\n  A[bb build] --> B[bb check]\n  B --> C[bb preview]';

describe('mermaid fences', () => {
  test('render to an inline svg inside a diagram figure, not a code block', async () => {
    const doc = await renderDoc(`# T\n\n\`\`\`mermaid\n${flow}\n\`\`\`\n`, opts);
    expect(doc.html).toMatch(/<figure class="diagram" data-diagram="mermaid"><div class="diagram-scroll"><svg /);
    expect(doc.html).toContain('bb build');
    expect(doc.html).not.toContain('data-code-source');
    expect(doc.html).not.toContain('language-mermaid');
  });

  test('carry no inline colors, so the page tokens of the same name reach them, and load no external font', () => {
    const svg = renderMermaid(flow);
    // `--fg: var(--fg)` on the root would be a self-reference and paint every node black.
    expect(svg).toMatch(/^<svg [^>]*>/);
    expect(svg.match(/^<svg [^>]*/)![0]).not.toContain('style=');
    expect(svg).toContain('color-mix(in srgb, var(--fg)');
    expect(svg).not.toContain('@import');
    expect(svg).not.toContain('fonts.googleapis.com');
    expect(svg).toContain('font-family: inherit');
  });

  test('carry an optional title as the figure caption', async () => {
    const doc = await renderDoc(`# T\n\n\`\`\`mermaid title="Idea to on-chain"\n${flow}\n\`\`\`\n`, opts);
    expect(doc.html).toMatch(/<\/div><figcaption>Idea to on-chain<\/figcaption><\/figure>/);
  });

  test('fail loudly on a diagram the renderer cannot parse', async () => {
    await expect(renderDoc('# T\n\n```mermaid\nnonsense {{{\n```\n', opts)).rejects.toThrow(/start\/quickstart\.md.*mermaid/s);
  });
});

describe('every mermaid fence in the corpus', () => {
  test('renders', async () => {
    const files = await getAllFiles();
    const failures: string[] = [];
    let fences = 0;
    for (const file of files) {
      const text = await fs.readFile(path.join(docsConfig.contentDir, file), 'utf8');
      for (const match of text.matchAll(/```mermaid[^\n]*\n([\s\S]*?)```/g)) {
        fences++;
        try {
          renderMermaid(match[1]);
        } catch (error) {
          failures.push(`${file}: ${String(error).split('\n')[0]}`);
        }
      }
    }
    expect(failures).toEqual([]);
    expect(fences).toBeGreaterThan(0);
  });
});
