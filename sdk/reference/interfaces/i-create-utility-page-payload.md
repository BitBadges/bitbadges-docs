---
description: "T extends NumberType"
---

# Interface: iCreateUtilityPagePayload\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3581](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3581)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### categories

> **categories**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3604](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3604)

The categories of the listing

***

### content

> **content**: [`iUtilityPageContent`](/sdk/reference/interfaces/i-utility-page-content)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3586](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3586)

The content for the listing

***

### directLink?

> `optional` **directLink?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3601](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3601)

The direct link for the listing. If specified, we will skip the entire content / listing page. Thus, content and links should be empty [].

***

### displayTimes?

> `optional` **displayTimes?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3598](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3598)

The display times of the listing. Optionally specify when to show vs not show the listing.

***

### estimatedCost?

> `optional` **estimatedCost?**: [`iEstimatedCost`](/sdk/reference/interfaces/i-estimated-cost)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3616](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3616)

The estimated cost for this utility/service

***

### estimatedTime?

> `optional` **estimatedTime?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3619](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3619)

The estimated time to complete or deliver this utility/service

***

### inheritMetadataFrom?

> `optional` **inheritMetadataFrom?**: [`iInheritMetadataFrom`](/sdk/reference/interfaces/i-inherit-metadata-from)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3610](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3610)

Where to inherit metadata from? Only one can be specified.

***

### linkedTo?

> `optional` **linkedTo?**: [`iLinkedTo`](/sdk/reference/interfaces/i-linked-to)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3607](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3607)

The details for if this listing is linked to a specific collection or list (displayed in Utility tab)

***

### links

> **links**: [`iUtilityPageLink`](/sdk/reference/interfaces/i-utility-page-link)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3589](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3589)

The links for the listing

***

### locale?

> `optional` **locale?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3613](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3613)

Locale (ex: es, fr, etc.). If not specified, we assume en.

***

### metadata

> **metadata**: [`iMetadataWithoutInternals`](/sdk/reference/type-aliases/i-metadata-without-internals)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3583](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3583)

The overall metadata for the listing

***

### type

> **type**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3592](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3592)

The type of the listing

***

### visibility

> **visibility**: `"public"` \| `"private"` \| `"unlisted"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3595](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3595)

The visibility of the listing
