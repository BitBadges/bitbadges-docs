---
description: "Defines the options for fetching additional collection details."
---

# Interface: GetAdditionalCollectionDetailsPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:384](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L384)

Defines the options for fetching additional collection details.

A view is a way of fetching additional details about a collection, and these will be queryable in the response via the `views` property.
Each view has a bookmark that is used for pagination and must be supplied to get the next page.
If the bookmark is not supplied, the first page will be returned.

## Properties

### approvalTrackersToFetch?

> `optional` **approvalTrackersToFetch?**: [`iAmountTrackerIdDetails`](/sdk/reference/interfaces/i-amount-tracker-id-details)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:420](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L420)

If present, the approvals trackers corresponding to the specified approvals tracker IDs will be fetched.

***

### challengeTrackersToFetch?

> `optional` **challengeTrackersToFetch?**: [`iChallengeTrackerIdDetails`](/sdk/reference/interfaces/i-challenge-tracker-id-details)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:412](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L412)

If present, the merkle challenge trackers corresponding to the specified merkle challenge IDs will be fetched.

***

### disableDefaults?

> `optional` **disableDefaults?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:416](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L416)

Disable appending default approvals.

***

### fetchPrivateParams?

> `optional` **fetchPrivateParams?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:424](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L424)

Fetches private parameters for any claims in addition to public parameters.

***

### fetchTotalBalances?

> `optional` **fetchTotalBalances?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:408](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L408)

If true, the total and mint balances will be fetched.

***

### viewsToFetch?

> `optional` **viewsToFetch?**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:388](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L388)

If present, the specified views will be fetched.

#### address?

> `optional` **address?**: `string`

If specified, we will only fetch this users' activity.

#### bookmark

> **bookmark**: `string`

A bookmark to pass in for pagination. "" for first request.

#### oldestFirst?

> `optional` **oldestFirst?**: `boolean`

If defined, we will return the oldest items first.

#### tokenId?

> `optional` **tokenId?**: [`NumberType`](/sdk/reference/type-aliases/number-type)

IF specified, we will filter to this abdge ID (only applicable to utiity listings view currently)

#### viewId

> **viewId**: `string`

A unique view ID. This is used for pagination. All fetches w/ same ID should be made with same criteria.

#### viewType

> **viewType**: [`CollectionViewKey`](/sdk/reference/type-aliases/collection-view-key)

The base view type to fetch.
