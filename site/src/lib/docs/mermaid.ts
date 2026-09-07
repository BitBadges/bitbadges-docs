/**
 * Mermaid fences render to inline SVG at build time.
 *
 * `beautiful-mermaid` lays the diagram out without a DOM, so a ```mermaid
 * fence becomes a static `<figure class="diagram">` with no client script and
 * no runtime dependency. Colors are CSS custom properties on the `<svg>`, set
 * here to the site's own tokens, so a diagram follows the light and dark
 * themes like the rest of the page. A diagram the renderer cannot parse
 * throws with the file path, so the corpus test fails before the page ships.
 */
import type { Element, ElementContent, Root as HastRoot } from 'hast';
import { toString as hastToString } from 'hast-util-to-string';
import { renderMermaidSVG } from 'beautiful-mermaid';
import { visit } from 'unist-util-visit';

/**
 * SVG for one diagram, with no inline colors and no external font.
 *
 * The renderer names its color variables `--bg`, `--fg`, and `--accent`, the
 * same names the site uses for its own tokens, so the diagram inherits the
 * page's foreground and accent as-is. Writing them on the `<svg>` would make
 * `--fg: var(--fg)` a self-reference and turn every derived color black, so
 * the inline declaration is removed; the stylesheet sets `--bg` to the code
 * background (`.doc figure.diagram svg`).
 */
export function renderMermaid(source: string): string {
  return renderMermaidSVG(source.trim(), { transparent: true, padding: 16 })
    .replace(/^(<svg [^>]*?) style="[^"]*"/, '$1')
    .replace(/\s*@import url\([^)]*\);/g, '')
    .replace(/text \{ font-family: [^}]*\}/, 'text { font-family: inherit; }');
}

/** The `title="…"` value from a fence info string, if any. */
function titleFrom(meta: string): string | undefined {
  return /(^|\s)title=(?:"([^"]*)"|'([^']*)')/.exec(meta)?.[2] ?? /(^|\s)title='([^']*)'/.exec(meta)?.[2];
}

export function rehypeMermaid(options: { filePath: string }) {
  return (tree: HastRoot) => {
    visit(tree, 'element', (node: Element, index, parent) => {
      if (node.tagName !== 'pre' || !parent || index === undefined) return;
      const code = node.children.find(
        (child): child is Element => child.type === 'element' && child.tagName === 'code',
      );
      const classes = ((code?.properties?.className ?? []) as unknown[]).map(String);
      if (!code || !classes.includes('language-mermaid')) return;

      const meta = String(code.properties?.['data-meta'] ?? code.properties?.dataMeta ?? '');
      const source = hastToString(code);
      let svg: string;
      try {
        svg = renderMermaid(source);
      } catch (error) {
        throw new Error(`${options.filePath}: mermaid diagram failed to render: ${String(error)}`);
      }

      const title = titleFrom(meta);
      const children: ElementContent[] = [
        {
          type: 'element',
          tagName: 'div',
          properties: { className: ['diagram-scroll'] },
          children: [{ type: 'raw', value: svg } as unknown as ElementContent],
        },
      ];
      if (title) {
        children.push({ type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: title }] });
      }
      parent.children[index] = {
        type: 'element',
        tagName: 'figure',
        properties: { className: ['diagram'], 'data-diagram': 'mermaid' },
        children,
      };
      return 'skip';
    });
  };
}
