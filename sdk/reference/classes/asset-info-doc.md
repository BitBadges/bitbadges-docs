---
description: "T extends NumberType"
---

# Class: AssetInfoDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1125](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1125)

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`AssetInfoDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc)\<`T`\>

## Constructors

### Constructor

> **new AssetInfoDoc**\<`T`\>(`data`): `AssetInfoDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1146)

#### Parameters

##### data

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc)\<`T`\>

#### Returns

`AssetInfoDoc`\<`T`\>

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1126](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1126)

A unique stringified document ID

#### Implementation of

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc).[`_docId`](/sdk/reference/interfaces/i-asset-info-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1127](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1127)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc).[`_id`](/sdk/reference/interfaces/i-asset-info-doc#_id)

***

### asset

> **asset**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1128](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1128)

#### Implementation of

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc).[`asset`](/sdk/reference/interfaces/i-asset-info-doc#asset)

***

### calculationType?

> `optional` **calculationType?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1144](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1144)

Calculation type for the asset

#### Implementation of

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc).[`calculationType`](/sdk/reference/interfaces/i-asset-info-doc#calculationtype)

***

### lastUpdated

> **lastUpdated**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1131](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1131)

#### Implementation of

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc).[`lastUpdated`](/sdk/reference/interfaces/i-asset-info-doc#lastupdated)

***

### percentageChange24h

> **percentageChange24h**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1134](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1134)

#### Implementation of

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc).[`percentageChange24h`](/sdk/reference/interfaces/i-asset-info-doc#percentagechange24h)

***

### percentageChange7d

> **percentageChange7d**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1135](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1135)

#### Implementation of

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc).[`percentageChange7d`](/sdk/reference/interfaces/i-asset-info-doc#percentagechange7d)

***

### price

> **price**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1130](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1130)

#### Implementation of

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc).[`price`](/sdk/reference/interfaces/i-asset-info-doc#price)

***

### recentPriceTrend?

> `optional` **recentPriceTrend?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1137](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1137)

Recent price trend data points for charting (last 7 days)

#### pricePoints

> **pricePoints**: `object`[]

#### Implementation of

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc).[`recentPriceTrend`](/sdk/reference/interfaces/i-asset-info-doc#recentpricetrend)

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1129](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1129)

#### Implementation of

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc).[`symbol`](/sdk/reference/interfaces/i-asset-info-doc#symbol)

***

### totalLiquidity

> **totalLiquidity**: [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1132](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1132)

#### Implementation of

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc).[`totalLiquidity`](/sdk/reference/interfaces/i-asset-info-doc#totalliquidity)

***

### verified?

> `optional` **verified?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1143)

Whether this asset is verified

#### Implementation of

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc).[`verified`](/sdk/reference/interfaces/i-asset-info-doc#verified)

***

### volume24h

> **volume24h**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1136](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1136)

#### Implementation of

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc).[`volume24h`](/sdk/reference/interfaces/i-asset-info-doc#volume24h)

***

### volume7d

> **volume7d**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1133](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1133)

#### Implementation of

[`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc).[`volume7d`](/sdk/reference/interfaces/i-asset-info-doc#volume7d)

## Methods

### clone()

> **clone**(): `AssetInfoDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`AssetInfoDoc`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`clone`](/sdk/reference/classes/custom-type-class#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`convertFunction`, `options?`): `AssetInfoDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1168](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1168)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`AssetInfoDoc`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1164](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1164)

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
