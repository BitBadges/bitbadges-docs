/**
 * Render a tree of plain React elements to static HTML.
 *
 * `react-dom/server` is not usable here: the markdown pipeline runs inside the
 * React Server Components layer during `next build`, where every
 * `react-dom/server*` entry resolves (via the `react-server` export condition)
 * to a stub that throws. The widget components are pure functions of their
 * props (no hooks, no context, no effects), so a walk over the element tree is
 * all that is needed, and it behaves identically in Next, in `bun test` and in
 * scripts.
 */
import type { ReactNode } from 'react';

const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr',
]);

/** CSS properties that take a bare number (React's `isUnitlessNumber` list, trimmed to what widgets use). */
const UNITLESS = new Set([
  'opacity', 'zIndex', 'flex', 'flexGrow', 'flexShrink', 'fontWeight', 'lineHeight', 'order', 'zoom',
  'strokeWidth', 'fillOpacity', 'strokeOpacity',
]);

const ATTR_RENAME: Record<string, string> = { className: 'class', htmlFor: 'for' };

function escapeText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(value: string): string {
  return escapeText(value).replace(/"/g, '&quot;');
}

function styleToString(style: Record<string, unknown>): string {
  return Object.entries(style)
    .filter(([, v]) => v !== null && v !== undefined && v !== false && v !== '')
    .map(([key, v]) => {
      const name = key.startsWith('--') ? key : key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
      const value = typeof v === 'number' && v !== 0 && !UNITLESS.has(key) ? `${v}px` : String(v);
      return `${name}:${value}`;
    })
    .join(';');
}

function renderAttrs(props: Record<string, unknown>): string {
  let out = '';
  for (const [key, value] of Object.entries(props)) {
    if (key === 'children' || key === 'dangerouslySetInnerHTML' || key === 'key' || key === 'ref') continue;
    if (value === null || value === undefined || value === false) continue;
    const name = ATTR_RENAME[key] ?? key;
    if (value === true) {
      out += ` ${name}`;
      continue;
    }
    if (key === 'style' && typeof value === 'object') {
      const css = styleToString(value as Record<string, unknown>);
      if (css) out += ` style="${escapeAttr(css)}"`;
      continue;
    }
    out += ` ${name}="${escapeAttr(String(value))}"`;
  }
  return out;
}

type ElementLike = { type: unknown; props: Record<string, unknown> };

function isElement(node: unknown): node is ElementLike {
  return typeof node === 'object' && node !== null && 'type' in node && 'props' in node;
}

export function renderStatic(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === 'boolean') return '';
  if (typeof node === 'string') return escapeText(node);
  if (typeof node === 'number' || typeof node === 'bigint') return String(node);
  if (Array.isArray(node)) return node.map(renderStatic).join('');
  if (!isElement(node)) throw new Error(`renderStatic: unsupported node ${String(node)}`);

  const { type, props } = node;
  if (typeof type === 'function') {
    return renderStatic((type as (p: Record<string, unknown>) => ReactNode)(props));
  }
  if (typeof type !== 'string') {
    // Fragment (a symbol) and anything else without a tag name renders its children.
    return renderStatic(props.children as ReactNode);
  }

  const inner = props.dangerouslySetInnerHTML as { __html?: string } | undefined;
  const open = `<${type}${renderAttrs(props)}>`;
  if (VOID.has(type)) return open;
  const body = inner?.__html !== undefined ? String(inner.__html) : renderStatic(props.children as ReactNode);
  return `${open}${body}</${type}>`;
}
