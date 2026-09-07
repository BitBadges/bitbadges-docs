---
description: "DynamicStoreValue stores a boolean value for a specific address in a dynamic store. This allows the creator to set true/false values per address that can be…"
---

# Interface: iDynamicStoreValue\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:921](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L921)

DynamicStoreValue stores a boolean value for a specific address in a dynamic store.
This allows the creator to set true/false values per address that can be checked during approval.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:930](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L930)

The address for which this value is stored.

***

### storeId

> **storeId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:925](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L925)

The unique identifier for this dynamic store.

***

### value

> **value**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:935](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L935)

The boolean value (true/false).
