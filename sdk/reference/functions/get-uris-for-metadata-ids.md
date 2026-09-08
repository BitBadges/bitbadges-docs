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
import { getUrisForMetadataIds, TokenMetadata } from 'bitbadges';
const tokenMetadata = [
  new TokenMetadata<bigint>({
    uri: 'https://example.com/{id}.json',
    customData: '',
    tokenIds: [{ start: 100n, end: 102n }]
  })
];
const result = getUrisForMetadataIds([2n], 'https://example.com/collection.json', tokenMetadata);
console.log(result); // ['https://example.com/101.json']
```

This can also be used with the BitBadges collection interface
```ts
import { getUrisForMetadataIds, type BitBadgesCollection } from 'bitbadges';
declare const collection: BitBadgesCollection<bigint>; // fetched through BitBadgesAPI
const result = getUrisForMetadataIds([2n], collection.getCollectionMetadataDetails().uri, collection.getTokenMetadata());
```
