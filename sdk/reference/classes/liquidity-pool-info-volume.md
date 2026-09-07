---
description: "Base class that implements the CustomType interface. It provides default implementations for all methods."
---

# Class: LiquidityPoolInfoVolume\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:14](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L14)

Base class that implements the CustomType interface. It provides default implementations for all methods.

IMPORTANT: You must implement the `getNumberFieldNames` method yourself for this class to work properly.
Also, you will need to implement the `convert` method yourself if you want to use it in a typed manner. This
can be done by simply calling `convertClassPropertiesAndMaintainNumberTypes(this, convertFunction, options)` and casting the result to the correct type.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`LiquidityPoolInfoVolume`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iLiquidityPoolInfoVolume`](/sdk/reference/interfaces/i-liquidity-pool-info-volume)\<`T`\>

## Constructors

### Constructor

> **new LiquidityPoolInfoVolume**\<`T`\>(`doc`): `LiquidityPoolInfoVolume`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L23)

#### Parameters

##### doc

[`iLiquidityPoolInfoVolume`](/sdk/reference/interfaces/i-liquidity-pool-info-volume)\<`T`\>

#### Returns

`LiquidityPoolInfoVolume`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### allTime

> **allTime**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L21)

#### Implementation of

[`iLiquidityPoolInfoVolume`](/sdk/reference/interfaces/i-liquidity-pool-info-volume).[`allTime`](/sdk/reference/interfaces/i-liquidity-pool-info-volume#alltime)

***

### daily

> **daily**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:18](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L18)

#### Implementation of

[`iLiquidityPoolInfoVolume`](/sdk/reference/interfaces/i-liquidity-pool-info-volume).[`daily`](/sdk/reference/interfaces/i-liquidity-pool-info-volume#daily)

***

### monthly

> **monthly**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L20)

#### Implementation of

[`iLiquidityPoolInfoVolume`](/sdk/reference/interfaces/i-liquidity-pool-info-volume).[`monthly`](/sdk/reference/interfaces/i-liquidity-pool-info-volume#monthly)

***

### weekly

> **weekly**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L19)

#### Implementation of

[`iLiquidityPoolInfoVolume`](/sdk/reference/interfaces/i-liquidity-pool-info-volume).[`weekly`](/sdk/reference/interfaces/i-liquidity-pool-info-volume#weekly)

## Methods

### clone()

> **clone**(): `LiquidityPoolInfoVolume`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`LiquidityPoolInfoVolume`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `LiquidityPoolInfoVolume`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:35](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L35)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`val`) => `U`

##### options?

###### keepOriginalObject

`boolean`

#### Returns

`LiquidityPoolInfoVolume`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:31](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L31)

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
