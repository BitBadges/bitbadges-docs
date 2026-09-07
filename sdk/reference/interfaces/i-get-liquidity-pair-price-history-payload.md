---
description: "Asset identifier (e.g. badgeslp:123:uyes or ubadge)."
---

# Interface: iGetLiquidityPairPriceHistoryPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5092](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5092)

## Properties

### asset

> **asset**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5094](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5094)

Asset identifier (e.g. `badgeslp:123:uyes` or `ubadge`).

***

### timeframe?

> `optional` **timeframe?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5096](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5096)

Aggregation timeframe. Defaults to `'10m'` on the indexer when omitted.
