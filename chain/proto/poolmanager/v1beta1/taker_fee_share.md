---
description: "Generated schema for poolmanager/v1beta1/taker_fee_share.proto: 3 messages in the x/poolmanager module."
---

# poolmanager/v1beta1/taker_fee_share.proto

Proto package `poolmanager.v1beta1`, part of the [x/poolmanager](../README.md) module. It declares 3 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/poolmanager/v1beta1/taker_fee_share.proto).

## Messages

### AlloyContractTakerFeeShareState

AlloyContractTakerFeeShareState contains the contract address of the alloyed

asset pool, along with the adjusted taker fee share agreements for any asset

within the alloyed asset pool that has a taker fee share agreement. If for

instance there are two denoms, and denomA makes up 50 percent and denomB

makes up 50 percent, and denom A has a taker fee share agreement with a skim

percent of 10%, then the adjusted taker fee share agreement for denomA will

be 5%.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `contract_address` | 1 | `string` | singular | contract_address is the address of the alloyed asset pool contract. |
| `taker_fee_share_agreements` | 2 | [`TakerFeeShareAgreement`](#takerfeeshareagreement) | repeated | taker_fee_share_agreements is the adjusted taker fee share agreements for any asset within the alloyed asset pool that has a taker fee share agreement. |

### TakerFeeShareAgreement

TakerFeeShareAgreement represents the agreement between the Osmosis protocol

and a specific denom to share a certain percent of taker fees generated in

any route that contains said denom. For example, if the agreement specifies a

10% skim_percent, this means 10% of the taker fees generated in a swap route

containing the specified denom will be sent to the address specified

in the skim_address field at the end of each epoch. These skim_percents are

additive, so if three taker fee agreements have skim percents of 10%, 20%,

and 30%, the total skim percent for the route will be 60%.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `denom` | 1 | `string` | singular | denom is the denom that has the taker fee share agreement. |
| `skim_percent` | 2 | `string` | singular | skim_percent is the percentage of taker fees that will be skimmed for the denom, in the event that the denom is included in the swap route. |
| `skim_address` | 3 | `string` | singular | skim_address is the address belonging to the respective denom that the skimmed taker fees will be sent to at the end of each epoch. |

### TakerFeeSkimAccumulator

TakerFeeSkimAccumulator accumulates the total skimmed taker fees for each

denom that has a taker fee share agreement.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `denom` | 1 | `string` | singular | denom is the denom that has the taker fee share agreement. |
| `skimmed_taker_fees` | 2 | `cosmos.base.v1beta1.Coin` | repeated | skimmed_taker_fees is the total skimmed taker fees for the denom. |
