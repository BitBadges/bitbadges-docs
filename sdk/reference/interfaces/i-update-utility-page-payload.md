---
description: "T extends NumberType"
---

# Interface: iUpdateUtilityPagePayload\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3652](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3652)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### categories

> **categories**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3679](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3679)

The categories of the listing

***

### content

> **content**: [`iUtilityPageContent`](/sdk/reference/interfaces/i-utility-page-content)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3660](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3660)

The content for the listing. This is only used for a dedicated listing page (not compatible with direct link or inherited metadata).

***

### directLink?

> `optional` **directLink?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3676](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3676)

The direct link for the listing. If specified, we will skip the entire content / listing page. Thus, content and links should be empty [].

This is incompatible with inherited metadata.

***

### displayTimes?

> `optional` **displayTimes?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3669](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3669)

The display times of the listing. Optionally specify when to show vs not show the listing.

***

### estimatedCost?

> `optional` **estimatedCost?**: [`iEstimatedCost`](/sdk/reference/interfaces/i-estimated-cost)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3698](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3698)

The estimated cost for this utility/service

***

### estimatedTime?

> `optional` **estimatedTime?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3701](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3701)

The estimated time to complete or deliver this utility/service

***

### inheritMetadataFrom?

> `optional` **inheritMetadataFrom?**: [`iInheritMetadataFrom`](/sdk/reference/interfaces/i-inherit-metadata-from)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3692](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3692)

Where to inherit metadata from? Only one can be specified.

If specified, we automatically override the metadata from what is specified and
automatically set a direct link to the page.

Ex: Inherit claim metadata and direct link to the claim page.

***

### linkedTo?

> `optional` **linkedTo?**: [`iLinkedTo`](/sdk/reference/interfaces/i-linked-to)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3682](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3682)

The details for if this listing is linked to a specific collection or list (displayed in Utility tab)

***

### links

> **links**: [`iUtilityPageLink`](/sdk/reference/interfaces/i-utility-page-link)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3663](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3663)

The links for the listing. This is only used for a dedicated listing page (not compatible with direct link or inherited metadata).

***

### listingId

> **listingId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3654](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3654)

The listing ID to update

***

### locale?

> `optional` **locale?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3695](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3695)

Locale (ex: es, fr, etc.). If not specified, we assume "en" (English).

***

### metadata

> **metadata**: [`iMetadataWithoutInternals`](/sdk/reference/type-aliases/i-metadata-without-internals)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3657](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3657)

The overall metadata for the listing

***

### visibility

> **visibility**: `"public"` \| `"private"` \| `"unlisted"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3666](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3666)

The visibility of the listing
