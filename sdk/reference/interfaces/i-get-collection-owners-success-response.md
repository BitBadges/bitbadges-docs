---
description: "T extends NumberType"
---

# Interface: iGetCollectionOwnersSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L53)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### counts?

> `optional` **counts?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:61](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L61)

Present only when `tokenId` was provided. Holder counts for that tier.
Plain integers (holder counts, well within safe-integer range) — not
NumberType, so they aren't affected by number-type conversion.

#### active

> **active**: `number`

#### expired

> **expired**: `number`

#### total

> **total**: `number`

***

### owners

> **owners**: [`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L54)

***

### pagination

> **pagination**: [`PaginationInfo`](/sdk/reference/interfaces/pagination-info)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:55](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L55)
