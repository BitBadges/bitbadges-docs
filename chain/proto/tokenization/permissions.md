---
description: "Generated schema for tokenization/permissions.proto: 7 messages in the x/tokenization module."
---

# tokenization/permissions.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 7 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/permissions.proto).

## Messages

### ActionPermission

ActionPermission defines the permissions for performing an action.

This is simple and straightforward as the only thing we need to check is the permitted/forbidden times.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `permanentlyPermittedTimes` | 1 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the times when this permission is permitted. Can not overlap with permanentlyForbiddenTimes. |
| `permanentlyForbiddenTimes` | 2 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the times when this permission is forbidden. Can not overlap with permanentlyPermittedTimes. |

### CollectionApprovalPermission

CollectionApprovalPermission defines what collection approved transfers can be updated vs. are locked.

Each transfer is broken down to a (from, to, initiatedBy, transferTime, tokenId) tuple. For a transfer to match, we need to match ALL of the fields in the combination. These are determined by the fromListId, toListId, initiatedByListId, transferTimes, tokenIds fields. AddressLists are used for (from, to, initiatedBy) which are a permanent list of addresses identified by an ID (see AddressLists).

permanentlyPermitted/ForbiddenTimes: when can the manager execute this permission?

Ex: Let's say we are updating the transferability for the transfer tuple ("AllWithoutMint", "AllWithoutMint", "AllWithoutMint", 10, 1000). We would check to find the FIRST CollectionApprovalPermission that matches this combination. If we find a match, we would check the permitted/forbidden times to see if we can execute this permission (default is ALLOWED).

Ex: So if you wanted to freeze the transferability to enforce that token ID 1 will always be transferable, you could set the combination ("AllWithoutMint", "AllWithoutMint", "AllWithoutMint", "All Transfer Times", 1) to always be forbidden.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `fromListId` | 1 | `string` | singular | Identifier for the sender list. |
| `toListId` | 2 | `string` | singular | Identifier for the recipient list. |
| `initiatedByListId` | 3 | `string` | singular | Identifier for the initiator list (who is approved?). |
| `transferTimes` | 4 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the times when the transfer can occur. |
| `tokenIds` | 5 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the token IDs involved in the transfer. |
| `ownershipTimes` | 6 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the ownership times for the tokens in the transfer. |
| `approvalId` | 7 | `string` | singular | Identifier for the approvalId. You can use "All" or "!approvalId" for shorthand. If you use "All", this approval will match to all approvalIds. If you use "!approvalId", this approval will match to all approvalIds except for approvalId. If you use "approvalId", this approval will match to only the specified approvalId and fail on all others. |
| `permanentlyPermittedTimes` | 8 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the times when this permission is permitted. Can not overlap with permanentlyForbiddenTimes. |
| `permanentlyForbiddenTimes` | 9 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the times when this permission is forbidden. Can not overlap with permanentlyPermittedTimes. |

### CollectionPermissions

CollectionPermissions defines the permissions for the collection (i.e., what the manager can and cannot do).

There are three types of permissions for a collection: ActionPermission, TokenIdsActionPermission, and CollectionApprovalPermission.

The permission type allows fine-grained access control for each action. - ActionPermission: defines when the manager can perform an action or update a field. - TokenIdsActionPermission: defines when the manager can perform an action for specific tokens - CollectionApprovalPermission: defines when the manager can update the transferability of the collection and what transfers can be updated vs. locked.

Note there are a few different times here which could get confusing: - permanentlyPermitted/ForbiddenTimes - the times that a permission can be performed - transferTimes - the times that a transfer occurs - ownershipTimes - the times when a token is owned by a user

The permitted/permanentlyForbiddenTimes are used to determine when a permission can be executed. Once a time is set to be permitted or forbidden, it is PERMANENT and cannot be changed. If a time is not set to be permitted or forbidden, it is considered NEUTRAL and can be updated but is ALLOWED by default.

