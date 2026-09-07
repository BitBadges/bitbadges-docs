---
description: "T extends NumberType"
---

# Interface: iMsgSetCollectionApprovals\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:382](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L382)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### canUpdateCollectionApprovals

> **canUpdateCollectionApprovals**: [`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:390](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L390)

Permission to update collection approvals.

***

### collectionApprovals

> **collectionApprovals**: [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:388](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L388)

New collection approvals to set.

***

### collectionId

> **collectionId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:386](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L386)

The ID of the collection.

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:384](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L384)

The creator of the transaction.
