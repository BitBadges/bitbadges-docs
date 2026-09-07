---
description: "T extends NumberType"
---

# Class: CosmosCoinBackedPath\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1025](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1025)

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`CosmosCoinBackedPath`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCosmosCoinBackedPath`](/sdk/reference/interfaces/i-cosmos-coin-backed-path)\<`T`\>

## Constructors

### Constructor

> **new CosmosCoinBackedPath**\<`T`\>(`data`): `CosmosCoinBackedPath`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1029](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1029)

#### Parameters

##### data

[`iCosmosCoinBackedPath`](/sdk/reference/interfaces/i-cosmos-coin-backed-path)\<`T`\>

#### Returns

`CosmosCoinBackedPath`\<`T`\>

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1026](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1026)

The address for this IBC backed path.

#### Implementation of

[`iCosmosCoinBackedPath`](/sdk/reference/interfaces/i-cosmos-coin-backed-path).[`address`](/sdk/reference/interfaces/i-cosmos-coin-backed-path#address)

***

### conversion

> **conversion**: [`Conversion`](/sdk/reference/classes/conversion)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1027](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1027)

The conversion between IBC cosmos coin and badge balances.

#### Implementation of

[`iCosmosCoinBackedPath`](/sdk/reference/interfaces/i-cosmos-coin-backed-path).[`conversion`](/sdk/reference/interfaces/i-cosmos-coin-backed-path#conversion)

## Methods

### clone()

> **clone**(): `CosmosCoinBackedPath`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`CosmosCoinBackedPath`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`clone`](/sdk/reference/classes/custom-type-class#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`convertFunction`, `options?`): `CosmosCoinBackedPath`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1039](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1039)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`CosmosCoinBackedPath`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1035](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1035)

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

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): `CosmosCoinBackedPath`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1043](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1043)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### protoMsg

`CosmosCoinBackedPath`

##### convertFunction

(`item`) => `U`

#### Returns

`CosmosCoinBackedPath`\<`U`\>
