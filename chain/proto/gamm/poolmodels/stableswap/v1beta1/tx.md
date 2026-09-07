---
description: "Generated schema for gamm/poolmodels/stableswap/v1beta1/tx.proto: 1 service, 4 messages in the x/gamm module."
---

# gamm/poolmodels/stableswap/v1beta1/tx.proto

Proto package `gamm.poolmodels.stableswap`, part of the [x/gamm](../../../README.md) module. It declares 1 service, 4 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/gamm/poolmodels/stableswap/v1beta1/tx.proto).

## Service Msg

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `CreateStableswapPool` | [`MsgCreateStableswapPool`](#msgcreatestableswappool) | [`MsgCreateStableswapPoolResponse`](#msgcreatestableswappoolresponse) | none |   |
| `StableSwapAdjustScalingFactors` | [`MsgStableSwapAdjustScalingFactors`](#msgstableswapadjustscalingfactors) | [`MsgStableSwapAdjustScalingFactorsResponse`](#msgstableswapadjustscalingfactorsresponse) | none |   |

## Messages

### MsgCreateStableswapPool

===================== MsgCreatePool

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `pool_params` | 2 | [`PoolParams`](stableswap_pool.md#poolparams) | singular |   |
| `initial_pool_liquidity` | 3 | `cosmos.base.v1beta1.Coin` | repeated |   |
| `scaling_factors` | 4 | `uint64` | repeated |   |
| `future_pool_governor` | 5 | `string` | singular |   |
| `scaling_factor_controller` | 6 | `string` | singular |   |

### MsgCreateStableswapPoolResponse

Returns a poolID with custom poolName.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |

### MsgStableSwapAdjustScalingFactors

Sender must be the pool's scaling_factor_governor in order for the tx to

succeed. Adjusts stableswap scaling factors.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `pool_id` | 2 | `uint64` | singular |   |
| `scaling_factors` | 3 | `uint64` | repeated |   |

### MsgStableSwapAdjustScalingFactorsResponse

No fields.
