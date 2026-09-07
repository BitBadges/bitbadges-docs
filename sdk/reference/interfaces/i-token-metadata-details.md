---
description: "T extends NumberType"
---

# Interface: iTokenMetadataDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L32)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L42)

Custom data

***

### fetchedUri?

> `optional` **fetchedUri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L40)

The URI that the metadata was fetched from with placeholders replaced.

***

### metadata?

> `optional` **metadata?**: [`iMetadata`](/sdk/reference/interfaces/i-metadata)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L36)

The metadata fetched by the URI

***

### tokenIds

> **tokenIds**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L34)

The token IDs that correspond to the metadata

***

### toUploadToIpfs?

> `optional` **toUploadToIpfs?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L44)

Flag to denote if the metadata is new and should be updated. Used internally.

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L38)

The URI that the metadata was fetched from. This is the original on-chain URI, so may still have placeholders (i.e. {id} or {address})
