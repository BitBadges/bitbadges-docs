---
description: "Type for Cosmos SDK Coin information with support for bigint amounts (e.g. { amount: 1000000, denom: 'ubadge' })."
---

# Class: CosmosCoin\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/coin.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin.ts#L19)

Type for Cosmos SDK Coin information with support for bigint amounts (e.g. { amount: 1000000, denom: 'ubadge' }).

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`CosmosCoin`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>

## Constructors

### Constructor

> **new CosmosCoin**\<`T`\>(`data`): `CosmosCoin`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/coin.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin.ts#L23)

#### Parameters

##### data

[`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>

#### Returns

`CosmosCoin`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### amount

> **amount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin.ts#L20)

The amount of the coin.

#### Implementation of

[`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin).[`amount`](/sdk/reference/interfaces/i-cosmos-coin#amount)

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin.ts#L21)

The denomination of the coin (e.g. "ubadge").

#### Implementation of

[`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin).[`denom`](/sdk/reference/interfaces/i-cosmos-coin#denom)

## Methods

### clone()

> **clone**(): `CosmosCoin`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`CosmosCoin`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CosmosCoin`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/coin.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin.ts#L33)

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

`CosmosCoin`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/coin.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin.ts#L29)

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

> `static` **fromProto**\<`T`\>(`data`, `convertFunction`): `CosmosCoin`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/coin.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin.ts#L37)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### data

###### amount

`string`

###### denom

`string`

##### convertFunction

(`val`) => `T`

#### Returns

`CosmosCoin`\<`T`\>
