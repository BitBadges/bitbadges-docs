---
description: "T extends NumberType"
---

# Class: ChallengeDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1972](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1972)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`ChallengeDetails`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iChallengeDetails`](/sdk/reference/interfaces/i-challenge-details)\<`T`\>

## Constructors

### Constructor

> **new ChallengeDetails**\<`T`\>(`data`): `ChallengeDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1981](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1981)

#### Parameters

##### data

[`iChallengeDetails`](/sdk/reference/interfaces/i-challenge-details)\<`T`\>

#### Returns

`ChallengeDetails`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### isHashed

> **isHashed**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1976](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1976)

True if the leaves are hashed. Hash(preimage[i]) = leaves[i]

#### Implementation of

[`iChallengeDetails`](/sdk/reference/interfaces/i-challenge-details).[`isHashed`](/sdk/reference/interfaces/i-challenge-details#ishashed)

***

### leaves

> **leaves**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1975](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1975)

The leaves of the Merkle tree. Leaves should be considered public. Use preimages for the private codes + isHashed. For whitelist trees, these can be the plaintext BitBadges addresses.

#### Implementation of

[`iChallengeDetails`](/sdk/reference/interfaces/i-challenge-details).[`leaves`](/sdk/reference/interfaces/i-challenge-details#leaves)

***

### numLeaves?

> `optional` **numLeaves?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1974](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1974)

The number of leaves in the Merkle tree. This takes priority over leaves.length if defined (used for buffer time between leaf generation and leaf length select)

#### Implementation of

[`iChallengeDetails`](/sdk/reference/interfaces/i-challenge-details).[`numLeaves`](/sdk/reference/interfaces/i-challenge-details#numleaves)

***

### preimages?

> `optional` **preimages?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1977](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1977)

The preimages of the leaves (only used if isHashed = true). Oftentimes, this is used for private codes so should not be present when user-facing.

#### Implementation of

[`iChallengeDetails`](/sdk/reference/interfaces/i-challenge-details).[`preimages`](/sdk/reference/interfaces/i-challenge-details#preimages)

***

### seedCode?

> `optional` **seedCode?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1978](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1978)

Seed code for generating the leaves

#### Implementation of

[`iChallengeDetails`](/sdk/reference/interfaces/i-challenge-details).[`seedCode`](/sdk/reference/interfaces/i-challenge-details#seedcode)

***

### tree?

> `optional` **tree?**: `MerkleTree`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1979](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1979)

The Merkle tree

#### Implementation of

[`iChallengeDetails`](/sdk/reference/interfaces/i-challenge-details).[`tree`](/sdk/reference/interfaces/i-challenge-details#tree)

***

### treeOptions?

> `optional` **treeOptions?**: `Options`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1973](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1973)

The Merkle tree options for how to build it

#### Implementation of

[`iChallengeDetails`](/sdk/reference/interfaces/i-challenge-details).[`treeOptions`](/sdk/reference/interfaces/i-challenge-details#treeoptions)

## Methods

### clone()

> **clone**(): `ChallengeDetails`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`ChallengeDetails`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `ChallengeDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1995](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1995)

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

`ChallengeDetails`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1991](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1991)

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
