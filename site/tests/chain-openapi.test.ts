/**
 * Two layers.
 *
 * Unit tests drive the conversion, pruning, retagging and labelling over a
 * hand-written Swagger 2.0 fixture small enough to reason about — a body
 * parameter, a definitions `$ref`, a gRPC pseudo-path that must be dropped, a
 * `Query`-tagged operation that must be retagged, and host/basePath/schemes
 * that must become `servers`.
 *
 * Corpus tests run over the committed `openapi/chain-openapi.json`. They are the
 * ones that catch a regenerated chain spec breaking the page: only real LCD
 * routes survive, every `$ref` resolves, every operation carries a short
 * sidebar label, and no tag is left declared but unused.
 */
import { describe, expect, test } from 'bun:test';
import fs from 'node:fs/promises';
import path from 'node:path';

import {
  buildChainOpenApi,
  CHAIN_SERVER,
  CHAIN_TITLE,
  convertParameters,
  HTTP_METHODS,
  isPseudoPath,
  methodName,
  moduleForPath,
  parseArgs,
  pruneNonRoutes,
  retagByModule,
  sanitizeChainSpec,
  serversFromSwagger,
  shortSummary,
  summarizeOperations,
  SUMMARY_MAX,
  swaggerToOpenApi31,
  TAG_ORDER,
} from '../scripts/gen-chain-openapi';

/* ------------------------------------------------------------------ fixture */

const FIXTURE = {
  swagger: '2.0',
  info: { title: 'HTTP API Console', version: 'version not set' },
  host: 'lcd.example.com',
  basePath: '/v1',
  schemes: ['https', 'http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    '/bitbadges/bitbadgeschain/tokenization/get_collection/{collectionId}': {
      get: {
        tags: ['Query'],
        summary: 'GetCollection queries a collection by id.',
        operationId: 'Query_GetCollection',
        parameters: [
          { name: 'collectionId', in: 'path', required: true, type: 'string' },
          { name: 'ids', in: 'query', type: 'array', items: { type: 'string' }, collectionFormat: 'multi' },
        ],
        responses: {
          200: { description: 'A successful response.', schema: { $ref: '#/definitions/tokenization.Collection' } },
        },
      },
    },
    '/tokenization.Msg/TransferTokens': {
      post: {
        tags: ['Msg'],
        operationId: 'Msg_TransferTokens',
        parameters: [
          {
            name: 'body',
            in: 'body',
            required: true,
            description: 'MsgTransferTokens moves tokens between addresses.',
            schema: { $ref: '#/definitions/tokenization.MsgTransferTokens' },
          },
        ],
        responses: { 200: { description: 'A successful response.', schema: { type: 'object' } } },
      },
    },
    '/tokenization.v27.Msg/TransferTokens': {
      post: { tags: ['Msg'], operationId: 'Msg_TransferTokensV27', responses: { 200: { description: 'ok' } } },
    },
    '/gamm.v1beta1.Query/CalcJoinPoolNoSwapShares': {
      post: { tags: ['Query'], operationId: 'Query_CalcJoinPoolNoSwapShares', responses: { 200: { description: 'ok' } } },
    },
    // An annotated route the gateway still refuses: a message, not a query.
    '/cosmos/evm/vm/v1/ethereum_tx': {
      post: {
        tags: ['Msg'],
        operationId: 'Erc20Msg_EthereumTx',
        summary: 'EthereumTx defines a method submitting Ethereum transactions.',
        responses: { 200: { description: 'ok' } },
      },
    },
    '/osmosis/gamm/v1beta1/pools': {
      get: { tags: ['Query'], summary: 'Pools.', responses: { 200: { description: 'ok' } } },
    },
  },
  definitions: {
    'tokenization.Collection': {
      type: 'object',
      properties: { collectionId: { type: 'string' }, manager: { type: 'string' } },
    },
    'tokenization.MsgTransferTokens': { type: 'object', properties: { creator: { type: 'string' } } },
  },
} as const;

const clone = () => JSON.parse(JSON.stringify(FIXTURE));

/* ------------------------------------------------------------------ convert */

