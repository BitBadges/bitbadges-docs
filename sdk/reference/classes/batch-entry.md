---
description: "Use BatchEntry not CommitmentProof, to avoid recursion"
---

# Class: BatchEntry

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:709](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L709)

Use BatchEntry not CommitmentProof, to avoid recursion

## Generated

from message ics23.BatchEntry

## Extends

- `Message`\<`BatchEntry`\>

## Constructors

### Constructor

> **new BatchEntry**(`data?`): `BatchEntry`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:730](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L730)

#### Parameters

##### data?

`PartialMessage`\<`BatchEntry`\>

#### Returns

`BatchEntry`

#### Overrides

`Message<BatchEntry>.constructor`

## Properties

### proof

> **proof**: \{ `case`: `"exist"`; `value`: [`ExistenceProof`](/sdk/reference/classes/existence-proof); \} \| \{ `case`: `"nonexist"`; `value`: [`NonExistenceProof`](/sdk/reference/classes/non-existence-proof); \} \| \{ `case`: `undefined`; `value?`: `undefined`; \}

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:713](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L713)

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

\{ `case`: `undefined`; `value?`: `undefined`; \}

#### Generated

from oneof ics23.BatchEntry.proof

***

### fields

> `readonly` `static` **fields**: `FieldList`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:737](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L737)

***

### runtime

> `readonly` `static` **runtime**: `ProtoRuntime` = `proto3`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:735](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L735)

***

### typeName

> `readonly` `static` **typeName**: `"ics23.BatchEntry"` = `'ics23.BatchEntry'`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:736](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L736)

## Methods

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:754](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L754)

#### Parameters

##### a

`BatchEntry` \| `PlainMessage`\<`BatchEntry`\> \| `undefined`

##### b

`BatchEntry` \| `PlainMessage`\<`BatchEntry`\> \| `undefined`

#### Returns

`boolean`

***

### fromBinary()

> `static` **fromBinary**(`bytes`, `options?`): `BatchEntry`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:742](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L742)

#### Parameters

##### bytes

`Uint8Array`

##### options?

`Partial`\<`BinaryReadOptions`\>

#### Returns

`BatchEntry`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `BatchEntry`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:746](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L746)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`BatchEntry`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `BatchEntry`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:750](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L750)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`BatchEntry`
