---
description: "ProofSpec defines what the expected parameters are for a given proof type. This can be stored in the client and used to validate any incoming proofs."
---

# Class: ProofSpec

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:519](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L519)

*
ProofSpec defines what the expected parameters are for a given proof type.
This can be stored in the client and used to validate any incoming proofs.

verify(ProofSpec, Proof) -> Proof | Error

As demonstrated in tests, if we don't fix the algorithm used to calculate the
LeafHash for a given tree, there are many possible key-value pairs that can
generate a given hash (by interpretting the preimage differently).
We need this for proper security, requires client knows a priori what
tree format server uses. But not in code, rather a configuration object.

## Generated

from message ics23.ProofSpec

## Extends

- `Message`\<`ProofSpec`\>

## Constructors

### Constructor

> **new ProofSpec**(`data?`): `ProofSpec`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:549](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L549)

#### Parameters

##### data?

`PartialMessage`\<`ProofSpec`\>

#### Returns

`ProofSpec`

#### Overrides

`Message<ProofSpec>.constructor`

## Properties

### innerSpec?

> `optional` **innerSpec?**: [`InnerSpec`](/sdk/reference/classes/inner-spec)

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:531](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L531)

#### Generated

from field: ics23.InnerSpec inner_spec = 2;

***

### leafSpec?

> `optional` **leafSpec?**: [`LeafOp`](/sdk/reference/classes/leaf-op)

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:526](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L526)

any field in the ExistenceProof must be the same as in this spec.
except Prefix, which is just the first bytes of prefix (spec can be longer)

#### Generated

from field: ics23.LeafOp leaf_spec = 1;

***

### maxDepth

> **maxDepth**: `number` = `0`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:539](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L539)

max_depth (if > 0) is the maximum number of InnerOps allowed (mainly for
fixed-depth tries)

#### Generated

from field: int32 max_depth = 3;

***

### minDepth

> **minDepth**: `number` = `0`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:547](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L547)

min_depth (if > 0) is the minimum number of InnerOps allowed (mainly for
fixed-depth tries)

#### Generated

from field: int32 min_depth = 4;

***

### fields

> `readonly` `static` **fields**: `FieldList`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:556](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L556)

***

### runtime

> `readonly` `static` **runtime**: `ProtoRuntime` = `proto3`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:554](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L554)

***

### typeName

> `readonly` `static` **typeName**: `"ics23.ProofSpec"` = `'ics23.ProofSpec'`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:555](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L555)

## Methods

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:575](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L575)

#### Parameters

##### a

`ProofSpec` \| `PlainMessage`\<`ProofSpec`\> \| `undefined`

##### b

`ProofSpec` \| `PlainMessage`\<`ProofSpec`\> \| `undefined`

#### Returns

`boolean`

***

### fromBinary()

> `static` **fromBinary**(`bytes`, `options?`): `ProofSpec`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:563](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L563)

#### Parameters

##### bytes

`Uint8Array`

##### options?

`Partial`\<`BinaryReadOptions`\>

#### Returns

`ProofSpec`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `ProofSpec`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:567](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L567)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`ProofSpec`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `ProofSpec`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:571](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L571)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`ProofSpec`
