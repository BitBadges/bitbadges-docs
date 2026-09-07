---
description: "NonExistenceProof takes a proof of two neighbors, one left of the desired key, one right of the desired key. If both proofs are valid AND they are neighbors…"
---

# Class: NonExistenceProof

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:230](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L230)

NonExistenceProof takes a proof of two neighbors, one left of the desired key,
one right of the desired key. If both proofs are valid AND they are neighbors,
then there is no valid proof for the given key.

## Generated

from message ics23.NonExistenceProof

## Extends

- `Message`\<`NonExistenceProof`\>

## Constructors

### Constructor

> **new NonExistenceProof**(`data?`): `NonExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:248](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L248)

#### Parameters

##### data?

`PartialMessage`\<`NonExistenceProof`\>

#### Returns

`NonExistenceProof`

#### Overrides

`Message<NonExistenceProof>.constructor`

## Properties

### key

> **key**: `Uint8Array`\<`ArrayBuffer`\>

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:236](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L236)

TODO: remove this as unnecessary??? we prove a range

#### Generated

from field: bytes key = 1;

***

### left?

> `optional` **left?**: [`ExistenceProof`](/sdk/reference/classes/existence-proof)

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:241](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L241)

#### Generated

from field: ics23.ExistenceProof left = 2;

***

### right?

> `optional` **right?**: [`ExistenceProof`](/sdk/reference/classes/existence-proof)

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:246](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L246)

#### Generated

from field: ics23.ExistenceProof right = 3;

***

### fields

> `readonly` `static` **fields**: `FieldList`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:255](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L255)

***

### runtime

> `readonly` `static` **runtime**: `ProtoRuntime` = `proto3`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:253](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L253)

***

### typeName

> `readonly` `static` **typeName**: `"ics23.NonExistenceProof"` = `'ics23.NonExistenceProof'`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:254](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L254)

## Methods

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:273](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L273)

#### Parameters

##### a

`NonExistenceProof` \| `PlainMessage`\<`NonExistenceProof`\> \| `undefined`

##### b

`NonExistenceProof` \| `PlainMessage`\<`NonExistenceProof`\> \| `undefined`

#### Returns

`boolean`

***

### fromBinary()

> `static` **fromBinary**(`bytes`, `options?`): `NonExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:261](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L261)

#### Parameters

##### bytes

`Uint8Array`

##### options?

`Partial`\<`BinaryReadOptions`\>

#### Returns

`NonExistenceProof`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `NonExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:265](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L265)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`NonExistenceProof`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `NonExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:269](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L269)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`NonExistenceProof`
