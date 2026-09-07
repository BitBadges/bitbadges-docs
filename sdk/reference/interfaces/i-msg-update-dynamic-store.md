---
description: "T extends NumberType"
---

# Interface: iMsgUpdateDynamicStore\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:190](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L190)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:192](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L192)

The creator of the transaction.

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:202](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L202)

Custom data field for storing arbitrary data associated with this dynamic store.

***

### defaultValue?

> `optional` **defaultValue?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:196](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L196)

The new default value for uninitialized addresses (true/false).

***

### globalEnabled?

> `optional` **globalEnabled?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:198](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L198)

The global kill switch state (true = enabled, false = disabled/halted). Callers should query the current value first if they want to keep it unchanged.

***

### storeId

> **storeId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:194](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L194)

The ID of the dynamic store to update.

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:200](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L200)

URI for additional metadata or resources associated with this dynamic store.
