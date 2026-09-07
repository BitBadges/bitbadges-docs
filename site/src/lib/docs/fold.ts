/**
 * Collapsible line ranges in code blocks.
 *
 * Authors mark ranges on the fence (` ```json fold=12-40,55-80 `); long
 * `json`/`jsonc` blocks fold their boilerplate automatically unless `nofold`
 * is present. The rendered fold is a native `<details>` so no script is
 * needed to toggle it, and the full source stays in the DOM and on the copy
 * attribute.
 */
import type { Element, ElementContent } from 'hast';

export type FoldRange = [number, number];

export type FoldMeta = { ranges: FoldRange[] | undefined; nofold: boolean };

const AUTO_FOLD_LANGS = new Set(['json', 'jsonc']);
const AUTO_FOLD_MIN_LINES = 41;
const AUTO_FOLD_MIN_RUN = 6;
const AUTO_FOLD_EDGE = 2;

const PROTECTED_KEYS = new Set([
  'approvalId',
  'collectionId',
  'fromListId',
  'toListId',
  'initiatedByListId',
  'amount',
  'uri',
]);

/** Read `fold=` and `nofold` off a fence info string (the part after the language). */
export function parseFoldMeta(meta: string): FoldMeta {
  const nofold = /(^|\s)nofold(\s|$)/.test(meta);
  const match = /(^|\s)fold=(?:"([^"]*)"|'([^']*)'|(\S*))/.exec(meta);
  if (!match) return { ranges: undefined, nofold };
  const value = match[2] ?? match[3] ?? match[4] ?? '';
  const ranges: FoldRange[] = [];
  for (const part of value.split(',')) {
    const range = /^(\d+)-(\d+)$/.exec(part.trim());
    if (range) ranges.push([Number(range[1]), Number(range[2])]);
  }
  return { ranges, nofold };
}

/** Value-only patterns that carry no information a reader needs to see. */
const BOILERPLATE_VALUE = /^(?:"([^"]*)"\s*:\s*)?(?:\[\]|\{\}|false|"0"|""|0)$/;
const BARE_BRACKETS = /^[\[\]{}]+$/;
const FULL_RANGE = /"18446744073709551615"/;
const KEY = /^"([^"]*)"\s*:/;

function isBoilerplate(raw: string): boolean {
  const line = raw.trim().replace(/,$/, '');
  const key = KEY.exec(line)?.[1];
  if (key && PROTECTED_KEYS.has(key)) return false;
  return BOILERPLATE_VALUE.test(line) || BARE_BRACKETS.test(line) || FULL_RANGE.test(line);
}

/**
 * Ranges (1-based, inclusive) of boilerplate runs worth hiding in a long JSON
 * block. Blocks of 40 lines or fewer, runs shorter than 6 lines, the first
 * and last two lines, and lines keyed by an identifier a reader needs are all
 * left visible.
 */
export function autoFoldRanges(lines: string[]): FoldRange[] {
  if (lines.length < AUTO_FOLD_MIN_LINES) return [];
  const ranges: FoldRange[] = [];
  let runStart = -1;
  const flush = (end: number) => {
    if (runStart !== -1 && end - runStart + 1 >= AUTO_FOLD_MIN_RUN) ranges.push([runStart + 1, end + 1]);
    runStart = -1;
  };
  for (let i = 0; i < lines.length; i++) {
    const foldable = i >= AUTO_FOLD_EDGE && i < lines.length - AUTO_FOLD_EDGE && isBoilerplate(lines[i]);
    if (foldable) {
      if (runStart === -1) runStart = i;
    } else {
      flush(i - 1);
    }
  }
  flush(lines.length - 1);
  return ranges;
}

/** Clamp to the block, drop empties, sort, and merge overlaps. */
function normalize(ranges: FoldRange[], lineCount: number): FoldRange[] {
  const sorted = ranges
    .map(([s, e]): FoldRange => [Math.max(1, s), Math.min(lineCount, e)])
    .filter(([s, e]) => s <= e)
    .sort((a, b) => a[0] - b[0]);
  const out: FoldRange[] = [];
  for (const range of sorted) {
    const last = out[out.length - 1];
    if (last && range[0] <= last[1] + 1) last[1] = Math.max(last[1], range[1]);
    else out.push([range[0], range[1]]);
  }
  return out;
}

/** The ranges a block should fold, from its language, fence meta and source. */
export function foldRangesFor(lang: string, meta: string, source: string): FoldRange[] {
  const lines = source.split('\n');
  const parsed = parseFoldMeta(meta);
  if (parsed.ranges) return normalize(parsed.ranges, lines.length);
  if (parsed.nofold || !AUTO_FOLD_LANGS.has(lang)) return [];
  return normalize(autoFoldRanges(lines), lines.length);
}

export function serializeRanges(ranges: FoldRange[]): string {
  return ranges.map(([s, e]) => `${s}-${e}`).join(',');
}

export function deserializeRanges(value: string): FoldRange[] {
  return parseFoldMeta(`fold=${value}`).ranges ?? [];
}

/** Shiki writes `class`, hast-util-to-html expects `className`; accept both. */
const isLine = (node: ElementContent): node is Element => {
  if (node.type !== 'element' || node.tagName !== 'span') return false;
  const classes = node.properties?.className ?? node.properties?.class;
  return Array.isArray(classes) ? classes.includes('line') : String(classes ?? '').split(/\s+/).includes('line');
};

/**
 * Wrap the given line ranges of a Shiki `<code>` element in `<details>`.
 *
 * Shiki emits one `span.line` per source line, separated by `\n` text nodes.
 * Each line and its trailing newline move together, so the visible text is
 * byte-identical whether the fold is open or closed. Returns the number of
 * folds made.
 */
export function applyCodeFolds(code: Element, ranges: FoldRange[]): number {
  const units: ElementContent[][] = [];
  for (const child of code.children) {
    if (isLine(child)) units.push([child]);
    else if (units.length) units[units.length - 1].push(child);
    else units.push([child]);
  }

  const next: ElementContent[] = [];
  let folds = 0;
  let cursor = 0;
  for (const [start, end] of ranges) {
    const from = start - 1;
    const to = Math.min(end, units.length);
    if (from >= to || from < cursor) continue;
    next.push(...units.slice(cursor, from).flat());
    const hidden = to - from;
    next.push({
      type: 'element',
      tagName: 'details',
      properties: { className: ['code-fold'] },
      children: [
        {
          type: 'element',
          tagName: 'summary',
          properties: {},
          children: [{ type: 'text', value: `··· ${hidden} line${hidden === 1 ? '' : 's'} hidden (${from + 1}-${to})` }],
        },
        {
          // The folded lines stay in the flow, clipped to zero height by the
          // stylesheet, so a mouse selection dragged across a closed fold
          // still picks them up — the browser's own hiding of details content
          // would leave them out of the selection. Hidden from assistive tech
          // while closed; `CopyButtons` clears the attribute when it opens.
          type: 'element',
          tagName: 'span',
          properties: { className: ['code-fold-lines'], ariaHidden: 'true' },
          children: units.slice(from, to).flat(),
        },
      ],
    });
    cursor = to;
    folds++;
  }
  next.push(...units.slice(cursor).flat());
  code.children = next;
  return folds;
}
