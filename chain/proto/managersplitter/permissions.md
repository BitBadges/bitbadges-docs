---
description: "Generated schema for managersplitter/permissions.proto: 2 messages in the x/managersplitter module."
---

# managersplitter/permissions.proto

Proto package `managersplitter`, part of the [x/managersplitter](README.md) module. It declares 2 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/managersplitter/permissions.proto).

## Messages

### ManagerSplitterPermissions

ManagerSplitterPermissions mirrors the CollectionPermissions structure

but maps each permission to criteria for execution.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `canDeleteCollection` | 1 | [`PermissionCriteria`](#permissioncriteria) | singular | Permissions related to deleting the collection. |
| `canArchiveCollection` | 2 | [`PermissionCriteria`](#permissioncriteria) | singular | Permissions related to archiving the collection. |
| `canUpdateStandards` | 3 | [`PermissionCriteria`](#permissioncriteria) | singular | Permissions related to updating standards for the collection. |
| `canUpdateCustomData` | 4 | [`PermissionCriteria`](#permissioncriteria) | singular | Permissions related to updating custom data for the collection. |
| `canUpdateManager` | 5 | [`PermissionCriteria`](#permissioncriteria) | singular | Permissions related to updating the collection's manager. |
| `canUpdateCollectionMetadata` | 6 | [`PermissionCriteria`](#permissioncriteria) | singular | Permissions related to updating the metadata of the collection. |
| `canUpdateValidTokenIds` | 7 | [`PermissionCriteria`](#permissioncriteria) | singular | Permissions related to creating more tokens for the collection. |
| `canUpdateTokenMetadata` | 8 | [`PermissionCriteria`](#permissioncriteria) | singular | Permissions related to updating token metadata for specific tokens. |
| `canUpdateCollectionApprovals` | 9 | [`PermissionCriteria`](#permissioncriteria) | singular | Permissions related to updating collection approvals. |
| `canAddMoreAliasPaths` | 10 | [`PermissionCriteria`](#permissioncriteria) | singular | Permissions related to adding more alias paths to the collection. |
| `canAddMoreCosmosCoinWrapperPaths` | 11 | [`PermissionCriteria`](#permissioncriteria) | singular | Permissions related to adding more cosmos coin wrapper paths to the collection. |

### PermissionCriteria

PermissionCriteria defines the criteria for executing a permission.

Currently supports approved addresses (whitelist).

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `approvedAddresses` | 1 | `string` | repeated | List of approved addresses that can execute this permission. |
