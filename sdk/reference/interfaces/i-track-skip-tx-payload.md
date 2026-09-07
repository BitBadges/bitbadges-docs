---
description: "Track Skip Tx Route: POST /api/v0/skip/v2/tx/track"
---

# Interface: iTrackSkipTxPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4461](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4461)

Track Skip Tx
Route: POST /api/v0/skip/v2/tx/track

Initiates Skip:Go tracking for a broadcast tx. Accepts both snake_case
(matches Skip:Go) and camelCase (matches SDK conventions); the indexer
normalizes either form before forwarding.

## Properties

### chain\_id?

> `optional` **chain\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4467](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4467)

Source chain ID (snake_case Skip:Go form).

***

### chainId?

> `optional` **chainId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4469](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4469)

Source chain ID (camelCase SDK form).

***

### tokenIn?

> `optional` **tokenIn?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4471](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4471)

Optional token in amount with denom (e.g. "1000ubadge"). Used to seed the swap event row in the indexer DB.

***

### tx\_hash?

> `optional` **tx\_hash?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4463](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4463)

Transaction hash to track (snake_case Skip:Go form).

***

### txHash?

> `optional` **txHash?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4465](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4465)

Transaction hash to track (camelCase SDK form).
