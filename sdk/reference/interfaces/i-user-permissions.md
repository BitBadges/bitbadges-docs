---
description: "T extends NumberType"
---

# Interface: iUserPermissions\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:7](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L7)

## Extended by

- [`iUserPermissionsWithDetails`](/sdk/reference/interfaces/i-user-permissions-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### canUpdateAutoApproveAllIncomingTransfers

> **canUpdateAutoApproveAllIncomingTransfers**: [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L17)

The permissions for updating auto-approving all incoming transfers. If auto-approve is enabled, then the user will be approved by default for all incoming transfers.

***

### canUpdateAutoApproveSelfInitiatedIncomingTransfers

> **canUpdateAutoApproveSelfInitiatedIncomingTransfers**: [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:15](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L15)

The permissions for updating auto-approving self-initiated incoming transfers. If auto-approve is enabled, then the user will be approved by default for all incoming transfers that are self-initiated.

***

### canUpdateAutoApproveSelfInitiatedOutgoingTransfers

> **canUpdateAutoApproveSelfInitiatedOutgoingTransfers**: [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L13)

The permissions for updating auto-approving self-initiated outgoing transfers. If auto-approve is enabled, then the user will be approved by default for all outgoing transfers that are self-initiated.

***

### canUpdateIncomingApprovals

> **canUpdateIncomingApprovals**: [`iUserIncomingApprovalPermission`](/sdk/reference/interfaces/i-user-incoming-approval-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:11](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L11)

The list of permissions for updating approved incoming transfers.

***

### canUpdateOutgoingApprovals

> **canUpdateOutgoingApprovals**: [`iUserOutgoingApprovalPermission`](/sdk/reference/interfaces/i-user-outgoing-approval-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:9](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L9)

The list of permissions for updating approved outgoing transfers.
