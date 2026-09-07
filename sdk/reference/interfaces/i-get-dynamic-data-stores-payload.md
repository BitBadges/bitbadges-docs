---
description: "The data secret to fetch. Only needed if you are not signed in as creator. Not applicable to public stores"
---

# Interface: iGetDynamicDataStoresPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3025](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3025)

## Properties

### dataSecret?

> `optional` **dataSecret?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3029](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3029)

The data secret to fetch. Only needed if you are not signed in as creator. Not applicable to public stores

***

### dynamicDataIds

> **dynamicDataIds**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3027](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3027)

The IDs to fetch. If not provided, all dynamic data stores will be fetched for the current signed in address without any data populated.
