---
description: "LeafOp represents the raw key-value data we wish to prove, and must be flexible to represent the internal transformation from the original key-value pairs into…"
---

# Class: LeafOp

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:375](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L375)

*
LeafOp represents the raw key-value data we wish to prove, and
must be flexible to represent the internal transformation from
the original key-value pairs into the basis hash, for many existing
merkle trees.

key and value are passed in. So that the signature of this operation is:
leafOp(key, value) -> output

To process this, first prehash the keys and values if needed (ANY means no hash
in this case): hkey = prehashKey(key) hvalue = prehashValue(value)

Then combine the bytes, and hash it
output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)

## Generated

from message ics23.LeafOp

## Extends

- `Message`\<`LeafOp`\>

## Constructors

### Constructor

> **new LeafOp**(`data?`): `LeafOp`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:404](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L404)

#### Parameters

##### data?

`PartialMessage`\<`LeafOp`\>

#### Returns

`LeafOp`

#### Overrides

`Message<LeafOp>.constructor`

## Properties

### hash

> **hash**: [`HashOp`](/sdk/reference/enumerations/hash-op) = `HashOp.NO_HASH`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:379](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L379)

#### Generated

from field: ics23.HashOp hash = 1;

***

### length

> **length**: [`LengthOp`](/sdk/reference/enumerations/length-op) = `LengthOp.NO_PREFIX`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:394](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L394)

#### Generated

from field: ics23.LengthOp length = 4;

***

### prefix

> **prefix**: `Uint8Array`\<`ArrayBuffer`\>

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:402](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L402)

prefix is a fixed bytes that may optionally be included at the beginning to
differentiate a leaf node from an inner node.

#### Generated

from field: bytes prefix = 5;

***

### prehashKey

> **prehashKey**: [`HashOp`](/sdk/reference/enumerations/hash-op) = `HashOp.NO_HASH`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:384](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L384)

#### Generated

from field: ics23.HashOp prehash_key = 2;

***

### prehashValue

> **prehashValue**: [`HashOp`](/sdk/reference/enumerations/hash-op) = `HashOp.NO_HASH`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:389](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L389)

#### Generated

from field: ics23.HashOp prehash_value = 3;

***

### fields

> `readonly` `static` **fields**: `FieldList`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:411](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L411)

***

### runtime

> `readonly` `static` **runtime**: `ProtoRuntime` = `proto3`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:409](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L409)

***

### typeName

> `readonly` `static` **typeName**: `"ics23.LeafOp"` = `'ics23.LeafOp'`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:410](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L410)

## Methods

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:431](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L431)

#### Parameters

##### a

`LeafOp` \| `PlainMessage`\<`LeafOp`\> \| `undefined`

##### b

`LeafOp` \| `PlainMessage`\<`LeafOp`\> \| `undefined`

#### Returns

`boolean`

***

### fromBinary()

> `static` **fromBinary**(`bytes`, `options?`): `LeafOp`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:419](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L419)

#### Parameters

##### bytes

`Uint8Array`

##### options?

`Partial`\<`BinaryReadOptions`\>

#### Returns

`LeafOp`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `LeafOp`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:423](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L423)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`LeafOp`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `LeafOp`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:427](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L427)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`LeafOp`
