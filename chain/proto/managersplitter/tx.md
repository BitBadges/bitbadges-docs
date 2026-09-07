---
description: "Generated schema for managersplitter/tx.proto: 1 service, 12 messages in the x/managersplitter module."
---

# managersplitter/tx.proto

Proto package `managersplitter`, part of the [x/managersplitter](README.md) module. It declares 1 service, 12 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/managersplitter/tx.proto).

## Service Msg

Msg defines the Msg service.

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `UpdateParams` | [`MsgUpdateParams`](#msgupdateparams) | [`MsgUpdateParamsResponse`](#msgupdateparamsresponse) | none |   |
| `CreateManagerSplitter` | [`MsgCreateManagerSplitter`](#msgcreatemanagersplitter) | [`MsgCreateManagerSplitterResponse`](#msgcreatemanagersplitterresponse) | none |   |
| `UpdateManagerSplitter` | [`MsgUpdateManagerSplitter`](#msgupdatemanagersplitter) | [`MsgUpdateManagerSplitterResponse`](#msgupdatemanagersplitterresponse) | none |   |
| `DeleteManagerSplitter` | [`MsgDeleteManagerSplitter`](#msgdeletemanagersplitter) | [`MsgDeleteManagerSplitterResponse`](#msgdeletemanagersplitterresponse) | none |   |
| `ExecuteUniversalUpdateCollection` | [`MsgExecuteUniversalUpdateCollection`](#msgexecuteuniversalupdatecollection) | [`MsgExecuteUniversalUpdateCollectionResponse`](#msgexecuteuniversalupdatecollectionresponse) | none |   |

## Messages

### ManagerSplitter

ManagerSplitter defines the manager splitter entity.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `address` | 1 | `string` | singular | The module address of this manager splitter (derived from module name + ID). |
| `admin` | 2 | `string` | singular | Permanent and static admin address. Has full control and can always execute all permissions. |
| `permissions` | 3 | [`ManagerSplitterPermissions`](permissions.md#managersplitterpermissions) | singular | Permissions mapping each CollectionPermission field to execution criteria. |

### ManagersplitterCustomMsgType

Used for WASM bindings and JSON parsing

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `createManagerSplitterMsg` | 1 | [`MsgCreateManagerSplitter`](#msgcreatemanagersplitter) | singular |   |
| `updateManagerSplitterMsg` | 2 | [`MsgUpdateManagerSplitter`](#msgupdatemanagersplitter) | singular |   |
| `deleteManagerSplitterMsg` | 3 | [`MsgDeleteManagerSplitter`](#msgdeletemanagersplitter) | singular |   |
| `executeUniversalUpdateCollectionMsg` | 4 | [`MsgExecuteUniversalUpdateCollection`](#msgexecuteuniversalupdatecollection) | singular |   |

### MsgCreateManagerSplitter

MsgCreateManagerSplitter creates a new manager splitter entity.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `admin` | 1 | `string` | singular | Admin address creating the entity. |
| `permissions` | 2 | [`ManagerSplitterPermissions`](permissions.md#managersplitterpermissions) | singular | Permissions mapping each CollectionPermission field to execution criteria. |

### MsgCreateManagerSplitterResponse

MsgCreateManagerSplitterResponse is the response to MsgCreateManagerSplitter.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `address` | 1 | `string` | singular | The address of the created manager splitter. |

### MsgDeleteManagerSplitter

MsgDeleteManagerSplitter deletes a manager splitter entity.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `admin` | 1 | `string` | singular | Admin address deleting the entity. |
| `address` | 2 | `string` | singular | Address of the manager splitter to delete. |

### MsgDeleteManagerSplitterResponse

MsgDeleteManagerSplitterResponse is the response to MsgDeleteManagerSplitter.

No fields.

### MsgExecuteUniversalUpdateCollection

MsgExecuteUniversalUpdateCollection executes a UniversalUpdateCollection message

through the manager splitter, checking permissions before execution.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `executor` | 1 | `string` | singular | Address executing the message (must be approved or admin). |
| `managerSplitterAddress` | 2 | `string` | singular | Address of the manager splitter to execute through. |
| `universalUpdateCollectionMsg` | 3 | [`tokenization.MsgUniversalUpdateCollection`](../tokenization/tx.md#msguniversalupdatecollection) | singular | The UniversalUpdateCollection message to execute. |

### MsgExecuteUniversalUpdateCollectionResponse

MsgExecuteUniversalUpdateCollectionResponse is the response to MsgExecuteUniversalUpdateCollection.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular | ID of the collection that was updated. |

### MsgUpdateManagerSplitter

MsgUpdateManagerSplitter updates an existing manager splitter entity.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `admin` | 1 | `string` | singular | Admin address updating the entity. |
| `address` | 2 | `string` | singular | Address of the manager splitter to update. |
| `permissions` | 3 | [`ManagerSplitterPermissions`](permissions.md#managersplitterpermissions) | singular | New permissions to set. |

### MsgUpdateManagerSplitterResponse

MsgUpdateManagerSplitterResponse is the response to MsgUpdateManagerSplitter.

No fields.

### MsgUpdateParams

MsgUpdateParams is the Msg/UpdateParams request type.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `authority` | 1 | `string` | singular | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| `params` | 2 | [`Params`](params.md#params) | singular | params defines the module parameters to update. NOTE: All parameters must be supplied. |

### MsgUpdateParamsResponse

MsgUpdateParamsResponse defines the response structure for executing a

MsgUpdateParams message.

No fields.
