---
description: "Payload for fetching all plugins created/managed by a specific address."
---

# Interface: iGetCreatorPluginsPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2573](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2573)

Payload for fetching all plugins created/managed by a specific address.

Set `returnSensitiveData` to include sensitive fields (pluginSecret). This requires authentication as the creator address.
Without the flag, sensitive data is always stripped regardless of authentication.

## Properties

### bookmark?

> `optional` **bookmark?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2577](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2577)

Bookmark for pagination.

***

### creatorAddress

> **creatorAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2575](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2575)

The address of the plugin creator to query.

***

### returnSensitiveData?

> `optional` **returnSensitiveData?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2579](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2579)

If true, include sensitive data (pluginSecret) in the response. Requires authentication as the creator.
