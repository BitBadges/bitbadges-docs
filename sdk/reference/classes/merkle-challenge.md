---
description: "MerkleChallenge is used to represent a merkle challenge for an approval."
---

# Class: MerkleChallenge\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:547](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L547)

MerkleChallenge is used to represent a merkle challenge for an approval.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`MerkleChallenge`\<`T`\>\>

## Extended by

- [`MerkleChallengeWithDetails`](/sdk/reference/classes/merkle-challenge-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge)\<`T`\>

## Constructors

### Constructor

> **new MerkleChallenge**\<`T`\>(`merkleChallenge`): `MerkleChallenge`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:557](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L557)

#### Parameters

##### merkleChallenge

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge)\<`T`\>

#### Returns

`MerkleChallenge`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### challengeTrackerId

> **challengeTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:554](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L554)

Tracker ID details for the merkle challenge.

#### Implementation of

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`challengeTrackerId`](/sdk/reference/interfaces/i-merkle-challenge#challengetrackerid)

***

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:553](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L553)

Arbitrary custom data that can be stored on-chain.

#### Implementation of

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`customData`](/sdk/reference/interfaces/i-merkle-challenge#customdata)

***

### expectedProofLength

> **expectedProofLength**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:549](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L549)

The expected proof length of the merkle proof.

#### Implementation of

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`expectedProofLength`](/sdk/reference/interfaces/i-merkle-challenge#expectedprooflength)

***

### leafSigner

> **leafSigner**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:555](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L555)

The signer of the leaf. Currently only supports ETH addresses.

#### Implementation of

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`leafSigner`](/sdk/reference/interfaces/i-merkle-challenge#leafsigner)

***

### maxUsesPerLeaf

> **maxUsesPerLeaf**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:551](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L551)

Whether or not to enforce max uses per leaf. Used to prevent replay attacks.

#### Implementation of

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`maxUsesPerLeaf`](/sdk/reference/interfaces/i-merkle-challenge#maxusesperleaf)

***

### root

> **root**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:548](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L548)

The root of the merkle tree.

#### Implementation of

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`root`](/sdk/reference/interfaces/i-merkle-challenge#root)

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:552](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L552)

The URI where to fetch the merkle challenge metadata from.

#### Implementation of

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`uri`](/sdk/reference/interfaces/i-merkle-challenge#uri)

***

### useCreatorAddressAsLeaf

> **useCreatorAddressAsLeaf**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:550](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L550)

Whether or not to override any leaf value and use the creator address as the leaf. Used for whitelist trees.

#### Implementation of

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`useCreatorAddressAsLeaf`](/sdk/reference/interfaces/i-merkle-challenge#usecreatoraddressasleaf)

## Methods

### clone()

> **clone**(): `MerkleChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`MerkleChallenge`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `MerkleChallenge`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:586](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L586)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`MerkleChallenge`\<`U`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`convert`](/sdk/reference/classes/base-number-type-class#convert)

***

### equals()

> **equals**\<`U`\>(`other`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L147)

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

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`equals`](/sdk/reference/classes/base-number-type-class#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:582](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L582)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`getNumberFieldNames`](/sdk/reference/classes/base-number-type-class#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`hasNumberFields`](/sdk/reference/classes/base-number-type-class#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`toJson`](/sdk/reference/classes/base-number-type-class#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`toJsonString`](/sdk/reference/classes/base-number-type-class#tojsonstring)

***

### toProto()

> **toProto**(): `MerkleChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:601](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L601)

#### Returns

`MerkleChallenge`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `MerkleChallenge`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:605](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L605)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### jsonValue

`JsonValue`

##### convertFunction

(`item`) => `U`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MerkleChallenge`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `MerkleChallenge`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:613](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L613)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### jsonString

`string`

##### convertFunction

(`item`) => `U`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MerkleChallenge`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `MerkleChallenge`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:621](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L621)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`MerkleChallenge`

##### convertFunction

(`item`) => `U`

#### Returns

`MerkleChallenge`\<`U`\>

***

### required()

> `static` **required**(): `MerkleChallenge`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:569](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L569)

#### Returns

`MerkleChallenge`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>
