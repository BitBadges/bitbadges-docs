---
description: "Aggregated bid/ask depth for a single (collectionId, tokenId, denom). Indexer side stores the doc keyed by ${collectionId}:${tokenId}:${denom}. Inner shape is…"
---

# Interface: iGetOrderbookDepthPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5001](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5001)

Aggregated bid/ask depth for a single (collectionId, tokenId, denom).
Indexer side stores the doc keyed by `${collectionId}:${tokenId}:${denom}`.
Inner shape is intentionally untyped — bid/listing aggregations evolve
independently of this SDK and the doc's `bids` / `listings` are price-keyed
maps. Treat as opaque on the client.

## Properties

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5003](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5003)

Denom to filter the orderbook by (e.g. `ubadge`).
