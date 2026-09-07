---
description: "This stores everythign about a user's balances for a specific collection ID. This includes their balances, incoming approvals, outgoing approvals, and…"
---

# Interface: iUserBalanceStore\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L13)

This stores everythign about a user's balances for a specific collection ID.
This includes their balances, incoming approvals, outgoing approvals, and permissions.

## Extended by

- [`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc)
- [`iUserBalanceStoreWithDetails`](/sdk/reference/interfaces/i-user-balance-store-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### autoApproveAllIncomingTransfers

> **autoApproveAllIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L27)

Whether the user's all incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

***

### autoApproveSelfInitiatedIncomingTransfers

> **autoApproveSelfInitiatedIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L25)

Whether the user's self-initiated incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

***

### autoApproveSelfInitiatedOutgoingTransfers

> **autoApproveSelfInitiatedOutgoingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L23)

Whether the user's self-initiated outgoing transfers are auto-approved. If not, they must be explicitly approved using the outgoing approvals.

***

### balances

> **balances**: [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:15](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L15)

The user's balances.

***

### incomingApprovals

> **incomingApprovals**: [`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L17)

The user's incoming approvals.

***

### outgoingApprovals

> **outgoingApprovals**: [`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L19)

The user's outgoing approvals.

***

### userPermissions

> **userPermissions**: [`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L21)

The user's permissions.
