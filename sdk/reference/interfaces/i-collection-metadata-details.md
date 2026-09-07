---
description: "T extends NumberType"
---

# Interface: iCollectionMetadataDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L50)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:58](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L58)

Custom data

***

### fetchedUri?

> `optional` **fetchedUri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:56](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L56)

The URI that the metadata was fetched from with placeholders replaced.

***

### metadata?

> `optional` **metadata?**: [`iMetadata`](/sdk/reference/interfaces/i-metadata)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L52)

The metadata fetched by the URI

***

### toUploadToIpfs?

> `optional` **toUploadToIpfs?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L60)

Flag to denote if the metadata is new and should be updated. Used internally.

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L54)

The URI that the metadata was fetched from. This is the original on-chain URI, so may still have placeholders (i.e. {id} or {address})
