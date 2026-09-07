---
description: "MerkleProof is used to represent a merkle proof. The merkle proof is used to prove that a leaf is in a merkle tree."
---

# Class: MerkleProof

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:684](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L684)

MerkleProof is used to represent a merkle proof.
The merkle proof is used to prove that a leaf is in a merkle tree.

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`MerkleProof`\>

## Implements

- `MerkleProof`

## Constructors

### Constructor

> **new MerkleProof**(`merkleProof`): `MerkleProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:689](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L689)

#### Parameters

##### merkleProof

[`iMerkleProof`](/sdk/reference/interfaces/i-merkle-proof)

#### Returns

`MerkleProof`

#### Overrides

`CustomTypeClass<MerkleProof>.constructor`

## Properties

### aunts

> **aunts**: [`MerklePathItem`](/sdk/reference/classes/merkle-path-item)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:685](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L685)

#### Implementation of

`MerkleProof.aunts`

***

### leaf

> **leaf**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:686](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L686)

#### Implementation of

`MerkleProof.leaf`

***

### leafSignature

> **leafSignature**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:687](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L687)

#### Implementation of

`MerkleProof.leafSignature`

## Methods

### clone()

> **clone**(): `MerkleProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:708](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L708)

#### Returns

`MerkleProof`

#### Implementation of

`MerkleProof.clone`

#### Overrides

`CustomTypeClass.clone`

***

### ~~convert()~~

> **convert**\<`U`\>(`_convertFunction?`, `options?`): [`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L124)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### \_convertFunction?

(`val`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

#### Deprecated

This function is unnecessary as this field has no numeric types.
Please use the `.clone()` method instead.

#### Implementation of

`MerkleProof.convert`

#### Inherited from

`CustomTypeClass.convert`

***

### equals()

> **equals**\<`U`\>(`other`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L101)

Compares this object's fields to another object's fields for equality. Equality is determined by comparing the JSON representations of the objects.

If `normalizeNumberTypes` is true, then all number types will be compared as strings (i.e. "1n" === "1" === 1). Else, they will be compared as their native types (i.e. 1n !== 1 !== "1").

#### Type Parameters

##### U

`U` *extends* [`CustomType`](/sdk/reference/interfaces/custom-type)\<`U`\>

#### Parameters

##### other

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`U`\> \| `null` \| `undefined`

##### normalizeNumberTypes?

`boolean`

#### Returns

`boolean`

#### Implementation of

`MerkleProof.equals`

#### Inherited from

`CustomTypeClass.equals`

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L111)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Implementation of

`MerkleProof.getNumberFieldNames`

#### Inherited from

`CustomTypeClass.getNumberFieldNames`

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Implementation of

`MerkleProof.hasNumberFields`

#### Inherited from

`CustomTypeClass.hasNumberFields`

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Implementation of

`MerkleProof.toJson`

#### Inherited from

`CustomTypeClass.toJson`

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Implementation of

`MerkleProof.toJsonString`

#### Inherited from

`CustomTypeClass.toJsonString`

***

### toProto()

> **toProto**(): `MerkleProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:704](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L704)

#### Returns

`MerkleProof`

#### Implementation of

`MerkleProof.toProto`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `MerkleProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:712](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L712)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MerkleProof`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `MerkleProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:716](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L716)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MerkleProof`

***

### fromProto()

> `static` **fromProto**(`item`): `MerkleProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:720](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L720)

#### Parameters

##### item

`MerkleProof`

#### Returns

`MerkleProof`

***

### required()

> `static` **required**(): `MerkleProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:696](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L696)

#### Returns

`MerkleProof`
