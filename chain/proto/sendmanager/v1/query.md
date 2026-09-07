---
description: "Generated schema for sendmanager/v1/query.proto: 1 service, 4 messages in the x/sendmanager module."
---

# sendmanager/v1/query.proto

Proto package `sendmanager`, part of the [x/sendmanager](../README.md) module. It declares 1 service, 4 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/sendmanager/v1/query.proto).

## Service Query

Query defines the gRPC querier service.

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `Params` | [`QueryParamsRequest`](#queryparamsrequest) | [`QueryParamsResponse`](#queryparamsresponse) | `GET /bitbadges/bitbadgeschain/sendmanager/params` | Parameters queries the parameters of the module. |
| `Balance` | [`QueryBalanceRequest`](#querybalancerequest) | [`QueryBalanceResponse`](#querybalanceresponse) | `GET /bitbadges/bitbadgeschain/sendmanager/balance/{address}/{denom}` | Balance queries the balance of a specific denom for an address with alias routing. This allows querying both standard coins and alias denoms (e.g., badgeslp:). |

## Messages

### QueryBalanceRequest

QueryBalanceRequest is request type for the Query/Balance RPC method.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `address` | 1 | `string` | singular | address is the address to query balances for. |
| `denom` | 2 | `string` | singular | denom is the specific denomination to query the balance for. |

### QueryBalanceResponse

QueryBalanceResponse is response type for the Query/Balance RPC method.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `balance` | 1 | `cosmos.base.v1beta1.Coin` | singular | balance is the balance of the specified denom for the address. |

### QueryParamsRequest

QueryParamsRequest is request type for the Query/Params RPC method.

No fields.

### QueryParamsResponse

QueryParamsResponse is response type for the Query/Params RPC method.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `params` | 1 | [`Params`](params.md#params) | singular | params holds all the parameters of this module. |
