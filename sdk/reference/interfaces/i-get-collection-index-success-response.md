---
description: "T extends NumberType"
---

# Interface: iGetCollectionIndexSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:88](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L88)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### collections

> **collections**: [`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:89](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L89)

***

### facets

> **facets**: [`iCollectionIndexFacets`](/sdk/reference/interfaces/i-collection-index-facets)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L93)

***

### pagination

> **pagination**: [`PaginationInfo`](/sdk/reference/interfaces/pagination-info)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:90](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L90)

***

### totalMatching

> **totalMatching**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:92](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L92)

The total number of docs matching the filter (across all pages).
