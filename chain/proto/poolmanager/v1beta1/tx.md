---
description: "Generated schema for poolmanager/v1beta1/tx.proto: 1 service, 15 messages in the x/poolmanager module."
---

# poolmanager/v1beta1/tx.proto

Proto package `poolmanager.v1beta1`, part of the [x/poolmanager](../README.md) module. It declares 1 service, 15 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/poolmanager/v1beta1/tx.proto).

## Service Msg

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `SwapExactAmountIn` | [`MsgSwapExactAmountIn`](#msgswapexactamountin) | [`MsgSwapExactAmountInResponse`](#msgswapexactamountinresponse) | none |   |
| `SwapExactAmountOut` | [`MsgSwapExactAmountOut`](#msgswapexactamountout) | [`MsgSwapExactAmountOutResponse`](#msgswapexactamountoutresponse) | none |   |
| `SplitRouteSwapExactAmountIn` | [`MsgSplitRouteSwapExactAmountIn`](#msgsplitrouteswapexactamountin) | [`MsgSplitRouteSwapExactAmountInResponse`](#msgsplitrouteswapexactamountinresponse) | none |   |
| `SplitRouteSwapExactAmountOut` | [`MsgSplitRouteSwapExactAmountOut`](#msgsplitrouteswapexactamountout) | [`MsgSplitRouteSwapExactAmountOutResponse`](#msgsplitrouteswapexactamountoutresponse) | none |   |
| `SetDenomPairTakerFee` | [`MsgSetDenomPairTakerFee`](#msgsetdenompairtakerfee) | [`MsgSetDenomPairTakerFeeResponse`](#msgsetdenompairtakerfeeresponse) | none |   |
| `SetTakerFeeShareAgreementForDenom` | [`MsgSetTakerFeeShareAgreementForDenom`](#msgsettakerfeeshareagreementfordenom) | [`MsgSetTakerFeeShareAgreementForDenomResponse`](#msgsettakerfeeshareagreementfordenomresponse) | none |   |

## Messages

### DenomPairTakerFee

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `denom0` | 1 | `string` | singular | DEPRECATED: Now that we are using uni-directional trading pairs, we are using tokenInDenom and tokenOutDenom instead of denom0 and denom1 to prevent confusion. |
| `denom1` | 2 | `string` | singular |   |
| `taker_fee` | 3 | `string` | singular |   |
| `tokenInDenom` | 4 | `string` | singular |   |
| `tokenOutDenom` | 5 | `string` | singular |   |

### MsgSetDenomPairTakerFee

===================== MsgSetDenomPairTakerFee

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `denom_pair_taker_fee` | 2 | [`DenomPairTakerFee`](#denompairtakerfee) | repeated |   |

### MsgSetDenomPairTakerFeeResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `success` | 1 | `bool` | singular |   |

### MsgSetRegisteredAlloyedPool

===================== MsgSetRegisteredAlloyedPool

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `pool_id` | 2 | `uint64` | singular | pool_id is the id of the pool that is being registered as an alloyed pool. Only alloyed pools that intend to be used in taker fee revenue sharing should be registered. |

### MsgSetRegisteredAlloyedPoolResponse

No fields.

### MsgSetTakerFeeShareAgreementForDenom

===================== MsgSetTakerFeeShareAgreementForDenom

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `denom` | 2 | `string` | singular | denom is the denom that the taker fee share agreement is being set for. Ex. If this is set to "nBTC", then any trade route that includes "nBTC" will have the skim_percent skimmed from the taker fees and sent to the skim_address. |
| `skim_percent` | 3 | `string` | singular | skim_percent is the percentage of taker fees that will be skimmed for the bridge provider, in the event that the bridge provider's denom is included in the swap route. |
| `skim_address` | 4 | `string` | singular | skim_address is the address belonging to the respective bridge provider that the skimmed taker fees will be sent to at the end of each epoch. |

### MsgSetTakerFeeShareAgreementForDenomResponse

No fields.

### MsgSplitRouteSwapExactAmountIn

===================== MsgSplitRouteSwapExactAmountIn

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `routes` | 2 | [`SwapAmountInSplitRoute`](swap_route.md#swapamountinsplitroute) | repeated |   |
| `token_in_denom` | 3 | `string` | singular |   |
| `token_out_min_amount` | 4 | `string` | singular |   |

### MsgSplitRouteSwapExactAmountInResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token_out_amount` | 1 | `string` | singular |   |

### MsgSplitRouteSwapExactAmountOut

===================== MsgSplitRouteSwapExactAmountOut

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `routes` | 2 | [`SwapAmountOutSplitRoute`](swap_route.md#swapamountoutsplitroute) | repeated |   |
| `token_out_denom` | 3 | `string` | singular |   |
| `token_in_max_amount` | 4 | `string` | singular |   |

### MsgSplitRouteSwapExactAmountOutResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token_in_amount` | 1 | `string` | singular |   |

### MsgSwapExactAmountIn

===================== MsgSwapExactAmountIn

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `routes` | 2 | [`SwapAmountInRoute`](swap_route.md#swapamountinroute) | repeated |   |
| `token_in` | 3 | `cosmos.base.v1beta1.Coin` | singular |   |
| `token_out_min_amount` | 4 | `string` | singular |   |

### MsgSwapExactAmountInResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token_out_amount` | 1 | `string` | singular |   |

### MsgSwapExactAmountOut

===================== MsgSwapExactAmountOut

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `routes` | 2 | [`SwapAmountOutRoute`](swap_route.md#swapamountoutroute) | repeated |   |
| `token_in_max_amount` | 3 | `string` | singular |   |
| `token_out` | 4 | `cosmos.base.v1beta1.Coin` | singular |   |

### MsgSwapExactAmountOutResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token_in_amount` | 1 | `string` | singular |   |
