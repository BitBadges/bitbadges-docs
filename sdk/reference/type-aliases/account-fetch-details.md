---
description: "This defines the options for fetching additional account details."
---

# Type Alias: AccountFetchDetails

> **AccountFetchDetails** = `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:701](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L701)

This defines the options for fetching additional account details.

A view is a way of fetching additional details about an account, and these will be queryable in the response via the `views` property.

Each view has a bookmark that is used for pagination and must be supplied to get the next page.

## Properties

### address?

> `optional` **address?**: [`NativeAddress`](/sdk/reference/type-aliases/native-address)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:703](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L703)

If present, the account corresponding to the specified address will be fetched. Please only specify one of `address` or `username`.

***

### partialProfile?

> `optional` **partialProfile?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:713](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L713)

If true, we will only fetch a partial set of the document for the user.

Currently includes: username, profile pic, and latest signed in chain

Pretty much, anything you need to display the address but not the full profile

***

### username?

> `optional` **username?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:705](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L705)

If present, the account corresponding to the specified username will be fetched. Please only specify one of `address` or `username`.

***

### viewsToFetch?

> `optional` **viewsToFetch?**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:716](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L716)

An array of views to fetch with associated bookmarks.

#### bookmark

> **bookmark**: `string`

A bookmark to pass in for pagination. "" for first request.

#### oldestFirst?

> `optional` **oldestFirst?**: `boolean`

Oldest first. By default, we fetch newest

#### specificCollections?

> `optional` **specificCollections?**: [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>[]

If defined, we will filter the view to only include the specified collections.

#### standard?

> `optional` **standard?**: `string`

The standard to filter by for the view.

#### viewId

> **viewId**: `string`

Unique view ID. Used for pagination. All fetches w/ same ID should be made with same criteria.

#### viewType

> **viewType**: [`AccountViewKey`](/sdk/reference/type-aliases/account-view-key)

The base view type to fetch.
