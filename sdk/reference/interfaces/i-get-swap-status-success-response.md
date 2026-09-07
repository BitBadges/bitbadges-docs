---
description: "Injected by the indexer when the final destination is a BitBadges on-chain swap."
---

# Interface: iGetSwapStatusSuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4763](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4763)

## Indexable

> \[`key`: `string`\]: `unknown`

## Properties

### swapEventInfo?

> `optional` **swapEventInfo?**: `Record`\<`string`, `unknown`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4767](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4767)

Injected by the indexer when the final destination is a BitBadges on-chain swap.

***

### transfers?

> `optional` **transfers?**: `unknown`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4765](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4765)

Skip:Go tx-status payload (transfers, state, etc).
