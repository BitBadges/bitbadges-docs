---
description: "T extends NumberType"
---

# Class: PoolInfo\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1087](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1087)

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`PoolInfo`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iPoolInfo`](/sdk/reference/interfaces/i-pool-info)\<`T`\>

## Constructors

### Constructor

> **new PoolInfo**\<`T`\>(`data`): `PoolInfo`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1100](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1100)

#### Parameters

##### data

[`iPoolInfo`](/sdk/reference/interfaces/i-pool-info)\<`T`\>

#### Returns

`PoolInfo`\<`T`\>

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1089](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1089)

#### Implementation of

[`iPoolInfo`](/sdk/reference/interfaces/i-pool-info).[`address`](/sdk/reference/interfaces/i-pool-info#address)

***

### allAssetDenoms

> **allAssetDenoms**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1090](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1090)

#### Implementation of

[`iPoolInfo`](/sdk/reference/interfaces/i-pool-info).[`allAssetDenoms`](/sdk/reference/interfaces/i-pool-info#allassetdenoms)

***

### lastLiquidityUpdate

> **lastLiquidityUpdate**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1098](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1098)

#### Implementation of

[`iPoolInfo`](/sdk/reference/interfaces/i-pool-info).[`lastLiquidityUpdate`](/sdk/reference/interfaces/i-pool-info#lastliquidityupdate)

***

### lastVolumeUpdate

> **lastVolumeUpdate**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1096](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1096)

#### Implementation of

[`iPoolInfo`](/sdk/reference/interfaces/i-pool-info).[`lastVolumeUpdate`](/sdk/reference/interfaces/i-pool-info#lastvolumeupdate)

***

### liquidity

> **liquidity**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1097](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1097)

#### Implementation of

[`iPoolInfo`](/sdk/reference/interfaces/i-pool-info).[`liquidity`](/sdk/reference/interfaces/i-pool-info#liquidity)

***

### poolId

> **poolId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1088](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1088)

#### Implementation of

[`iPoolInfo`](/sdk/reference/interfaces/i-pool-info).[`poolId`](/sdk/reference/interfaces/i-pool-info#poolid)

***

### poolParams?

> `optional` **poolParams?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1091](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1091)

#### exitFee

> **exitFee**: `string`

#### swapFee

> **swapFee**: `string`

#### Implementation of

[`iPoolInfo`](/sdk/reference/interfaces/i-pool-info).[`poolParams`](/sdk/reference/interfaces/i-pool-info#poolparams)

***

### volume

> **volume**: [`PoolInfoVolume`](/sdk/reference/classes/pool-info-volume)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1095](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1095)

#### Implementation of

[`iPoolInfo`](/sdk/reference/interfaces/i-pool-info).[`volume`](/sdk/reference/interfaces/i-pool-info#volume)

## Methods

### clone()

> **clone**(): `PoolInfo`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`PoolInfo`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`clone`](/sdk/reference/classes/custom-type-class#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`convertFunction`, `options?`): `PoolInfo`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1116)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`PoolInfo`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1112](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1112)

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
