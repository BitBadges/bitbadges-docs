---
description: "InnerSpec contains all store-specific structure info to determine if two proofs from a given store are neighbors."
---

# Class: InnerSpec

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:593](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L593)

InnerSpec contains all store-specific structure info to determine if two proofs
from a given store are neighbors.

This enables:

isLeftMost(spec: InnerSpec, op: InnerOp)
isRightMost(spec: InnerSpec, op: InnerOp)
isLeftNeighbor(spec: InnerSpec, left: InnerOp, right: InnerOp)

## Generated

from message ics23.InnerSpec

## Extends

- `Message`\<`InnerSpec`\>

## Constructors

### Constructor

> **new InnerSpec**(`data?`): `InnerSpec`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:633](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L633)

#### Parameters

##### data?

`PartialMessage`\<`InnerSpec`\>

#### Returns

`InnerSpec`

#### Overrides

`Message<InnerSpec>.constructor`

## Properties

### childOrder

> **childOrder**: `number`[] = `[]`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:601](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L601)

Child order is the ordering of the children node, must count from 0
iavl tree is [0, 1] (left then right)
merk is [0, 2, 1] (left, right, here)

#### Generated

from field: repeated int32 child_order = 1;

***

### childSize

> **childSize**: `number` = `0`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:606](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L606)

#### Generated

from field: int32 child_size = 2;

***

### emptyChild

> **emptyChild**: `Uint8Array`\<`ArrayBuffer`\>

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:624](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L624)

empty child is the prehash image that is used when one child is nil (eg. 20
bytes of 0)

#### Generated

from field: bytes empty_child = 5;

***

### hash

> **hash**: [`HashOp`](/sdk/reference/enumerations/hash-op) = `HashOp.NO_HASH`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:631](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L631)

hash is the algorithm that must be used for each InnerOp

#### Generated

from field: ics23.HashOp hash = 6;

***

### maxPrefixLength

> **maxPrefixLength**: `number` = `0`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:616](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L616)

#### Generated

from field: int32 max_prefix_length = 4;

***

### minPrefixLength

> **minPrefixLength**: `number` = `0`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:611](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L611)

#### Generated

from field: int32 min_prefix_length = 3;

***

### fields

> `readonly` `static` **fields**: `FieldList`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:640](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L640)

***

### runtime

> `readonly` `static` **runtime**: `ProtoRuntime` = `proto3`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:638](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L638)

***

### typeName

> `readonly` `static` **typeName**: `"ics23.InnerSpec"` = `'ics23.InnerSpec'`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:639](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L639)

## Methods

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:661](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L661)

#### Parameters

##### a

`InnerSpec` \| `PlainMessage`\<`InnerSpec`\> \| `undefined`

##### b

`InnerSpec` \| `PlainMessage`\<`InnerSpec`\> \| `undefined`

#### Returns

`boolean`

***

### fromBinary()

> `static` **fromBinary**(`bytes`, `options?`): `InnerSpec`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:649](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L649)

#### Parameters

##### bytes

`Uint8Array`

##### options?

`Partial`\<`BinaryReadOptions`\>

#### Returns

`InnerSpec`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `InnerSpec`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:653](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L653)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`InnerSpec`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `InnerSpec`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:657](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L657)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`InnerSpec`
