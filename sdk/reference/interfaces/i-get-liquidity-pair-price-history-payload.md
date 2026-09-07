---
description: "Asset identifier (e.g. badgeslp:123:uyes or ubadge)."
---

# Interface: iGetLiquidityPairPriceHistoryPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5197](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5197)

## Properties

### asset

> **asset**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5199](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5199)

Asset identifier (e.g. `badgeslp:123:uyes` or `ubadge`).

***

### timeframe?

> `optional` **timeframe?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5201](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5201)

Aggregation timeframe. Defaults to `'10m'` on the indexer when omitted.
