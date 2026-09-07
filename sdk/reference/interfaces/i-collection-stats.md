---
description: "CollectionStats tracks aggregated statistics for a collection. These are computed on-chain and can be queried via GRPC or precompile."
---

# Interface: iCollectionStats\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:1002](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L1002)

CollectionStats tracks aggregated statistics for a collection.
These are computed on-chain and can be queried via GRPC or precompile.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### balances

> **balances**: [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:1011](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L1011)

Circulating supply as Balance[] for proper range handling

***

### holderCount

> **holderCount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:1006](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L1006)

Number of unique holders (addresses with non-zero balance)
