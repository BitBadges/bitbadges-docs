---
description: "Generated schema for poolmanager/v1beta1/query.proto: 1 service, 44 messages in the x/poolmanager module."
---

# poolmanager/v1beta1/query.proto

Proto package `poolmanager.v1beta1`, part of the [x/poolmanager](../README.md) module. It declares 1 service, 44 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/poolmanager/v1beta1/query.proto).

## Service Query

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `Params` | [`ParamsRequest`](#paramsrequest) | [`ParamsResponse`](#paramsresponse) | `GET /osmosis/poolmanager/v1beta1/Params` |   |
| `EstimateSwapExactAmountIn` | [`EstimateSwapExactAmountInRequest`](#estimateswapexactamountinrequest) | [`EstimateSwapExactAmountInResponse`](#estimateswapexactamountinresponse) | `GET /osmosis/poolmanager/v1beta1/{pool_id}/estimate/swap_exact_amount_in` | Estimates swap amount out given in. |
| `EstimateSwapExactAmountInWithPrimitiveTypes` | [`EstimateSwapExactAmountInWithPrimitiveTypesRequest`](#estimateswapexactamountinwithprimitivetypesrequest) | [`EstimateSwapExactAmountInResponse`](#estimateswapexactamountinresponse) | none | EstimateSwapExactAmountInWithPrimitiveTypes is an alternative query for EstimateSwapExactAmountIn. Supports query via GRPC-Gateway by using primitive types instead of repeated structs. Each index in the routes_pool_id field corresponds to the respective routes_token_out_denom value, thus they are required to have the same length and are grouped together as pairs. example usage: http://0.0.0.0:1317/osmosis/poolmanager/v1beta1/1/estimate/ swap_exact_amount_in_with_primitive_types?token_in=100000stake&amp;routes_token_out_denom=uatom &amp;routes_token_out_denom=uion&amp;routes_pool_id=1&amp;routes_pool_id=2 |
| `EstimateSinglePoolSwapExactAmountIn` | [`EstimateSinglePoolSwapExactAmountInRequest`](#estimatesinglepoolswapexactamountinrequest) | [`EstimateSwapExactAmountInResponse`](#estimateswapexactamountinresponse) | none |   |
| `EstimateSwapExactAmountOut` | [`EstimateSwapExactAmountOutRequest`](#estimateswapexactamountoutrequest) | [`EstimateSwapExactAmountOutResponse`](#estimateswapexactamountoutresponse) | `GET /osmosis/poolmanager/v1beta1/{pool_id}/estimate/swap_exact_amount_out` | Estimates swap amount in given out. |
| `EstimateSwapExactAmountOutWithPrimitiveTypes` | [`EstimateSwapExactAmountOutWithPrimitiveTypesRequest`](#estimateswapexactamountoutwithprimitivetypesrequest) | [`EstimateSwapExactAmountOutResponse`](#estimateswapexactamountoutresponse) | none | Estimates swap amount in given out. |
| `EstimateSinglePoolSwapExactAmountOut` | [`EstimateSinglePoolSwapExactAmountOutRequest`](#estimatesinglepoolswapexactamountoutrequest) | [`EstimateSwapExactAmountOutResponse`](#estimateswapexactamountoutresponse) | none |   |
| `NumPools` | [`NumPoolsRequest`](#numpoolsrequest) | [`NumPoolsResponse`](#numpoolsresponse) | `GET /osmosis/poolmanager/v1beta1/num_pools` | Returns the total number of pools existing in Osmosis. |
| `Pool` | [`PoolRequest`](#poolrequest) | [`PoolResponse`](#poolresponse) | `GET /osmosis/poolmanager/v1beta1/pools/{pool_id}` | Pool returns the Pool specified by the pool id |
| `AllPools` | [`AllPoolsRequest`](#allpoolsrequest) | [`AllPoolsResponse`](#allpoolsresponse) | `GET /osmosis/poolmanager/v1beta1/all-pools` | AllPools returns all pools on the Osmosis chain sorted by IDs. |
| `ListPoolsByDenom` | [`ListPoolsByDenomRequest`](#listpoolsbydenomrequest) | [`ListPoolsByDenomResponse`](#listpoolsbydenomresponse) | `GET /osmosis/poolmanager/v1beta1/list-pools-by-denom` | ListPoolsByDenom return all pools by denom |
| `SpotPrice` | [`SpotPriceRequest`](#spotpricerequest) | [`SpotPriceResponse`](#spotpriceresponse) | `GET /osmosis/poolmanager/pools/{pool_id}/prices` | SpotPrice defines a gRPC query handler that returns the spot price given a base denomination and a quote denomination. |
| `TotalPoolLiquidity` | [`TotalPoolLiquidityRequest`](#totalpoolliquidityrequest) | [`TotalPoolLiquidityResponse`](#totalpoolliquidityresponse) | `GET /osmosis/poolmanager/v1beta1/pools/{pool_id}/total_pool_liquidity` | TotalPoolLiquidity returns the total liquidity of the specified pool. |
| `TotalLiquidity` | [`TotalLiquidityRequest`](#totalliquidityrequest) | [`TotalLiquidityResponse`](#totalliquidityresponse) | `GET /osmosis/poolmanager/v1beta1/total_liquidity` | TotalLiquidity returns the total liquidity across all pools. |
| `TotalVolumeForPool` | [`TotalVolumeForPoolRequest`](#totalvolumeforpoolrequest) | [`TotalVolumeForPoolResponse`](#totalvolumeforpoolresponse) | `GET /osmosis/poolmanager/v1beta1/pools/{pool_id}/total_volume` | TotalVolumeForPool returns the total volume of the specified pool. |
| `TradingPairTakerFee` | [`TradingPairTakerFeeRequest`](#tradingpairtakerfeerequest) | [`TradingPairTakerFeeResponse`](#tradingpairtakerfeeresponse) | `GET /osmosis/poolmanager/v1beta1/trading_pair_takerfee` | TradingPairTakerFee returns the taker fee for a given set of denoms |
| `EstimateTradeBasedOnPriceImpact` | [`EstimateTradeBasedOnPriceImpactRequest`](#estimatetradebasedonpriceimpactrequest) | [`EstimateTradeBasedOnPriceImpactResponse`](#estimatetradebasedonpriceimpactresponse) | `GET /osmosis/poolmanager/v1beta1/{pool_id}/estimate_trade` | EstimateTradeBasedOnPriceImpact returns an estimated trade based on price impact, if a trade cannot be estimated a 0 input and 0 output would be returned. |
| `AllTakerFeeShareAgreements` | [`AllTakerFeeShareAgreementsRequest`](#alltakerfeeshareagreementsrequest) | [`AllTakerFeeShareAgreementsResponse`](#alltakerfeeshareagreementsresponse) | `GET /osmosis/poolmanager/v1beta1/all_taker_fee_share_agreements` | AllTakerFeeShareAgreements returns all taker fee share agreements. A taker fee share agreement includes the denom of the denom getting the taker fees, the percent of the taker fees that the denom gets when it is in the route being traded against, and the address that the taker fees are sent to at epoch. |
| `TakerFeeShareAgreementFromDenom` | [`TakerFeeShareAgreementFromDenomRequest`](#takerfeeshareagreementfromdenomrequest) | [`TakerFeeShareAgreementFromDenomResponse`](#takerfeeshareagreementfromdenomresponse) | none | TakerFeeShareAgreementFromDenom returns the taker fee share agreement for a given denom. A taker fee share agreement includes the denom of the denom getting the taker fees, the percent of the taker fees that the denom gets when it is in the route being traded against, and the address that the taker fees are sent to at epoch. |
| `TakerFeeShareDenomsToAccruedValue` | [`TakerFeeShareDenomsToAccruedValueRequest`](#takerfeesharedenomstoaccruedvaluerequest) | [`TakerFeeShareDenomsToAccruedValueResponse`](#takerfeesharedenomstoaccruedvalueresponse) | none | TakerFeeShareDenomsToAccruedValue returns the accrued value (as an Int) of the given taker fee denom (the collected fees) for the given fee share denom (the denom with the taker fee share agreement) |
| `AllTakerFeeShareAccumulators` | [`AllTakerFeeShareAccumulatorsRequest`](#alltakerfeeshareaccumulatorsrequest) | [`AllTakerFeeShareAccumulatorsResponse`](#alltakerfeeshareaccumulatorsresponse) | `GET /osmosis/poolmanager/v1beta1/all_taker_fee_share_accumulators` | AllTakerFeeShareAccumulators returns all taker fee share accumulators. A taker fee share accumulator includes the denom of the denom getting the taker fees, and an accumulated value of coins that the denom has accrued since the last time it was distributed in the epoch prior. |
| `RegisteredAlloyedPoolFromDenom` | [`RegisteredAlloyedPoolFromDenomRequest`](#registeredalloyedpoolfromdenomrequest) | [`RegisteredAlloyedPoolFromDenomResponse`](#registeredalloyedpoolfromdenomresponse) | none | RegisteredAlloyedPoolFromDenom returns the registered alloyed pool state from the given denom. The registered alloyed pool contains the pool's contract address, along with the current distribution composition of taker fee share denoms within the alloyed pool. |
| `RegisteredAlloyedPoolFromPoolId` | [`RegisteredAlloyedPoolFromPoolIdRequest`](#registeredalloyedpoolfrompoolidrequest) | [`RegisteredAlloyedPoolFromPoolIdResponse`](#registeredalloyedpoolfrompoolidresponse) | none | RegisteredAlloyedPoolFromPoolId returns the registered alloyed pool state from the given pool id. The registered alloyed pool contains the pool's contract address, along with the current distribution composition of taker fee share denoms within the alloyed pool. |
| `AllRegisteredAlloyedPools` | [`AllRegisteredAlloyedPoolsRequest`](#allregisteredalloyedpoolsrequest) | [`AllRegisteredAlloyedPoolsResponse`](#allregisteredalloyedpoolsresponse) | `GET /osmosis/poolmanager/v1beta1/all_registered_alloyed_pools` | AllRegisteredAlloyedPools returns all registered alloyed pools. The registered alloyed pool contains the pool's contract address, along with the current distribution composition of taker fee share denoms within the alloyed pool. |

## Messages

### AllPoolsRequest

=============================== AllPools

No fields.

### AllPoolsResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pools` | 1 | `google.protobuf.Any` | repeated |   |

### AllRegisteredAlloyedPoolsRequest

=============================== AllRegisteredAlloyedPoolsRequest

No fields.

### AllRegisteredAlloyedPoolsResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `contract_states` | 1 | [`AlloyContractTakerFeeShareState`](taker_fee_share.md#alloycontracttakerfeesharestate) | repeated |   |

### AllTakerFeeShareAccumulatorsRequest

=============================== AllTakerFeeShareAccumulatorsRequest

No fields.

### AllTakerFeeShareAccumulatorsResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `taker_fee_skim_accumulators` | 1 | [`TakerFeeSkimAccumulator`](taker_fee_share.md#takerfeeskimaccumulator) | repeated |   |

### AllTakerFeeShareAgreementsRequest

=============================== AllTakerFeeShareAgreementsRequest

No fields.

### AllTakerFeeShareAgreementsResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `taker_fee_share_agreements` | 1 | [`TakerFeeShareAgreement`](taker_fee_share.md#takerfeeshareagreement) | repeated |   |

### EstimateSinglePoolSwapExactAmountInRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |
| `token_in` | 2 | `string` | singular |   |
| `token_out_denom` | 3 | `string` | singular |   |

### EstimateSinglePoolSwapExactAmountOutRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |
| `token_in_denom` | 2 | `string` | singular |   |
| `token_out` | 3 | `string` | singular |   |

### EstimateSwapExactAmountInRequest

=============================== EstimateSwapExactAmountIn

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular | DEPRECATED |
| `pool_id` | 2 | `uint64` | singular |   |
| `token_in` | 3 | `string` | singular |   |
| `routes` | 4 | [`SwapAmountInRoute`](swap_route.md#swapamountinroute) | repeated |   |

### EstimateSwapExactAmountInResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token_out_amount` | 1 | `string` | singular |   |

### EstimateSwapExactAmountInWithPrimitiveTypesRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |
| `token_in` | 2 | `string` | singular |   |
| `routes_pool_id` | 3 | `uint64` | repeated |   |
| `routes_token_out_denom` | 4 | `string` | repeated |   |

### EstimateSwapExactAmountOutRequest

=============================== EstimateSwapExactAmountOut

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular | DEPRECATED |
| `pool_id` | 2 | `uint64` | singular |   |
| `routes` | 3 | [`SwapAmountOutRoute`](swap_route.md#swapamountoutroute) | repeated |   |
| `token_out` | 4 | `string` | singular |   |

### EstimateSwapExactAmountOutResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token_in_amount` | 1 | `string` | singular |   |

### EstimateSwapExactAmountOutWithPrimitiveTypesRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |
| `routes_pool_id` | 2 | `uint64` | repeated |   |
| `routes_token_in_denom` | 3 | `string` | repeated |   |
| `token_out` | 4 | `string` | singular |   |

### EstimateTradeBasedOnPriceImpactRequest

=============================== EstimateTradeBasedOnPriceImpact

EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a

trade for Balancer/StableSwap/Concentrated liquidity pool types based on the

given parameters.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `from_coin` | 1 | `cosmos.base.v1beta1.Coin` | singular | from_coin is the total amount of tokens that the user wants to sell. |
| `to_coin_denom` | 2 | `string` | singular | to_coin_denom is the denom identifier of the token that the user wants to buy. |
| `pool_id` | 3 | `uint64` | singular | pool_id is the identifier of the liquidity pool that the trade will occur on. |
| `max_price_impact` | 4 | `string` | singular | max_price_impact is the maximum percentage that the user is willing to affect the price of the liquidity pool. |
| `external_price` | 5 | `string` | singular | external_price is an optional external price that the user can enter. It adjusts the MaxPriceImpact as the SpotPrice of a pool can be changed at any time. |

### EstimateTradeBasedOnPriceImpactResponse

EstimateTradeBasedOnPriceImpactResponse represents the response data

for an estimated trade based on price impact. If a trade fails to be

estimated the response would be 0,0 for input_coin and output_coin and will

not error.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `input_coin` | 1 | `cosmos.base.v1beta1.Coin` | singular | input_coin is the actual input amount that would be tradeable under the specified price impact. |
| `output_coin` | 2 | `cosmos.base.v1beta1.Coin` | singular | output_coin is the amount of tokens of the ToCoinDenom type that will be received for the actual InputCoin trade. |

### ListPoolsByDenomRequest

=======================================================

ListPoolsByDenomRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `denom` | 1 | `string` | singular |   |

### ListPoolsByDenomResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pools` | 1 | `google.protobuf.Any` | repeated |   |

### NumPoolsRequest

=============================== NumPools

No fields.

### NumPoolsResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `num_pools` | 1 | `uint64` | singular |   |

### ParamsRequest

=============================== Params

No fields.

### ParamsResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `params` | 1 | [`Params`](genesis.md#params) | singular |   |

### PoolRequest

=============================== Pool

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |

### PoolResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool` | 1 | `google.protobuf.Any` | singular |   |

### RegisteredAlloyedPoolFromDenomRequest

=============================== RegisteredAlloyedPoolFromDenomRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `denom` | 1 | `string` | singular |   |

### RegisteredAlloyedPoolFromDenomResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `contract_state` | 1 | [`AlloyContractTakerFeeShareState`](taker_fee_share.md#alloycontracttakerfeesharestate) | singular |   |

### RegisteredAlloyedPoolFromPoolIdRequest

=============================== RegisteredAlloyedPoolFromPoolIdRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |

### RegisteredAlloyedPoolFromPoolIdResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `contract_state` | 1 | [`AlloyContractTakerFeeShareState`](taker_fee_share.md#alloycontracttakerfeesharestate) | singular |   |

### SpotPriceRequest

==========================================================

SpotPriceRequest defines the gRPC request structure for a SpotPrice

query.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |
| `base_asset_denom` | 2 | `string` | singular |   |
| `quote_asset_denom` | 3 | `string` | singular |   |

### SpotPriceResponse

SpotPriceResponse defines the gRPC response structure for a SpotPrice

query.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `spot_price` | 1 | `string` | singular | String of the Dec. Ex) 10.203uatom |

### TakerFeeShareAgreementFromDenomRequest

=============================== TakerFeeShareAgreementFromDenomRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `denom` | 1 | `string` | singular |   |

### TakerFeeShareAgreementFromDenomResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `taker_fee_share_agreement` | 1 | [`TakerFeeShareAgreement`](taker_fee_share.md#takerfeeshareagreement) | singular |   |

### TakerFeeShareDenomsToAccruedValueRequest

=============================== TakerFeeShareDenomsToAccruedValueRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `denom` | 1 | `string` | singular |   |
| `takerFeeDenom` | 2 | `string` | singular |   |

### TakerFeeShareDenomsToAccruedValueResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `amount` | 1 | `string` | singular |   |

### TotalLiquidityRequest

=============================== TotalLiquidity

No fields.

### TotalLiquidityResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `liquidity` | 1 | `cosmos.base.v1beta1.Coin` | repeated |   |

### TotalPoolLiquidityRequest

=============================== TotalPoolLiquidity

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |

### TotalPoolLiquidityResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `liquidity` | 1 | `cosmos.base.v1beta1.Coin` | repeated |   |

### TotalVolumeForPoolRequest

=============================== TotalVolumeForPool

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |

### TotalVolumeForPoolResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `volume` | 1 | `cosmos.base.v1beta1.Coin` | repeated |   |

### TradingPairTakerFeeRequest

=============================== TradingPairTakerFee

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `denom_0` | 1 | `string` | singular |   |
| `denom_1` | 2 | `string` | singular |   |

### TradingPairTakerFeeResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `taker_fee` | 1 | `string` | singular |   |
