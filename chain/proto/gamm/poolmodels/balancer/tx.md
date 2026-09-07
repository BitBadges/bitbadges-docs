---
description: "Generated schema for gamm/poolmodels/balancer/tx.proto: 1 service, 3 messages in the x/gamm module."
---

# gamm/poolmodels/balancer/tx.proto

Proto package `gamm.poolmodels.balancer`, part of the [x/gamm](../../README.md) module. It declares 1 service, 3 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/gamm/poolmodels/balancer/tx.proto).

## Service Msg

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `CreateBalancerPool` | [`MsgCreateBalancerPool`](#msgcreatebalancerpool) | [`MsgCreateBalancerPoolResponse`](#msgcreatebalancerpoolresponse) | none |   |

## Messages

### BalancerCustomMsgType

Used for WASM bindings and JSON parsing

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `createBalancerPoolMsg` | 1 | [`MsgCreateBalancerPool`](#msgcreatebalancerpool) | singular |   |

### MsgCreateBalancerPool

===================== MsgCreatePool

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `pool_params` | 2 | [`gamm.poolmodels.balancer.PoolParams`](balancerPool.md#poolparams) | singular |   |
| `pool_assets` | 3 | [`gamm.poolmodels.balancer.PoolAsset`](balancerPool.md#poolasset) | repeated |   |

### MsgCreateBalancerPoolResponse

Returns the poolID

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |
