/**
 * Generate the in-site proto reference from the bitbadgeschain source tree.
 *
 * The corpus used to link out to github.com/BitBadges/bitbadgeschain/tree/master/proto
 * for type definitions. This script reads those `.proto` files and emits one
 * markdown page per file under `chain/proto/`, so every message, field, enum and
 * RPC is readable in-site and cannot drift from source.
 *
 * The parser is deliberately small and local: proto3 as this chain writes it,
 * not the full grammar. Adding a protobuf dependency to a docs site would buy a
 * descriptor set we do not need (no options resolution, no extensions).
 *
 * Usage: `bun run gen:proto` (set `BITBADGESCHAIN_DIR` to point elsewhere).
 */
import fs from 'node:fs/promises';
import path from 'node:path';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ProtoField = {
  name: string;
  number: number;
  /** Type as written in source, e.g. `string`, `Balance`, `repeated` stripped. */
  type: string;
  rule: 'repeated' | 'optional' | 'singular';
  comment: string;
  /** Raw `[...]` option text, empty when absent. */
  options: string;
  /** Name of the enclosing `oneof`, empty when the field is not in one. */
  oneof: string;
};

export type ProtoMessage = {
  name: string;
  comment: string;
  fields: ProtoField[];
  /** Declared `oneof` names in source order. */
  oneofs: string[];
};

export type ProtoEnumValue = { name: string; number: number; comment: string };

export type ProtoEnum = { name: string; comment: string; values: ProtoEnumValue[] };

export type ProtoRpc = {
  name: string;
  request: string;
  response: string;
  comment: string;
  /** Lowercase http verb from `option (google.api.http)`, empty when absent. */
  httpMethod: string;
  httpPath: string;
  deprecated: boolean;
};

export type ProtoService = { name: string; comment: string; rpcs: ProtoRpc[] };

export type ProtoFile = {
  /** Path relative to the proto root, e.g. `tokenization/tx.proto`. */
  path: string;
  package: string;
  imports: string[];
  messages: ProtoMessage[];
  enums: ProtoEnum[];
  services: ProtoService[];
  /** Declarations the parser did not recognise. Reported, never silently dropped. */
  unparsed: string[];
};

// ---------------------------------------------------------------------------
// Tokenizer
// ---------------------------------------------------------------------------

type TokenKind = 'stmt' | 'open' | 'close';

type Token = {
  kind: TokenKind;
  /** Whitespace-collapsed text before the `;` or `{`. */
  text: string;
  /** Comment block immediately above the token. */
  comment: string;
  /** Line the token ends on, used to attach trailing comments. */
  line: number;
};

const collapse = (s: string) => s.replace(/\s+/g, ' ').trim();

/** Strip the leading `*` decoration and blank edges from a `/* *\/` comment body. */
function cleanBlockComment(raw: string): string {
  return raw
    .split('\n')
    .map((line) => line.replace(/^\s*\*+ ?/, '').trim())
    .join('\n')
    .trim();
}

/**
 * Split proto source into `;`-terminated statements and `{`/`}` block markers,
 * carrying the comment that precedes each one.
 *
 * Statement-level granularity is enough for every construct this corpus uses and
 * survives declarations wrapped across lines (`rpc X(Req)\n returns (Res)`),
 * which a line-based scanner would split in the wrong place.
 */
