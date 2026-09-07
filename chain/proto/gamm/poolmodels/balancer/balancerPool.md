---
description: "Generated schema for gamm/poolmodels/balancer/balancerPool.proto: 3 messages in the x/gamm module."
---

# gamm/poolmodels/balancer/balancerPool.proto

Proto package `gamm.poolmodels.balancer`, part of the [x/gamm](../../README.md) module. It declares 3 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/gamm/poolmodels/balancer/balancerPool.proto).

## Messages

### Pool

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `address` | 1 | `string` | singular |   |
| `id` | 2 | `uint64` | singular |   |
| `pool_params` | 3 | [`PoolParams`](#poolparams) | singular |   |
| `total_shares` | 4 | `cosmos.base.v1beta1.Coin` | singular | sum of all LP tokens sent out |
| `pool_assets` | 5 | [`gamm.poolmodels.balancer.PoolAsset`](#poolasset) | repeated | These are assumed to be sorted by denomiation. They contain the pool asset and the information about the weight |
| `total_weight` | 6 | `string` | singular | sum of all non-normalized pool weights |

### PoolAsset

Pool asset is an internal struct that combines the amount of the

token in the pool, and its balancer weight.

This is an awkward packaging of data,

and should be revisited in a future state migration.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token` | 1 | `cosmos.base.v1beta1.Coin` | singular | Coins we are talking about, the denomination must be unique amongst all PoolAssets for this pool. |
| `weight` | 2 | `string` | singular | Weight that is not normalized. This weight must be less than 2^50 |

### PoolParams

PoolParams defined the parameters that will be managed by the pool

governance in the future. This params are not managed by the chain

governance. Instead they will be managed by the token holders of the pool.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `swap_fee` | 1 | `string` | singular |   |
| `exit_fee` | 2 | `string` | singular | N.B.: exit fee is disabled during pool creation in x/poolmanager. While old pools can maintain a non-zero fee. No new pool can be created with non-zero fee anymore |
