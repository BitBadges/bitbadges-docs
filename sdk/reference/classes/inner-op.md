---
description: "InnerOp represents a merkle-proof step that is not a leaf. It represents concatenating two children and hashing them to provide the next result."
---

# Class: InnerOp

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:458](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L458)

*
InnerOp represents a merkle-proof step that is not a leaf.
It represents concatenating two children and hashing them to provide the next
result.

The result of the previous step is passed in, so the signature of this op is:
innerOp(child) -> output

The result of applying InnerOp should be:
output = op.hash(op.prefix || child || op.suffix)

where the || operator is concatenation of binary data,
and child is the result of hashing all the tree below this step.

Any special data, like prepending child with the length, or prepending the
entire operation with some value to differentiate from leaf nodes, should be
included in prefix and suffix. If either of prefix or suffix is empty, we just
treat it as an empty string

## Generated

from message ics23.InnerOp

## Extends

- `Message`\<`InnerOp`\>

## Constructors

### Constructor

> **new InnerOp**(`data?`): `InnerOp`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:474](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L474)

#### Parameters

##### data?

`PartialMessage`\<`InnerOp`\>

#### Returns

`InnerOp`

#### Overrides

`Message<InnerOp>.constructor`

## Properties

### hash

> **hash**: [`HashOp`](/sdk/reference/enumerations/hash-op) = `HashOp.NO_HASH`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:462](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L462)

#### Generated

from field: ics23.HashOp hash = 1;

***

### prefix

> **prefix**: `Uint8Array`\<`ArrayBuffer`\>

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:467](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L467)

#### Generated

from field: bytes prefix = 2;

***

### suffix

> **suffix**: `Uint8Array`\<`ArrayBuffer`\>

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:472](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L472)

#### Generated

from field: bytes suffix = 3;

***

### fields

> `readonly` `static` **fields**: `FieldList`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:481](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L481)

***

### runtime

> `readonly` `static` **runtime**: `ProtoRuntime` = `proto3`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:479](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L479)

***

### typeName

> `readonly` `static` **typeName**: `"ics23.InnerOp"` = `'ics23.InnerOp'`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:480](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L480)

## Methods

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:499](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L499)

#### Parameters

##### a

`InnerOp` \| `PlainMessage`\<`InnerOp`\> \| `undefined`

##### b

`InnerOp` \| `PlainMessage`\<`InnerOp`\> \| `undefined`

#### Returns

`boolean`

***

### fromBinary()

> `static` **fromBinary**(`bytes`, `options?`): `InnerOp`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:487](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L487)

#### Parameters

##### bytes

`Uint8Array`

##### options?

`Partial`\<`BinaryReadOptions`\>

#### Returns

`InnerOp`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `InnerOp`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:491](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L491)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`InnerOp`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `InnerOp`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:495](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L495)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`InnerOp`
