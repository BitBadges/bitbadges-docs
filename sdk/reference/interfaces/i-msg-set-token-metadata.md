---
description: "T extends NumberType"
---

# Interface: iMsgSetTokenMetadata\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:340](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L340)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### canUpdateTokenMetadata

> **canUpdateTokenMetadata**: [`iTokenIdsActionPermission`](/sdk/reference/interfaces/i-token-ids-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:348](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L348)

Permission to update token metadata.

***

### collectionId

> **collectionId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:344](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L344)

The ID of the collection.

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:342](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L342)

The creator of the transaction.

***

### tokenMetadata

> **tokenMetadata**: [`iTokenMetadata`](/sdk/reference/interfaces/i-token-metadata)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:346](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L346)

New token metadata to set.
