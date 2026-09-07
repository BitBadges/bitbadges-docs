---
description: "Get Swap Chains Route: GET /api/v0/swap/chains"
---

# Interface: iGetSwapChainsPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4623](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4623)

Get Swap Chains
Route: GET /api/v0/swap/chains

Transparent alias of `/skip/chains` — same Skip:Go chain registry response shape.

## Properties

### includeSvm?

> `optional` **includeSvm?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4625](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4625)

Include Solana / SVM chains. Defaults to false.

***

### onlyTestnets?

> `optional` **onlyTestnets?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4627](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4627)

Return testnets only. Defaults to false.
