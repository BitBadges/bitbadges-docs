---
description: "T extends NumberType"
---

# Interface: iReviewDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:142](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L142)

## Extends

- [`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L13)

A unique stringified document ID

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`_docId`](/sdk/reference/interfaces/i-activity-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L16)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`_id`](/sdk/reference/interfaces/i-activity-doc#_id)

***

### \_notificationsHandled?

> `optional` **\_notificationsHandled?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:134](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L134)

Whether or not the notifications have been handled by the indexer or not.

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`_notificationsHandled`](/sdk/reference/interfaces/i-activity-doc#_notificationshandled)

***

### block

> **block**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:132](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L132)

The block number of the activity.

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`block`](/sdk/reference/interfaces/i-activity-doc#block)

***

### collectionId?

> `optional` **collectionId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:150](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L150)

The collection ID of the collection that was reviewed. Only applicable to collection reviews.

***

### from

> **from**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:148](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L148)

The user who gave the review.

***

### private?

> `optional` **private?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:136](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L136)

Only for private purposes?

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`private`](/sdk/reference/interfaces/i-activity-doc#private)

***

### review

> **review**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:144](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L144)

The review text (max 2048 characters).

***

### reviewedAddress?

> `optional` **reviewedAddress?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L152)

The BitBadges address of the user who the review is for. Only applicable to user reviews.

***

### stars

> **stars**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L146)

The number of stars given (1-5).

***

### timestamp

> **timestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:130](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L130)

The timestamp of the activity.

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`timestamp`](/sdk/reference/interfaces/i-activity-doc#timestamp)
