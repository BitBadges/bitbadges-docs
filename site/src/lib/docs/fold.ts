/**
 * The collapsed view of a code block.
 *
 * A long `json` block hides its boilerplate; a fence may mark line ranges with
 * `fold=12-40,55-80`; `nofold` opts out. The result is a second, shorter
 * source string rendered beside the full one and chosen by the Collapsed and
 * Full tabs in the figure's caption. Nothing is spliced into the listing, so
 * there are no markers where something was hidden.
 *
 * For JSON the collapsed view is pruned structurally, whole members at a time,
 * and is verified to parse before it is used. A reader can copy it and send it
 * as-is: it is a valid document with the same values, just fewer keys.
 */

export type FoldRange = [number, number];

export type FoldMeta = { ranges: FoldRange[] | undefined; nofold: boolean };

const PRUNE_LANGS = new Set(['json', 'jsonc']);
const PRUNE_MIN_LINES = 24;

/**
 * Root-level keys whose value carries meaning even when it looks like
 * boilerplate. An empty `uri` on a collection says the metadata is inline.
 *
 * Only the root is protected. The same name nested inside another object is
 * usually a stub: `precalculateBalancesFromApproval.approvalId` of `""` says
 * this transfer does not precalculate, so showing the wrapper with one empty
 * field tells a reader less than dropping both.
 */
const PROTECTED_KEYS = new Set([
  'approvalId',
  'collectionId',
  'fromListId',
  'toListId',
  'initiatedByListId',
  'amount',
  'uri',
  'creator',
  'manager',
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

/** A value that tells a reader nothing: an empty container, a zero, a false, an empty string. */
function isBoilerplateValue(value: unknown): boolean {
  if (value === false || value === 0 || value === '' || value === '0') return true;
  if (Array.isArray(value)) return value.length === 0;
  if (value && typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

/** Depth-first list of the paths worth hiding, deepest first so nested prunes settle before their parents. */
function boilerplatePaths(value: unknown, at: string[] = [], out: string[][] = []): string[][] {
  if (!value || typeof value !== 'object') return out;
  if (Array.isArray(value)) {
    value.forEach((item, i) => boilerplatePaths(item, [...at, String(i)], out));
    return out;
  }
  for (const [key, child] of Object.entries(value)) {
    const path = [...at, key];
    const protectedHere = at.length === 0 && PROTECTED_KEYS.has(key);
    if (!protectedHere && isBoilerplateValue(child)) out.push(path);
    else boilerplatePaths(child, path, out);
  }
  return out;
}

/** The line range (0-based, inclusive) of one member inside the source, or null when it is written inline. */
function memberLines(lines: string[], key: string, from: number, to: number): [number, number] | null {
  const needle = `"${key}"`;
  for (let i = from; i <= to; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed.startsWith(needle)) continue;
    // An inline member (`"a": 1, "b": 2` on one line) has no line of its own.
    if (!/^"[^"]*"\s*:/.test(trimmed)) continue;
    if (trimmed.replace(/,$/, '').includes('}') || trimmed.replace(/,$/, '').includes(']')) {
      const opens = (trimmed.match(/[[{]/g) ?? []).length;
      const closes = (trimmed.match(/[\]}]/g) ?? []).length;
      if (opens === closes) return [i, i];
    }
    let depth = 0;
    for (let j = i; j <= to; j++) {
      for (const ch of lines[j]) {
        if (ch === '{' || ch === '[') depth++;
        else if (ch === '}' || ch === ']') depth--;
      }
      if (depth <= 0) return [i, j];
    }
    return [i, to];
  }
  return null;
}

/** Drop the trailing comma from the last member of any object or array it now ends. */
function fixTrailingCommas(lines: string[]): string[] {
  const out = [...lines];
  for (let i = 0; i < out.length; i++) {
    if (!out[i].trimEnd().endsWith(',')) continue;
    const next = out.slice(i + 1).find((line) => line.trim().length > 0);
    if (next && /^[}\]]/.test(next.trim())) out[i] = out[i].trimEnd().replace(/,$/, '');
  }
  return out;
}

/**
 * The same JSON document with its boilerplate members removed.
 *
 * Members are cut whole, out of the original text, so every line that survives
 * keeps its indentation and its inline style. The result is parsed before it
 * is returned: anything that would not round-trip is discarded and the block
 * simply has no collapsed view.
 *
 * Returns null when the source is not JSON, or when nothing was worth hiding.
 *
 * One pass is not enough: dropping every member of a nested object leaves the
 * parent behind as an empty `{}`, which is exactly the noise this removes. So
 * the pass repeats until nothing more falls away.
 */
export function pruneJson(source: string): string | null {
  let current = source;
  for (let i = 0; i < 8; i++) {
    const next = pruneOnce(current);
    if (next === null) break;
    current = next;
  }
  return current === source ? null : current;
}

function pruneOnce(source: string): string | null {
  let parsed: unknown;
  try {
    parsed = JSON.parse(source);
  } catch {
    return null;
  }
  if (!parsed || typeof parsed !== 'object') return null;

  const paths = boilerplatePaths(parsed);
  if (paths.length === 0) return null;

  const lines = source.split('\n');
  const drop = new Set<number>();

  for (const path of paths) {
    // Walk down to the object that holds the member, narrowing the line window.
    let from = 0;
    let to = lines.length - 1;
    let ok = true;
    for (const key of path.slice(0, -1)) {
      if (/^\d+$/.test(key)) continue; // Array elements share their parent's window.
      const range = memberLines(lines, key, from, to);
      if (!range) {
        ok = false;
        break;
      }
      [from, to] = range;
    }
    if (!ok) continue;
    const range = memberLines(lines, path[path.length - 1], from, to);
    if (!range) continue;
    for (let i = range[0]; i <= range[1]; i++) drop.add(i);
  }

  if (drop.size === 0) return null;
  const kept = fixTrailingCommas(lines.filter((_, i) => !drop.has(i)));
  const collapsed = kept.join('\n');
  if (collapsed === source) return null;
  try {
    JSON.parse(collapsed);
  } catch {
    return null;
  }
  return collapsed;
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

/**
 * The collapsed source for one block, or null when it has no second view.
 *
 * JSON prunes itself; any other language uses the `fold=` ranges the author
 * marked. `nofold` opts out of both.
 */
export function collapsedSourceFor(lang: string, meta: string, source: string): string | null {
  const { ranges, nofold } = parseFoldMeta(meta);
  if (nofold) return null;

  if (PRUNE_LANGS.has(lang)) {
    // An explicit `fold=` cannot be honored here: cutting arbitrary lines out
    // of JSON leaves a document that does not parse, which is the whole point
    // of pruning instead.
    if (source.split('\n').length < PRUNE_MIN_LINES) return null;
    return pruneJson(source);
  }

  if (!ranges || ranges.length === 0) return null;
  const lines = source.split('\n');
  const drop = new Set<number>();
  for (const [start, end] of normalize(ranges, lines.length)) {
    for (let i = start; i <= end; i++) drop.add(i - 1);
  }
  if (drop.size === 0 || drop.size >= lines.length) return null;
  return lines.filter((_, i) => !drop.has(i)).join('\n');
}
