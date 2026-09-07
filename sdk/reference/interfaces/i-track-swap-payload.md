---
description: "Track Swap Route: POST /api/v0/swap/track"
---

# Interface: iTrackSwapPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4606](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4606)

Track Swap
Route: POST /api/v0/swap/track

Transparent alias of `/skip/v2/tx/track`. Same request/response shape.

## Properties

### chain\_id?

> `optional` **chain\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4612](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4612)

Source chain ID (snake_case Skip:Go form).

***

### chainId?

> `optional` **chainId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4614](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4614)

Source chain ID (camelCase SDK form).

***

### tokenIn?

> `optional` **tokenIn?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4616](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4616)

Optional token in amount with denom (e.g. "1000ubadge") — surfaces in the swap-activity row.

***

### tx\_hash?

> `optional` **tx\_hash?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4608](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4608)

Transaction hash to track (snake_case Skip:Go form).

***

### txHash?

> `optional` **txHash?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4610](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4610)

Transaction hash to track (camelCase SDK form).
