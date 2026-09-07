---
description: "Skip:Go tx-status payload (transfers, state, etc). Indexer may inject swapEventInfo derived from on-chain swap events."
---

# Interface: iGetSkipTxStatusSuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4404](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4404)

## Indexable

> \[`key`: `string`\]: `unknown`

## Properties

### swapEventInfo?

> `optional` **swapEventInfo?**: `Record`\<`string`, `unknown`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4407](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4407)

***

### transfers?

> `optional` **transfers?**: `unknown`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4406](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4406)

Skip:Go tx-status payload (transfers, state, etc). Indexer may inject `swapEventInfo` derived from on-chain swap events.
