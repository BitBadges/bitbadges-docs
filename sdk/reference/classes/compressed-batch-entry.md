---
description: "Use BatchEntry not CommitmentProof, to avoid recursion"
---

# Class: CompressedBatchEntry

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:810](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L810)

Use BatchEntry not CommitmentProof, to avoid recursion

## Generated

from message ics23.CompressedBatchEntry

## Extends

- `Message`\<`CompressedBatchEntry`\>

## Constructors

### Constructor

> **new CompressedBatchEntry**(`data?`): `CompressedBatchEntry`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:831](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L831)

#### Parameters

##### data?

`PartialMessage`\<`CompressedBatchEntry`\>

#### Returns

`CompressedBatchEntry`

#### Overrides

`Message<CompressedBatchEntry>.constructor`

## Properties

### proof

> **proof**: \{ `case`: `"exist"`; `value`: [`CompressedExistenceProof`](/sdk/reference/classes/compressed-existence-proof); \} \| \{ `case`: `"nonexist"`; `value`: [`CompressedNonExistenceProof`](/sdk/reference/classes/compressed-non-existence-proof); \} \| \{ `case`: `undefined`; `value?`: `undefined`; \}

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:814](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L814)

#### Union Members

##### Type Literal

\{ `case`: `"exist"`; `value`: [`CompressedExistenceProof`](/sdk/reference/classes/compressed-existence-proof); \}

##### case

> **case**: `"exist"`

##### value

> **value**: [`CompressedExistenceProof`](/sdk/reference/classes/compressed-existence-proof)

###### Generated

from field: ics23.CompressedExistenceProof exist = 1;

***

##### Type Literal

\{ `case`: `"nonexist"`; `value`: [`CompressedNonExistenceProof`](/sdk/reference/classes/compressed-non-existence-proof); \}

##### case

> **case**: `"nonexist"`

##### value

> **value**: [`CompressedNonExistenceProof`](/sdk/reference/classes/compressed-non-existence-proof)

###### Generated

from field: ics23.CompressedNonExistenceProof nonexist = 2;

***

##### Type Literal

\{ `case`: `undefined`; `value?`: `undefined`; \}

#### Generated

from oneof ics23.CompressedBatchEntry.proof

***

### fields

> `readonly` `static` **fields**: `FieldList`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:838](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L838)

***

### runtime

> `readonly` `static` **runtime**: `ProtoRuntime` = `proto3`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:836](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L836)

***

### typeName

> `readonly` `static` **typeName**: `"ics23.CompressedBatchEntry"` = `'ics23.CompressedBatchEntry'`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:837](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L837)

## Methods

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:855](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L855)

#### Parameters

##### a

`CompressedBatchEntry` \| `PlainMessage`\<`CompressedBatchEntry`\> \| `undefined`

##### b

`CompressedBatchEntry` \| `PlainMessage`\<`CompressedBatchEntry`\> \| `undefined`

#### Returns

`boolean`

***

### fromBinary()

> `static` **fromBinary**(`bytes`, `options?`): `CompressedBatchEntry`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:843](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L843)

#### Parameters

##### bytes

`Uint8Array`

##### options?

`Partial`\<`BinaryReadOptions`\>

#### Returns

`CompressedBatchEntry`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `CompressedBatchEntry`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:847](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L847)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`CompressedBatchEntry`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `CompressedBatchEntry`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:851](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L851)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`CompressedBatchEntry`
