/**
 * The proto reference has two failure modes and this file covers both.
 *
 * The parser is a hand-written proto3 reader, so it gets fixture tests over a
 * source string that exercises every construct the chain uses. The generated
 * tree is committed content, so it gets corpus assertions that would catch a
 * regeneration that silently dropped a module, a page, or a field table.
 */
import { describe, expect, test } from 'bun:test';
import fs from 'node:fs';
import path from 'node:path';

import { cell, isDocumented, parseProto, slug, tokenize } from '../scripts/gen-proto-reference';

// ---------------------------------------------------------------------------
// Parser
// ---------------------------------------------------------------------------

const FIXTURE = `
syntax = "proto3";
package demo;

import "gogoproto/gogo.proto";
import "google/api/annotations.proto";

option go_package = "github.com/bitbadges/demo/types";

/*
  Kind separates the two flavours of thing.
  The zero value is unspecified.
*/
enum Kind {
  KIND_UNSPECIFIED = 0;
  KIND_FIRST = 1;   // the first flavour
  KIND_SECOND = 2;
}

// A Thing is the unit this fixture describes.
//
// It carries a oneof payload.
message Thing {
  option (amino.name) = "demo/Thing";

  // Unique identifier for the thing.
  string id = 1;

  // Every owner of the thing.
  repeated string owners = 2;

  // How the thing behaves.
  Kind kind = 3 [(gogoproto.nullable) = false];

  optional string note = 4;

  oneof payload {
    string text = 5;
    Blob blob = 6;
  }
}

message Blob {}

// Query serves the fixture.
service Query {
  // Fetch one thing.
  rpc GetThing(GetThingRequest) returns (GetThingResponse) {
    option (google.api.http).get = "/demo/things/{id}";
  }

  // Deprecated: use GetThing.
  rpc ListThings(ListThingsRequest) returns (ListThingsResponse) {
    option deprecated = true;
  }

  rpc Ping(PingRequest) returns (PingResponse);
}
`;

const parsed = parseProto(FIXTURE, 'demo/fixture.proto');
const thing = parsed.messages.find((m) => m.name === 'Thing')!;

describe('parseProto', () => {
  test('reads the package and imports and reports nothing unparsed', () => {
    expect(parsed.package).toBe('demo');
    expect(parsed.imports).toEqual(['gogoproto/gogo.proto', 'google/api/annotations.proto']);
    expect(parsed.unparsed).toEqual([]);
  });

  test('finds every top-level declaration and drops none', () => {
    expect(parsed.messages.map((m) => m.name)).toEqual(['Blob', 'Thing']);
    expect(parsed.enums.map((e) => e.name)).toEqual(['Kind']);
    expect(parsed.services.map((s) => s.name)).toEqual(['Query']);
  });

  test('keeps a block comment as the message description, paragraphs intact', () => {
    expect(thing.comment).toBe('A Thing is the unit this fixture describes.\n\nIt carries a oneof payload.');
    expect(parsed.enums[0].comment).toBe('Kind separates the two flavours of thing.\nThe zero value is unspecified.');
  });

  test('reads field name, number, type and comment', () => {
    const id = thing.fields.find((f) => f.name === 'id')!;
    expect(id).toMatchObject({ number: 1, type: 'string', rule: 'singular', comment: 'Unique identifier for the thing.' });
  });

  test('marks repeated and optional fields by rule', () => {
    expect(thing.fields.find((f) => f.name === 'owners')!.rule).toBe('repeated');
    expect(thing.fields.find((f) => f.name === 'note')!.rule).toBe('optional');
  });

  test('keeps field options without letting them swallow the field number', () => {
    const kind = thing.fields.find((f) => f.name === 'kind')!;
    expect(kind.number).toBe(3);
    expect(kind.type).toBe('Kind');
    expect(kind.options).toBe('(gogoproto.nullable) = false');
  });

  test('attributes oneof members to their oneof and leaves the rest alone', () => {
    expect(thing.oneofs).toEqual(['payload']);
    expect(thing.fields.filter((f) => f.oneof === 'payload').map((f) => f.name)).toEqual(['text', 'blob']);
    expect(thing.fields.find((f) => f.name === 'id')!.oneof).toBe('');
  });

  test('does not mistake a message-level option for a field', () => {
    expect(thing.fields.map((f) => f.name)).toEqual(['id', 'owners', 'kind', 'note', 'text', 'blob']);
  });

  test('reads an empty message as a message with no fields', () => {
    expect(parsed.messages.find((m) => m.name === 'Blob')!.fields).toEqual([]);
  });

  test('reads enum values and their trailing comments', () => {
    expect(parsed.enums[0].values).toEqual([
      { name: 'KIND_UNSPECIFIED', number: 0, comment: '' },
      { name: 'KIND_FIRST', number: 1, comment: 'the first flavour' },
      { name: 'KIND_SECOND', number: 2, comment: '' },
    ]);
  });

  test('reads rpcs with their request, response and http binding', () => {
    const [get, list, ping] = parsed.services[0].rpcs;
    expect(get).toMatchObject({
      name: 'GetThing',
      request: 'GetThingRequest',
      response: 'GetThingResponse',
      httpMethod: 'get',
      httpPath: '/demo/things/{id}',
      comment: 'Fetch one thing.',
      deprecated: false,
    });
    expect(list).toMatchObject({ name: 'ListThings', httpPath: '', deprecated: true });
    // A body-less rpc still parses, and the service does not lose it.
    expect(ping).toMatchObject({ name: 'Ping', request: 'PingRequest', response: 'PingResponse' });
  });

  test('an rpc option block does not leak into the next rpc', () => {
    expect(parsed.services[0].rpcs.map((r) => r.name)).toEqual(['GetThing', 'ListThings', 'Ping']);
  });

  test('a declaration wrapped across lines still parses', () => {
    const wrapped = parseProto(`
      package demo;
      service S {
        rpc Long(LongRequest)
            returns (LongResponse) {
          option (google.api.http).get =
            "/demo/long";
        }
      }
    `);
    expect(wrapped.unparsed).toEqual([]);
    expect(wrapped.services[0].rpcs[0]).toMatchObject({
      name: 'Long',
      request: 'LongRequest',
      response: 'LongResponse',
      httpPath: '/demo/long',
    });
  });

  test('records an unrecognised declaration rather than dropping it', () => {
    const odd = parseProto('package demo;\nmessage M { not a field }', 'odd.proto');
    expect(odd.unparsed.length).toBeGreaterThan(0);
  });
});

