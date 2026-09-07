---
description: "The client ID of the app to delete."
---

# Interface: iDeleteDeveloperAppPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2296](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2296)

## Properties

### clientId

> **clientId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2298](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2298)

The client ID of the app to delete.

***

### clientSecret?

> `optional` **clientSecret?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2303](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2303)

The client secret of the app to delete. This is only needed for temporary developer apps (not linked to a user).
For non-temporary developer apps, the client secret is not needed, but you must be signed in and the owner of the app.
