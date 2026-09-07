---
description: "T extends NumberType"
---

# Interface: iUserPermissionsWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:175](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L175)

## Extends

- [`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### canUpdateAutoApproveAllIncomingTransfers

> **canUpdateAutoApproveAllIncomingTransfers**: [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L17)

The permissions for updating auto-approving all incoming transfers. If auto-approve is enabled, then the user will be approved by default for all incoming transfers.

#### Inherited from

[`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions).[`canUpdateAutoApproveAllIncomingTransfers`](/sdk/reference/interfaces/i-user-permissions#canupdateautoapproveallincomingtransfers)

***

### canUpdateAutoApproveSelfInitiatedIncomingTransfers

> **canUpdateAutoApproveSelfInitiatedIncomingTransfers**: [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:15](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L15)

The permissions for updating auto-approving self-initiated incoming transfers. If auto-approve is enabled, then the user will be approved by default for all incoming transfers that are self-initiated.

#### Inherited from

[`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions).[`canUpdateAutoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/interfaces/i-user-permissions#canupdateautoapproveselfinitiatedincomingtransfers)

***

### canUpdateAutoApproveSelfInitiatedOutgoingTransfers

> **canUpdateAutoApproveSelfInitiatedOutgoingTransfers**: [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L13)

The permissions for updating auto-approving self-initiated outgoing transfers. If auto-approve is enabled, then the user will be approved by default for all outgoing transfers that are self-initiated.

#### Inherited from

[`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions).[`canUpdateAutoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/interfaces/i-user-permissions#canupdateautoapproveselfinitiatedoutgoingtransfers)

***

### canUpdateIncomingApprovals

> **canUpdateIncomingApprovals**: [`iUserIncomingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:176](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L176)

The list of permissions for updating approved incoming transfers.

#### Overrides

[`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions).[`canUpdateIncomingApprovals`](/sdk/reference/interfaces/i-user-permissions#canupdateincomingapprovals)

***

### canUpdateOutgoingApprovals

> **canUpdateOutgoingApprovals**: [`iUserOutgoingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:177](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L177)

The list of permissions for updating approved outgoing transfers.

#### Overrides

[`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions).[`canUpdateOutgoingApprovals`](/sdk/reference/interfaces/i-user-permissions#canupdateoutgoingapprovals)
