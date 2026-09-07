---
description: "Track Skip Tx Route: POST /api/v0/skip/v2/tx/track"
---

# Interface: iTrackSkipTxPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4356](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4356)

Track Skip Tx
Route: POST /api/v0/skip/v2/tx/track

Initiates Skip:Go tracking for a broadcast tx. Accepts both snake_case
(matches Skip:Go) and camelCase (matches SDK conventions); the indexer
normalizes either form before forwarding.

## Properties

### chain\_id?

> `optional` **chain\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4362](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4362)

Source chain ID (snake_case Skip:Go form).

***

### chainId?

> `optional` **chainId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4364](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4364)

Source chain ID (camelCase SDK form).

***

### tokenIn?

> `optional` **tokenIn?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4366](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4366)

Optional token in amount with denom (e.g. "1000ubadge"). Used to seed the swap event row in the indexer DB.

***

### tx\_hash?

> `optional` **tx\_hash?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4358](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4358)

Transaction hash to track (snake_case Skip:Go form).

***

### txHash?

> `optional` **txHash?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4360](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4360)

Transaction hash to track (camelCase SDK form).
