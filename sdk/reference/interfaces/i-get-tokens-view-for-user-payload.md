---
description: "iBaseQueryParams.bookmark"
---

# Interface: iGetTokensViewForUserPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:275](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L275)

## Extends

- `iBaseQueryParams`

## Properties

### bookmark?

> `optional` **bookmark?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:263](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L263)

#### Inherited from

`iBaseQueryParams.bookmark`

***

### collectionId?

> `optional` **collectionId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:277](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L277)

Optional collection ID to filter by

***

### oldestFirst?

> `optional` **oldestFirst?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:264](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L264)

#### Inherited from

`iBaseQueryParams.oldestFirst`

***

### standard?

> `optional` **standard?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:287](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L287)

The standard to filter by for the view.

***

### viewType?

> `optional` **viewType?**: `"collected"` \| `"managing"` \| `"created"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:285](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L285)

The view type to search for. Default is 'collected'

- 'collected' will return the tokens the user has a balance of
- 'managing' will return the tokens the user is managing
- 'created' will return the tokens the user has created
