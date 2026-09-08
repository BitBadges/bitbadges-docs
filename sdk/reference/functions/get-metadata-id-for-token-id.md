---
description: "This function returns the Metadata ID for a specific token ID. Returns -1 if not found."
---

# Function: getMetadataIdForTokenId()

> **getMetadataIdForTokenId**\<`T`\>(`tokenId`, `tokenMetadata`): `bigint` \| `-1` \| `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadataIds.ts:35](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadataIds.ts#L35)

This function returns the [Metadata ID](https://docs.bitbadges.io/for-developers/bitbadges-sdk/common-snippets/metadata-ids)
for a specific token ID. Returns -1 if not found.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### tokenId

`T`

### tokenMetadata

[`TokenMetadata`](/sdk/reference/classes/token-metadata)\<`T`\>[]

## Returns

`bigint` \| `-1` \| `T`

## Remarks

The token metadata array is the timeline values (TokenMetadataTimeline.tokenMetadata), not the cached fetched values
from the API.

## Examples

```ts
import { getMetadataIdForTokenId, TokenMetadata } from 'bitbadges';
const tokenMetadata = [
  new TokenMetadata<bigint>({
    uri: 'https://example.com/{id}.json',
    customData: '',
    tokenIds: [{ start: 100n, end: 102n }]
  })
];
const result = getMetadataIdForTokenId(101n, tokenMetadata);
console.log(result); // 2n
```

This can also be used with the BitBadges collection interface
```ts
import { getMetadataIdForTokenId, type BitBadgesCollection } from 'bitbadges';
declare const collection: BitBadgesCollection<bigint>; // fetched through BitBadgesAPI
const result = getMetadataIdForTokenId(101n, collection.getTokenMetadata());
```
