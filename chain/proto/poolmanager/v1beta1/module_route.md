---
description: "Generated schema for poolmanager/v1beta1/module_route.proto: 1 message, 1 enum in the x/poolmanager module."
---

# poolmanager/v1beta1/module_route.proto

Proto package `poolmanager.v1beta1`, part of the [x/poolmanager](../README.md) module. It declares 1 message, 1 enum. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/poolmanager/v1beta1/module_route.proto).

## Messages

### ModuleRoute

ModuleRouter defines a route encapsulating pool type.

It is used as the value of a mapping from pool id to the pool type,

allowing the pool manager to know which module to route swaps to given the

pool id.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_type` | 1 | [`PoolType`](#pooltype) | singular | pool_type specifies the type of the pool |
| `pool_id` | 2 | `uint64` | singular |   |

## Enums

### PoolType

PoolType is an enumeration of all supported pool types.

| Value | # | Description |
| --- | --- | --- |
| `Balancer` | 0 | Balancer is the standard xy=k curve. Its pool model is defined in x/gamm. |
| `Stableswap` | 1 | Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined in x/gamm. |
