---
description: "Get Skip Tx Status Route: GET /api/v0/skip/v2/tx/status"
---

# Interface: iGetSkipTxStatusPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4499](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4499)

Get Skip Tx Status
Route: GET /api/v0/skip/v2/tx/status

## Properties

### chainId?

> `optional` **chainId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4503](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4503)

Optional source chain ID — required for some tx hashes that aren't globally unique.

***

### txHash

> **txHash**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4501](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4501)

Transaction hash to look up.
