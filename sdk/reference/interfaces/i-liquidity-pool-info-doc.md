---
description: "T extends NumberType"
---

# Interface: iLiquidityPoolInfoDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L40)

## Extends

- [`Doc`](/sdk/reference/interfaces/doc)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L13)

A unique stringified document ID

#### Inherited from

[`Doc`](/sdk/reference/interfaces/doc).[`_docId`](/sdk/reference/interfaces/doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L16)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`Doc`](/sdk/reference/interfaces/doc).[`_id`](/sdk/reference/interfaces/doc#_id)

***

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:43](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L43)

***

### allAssetDenoms

> **allAssetDenoms**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L44)

***

### asset1

> **asset1**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L45)

***

### asset2

> **asset2**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L46)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L42)

***

### lastLiquidityUpdate

> **lastLiquidityUpdate**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L54)

***

### lastVolumeUpdate

> **lastVolumeUpdate**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L52)

***

### liquidity

> **liquidity**: [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L53)

***

### poolId

> **poolId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L41)

***

### poolParams?

> `optional` **poolParams?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L47)

#### exitFee

> **exitFee**: `string`

#### swapFee

> **swapFee**: `string`

***

### totalShares

> **totalShares**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:55](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L55)

***

### volume

> **volume**: [`iLiquidityPoolInfoVolume`](/sdk/reference/interfaces/i-liquidity-pool-info-volume)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:51](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L51)