IMPORTANT: We take first-match only for the permissions. This means that if you forbid time T in array index 0 and permit time T in index 1, we will only check the first permission (forbid time T) and not the second permission (permit time T).

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `canDeleteCollection` | 1 | [`ActionPermission`](#actionpermission) | repeated | Permissions related to deleting the collection. |
| `canArchiveCollection` | 2 | [`ActionPermission`](#actionpermission) | repeated | Permissions related to archiving the collection. |
| `canUpdateStandards` | 3 | [`ActionPermission`](#actionpermission) | repeated | Permissions related to updating standards for the collection. |
| `canUpdateCustomData` | 4 | [`ActionPermission`](#actionpermission) | repeated | Permissions related to updating custom data for the collection. |
| `canUpdateManager` | 5 | [`ActionPermission`](#actionpermission) | repeated | Permissions related to updating the collection's manager. |
| `canUpdateCollectionMetadata` | 6 | [`ActionPermission`](#actionpermission) | repeated | Permissions related to updating the metadata of the collection. |
| `canUpdateValidTokenIds` | 7 | [`TokenIdsActionPermission`](#tokenidsactionpermission) | repeated | Permissions related to creating more tokens for the collection. |
| `canUpdateTokenMetadata` | 8 | [`TokenIdsActionPermission`](#tokenidsactionpermission) | repeated | Permissions related to updating token metadata for specific tokens. |
| `canUpdateCollectionApprovals` | 9 | [`CollectionApprovalPermission`](#collectionapprovalpermission) | repeated | Permissions related to updating collection approvals. |
| `canAddMoreAliasPaths` | 10 | [`ActionPermission`](#actionpermission) | repeated | Permissions related to adding more alias paths to the collection. |
| `canAddMoreCosmosCoinWrapperPaths` | 11 | [`ActionPermission`](#actionpermission) | repeated | Permissions related to adding more cosmos coin wrapper paths to the collection. |

### TokenIdsActionPermission

TokenIdsActionPermission defines the permissions for performing an action for specific tokens. Currently, this is only used for creating new tokens.

Ex: If you want to lock the ability to create new tokens for tokenIds [1,2] at ownershipTimes 1/1/2020 - 1/1/2021, you could set the combination (tokenIds: [1,2], ownershipTimes: [1/1/2020 - 1/1/2021]) to always be forbidden.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `tokenIds` | 1 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the token IDs involved in the transfer. |
| `permanentlyPermittedTimes` | 2 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the times when this permission is permitted. Can not overlap with permanentlyForbiddenTimes. |
| `permanentlyForbiddenTimes` | 3 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the times when this permission is forbidden. Can not overlap with permanentlyPermittedTimes. |

### UserIncomingApprovalPermission

UserIncomingApprovalPermission defines the permissions for updating the user's approved incoming transfers.

See CollectionApprovalPermission for more details. This is equivalent without the toListId field because that is always the user.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `fromListId` | 1 | `string` | singular | Identifier for the sender list. |
| `initiatedByListId` | 2 | `string` | singular | Identifier for the initiator list (who is approved?). |
| `transferTimes` | 3 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the times when the transfer can occur. |
| `tokenIds` | 4 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the token IDs involved in the transfer. |
| `ownershipTimes` | 5 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the ownership times for the tokens in the transfer. |
| `approvalId` | 6 | `string` | singular | Identifier for the approvalId. You can use "All" or "!approvalId" for shorthand. If you use "All", this approval will match to all approvalIds. If you use "!approvalId", this approval will match to all approvalIds except for approvalId. If you use "approvalId", this approval will match to only the specified approvalId and fail on all others. |
| `permanentlyPermittedTimes` | 7 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the times when this permission is permitted. Can not overlap with permanentlyForbiddenTimes. |
| `permanentlyForbiddenTimes` | 8 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the times when this permission is forbidden. Can not overlap with permanentlyPermittedTimes. |

### UserOutgoingApprovalPermission

UserOutgoingApprovalPermission defines the permissions for updating the user's approved outgoing transfers.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `toListId` | 1 | `string` | singular | Identifier for the recipient list. |
| `initiatedByListId` | 2 | `string` | singular | Identifier for the initiator list (who is approved?). |
| `transferTimes` | 3 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the times when the transfer can occur. |
| `tokenIds` | 4 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the token IDs involved in the transfer. |
| `ownershipTimes` | 5 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the ownership times for the tokens in the transfer. |
| `approvalId` | 6 | `string` | singular | Identifier for the approvalId. You can use "All" or "!approvalId" for shorthand. If you use "All", this approval will match to all approvalIds. If you use "!approvalId", this approval will match to all approvalIds except for approvalId. If you use "approvalId", this approval will match to only the specified approvalId and fail on all others. |
| `permanentlyPermittedTimes` | 7 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the times when this permission is permitted. Can not overlap with permanentlyForbiddenTimes. |
| `permanentlyForbiddenTimes` | 8 | [`UintRange`](balances.md#uintrange) | repeated | Specifies the times when this permission is forbidden. Can not overlap with permanentlyPermittedTimes. |

### UserPermissions

UserPermissions defines the permissions for the user about their approvals (i.e., what the user can and cannot do).

See CollectionPermissions for more details on the different types of permissions.

canUpdateOutgoingApprovals and canUpdateOutgoingApprovals follow the same as the canUpdateCollectionApprovals in CollectionPermissions, but certain fields are removed because they are not relevant to the user.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `canUpdateOutgoingApprovals` | 1 | [`UserOutgoingApprovalPermission`](#useroutgoingapprovalpermission) | repeated | Permissions related to updating the user's approved outgoing transfers. |
| `canUpdateIncomingApprovals` | 2 | [`UserIncomingApprovalPermission`](#userincomingapprovalpermission) | repeated | Permissions related to updating the user's approved incoming transfers. |
| `canUpdateAutoApproveSelfInitiatedOutgoingTransfers` | 3 | [`ActionPermission`](#actionpermission) | repeated | Permissions related to updating auto-approval settings for self-initiated outgoing transfers (whether they are allowed by default). |
| `canUpdateAutoApproveSelfInitiatedIncomingTransfers` | 4 | [`ActionPermission`](#actionpermission) | repeated | Permissions related to updating auto-approval settings for self-initiated incoming transfers (whether they are allowed by default). |
| `canUpdateAutoApproveAllIncomingTransfers` | 5 | [`ActionPermission`](#actionpermission) | repeated | Permissions related to updating auto-approval settings for all incoming transfers (whether they are allowed by default). |
