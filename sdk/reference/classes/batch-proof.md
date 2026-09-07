---
description: "BatchProof is a group of multiple proof types than can be compressed"
---

# Class: BatchProof

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:672](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L672)

BatchProof is a group of multiple proof types than can be compressed

## Generated

from message ics23.BatchProof

## Extends

- `Message`\<`BatchProof`\>

## Constructors

### Constructor

> **new BatchProof**(`data?`): `BatchProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:678](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L678)

#### Parameters

##### data?

`PartialMessage`\<`BatchProof`\>

#### Returns

`BatchProof`

#### Overrides

`Message<BatchProof>.constructor`

## Properties

### entries

> **entries**: [`BatchEntry`](/sdk/reference/classes/batch-entry)[] = `[]`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:676](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L676)

#### Generated

from field: repeated ics23.BatchEntry entries = 1;

***

### fields

> `readonly` `static` **fields**: `FieldList`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:685](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L685)

***

### runtime

> `readonly` `static` **runtime**: `ProtoRuntime` = `proto3`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:683](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L683)

***

### typeName

> `readonly` `static` **typeName**: `"ics23.BatchProof"` = `'ics23.BatchProof'`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:684](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L684)

## Methods

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:699](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L699)

#### Parameters

##### a

`BatchProof` \| `PlainMessage`\<`BatchProof`\> \| `undefined`

##### b

`BatchProof` \| `PlainMessage`\<`BatchProof`\> \| `undefined`

#### Returns

`boolean`

***

### fromBinary()

> `static` **fromBinary**(`bytes`, `options?`): `BatchProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:687](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L687)

#### Parameters

##### bytes

`Uint8Array`

##### options?

`Partial`\<`BinaryReadOptions`\>

#### Returns

`BatchProof`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `BatchProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:691](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L691)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`BatchProof`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `BatchProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:695](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L695)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`BatchProof`
