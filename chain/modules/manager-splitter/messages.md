---
description: "x/managersplitter messages (create, update, delete, execute, update params) and the three queries, with fields, permission checks, and JSON examples."
---

# x/managersplitter messages and queries

Four messages are signed by the splitter's admin or an approved executor; `MsgUpdateParams` is signed by the governance authority. Type URLs use the `managersplitter` proto package, for example `/managersplitter.MsgCreateManagerSplitter`.

| Message | Signer | Purpose |
| --- | --- | --- |
| [MsgCreateManagerSplitter](#msgcreatemanagersplitter) | `admin` | Create a splitter and get its address |
| [MsgUpdateManagerSplitter](#msgupdatemanagersplitter) | `admin` | Replace the permission set |
| [MsgDeleteManagerSplitter](#msgdeletemanagersplitter) | `admin` | Delete a splitter |
| [MsgExecuteUniversalUpdateCollection](#msgexecuteuniversalupdatecollection) | `executor` | Run a collection update through the splitter |
| [MsgUpdateParams](#msgupdateparams) | `authority` | Governance: set module params |

## MsgCreateManagerSplitter

Creates a splitter with the given permissions and returns its module-derived address.

```json
{
  "@type": "/managersplitter.MsgCreateManagerSplitter",
  "admin": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "permissions": {
    "canUpdateCollectionMetadata": {
      "approvedAddresses": ["bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"]
    },
    "canUpdateTokenMetadata": {
      "approvedAddresses": ["bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf"]
    },
    "canUpdateValidTokenIds": {
      "approvedAddresses": []
    }
  }
}
```

```proto
message MsgCreateManagerSplitter {
  option (cosmos.msg.v1.signer) = "admin";
  option (amino.name) = "managersplitter/CreateManagerSplitter";

  string admin = 1;
  ManagerSplitterPermissions permissions = 2;
}

message MsgCreateManagerSplitterResponse {
  string address = 1;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin` | string | yes | Permanent admin. Full control, can always execute every permission, can update and delete the splitter, cannot be changed. Valid Bech32. |
| `permissions` | `ManagerSplitterPermissions` | no | Per-permission approved address lists. Nil creates an empty set: everything denied except for the admin. |

Each `PermissionCriteria.approvedAddresses` is a Bech32 list. An empty list means only the admin can execute that permission.

Behavior:

1. Validate that `admin` is a valid Bech32 address.
2. Check that the derived address does not already exist (a safety check).
3. Store the splitter with the next available ID, the admin, and the permissions (or empty).
4. Increment the next splitter ID.

Response `address` is deterministic from the ID, derived as `address.Module("managersplitter", []byte(id.String()))`, and is the value to set as a collection manager. Splitter ID 1 is `bb139jr5akhnvum2t2qgg3tmku9ty6a3lxey425sz8auwgzn5j2u5rsyxffly`.

## MsgUpdateManagerSplitter

Replaces the whole permission set. Only the admin can send it.

```json
{
  "@type": "/managersplitter.MsgUpdateManagerSplitter",
  "admin": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "address": "bb139jr5akhnvum2t2qgg3tmku9ty6a3lxey425sz8auwgzn5j2u5rsyxffly",
  "permissions": {
    "canUpdateCollectionMetadata": {
      "approvedAddresses": ["bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue", "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf"]
    },
    "canUpdateTokenMetadata": {
      "approvedAddresses": ["bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf"]
    }
  }
}
```

```proto
message MsgUpdateManagerSplitter {
  option (cosmos.msg.v1.signer) = "admin";
  option (amino.name) = "managersplitter/UpdateManagerSplitter";

  string admin = 1;
  string address = 2;
  ManagerSplitterPermissions permissions = 3;
}

message MsgUpdateManagerSplitterResponse {}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin` | string | yes | Must match the stored admin |
| `address` | string | yes | Splitter address returned at creation |
| `permissions` | `ManagerSplitterPermissions` | yes | New full permission set |

Behavior: the update is a full replacement. Any permission not present in the new set is removed and therefore denied by default. A mismatched `admin` fails with an unauthorized error. The response is empty on success.

## MsgDeleteManagerSplitter

Deletes a splitter. Only the admin can send it.

```json
{
  "@type": "/managersplitter.MsgDeleteManagerSplitter",
  "admin": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "address": "bb139jr5akhnvum2t2qgg3tmku9ty6a3lxey425sz8auwgzn5j2u5rsyxffly"
}
```

```proto
message MsgDeleteManagerSplitter {
  option (cosmos.msg.v1.signer) = "admin";
  option (amino.name) = "managersplitter/DeleteManagerSplitter";

  string admin = 1;
  string address = 2;
}

message MsgDeleteManagerSplitterResponse {}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin` | string | yes | Must match the stored admin |
| `address` | string | yes | Splitter to delete |

Behavior: a mismatched `admin` fails with an unauthorized error. Deleting a splitter that is still set as a collection manager leaves that collection with a manager address nobody can act through; update the collection manager first.

## MsgExecuteUniversalUpdateCollection

Runs a `MsgUniversalUpdateCollection` through the splitter. The module checks every permission the inner message needs, then executes it with the splitter address as creator and manager.

```json
{
  "@type": "/managersplitter.MsgExecuteUniversalUpdateCollection",
  "executor": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  "managerSplitterAddress": "bb139jr5akhnvum2t2qgg3tmku9ty6a3lxey425sz8auwgzn5j2u5rsyxffly",
  "universalUpdateCollectionMsg": {
    "creator": "bb139jr5akhnvum2t2qgg3tmku9ty6a3lxey425sz8auwgzn5j2u5rsyxffly",
    "collectionId": "1",
    "updateCollectionMetadata": true,
    "collectionMetadata": { "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json", "customData": "" }
  }
}
```

```proto
message MsgExecuteUniversalUpdateCollection {
  option (cosmos.msg.v1.signer) = "executor";
  option (amino.name) = "managersplitter/ExecuteUniversalUpdateCollection";

  string executor = 1;
  string managerSplitterAddress = 2;
  tokenization.MsgUniversalUpdateCollection universalUpdateCollectionMsg = 3;
}

message MsgExecuteUniversalUpdateCollectionResponse {
  string collectionId = 1;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `executor` | string | yes | The admin, or an address approved for every permission the update needs |
| `managerSplitterAddress` | string | yes | Splitter to execute through |
| `universalUpdateCollectionMsg` | `MsgUniversalUpdateCollection` | yes | The update. Set only the fields you may update; leave every other `update*` flag `false`. |

Permission checks, by update flag on the inner message:

| Inner field | Permission required |
| --- | --- |
| `updateValidTokenIds` | `canUpdateValidTokenIds` |
| `updateCollectionPermissions` | admin only, cannot be delegated |
| `updateManager` | `canUpdateManager` |
| `updateCollectionMetadata` | `canUpdateCollectionMetadata` |
| `updateTokenMetadata` | `canUpdateTokenMetadata` |
| `updateCustomData` | `canUpdateCustomData` |
| `updateCollectionApprovals` | `canUpdateCollectionApprovals` |
| `updateStandards` | `canUpdateStandards` |
| `updateIsArchived` | `canArchiveCollection` |
| `cosmosCoinWrapperPathsToAdd` (non-empty) | `canAddMoreCosmosCoinWrapperPaths` |
| `aliasPathsToAdd` (non-empty) | `canAddMoreAliasPaths` |

Behavior:

1. Validate `executor` and `managerSplitterAddress` as Bech32.
2. Load the splitter; fail if it does not exist.
3. For each flag above, check that the executor is the admin or is in that permission's `approvedAddresses`. Any missing permission fails the whole transaction with a permission denied error.
4. Validate the inner message and execute it through `x/tokenization` with the splitter address as creator.
5. Return the updated `collectionId`.

The collection's own `collectionPermissions` still apply after the splitter check; a permanently forbidden action fails in `x/tokenization` regardless of splitter approval.

## MsgUpdateParams

Governance message that sets module params. The `Params` message currently has no fields, so this exists for forward compatibility.

```json
{
  "@type": "/managersplitter.MsgUpdateParams",
  "authority": "bb10d07y265gmmuvt4z0w9aw880jnsr700jelmk2z",
  "params": {}
}
```

```proto
message MsgUpdateParams {
  option (cosmos.msg.v1.signer) = "authority";
  option (amino.name) = "managersplitter/MsgUpdateParams";

  string authority = 1;
  Params params = 2;   // all parameters must be supplied
}

message MsgUpdateParamsResponse {}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authority` | string | yes | Module authority; defaults to the `x/gov` module account |
| `params` | `Params` | yes | Full parameter set (currently empty) |

## Queries

| Query | LCD path | Returns |
| --- | --- | --- |
| `Params` | `GET /bitbadges/bitbadgeschain/managersplitter/params` | Module params (empty object) |
| `ManagerSplitter` | `GET /bitbadges/bitbadgeschain/managersplitter/{address}` | One splitter by address |
| `AllManagerSplitters` | `GET /bitbadges/bitbadgeschain/managersplitter` | Paginated list |

```bash
curl "https://lcd.bitbadges.io/bitbadges/bitbadgeschain/managersplitter?pagination.limit=10"
```

```json
{"managerSplitters":[],"pagination":{"next_key":null,"total":"0"}}
```

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/managersplitter/bb139jr5akhnvum2t2qgg3tmku9ty6a3lxey425sz8auwgzn5j2u5rsyxffly
```

```json
{
  "managerSplitter": {
    "address": "bb139jr5akhnvum2t2qgg3tmku9ty6a3lxey425sz8auwgzn5j2u5rsyxffly",
    "admin": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "permissions": {
      "canUpdateCollectionMetadata": { "approvedAddresses": ["bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"] }
    }
  }
}
```

`AllManagerSplitters` takes `pagination` (`PageRequest`) and returns `managerSplitters` plus `pagination`. `ManagerSplitter` takes `address`.

## Related

- [x/managersplitter](README.md)
- [MsgUniversalUpdateCollection](../../../token-standard/messages/msg-universal-update-collection.md)
- [Permissions](../../../token-standard/concepts/permissions.md)
