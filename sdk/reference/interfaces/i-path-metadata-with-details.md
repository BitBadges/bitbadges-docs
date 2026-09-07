---
description: "T extends NumberType"
---

# Interface: iPathMetadataWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:76](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L76)

## Extends

- [`iPathMetadata`](/sdk/reference/interfaces/i-path-metadata)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:70](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L70)

Custom data or additional information related to the path metadata.

#### Inherited from

[`iPathMetadata`](/sdk/reference/interfaces/i-path-metadata).[`customData`](/sdk/reference/interfaces/i-path-metadata#customdata)

***

### metadata?

> `optional` **metadata?**: [`iMetadata`](/sdk/reference/interfaces/i-metadata)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:80](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L80)

The fetched metadata from the URI.

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:65](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L65)

The URI (Uniform Resource Identifier) associated with the path metadata.

#### Inherited from

[`iPathMetadata`](/sdk/reference/interfaces/i-path-metadata).[`uri`](/sdk/reference/interfaces/i-path-metadata#uri)