export function tokenize(source: string): Token[] {
  const tokens: Token[] = [];
  let buffer = '';
  let pending: string[] = [];
  let line = 1;
  let index = 0;

  const emit = (kind: TokenKind) => {
    tokens.push({ kind, text: collapse(buffer), comment: pending.join('\n\n').trim(), line });
    buffer = '';
    pending = [];
  };

  const addComment = (text: string, startLine: number) => {
    if (!text) return;
    const last = tokens[tokens.length - 1];
    // A comment on the same line as the previous statement trails it (enum
    // values annotate themselves this way) instead of leading the next one.
    if (buffer.trim() === '' && last && last.line === startLine) {
      last.comment = last.comment ? `${last.comment}\n\n${text}` : text;
      return;
    }
    pending.push(text);
  };

  while (index < source.length) {
    const char = source[index];

    if (char === '\n') {
      line += 1;
      buffer += char;
      index += 1;
      continue;
    }

    if (char === '/' && source[index + 1] === '/') {
      const end = source.indexOf('\n', index);
      const stop = end === -1 ? source.length : end;
      addComment(source.slice(index + 2, stop).trim(), line);
      index = stop;
      continue;
    }

    if (char === '/' && source[index + 1] === '*') {
      const end = source.indexOf('*/', index + 2);
      const stop = end === -1 ? source.length : end;
      const raw = source.slice(index + 2, stop);
      const startLine = line;
      line += (raw.match(/\n/g) ?? []).length;
      addComment(cleanBlockComment(raw), startLine);
      index = end === -1 ? source.length : end + 2;
      continue;
    }

    if (char === '"' || char === "'") {
      let cursor = index + 1;
      buffer += char;
      while (cursor < source.length && source[cursor] !== char) {
        if (source[cursor] === '\\') {
          buffer += source.slice(cursor, cursor + 2);
          cursor += 2;
          continue;
        }
        if (source[cursor] === '\n') line += 1;
        buffer += source[cursor];
        cursor += 1;
      }
      buffer += char;
      index = cursor + 1;
      continue;
    }

    if (char === ';') {
      emit('stmt');
      index += 1;
      continue;
    }
    if (char === '{') {
      emit('open');
      index += 1;
      continue;
    }
    if (char === '}') {
      emit('close');
      index += 1;
      continue;
    }

    buffer += char;
    index += 1;
  }

  return tokens;
}

// ---------------------------------------------------------------------------
// Parser
// ---------------------------------------------------------------------------

const FIELD = /^(?:(repeated|optional|required) )?(map\s*<[^>]*>|[A-Za-z_][\w.]*) ?([A-Za-z_]\w*) ?= ?(\d+)(?: ?\[([\s\S]*)\])?$/;
const ENUM_VALUE = /^([A-Za-z_]\w*) ?= ?(-?\d+)(?: ?\[([\s\S]*)\])?$/;
const RPC = /^rpc ([A-Za-z_]\w*) ?\( ?(?:stream )?([\w.]+) ?\) ?returns ?\( ?(?:stream )?([\w.]+) ?\)$/;
const HTTP_OPTION = /^option ?\( ?google\.api\.http ?\) ?\. ?(get|post|put|patch|delete) ?= ?"([^"]*)"$/;

/** Advance past a block whose `open` token was already consumed. */
function skipBlock(tokens: Token[], start: number): number {
  let depth = 1;
  let index = start;
  while (index < tokens.length && depth > 0) {
    if (tokens[index].kind === 'open') depth += 1;
    if (tokens[index].kind === 'close') depth -= 1;
    index += 1;
  }
  return index;
}

function parseMessage(name: string, comment: string, tokens: Token[], start: number, out: ProtoFile) {
  const message: ProtoMessage = { name, comment, fields: [], oneofs: [] };
  let index = start;
  let oneof = '';

  while (index < tokens.length) {
    const token = tokens[index];
    index += 1;

    if (token.kind === 'close') {
      if (token.text) out.unparsed.push(`${out.path}: statement "${token.text}"`);
      if (oneof) {
        oneof = '';
        continue;
      }
      break;
    }

    if (token.kind === 'open') {
      const oneofHead = /^oneof ([A-Za-z_]\w*)$/.exec(token.text);
      if (oneofHead) {
        oneof = oneofHead[1];
        message.oneofs.push(oneof);
        continue;
      }
      const nested = /^(message|enum) ([A-Za-z_]\w*)$/.exec(token.text);
      if (nested) {
        // Nested types are documented as `Parent.Child` at the top level.
        index =
          nested[1] === 'message'
            ? parseMessage(`${name}.${nested[2]}`, token.comment, tokens, index, out)
            : parseEnum(`${name}.${nested[2]}`, token.comment, tokens, index, out);
        continue;
      }
      // An aggregate option value, e.g. `option (cosmos.app.v1alpha1.module) = { ... }`.
      if (!/^option /.test(token.text)) out.unparsed.push(`${out.path}: block "${token.text}"`);
      index = skipBlock(tokens, index);
      continue;
    }

    if (!token.text) continue;
    if (/^(option|reserved|extensions) /.test(token.text)) continue;

    const field = FIELD.exec(token.text);
    if (!field) {
      out.unparsed.push(`${out.path}: statement "${token.text}"`);
      continue;
    }
    message.fields.push({
      name: field[3],
      number: Number(field[4]),
      type: collapse(field[2]),
      rule: field[1] === 'repeated' ? 'repeated' : field[1] === 'optional' ? 'optional' : 'singular',
      comment: token.comment,
      options: field[5] ? collapse(field[5]) : '',
      oneof,
    });
  }

  out.messages.push(message);
  return index;
}

