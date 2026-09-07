/**
 * Build the reader-facing OpenAPI 3.1 document for the BitBadges chain LCD.
 *
 * The chain's swagger generator emits a Swagger 2.0 document with exactly two
 * tags — `Query` and `Msg` — across 280+ paths. That is unusable as a
 * reference: every operation lands in one of two buckets and the reader cannot
 * tell `x/tokenization` from `x/gamm`. This script converts the document to
 * OpenAPI 3.1 and retags every operation by the module its path belongs to.
 *
 * PORTABILITY CONTRACT: this file is self-contained on purpose. It imports
 * nothing but `node:` builtins — no docs-site config, no `src/lib`, no npm
 * dependency — so the whole file can be copied into the chain repo as
 * `scripts/gen-openapi.ts` and run there unchanged. Input and output paths come
 * from argv/env. Keep it that way.
 *
 * Usage:
 *   bun scripts/gen-chain-openapi.ts [--in <swagger.json>] [--out <a.json> ...]
 *   BITBADGESCHAIN_DIR=/path/to/bitbadgeschain bun scripts/gen-chain-openapi.ts
 */
import fs from 'node:fs/promises';
import path from 'node:path';

export type Json = Record<string, any>;

/* ==========================================================================
   1. Swagger 2.0 -> OpenAPI 3.1
   ========================================================================== */

export const HTTP_METHODS = new Set(['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace']);

/** Parameter keys that stay on the Parameter Object; everything else is schema. */
const PARAMETER_KEYS = new Set(['name', 'in', 'description', 'required', 'deprecated', 'allowEmptyValue']);

const COLLECTION_FORMATS: Record<string, { style: string; explode: boolean }> = {
  csv: { style: 'form', explode: false },
  multi: { style: 'form', explode: true },
  ssv: { style: 'spaceDelimited', explode: false },
  pipes: { style: 'pipeDelimited', explode: false },
  tsv: { style: 'form', explode: false },
};

export type ConvertReport = {
  /** `"<method> <path>"` for each body parameter turned into a requestBody. */
  requestBodies: string[];
  /** Number of `$ref`s rewritten out of the Swagger 2.0 namespaces. */
  rewrittenRefs: number;
  /** Definitions moved to `components.schemas`. */
  movedSchemas: number;
  /** Swagger constructs seen but not converted (should stay empty). */
  unhandled: string[];
};

