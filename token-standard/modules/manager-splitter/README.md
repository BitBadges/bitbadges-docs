---
description: "x/managersplitter: a module-derived proxy address that acts as collection manager while each permission is delegated to approved addresses."
---

# x/managersplitter

A manager splitter is a permissioned proxy for collection management. Its module-derived address is set as the collection's manager, and an admin decides which addresses may exercise which manager permission. Use it when one address should be able to update metadata but not delete the collection, or when several teams share management of one collection.

```json
{
  "@type": "/managersplitter.MsgCreateManagerSplitter",
  "admin": "bb1admin...",
  "permissions": {
    "canUpdateCollectionMetadata": { "approvedAddresses": ["bb1marketing..."] },
    "canUpdateTokenMetadata": { "approvedAddresses": ["bb1marketing...", "bb1ops..."] },
    "canUpdateCollectionApprovals": { "approvedAddresses": ["bb1ops..."] }
  }
}
```

The response returns the splitter's `address`. Set that address as the collection's `manager`, and from then on route every collection update through `MsgExecuteUniversalUpdateCollection`.

## Shape

| Field | Type | Description |
| --- | --- | --- |
| `address` | string | Module address derived from the module name and the splitter ID (`ModuleAddress(ModuleName, ID_bytes)`). Deterministic. |
| `admin` | string | Permanent admin. Full control, always passes every permission check, cannot be changed after creation. |
| `permissions` | `ManagerSplitterPermissions` | One `PermissionCriteria` per collection permission |

```proto
message ManagerSplitter {
  string address = 1;
  string admin = 2;
  ManagerSplitterPermissions permissions = 3;
}

message PermissionCriteria {
  repeated string approvedAddresses = 1;
}

message ManagerSplitterPermissions {
  PermissionCriteria canDeleteCollection = 1;
  PermissionCriteria canArchiveCollection = 2;
  PermissionCriteria canUpdateStandards = 3;
  PermissionCriteria canUpdateCustomData = 4;
  PermissionCriteria canUpdateManager = 5;
  PermissionCriteria canUpdateCollectionMetadata = 6;
  PermissionCriteria canUpdateValidTokenIds = 7;
  PermissionCriteria canUpdateTokenMetadata = 8;
  PermissionCriteria canUpdateCollectionApprovals = 9;
  PermissionCriteria canAddMoreAliasPaths = 10;
  PermissionCriteria canAddMoreCosmosCoinWrapperPaths = 11;
}
```

The permission set mirrors the collection's `CollectionPermissions` (see [Permissions](../../concepts/permissions.md)). Each entry maps a permission to the addresses allowed to exercise it. A permission with no criteria is denied to everyone except the admin. The only supported criteria type today is an approved-address list.

## How it works

1. The admin creates a splitter and receives its address.
2. The admin (or the current manager) sets that address as the collection manager with `MsgSetManager` or `MsgUniversalUpdateCollection`.
3. An approved address submits `MsgExecuteUniversalUpdateCollection` with the inner `MsgUniversalUpdateCollection`. The module checks one permission per update flag that is set, then executes the inner message with the splitter address as creator.
4. The admin adjusts approved addresses with `MsgUpdateManagerSplitter` and can delete the splitter with `MsgDeleteManagerSplitter`.

Rules:

- Only the admin may create, update, or delete a splitter.
- Every action checks permissions before execution; checks and execution are atomic.
- `updateCollectionPermissions` is admin-only and can never be delegated.
- All addresses are validated as Bech32 before use.
- One admin per splitter, immutable.
- Only `MsgUniversalUpdateCollection` can be executed through a splitter.
- No permission inheritance: each permission is granted separately.

Use cases: multi-party management, role-based access, delegating a single task (for example, only deletion) to a trusted address, and governance-controlled collections.

## Alternatives

A splitter is one option beyond a single manager address. Others: the Cosmos SDK `x/group` module (multisigs, DAOs, voting), external DAO tooling, or a custom EVM contract as the manager.

## Reference

- [Messages and queries](messages.md): the five `Msg` types and three queries.
- Proto: `proto/managersplitter/` in [bitbadgeschain](https://github.com/bitbadges/bitbadgeschain/tree/master/proto/managersplitter).

## Related

- [Permissions](../../concepts/permissions.md)
- [MsgUniversalUpdateCollection](../../messages/msg-universal-update-collection.md)
- [MsgSetManager](../../messages/msg-set-manager.md)
