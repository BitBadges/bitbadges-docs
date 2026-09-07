---
description: "This stores everythign about a user's balances for a specific collection ID. This includes their balances, incoming approvals, outgoing approvals, and…"
---

# Interface: iUserBalanceStoreWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L34)

This stores everythign about a user's balances for a specific collection ID.
This includes their balances, incoming approvals, outgoing approvals, and permissions.

## Extends

- [`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### autoApproveAllIncomingTransfers

> **autoApproveAllIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L41)

Whether the user's all incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Overrides

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`autoApproveAllIncomingTransfers`](/sdk/reference/interfaces/i-user-balance-store#autoapproveallincomingtransfers)

***

### autoApproveSelfInitiatedIncomingTransfers

> **autoApproveSelfInitiatedIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L40)

Whether the user's self-initiated incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Overrides

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`autoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/interfaces/i-user-balance-store#autoapproveselfinitiatedincomingtransfers)

***

### autoApproveSelfInitiatedOutgoingTransfers

> **autoApproveSelfInitiatedOutgoingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:39](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L39)

Whether the user's self-initiated outgoing transfers are auto-approved. If not, they must be explicitly approved using the outgoing approvals.

#### Overrides

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`autoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/interfaces/i-user-balance-store#autoapproveselfinitiatedoutgoingtransfers)

***

### balances

> **balances**: [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L38)

The user's balances.

#### Overrides

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`balances`](/sdk/reference/interfaces/i-user-balance-store#balances)

***

### incomingApprovals

> **incomingApprovals**: [`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L36)

The user's incoming approvals.

#### Overrides

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`incomingApprovals`](/sdk/reference/interfaces/i-user-balance-store#incomingapprovals)

***

### outgoingApprovals

> **outgoingApprovals**: [`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:35](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L35)

The user's outgoing approvals.

#### Overrides

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`outgoingApprovals`](/sdk/reference/interfaces/i-user-balance-store#outgoingapprovals)

***

### userPermissions

> **userPermissions**: [`iUserPermissionsWithDetails`](/sdk/reference/interfaces/i-user-permissions-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L37)

The user's permissions.

#### Overrides

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`userPermissions`](/sdk/reference/interfaces/i-user-balance-store#userpermissions)
