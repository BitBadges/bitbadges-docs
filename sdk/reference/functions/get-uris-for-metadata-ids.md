---
description: "This returns the URIs for a specific Metadata ID. Returns an empty array if not found."
---

# Function: getUrisForMetadataIds()

> **getUrisForMetadataIds**\<`T`\>(`metadataIds`, `collectionUri`, `_tokenUris`): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadataIds.ts:194](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadataIds.ts#L194)

This returns the URIs for a specific [Metadata ID](https://docs.bitbadges.io/for-developers/bitbadges-sdk/common-snippets/metadata-ids).
Returns an empty array if not found.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### metadataIds

`T`[]

### collectionUri

`string`

### \_tokenUris

[`TokenMetadata`](/sdk/reference/classes/token-metadata)\<`T`\>[]

## Returns

`string`[]

## Remarks

The token metadata array is the timeline values (TokenMetadataTimeline.tokenMetadata), not the cached fetched values
from the API.

## Examples

```ts
import { getUrisForMetadataId } from 'bitbadges'
const collection: BitBadgesCollection<bigint> = { ... }
const metadataId = 123n
const uris = getUrisForMetadataId(metadataId, collection.getTokenMetadataTimelineValue())
```

This can also be used with the BitBadges collection interface
```ts
import { BitBadgesCollection } from 'bitbadges'
const collection: BitBadgesCollection<bigint> = { ... }
const metadataId = 123n
const uris = collection.getUrisForMetadataId(metadataId)
```
