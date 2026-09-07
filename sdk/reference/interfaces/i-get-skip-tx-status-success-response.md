---
description: "Skip:Go tx-status payload (transfers, state, etc). Indexer may inject swapEventInfo derived from on-chain swap events."
---

# Interface: iGetSkipTxStatusSuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4509](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4509)

## Indexable

> \[`key`: `string`\]: `unknown`

## Properties

### swapEventInfo?

> `optional` **swapEventInfo?**: `Record`\<`string`, `unknown`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4512](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4512)

***

### transfers?

> `optional` **transfers?**: `unknown`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4511](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4511)

Skip:Go tx-status payload (transfers, state, etc). Indexer may inject `swapEventInfo` derived from on-chain swap events.
