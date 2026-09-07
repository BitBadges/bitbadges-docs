---
description: "T extends NumberType"
---

# Interface: iCreateUtilityPagePayload\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3582](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3582)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### categories

> **categories**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3605](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3605)

The categories of the listing

***

### content

> **content**: [`iUtilityPageContent`](/sdk/reference/interfaces/i-utility-page-content)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3587](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3587)

The content for the listing

***

### directLink?

> `optional` **directLink?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3602](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3602)

The direct link for the listing. If specified, we will skip the entire content / listing page. Thus, content and links should be empty [].

***

### displayTimes?

> `optional` **displayTimes?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3599](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3599)

The display times of the listing. Optionally specify when to show vs not show the listing.

***

### estimatedCost?

> `optional` **estimatedCost?**: [`iEstimatedCost`](/sdk/reference/interfaces/i-estimated-cost)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3617](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3617)

The estimated cost for this utility/service

***

### estimatedTime?

> `optional` **estimatedTime?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3620](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3620)

The estimated time to complete or deliver this utility/service

***

### inheritMetadataFrom?

> `optional` **inheritMetadataFrom?**: [`iInheritMetadataFrom`](/sdk/reference/interfaces/i-inherit-metadata-from)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3611](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3611)

Where to inherit metadata from? Only one can be specified.

***

### linkedTo?

> `optional` **linkedTo?**: [`iLinkedTo`](/sdk/reference/interfaces/i-linked-to)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3608](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3608)

The details for if this listing is linked to a specific collection or list (displayed in Utility tab)

***

### links

> **links**: [`iUtilityPageLink`](/sdk/reference/interfaces/i-utility-page-link)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3590](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3590)

The links for the listing

***

### locale?

> `optional` **locale?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3614](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3614)

Locale (ex: es, fr, etc.). If not specified, we assume en.

***

### metadata

> **metadata**: [`iMetadataWithoutInternals`](/sdk/reference/type-aliases/i-metadata-without-internals)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3584](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3584)

The overall metadata for the listing

***

### type

> **type**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3593](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3593)

The type of the listing

***

### visibility

> **visibility**: `"public"` \| `"private"` \| `"unlisted"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3596](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3596)

The visibility of the listing
