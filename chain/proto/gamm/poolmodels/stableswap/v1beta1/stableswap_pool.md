---
description: "Generated schema for gamm/poolmodels/stableswap/v1beta1/stableswap_pool.proto: 2 messages in the x/gamm module."
---

# gamm/poolmodels/stableswap/v1beta1/stableswap_pool.proto

Proto package `gamm.poolmodels.stableswap`, part of the [x/gamm](../../../README.md) module. It declares 2 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/gamm/poolmodels/stableswap/v1beta1/stableswap_pool.proto).

## Messages

### Pool

Pool is the stableswap Pool struct

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `address` | 1 | `string` | singular |   |
| `id` | 2 | `uint64` | singular |   |
| `pool_params` | 3 | [`PoolParams`](#poolparams) | singular |   |
| `future_pool_governor` | 4 | `string` | singular | This string specifies who will govern the pool in the future. Valid forms of this are: {token name},{duration} {duration} where {token name} if specified is the token which determines the governor, and if not specified is the LP token for this pool.duration is a time specified as 0w,1w,2w, etc. which specifies how long the token would need to be locked up to count in governance. 0w means no lockup. |
| `total_shares` | 5 | `cosmos.base.v1beta1.Coin` | singular | sum of all LP shares |
| `pool_liquidity` | 6 | `cosmos.base.v1beta1.Coin` | repeated | assets in the pool |
| `scaling_factors` | 7 | `uint64` | repeated | for calculation amongst assets with different precisions |
| `scaling_factor_controller` | 8 | `string` | singular | scaling_factor_controller is the address can adjust pool scaling factors |

### PoolParams

PoolParams defined the parameters that will be managed by the pool

governance in the future. This params are not managed by the chain

governance. Instead they will be managed by the token holders of the pool.

The pool's token holders are specified in future_pool_governor.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `swap_fee` | 1 | `string` | singular |   |
| `exit_fee` | 2 | `string` | singular | N.B.: exit fee is disabled during pool creation in x/poolmanager. While old pools can maintain a non-zero fee. No new pool can be created with non-zero fee anymore |
