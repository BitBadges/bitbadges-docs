/**
 * Pair a screenshot with its dark twin.
 *
 * The frontend screenshots are captured in both themes and stored as
 * `<name>.png` and `<name>--dark.png`. A page references the light file only;
 * when the twin exists on disk the light image is tagged `data-theme="light"`
 * and a `data-theme="dark"` sibling is added, and the stylesheet shows the one
 * that matches the site theme. Pages never mention the dark file, so a twin
 * can be added or dropped without touching markdown.
 */
import fs from 'node:fs';
import path from 'node:path';
import type { Element, Root as HastRoot } from 'hast';
import { visit } from 'unist-util-visit';
import { docsConfig } from './config';

export const DARK_SUFFIX = '--dark';

/** `foo.png` -> `foo--dark.png`; null when the name already is a dark twin or has no extension. */
export function darkTwinOf(file: string): string | null {
  const match = /^(.*?)(\.[a-z0-9]+)$/i.exec(file);
  if (!match || match[1].endsWith(DARK_SUFFIX)) return null;
  return `${match[1]}${DARK_SUFFIX}${match[2]}`;
}

export function rehypeThemedImages(options: { assetsPrefix: string }) {
  const prefix = `${options.assetsPrefix}/`;
  return (tree: HastRoot) => {
    visit(tree, 'element', (node: Element, index, parent) => {
      if (node.tagName !== 'img' || !parent || index === undefined) return;
      const src = String(node.properties?.src ?? '');
      if (!src.startsWith(prefix) || node.properties?.['data-theme']) return;
      const asset = decodeURIComponent(src.slice(prefix.length));
      const twin = darkTwinOf(asset);
      if (!twin || !fs.existsSync(path.join(docsConfig.contentDir, twin))) return;
      node.properties!['data-theme'] = 'light';
      const dark: Element = {
        type: 'element',
        tagName: 'img',
        properties: { ...node.properties, src: src.replace(asset.split('/').map(encodeURIComponent).join('/'), twin.split('/').map(encodeURIComponent).join('/')), 'data-theme': 'dark' },
        children: [],
      };
      parent.children.splice(index + 1, 0, dark);
      return index + 2;
    });
  };
}
