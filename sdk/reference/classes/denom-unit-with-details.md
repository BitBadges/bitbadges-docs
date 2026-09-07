---
description: "T extends NumberType"
---

# Class: DenomUnitWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:270](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L270)

## Extends

- [`DenomUnit`](/sdk/reference/classes/denom-unit)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iDenomUnitWithDetails`](/sdk/reference/interfaces/i-denom-unit-with-details)\<`T`\>

## Constructors

### Constructor

> **new DenomUnitWithDetails**\<`T`\>(`data`): `DenomUnitWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:273](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L273)

#### Parameters

##### data

[`iDenomUnitWithDetails`](/sdk/reference/interfaces/i-denom-unit-with-details)\<`T`\>

#### Returns

`DenomUnitWithDetails`\<`T`\>

#### Overrides

[`DenomUnit`](/sdk/reference/classes/denom-unit).[`constructor`](/sdk/reference/classes/denom-unit#constructor)

## Properties

### decimals

> **decimals**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:175](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L175)

The number of decimal places for this denomination unit.

#### Implementation of

[`iDenomUnitWithDetails`](/sdk/reference/interfaces/i-denom-unit-with-details).[`decimals`](/sdk/reference/interfaces/i-denom-unit-with-details#decimals)

#### Inherited from

[`DenomUnit`](/sdk/reference/classes/denom-unit).[`decimals`](/sdk/reference/classes/denom-unit#decimals)

***

### isDefaultDisplay

> **isDefaultDisplay**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:177](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L177)

Whether this denomination unit is the default display unit.

#### Implementation of

[`iDenomUnitWithDetails`](/sdk/reference/interfaces/i-denom-unit-with-details).[`isDefaultDisplay`](/sdk/reference/interfaces/i-denom-unit-with-details#isdefaultdisplay)

#### Inherited from

[`DenomUnit`](/sdk/reference/classes/denom-unit).[`isDefaultDisplay`](/sdk/reference/classes/denom-unit#isdefaultdisplay)

***

### metadata

> **metadata**: [`PathMetadataWithDetails`](/sdk/reference/classes/path-metadata-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:271](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L271)

Metadata object containing uri, customData, and fetched metadata.

#### Implementation of

[`iDenomUnitWithDetails`](/sdk/reference/interfaces/i-denom-unit-with-details).[`metadata`](/sdk/reference/interfaces/i-denom-unit-with-details#metadata)

#### Overrides

[`DenomUnit`](/sdk/reference/classes/denom-unit).[`metadata`](/sdk/reference/classes/denom-unit#metadata)

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:176](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L176)

The symbol for this denomination unit.

#### Implementation of

[`iDenomUnitWithDetails`](/sdk/reference/interfaces/i-denom-unit-with-details).[`symbol`](/sdk/reference/interfaces/i-denom-unit-with-details#symbol)

#### Inherited from

[`DenomUnit`](/sdk/reference/classes/denom-unit).[`symbol`](/sdk/reference/classes/denom-unit#symbol)

## Methods

### clone()

> **clone**(): [`DenomUnit`](/sdk/reference/classes/denom-unit)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

[`DenomUnit`](/sdk/reference/classes/denom-unit)

#### Inherited from

[`DenomUnit`](/sdk/reference/classes/denom-unit).[`clone`](/sdk/reference/classes/denom-unit#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `DenomUnitWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:278](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L278)

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

`DenomUnitWithDetails`\<`U`\>

#### Overrides

[`DenomUnit`](/sdk/reference/classes/denom-unit).[`convert`](/sdk/reference/classes/denom-unit#convert)

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

[`DenomUnit`](/sdk/reference/classes/denom-unit).[`equals`](/sdk/reference/classes/denom-unit#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:188](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L188)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`DenomUnit`](/sdk/reference/classes/denom-unit).[`getNumberFieldNames`](/sdk/reference/classes/denom-unit#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`DenomUnit`](/sdk/reference/classes/denom-unit).[`hasNumberFields`](/sdk/reference/classes/denom-unit#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`DenomUnit`](/sdk/reference/classes/denom-unit).[`toJson`](/sdk/reference/classes/denom-unit#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`DenomUnit`](/sdk/reference/classes/denom-unit).[`toJsonString`](/sdk/reference/classes/denom-unit#tojsonstring)

***

### fromProto()

> `static` **fromProto**\<`T`\>(`data`, `convertFunction`): `DenomUnitWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:282](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L282)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### data

`DenomUnit`

##### convertFunction

(`val`) => `T`

#### Returns

`DenomUnitWithDetails`\<`T`\>

#### Overrides

[`DenomUnit`](/sdk/reference/classes/denom-unit).[`fromProto`](/sdk/reference/classes/denom-unit#fromproto)
