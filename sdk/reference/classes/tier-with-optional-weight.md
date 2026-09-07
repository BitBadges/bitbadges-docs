---
description: "T extends NumberType"
---

# Class: TierWithOptionalWeight\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1088](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1088)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`TierWithOptionalWeight`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iTierWithOptionalWeight`](/sdk/reference/interfaces/i-tier-with-optional-weight)\<`T`\>

## Constructors

### Constructor

> **new TierWithOptionalWeight**\<`T`\>(`data`): `TierWithOptionalWeight`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1097](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1097)

#### Parameters

##### data

[`iTierWithOptionalWeight`](/sdk/reference/interfaces/i-tier-with-optional-weight)\<`T`\>

#### Returns

`TierWithOptionalWeight`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### claimId

> **claimId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1092](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1092)

The claim ID to satisfy the tier

#### Implementation of

[`iTierWithOptionalWeight`](/sdk/reference/interfaces/i-tier-with-optional-weight).[`claimId`](/sdk/reference/interfaces/i-tier-with-optional-weight#claimid)

***

### pointsCalculationMethod?

> `optional` **pointsCalculationMethod?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1095](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1095)

The calculation method to use for this tier. This is used for calculating the tier weight.

By default, we check if the user has met the criteria for non-indexed and for indexed, we check claimed successfully at least one time.

#### Implementation of

[`iTierWithOptionalWeight`](/sdk/reference/interfaces/i-tier-with-optional-weight).[`pointsCalculationMethod`](/sdk/reference/interfaces/i-tier-with-optional-weight#pointscalculationmethod)

***

### uncheckable?

> `optional` **uncheckable?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1094](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1094)

Uncheckable? If so, we will not display success or failure for this tier.

We will just display the claim criteria and metadata.

#### Implementation of

[`iTierWithOptionalWeight`](/sdk/reference/interfaces/i-tier-with-optional-weight).[`uncheckable`](/sdk/reference/interfaces/i-tier-with-optional-weight#uncheckable)

***

### weight?

> `optional` **weight?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1093](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1093)

The weight of the tier

#### Implementation of

[`iTierWithOptionalWeight`](/sdk/reference/interfaces/i-tier-with-optional-weight).[`weight`](/sdk/reference/interfaces/i-tier-with-optional-weight#weight)

## Methods

### clone()

> **clone**(): `TierWithOptionalWeight`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`TierWithOptionalWeight`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `TierWithOptionalWeight`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1109](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1109)

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

`TierWithOptionalWeight`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1105)

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