describe('swaggerToOpenApi31', () => {
  test('rejects a document that is not swagger 2.0', () => {
    expect(() => swaggerToOpenApi31({ openapi: '3.1.0' })).toThrow(/swagger 2\.0/);
  });

  test('stamps openapi 3.1 and drops the swagger 2.0 root keys', () => {
    const { spec } = swaggerToOpenApi31(clone());
    expect(spec.openapi).toBe('3.1.0');
    expect(spec.swagger).toBeUndefined();
    expect(spec.definitions).toBeUndefined();
    expect(spec.host).toBeUndefined();
    expect(spec.basePath).toBeUndefined();
    expect(spec.consumes).toBeUndefined();
    expect(spec.produces).toBeUndefined();
  });

  test('host + basePath + schemes become one server per scheme', () => {
    const { spec } = swaggerToOpenApi31(clone());
    expect(spec.servers).toEqual([{ url: 'https://lcd.example.com/v1' }, { url: 'http://lcd.example.com/v1' }]);
  });

  test('a document with no host falls back to the configured server', () => {
    expect(serversFromSwagger({ swagger: '2.0' }, 'https://lcd.bitbadges.io')).toEqual([
      { url: 'https://lcd.bitbadges.io' },
    ]);
  });

  test('definitions move to components.schemas', () => {
    const { spec, report } = swaggerToOpenApi31(clone());
    expect(Object.keys(spec.components.schemas).sort()).toEqual([
      'tokenization.Collection',
      'tokenization.MsgTransferTokens',
    ]);
    expect(report.movedSchemas).toBe(2);
  });

  test('every $ref is rewritten out of #/definitions', () => {
    const { spec, report } = swaggerToOpenApi31(clone());
    expect(JSON.stringify(spec)).not.toContain('#/definitions/');
    expect(report.rewrittenRefs).toBe(2);
    expect(spec.paths['/tokenization.Msg/TransferTokens'].post.requestBody.content['application/json'].schema).toEqual({
      $ref: '#/components/schemas/tokenization.MsgTransferTokens',
    });
  });

  test('a body parameter becomes a requestBody and leaves the parameter list', () => {
    const { spec, report } = swaggerToOpenApi31(clone());
    const op = spec.paths['/tokenization.Msg/TransferTokens'].post;
    expect(op.parameters).toBeUndefined();
    expect(op.requestBody).toEqual({
      description: 'MsgTransferTokens moves tokens between addresses.',
      required: true,
      content: { 'application/json': { schema: { $ref: '#/components/schemas/tokenization.MsgTransferTokens' } } },
    });
    expect(report.requestBodies).toEqual(['post /tokenization.Msg/TransferTokens']);
  });

  test('non-body parameters move their type into a schema', () => {
    const { spec } = swaggerToOpenApi31(clone());
    const params = spec.paths['/bitbadges/bitbadgeschain/tokenization/get_collection/{collectionId}'].get.parameters;
    expect(params[0]).toEqual({ name: 'collectionId', in: 'path', required: true, schema: { type: 'string' } });
    expect(params[1]).toEqual({
      name: 'ids',
      in: 'query',
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' } },
    });
  });

  test('a response schema becomes content keyed by the produced media type', () => {
    const { spec } = swaggerToOpenApi31(clone());
    const response = spec.paths['/bitbadges/bitbadgeschain/tokenization/get_collection/{collectionId}'].get.responses[
      '200'
    ];
    expect(response.schema).toBeUndefined();
    expect(response.content).toEqual({
      'application/json': { schema: { $ref: '#/components/schemas/tokenization.Collection' } },
    });
  });

  test('a path parameter is forced required even when the source omits the flag', () => {
    const { parameters } = convertParameters([{ name: 'id', in: 'path', type: 'string' }], ['application/json'], new Set());
    expect(parameters[0].required).toBe(true);
  });

  test('formData parameters collapse into one urlencoded requestBody', () => {
    const { parameters, requestBody } = convertParameters(
      [
        { name: 'file', in: 'formData', type: 'file', required: true },
        { name: 'note', in: 'formData', type: 'string' },
      ],
      ['application/json'],
      new Set(),
    );
    expect(parameters).toEqual([]);
    const schema = requestBody!.content['application/x-www-form-urlencoded'].schema;
    expect(schema.properties.file).toEqual({ type: 'string', format: 'binary' });
    expect(schema.required).toEqual(['file']);
  });

  test('nullable becomes a 3.1 type union and boolean exclusiveMinimum becomes numeric', () => {
    const { spec } = swaggerToOpenApi31({
      swagger: '2.0',
      paths: {},
      definitions: {
        A: { type: 'string', 'x-nullable': true },
        B: { type: 'integer', minimum: 0, exclusiveMinimum: true },
      },
    });
    expect(spec.components.schemas.A.type).toEqual(['string', 'null']);
    expect(spec.components.schemas.B).toEqual({ type: 'integer', exclusiveMinimum: 0 });
  });

  test('the input document is never mutated', () => {
    const input = clone();
    const before = JSON.stringify(input);
    swaggerToOpenApi31(input);
    expect(JSON.stringify(input)).toBe(before);
  });

  test('the fixture converts with nothing left unhandled', () => {
    expect(swaggerToOpenApi31(clone()).report.unhandled).toEqual([]);
  });
});

