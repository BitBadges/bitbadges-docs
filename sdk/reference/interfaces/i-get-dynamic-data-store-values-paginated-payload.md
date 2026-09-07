---
description: "The pagination bookmark to start from"
---

# Interface: iGetDynamicDataStoreValuesPaginatedPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2893](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2893)

## Properties

### bookmark?

> `optional` **bookmark?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2897](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2897)

The pagination bookmark to start from

***

### dataSecret?

> `optional` **dataSecret?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2895](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2895)

The data secret to fetch. Only needed if you are not signed in as creator. Not applicable to public stores

***

### lookupType?

> `optional` **lookupType?**: `"username"` \| `"id"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2899](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2899)

The lookup type to fetch (if you need to specify).
