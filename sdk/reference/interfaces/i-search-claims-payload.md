---
description: "Bookmark to start from. Obtained from previous request. Leave blank to start from the beginning. Only applicable when no additional criteria is specified."
---

# Interface: iSearchClaimsPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:353](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L353)

## Properties

### bookmark?

> `optional` **bookmark?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:355](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L355)

Bookmark to start from. Obtained from previous request. Leave blank to start from the beginning. Only applicable when no additional criteria is specified.

***

### fetchPrivateParams?

> `optional` **fetchPrivateParams?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:357](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L357)

Fetch private parameters for the claim. Only applicable if you are the creator / manager of the claim. Otherwise, it will be the public read-only view.

***

### searchValue?

> `optional` **searchValue?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:359](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L359)

If provided, we will only return claims with names that regex match the search value.
