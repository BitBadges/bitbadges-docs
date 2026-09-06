import { describe, expect, test } from 'bun:test';
import { sanitizeOpenApi } from '../src/lib/docs/openapi';

const base = () => ({
  openapi: '3.1.0',
  info: { title: 'T', version: '1' },
  paths: {} as Record<string, unknown>,
  components: { schemas: {} as Record<string, unknown> },
});

describe('sanitizeOpenApi — x-internal (Stoplight parity)', () => {
  test('drops an operation marked x-internal: true', () => {
    const spec = base();
    spec.paths = {
      '/public': { get: { summary: 'Public' } },
      '/secret': { get: { summary: 'Secret', 'x-internal': true } },
    };
    const { spec: out, report } = sanitizeOpenApi(spec);
    expect(Object.keys(out.paths)).toEqual(['/public']);
    expect(report.hiddenOperations).toEqual(['get /secret']);
  });

  test('keeps an operation explicitly marked x-internal: false', () => {
    const spec = base();
    spec.paths = { '/kept': { get: { summary: 'Kept', 'x-internal': false } } };
    const { spec: out, report } = sanitizeOpenApi(spec);
    expect(Object.keys(out.paths)).toEqual(['/kept']);
    expect(report.hiddenOperations).toEqual([]);
  });

  test('keeps an operation with no x-internal at all', () => {
    const spec = base();
    spec.paths = { '/kept': { get: { summary: 'Kept' } } };
    expect(Object.keys(sanitizeOpenApi(spec).spec.paths)).toEqual(['/kept']);
  });

  test('drops a whole path item marked internal, and its operations', () => {
    const spec = base();
    spec.paths = {
      '/gone': { 'x-internal': true, get: { summary: 'A' }, post: { summary: 'B' } },
      '/stay': { get: { summary: 'C' } },
    };
    const { spec: out } = sanitizeOpenApi(spec);
    expect(Object.keys(out.paths)).toEqual(['/stay']);
  });

  test('removes a path that is left with no operations', () => {
    const spec = base();
    spec.paths = { '/empty': { get: { 'x-internal': true }, parameters: [] } };
    expect(Object.keys(sanitizeOpenApi(spec).spec.paths)).toEqual([]);
  });

  test('drops an internal schema and an internal tag', () => {
    const spec = base();
    spec.components.schemas = { Public: { type: 'object' }, Hidden: { type: 'object', 'x-internal': true } };
    (spec as Record<string, unknown>).tags = [{ name: 'Open' }, { name: 'Closed', 'x-internal': true }];
    const { spec: out } = sanitizeOpenApi(spec);
    expect(Object.keys(out.components.schemas)).toEqual(['Public']);
    expect((out as Record<string, unknown>).tags).toEqual([{ name: 'Open' }]);
  });

  test('leaves unrelated vendor extensions untouched', () => {
    const spec = base();
    (spec.components as Record<string, unknown>).securitySchemes = { apiKey: { type: 'apiKey', 'x-type': 'api' } };
    const out = sanitizeOpenApi(spec).spec as Record<string, any>;
    expect(out.components.securitySchemes.apiKey['x-type']).toBe('api');
  });
});

describe('sanitizeOpenApi — reference repair', () => {
  test('cuts a direct self reference so dereferencing terminates', () => {
    const spec = base();
    spec.components.schemas = {
      NumberType: { oneOf: [{ type: 'string' }, { $ref: '#/components/schemas/NumberType' }] },
    };
    const { spec: out, report } = sanitizeOpenApi(spec);
    const oneOf = (out.components.schemas.NumberType as { oneOf: Record<string, unknown>[] }).oneOf;
    expect(oneOf[1].$ref).toBeUndefined();
    expect(oneOf[1].title).toBe('NumberType');
    expect(report.cutSelfRefs).toEqual(['NumberType']);
  });

  test('keeps a mutual cycle between two schemas intact', () => {
    const spec = base();
    spec.components.schemas = {
      AndGroup: { properties: { g: { $ref: '#/components/schemas/OrGroup' } } },
      OrGroup: { properties: { g: { $ref: '#/components/schemas/AndGroup' } } },
    };
    const out = sanitizeOpenApi(spec).spec as Record<string, any>;
    expect(out.components.schemas.AndGroup.properties.g.$ref).toBe('#/components/schemas/OrGroup');
    expect(out.components.schemas.OrGroup.properties.g.$ref).toBe('#/components/schemas/AndGroup');
  });

  test('stubs a dangling reference rather than leaving it broken', () => {
    const spec = base();
    spec.components.schemas = { Wrapper: { properties: { tx: { $ref: '#/components/schemas/EvmTx' } } } };
    const { spec: out, report } = sanitizeOpenApi(spec);
    expect(Object.keys(out.components.schemas).sort()).toEqual(['EvmTx', 'Wrapper']);
    expect((out.components.schemas.EvmTx as { description: string }).description).toMatch(/not defined/i);
    expect(report.stubbedRefs).toEqual(['EvmTx']);
  });

  test('does not stub a reference that resolves', () => {
    const spec = base();
    spec.components.schemas = { A: { $ref: '#/components/schemas/B' }, B: { type: 'object' } };
    expect(sanitizeOpenApi(spec).report.stubbedRefs).toEqual([]);
  });

  test('does not mutate the spec it was given', () => {
    const spec = base();
    spec.paths = { '/secret': { get: { 'x-internal': true } } };
    sanitizeOpenApi(spec);
    expect(Object.keys(spec.paths)).toEqual(['/secret']);
  });
});
