---
description: "Get Swap Chains Route: GET /api/v0/swap/chains"
---

# Interface: iGetSwapChainsPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4518](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4518)

Get Swap Chains
Route: GET /api/v0/swap/chains

Transparent alias of `/skip/chains` — same Skip:Go chain registry response shape.

## Properties

### includeSvm?

> `optional` **includeSvm?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4520](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4520)

Include Solana / SVM chains. Defaults to false.

***

### onlyTestnets?

> `optional` **onlyTestnets?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4522](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4522)

Return testnets only. Defaults to false.