/* -------------------------------------------------------------------- prune */

describe('isPseudoPath', () => {
  test('recognizes a gRPC service selector standing in for a route', () => {
    expect(isPseudoPath('/tokenization.Msg/CreateCollection')).toBe(true);
    expect(isPseudoPath('/gamm.v1beta1.Query/CalcJoinPoolNoSwapShares')).toBe(true);
    expect(isPseudoPath('/tokenization.v27.Msg/TransferTokens')).toBe(true);
    expect(isPseudoPath('/cosmos.evm.vm.v1.Msg/EthereumTx')).toBe(true);
  });

  test('leaves a real gateway route alone', () => {
    expect(isPseudoPath('/osmosis/gamm/v1beta1/pools')).toBe(false);
    expect(isPseudoPath('/bitbadges/bitbadgeschain/tokenization/get_collection/{collectionId}')).toBe(false);
    expect(isPseudoPath('/cosmos/evm/vm/v1/ethereum_tx')).toBe(false);
    // A path parameter holding a dot must not be mistaken for a selector.
    expect(isPseudoPath('/osmosis/poolmanager/v1beta1/{denom}/taker_fee_share_agreement_from_denom')).toBe(false);
  });
});

describe('pruneNonRoutes', () => {
  const { spec, report } = pruneNonRoutes(swaggerToOpenApi31(clone()).spec);

  test('drops every gRPC selector path, whatever service it names', () => {
    expect(report.pseudoPaths).toEqual([
      '/gamm.v1beta1.Query/CalcJoinPoolNoSwapShares',
      '/tokenization.Msg/TransferTokens',
      '/tokenization.v27.Msg/TransferTokens',
    ]);
    expect(Object.keys(spec.paths).some(isPseudoPath)).toBe(false);
  });

  test('drops an annotated write route too — the LCD serves queries only', () => {
    expect(report.writeOperations).toEqual(['post /cosmos/evm/vm/v1/ethereum_tx']);
    expect(spec.paths['/cosmos/evm/vm/v1/ethereum_tx']).toBeUndefined();
  });

  test('keeps every real GET route', () => {
    expect(Object.keys(spec.paths)).toEqual([
      '/bitbadges/bitbadgeschain/tokenization/get_collection/{collectionId}',
      '/osmosis/gamm/v1beta1/pools',
    ]);
  });

  test('drops the schemas the removed paths were the only users of', () => {
    expect(Object.keys(spec.components.schemas)).toEqual(['tokenization.Collection']);
    expect(report.orphanSchemas).toBe(1);
  });

  test('the input document is never mutated', () => {
    const input = swaggerToOpenApi31(clone()).spec;
    const before = JSON.stringify(input);
    pruneNonRoutes(input);
    expect(JSON.stringify(input)).toBe(before);
  });
});

/* -------------------------------------------------------------------- retag */

