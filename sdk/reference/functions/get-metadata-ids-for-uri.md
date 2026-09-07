---
description: "This function returns the Metadata IDs for a specific token URI. Returns an empty array if not found."
---

# Function: getMetadataIdsForUri()

> **getMetadataIdsForUri**\<`T`\>(`uri`, `tokenMetadata`): `T`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadataIds.ts:86](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadataIds.ts#L86)

This function returns the [Metadata IDs](https://docs.bitbadges.io/for-developers/bitbadges-sdk/common-snippets/metadata-ids)
for a specific token URI. Returns an empty array if not found.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### uri

`string`

### tokenMetadata

[`TokenMetadata`](/sdk/reference/classes/token-metadata)\<`T`\>[]

## Returns

`T`[]

## Remarks

The token metadata array is the timeline values (TokenMetadataTimeline.tokenMetadata), not the cached fetched values
from the API.

## Examples

```ts
import { getMetadataIdsForUri } from 'bitbadges'
const collection: BitBadgesCollection<bigint> = { ... }
const uri = 'https://bitbadges.io/collection/1/badge/1'
const metadataIds = getMetadataIdsForUri(uri, collection.getTokenMetadataTimelineValue())
```

This can also be used with the BitBadges collection interface
```ts
import { BitBadgesCollection } from 'bitbadges'
const collection: BitBadgesCollection<bigint> = { ... }
const uri = 'https://bitbadges.io/collection/1/badge/1'
const metadataIds = collection.getMetadataIdsForUri(uri)
```
