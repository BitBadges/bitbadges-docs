---
description: "T extends NumberType"
---

# Interface: iListingViewsDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1285](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1285)

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

### lastUpdated

> **lastUpdated**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1293](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1293)

The last time this view count was updated

***

### listingId

> **listingId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1287](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1287)

The listing ID this view count is for

***

### viewCount

> **viewCount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1290](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1290)

The total number of views

***

### viewsByPeriod?

> `optional` **viewsByPeriod?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1296](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1296)

Optional breakdown of views by time period for trending calculations

#### daily

> **daily**: `number`

Views in the last 24 hours

#### hourly

> **hourly**: `number`

Views in the last hour

#### monthly

> **monthly**: `number`

Views in the last 30 days

#### weekly

> **weekly**: `number`

Views in the last 7 days