function parseEnum(name: string, comment: string, tokens: Token[], start: number, out: ProtoFile) {
  const enumeration: ProtoEnum = { name, comment, values: [] };
  let index = start;

  while (index < tokens.length) {
    const token = tokens[index];
    index += 1;
    if (token.kind === 'close') {
      if (token.text) out.unparsed.push(`${out.path}: statement "${token.text}"`);
      break;
    }
    if (token.kind === 'open') {
      out.unparsed.push(`${out.path}: block "${token.text}"`);
      index = skipBlock(tokens, index);
      continue;
    }
    if (!token.text) continue;
    if (/^(option|reserved) /.test(token.text)) continue;

    const value = ENUM_VALUE.exec(token.text);
    if (!value) {
      out.unparsed.push(`${out.path}: statement "${token.text}"`);
      continue;
    }
    enumeration.values.push({ name: value[1], number: Number(value[2]), comment: token.comment });
  }

  out.enums.push(enumeration);
  return index;
}

function parseService(name: string, comment: string, tokens: Token[], start: number, out: ProtoFile) {
  const service: ProtoService = { name, comment, rpcs: [] };
  let index = start;

  const rpcFrom = (token: Token): ProtoRpc | null => {
    const match = RPC.exec(token.text);
    if (!match) return null;
    return {
      name: match[1],
      request: match[2],
      response: match[3],
      comment: token.comment,
      httpMethod: '',
      httpPath: '',
      deprecated: false,
    };
  };

  while (index < tokens.length) {
    const token = tokens[index];
    index += 1;
    if (token.kind === 'close') {
      if (token.text) out.unparsed.push(`${out.path}: statement "${token.text}"`);
      break;
    }

    if (token.kind === 'open') {
      const rpc = rpcFrom(token);
      if (!rpc) {
        out.unparsed.push(`${out.path}: block "${token.text}"`);
        index = skipBlock(tokens, index);
        continue;
      }
      // Walk the rpc body for the REST binding and the deprecation marker.
      while (index < tokens.length && tokens[index].kind !== 'close') {
        const body = tokens[index];
        index += 1;
        if (body.kind === 'open') {
          index = skipBlock(tokens, index);
          continue;
        }
        const http = HTTP_OPTION.exec(body.text);
        if (http) {
          rpc.httpMethod = http[1];
          rpc.httpPath = http[2];
          continue;
        }
        if (/^option ?deprecated ?= ?true$/.test(body.text)) rpc.deprecated = true;
      }
      index += 1; // the rpc body's closing brace
      service.rpcs.push(rpc);
      continue;
    }

    if (!token.text) continue;
    if (/^option /.test(token.text)) continue;
    const rpc = rpcFrom(token);
    if (!rpc) {
      out.unparsed.push(`${out.path}: statement "${token.text}"`);
      continue;
    }
    service.rpcs.push(rpc);
  }

  out.services.push(service);
  return index;
}

