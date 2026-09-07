---
description: "Get Swap Assets Route: GET /api/v0/swap/assets"
---

# Interface: iGetSwapAssetsPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4567](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4567)

Get Swap Assets
Route: GET /api/v0/swap/assets

Same query shape as `/skip/assets`. Response merges Skip:Go assets
with CoinsRegistry + verified AssetInfoDoc entries for BitBadges chains;
other chains pass through unmodified.

## Properties

### includeCw20?

> `optional` **includeCw20?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4571](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4571)

Include CW20 token assets. Defaults to false.

***

### includeSvm?

> `optional` **includeSvm?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4569](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4569)

Include Solana / SVM chain assets. Defaults to false.
