---
description: "Get Swap Status Route: GET /api/v0/swap/status"
---

# Interface: iGetSwapStatusPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4648](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4648)

Get Swap Status
Route: GET /api/v0/swap/status

Transparent alias of `/skip/v2/tx/status`. Same response shape — the
indexer enriches the upstream payload with `swapEventInfo` when the
destination is a BitBadges on-chain swap.

## Properties

### chainId?

> `optional` **chainId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4652](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4652)

Optional source chain ID — required for some tx hashes that aren't globally unique.

***

### txHash

> **txHash**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4650](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4650)

Transaction hash to look up.
