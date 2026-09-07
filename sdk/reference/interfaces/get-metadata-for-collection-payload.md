---
description: "If present, we will fetch the metadata corresponding to the specified options."
---

# Interface: GetMetadataForCollectionPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:430](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L430)

## Properties

### metadataToFetch?

> `optional` **metadataToFetch?**: [`MetadataFetchOptions`](/sdk/reference/interfaces/metadata-fetch-options)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:436](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L436)

If present, we will fetch the metadata corresponding to the specified options.

Consider using pruneMetadataToFetch for filtering out previously fetched metadata.

***

### tokenFloorPricesToFetch?

> `optional` **tokenFloorPricesToFetch?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>[] \| [`NumberType`](/sdk/reference/type-aliases/number-type)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:441](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L441)

If present, we will fetch the floor price for the specified token IDs.
