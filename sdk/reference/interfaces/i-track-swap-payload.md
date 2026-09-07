---
description: "Track Swap Route: POST /api/v0/swap/track"
---

# Interface: iTrackSwapPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4711](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4711)

Track Swap
Route: POST /api/v0/swap/track

Transparent alias of `/skip/v2/tx/track`. Same request/response shape.

## Properties

### chain\_id?

> `optional` **chain\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4717](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4717)

Source chain ID (snake_case Skip:Go form).

***

### chainId?

> `optional` **chainId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4719](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4719)

Source chain ID (camelCase SDK form).

***

### tokenIn?

> `optional` **tokenIn?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4721](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4721)

Optional token in amount with denom (e.g. "1000ubadge") — surfaces in the swap-activity row.

***

### tx\_hash?

> `optional` **tx\_hash?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4713](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4713)

Transaction hash to track (snake_case Skip:Go form).

***

### txHash?

> `optional` **txHash?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4715](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4715)

Transaction hash to track (camelCase SDK form).
