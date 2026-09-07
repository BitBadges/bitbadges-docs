---
description: "T extends NumberType"
---

# Class: DenomUnit\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:174](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L174)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`DenomUnit`\<`T`\>\>

## Extended by

- [`DenomUnitWithDetails`](/sdk/reference/classes/denom-unit-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iDenomUnit`](/sdk/reference/interfaces/i-denom-unit)\<`T`\>

## Constructors

### Constructor

> **new DenomUnit**\<`T`\>(`data`): `DenomUnit`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:180](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L180)

#### Parameters

##### data

[`iDenomUnit`](/sdk/reference/interfaces/i-denom-unit)\<`T`\>

#### Returns

`DenomUnit`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### decimals

> **decimals**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:175](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L175)

The number of decimal places for this denomination unit.

#### Implementation of

[`iDenomUnit`](/sdk/reference/interfaces/i-denom-unit).[`decimals`](/sdk/reference/interfaces/i-denom-unit#decimals)

***

### isDefaultDisplay

> **isDefaultDisplay**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:177](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L177)

Whether this denomination unit is the default display unit.

#### Implementation of

[`iDenomUnit`](/sdk/reference/interfaces/i-denom-unit).[`isDefaultDisplay`](/sdk/reference/interfaces/i-denom-unit#isdefaultdisplay)

***

### metadata

> **metadata**: [`PathMetadata`](/sdk/reference/classes/path-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:178](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L178)

The metadata for this denomination unit.

#### Implementation of

[`iDenomUnit`](/sdk/reference/interfaces/i-denom-unit).[`metadata`](/sdk/reference/interfaces/i-denom-unit#metadata)

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:176](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L176)

The symbol for this denomination unit.

#### Implementation of

[`iDenomUnit`](/sdk/reference/interfaces/i-denom-unit).[`symbol`](/sdk/reference/interfaces/i-denom-unit#symbol)

## Methods

### clone()

> **clone**(): `DenomUnit`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`DenomUnit`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `DenomUnit`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:192](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L192)

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

`DenomUnit`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:188](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L188)

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

> `static` **fromProto**\<`T`\>(`data`, `convertFunction`): `DenomUnit`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:196](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L196)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### data

`DenomUnit`

##### convertFunction

(`val`) => `T`

#### Returns

`DenomUnit`\<`T`\>
