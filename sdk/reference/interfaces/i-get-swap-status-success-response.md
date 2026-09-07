---
description: "Injected by the indexer when the final destination is a BitBadges on-chain swap."
---

# Interface: iGetSwapStatusSuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4658](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4658)

## Indexable

> \[`key`: `string`\]: `unknown`

## Properties

### swapEventInfo?

> `optional` **swapEventInfo?**: `Record`\<`string`, `unknown`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4662](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4662)

Injected by the indexer when the final destination is a BitBadges on-chain swap.

***

### transfers?

> `optional` **transfers?**: `unknown`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4660](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4660)

Skip:Go tx-status payload (transfers, state, etc).