describe('moduleForPath', () => {
  test('maps each module surface to its tag', () => {
    expect(moduleForPath('/bitbadges/bitbadgeschain/tokenization/params')).toBe('Tokenization');
    expect(moduleForPath('/tokenization.Msg/TransferTokens')).toBe('Tokenization');
    expect(moduleForPath('/osmosis/gamm/v1beta1/pools')).toBe('GAMM');
    expect(moduleForPath('/gamm.v1beta1.Msg/JoinPool')).toBe('GAMM');
    expect(moduleForPath('/osmosis/poolmanager/v1beta1/num_pools')).toBe('Pool manager');
    expect(moduleForPath('/bitbadges/bitbadgeschain/sendmanager/params')).toBe('Send manager');
    expect(moduleForPath('/managersplitter.Msg/UpdateParams')).toBe('Manager splitter');
    expect(moduleForPath('/ibcratelimit.Msg/UpdateRateLimit')).toBe('IBC rate limit');
    expect(moduleForPath('/cosmos/evm/vm/v1/ethereum_tx')).toBe('EVM');
    expect(moduleForPath('/cosmos/bank/v1beta1/balances/{address}')).toBe('Cosmos SDK');
    expect(moduleForPath('/ibc/core/channel/v1/channels')).toBe('IBC');
  });

  test('an unattributable path is grouped, never dropped', () => {
    expect(moduleForPath('/something/else')).toBe('Other');
  });
});

describe('retagByModule', () => {
  const pruned = pruneNonRoutes(swaggerToOpenApi31(clone()).spec).spec;
  const { spec, report } = retagByModule(pruned);

  test('replaces Query and Msg with the module tag', () => {
    expect(spec.paths['/bitbadges/bitbadgeschain/tokenization/get_collection/{collectionId}'].get.tags).toEqual([
      'Tokenization',
    ]);
    expect(spec.paths['/osmosis/gamm/v1beta1/pools'].get.tags).toEqual(['GAMM']);
    expect(JSON.stringify(spec.paths)).not.toContain('"Query"');
    expect(JSON.stringify(spec.paths)).not.toContain('"Msg"');
  });

  test('declares only the tags in use, each with a description, in sidebar order', () => {
    expect(spec.tags.map((t: { name: string }) => t.name)).toEqual(['Tokenization', 'GAMM']);
    expect(spec.tags.every((t: { description: string }) => t.description.length > 20)).toBe(true);
  });

  test('paths are reordered to follow the tag order', () => {
    expect(Object.keys(spec.paths)).toEqual([
      '/bitbadges/bitbadgeschain/tokenization/get_collection/{collectionId}',
      '/osmosis/gamm/v1beta1/pools',
    ]);
  });

  test('counts every operation', () => {
    expect(report.counts).toEqual([
      ['Tokenization', 1],
      ['GAMM', 1],
    ]);
  });

  test('every declared tag order entry carries a description', () => {
    expect(TAG_ORDER.every((t) => t.name && t.description)).toBe(true);
  });
});

/* ---------------------------------------------------------------- summaries */

describe('methodName', () => {
  test('takes the method off a gateway operationId and drops the mixin suffix', () => {
    expect(methodName('GithubCombitbadgesbitbadgeschainQuery_ParamsMixin53', '/x')).toBe('Params');
    expect(methodName('Query_GetCollection', '/x')).toBe('GetCollection');
  });

  test('falls back to the last path segment when there is no operationId', () => {
    expect(methodName(undefined, '/osmosis/gamm/v1beta1/pools')).toBe('pools');
  });
});

