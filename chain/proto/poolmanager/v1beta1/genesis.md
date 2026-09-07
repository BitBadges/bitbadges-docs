---
description: "Generated schema for poolmanager/v1beta1/genesis.proto: 6 messages in the x/poolmanager module."
---

# poolmanager/v1beta1/genesis.proto

Proto package `poolmanager.v1beta1`, part of the [x/poolmanager](../README.md) module. It declares 6 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/poolmanager/v1beta1/genesis.proto).

## Messages

### GenesisState

GenesisState defines the poolmanager module's genesis state.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `next_pool_id` | 1 | `uint64` | singular | the next_pool_id |
| `params` | 2 | [`Params`](#params) | singular | params is the container of poolmanager parameters. |
| `pool_routes` | 3 | [`ModuleRoute`](module_route.md#moduleroute) | repeated | pool_routes is the container of the mappings from pool id to pool type. |
| `taker_fees_tracker` | 4 | [`TakerFeesTracker`](#takerfeestracker) | singular | KVStore state |
| `pool_volumes` | 5 | [`PoolVolume`](#poolvolume) | repeated |   |
| `denom_pair_taker_fee_store` | 6 | [`DenomPairTakerFee`](tx.md#denompairtakerfee) | repeated |   |

### Params

Params holds parameters for the poolmanager module

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `taker_fee_params` | 1 | [`TakerFeeParams`](#takerfeeparams) | singular | taker_fee_params is the container of taker fee parameters. |

### PoolVolume

PoolVolume stores the KVStore entries for each pool's volume, which

is used in export/import genesis.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular | pool_id is the id of the pool. |
| `pool_volume` | 2 | `cosmos.base.v1beta1.Coin` | repeated | pool_volume is the cumulative volume of the pool. |

### TakerFeeDistributionPercentage

TakerFeeDistributionPercentage defines what percent of the taker fee category

gets distributed to the available categories.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `staking_rewards` | 1 | `string` | singular |   |
| `community_pool` | 2 | `string` | singular |   |

### TakerFeeParams

TakerFeeParams consolidates the taker fee parameters for the poolmanager.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `default_taker_fee` | 1 | `string` | singular | default_taker_fee is the fee used when creating a new pool that doesn't fall under a custom pool taker fee or stableswap taker fee category. |
| `osmo_taker_fee_distribution` | 2 | [`TakerFeeDistributionPercentage`](#takerfeedistributionpercentage) | singular | osmo_taker_fee_distribution defines the distribution of taker fees generated in OSMO. As of this writing, it has two categories: - staking_rewards: the percent of the taker fee that gets distributed to stakers. - community_pool: the percent of the taker fee that gets sent to the community pool. |
| `non_osmo_taker_fee_distribution` | 3 | [`TakerFeeDistributionPercentage`](#takerfeedistributionpercentage) | singular | non_osmo_taker_fee_distribution defines the distribution of taker fees generated in non-OSMO. As of this writing, it has two categories: - staking_rewards: the percent of the taker fee that gets swapped to OSMO and then distributed to stakers. - community_pool: the percent of the taker fee that gets sent to the community pool. Note: If the non-OSMO asset is an authorized_quote_denom, that denom is sent directly to the community pool. Otherwise, it is swapped to the community_pool_denom_to_swap_non_whitelisted_assets_to and then sent to the community pool as that denom. |
| `admin_addresses` | 4 | `string` | repeated | admin_addresses is a list of addresses that are allowed to set and remove custom taker fees for denom pairs. Governance also has the ability to set and remove custom taker fees for denom pairs, but with the normal governance delay. |
| `community_pool_denom_to_swap_non_whitelisted_assets_to` | 5 | `string` | singular | community_pool_denom_to_swap_non_whitelisted_assets_to is the denom that non-whitelisted taker fees will be swapped to before being sent to the community pool. |
| `reduced_fee_whitelist` | 6 | `string` | repeated | reduced_fee_whitelist is a list of addresses that are allowed to pay a reduce taker fee when performing a swap (i.e. swap without paying the taker fee). It is intended to be used for integrators who meet qualifying factors that are approved by governance. Initially, the taker fee is allowed to be bypassed completely. However In the future, we will charge a reduced taker fee instead of no fee at all. |
| `community_pool_denom_whitelist` | 7 | `string` | repeated | community_pool_denom_whitelist is a list of denoms that should be sent directly to the community pool instead of being swapped to the `community_pool_denom_to_swap_non_whitelisted_assets_to`. |

### TakerFeesTracker

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `taker_fees_to_stakers` | 1 | `cosmos.base.v1beta1.Coin` | repeated |   |
| `taker_fees_to_community_pool` | 2 | `cosmos.base.v1beta1.Coin` | repeated |   |
| `height_accounting_starts_from` | 3 | `int64` | singular |   |
