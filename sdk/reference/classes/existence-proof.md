---
description: "ExistenceProof takes a key and a value and a set of steps to perform on it. The result of peforming all these steps will provide a \"root hash\", which can be…"
---

# Class: ExistenceProof

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:170](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L170)

*
ExistenceProof takes a key and a value and a set of steps to perform on it.
The result of peforming all these steps will provide a "root hash", which can
be compared to the value in a header.

Since it is computationally infeasible to produce a hash collission for any of
the used cryptographic hash functions, if someone can provide a series of
operations to transform a given key and value into a root hash that matches some
trusted root, these key and values must be in the referenced merkle tree.

The only possible issue is maliablity in LeafOp, such as providing extra prefix
data, which should be controlled by a spec. Eg. with lengthOp as NONE, prefix =
FOO, key = BAR, value = CHOICE and prefix = F, key = OOBAR, value = CHOICE would
produce the same value.

With LengthOp this is tricker but not impossible. Which is why the
"leafPrefixEqual" field in the ProofSpec is valuable to prevent this mutability.
And why all trees should length-prefix the data before hashing it.

## Generated

from message ics23.ExistenceProof

## Extends

- `Message`\<`ExistenceProof`\>

## Constructors

### Constructor

> **new ExistenceProof**(`data?`): `ExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:191](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L191)

#### Parameters

##### data?

`PartialMessage`\<`ExistenceProof`\>

#### Returns

`ExistenceProof`

#### Overrides

`Message<ExistenceProof>.constructor`

## Properties

### key

> **key**: `Uint8Array`\<`ArrayBuffer`\>

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:174](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L174)

#### Generated

from field: bytes key = 1;

***

### leaf?

> `optional` **leaf?**: [`LeafOp`](/sdk/reference/classes/leaf-op)

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:184](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L184)

#### Generated

from field: ics23.LeafOp leaf = 3;

***

### path

> **path**: [`InnerOp`](/sdk/reference/classes/inner-op)[] = `[]`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:189](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L189)

#### Generated

from field: repeated ics23.InnerOp path = 4;

***

### value

> **value**: `Uint8Array`\<`ArrayBuffer`\>

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:179](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L179)

#### Generated

from field: bytes value = 2;

***

### fields

> `readonly` `static` **fields**: `FieldList`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:198](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L198)

***

### runtime

> `readonly` `static` **runtime**: `ProtoRuntime` = `proto3`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:196](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L196)

***

### typeName

> `readonly` `static` **typeName**: `"ics23.ExistenceProof"` = `'ics23.ExistenceProof'`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:197](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L197)

## Methods

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:217](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L217)

#### Parameters

##### a

`ExistenceProof` \| `PlainMessage`\<`ExistenceProof`\> \| `undefined`

##### b

`ExistenceProof` \| `PlainMessage`\<`ExistenceProof`\> \| `undefined`

#### Returns

`boolean`

***

### fromBinary()

> `static` **fromBinary**(`bytes`, `options?`): `ExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:205](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L205)

#### Parameters

##### bytes

`Uint8Array`

##### options?

`Partial`\<`BinaryReadOptions`\>

#### Returns

`ExistenceProof`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `ExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:209](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L209)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`ExistenceProof`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `ExistenceProof`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:213](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L213)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`ExistenceProof`
