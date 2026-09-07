---
description: "T extends NumberType"
---

# Interface: iClaimActivityDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:212](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L212)

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

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:220](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L220)

The BitBadges address of the user who attempted the claim

***

### block

> **block**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:132](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L132)

The block number of the activity.

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`block`](/sdk/reference/interfaces/i-activity-doc#block)

***

### claimAttemptId

> **claimAttemptId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:218](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L218)

The claim attempt ID of the claim attempt

***

### claimId

> **claimId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:216](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L216)

The claim ID of the claim attempt

***

### claimType?

> `optional` **claimType?**: `"collection"` \| `"standalone"` \| `"list"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:222](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L222)

The claim type of the claim attempt

***

### private?

> `optional` **private?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:136](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L136)

Only for private purposes?

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`private`](/sdk/reference/interfaces/i-activity-doc#private)

***

### success

> **success**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:214](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L214)

Whether the claim attempt was successful or not

***

### timestamp

> **timestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:130](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L130)

The timestamp of the activity.

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`timestamp`](/sdk/reference/interfaces/i-activity-doc#timestamp)
