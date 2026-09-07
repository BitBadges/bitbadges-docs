---
description: "Generated schema for gamm/v1beta1/query.proto: 1 service, 33 messages in the x/gamm module."
---

# gamm/v1beta1/query.proto

Proto package `gamm.v1beta1`, part of the [x/gamm](../README.md) module. It declares 1 service, 33 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/gamm/v1beta1/query.proto).

## Service Query

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `Pools` | [`QueryPoolsRequest`](#querypoolsrequest) | [`QueryPoolsResponse`](#querypoolsresponse) | `GET /osmosis/gamm/v1beta1/pools` |   |
| `NumPools` | [`QueryNumPoolsRequest`](#querynumpoolsrequest) | [`QueryNumPoolsResponse`](#querynumpoolsresponse) | `GET /osmosis/gamm/v1beta1/num_pools` | **Deprecated.** Deprecated: please use the alternative in x/poolmanager |
| `TotalLiquidity` | [`QueryTotalLiquidityRequest`](#querytotalliquidityrequest) | [`QueryTotalLiquidityResponse`](#querytotalliquidityresponse) | `GET /osmosis/gamm/v1beta1/total_liquidity` |   |
| `PoolsWithFilter` | [`QueryPoolsWithFilterRequest`](#querypoolswithfilterrequest) | [`QueryPoolsWithFilterResponse`](#querypoolswithfilterresponse) | `GET /osmosis/gamm/v1beta1/filtered_pools` | PoolsWithFilter allows you to query specific pools with requested parameters |
| `Pool` | [`QueryPoolRequest`](#querypoolrequest) | [`QueryPoolResponse`](#querypoolresponse) | `GET /osmosis/gamm/v1beta1/pools/{pool_id}` | **Deprecated.** Deprecated: please use the alternative in x/poolmanager |
| `PoolType` | [`QueryPoolTypeRequest`](#querypooltyperequest) | [`QueryPoolTypeResponse`](#querypooltyperesponse) | `GET /osmosis/gamm/v1beta1/pool_type/{pool_id}` | PoolType returns the type of the pool. Returns "Balancer" as a string literal when the pool is a balancer pool. Errors if the pool is failed to be type caseted. |
| `CalcJoinPoolNoSwapShares` | [`QueryCalcJoinPoolNoSwapSharesRequest`](#querycalcjoinpoolnoswapsharesrequest) | [`QueryCalcJoinPoolNoSwapSharesResponse`](#querycalcjoinpoolnoswapsharesresponse) | none | Simulates joining pool without a swap. Returns the amount of shares you'd get and tokens needed to provide |
| `CalcJoinPoolShares` | [`QueryCalcJoinPoolSharesRequest`](#querycalcjoinpoolsharesrequest) | [`QueryCalcJoinPoolSharesResponse`](#querycalcjoinpoolsharesresponse) | `GET /osmosis/gamm/v1beta1/pools/{pool_id}/join_swap_exact_in` |   |
| `CalcExitPoolCoinsFromShares` | [`QueryCalcExitPoolCoinsFromSharesRequest`](#querycalcexitpoolcoinsfromsharesrequest) | [`QueryCalcExitPoolCoinsFromSharesResponse`](#querycalcexitpoolcoinsfromsharesresponse) | `GET /osmosis/gamm/v1beta1/pools/{pool_id}/exit_swap_share_amount_in` |   |
| `PoolParams` | [`QueryPoolParamsRequest`](#querypoolparamsrequest) | [`QueryPoolParamsResponse`](#querypoolparamsresponse) | `GET /osmosis/gamm/v1beta1/pools/{pool_id}/params` |   |
| `TotalPoolLiquidity` | [`QueryTotalPoolLiquidityRequest`](#querytotalpoolliquidityrequest) | [`QueryTotalPoolLiquidityResponse`](#querytotalpoolliquidityresponse) | `GET /osmosis/gamm/v1beta1/pools/{pool_id}/total_pool_liquidity` | **Deprecated.** Deprecated: please use the alternative in x/poolmanager |
| `TotalShares` | [`QueryTotalSharesRequest`](#querytotalsharesrequest) | [`QueryTotalSharesResponse`](#querytotalsharesresponse) | `GET /osmosis/gamm/v1beta1/pools/{pool_id}/total_shares` |   |
| `SpotPrice` | [`QuerySpotPriceRequest`](#queryspotpricerequest) | [`QuerySpotPriceResponse`](#queryspotpriceresponse) | `GET /osmosis/gamm/v1beta1/pools/{pool_id}/prices` | **Deprecated.** SpotPrice defines a gRPC query handler that returns the spot price given a base denomination and a quote denomination. |
| `EstimateSwapExactAmountIn` | [`QuerySwapExactAmountInRequest`](#queryswapexactamountinrequest) | [`QuerySwapExactAmountInResponse`](#queryswapexactamountinresponse) | `GET /osmosis/gamm/v1beta1/{pool_id}/estimate/swap_exact_amount_in` | **Deprecated.** Deprecated: please use the alternative in x/poolmanager |
| `EstimateSwapExactAmountOut` | [`QuerySwapExactAmountOutRequest`](#queryswapexactamountoutrequest) | [`QuerySwapExactAmountOutResponse`](#queryswapexactamountoutresponse) | `GET /osmosis/gamm/v1beta1/{pool_id}/estimate/swap_exact_amount_out` | **Deprecated.** Deprecated: please use the alternative in x/poolmanager |
| `Params` | [`ParamsRequest`](#paramsrequest) | [`ParamsResponse`](#paramsresponse) | `GET /osmosis/gamm/v1beta1/params` | Params returns gamm module params. |

## Messages

### GammCustomQueryType

Used for WASM bindings and JSON parsing

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `queryPool` | 1 | [`QueryPoolRequest`](#querypoolrequest) | singular |   |
| `queryPools` | 2 | [`QueryPoolsRequest`](#querypoolsrequest) | singular |   |
| `queryPoolType` | 3 | [`QueryPoolTypeRequest`](#querypooltyperequest) | singular |   |
| `queryPoolsWithFilter` | 4 | [`QueryPoolsWithFilterRequest`](#querypoolswithfilterrequest) | singular |   |
| `queryNumPools` | 5 | [`QueryNumPoolsRequest`](#querynumpoolsrequest) | singular |   |
| `queryTotalLiquidity` | 6 | [`QueryTotalLiquidityRequest`](#querytotalliquidityrequest) | singular |   |
| `queryTotalPoolLiquidity` | 7 | [`QueryTotalPoolLiquidityRequest`](#querytotalpoolliquidityrequest) | singular |   |
| `querySpotPrice` | 8 | [`QuerySpotPriceRequest`](#queryspotpricerequest) | singular |   |
| `queryPoolParams` | 9 | [`QueryPoolParamsRequest`](#querypoolparamsrequest) | singular |   |
| `queryTotalShares` | 10 | [`QueryTotalSharesRequest`](#querytotalsharesrequest) | singular |   |

### ParamsRequest

=============================== Params

No fields.

### ParamsResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `params` | 1 | [`Params`](params.md#params) | singular |   |

### QueryCalcExitPoolCoinsFromSharesRequest

=============================== CalcExitPoolCoinsFromShares

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |
| `share_in_amount` | 2 | `string` | singular |   |

### QueryCalcExitPoolCoinsFromSharesResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `tokens_out` | 1 | `cosmos.base.v1beta1.Coin` | repeated |   |

### QueryCalcJoinPoolNoSwapSharesRequest

=============================== CalcJoinPoolNoSwapShares

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |
| `tokens_in` | 2 | `cosmos.base.v1beta1.Coin` | repeated |   |

### QueryCalcJoinPoolNoSwapSharesResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `tokens_out` | 1 | `cosmos.base.v1beta1.Coin` | repeated |   |
| `shares_out` | 2 | `string` | singular |   |

### QueryCalcJoinPoolSharesRequest

=============================== CalcJoinPoolShares

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |
| `tokens_in` | 2 | `cosmos.base.v1beta1.Coin` | repeated |   |

### QueryCalcJoinPoolSharesResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `share_out_amount` | 1 | `string` | singular |   |
| `tokens_out` | 2 | `cosmos.base.v1beta1.Coin` | repeated |   |

### QueryNumPoolsRequest

=============================== NumPools

No fields.

### QueryNumPoolsResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `num_pools` | 1 | `uint64` | singular |   |

### QueryPoolParamsRequest

=============================== PoolParams

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |

### QueryPoolParamsResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `params` | 1 | `google.protobuf.Any` | singular |   |

### QueryPoolRequest

=============================== Pool

Deprecated: please use the alternative in x/poolmanager

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |

### QueryPoolResponse

Deprecated: please use the alternative in x/poolmanager

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool` | 1 | `google.protobuf.Any` | singular |   |

### QueryPoolsRequest

=============================== Pools

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pagination` | 2 | `cosmos.base.query.v1beta1.PageRequest` | singular | pagination defines an optional pagination for the request. |

### QueryPoolsResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pools` | 1 | `google.protobuf.Any` | repeated |   |
| `pagination` | 2 | `cosmos.base.query.v1beta1.PageResponse` | singular | pagination defines the pagination in the response. |

### QueryPoolsWithFilterRequest

=============================== PoolsWithFilter

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `min_liquidity` | 1 | `string` | singular | String of the coins in single string separated by comma. Ex) 10uatom,100uosmo |
| `pool_type` | 2 | `string` | singular |   |
| `pagination` | 3 | `cosmos.base.query.v1beta1.PageRequest` | singular |   |

### QueryPoolsWithFilterResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pools` | 1 | `google.protobuf.Any` | repeated |   |
| `pagination` | 2 | `cosmos.base.query.v1beta1.PageResponse` | singular | pagination defines the pagination in the response. |

### QueryPoolTypeRequest

=============================== PoolType

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |

### QueryPoolTypeResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_type` | 1 | `string` | singular |   |

### QuerySpotPriceRequest

QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice

query.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |
| `base_asset_denom` | 2 | `string` | singular |   |
| `quote_asset_denom` | 3 | `string` | singular |   |
| `withSwapFee` | 4 | `bool` | singular | DEPRECATED |

### QuerySpotPriceResponse

QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice

query.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `spot_price` | 1 | `string` | singular | String of the Dec. Ex) 10.203uatom |

### QuerySwapExactAmountInRequest

=============================== EstimateSwapExactAmountIn

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `pool_id` | 2 | `uint64` | singular |   |
| `token_in` | 3 | `string` | singular |   |
| `routes` | 4 | [`poolmanager.v1beta1.SwapAmountInRoute`](../../poolmanager/v1beta1/swap_route.md#swapamountinroute) | repeated |   |

### QuerySwapExactAmountInResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token_out_amount` | 1 | `string` | singular |   |

### QuerySwapExactAmountOutRequest

=============================== EstimateSwapExactAmountOut

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `pool_id` | 2 | `uint64` | singular |   |
| `routes` | 3 | [`poolmanager.v1beta1.SwapAmountOutRoute`](../../poolmanager/v1beta1/swap_route.md#swapamountoutroute) | repeated |   |
| `token_out` | 4 | `string` | singular |   |

### QuerySwapExactAmountOutResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token_in_amount` | 1 | `string` | singular |   |

### QueryTotalLiquidityRequest

No fields.

### QueryTotalLiquidityResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `liquidity` | 1 | `cosmos.base.v1beta1.Coin` | repeated |   |

### QueryTotalPoolLiquidityRequest

=============================== PoolLiquidity

Deprecated: please use the alternative in x/poolmanager

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |

### QueryTotalPoolLiquidityResponse

Deprecated: please use the alternative in x/poolmanager

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `liquidity` | 1 | `cosmos.base.v1beta1.Coin` | repeated |   |

### QueryTotalSharesRequest

=============================== TotalShares

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |

### QueryTotalSharesResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `total_shares` | 1 | `cosmos.base.v1beta1.Coin` | singular |   |