describe('shortSummary', () => {
  const cases: [string, string, string][] = [
    ['Query_GetCollection', '/x', 'Get a collection'],
    ['Query_GetAddressList', '/x', 'Get an address list'],
    ['Query_GetETHSignatureTracker', '/x', 'Get an ETH signature tracker'],
    ['Query_Pools', '/osmosis/gamm/v1beta1/pools', 'List pools'],
    ['Query_AllPools', '/x', 'List pools'],
    ['Query_NumPools', '/x', 'Count pools'],
    ['Query_ParamsMixin53', '/x', 'Get module params'],
    ['Query_PoolParams', '/x', 'Get pool params'],
    ['Query_TotalLiquidity', '/x', 'Get total liquidity'],
    ['Query_GetVotes', '/x', 'Get votes'],
    ['Query_ListPoolsByDenom', '/x', 'List pools by denom'],
  ];
  for (const [operationId, route, expected] of cases) {
    test(`${operationId} -> ${expected}`, () => expect(shortSummary(operationId, route)).toBe(expected));
  }

  test('the API version disambiguates two spellings of the same query', () => {
    expect(shortSummary('Query_SpotPrice', '/osmosis/gamm/v1beta1/pools/{pool_id}/prices')).toBe('Get a spot price');
    expect(shortSummary('Query_SpotPriceV2', '/osmosis/gamm/v2/pools/{pool_id}/prices')).toBe('Get a spot price (v2)');
  });

  test('never produces a sentence, and never a long one', () => {
    for (const [operationId, route] of cases) {
      const label = shortSummary(operationId, route);
      expect(label.length).toBeLessThanOrEqual(SUMMARY_MAX);
      expect(label.endsWith('.')).toBe(false);
    }
  });
});

describe('summarizeOperations', () => {
  const retagged = retagByModule(pruneNonRoutes(swaggerToOpenApi31(clone()).spec).spec).spec;
  const { spec, report } = summarizeOperations(retagged);
  const collection = spec.paths['/bitbadges/bitbadgeschain/tokenization/get_collection/{collectionId}'].get;

  test('the sidebar label becomes a short imperative phrase', () => {
    expect(collection.summary).toBe('Get a collection');
    expect(report.overlong).toEqual([]);
  });

  test('the proto prose it displaced is kept as the description', () => {
    expect(collection.description).toBe('GetCollection queries a collection by id.');
    expect(report.movedToDescription).toBe(1);
  });

  test('a one-word leftover summary explains nothing and is not promoted', () => {
    const pools = spec.paths['/osmosis/gamm/v1beta1/pools'].get;
    expect(pools.summary).toBe('List pools');
    expect(pools.description).toBeUndefined();
  });
});

/* ----------------------------------------------------------------- sanitize */

