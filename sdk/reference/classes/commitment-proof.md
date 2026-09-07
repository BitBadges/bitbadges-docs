---
description: "CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages"
---

# Class: CommitmentProof

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:288](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L288)

CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch
of such messages

## Generated

from message ics23.CommitmentProof

## Extends

- `Message`\<`CommitmentProof`\>

## Constructors

### Constructor

> **new CommitmentProof**(`data?`): `CommitmentProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:323](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L323)

#### Parameters

##### data?

`PartialMessage`\<`CommitmentProof`\>

#### Returns

`CommitmentProof`

#### Overrides

`Message<CommitmentProof>.constructor`

## Properties

### proof

> **proof**: \{ `case`: `"exist"`; `value`: [`ExistenceProof`](/sdk/reference/classes/existence-proof); \} \| \{ `case`: `"nonexist"`; `value`: [`NonExistenceProof`](/sdk/reference/classes/non-existence-proof); \} \| \{ `case`: `"batch"`; `value`: [`BatchProof`](/sdk/reference/classes/batch-proof); \} \| \{ `case`: `"compressed"`; `value`: [`CompressedBatchProof`](/sdk/reference/classes/compressed-batch-proof); \} \| \{ `case`: `undefined`; `value?`: `undefined`; \}

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:292](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L292)

#### Union Members

##### Type Literal

\{ `case`: `"exist"`; `value`: [`ExistenceProof`](/sdk/reference/classes/existence-proof); \}

##### case

> **case**: `"exist"`

##### value

> **value**: [`ExistenceProof`](/sdk/reference/classes/existence-proof)

###### Generated

from field: ics23.ExistenceProof exist = 1;

***

##### Type Literal

\{ `case`: `"nonexist"`; `value`: [`NonExistenceProof`](/sdk/reference/classes/non-existence-proof); \}

##### case

> **case**: `"nonexist"`

##### value

> **value**: [`NonExistenceProof`](/sdk/reference/classes/non-existence-proof)

###### Generated

from field: ics23.NonExistenceProof nonexist = 2;

***

##### Type Literal

\{ `case`: `"batch"`; `value`: [`BatchProof`](/sdk/reference/classes/batch-proof); \}

##### case

> **case**: `"batch"`

##### value

> **value**: [`BatchProof`](/sdk/reference/classes/batch-proof)

###### Generated

from field: ics23.BatchProof batch = 3;

***

##### Type Literal

\{ `case`: `"compressed"`; `value`: [`CompressedBatchProof`](/sdk/reference/classes/compressed-batch-proof); \}

##### case

> **case**: `"compressed"`

##### value

> **value**: [`CompressedBatchProof`](/sdk/reference/classes/compressed-batch-proof)

###### Generated

from field: ics23.CompressedBatchProof compressed = 4;

***

##### Type Literal

\{ `case`: `undefined`; `value?`: `undefined`; \}

#### Generated

from oneof ics23.CommitmentProof.proof

***

### fields

> `readonly` `static` **fields**: `FieldList`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:330](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L330)

***

### runtime

> `readonly` `static` **runtime**: `ProtoRuntime` = `proto3`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:328](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L328)

***

### typeName

> `readonly` `static` **typeName**: `"ics23.CommitmentProof"` = `'ics23.CommitmentProof'`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:329](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L329)

## Methods

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:349](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L349)

#### Parameters

##### a

`CommitmentProof` \| `PlainMessage`\<`CommitmentProof`\> \| `undefined`

##### b

`CommitmentProof` \| `PlainMessage`\<`CommitmentProof`\> \| `undefined`

#### Returns

`boolean`

***

### fromBinary()

> `static` **fromBinary**(`bytes`, `options?`): `CommitmentProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:337](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L337)

#### Parameters

##### bytes

`Uint8Array`

##### options?

`Partial`\<`BinaryReadOptions`\>

#### Returns

`CommitmentProof`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `CommitmentProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:341](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L341)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`CommitmentProof`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `CommitmentProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:345](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L345)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`CommitmentProof`
