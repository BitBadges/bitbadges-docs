---
description: "T extends NumberType"
---

# Interface: iUpdateUtilityPagePayload\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3651](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3651)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### categories

> **categories**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3678](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3678)

The categories of the listing

***

### content

> **content**: [`iUtilityPageContent`](/sdk/reference/interfaces/i-utility-page-content)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3659](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3659)

The content for the listing. This is only used for a dedicated listing page (not compatible with direct link or inherited metadata).

***

### directLink?

> `optional` **directLink?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3675](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3675)

The direct link for the listing. If specified, we will skip the entire content / listing page. Thus, content and links should be empty [].

This is incompatible with inherited metadata.

***

### displayTimes?

> `optional` **displayTimes?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3668](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3668)

The display times of the listing. Optionally specify when to show vs not show the listing.

***

### estimatedCost?

> `optional` **estimatedCost?**: [`iEstimatedCost`](/sdk/reference/interfaces/i-estimated-cost)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3697](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3697)

The estimated cost for this utility/service

***

### estimatedTime?

> `optional` **estimatedTime?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3700](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3700)

The estimated time to complete or deliver this utility/service

***

### inheritMetadataFrom?

> `optional` **inheritMetadataFrom?**: [`iInheritMetadataFrom`](/sdk/reference/interfaces/i-inherit-metadata-from)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3691](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3691)

Where to inherit metadata from? Only one can be specified.

If specified, we automatically override the metadata from what is specified and
automatically set a direct link to the page.

Ex: Inherit claim metadata and direct link to the claim page.

***

### linkedTo?

> `optional` **linkedTo?**: [`iLinkedTo`](/sdk/reference/interfaces/i-linked-to)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3681](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3681)

The details for if this listing is linked to a specific collection or list (displayed in Utility tab)

***

### links

> **links**: [`iUtilityPageLink`](/sdk/reference/interfaces/i-utility-page-link)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3662](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3662)

The links for the listing. This is only used for a dedicated listing page (not compatible with direct link or inherited metadata).

***

### listingId

> **listingId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3653](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3653)

The listing ID to update

***

### locale?

> `optional` **locale?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3694](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3694)

Locale (ex: es, fr, etc.). If not specified, we assume "en" (English).

***

### metadata

> **metadata**: [`iMetadataWithoutInternals`](/sdk/reference/type-aliases/i-metadata-without-internals)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3656](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3656)

The overall metadata for the listing

***

### visibility

> **visibility**: `"public"` \| `"private"` \| `"unlisted"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3665](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3665)

The visibility of the listing
