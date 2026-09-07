---
description: "Get Skip Tx Status Route: GET /api/v0/skip/v2/tx/status"
---

# Interface: iGetSkipTxStatusPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4394](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4394)

Get Skip Tx Status
Route: GET /api/v0/skip/v2/tx/status

## Properties

### chainId?

> `optional` **chainId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4398](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4398)

Optional source chain ID — required for some tx hashes that aren't globally unique.

***

### txHash

> **txHash**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4396](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4396)

Transaction hash to look up.
