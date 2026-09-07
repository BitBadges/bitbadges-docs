---
description: "T extends NumberType"
---

# Interface: iGetUserBalancesSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4926](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4926)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### docs

> **docs**: [`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4928](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4928)

Balance docs for the address — one per (collectionId, address) pair the user holds.

***

### pagination

> **pagination**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4929](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4929)

#### bookmark

> **bookmark**: `string`

#### hasMore

> **hasMore**: `boolean`
