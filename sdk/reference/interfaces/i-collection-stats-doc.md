---
description: "T extends NumberType"
---

# Interface: iCollectionStatsDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:262](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L262)

## Extends

- [`iBaseStats`](/sdk/reference/interfaces/i-base-stats)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L13)

A unique stringified document ID

#### Inherited from

[`iBaseStats`](/sdk/reference/interfaces/i-base-stats).[`_docId`](/sdk/reference/interfaces/i-base-stats#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L16)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`iBaseStats`](/sdk/reference/interfaces/i-base-stats).[`_id`](/sdk/reference/interfaces/i-base-stats#_id)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:264](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L264)

The collection ID

***

### dailyVolume

> **dailyVolume**: [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:248](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L248)

The daily volume of the collection

#### Inherited from

[`iBaseStats`](/sdk/reference/interfaces/i-base-stats).[`dailyVolume`](/sdk/reference/interfaces/i-base-stats#dailyvolume)

***

### floorPriceHistory?

> `optional` **floorPriceHistory?**: [`iFloorPriceHistory`](/sdk/reference/interfaces/i-floor-price-history)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:270](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L270)

Floor price history

***

### floorPrices?

> `optional` **floorPrices?**: [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:266](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L266)

Floor price of the collection

***

### lastUpdatedAt

> **lastUpdatedAt**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:256](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L256)

Last set timestamp

#### Inherited from

[`iBaseStats`](/sdk/reference/interfaces/i-base-stats).[`lastUpdatedAt`](/sdk/reference/interfaces/i-base-stats#lastupdatedat)

***

### monthlyVolume

> **monthlyVolume**: [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:252](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L252)

The monthly volume of the collection

#### Inherited from

[`iBaseStats`](/sdk/reference/interfaces/i-base-stats).[`monthlyVolume`](/sdk/reference/interfaces/i-base-stats#monthlyvolume)

***

### overallVolume

> **overallVolume**: [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:246](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L246)

The overall volume of the collection

#### Inherited from

[`iBaseStats`](/sdk/reference/interfaces/i-base-stats).[`overallVolume`](/sdk/reference/interfaces/i-base-stats#overallvolume)

***

### payoutRewards?

> `optional` **payoutRewards?**: [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:272](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L272)

The payout reward

***

### uniqueOwners

> **uniqueOwners**: [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:268](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L268)

Number of unique owners by time

***

### weeklyVolume

> **weeklyVolume**: [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:250](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L250)

The weekly volume of the collection

#### Inherited from

[`iBaseStats`](/sdk/reference/interfaces/i-base-stats).[`weeklyVolume`](/sdk/reference/interfaces/i-base-stats#weeklyvolume)

***

### yearlyVolume

> **yearlyVolume**: [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:254](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L254)

The yearly volume of the collection

#### Inherited from

[`iBaseStats`](/sdk/reference/interfaces/i-base-stats).[`yearlyVolume`](/sdk/reference/interfaces/i-base-stats#yearlyvolume)
