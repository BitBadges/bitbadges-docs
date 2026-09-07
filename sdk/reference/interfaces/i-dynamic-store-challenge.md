---
description: "T extends NumberType"
---

# Interface: iDynamicStoreChallenge\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:18](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L18)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### ownershipCheckParty?

> `optional` **ownershipCheckParty?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L22)

The party to check ownership for. Options are "initiator", "sender", "recipient", or any valid bb1 address. If a valid bb1 address is provided, ownership will be checked for that specific address. This enables use cases like halt tokens where ownership is checked for an arbitrary address (e.g., halt token owner). Defaults to "initiator" if empty or if the value is not a recognized option or valid bb1 address.

***

### storeId

> **storeId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L20)

The ID of the dynamic store to check.
