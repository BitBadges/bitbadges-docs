---
description: "T extends NumberType"
---

# Interface: iDeveloperAppDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1661](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1661)

## Extends

- [`Doc`](/sdk/reference/interfaces/doc)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L13)

A unique stringified document ID

#### Inherited from

[`Doc`](/sdk/reference/interfaces/doc).[`_docId`](/sdk/reference/interfaces/doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L16)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`Doc`](/sdk/reference/interfaces/doc).[`_id`](/sdk/reference/interfaces/doc#_id)

***

### clientId

> **clientId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1673](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1673)

The client ID of the app

***

### clientSecret

> **clientSecret**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1675](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1675)

The client secret of the app

***

### createdAt?

> `optional` **createdAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1681](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1681)

The time the app was created

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1663](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1663)

Creator of the app

***

### description

> **description**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1669](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1669)

The description of the app

***

### image

> **image**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1671](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1671)

The image of the app

***

### lastUpdated?

> `optional` **lastUpdated?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1679](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1679)

The last updated timestamp

***

### managedBy

> **managedBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1665](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1665)

The BitBadges address of the user who is currently managing this

***

### name

> **name**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1667](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1667)

The name of the app

***

### redirectUris

> **redirectUris**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1677](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1677)

The redirect URI of the app
