---
description: "T extends NumberType"
---

# Interface: iMetadata\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L21)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_isUpdating?

> `optional` **\_isUpdating?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L62)

Whether the metadata is currently being updated.

***

### additionalInfo?

> `optional` **additionalInfo?**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L50)

Header links for this item displayed right under the title

#### description

> **description**: `string`

#### image

> **image**: `string`

#### name

> **name**: `string`

#### url?

> `optional` **url?**: `string`

***

### attributes?

> `optional` **attributes?**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:43](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L43)

The attributes for this item

#### name

> **name**: `string`

#### type

> **type**: `string`

#### value

> **value**: `string` \| `number` \| `boolean`

***

### bannerImage?

> `optional` **bannerImage?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L29)

The banner image for this item.

***

### category?

> `optional` **category?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:31](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L31)

The category for this item (e.g. "Education", "Attendance").

***

### description

> **description**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L25)

The description of this item. Supports markdown.

***

### externalUrl?

> `optional` **externalUrl?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L33)

The external URL for this item.

***

### fetchedAt?

> `optional` **fetchedAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L60)

The time the metadata was fetched.

***

### fetchedAtBlock?

> `optional` **fetchedAtBlock?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:58](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L58)

The block the metadata was fetched at.

***

### image

> **image**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L27)

The image for this item.

***

### name

> **name**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L23)

The name of this item.

***

### socials?

> `optional` **socials?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L38)

The socials for this item

#### Index Signature

\[`key`: `string`\]: `string`

***

### tags?

> `optional` **tags?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:35](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L35)

The tags for this item
