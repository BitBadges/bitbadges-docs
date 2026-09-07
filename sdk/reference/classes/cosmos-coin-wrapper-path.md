---
description: "T extends NumberType"
---

# Class: CosmosCoinWrapperPath\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:905](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L905)

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`CosmosCoinWrapperPath`\<`T`\>\>

## Extended by

- [`CosmosCoinWrapperPathWithDetails`](/sdk/reference/classes/cosmos-coin-wrapper-path-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCosmosCoinWrapperPath`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path)\<`T`\>

## Constructors

### Constructor

> **new CosmosCoinWrapperPath**\<`T`\>(`data`): `CosmosCoinWrapperPath`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:914](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L914)

#### Parameters

##### data

[`iCosmosCoinWrapperPath`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path)\<`T`\>

#### Returns

`CosmosCoinWrapperPath`\<`T`\>

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:906](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L906)

#### Implementation of

[`iCosmosCoinWrapperPath`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path).[`address`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path#address)

***

### allowOverrideWithAnyValidToken

> **allowOverrideWithAnyValidToken**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:911](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L911)

#### Implementation of

[`iCosmosCoinWrapperPath`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path).[`allowOverrideWithAnyValidToken`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path#allowoverridewithanyvalidtoken)

***

### conversion

> **conversion**: [`ConversionWithoutDenom`](/sdk/reference/classes/conversion-without-denom)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:908](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L908)

#### Implementation of

[`iCosmosCoinWrapperPath`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path).[`conversion`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path#conversion)

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:907](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L907)

#### Implementation of

[`iCosmosCoinWrapperPath`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path).[`denom`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path#denom)

***

### denomUnits

> **denomUnits**: [`DenomUnit`](/sdk/reference/classes/denom-unit)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:910](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L910)

#### Implementation of

[`iCosmosCoinWrapperPath`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path).[`denomUnits`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path#denomunits)

***

### metadata

> **metadata**: [`PathMetadata`](/sdk/reference/classes/path-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:912](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L912)

The metadata for this wrapper path.

#### Implementation of

[`iCosmosCoinWrapperPath`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path).[`metadata`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path#metadata)

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:909](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L909)

#### Implementation of

[`iCosmosCoinWrapperPath`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path).[`symbol`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path#symbol)

## Methods

### clone()

> **clone**(): `CosmosCoinWrapperPath`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`CosmosCoinWrapperPath`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`clone`](/sdk/reference/classes/custom-type-class#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`convertFunction`, `options?`): `CosmosCoinWrapperPath`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:929](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L929)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`CosmosCoinWrapperPath`\<`U`\>

#### Deprecated

This function is unnecessary as this field has no numeric types.
Please use the `.clone()` method instead.

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`convert`](/sdk/reference/classes/custom-type-class#convert)

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

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`equals`](/sdk/reference/classes/custom-type-class#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:925](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L925)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`getNumberFieldNames`](/sdk/reference/classes/custom-type-class#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`hasNumberFields`](/sdk/reference/classes/custom-type-class#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`toJson`](/sdk/reference/classes/custom-type-class#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`toJsonString`](/sdk/reference/classes/custom-type-class#tojsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): `CosmosCoinWrapperPath`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:933](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L933)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### protoMsg

`CosmosCoinWrapperPath`

##### convertFunction

(`item`) => `U`

#### Returns

`CosmosCoinWrapperPath`\<`U`\>
