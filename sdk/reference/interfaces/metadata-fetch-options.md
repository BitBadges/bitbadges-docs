---
description: "Defines the options for fetching metadata."
---

# Interface: MetadataFetchOptions

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:348](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L348)

Defines the options for fetching metadata.

## Properties

### doNotFetchCollectionMetadata?

> `optional` **doNotFetchCollectionMetadata?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:352](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L352)

If true, collection metadata will not be fetched.

***

### tokenIds?

> `optional` **tokenIds?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>[] \| [`NumberType`](/sdk/reference/type-aliases/number-type)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:360](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L360)

If present, the metadata corresponding to the specified token IDs will be fetched.

***

### uris?

> `optional` **uris?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:356](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L356)

If present, the metadata corresponding to the specified URIs will be fetched.
