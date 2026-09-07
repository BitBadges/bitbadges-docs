---
description: "Q extends DynamicDataHandlerType"
---

# Interface: iGetDynamicDataStoreValuesPaginatedSuccessResponse\<Q, T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2904](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2904)

## Type Parameters

### Q

`Q` *extends* [`DynamicDataHandlerType`](/sdk/reference/type-aliases/dynamic-data-handler-type)

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### lookupValues

> **lookupValues**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2906](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2906)

The lookup values for the dynamic data store

#### inStore

> **inStore**: `boolean`

Whether the lookup value is in the store

#### key

> **key**: `string`

The key of the lookup value

#### lookupType?

> `optional` **lookupType?**: `"username"` \| `"id"`

The lookup type of the lookup value

***

### pagination

> **pagination**: [`PaginationInfo`](/sdk/reference/interfaces/pagination-info)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2915](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2915)
