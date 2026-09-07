---
description: "Get Intents (Approval Items of approvalType \"intent\") Route: GET /api/v0/intents (browse all) or GET /api/v0/intents/:address (specific user)"
---

# Interface: iGetIntentsPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4690](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4690)

Get Intents (Approval Items of approvalType "intent")
Route: GET /api/v0/intents (browse all) or GET /api/v0/intents/:address (specific user)

"Intents" are pre-signed exchange approvals that swap one denom for
another. The browse endpoint (`/intents`) returns only active, funded,
non-used intents. The user-scoped endpoint (`/intents/:address`)
can return everything when `includeAll=true`.

## Properties

### collectionId?

> `optional` **collectionId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4702](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4702)

Filter to intents scoped to a specific collection.

***

### includeAll?

> `optional` **includeAll?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4696](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4696)

When fetching a specific user's intents, set to `true` to include
used/expired/inactive/underfunded intents. Server returns 400 if
passed without a path-level address.

***

### payDenom?

> `optional` **payDenom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4698](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4698)

Filter by the denom the intent pays out.

***

### receiveDenom?

> `optional` **receiveDenom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4700](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4700)

Filter by the denom the intent expects to receive.
