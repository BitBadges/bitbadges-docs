---
description: "Interface: iGetDynamicDataActivitySuccessResponse — BitBadges TypeScript SDK interface."
---

# Interface: iGetDynamicDataActivitySuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3274](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3274)

## Properties

### history

> **history**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3284](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3284)

#### docs

> **docs**: `object`[]

#### pagination

> **pagination**: `object`

##### pagination.bookmark

> **bookmark**: `string`

##### pagination.hasMore

> **hasMore**: `boolean`

***

### pending

> **pending**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3275](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3275)

#### actions

> **actions**: `any`[]

#### dynamicDataId

> **dynamicDataId**: `string`

#### error

> **error**: `string`

#### handlerId

> **handlerId**: `string`

#### lastFetchedAt

> **lastFetchedAt**: `number`

#### nextFetchTime

> **nextFetchTime**: `number`

#### numRetries

> **numRetries**: `number`
