---
description: "Get Intents (Approval Items of approvalType \"intent\") Route: GET /api/v0/intents (browse all) or GET /api/v0/intents/:address (specific user)"
---

# Interface: iGetIntentsPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4795](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4795)

Get Intents (Approval Items of approvalType "intent")
Route: GET /api/v0/intents (browse all) or GET /api/v0/intents/:address (specific user)

"Intents" are pre-signed exchange approvals that swap one denom for
another. The browse endpoint (`/intents`) returns only active, funded,
non-used intents. The user-scoped endpoint (`/intents/:address`)
can return everything when `includeAll=true`.

## Properties

### collectionId?

> `optional` **collectionId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4807](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4807)

Filter to intents scoped to a specific collection.

***

### includeAll?

> `optional` **includeAll?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4801](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4801)

When fetching a specific user's intents, set to `true` to include
used/expired/inactive/underfunded intents. Server returns 400 if
passed without a path-level address.

***

### payDenom?

> `optional` **payDenom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4803](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4803)

Filter by the denom the intent pays out.

***

### receiveDenom?

> `optional` **receiveDenom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4805](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4805)

Filter by the denom the intent expects to receive.
