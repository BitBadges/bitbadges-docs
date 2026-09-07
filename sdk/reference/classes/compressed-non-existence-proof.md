---
description: "from message ics23.CompressedNonExistenceProof"
---

# Class: CompressedNonExistenceProof

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:926](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L926)

## Generated

from message ics23.CompressedNonExistenceProof

## Extends

- `Message`\<`CompressedNonExistenceProof`\>

## Constructors

### Constructor

> **new CompressedNonExistenceProof**(`data?`): `CompressedNonExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:944](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L944)

#### Parameters

##### data?

`PartialMessage`\<`CompressedNonExistenceProof`\>

#### Returns

`CompressedNonExistenceProof`

#### Overrides

`Message<CompressedNonExistenceProof>.constructor`

## Properties

### key

> **key**: `Uint8Array`\<`ArrayBuffer`\>

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:932](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L932)

TODO: remove this as unnecessary??? we prove a range

#### Generated

from field: bytes key = 1;

***

### left?

> `optional` **left?**: [`CompressedExistenceProof`](/sdk/reference/classes/compressed-existence-proof)

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:937](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L937)

#### Generated

from field: ics23.CompressedExistenceProof left = 2;

***

### right?

> `optional` **right?**: [`CompressedExistenceProof`](/sdk/reference/classes/compressed-existence-proof)

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:942](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L942)

#### Generated

from field: ics23.CompressedExistenceProof right = 3;

***

### fields

> `readonly` `static` **fields**: `FieldList`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:951](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L951)

***

### runtime

> `readonly` `static` **runtime**: `ProtoRuntime` = `proto3`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:949](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L949)

***

### typeName

> `readonly` `static` **typeName**: `"ics23.CompressedNonExistenceProof"` = `'ics23.CompressedNonExistenceProof'`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:950](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L950)

## Methods

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:969](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L969)

#### Parameters

##### a

`CompressedNonExistenceProof` \| `PlainMessage`\<`CompressedNonExistenceProof`\> \| `undefined`

##### b

`CompressedNonExistenceProof` \| `PlainMessage`\<`CompressedNonExistenceProof`\> \| `undefined`

#### Returns

`boolean`

***

### fromBinary()

> `static` **fromBinary**(`bytes`, `options?`): `CompressedNonExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:957](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L957)

#### Parameters

##### bytes

`Uint8Array`

##### options?

`Partial`\<`BinaryReadOptions`\>

#### Returns

`CompressedNonExistenceProof`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `CompressedNonExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:961](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L961)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`CompressedNonExistenceProof`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `CompressedNonExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:965](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L965)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`CompressedNonExistenceProof`