const REF_MAP: [RegExp, string][] = [
  [/^#\/definitions\//, '#/components/schemas/'],
  [/^#\/responses\//, '#/components/responses/'],
  [/^#\/parameters\//, '#/components/parameters/'],
];

/** Rewrite every local `$ref` from the Swagger 2.0 layout to the 3.x one. */
export function rewriteRefs(node: unknown, counter = { n: 0 }): unknown {
  if (Array.isArray(node)) return node.map((item) => rewriteRefs(item, counter));
  if (typeof node !== 'object' || node === null) return node;

  const out: Json = {};
  for (const [key, value] of Object.entries(node as Json)) {
    if (key === '$ref' && typeof value === 'string') {
      const rule = REF_MAP.find(([pattern]) => pattern.test(value));
      if (rule) {
        counter.n += 1;
        out.$ref = value.replace(rule[0], rule[1]);
        continue;
      }
    }
    out[key] = rewriteRefs(value, counter);
  }
  return out;
}

/**
 * Convert a Swagger 2.0 schema to a JSON Schema 2020-12 one.
 *
 * The transform is small because the constructs that actually differ are few:
 * `x-nullable`/`nullable` becomes a type union, boolean `exclusiveMinimum`
 * becomes a numeric bound, and `type: file` becomes a binary string.
 */
export function convertSchema(node: unknown, unhandled: Set<string>): unknown {
  if (Array.isArray(node)) return node.map((item) => convertSchema(item, unhandled));
  if (typeof node !== 'object' || node === null) return node;

  const source = node as Json;
  const out: Json = {};

  for (const [key, value] of Object.entries(source)) {
    if (key === 'nullable' || key === 'x-nullable') continue;
    if (key === 'exclusiveMinimum' || key === 'exclusiveMaximum') continue;
    if (key === 'discriminator' && typeof value === 'string') {
      out.discriminator = { propertyName: value };
      continue;
    }
    if (key === 'required' && Array.isArray(value) && value.length === 0) continue;
    out[key] = convertSchema(value, unhandled);
  }

  if (out.type === 'file') {
    out.type = 'string';
    out.format = 'binary';
  }

  // OpenAPI 3.1 / JSON Schema 2020-12 replaced the boolean flags with numbers.
  for (const [flag, bound] of [
    ['exclusiveMinimum', 'minimum'],
    ['exclusiveMaximum', 'maximum'],
  ] as const) {
    if (source[flag] === true && typeof source[bound] === 'number') {
      out[flag] = source[bound];
      delete out[bound];
    } else if (typeof source[flag] === 'number') {
      out[flag] = source[flag];
    } else if (source[flag] === false) {
      // The default; nothing to carry over.
    } else if (source[flag] !== undefined) {
      unhandled.add(`${flag}: ${JSON.stringify(source[flag])}`);
    }
  }

  if (source.nullable === true || source['x-nullable'] === true) {
    if (typeof out.type === 'string') out.type = [out.type, 'null'];
    else if (Array.isArray(out.type) && !out.type.includes('null')) out.type = [...out.type, 'null'];
  }

  return out;
}

/** Split a Swagger 2.0 parameter list into 3.x parameters plus a requestBody. */
export function convertParameters(
  parameters: Json[],
  consumes: string[],
  unhandled: Set<string>,
): { parameters: Json[]; requestBody?: Json } {
  const out: Json[] = [];
  let requestBody: Json | undefined;
  const formData: Json = { type: 'object', properties: {}, required: [] as string[] };
  let sawFormData = false;

  for (const parameter of parameters) {
    if (parameter.in === 'body') {
      requestBody = {
        description: parameter.description,
        required: parameter.required ?? false,
        content: Object.fromEntries(
          consumes.map((type) => [type, { schema: convertSchema(parameter.schema ?? {}, unhandled) }]),
        ),
      };
      if (requestBody.description === undefined) delete requestBody.description;
      continue;
    }

    if (parameter.in === 'formData') {
      sawFormData = true;
      const { name, required, in: _in, collectionFormat: _cf, ...rest } = parameter;
      formData.properties[name] = convertSchema(rest, unhandled);
      if (required) formData.required.push(name);
      continue;
    }

    const converted: Json = {};
    const schema: Json = {};
    for (const [key, value] of Object.entries(parameter)) {
      if (PARAMETER_KEYS.has(key)) converted[key] = value;
      else if (key === 'collectionFormat') {
        const style = COLLECTION_FORMATS[value as string];
        if (style) Object.assign(converted, style);
        else unhandled.add(`collectionFormat: ${value}`);
      } else if (key === 'x-example') schema.example = value;
      else schema[key] = value;
    }
    // `path` parameters are always required in 3.x; the generator sometimes
    // omits the flag, which makes the document invalid.
    if (converted.in === 'path') converted.required = true;
    converted.schema = convertSchema(schema, unhandled);
    out.push(converted);
  }

  if (sawFormData) {
    if (formData.required.length === 0) delete formData.required;
    requestBody = {
      required: true,
      content: { 'application/x-www-form-urlencoded': { schema: formData } },
    };
  }

  return requestBody ? { parameters: out, requestBody } : { parameters: out };
}

/** Convert a Swagger 2.0 response into a 3.x one. */
function convertResponse(response: Json, produces: string[], unhandled: Set<string>): Json {
  const { schema, headers, examples, ...rest } = response;
  const out: Json = { ...rest };
  if (out.description === undefined) out.description = '';

  if (schema !== undefined) {
    out.content = Object.fromEntries(
      produces.map((type) => [
        type,
        {
          schema: convertSchema(schema, unhandled),
          ...(examples && examples[type] !== undefined ? { example: examples[type] } : {}),
        },
      ]),
    );
  }

  if (headers) {
    out.headers = Object.fromEntries(
      Object.entries(headers as Json).map(([name, header]) => {
        const { description, ...schemaPart } = header as Json;
        return [name, { ...(description ? { description } : {}), schema: convertSchema(schemaPart, unhandled) }];
      }),
    );
  }

  return out;
}

function convertSecurityDefinitions(definitions: Json, unhandled: Set<string>): Json {
  const out: Json = {};
  for (const [name, scheme] of Object.entries(definitions)) {
    const source = scheme as Json;
    if (source.type === 'basic') out[name] = { type: 'http', scheme: 'basic' };
    else if (source.type === 'apiKey') out[name] = { ...source };
    else if (source.type === 'oauth2') {
      const flowName = { implicit: 'implicit', password: 'password', application: 'clientCredentials', accessCode: 'authorizationCode' }[
        source.flow as string
      ];
      if (!flowName) {
        unhandled.add(`oauth2 flow: ${source.flow}`);
        continue;
      }
      out[name] = {
        type: 'oauth2',
        flows: {
          [flowName]: {
            ...(source.authorizationUrl ? { authorizationUrl: source.authorizationUrl } : {}),
            ...(source.tokenUrl ? { tokenUrl: source.tokenUrl } : {}),
            scopes: source.scopes ?? {},
          },
        },
      };
    } else unhandled.add(`securityDefinition type: ${source.type}`);
  }
  return out;
}

/** Build `servers` from `schemes` + `host` + `basePath`. */
export function serversFromSwagger(input: Json, fallback: string): Json[] {
  if (!input.host) return [{ url: fallback }];
  const schemes: string[] = Array.isArray(input.schemes) && input.schemes.length ? input.schemes : ['https'];
  const basePath = (input.basePath ?? '').replace(/\/$/, '');
  return schemes.map((scheme) => ({ url: `${scheme}://${input.host}${basePath}` }));
}

export type ConvertOptions = { fallbackServer?: string };

/** Swagger 2.0 -> OpenAPI 3.1. The input document is never mutated. */
export function swaggerToOpenApi31(input: Json, options: ConvertOptions = {}): { spec: Json; report: ConvertReport } {
  if (input.swagger !== '2.0') throw new Error(`expected a swagger 2.0 document, got ${JSON.stringify(input.swagger)}`);

  const unhandled = new Set<string>();
  const requestBodies: string[] = [];
  const globalConsumes: string[] = input.consumes?.length ? input.consumes : ['application/json'];
  const globalProduces: string[] = input.produces?.length ? input.produces : ['application/json'];

  const paths: Json = {};
  for (const [route, item] of Object.entries((input.paths ?? {}) as Json)) {
    const source = item as Json;
    const target: Json = {};

    for (const [key, value] of Object.entries(source)) {
      if (!HTTP_METHODS.has(key)) {
        if (key === 'parameters') {
          target.parameters = convertParameters(value as Json[], globalConsumes, unhandled).parameters;
        } else target[key] = value;
        continue;
      }

      const operation = value as Json;
      const consumes = operation.consumes?.length ? operation.consumes : globalConsumes;
      const produces = operation.produces?.length ? operation.produces : globalProduces;
      const { consumes: _c, produces: _p, parameters, responses, schemes, ...rest } = operation;

      const converted: Json = { ...rest };
      if (parameters) {
        const split = convertParameters(parameters as Json[], consumes, unhandled);
        if (split.parameters.length) converted.parameters = split.parameters;
        if (split.requestBody) {
          converted.requestBody = split.requestBody;
          requestBodies.push(`${key} ${route}`);
        }
      }
      converted.responses = Object.fromEntries(
        Object.entries((responses ?? {}) as Json).map(([code, response]) => [
          code,
          convertResponse(response as Json, produces, unhandled),
        ]),
      );
      target[key] = converted;
    }

    paths[route] = target;
  }

  const schemas = Object.fromEntries(
    Object.entries((input.definitions ?? {}) as Json).map(([name, schema]) => [name, convertSchema(schema, unhandled)]),
  );

  const components: Json = { schemas };
  if (input.responses) {
    components.responses = Object.fromEntries(
      Object.entries(input.responses as Json).map(([name, response]) => [
        name,
        convertResponse(response as Json, globalProduces, unhandled),
      ]),
    );
  }
  if (input.parameters) {
    components.parameters = Object.fromEntries(
      Object.entries(input.parameters as Json).map(([name, parameter]) => [
        name,
        convertParameters([parameter as Json], globalConsumes, unhandled).parameters[0],
      ]),
    );
  }
  if (input.securityDefinitions) {
    components.securitySchemes = convertSecurityDefinitions(input.securityDefinitions as Json, unhandled);
  }

  const {
    swagger: _s,
    info,
    host: _h,
    basePath: _b,
    schemes: _sch,
    consumes: _c,
    produces: _p,
    paths: _paths,
    definitions: _d,
    responses: _r,
    parameters: _param,
    securityDefinitions: _sd,
    id: _id,
    ...passthrough
  } = input;

  const counter = { n: 0 };
  const spec = rewriteRefs(
    {
      openapi: '3.1.0',
      info: { ...(info ?? {}) },
      servers: serversFromSwagger(input, options.fallbackServer ?? '/'),
      ...passthrough,
      paths,
      components,
    },
    counter,
  ) as Json;

  return {
    spec,
    report: {
      requestBodies: requestBodies.sort(),
      rewrittenRefs: counter.n,
      movedSchemas: Object.keys(schemas).length,
      unhandled: [...unhandled].sort(),
    },
  };
}

/* ==========================================================================
   2. Retag by module
   ========================================================================== */

export type ModuleTag = { name: string; description: string };

/**
 * Path prefix -> tag. First match wins, so the versioned `tokenization.vNN`
 * rule must precede the plain `tokenization` one.
 */
const MODULE_RULES: [RegExp, string][] = [
  [/^\/tokenization\.v\d+\./, 'Legacy tokenization versions'],
  [/^\/bitbadges\/bitbadgeschain\/tokenization\//, 'Tokenization'],
  [/^\/tokenization\./, 'Tokenization'],
  [/^\/bitbadges\/bitbadgeschain\/managersplitter/, 'Manager splitter'],
  [/^\/managersplitter\./, 'Manager splitter'],
  [/^\/bitbadges\/bitbadgeschain\/sendmanager/, 'Send manager'],
  [/^\/sendmanager\./, 'Send manager'],
  [/^\/osmosis\/poolmanager\//, 'Pool manager'],
  [/^\/poolmanager\./, 'Pool manager'],
  [/^\/osmosis\/gamm\//, 'GAMM'],
  [/^\/gamm\./, 'GAMM'],
  [/^\/bitbadges\/bitbadgeschain\/ibcratelimit/, 'IBC rate limit'],
  [/^\/ibcratelimit\./, 'IBC rate limit'],
  [/^\/cosmos\/evm\//, 'EVM'],
  [/^\/cosmos\.evm\./, 'EVM'],
  [/^\/ethermint[./]/, 'EVM'],
  [/^\/ibc[./]/, 'IBC'],
  [/^\/cosmos[./]/, 'Cosmos SDK'],
  [/^\/capability[./]/, 'Cosmos SDK'],
];

/**
 * Sidebar order. BitBadges modules first, then the standard Cosmos/IBC/EVM
 * surface, then the deprecated versioned Msg routes — kept, never deleted, but
 * pushed past everything a reader actually wants.
 */
export const TAG_ORDER: ModuleTag[] = [
  {
    name: 'Tokenization',
    description:
      '`x/tokenization` — the BitBadges token standard. The `GET` routes are live node queries; the `POST` routes are the module\'s message definitions (payload shapes for signed transactions), not callable REST endpoints.',
  },
  {
    name: 'GAMM',
    description:
      '`x/gamm` — the AMM pools. `GET` routes query pools, prices and swap estimates; the `POST` routes are message definitions for pool joins, exits and swaps.',
  },
  {
    name: 'Pool manager',
    description:
      '`x/poolmanager` — routing across pools, taker fees and multi-hop swap estimation. `GET` routes are live queries; `POST` routes are message definitions.',
  },
  {
    name: 'Send manager',
    description: '`x/sendmanager` — alias routing for sends, and the balances behind an alias path.',
  },
  {
    name: 'Manager splitter',
    description: '`x/managersplitter` — splitting a collection manager across several addresses.',
  },
  {
    name: 'IBC rate limit',
    description: '`x/ibc-rate-limit` — the outbound and inbound IBC transfer rate limits and their parameters.',
  },
  { name: 'EVM', description: 'The Cosmos EVM module — `MsgEthereumTx` and the VM parameters. Contract calls go to the EVM JSON-RPC, not here.' },
  { name: 'Cosmos SDK', description: 'Standard Cosmos SDK module routes (auth, bank, staking, gov and friends), unchanged from upstream.' },
  { name: 'IBC', description: 'Standard IBC routes (clients, connections, channels, transfer), unchanged from upstream.' },
  {
    name: 'Legacy tokenization versions',
    description:
      'Message definitions for superseded `x/tokenization` proto versions (`tokenization.v27` through the current-1). They stay published so historical transactions remain decodable. Build against the unversioned **Tokenization** routes instead.',
  },
  { name: 'Other', description: 'Routes this document could not attribute to a module.' },
];

export type RetagReport = {
  /** Tag name -> operation count, in sidebar order. */
  counts: [string, number][];
  /** Operations whose summary was derived from the path. */
  synthesizedSummaries: number;
};

/** The module a path belongs to. */
export function moduleForPath(route: string): string {
  for (const [pattern, name] of MODULE_RULES) if (pattern.test(route)) return name;
  return 'Other';
}

/**
 * Replace the source document's `Query`/`Msg` tags with one module tag per
 * operation, and give the gRPC `Msg` routes a readable summary (they ship with
 * none, so the sidebar would otherwise show the raw path).
 */
export function retagByModule(input: Json): { spec: Json; report: RetagReport } {
  const spec = structuredClone(input);
  const counts = new Map<string, number>();
  let synthesizedSummaries = 0;

  for (const [route, item] of Object.entries((spec.paths ?? {}) as Json)) {
    const tag = moduleForPath(route);
    for (const [method, operation] of Object.entries(item as Json)) {
      if (!HTTP_METHODS.has(method)) continue;
      const op = operation as Json;
      op.tags = [tag];
      counts.set(tag, (counts.get(tag) ?? 0) + 1);

      if (!op.summary) {
        const last = route.split('/').filter(Boolean).pop() ?? route;
        if (/^[A-Za-z][A-Za-z0-9]*$/.test(last)) {
          op.summary = last;
          synthesizedSummaries += 1;
        }
      }
    }
  }

  const used = TAG_ORDER.filter((tag) => counts.has(tag.name));
  spec.tags = used;

  // Sidebar order follows `tags`, but Scalar also walks `paths` in insertion
  // order within a tag, so reorder paths to match the tag order too.
  const order = new Map(used.map((tag, index) => [tag.name, index]));
  const routes = Object.keys(spec.paths ?? {});
  routes.sort((a, b) => {
    const delta = (order.get(moduleForPath(a)) ?? 99) - (order.get(moduleForPath(b)) ?? 99);
    return delta !== 0 ? delta : a.localeCompare(b);
  });
  spec.paths = Object.fromEntries(routes.map((route) => [route, spec.paths[route]]));

  return {
    spec,
    report: { counts: used.map((tag) => [tag.name, counts.get(tag.name) ?? 0]), synthesizedSummaries },
  };
}

/* ==========================================================================
   3. Sanitize — the defects that blank a strict renderer

   Scalar dereferences the whole document up front. A `$ref` that points at
   nothing, or a schema cycle, takes the page down with it rather than
   degrading. Both are stubbed here so one defect in the generator's output
   cannot cost the reader the entire reference.
   ========================================================================== */

const SCHEMA_PREFIX = '#/components/schemas/';

export type SanitizeReport = {
  /** `"<owner> -> <target>"` for each schema cycle broken. */
  cutCycles: string[];
  /** Schema names referenced but never defined. */
  stubbedRefs: string[];
  /** Path items left with no operation, removed. */
  droppedPaths: string[];
};

/** Every schema name reachable through a local `$ref`. */
function collectRefs(node: unknown, found: Set<string>): Set<string> {
  if (Array.isArray(node)) {
    for (const item of node) collectRefs(item, found);
    return found;
  }
  if (typeof node !== 'object' || node === null) return found;
  for (const [key, value] of Object.entries(node as Json)) {
    if (key === '$ref' && typeof value === 'string' && value.startsWith(SCHEMA_PREFIX)) {
      found.add(value.slice(SCHEMA_PREFIX.length));
    } else collectRefs(value, found);
  }
  return found;
}

/** Replace every `$ref` to one of `targets` with a titled stub. */
function stubRefs(node: unknown, owner: string, targets: Set<string>, cut: string[]): unknown {
  if (Array.isArray(node)) return node.map((item) => stubRefs(item, owner, targets, cut));
  if (typeof node !== 'object' || node === null) return node;

  const source = node as Json;
  if (typeof source.$ref === 'string' && source.$ref.startsWith(SCHEMA_PREFIX)) {
    const name = source.$ref.slice(SCHEMA_PREFIX.length);
    if (targets.has(name)) {
      cut.push(`${owner} -> ${name}`);
      return { title: name, description: `Recursive reference to \`${name}\`.` };
    }
  }

  const out: Json = {};
  for (const [key, value] of Object.entries(source)) out[key] = stubRefs(value, owner, targets, cut);
  return out;
}

/**
 * Break every cycle in the schema reference graph.
 *
 * A depth-first walk marks back-edges (a `$ref` reaching a schema still on the
 * stack); those edges — direct self-reference and mutual recursion alike — are
 * replaced with a titled stub. Anything else is left untouched.
 */
export function sanitizeChainSpec(input: Json): { spec: Json; report: SanitizeReport } {
  const spec = structuredClone(input);
  const schemas: Json = spec.components?.schemas ?? {};

  const edges = new Map<string, string[]>();
  for (const [name, schema] of Object.entries(schemas)) edges.set(name, [...collectRefs(schema, new Set())]);

  const state = new Map<string, 'open' | 'done'>();
  const backEdges = new Map<string, Set<string>>();
  const visit = (name: string) => {
    state.set(name, 'open');
    for (const target of edges.get(name) ?? []) {
      if (!(target in schemas)) continue;
      const seen = state.get(target);
      if (seen === 'open') {
        if (!backEdges.has(name)) backEdges.set(name, new Set());
        backEdges.get(name)!.add(target);
      } else if (seen === undefined) visit(target);
    }
    state.set(name, 'done');
  };
  for (const name of edges.keys()) if (!state.has(name)) visit(name);

  const cutCycles: string[] = [];
  for (const [owner, targets] of backEdges) schemas[owner] = stubRefs(schemas[owner], owner, targets, cutCycles);

  const stubbedRefs: string[] = [];
  for (const name of collectRefs(spec, new Set())) {
    if (name in schemas) continue;
    schemas[name] = {
      title: name,
      description: `\`${name}\` is referenced by this API but is not defined in the source document.`,
    };
    stubbedRefs.push(name);
  }
  if (Object.keys(schemas).length) {
    spec.components ??= {};
    spec.components.schemas = schemas;
  }

  const droppedPaths: string[] = [];
  for (const [route, item] of Object.entries((spec.paths ?? {}) as Json)) {
    if (!Object.keys(item as Json).some((key) => HTTP_METHODS.has(key))) {
      delete spec.paths[route];
      droppedPaths.push(route);
    }
  }

  return { spec, report: { cutCycles: cutCycles.sort(), stubbedRefs: stubbedRefs.sort(), droppedPaths: droppedPaths.sort() } };
}

/* ==========================================================================
   4. The document the reader sees
   ========================================================================== */

export const CHAIN_SERVER = 'https://lcd.bitbadges.io';

export const CHAIN_TITLE = 'BitBadges Chain API';

const CHAIN_DESCRIPTION = `The **chain LCD** — the REST surface a BitBadges node serves through the Cosmos gRPC-gateway, live at \`${CHAIN_SERVER}\`. It reads consensus state directly from a node: no indexing, no API key, no account.

It is read-mostly. Every \`GET\` route here is a node query you can run from this page against mainnet. The \`POST\` routes named \`<module>.Msg/<Method>\` are the chain's **message definitions**, published so you can see the exact payload each transaction type carries. They are not REST endpoints — a message is signed and broadcast as a transaction (see the SDK), never posted to the LCD.

## How this differs from the BitBadges API

| | Chain API (this page) | [BitBadges API](/api-reference) |
| --- | --- | --- |
| Serves | \`https://lcd.bitbadges.io\` | \`https://api.bitbadges.io\` |
| Source of truth | A node's own state, current block | The indexer, built from chain history |
| Auth | None | API key |
| Good for | Exact on-chain values, params, pool math | Metadata, activity, claims, search, sign-in |

Use the chain API when you need the value the chain itself would return. Use the BitBadges API when you need anything the chain does not store — off-chain metadata, activity history, claims, or a query the chain has no index for.

## Documented queries

The routes here are generated from the chain's proto definitions, so they carry only the summaries the protos carry. The hand-written explanation of each query — arguments, response shape, worked examples — lives at [Token Standard → Queries](/token-standard/queries).

Messages are documented at [Token Standard → Messages](/token-standard/messages), and the modules around the standard at [Chain → Modules](/chain/modules).`;

export type BuildOptions = {
  server?: string;
  title?: string;
  description?: string;
};

export type BuildReport = {
  convert: ConvertReport;
  retag: RetagReport;
  sanitize: SanitizeReport;
  paths: number;
  operations: number;
  schemas: number;
};

/** Convert, retag, sanitize, and stamp the reader-facing metadata. */
export function buildChainOpenApi(source: Json, options: BuildOptions = {}): { spec: Json; report: BuildReport } {
  const server = options.server ?? CHAIN_SERVER;
  const converted = swaggerToOpenApi31(source, { fallbackServer: server });
  const retagged = retagByModule(converted.spec);
  const sanitized = sanitizeChainSpec(retagged.spec);
  const spec = sanitized.spec;

  const version = source.info?.version;
  spec.info = {
    title: options.title ?? CHAIN_TITLE,
    version: !version || version === 'version not set' ? 'latest' : version,
    description: options.description ?? CHAIN_DESCRIPTION,
  };
  spec.servers = [{ url: server, description: 'BitBadges mainnet LCD' }];

  const operations = Object.values(spec.paths ?? {}).reduce(
    (total: number, item: any) => total + Object.keys(item).filter((key) => HTTP_METHODS.has(key)).length,
    0,
  );

  return {
    spec,
    report: {
      convert: converted.report,
      retag: retagged.report,
      sanitize: sanitized.report,
      paths: Object.keys(spec.paths ?? {}).length,
      operations,
      schemas: Object.keys(spec.components?.schemas ?? {}).length,
    },
  };
}

/* ==========================================================================
   5. CLI
   ========================================================================== */

/** Parse `--in <path>` and repeated `--out <path>` flags. */
export function parseArgs(argv: string[]): { input?: string; outputs: string[] } {
  const outputs: string[] = [];
  let input: string | undefined;
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--in') input = argv[++i];
    else if (argv[i] === '--out') outputs.push(argv[++i]);
  }
  return { input, outputs };
}

/**
 * Read a chain swagger/openapi document.
 *
 * The chain publishes `openapi.yml`, but the file is JSON — the extension is a
 * lie the Cosmos swagger tooling has told for years. Parsing it as JSON keeps
 * this script dependency-free; a real YAML file is rejected loudly rather than
 * half-parsed.
 */
export async function readSpec(file: string): Promise<Json> {
  const raw = await fs.readFile(file, 'utf8');
  try {
    return JSON.parse(raw);
  } catch (error) {
    throw new Error(
      `${file} is not JSON. The chain's docs/static/openapi.yml is JSON despite the extension; if it has become real YAML, convert it before running this script. (${(error as Error).message})`,
    );
  }
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  const chainDir = path.resolve(process.env.BITBADGESCHAIN_DIR?.trim() || '../../bitbadgeschain');

  // A chain repo that runs this script itself publishes the finished document;
  // prefer it, so the docs site consumes upstream output rather than
  // re-deriving it from swagger with a possibly older copy of these rules.
  //
  // It lives in `docs/openapi/`, NOT `docs/static/`: the chain's `docs/docs.go`
  // does `//go:embed static`, so anything under `static/` is compiled into the
  // release binary. The node serves only the `.yml`, so a second ~1 MB copy
  // there would bloat every release for nothing.
  const prebuilt = path.join(chainDir, 'docs/openapi/openapi.json');
  const swagger = path.join(chainDir, 'docs/static/openapi.yml');
  const usePrebuilt = !args.input && (await fs.access(prebuilt).then(() => true).catch(() => false));
  const input = args.input ?? (usePrebuilt ? prebuilt : swagger);

  const outputs = args.outputs.length
    ? args.outputs
    : (process.env.CHAIN_OPENAPI_OUT?.split(',').map((s) => s.trim()).filter(Boolean) ?? []);
  if (outputs.length === 0) {
    outputs.push(path.resolve('openapi/chain-openapi.json'), path.resolve('public/chain-openapi.json'));
  }

  const source = await readSpec(input);
  const { spec, report } =
    source.swagger === '2.0'
      ? buildChainOpenApi(source)
      : { spec: source, report: null as BuildReport | null };

  for (const out of outputs) {
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.writeFile(out, `${JSON.stringify(spec, null, 0)}\n`);
  }

  const where = outputs.map((out) => path.relative(process.cwd(), out)).join(', ');
  if (!report) {
    console.log(`chain-openapi: copied prebuilt OpenAPI ${spec.openapi} from ${input} -> ${where}`);
    return;
  }

  const tags = report.retag.counts.map(([name, count]) => `${name} ${count}`).join(', ');
  console.log(
    `chain-openapi: ${input}${usePrebuilt ? ' (prebuilt)' : ' (swagger 2.0)'} -> ${where}\n` +
      `chain-openapi: ${report.paths} paths, ${report.operations} operations, ${report.schemas} schemas, ${report.retag.counts.length} tags\n` +
      `chain-openapi: tags — ${tags}\n` +
      `chain-openapi: converted ${report.convert.requestBodies.length} body parameter(s) to requestBody, rewrote ${report.convert.rewrittenRefs} $ref(s), moved ${report.convert.movedSchemas} definition(s) to components.schemas, named ${report.retag.synthesizedSummaries} unsummarized operation(s)\n` +
      `chain-openapi: fixed — ${report.sanitize.cutCycles.length} schema cycle(s), ${report.sanitize.stubbedRefs.length} dangling $ref(s), ${report.sanitize.droppedPaths.length} empty path item(s)` +
      (report.convert.unhandled.length ? `\nchain-openapi: UNHANDLED — ${report.convert.unhandled.join('; ')}` : ''),
  );
}

if (import.meta.main) await main();
