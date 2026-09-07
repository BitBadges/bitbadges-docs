---
description: "Generated schema for managersplitter/query.proto: 1 service, 6 messages in the x/managersplitter module."
---

# managersplitter/query.proto

Proto package `managersplitter`, part of the [x/managersplitter](README.md) module. It declares 1 service, 6 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/managersplitter/query.proto).

## Service Query

Query defines the gRPC querier service.

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `Params` | [`QueryParamsRequest`](#queryparamsrequest) | [`QueryParamsResponse`](#queryparamsresponse) | `GET /bitbadges/bitbadgeschain/managersplitter/params` | Parameters queries the parameters of the module. |
| `ManagerSplitter` | [`QueryGetManagerSplitterRequest`](#querygetmanagersplitterrequest) | [`QueryGetManagerSplitterResponse`](#querygetmanagersplitterresponse) | `GET /bitbadges/bitbadgeschain/managersplitter/{address}` | ManagerSplitter queries a manager splitter by address. |
| `AllManagerSplitters` | [`QueryAllManagerSplittersRequest`](#queryallmanagersplittersrequest) | [`QueryAllManagerSplittersResponse`](#queryallmanagersplittersresponse) | `GET /bitbadges/bitbadgeschain/managersplitter` | AllManagerSplitters queries all manager splitters. |

## Messages

### QueryAllManagerSplittersRequest

QueryAllManagerSplittersRequest is request type for the Query/AllManagerSplitters RPC method.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pagination` | 1 | `cosmos.base.query.v1beta1.PageRequest` | singular |   |

### QueryAllManagerSplittersResponse

QueryAllManagerSplittersResponse is response type for the Query/AllManagerSplitters RPC method.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `managerSplitters` | 1 | [`ManagerSplitter`](tx.md#managersplitter) | repeated |   |
| `pagination` | 2 | `cosmos.base.query.v1beta1.PageResponse` | singular |   |

### QueryGetManagerSplitterRequest

QueryGetManagerSplitterRequest is request type for the Query/ManagerSplitter RPC method.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `address` | 1 | `string` | singular |   |

### QueryGetManagerSplitterResponse

QueryGetManagerSplitterResponse is response type for the Query/ManagerSplitter RPC method.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `managerSplitter` | 1 | [`ManagerSplitter`](tx.md#managersplitter) | singular |   |

### QueryParamsRequest

QueryParamsRequest is request type for the Query/Params RPC method.

No fields.

### QueryParamsResponse

QueryParamsResponse is response type for the Query/Params RPC method.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `params` | 1 | [`Params`](params.md#params) | singular | params holds all the parameters of this module. |