describe('sanitizeChainSpec', () => {
  test('breaks a direct self-reference', () => {
    const { spec, report } = sanitizeChainSpec({
      openapi: '3.1.0',
      paths: {},
      components: {
        schemas: { Node: { type: 'object', properties: { child: { $ref: '#/components/schemas/Node' } } } },
      },
    });
    expect(report.cutCycles).toEqual(['Node -> Node']);
    expect(spec.components.schemas.Node.properties.child.$ref).toBeUndefined();
    expect(spec.components.schemas.Node.properties.child.title).toBe('Node');
  });

  test('breaks a mutual cycle the direct check would miss', () => {
    const { report } = sanitizeChainSpec({
      openapi: '3.1.0',
      paths: {},
      components: {
        schemas: {
          A: { properties: { b: { $ref: '#/components/schemas/B' } } },
          B: { properties: { a: { $ref: '#/components/schemas/A' } } },
        },
      },
    });
    expect(report.cutCycles.length).toBe(1);
  });

  test('stubs a $ref with no definition rather than letting it blank the page', () => {
    const { spec, report } = sanitizeChainSpec({
      openapi: '3.1.0',
      paths: { '/a': { get: { responses: { 200: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Missing' } } } } } } } },
      components: { schemas: {} },
    });
    expect(report.stubbedRefs).toEqual(['Missing']);
    expect(spec.components.schemas.Missing.title).toBe('Missing');
  });

  test('drops a path item with no operation left on it', () => {
    const { spec, report } = sanitizeChainSpec({
      openapi: '3.1.0',
      paths: { '/a': { get: { responses: {} } }, '/b': { parameters: [] } },
      components: { schemas: {} },
    });
    expect(report.droppedPaths).toEqual(['/b']);
    expect(Object.keys(spec.paths)).toEqual(['/a']);
  });
});

/* -------------------------------------------------------------------- build */

describe('buildChainOpenApi', () => {
  const { spec } = buildChainOpenApi(clone());

  test('stamps the BitBadges identity over the generator placeholder', () => {
    expect(spec.info.title).toBe(CHAIN_TITLE);
    expect(spec.info.version).toBe('latest');
    expect(spec.servers).toEqual([{ url: CHAIN_SERVER, description: 'BitBadges mainnet LCD' }]);
  });

  test('the description explains the surface and points at the other references', () => {
    expect(spec.info.description).toContain('lcd.bitbadges.io');
    expect(spec.info.description).toContain('(/api-reference)');
    expect(spec.info.description).toContain('(/token-standard/queries)');
  });

  test('the description says the LCD is read-only and sends transactions elsewhere', () => {
    expect(spec.info.description).toContain('read-only');
    expect(spec.info.description).toContain('501 Not Implemented');
    expect(spec.info.description).toContain('(/token-standard/messages)');
    expect(spec.info.description).toContain('(/sdk/transactions)');
  });
});

describe('parseArgs', () => {
  test('reads --in and repeated --out', () => {
    expect(parseArgs(['--in', 'a.json', '--out', 'b.json', '--out', 'c.json'])).toEqual({
      input: 'a.json',
      outputs: ['b.json', 'c.json'],
    });
  });

  test('defaults to nothing when no flags are given', () => {
    expect(parseArgs([])).toEqual({ input: undefined, outputs: [] });
  });
});

/* ------------------------------------------------------------------- corpus */

const COMMITTED = path.resolve(process.cwd(), 'openapi/chain-openapi.json');
const corpus = JSON.parse(await fs.readFile(COMMITTED, 'utf8'));

/** Every operation in the document, as `[route, method, operation]`. */
const operations = Object.entries(corpus.paths as Record<string, Record<string, any>>).flatMap(([route, item]) =>
  Object.entries(item)
    .filter(([method]) => HTTP_METHODS.has(method))
    .map(([method, operation]) => [route, method, operation] as const),
);

describe('committed chain spec', () => {
  test('is OpenAPI 3.x, not the source swagger document', () => {
    expect(corpus.openapi).toMatch(/^3\./);
    expect(corpus.swagger).toBeUndefined();
    expect(corpus.definitions).toBeUndefined();
  });

  test('carries the LCD query surface, and nothing beyond it', () => {
    // The gateway serves ~60 annotated query routes. A count far outside that
    // band means either the prune ate real routes or the chain grew a module
    // nobody noticed; both deserve a look.
    expect(Object.keys(corpus.paths).length).toBeGreaterThanOrEqual(40);
    expect(Object.keys(corpus.paths).length).toBeLessThanOrEqual(120);
    expect(operations.length).toBe(Object.keys(corpus.paths).length);
  });

  test('not one gRPC pseudo-path survives', () => {
    expect(Object.keys(corpus.paths).filter(isPseudoPath)).toEqual([]);
    expect(JSON.stringify(Object.keys(corpus.paths))).not.toContain('.Msg/');
    expect(JSON.stringify(Object.keys(corpus.paths))).not.toContain('.Query/');
  });

  test('every operation is a GET — the LCD answers writes with 501', () => {
    expect(operations.filter(([, method]) => method !== 'get')).toEqual([]);
  });

  test('every operation carries a short imperative label, not a sentence', () => {
    const bad = operations
      .filter(([, , op]) => {
        const summary: unknown = op.summary;
        return (
          typeof summary !== 'string' ||
          !summary.trim() ||
          summary.length > SUMMARY_MAX ||
          summary.endsWith('.') ||
          summary.includes('\n')
        );
      })
      .map(([route, method, op]) => `${method} ${route}: ${JSON.stringify(op.summary)}`);
    expect(bad).toEqual([]);
  });

  test('the proto prose lives in description, where the sidebar does not show it', () => {
    const described = operations.filter(([, , op]) => typeof op.description === 'string' && op.description.length > 30);
    expect(described.length).toBeGreaterThan(20);
  });

  test('no schema is left behind with no operation reaching it', () => {
    const reachable = new Set<string>();
    const queue: string[] = [];
    const walk = (node: unknown) => {
      if (Array.isArray(node)) return node.forEach(walk);
      if (typeof node !== 'object' || node === null) return;
      for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
        if (key === '$ref' && typeof value === 'string') queue.push(value.slice('#/components/schemas/'.length));
        else walk(value);
      }
    };
    walk(corpus.paths);
    while (queue.length) {
      const name = queue.pop()!;
      if (reachable.has(name) || !(name in corpus.components.schemas)) continue;
      reachable.add(name);
      walk(corpus.components.schemas[name]);
    }
    expect(Object.keys(corpus.components.schemas).filter((name) => !reachable.has(name))).toEqual([]);
  });

  test('has the reader-facing identity', () => {
    expect(corpus.info.title).toBe(CHAIN_TITLE);
    expect(corpus.info.description.length).toBeGreaterThan(200);
    expect(corpus.servers).toEqual([{ url: CHAIN_SERVER, description: 'BitBadges mainnet LCD' }]);
  });

  test('no operation is left under the source document Query/Msg tags', () => {
    const stale = operations
      .filter(([, , op]) => !op.tags?.length || op.tags.some((t: string) => t === 'Query' || t === 'Msg'))
      .map(([route, method]) => `${method} ${route}`);
    expect(stale).toEqual([]);
  });

  test('every operation tag is declared, and every declared tag is used', () => {
    const declared = new Set((corpus.tags as { name: string }[]).map((t) => t.name));
    const used = new Set(operations.flatMap(([, , op]) => op.tags as string[]));
    expect([...used].filter((tag) => !declared.has(tag))).toEqual([]);
    expect([...declared].filter((tag) => !used.has(tag))).toEqual([]);
  });

  test('every declared tag has a one-line description', () => {
    const bare = (corpus.tags as { name: string; description?: string }[])
      .filter((t) => !t.description?.trim())
      .map((t) => t.name);
    expect(bare).toEqual([]);
  });

  test('BitBadges modules lead the tag order, and every tag holds operations', () => {
    const names = (corpus.tags as { name: string }[]).map((t) => t.name);
    expect(names[0]).toBe('Tokenization');
    expect(names).toEqual([...names].sort((a, b) => TAG_ORDER.findIndex((t) => t.name === a) - TAG_ORDER.findIndex((t) => t.name === b)));
    const counts = new Map<string, number>();
    for (const [, , op] of operations) for (const tag of op.tags as string[]) counts.set(tag, (counts.get(tag) ?? 0) + 1);
    expect(names.filter((name) => !counts.get(name))).toEqual([]);
  });

  test('every $ref resolves to a defined schema', () => {
    const names = new Set(Object.keys(corpus.components.schemas));
    const dangling = new Set<string>();
    const walk = (node: unknown) => {
      if (Array.isArray(node)) return node.forEach(walk);
      if (typeof node !== 'object' || node === null) return;
      for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
        if (key === '$ref' && typeof value === 'string') {
          if (!value.startsWith('#/components/schemas/') || !names.has(value.slice('#/components/schemas/'.length))) {
            dangling.add(value);
          }
        } else walk(value);
      }
    };
    walk(corpus);
    expect([...dangling]).toEqual([]);
  });

  test('no swagger 2.0 leftovers survive in the operations', () => {
    const leftovers = operations
      .filter(([, , op]) => op.consumes || op.produces || (op.parameters ?? []).some((p: any) => p.in === 'body' || p.type))
      .map(([route, method]) => `${method} ${route}`);
    expect(leftovers).toEqual([]);
  });

  test('every response body is described as content, not a bare schema', () => {
    const bare = operations
      .flatMap(([route, method, op]) =>
        Object.entries(op.responses ?? {}).map(([code, response]: [string, any]) =>
          response.schema ? `${method} ${route} ${code}` : null,
        ),
      )
      .filter(Boolean);
    expect(bare).toEqual([]);
  });

  test('the served copy in public/ matches the committed one', async () => {
    const served = await fs.readFile(path.resolve(process.cwd(), 'public/chain-openapi.json'), 'utf8');
    expect(served).toBe(await fs.readFile(COMMITTED, 'utf8'));
  });
});
