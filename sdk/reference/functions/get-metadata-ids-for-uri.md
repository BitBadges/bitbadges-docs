---
description: "This function returns the Metadata IDs for a specific token URI. Returns an empty array if not found."
---

# Function: getMetadataIdsForUri()

> **getMetadataIdsForUri**\<`T`\>(`uri`, `tokenMetadata`): `T`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadataIds.ts:96](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadataIds.ts#L96)

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

The token metadata array contains URI-to-token mappings, as returned by `collection.getTokenMetadata()`.
These helpers use the mappings rather than the fetched metadata JSON.

## Examples

```ts
import { getMetadataIdsForUri, TokenMetadata } from 'bitbadges';
const tokenMetadata = [
  new TokenMetadata<bigint>({
    uri: 'https://example.com/{id}.json',
    customData: '',
    tokenIds: [{ start: 100n, end: 102n }]
  })
];
const result = getMetadataIdsForUri('https://example.com/101.json', tokenMetadata);
console.log(result); // [2n]
```

Use the token metadata already loaded on a collection.
```ts
import { getMetadataIdsForUri, type BitBadgesCollection } from 'bitbadges';
declare const collection: BitBadgesCollection<bigint>; // fetched through BitBadgesAPI
const result = getMetadataIdsForUri('https://example.com/101.json', collection.getTokenMetadata());
```
