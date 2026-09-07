---
description: "T extends NumberType"
---

# Class: MerkleChallengeWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2082](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2082)

## Extends

- [`MerkleChallenge`](/sdk/reference/classes/merkle-challenge)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details)\<`T`\>

## Constructors

### Constructor

> **new MerkleChallengeWithDetails**\<`T`\>(`data`): `MerkleChallengeWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2085](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2085)

#### Parameters

##### data

[`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details)\<`T`\>

#### Returns

`MerkleChallengeWithDetails`\<`T`\>

#### Overrides

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`constructor`](/sdk/reference/classes/merkle-challenge#constructor)

## Properties

### challengeInfoDetails

> **challengeInfoDetails**: [`ChallengeInfoDetails`](/sdk/reference/classes/challenge-info-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2083](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2083)

#### Implementation of

[`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details).[`challengeInfoDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details#challengeinfodetails)

***

### challengeTrackerId

> **challengeTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:554](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L554)

Tracker ID details for the merkle challenge.

#### Implementation of

[`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details).[`challengeTrackerId`](/sdk/reference/interfaces/i-merkle-challenge-with-details#challengetrackerid)

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`challengeTrackerId`](/sdk/reference/classes/merkle-challenge#challengetrackerid)

***

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:553](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L553)

Arbitrary custom data that can be stored on-chain.

#### Implementation of

[`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details).[`customData`](/sdk/reference/interfaces/i-merkle-challenge-with-details#customdata)

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`customData`](/sdk/reference/classes/merkle-challenge#customdata)

***

### expectedProofLength

> **expectedProofLength**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:549](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L549)

The expected proof length of the merkle proof.

#### Implementation of

[`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details).[`expectedProofLength`](/sdk/reference/interfaces/i-merkle-challenge-with-details#expectedprooflength)

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`expectedProofLength`](/sdk/reference/classes/merkle-challenge#expectedprooflength)

***

### leafSigner

> **leafSigner**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:555](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L555)

The signer of the leaf. Currently only supports ETH addresses.

#### Implementation of

[`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details).[`leafSigner`](/sdk/reference/interfaces/i-merkle-challenge-with-details#leafsigner)

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`leafSigner`](/sdk/reference/classes/merkle-challenge#leafsigner)

***

### maxUsesPerLeaf

> **maxUsesPerLeaf**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:551](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L551)

Whether or not to enforce max uses per leaf. Used to prevent replay attacks.

#### Implementation of

[`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details).[`maxUsesPerLeaf`](/sdk/reference/interfaces/i-merkle-challenge-with-details#maxusesperleaf)

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`maxUsesPerLeaf`](/sdk/reference/classes/merkle-challenge#maxusesperleaf)

***

### root

> **root**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:548](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L548)

The root of the merkle tree.

#### Implementation of

[`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details).[`root`](/sdk/reference/interfaces/i-merkle-challenge-with-details#root)

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`root`](/sdk/reference/classes/merkle-challenge#root)

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:552](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L552)

The URI where to fetch the merkle challenge metadata from.

#### Implementation of

[`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details).[`uri`](/sdk/reference/interfaces/i-merkle-challenge-with-details#uri)

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`uri`](/sdk/reference/classes/merkle-challenge#uri)

***

### useCreatorAddressAsLeaf

> **useCreatorAddressAsLeaf**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:550](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L550)

Whether or not to override any leaf value and use the creator address as the leaf. Used for whitelist trees.

#### Implementation of

[`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details).[`useCreatorAddressAsLeaf`](/sdk/reference/interfaces/i-merkle-challenge-with-details#usecreatoraddressasleaf)

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`useCreatorAddressAsLeaf`](/sdk/reference/classes/merkle-challenge#usecreatoraddressasleaf)

## Methods

### clone()

> **clone**(): `MerkleChallengeWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2098](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2098)

Deep copies the object and returns a new instance.

#### Returns

`MerkleChallengeWithDetails`\<`T`\>

#### Overrides

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`clone`](/sdk/reference/classes/merkle-challenge#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `MerkleChallengeWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2094](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2094)

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

`MerkleChallengeWithDetails`\<`U`\>

#### Overrides

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`convert`](/sdk/reference/classes/merkle-challenge#convert)

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

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`equals`](/sdk/reference/classes/merkle-challenge#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2090](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2090)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Overrides

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`getNumberFieldNames`](/sdk/reference/classes/merkle-challenge#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`hasNumberFields`](/sdk/reference/classes/merkle-challenge#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`toJson`](/sdk/reference/classes/merkle-challenge#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`toJsonString`](/sdk/reference/classes/merkle-challenge#tojsonstring)

***

### toProto()

> **toProto**(): `MerkleChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:601](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L601)

#### Returns

`MerkleChallenge`

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`toProto`](/sdk/reference/classes/merkle-challenge#toproto)

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): [`MerkleChallenge`](/sdk/reference/classes/merkle-challenge)\<`U`\>

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

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge)\<`U`\>

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`fromJson`](/sdk/reference/classes/merkle-challenge#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): [`MerkleChallenge`](/sdk/reference/classes/merkle-challenge)\<`U`\>

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

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge)\<`U`\>

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`fromJsonString`](/sdk/reference/classes/merkle-challenge#fromjsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): [`MerkleChallenge`](/sdk/reference/classes/merkle-challenge)\<`U`\>

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

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge)\<`U`\>

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`fromProto`](/sdk/reference/classes/merkle-challenge#fromproto)

***

### required()

> `static` **required**(): [`MerkleChallenge`](/sdk/reference/classes/merkle-challenge)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:569](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L569)

#### Returns

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

#### Inherited from

[`MerkleChallenge`](/sdk/reference/classes/merkle-challenge).[`required`](/sdk/reference/classes/merkle-challenge#required)
