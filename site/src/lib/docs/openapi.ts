/**
 * Prepare an OpenAPI document for the self-hosted reference.
 *
 * Stoplight is not a plain OpenAPI renderer — it honours vendor extensions and
 * tolerates spec defects that a strict renderer does not. This module closes
 * both gaps so the self-hosted reference shows the same surface Stoplight
 * publishes today:
 *
 *   1. `x-internal: true` hides an item from Stoplight's published docs. Scalar
 *      ignores the extension, so anything marked internal is removed here.
 *   2. Directly self-referential schemas make Scalar's dereferencer recurse
 *      until the stack overflows. The back-edge is replaced with a titled stub.
 *   3. `$ref`s pointing at schemas that do not exist are stubbed, so one broken
 *      reference cannot blank the whole page.
 *
 * The input document is never mutated.
 */

type Json = Record<string, any>;

export type SanitizeOptions = {
  /**
   * Wrap the top-level sections of `info.description` under a single heading.
   *
   * Scalar turns every heading in the description into a sidebar entry. The
   * BitBadges description has seven `h1`s, which push the actual endpoints far
   * down the rail. Demoting them under one parent collapses them into a single
   * expandable section.
   */
  groupDescriptionUnder?: string;
};

export type SanitizeReport = {
  /** `"<method> <path>"` for each operation hidden by `x-internal`. */
  hiddenOperations: string[];
  /** Schema names whose self-reference was replaced with a stub. */
  cutSelfRefs: string[];
  /** Schema names referenced but never defined in the source document. */
  stubbedRefs: string[];
};

const HTTP_METHODS = new Set(['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace']);
const SCHEMA_PREFIX = '#/components/schemas/';

const isInternal = (node: unknown): boolean =>
  typeof node === 'object' && node !== null && (node as Json)['x-internal'] === true;

/** Deep clone that drops every item flagged `x-internal: true`. */
function pruneInternal(node: unknown): unknown {
  if (Array.isArray(node)) return node.filter((item) => !isInternal(item)).map(pruneInternal);
  if (typeof node !== 'object' || node === null) return node;

  const out: Json = {};
  for (const [key, value] of Object.entries(node as Json)) {
    if (isInternal(value)) continue;
    out[key] = pruneInternal(value);
  }
  return out;
}

/** Every schema name reachable via a local `$ref`. */
function collectRefs(node: unknown, found: Set<string>): Set<string> {
  if (Array.isArray(node)) {
    for (const item of node) collectRefs(item, found);
    return found;
  }
  if (typeof node !== 'object' || node === null) return found;

  for (const [key, value] of Object.entries(node as Json)) {
    if (key === '$ref' && typeof value === 'string' && value.startsWith(SCHEMA_PREFIX)) {
      found.add(value.slice(SCHEMA_PREFIX.length));
    } else {
      collectRefs(value, found);
    }
  }
  return found;
}

/** Replace `$ref`s back to `owner` with a titled stub, breaking the cycle. */
function cutSelfReference(node: unknown, owner: string): { value: unknown; cut: boolean } {
  if (Array.isArray(node)) {
    let cut = false;
    const value = node.map((item) => {
      const result = cutSelfReference(item, owner);
      cut ||= result.cut;
      return result.value;
    });
    return { value, cut };
  }
  if (typeof node !== 'object' || node === null) return { value: node, cut: false };

  const source = node as Json;
  if (source.$ref === `${SCHEMA_PREFIX}${owner}`) {
    return {
      value: { title: owner, description: `Recursive reference to ${owner}.` },
      cut: true,
    };
  }

  let cut = false;
  const out: Json = {};
  for (const [key, value] of Object.entries(source)) {
    const result = cutSelfReference(value, owner);
    cut ||= result.cut;
    out[key] = result.value;
  }
  return { value: out, cut };
}

const MAX_HEADING_DEPTH = 6;

/** Demote every markdown heading by one level, ignoring fenced code blocks. */
function demoteHeadings(markdown: string): string {
  const lines = markdown.split('\n');
  let fence: string | null = null;

  return lines
    .map((line) => {
      const fenceMatch = /^\s{0,3}(`{3,}|~{3,})/.exec(line);
      if (fenceMatch) {
        const marker = fenceMatch[1][0];
        if (fence === null) fence = marker;
        else if (marker === fence) fence = null;
        return line;
      }
      if (fence !== null) return line;

      const heading = /^(#{1,6})(\s+)/.exec(line);
      if (!heading || heading[1].length >= MAX_HEADING_DEPTH) return line;
      return `#${line}`;
    })
    .join('\n');
}

export function sanitizeOpenApi<T extends Json>(
  input: T,
  options: SanitizeOptions = {},
): { spec: T; report: SanitizeReport } {
  const hiddenOperations: string[] = [];

  for (const [route, item] of Object.entries((input.paths ?? {}) as Json)) {
    if (isInternal(item)) {
      for (const method of Object.keys(item as Json)) {
        if (HTTP_METHODS.has(method)) hiddenOperations.push(`${method} ${route}`);
      }
      continue;
    }
    for (const [method, operation] of Object.entries(item as Json)) {
      if (HTTP_METHODS.has(method) && isInternal(operation)) hiddenOperations.push(`${method} ${route}`);
    }
  }

  const spec = pruneInternal(input) as T;

  // A path item with every operation hidden would render as an empty entry.
  if (spec.paths) {
    for (const [route, item] of Object.entries(spec.paths as Json)) {
      const hasOperation = Object.keys(item as Json).some((key) => HTTP_METHODS.has(key));
      if (!hasOperation) delete (spec.paths as Json)[route];
    }
  }

  const schemas = (spec.components?.schemas ?? {}) as Json;

  const cutSelfRefs: string[] = [];
  for (const [name, schema] of Object.entries(schemas)) {
    const { value, cut } = cutSelfReference(schema, name);
    if (cut) {
      schemas[name] = value;
      cutSelfRefs.push(name);
    }
  }

  const stubbedRefs: string[] = [];
  for (const name of collectRefs(spec, new Set())) {
    if (name in schemas) continue;
    schemas[name] = {
      title: name,
      description: `\`${name}\` is referenced by this API but is not defined in the source OpenAPI document.`,
    };
    stubbedRefs.push(name);
  }

  if (stubbedRefs.length > 0) {
    const target = spec as Json;
    target.components ??= {};
    target.components.schemas = schemas;
  }

  const description = spec.info?.description;
  if (options.groupDescriptionUnder && typeof description === 'string') {
    (spec.info as Json).description = `# ${options.groupDescriptionUnder}\n\n${demoteHeadings(description)}`;
  }

  return {
    spec,
    report: {
      hiddenOperations: hiddenOperations.sort(),
      cutSelfRefs: cutSelfRefs.sort(),
      stubbedRefs: stubbedRefs.sort(),
    },
  };
}