/** Parse one `.proto` file. `filePath` only labels `unparsed` entries. */
export function parseProto(source: string, filePath = ''): ProtoFile {
  const file: ProtoFile = {
    path: filePath,
    package: '',
    imports: [],
    messages: [],
    enums: [],
    services: [],
    unparsed: [],
  };

  const tokens = tokenize(source);
  let index = 0;

  while (index < tokens.length) {
    const token = tokens[index];
    index += 1;

    if (token.kind === 'close') {
      if (token.text) file.unparsed.push(`${filePath}: statement "${token.text}"`);
      continue;
    }

    if (token.kind === 'open') {
      const head = /^(message|enum|service) ([A-Za-z_]\w*)$/.exec(token.text);
      if (!head) {
        // An aggregate option value, e.g. the cosmos app module descriptor
        // `option (cosmos.app.v1alpha1.module) = { ... }`, carries no types.
        // `extend` and anything else this corpus adds later is recorded rather
        // than silently dropped.
        if (!/^option /.test(token.text)) file.unparsed.push(`${filePath}: block "${token.text}"`);
        index = skipBlock(tokens, index);
        continue;
      }
      if (head[1] === 'message') index = parseMessage(head[2], token.comment, tokens, index, file);
      else if (head[1] === 'enum') index = parseEnum(head[2], token.comment, tokens, index, file);
      else index = parseService(head[2], token.comment, tokens, index, file);
      continue;
    }

    if (!token.text) continue;
    const pkg = /^package ([\w.]+)$/.exec(token.text);
    if (pkg) {
      file.package = pkg[1];
      continue;
    }
    const imported = /^import (?:public |weak )?"([^"]+)"$/.exec(token.text);
    if (imported) {
      file.imports.push(imported[1]);
      continue;
    }
    if (/^(syntax|option|edition) /.test(token.text)) continue;
    file.unparsed.push(`${filePath}: statement "${token.text}"`);
  }

  file.messages.sort((a, b) => a.name.localeCompare(b.name));
  file.enums.sort((a, b) => a.name.localeCompare(b.name));
  return file;
}

// ---------------------------------------------------------------------------
// Markdown rendering
// ---------------------------------------------------------------------------

const SCALARS = new Set([
  'double', 'float', 'int32', 'int64', 'uint32', 'uint64', 'sint32', 'sint64',
  'fixed32', 'fixed64', 'sfixed32', 'sfixed64', 'bool', 'string', 'bytes',
]);

/** GitHub-style anchor slug, matching what rehype-slug produces for a heading. */
export function slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\- ]+/g, '')
    .replace(/ +/g, '-');
}

