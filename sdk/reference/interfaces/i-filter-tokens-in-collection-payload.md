---
description: "Attribute queries"
---

# Interface: iFilterTokensInCollectionPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L54)

## Properties

### attributes?

> `optional` **attributes?**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:68](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L68)

Attribute queries

#### name

> **name**: `string`

#### value

> **value**: `string` \| `number` \| `boolean`

***

### bookmark?

> `optional` **bookmark?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:65](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L65)

Pagination bookmark. Leave undefined or "" for first request.

***

### categories?

> `optional` **categories?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:58](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L58)

Limit to specific lists. Leave undefined to not filter by list.

***

### denom?

> `optional` **denom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:76](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L76)

Denom for the price range. Defaults to ubadge.

***

### mostViewed?

> `optional` **mostViewed?**: `"daily"` \| `"allTime"` \| `"weekly"` \| `"monthly"` \| `"yearly"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:63](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L63)

mostViewed is a special view that sorts by most viewed tokens. May be incompatible with other filters.

***

### priceRange?

> `optional` **priceRange?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L74)

The listing prices

***

### tags?

> `optional` **tags?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L60)

Limit to specific lists. Leave undefined to not filter by list.

***

### tokenIds?

> `optional` **tokenIds?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:56](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L56)

Limit to specific token IDs. Leave undefined to not filter by token ID.
