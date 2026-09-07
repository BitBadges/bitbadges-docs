---
description: "The client ID of the app to delete."
---

# Interface: iDeleteDeveloperAppPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2295](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2295)

## Properties

### clientId

> **clientId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2297](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2297)

The client ID of the app to delete.

***

### clientSecret?

> `optional` **clientSecret?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2302](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2302)

The client secret of the app to delete. This is only needed for temporary developer apps (not linked to a user).
For non-temporary developer apps, the client secret is not needed, but you must be signed in and the owner of the app.