/** Escape markdown/HTML metacharacters in comment prose. */
function escapeText(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Flatten a comment into one table cell. */
export function cell(text: string): string {
  return escapeText(collapse(text)).replace(/\|/g, '\\|');
}

/** Render a comment as paragraphs, keeping blank-line separation. */
function prose(comment: string): string {
  if (!comment.trim()) return '';
  return comment
    .split(/\n\s*\n/)
    .map((paragraph) => escapeText(collapse(paragraph)).replace(/^#/, '\\#'))
    .filter(Boolean)
    .join('\n\n');
}

// ---------------------------------------------------------------------------
// Corpus assembly
// ---------------------------------------------------------------------------

const NAV_START = '<!-- proto-nav:start (generated by site/scripts/gen-proto-reference.ts) -->';
const NAV_END = '<!-- proto-nav:end -->';

const MODULES: Record<string, { label: string; blurb: string }> = {
  tokenization: { label: 'x/tokenization', blurb: 'The token standard: collections, balances, approvals, permissions, dynamic stores.' },
  gamm: { label: 'x/gamm', blurb: 'The AMM: balancer and stableswap pools, joins, exits, swaps.' },
  poolmanager: { label: 'x/poolmanager', blurb: 'Pool routing, swap routes, taker fees, tracked volume.' },
  sendmanager: { label: 'x/sendmanager', blurb: 'Send restrictions and allowances on the bank module.' },
  managersplitter: { label: 'x/managersplitter', blurb: 'Splits collection manager rights across several addresses.' },
  ibcratelimit: { label: 'x/ibc-rate-limit', blurb: 'Rate limits on IBC transfers by channel, denom, sender and address.' },
  ibchooks: { label: 'x/ibchooks', blurb: 'IBC middleware that calls into CosmWasm contracts on packet receipt.' },
  cosmwasm: { label: 'x/wasm', blurb: 'CosmWasm types the chain extends for the tokenization bindings.' },
};

const GITHUB_BLOB = 'https://github.com/BitBadges/bitbadgeschain/blob/master/proto';

const plural = (count: number, noun: string) => `${count} ${noun}${count === 1 ? '' : 's'}`;
const OUTPUT_DIR_NAME = 'proto';

/** Proto files the reference documents: no versioned snapshots, no legacy `badges`. */
export function isDocumented(relativePath: string): boolean {
  if (!relativePath.endsWith('.proto')) return false;
  const segments = relativePath.split('/');
  if (segments[0] === 'badges') return false;
  // x/tokenization keeps a frozen copy of its types per consensus version
  // (`tokenization/v27` ... `tokenization/v32`). Only the live set is documented.
  if (segments[0] === 'tokenization' && /^v\d+$/.test(segments[1] ?? '')) return false;
  return true;
}

async function listProtoFiles(root: string, dir = ''): Promise<string[]> {
  const entries = await fs.readdir(path.join(root, dir), { withFileTypes: true });
  const out: string[] = [];
  for (const entry of entries) {
    const relative = dir ? `${dir}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      out.push(...(await listProtoFiles(root, relative)));
      continue;
    }
    if (isDocumented(relative)) out.push(relative);
  }
  return out.sort();
}

/** `tokenization/tx.proto` -> `tokenization/tx.md`, relative to `chain/proto/`. */
const pageFor = (protoPath: string) => protoPath.replace(/\.proto$/, '.md');

type Registry = Map<string, { page: string; anchor: string }>;

function buildRegistry(files: ProtoFile[]): Registry {
  const registry: Registry = new Map();
  for (const file of files) {
    const page = pageFor(file.path);
    for (const name of [...file.messages.map((m) => m.name), ...file.enums.map((e) => e.name)]) {
      registry.set(`${file.package}.${name}`, { page, anchor: slug(name) });
    }
  }
  return registry;
}

/** Render a field type as code, linked to its definition when the corpus has one. */
function typeCell(type: string, file: ProtoFile, registry: Registry, fromPage: string): string {
  const code = `\`${type}\``;
  if (SCALARS.has(type) || type.startsWith('map<')) return code;

  // Only fully-qualified names and names local to the file's package resolve.
  // Guessing at a bare last segment would link a cosmos-sdk type to a local one
  // that happens to share its name.
  const target = registry.get(type) ?? registry.get(`${file.package}.${type}`);
  if (!target) return code;

  const relative = path.posix.relative(path.posix.dirname(fromPage), target.page);
  const href = relative === path.posix.basename(fromPage) ? `#${target.anchor}` : `${relative}#${target.anchor}`;
  return `[${code}](${href})`;
}

function renderFilePage(file: ProtoFile, registry: Registry): string {
  const page = pageFor(file.path);
  const moduleKey = file.path.split('/')[0];
  const module = MODULES[moduleKey];
  const counts = [
    file.services.length ? plural(file.services.length, 'service') : '',
    file.messages.length ? plural(file.messages.length, 'message') : '',
    file.enums.length ? plural(file.enums.length, 'enum') : '',
  ].filter(Boolean);

  const description = `Generated schema for ${file.path}: ${counts.join(', ')} in the ${module?.label ?? file.package} module.`.slice(0, 158);

  const lines: string[] = [];
  lines.push('---');
  lines.push(`description: "${description.replace(/"/g, "'")}"`);
  lines.push('---');
  lines.push('');
  lines.push(`# ${file.path}`);
  lines.push('');
  const moduleHref = path.posix.relative(path.posix.dirname(page), `${moduleKey}/README.md`);
  lines.push(
    `Proto package \`${file.package}\`, part of the ${module ? `[${module.label}](${moduleHref})` : file.package} module. It declares ${counts.join(', ')}. [Read the raw source](${GITHUB_BLOB}/${file.path}).`,
  );
  lines.push('');

  for (const service of file.services) {
    lines.push(`## Service ${service.name}`);
    lines.push('');
    if (service.comment) {
      lines.push(prose(service.comment));
      lines.push('');
    }
    lines.push('| RPC | Request | Response | REST path | Description |');
    lines.push('| --- | --- | --- | --- | --- |');
    for (const rpc of service.rpcs) {
      const rest = rpc.httpPath ? `\`${rpc.httpMethod.toUpperCase()} ${rpc.httpPath}\`` : 'none';
      const note = [rpc.deprecated ? '**Deprecated.**' : '', cell(rpc.comment)].filter(Boolean).join(' ');
      lines.push(
        `| \`${rpc.name}\` | ${typeCell(rpc.request, file, registry, page)} | ${typeCell(rpc.response, file, registry, page)} | ${rest} | ${note || ' '} |`,
      );
    }
    lines.push('');
  }

  if (file.messages.length) {
    lines.push('## Messages');
    lines.push('');
    for (const message of file.messages) {
      lines.push(`### ${message.name}`);
      lines.push('');
      if (message.comment) {
        lines.push(prose(message.comment));
        lines.push('');
      }
      if (!message.fields.length) {
        lines.push('No fields.');
        lines.push('');
        continue;
      }
      if (message.oneofs.length) {
        lines.push(`Fields marked \`oneof ${message.oneofs.join('`, `oneof ')}\` are mutually exclusive.`);
        lines.push('');
      }
      lines.push('| Field | # | Type | Rule | Description |');
      lines.push('| --- | --- | --- | --- | --- |');
      for (const field of message.fields) {
        const rule = field.oneof ? `oneof \`${field.oneof}\`` : field.rule;
        lines.push(
          `| \`${field.name}\` | ${field.number} | ${typeCell(field.type, file, registry, page)} | ${rule} | ${cell(field.comment) || ' '} |`,
        );
      }
      lines.push('');
    }
  }

  if (file.enums.length) {
    lines.push('## Enums');
    lines.push('');
    for (const enumeration of file.enums) {
      lines.push(`### ${enumeration.name}`);
      lines.push('');
      if (enumeration.comment) {
        lines.push(prose(enumeration.comment));
        lines.push('');
      }
      lines.push('| Value | # | Description |');
      lines.push('| --- | --- | --- |');
      for (const value of enumeration.values) {
        lines.push(`| \`${value.name}\` | ${value.number} | ${cell(value.comment) || ' '} |`);
      }
      lines.push('');
    }
  }

  return `${lines.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd()}\n`;
}

function renderModulePage(moduleKey: string, files: ProtoFile[]): string {
  const module = MODULES[moduleKey];
  const label = module?.label ?? moduleKey;
  const messages = files.reduce((n, f) => n + f.messages.length, 0);
  const services = files.reduce((n, f) => n + f.services.length, 0);

  const lines: string[] = [];
  lines.push('---');
  lines.push(
    `description: "Proto schema for the ${label} module: ${files.length} files, ${messages} messages, ${services} services."`,
  );
  lines.push('---');
  lines.push('');
  lines.push(`# ${label} proto`);
  lines.push('');
  lines.push(`${module?.blurb ?? `Schema for the ${label} module.`} Generated from \`proto/${moduleKey}\` in the chain repo.`);
  lines.push('');
  lines.push('| File | Contents |');
  lines.push('| --- | --- |');
  for (const file of files) {
    const parts = [
      file.services.length ? plural(file.services.length, 'service') : '',
      file.messages.length ? plural(file.messages.length, 'message') : '',
      file.enums.length ? plural(file.enums.length, 'enum') : '',
    ].filter(Boolean);
    const href = path.posix.relative(moduleKey, pageFor(file.path));
    lines.push(`| [${file.path}](${href}) | ${parts.join(', ') || 'no types'} |`);
  }
  lines.push('');
  if (moduleKey === 'tokenization') {
    lines.push(
      'The prose reference for these messages is [Token Standard messages](../../../token-standard/messages/README.md) and [queries](../../../token-standard/queries/README.md). Read those first; this tree is the raw schema.',
    );
    lines.push('');
  }
  return `${lines.join('\n')}`;
}

function renderIndex(byModule: Map<string, ProtoFile[]>, total: { messages: number; services: number; enums: number }): string {
  const lines: string[] = [];
  lines.push('---');
  lines.push(
    `description: "Generated proto schema for every BitBadges chain module: ${total.messages} messages, ${total.services} services, ${total.enums} enums, with fields, types and comments."`,
  );
  lines.push('---');
  lines.push('');
  lines.push('# Proto reference');
  lines.push('');
  lines.push(
    'Every protobuf message, field, enum and RPC the chain defines, read straight from `proto/` in the chain repo. Use it when you need the exact wire type, field number, or the comment that ships with the definition.',
  );
  lines.push('');
  lines.push(
    'These pages are generated by `site/scripts/gen-proto-reference.ts`. Do not edit them by hand. Run `bun run gen:proto` from `site/` after the chain schema changes.',
  );
  lines.push('');
  lines.push('| Module | Files | Messages | Services |');
  lines.push('| --- | --- | --- | --- |');
  for (const [key, files] of byModule) {
    const label = MODULES[key]?.label ?? key;
    const messages = files.reduce((n, f) => n + f.messages.length, 0);
    const services = files.reduce((n, f) => n + f.services.length, 0);
    lines.push(`| [${label}](${key}/README.md) | ${files.length} | ${messages} | ${services} |`);
  }
  lines.push('');
  lines.push('## Read the prose first');
  lines.push('');
  lines.push(
    'For `x/tokenization`, [/token-standard/messages](../../token-standard/messages/README.md) and [/token-standard/queries](../../token-standard/queries/README.md) are the documented surface. Each page there explains what a message does, when to send it, and shows a working example. This tree is the raw schema behind those pages: field numbers, wire types, and the source comments.',
  );
  lines.push('');
  lines.push('| You want | Go to |');
  lines.push('| --- | --- |');
  lines.push('| What a message does and how to send it | [Token Standard messages](../../token-standard/messages/README.md) |');
  lines.push('| What a query returns and its REST path | [Token Standard queries](../../token-standard/queries/README.md) |');
  lines.push('| The exact field number, type or comment | The module pages above |');
  lines.push('| The module in Go | [Chain modules](../modules/README.md) |');
  lines.push('');
  lines.push('## What is not here');
  lines.push('');
  lines.push(
    'The chain source keeps a frozen copy of the `x/tokenization` types for each past consensus version, in `proto/tokenization/v27` through `proto/tokenization/v32`. Those exist only so old blocks stay decodable. This reference documents the current unversioned set. Read the historical copies in [the chain repo](https://github.com/BitBadges/bitbadgeschain/tree/master/proto/tokenization) when you decode pre-upgrade state.',
  );
  lines.push('');
  lines.push(
    'The source also keeps the legacy `badges` package (`proto/badges/params.proto` and `proto/badges/tx.proto`). It predates `x/tokenization` and is not part of the live surface, so it is not documented here.',
  );
  lines.push('');
  return `${lines.join('\n')}`;
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

export async function generate(chainDir: string, contentDir: string) {
  const protoRoot = path.join(chainDir, 'proto');
  const paths = await listProtoFiles(protoRoot);

  const files: ProtoFile[] = [];
  for (const relative of paths) {
    const source = await fs.readFile(path.join(protoRoot, relative), 'utf8');
    files.push(parseProto(source, relative));
  }

  const withTypes = files.filter((f) => f.messages.length || f.enums.length || f.services.length);
  const empty = files.filter((f) => !withTypes.includes(f));
  const registry = buildRegistry(withTypes);

  const outDir = path.join(contentDir, 'chain', OUTPUT_DIR_NAME);
  await fs.rm(outDir, { recursive: true, force: true });

  const byModule = new Map<string, ProtoFile[]>();
  for (const file of withTypes) {
    const key = file.path.split('/')[0];
    byModule.set(key, [...(byModule.get(key) ?? []), file]);
  }

  let written = 0;
  for (const file of withTypes) {
    const target = path.join(outDir, pageFor(file.path));
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, renderFilePage(file, registry));
    written += 1;
  }

  for (const [key, moduleFiles] of byModule) {
    await fs.writeFile(path.join(outDir, key, 'README.md'), renderModulePage(key, moduleFiles));
    written += 1;
  }

  const total = {
    messages: withTypes.reduce((n, f) => n + f.messages.length, 0),
    services: withTypes.reduce((n, f) => n + f.services.length, 0),
    enums: withTypes.reduce((n, f) => n + f.enums.length, 0),
  };
  await fs.writeFile(path.join(outDir, 'README.md'), renderIndex(byModule, total));
  written += 1;

  const navChanged = await writeProtoNav(path.join(contentDir, 'SUMMARY.md'), byModule);

  const unparsed = files.flatMap((f) => f.unparsed);
  return { written, files: withTypes.length, empty: empty.map((f) => f.path), total, unparsed, navChanged };
}


/**
 * Rewrite the proto block in SUMMARY.md so every generated page has a sidebar
 * entry. Without this the module indexes are reachable but their file pages
 * are orphaned in the nav. The block is delimited by markers so the rest of
 * SUMMARY.md, which people maintain by hand, is never touched.
 */
export function renderProtoNav(byModule: Map<string, ProtoFile[]>): string {
  const lines = [NAV_START, '* [Proto reference](chain/proto/README.md)'];
  for (const key of Object.keys(MODULES)) {
    const moduleFiles = byModule.get(key);
    if (!moduleFiles?.length) continue;
    lines.push(`  * [${MODULES[key].label}](chain/proto/${key}/README.md)`);
    for (const file of [...moduleFiles].sort((a, b) => a.path.localeCompare(b.path))) {
      const short = file.path.startsWith(`${key}/`) ? file.path.slice(key.length + 1) : file.path;
      lines.push(`    * [${short}](chain/proto/${pageFor(file.path)})`);
    }
  }
  lines.push(NAV_END);
  return lines.join('\n');
}

async function writeProtoNav(summaryPath: string, byModule: Map<string, ProtoFile[]>): Promise<boolean> {
  const summary = await fs.readFile(summaryPath, 'utf8');
  const start = summary.indexOf(NAV_START);
  const end = summary.indexOf(NAV_END);
  if (start === -1 || end === -1) {
    throw new Error(`gen-proto-reference: ${NAV_START} / ${NAV_END} markers not found in ${summaryPath}`);
  }
  const next = summary.slice(0, start) + renderProtoNav(byModule) + summary.slice(end + NAV_END.length);
  if (next === summary) return false;
  await fs.writeFile(summaryPath, next);
  return true;
}

if (import.meta.main) {
  const chainDir = path.resolve(process.cwd(), process.env.BITBADGESCHAIN_DIR?.trim() || '../../bitbadgeschain');
  const contentDir = path.resolve(process.cwd(), process.env.DOCS_CONTENT_DIR?.trim() || '..');

  const result = await generate(chainDir, contentDir);
  console.log(`proto: read ${result.files} file(s) from ${chainDir}/proto`);
  console.log(`proto: ${result.total.messages} messages, ${result.total.services} services, ${result.total.enums} enums`);
  console.log(`proto: wrote ${result.written} page(s) to ${path.relative(process.cwd(), path.join(contentDir, 'chain', OUTPUT_DIR_NAME))}`);
  if (result.empty.length) console.log(`proto: skipped ${result.empty.length} file(s) with no types: ${result.empty.join(', ')}`);
  console.log(`proto: SUMMARY.md nav ${result.navChanged ? 'updated' : 'already current'}`);
  if (result.unparsed.length) {
    console.log(`proto: ${result.unparsed.length} unparsed declaration(s):`);
    for (const item of result.unparsed) console.log(`  ${item}`);
  }
}
