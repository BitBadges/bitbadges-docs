---
description: "The pagination bookmark to start from"
---

# Interface: iGetDynamicDataStoreValuesPaginatedPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2892](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2892)

## Properties

### bookmark?

> `optional` **bookmark?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2896](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2896)

The pagination bookmark to start from

***

### dataSecret?

> `optional` **dataSecret?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2894](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2894)

The data secret to fetch. Only needed if you are not signed in as creator. Not applicable to public stores

***

### lookupType?

> `optional` **lookupType?**: `"username"` \| `"id"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2898](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2898)

The lookup type to fetch (if you need to specify).
