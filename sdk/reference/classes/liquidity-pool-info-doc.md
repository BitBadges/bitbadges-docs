---
description: "T extends NumberType"
---

# Class: LiquidityPoolInfoDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:58](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L58)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`LiquidityPoolInfoDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc)\<`T`\>

## Constructors

### Constructor

> **new LiquidityPoolInfoDoc**\<`T`\>(`doc`): `LiquidityPoolInfoDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L77)

#### Parameters

##### doc

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc)\<`T`\>

#### Returns

`LiquidityPoolInfoDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L60)

A unique stringified document ID

#### Implementation of

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc).[`_docId`](/sdk/reference/interfaces/i-liquidity-pool-info-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:59](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L59)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc).[`_id`](/sdk/reference/interfaces/i-liquidity-pool-info-doc#_id)

***

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:63](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L63)

#### Implementation of

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc).[`address`](/sdk/reference/interfaces/i-liquidity-pool-info-doc#address)

***

### allAssetDenoms

> **allAssetDenoms**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L64)

#### Implementation of

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc).[`allAssetDenoms`](/sdk/reference/interfaces/i-liquidity-pool-info-doc#allassetdenoms)

***

### asset1

> **asset1**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:65](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L65)

#### Implementation of

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc).[`asset1`](/sdk/reference/interfaces/i-liquidity-pool-info-doc#asset1)

***

### asset2

> **asset2**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:66](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L66)

#### Implementation of

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc).[`asset2`](/sdk/reference/interfaces/i-liquidity-pool-info-doc#asset2)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L62)

#### Implementation of

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc).[`collectionId`](/sdk/reference/interfaces/i-liquidity-pool-info-doc#collectionid)

***

### lastLiquidityUpdate

> **lastLiquidityUpdate**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L74)

#### Implementation of

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc).[`lastLiquidityUpdate`](/sdk/reference/interfaces/i-liquidity-pool-info-doc#lastliquidityupdate)

***

### lastVolumeUpdate

> **lastVolumeUpdate**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:72](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L72)

#### Implementation of

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc).[`lastVolumeUpdate`](/sdk/reference/interfaces/i-liquidity-pool-info-doc#lastvolumeupdate)

***

### liquidity

> **liquidity**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:73](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L73)

#### Implementation of

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc).[`liquidity`](/sdk/reference/interfaces/i-liquidity-pool-info-doc#liquidity)

***

### poolId

> **poolId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:61](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L61)

#### Implementation of

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc).[`poolId`](/sdk/reference/interfaces/i-liquidity-pool-info-doc#poolid)

***

### poolParams?

> `optional` **poolParams?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:67](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L67)

#### exitFee

> **exitFee**: `string`

#### swapFee

> **swapFee**: `string`

#### Implementation of

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc).[`poolParams`](/sdk/reference/interfaces/i-liquidity-pool-info-doc#poolparams)

***

### totalShares

> **totalShares**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:75](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L75)

#### Implementation of

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc).[`totalShares`](/sdk/reference/interfaces/i-liquidity-pool-info-doc#totalshares)

***

### volume

> **volume**: [`LiquidityPoolInfoVolume`](/sdk/reference/classes/liquidity-pool-info-volume)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:71](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L71)

#### Implementation of

[`iLiquidityPoolInfoDoc`](/sdk/reference/interfaces/i-liquidity-pool-info-doc).[`volume`](/sdk/reference/interfaces/i-liquidity-pool-info-doc#volume)

## Methods

### clone()

> **clone**(): `LiquidityPoolInfoDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`LiquidityPoolInfoDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `LiquidityPoolInfoDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:99](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L99)

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

`LiquidityPoolInfoDoc`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:95](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L95)

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
