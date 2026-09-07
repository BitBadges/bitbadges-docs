---
description: "iBaseQueryParams.bookmark"
---

# Interface: iGetClaimActivityForUserPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:361](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L361)

## Extends

- `iBaseQueryParams`

## Properties

### bookmark?

> `optional` **bookmark?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:263](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L263)

#### Inherited from

`iBaseQueryParams.bookmark`

***

### oldestFirst?

> `optional` **oldestFirst?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:264](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L264)

#### Inherited from

`iBaseQueryParams.oldestFirst`

***

### viewType?

> `optional` **viewType?**: `"public"` \| `"all"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:368](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L368)

The view type to search for. Default is 'public'

- 'all' will return all claim activity even private (must have permission to view private activity)
- 'public' will only return public claim activity
