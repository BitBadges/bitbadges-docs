---
description: "PrecalculationOptions defines the options for precalculating the balances."
---

# Class: PrecalculationOptions\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:395](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L395)

PrecalculationOptions defines the options for precalculating the balances.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`PrecalculationOptions`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iPrecalculationOptions`](/sdk/reference/interfaces/i-precalculation-options)\<`T`\>

## Constructors

### Constructor

> **new PrecalculationOptions**\<`T`\>(`data`): `PrecalculationOptions`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:400](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L400)

#### Parameters

##### data

[`iPrecalculationOptions`](/sdk/reference/interfaces/i-precalculation-options)\<`T`\>

#### Returns

`PrecalculationOptions`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### overrideTimestamp?

> `optional` **overrideTimestamp?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:396](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L396)

The timestamp to use for the transfer.

#### Implementation of

[`iPrecalculationOptions`](/sdk/reference/interfaces/i-precalculation-options).[`overrideTimestamp`](/sdk/reference/interfaces/i-precalculation-options#overridetimestamp)

***

### scalingMultiplier?

> `optional` **scalingMultiplier?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:398](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L398)

When > 0 and allowAmountScaling is true on the approval, all precalculated balance amounts are multiplied by this value. Must be \<= maxScalingMultiplier. 0 or absent means no scaling (returns 1x base).

#### Implementation of

[`iPrecalculationOptions`](/sdk/reference/interfaces/i-precalculation-options).[`scalingMultiplier`](/sdk/reference/interfaces/i-precalculation-options#scalingmultiplier)

***

### tokenIdsOverride?

> `optional` **tokenIdsOverride?**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:397](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L397)

The token IDs to use for the transfer.

#### Implementation of

[`iPrecalculationOptions`](/sdk/reference/interfaces/i-precalculation-options).[`tokenIdsOverride`](/sdk/reference/interfaces/i-precalculation-options#tokenidsoverride)

## Methods

### clone()

> **clone**(): `PrecalculationOptions`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`PrecalculationOptions`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `PrecalculationOptions`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:411](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L411)

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

`PrecalculationOptions`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:407](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L407)

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

### fromProto()

> `static` **fromProto**\<`U`\>(`proto`, `convertFunction`): `PrecalculationOptions`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:415](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L415)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### proto

`PrecalculationOptions`

##### convertFunction

(`item`) => `U`

#### Returns

`PrecalculationOptions`\<`U`\>
