/**
 * `::widget` directives -> static HTML.
 *
 * Two forms, both handled by remark-directive before this plugin runs:
 *
 *     ::widget{name="address" address="bb1..." size="large"}
 *
 *     :::widget{name="approval-criteria"}
 *     { "coinTransfers": [...] }
 *     :::
 *
 * Attributes are the props for the leaf form; the container form reads its body
 * as JSON (a ```json fence inside it is fine) and merges attributes over it.
 * The widget is looked up in the registry, its props validated, and the element
 * rendered to an `html` node. Anything wrong throws with the file and line so a
 * broken page fails the build and the corpus test instead of rendering nothing.
 *
 * Runs before `remarkLiteralDirectives` in markdown.ts, which would otherwise
 * turn the directive back into literal text.
 */
import type { Root as MdastRoot } from 'mdast';
import { visit } from 'unist-util-visit';

import { createWidgetElement, isWidgetName, widgetNames } from '../../components/widgets';
import { renderStatic } from './react-static';

type DirectiveNode = {
  type: 'leafDirective' | 'containerDirective';
  name: string;
  attributes?: Record<string, string | null | undefined>;
  position?: { start: { line: number; offset?: number }; end: { line: number; offset?: number } };
};

/** `"true"` / `"false"` become booleans; everything else stays a string for the schema to coerce. */
function coerceAttribute(value: string | null | undefined): unknown {
  if (value === null || value === undefined) return true;
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value;
}

/** The JSON between the opener line and the closing `:::`, minus an optional code fence. */
function containerBody(source: string, node: DirectiveNode): string {
  const start = node.position?.start?.offset;
  const end = node.position?.end?.offset;
  if (start === undefined || end === undefined) return '';
  const lines = source.slice(start, end).split('\n');
  let body = lines.slice(1, -1);
  while (body.length && !body[0].trim()) body.shift();
  while (body.length && !body[body.length - 1].trim()) body.pop();
  if (body.length >= 2 && /^\s*(`{3,}|~{3,})/.test(body[0]) && /^\s*(`{3,}|~{3,})\s*$/.test(body[body.length - 1])) {
    body = body.slice(1, -1);
  }
  return body.join('\n');
}

export function widgetHtml(name: string, props: unknown, caption?: string): string {
  if (!isWidgetName(name)) {
    throw new Error(`unknown widget "${name}" (known: ${widgetNames.join(', ')})`);
  }
  const html = renderStatic(createWidgetElement(name, props));
  if (!caption) return html;
  const escaped = caption.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<div class="widget-block">${html}<p class="widget-caption text-sm text-[var(--fg-faint)]">${escaped}</p></div>`;
}

export function remarkWidgets(options: { filePath: string }) {
  return (tree: MdastRoot, file: { value?: unknown }) => {
    const source = String(file.value ?? '');
    visit(tree, (node: unknown, index, parent: unknown) => {
      const directive = node as DirectiveNode;
      if (!parent || index === undefined) return;
      if (directive.type !== 'leafDirective' && directive.type !== 'containerDirective') return;
      if (directive.name !== 'widget') return;

      const where = `${options.filePath}:${directive.position?.start?.line ?? '?'}`;
      const attrs = directive.attributes ?? {};
      const { name, caption, ...rest } = attrs;
      if (!name) throw new Error(`${where}: ::widget is missing its name attribute`);

      let props: Record<string, unknown> = {};
      if (directive.type === 'containerDirective') {
        const body = containerBody(source, directive);
        if (body.trim()) {
          let json: unknown;
          try {
            json = JSON.parse(body);
          } catch (error) {
            throw new Error(`${where}: widget "${name}" body is not valid JSON (${(error as Error).message})`);
          }
          if (typeof json !== 'object' || json === null || Array.isArray(json)) {
            throw new Error(`${where}: widget "${name}" body must be a JSON object`);
          }
          props = json as Record<string, unknown>;
        }
      }
      for (const [key, value] of Object.entries(rest)) props[key] = coerceAttribute(value);

      let html: string;
      try {
        html = widgetHtml(name, props, caption ?? undefined);
      } catch (error) {
        throw new Error(`${where}: ${(error as Error).message}`);
      }

      (parent as { children: unknown[] }).children[index] = { type: 'html', value: html };
      return index + 1;
    });
  };
}

/**
 * Remove widget directives from markdown meant for machines.
 *
 * Widgets show a reader what bitbadges.io would draw; the JSON next to them
 * already says what an agent needs. `for-llms.txt` and the search index use
 * this so neither carries directive syntax or duplicated props.
 */
export function stripWidgets(markdown: string): string {
  return markdown
    .replace(/^:::widget\{[^\n]*\}\n[\s\S]*?^:::[ \t]*$\n?/gm, '')
    .replace(/^::widget\{[^\n]*\}[ \t]*$\n?/gm, '');
}
