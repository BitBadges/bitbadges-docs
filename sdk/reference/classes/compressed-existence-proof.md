---
description: "from message ics23.CompressedExistenceProof"
---

# Class: CompressedExistenceProof

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:866](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L866)

## Generated

from message ics23.CompressedExistenceProof

## Extends

- `Message`\<`CompressedExistenceProof`\>

## Constructors

### Constructor

> **new CompressedExistenceProof**(`data?`): `CompressedExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:889](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L889)

#### Parameters

##### data?

`PartialMessage`\<`CompressedExistenceProof`\>

#### Returns

`CompressedExistenceProof`

#### Overrides

`Message<CompressedExistenceProof>.constructor`

## Properties

### key

> **key**: `Uint8Array`\<`ArrayBuffer`\>

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:870](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L870)

#### Generated

from field: bytes key = 1;

***

### leaf?

> `optional` **leaf?**: [`LeafOp`](/sdk/reference/classes/leaf-op)

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:880](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L880)

#### Generated

from field: ics23.LeafOp leaf = 3;

***

### path

> **path**: `number`[] = `[]`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:887](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L887)

these are indexes into the lookup_inners table in CompressedBatchProof

#### Generated

from field: repeated int32 path = 4;

***

### value

> **value**: `Uint8Array`\<`ArrayBuffer`\>

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:875](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L875)

#### Generated

from field: bytes value = 2;

***

### fields

> `readonly` `static` **fields**: `FieldList`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:896](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L896)

***

### runtime

> `readonly` `static` **runtime**: `ProtoRuntime` = `proto3`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:894](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L894)

***

### typeName

> `readonly` `static` **typeName**: `"ics23.CompressedExistenceProof"` = `'ics23.CompressedExistenceProof'`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:895](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L895)

## Methods

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:915](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L915)

#### Parameters

##### a

`CompressedExistenceProof` \| `PlainMessage`\<`CompressedExistenceProof`\> \| `undefined`

##### b

`CompressedExistenceProof` \| `PlainMessage`\<`CompressedExistenceProof`\> \| `undefined`

#### Returns

`boolean`

***

### fromBinary()

> `static` **fromBinary**(`bytes`, `options?`): `CompressedExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:903](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L903)

#### Parameters

##### bytes

`Uint8Array`

##### options?

`Partial`\<`BinaryReadOptions`\>

#### Returns

`CompressedExistenceProof`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `CompressedExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:907](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L907)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`CompressedExistenceProof`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `CompressedExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:911](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L911)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`CompressedExistenceProof`
