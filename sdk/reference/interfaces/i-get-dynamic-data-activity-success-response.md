---
description: "Interface: iGetDynamicDataActivitySuccessResponse — BitBadges TypeScript SDK interface."
---

# Interface: iGetDynamicDataActivitySuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3275](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3275)

## Properties

### history

> **history**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3285](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3285)

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3276](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3276)

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