describe('tokenize', () => {
  test('does not treat braces inside a string as block delimiters', () => {
    const tokens = tokenize('option (google.api.http).get = "/a/{id}/b";');
    expect(tokens.map((t) => t.kind)).toEqual(['stmt']);
    expect(tokens[0].text).toContain('{id}');
  });
});

describe('rendering helpers', () => {
  test('slug matches the anchor rehype-slug derives from a heading', () => {
    expect(slug('MsgTransferTokens')).toBe('msgtransfertokens');
    expect(slug('Service Msg')).toBe('service-msg');
  });

  test('cell escapes the characters that would break a table or the html', () => {
    expect(cell('a | b')).toBe('a \\| b');
    expect(cell('map<string, X> & more')).toBe('map&lt;string, X&gt; &amp; more');
    expect(cell('one\ntwo')).toBe('one two');
  });
});

describe('isDocumented', () => {
  test('documents the live tokenization set', () => {
    expect(isDocumented('tokenization/tx.proto')).toBe(true);
    expect(isDocumented('tokenization/module/v1/module.proto')).toBe(true);
  });

  test('skips the frozen per-consensus-version copies', () => {
    expect(isDocumented('tokenization/v27/tx.proto')).toBe(false);
    expect(isDocumented('tokenization/v32/collections.proto')).toBe(false);
  });

  test('skips the legacy badges package', () => {
    expect(isDocumented('badges/tx.proto')).toBe(false);
  });

  test('keeps real api versions of other modules', () => {
    expect(isDocumented('gamm/v2/query.proto')).toBe(true);
    expect(isDocumented('poolmanager/v1beta1/tx.proto')).toBe(true);
  });

  test('ignores non-proto files', () => {
    expect(isDocumented('api/wasmx/module/module.pulsar.go')).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Generated corpus
// ---------------------------------------------------------------------------

const protoDir = path.resolve(import.meta.dir, '../../chain/proto');
const generated = fs.existsSync(path.join(protoDir, 'README.md'));

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.name.endsWith('.md') ? [full] : [];
  });
}

describe.if(generated)('generated proto tree', () => {
  const pages = walk(protoDir).map((file) => ({
    relative: path.relative(protoDir, file),
    source: fs.readFileSync(file, 'utf8'),
  }));

  test('the index exists and points at the generator', () => {
    const index = pages.find((p) => p.relative === 'README.md')!;
    expect(index.source).toContain('# Proto reference');
    expect(index.source).toContain('site/scripts/gen-proto-reference.ts');
  });

  test('the index cross-links the prose token standard pages', () => {
    const index = pages.find((p) => p.relative === 'README.md')!.source;
    expect(index).toContain('../../token-standard/messages/README.md');
    expect(index).toContain('../../token-standard/queries/README.md');
  });

  test('every module has a page and the index links it', () => {
    const index = pages.find((p) => p.relative === 'README.md')!.source;
    for (const module of ['tokenization', 'gamm', 'poolmanager', 'sendmanager', 'managersplitter', 'ibcratelimit']) {
      expect(pages.some((p) => p.relative === path.join(module, 'README.md'))).toBe(true);
      expect(index).toContain(`(${module}/README.md)`);
    }
  });

  test('every page carries a description frontmatter and exactly one H1', () => {
    const missingFrontmatter: string[] = [];
    const wrongHeadings: string[] = [];
    for (const page of pages) {
      if (!/^---\ndescription: "[^"]+"\n---\n/.test(page.source)) missingFrontmatter.push(page.relative);
      const h1 = page.source.split('\n').filter((line) => /^# \S/.test(line));
      if (h1.length !== 1) wrongHeadings.push(`${page.relative} (${h1.length})`);
    }
    expect(missingFrontmatter).toEqual([]);
    expect(wrongHeadings).toEqual([]);
  });

  test('no page is empty: every page has a body beyond its heading', () => {
    const thin = pages
      .filter((page) => page.source.replace(/^---\n[\s\S]*?\n---\n/, '').replace(/^#.*$/m, '').trim().length < 80)
      .map((p) => p.relative);
    expect(thin).toEqual([]);
  });

  test('every non-index page links back to its raw source on GitHub', () => {
    const missing = pages
      .filter((p) => path.basename(p.relative) !== 'README.md')
      .filter((p) => !p.source.includes('https://github.com/BitBadges/bitbadgeschain/blob/master/proto/'))
      .map((p) => p.relative);
    expect(missing).toEqual([]);
  });

  test('the tokenization tx page documents MsgTransferTokens with its fields', () => {
    const tx = pages.find((p) => p.relative === path.join('tokenization', 'tx.md'))!.source;
    const section = tx.slice(tx.indexOf('### MsgTransferTokens'));
    expect(section).toContain('| Field | # | Type | Rule | Description |');
    expect(section).toMatch(/\| `creator` \| \d+ \|/);
    expect(section).toMatch(/\| `collectionId` \| \d+ \|/);
    expect(section).toMatch(/\| `transfers` \| \d+ \| \[`Transfer`\]\(transfers\.md#transfer\) \| repeated \|/);
  });

  test('the tokenization tx page lists the Msg service with its rpcs', () => {
    const tx = pages.find((p) => p.relative === path.join('tokenization', 'tx.md'))!.source;
    expect(tx).toContain('## Service Msg');
    expect(tx).toContain('| `TransferTokens` |');
  });

  test('a query rpc records its REST path', () => {
    const query = pages.find((p) => p.relative === path.join('tokenization', 'query.md'))!.source;
    expect(query).toContain('`GET /bitbadges/bitbadgeschain/tokenization/get_collection/{collectionId}`');
  });

  test('an enum is rendered with its values', () => {
    const params = pages.find((p) => p.relative === path.join('ibcratelimit', 'params.md'))!.source;
    expect(params).toContain('### TimeframeType');
    expect(params).toContain('| `TIMEFRAME_TYPE_BLOCK` | 1 |');
  });

  test('the frozen versioned copies and the legacy badges package are not generated', () => {
    expect(pages.some((p) => /tokenization[/\\]v\d+[/\\]/.test(p.relative))).toBe(false);
    expect(pages.some((p) => p.relative.startsWith('badges'))).toBe(false);
  });
});

test.if(!generated)('generated proto tree is missing', () => {
  console.warn('chain/proto is not generated: run `bun run gen:proto` from site/ to enable the corpus assertions.');
  expect(generated).toBe(false);
});
