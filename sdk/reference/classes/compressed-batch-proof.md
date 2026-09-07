---
description: "from message ics23.CompressedBatchProof"
---

# Class: CompressedBatchProof

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:762](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L762)

## Generated

from message ics23.CompressedBatchProof

## Extends

- `Message`\<`CompressedBatchProof`\>

## Constructors

### Constructor

> **new CompressedBatchProof**(`data?`): `CompressedBatchProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:773](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L773)

#### Parameters

##### data?

`PartialMessage`\<`CompressedBatchProof`\>

#### Returns

`CompressedBatchProof`

#### Overrides

`Message<CompressedBatchProof>.constructor`

## Properties

### entries

> **entries**: [`CompressedBatchEntry`](/sdk/reference/classes/compressed-batch-entry)[] = `[]`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:766](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L766)

#### Generated

from field: repeated ics23.CompressedBatchEntry entries = 1;

***

### lookupInners

> **lookupInners**: [`InnerOp`](/sdk/reference/classes/inner-op)[] = `[]`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:771](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L771)

#### Generated

from field: repeated ics23.InnerOp lookup_inners = 2;

***

### fields

> `readonly` `static` **fields**: `FieldList`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:780](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L780)

***

### runtime

> `readonly` `static` **runtime**: `ProtoRuntime` = `proto3`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:778](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L778)

***

### typeName

> `readonly` `static` **typeName**: `"ics23.CompressedBatchProof"` = `'ics23.CompressedBatchProof'`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:779](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L779)

## Methods

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:797](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L797)

#### Parameters

##### a

`CompressedBatchProof` \| `PlainMessage`\<`CompressedBatchProof`\> \| `undefined`

##### b

`CompressedBatchProof` \| `PlainMessage`\<`CompressedBatchProof`\> \| `undefined`

#### Returns

`boolean`

***

### fromBinary()

> `static` **fromBinary**(`bytes`, `options?`): `CompressedBatchProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:785](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L785)

#### Parameters

##### bytes

`Uint8Array`

##### options?

`Partial`\<`BinaryReadOptions`\>

#### Returns

`CompressedBatchProof`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `CompressedBatchProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:789](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L789)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`CompressedBatchProof`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `CompressedBatchProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:793](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L793)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`CompressedBatchProof`
