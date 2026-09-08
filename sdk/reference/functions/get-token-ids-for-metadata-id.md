---
description: "This return the token IDs for a specific Metadata ID. Returns an empty array if not found."
---

# Function: getTokenIdsForMetadataId()

> **getTokenIdsForMetadataId**\<`T`\>(`_metadataId`, `_tokenUris`): [`UintRange`](/sdk/reference/classes/uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadataIds.ts:255](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadataIds.ts#L255)

This return the token IDs for a specific [Metadata ID](https://docs.bitbadges.io/for-developers/bitbadges-sdk/common-snippets/metadata-ids).
Returns an empty array if not found.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### \_metadataId

`T`

### \_tokenUris

[`TokenMetadata`](/sdk/reference/classes/token-metadata)\<`T`\>[]

## Returns

[`UintRange`](/sdk/reference/classes/uint-range)\<`T`\>[]

## Remarks

The token metadata array is the timeline values (TokenMetadataTimeline.tokenMetadata), not the cached fetched values
from the API.

## Examples

```ts
import { getTokenIdsForMetadataId, TokenMetadata } from 'bitbadges';
const tokenMetadata = [
  new TokenMetadata<bigint>({
    uri: 'https://example.com/{id}.json',
    customData: '',
    tokenIds: [{ start: 100n, end: 102n }]
  })
];
const result = getTokenIdsForMetadataId(2n, tokenMetadata);
console.log(result); // [{ start: 101n, end: 101n }]
```

This can also be used with the BitBadges collection interface
```ts
import { getTokenIdsForMetadataId, type BitBadgesCollection } from 'bitbadges';
declare const collection: BitBadgesCollection<bigint>; // fetched through BitBadgesAPI
const result = getTokenIdsForMetadataId(2n, collection.getTokenMetadata());
```
