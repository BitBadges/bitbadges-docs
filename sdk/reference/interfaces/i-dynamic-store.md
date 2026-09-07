---
description: "DynamicStore is a flexible storage object that can store arbitrary data. It is identified by a unique ID assigned by the blockchain, which is a uint64 that…"
---

# Interface: iDynamicStore\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:882](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L882)

DynamicStore is a flexible storage object that can store arbitrary data.
It is identified by a unique ID assigned by the blockchain, which is a uint64 that increments.
Dynamic stores are created by users and can only be updated or deleted by their creator.
They provide a way to store custom data on-chain with proper access control.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:891](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L891)

The address of the creator of this dynamic store.

***

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:912](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L912)

Custom data field for storing arbitrary data associated with this dynamic store.

***

### defaultValue

> **defaultValue**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:896](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L896)

The default value for uninitialized addresses (true/false).

***

### globalEnabled

> **globalEnabled**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:902](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L902)

Global kill switch state (defaults to true on creation, can be toggled via UpdateDynamicStore).
When false, all approvals using this store via DynamicStoreChallenge will fail immediately.

***

### storeId

> **storeId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:886](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L886)

The unique identifier for this dynamic store. This is assigned by the blockchain.

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:907](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L907)

URI for additional metadata or resources associated with this dynamic store.
