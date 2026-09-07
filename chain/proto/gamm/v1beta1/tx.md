---
description: "Generated schema for gamm/v1beta1/tx.proto: 1 service, 20 messages in the x/gamm module."
---

# gamm/v1beta1/tx.proto

Proto package `gamm.v1beta1`, part of the [x/gamm](../README.md) module. It declares 1 service, 20 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/gamm/v1beta1/tx.proto).

## Service Msg

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `JoinPool` | [`MsgJoinPool`](#msgjoinpool) | [`MsgJoinPoolResponse`](#msgjoinpoolresponse) | none |   |
| `ExitPool` | [`MsgExitPool`](#msgexitpool) | [`MsgExitPoolResponse`](#msgexitpoolresponse) | none |   |
| `SwapExactAmountIn` | [`MsgSwapExactAmountIn`](#msgswapexactamountin) | [`MsgSwapExactAmountInResponse`](#msgswapexactamountinresponse) | none |   |
| `SwapExactAmountOut` | [`MsgSwapExactAmountOut`](#msgswapexactamountout) | [`MsgSwapExactAmountOutResponse`](#msgswapexactamountoutresponse) | none |   |
| `JoinSwapExternAmountIn` | [`MsgJoinSwapExternAmountIn`](#msgjoinswapexternamountin) | [`MsgJoinSwapExternAmountInResponse`](#msgjoinswapexternamountinresponse) | none |   |
| `JoinSwapShareAmountOut` | [`MsgJoinSwapShareAmountOut`](#msgjoinswapshareamountout) | [`MsgJoinSwapShareAmountOutResponse`](#msgjoinswapshareamountoutresponse) | none |   |
| `ExitSwapExternAmountOut` | [`MsgExitSwapExternAmountOut`](#msgexitswapexternamountout) | [`MsgExitSwapExternAmountOutResponse`](#msgexitswapexternamountoutresponse) | none |   |
| `ExitSwapShareAmountIn` | [`MsgExitSwapShareAmountIn`](#msgexitswapshareamountin) | [`MsgExitSwapShareAmountInResponse`](#msgexitswapshareamountinresponse) | none |   |
| `SwapExactAmountInWithIBCTransfer` | [`MsgSwapExactAmountInWithIBCTransfer`](#msgswapexactamountinwithibctransfer) | [`MsgSwapExactAmountInWithIBCTransferResponse`](#msgswapexactamountinwithibctransferresponse) | none |   |

## Messages

### GammCustomMsgType

Used for WASM bindings and JSON parsing

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `joinPoolMsg` | 1 | [`MsgJoinPool`](#msgjoinpool) | singular |   |
| `exitPoolMsg` | 2 | [`MsgExitPool`](#msgexitpool) | singular |   |
| `swapExactAmountInMsg` | 3 | [`MsgSwapExactAmountIn`](#msgswapexactamountin) | singular |   |
| `swapExactAmountOutMsg` | 4 | [`MsgSwapExactAmountOut`](#msgswapexactamountout) | singular |   |
| `joinSwapExternAmountInMsg` | 5 | [`MsgJoinSwapExternAmountIn`](#msgjoinswapexternamountin) | singular |   |
| `joinSwapShareAmountOutMsg` | 6 | [`MsgJoinSwapShareAmountOut`](#msgjoinswapshareamountout) | singular |   |
| `exitSwapShareAmountInMsg` | 7 | [`MsgExitSwapShareAmountIn`](#msgexitswapshareamountin) | singular |   |
| `exitSwapExternAmountOutMsg` | 8 | [`MsgExitSwapExternAmountOut`](#msgexitswapexternamountout) | singular |   |
| `swapExactAmountInWithIBCTransferMsg` | 9 | [`MsgSwapExactAmountInWithIBCTransfer`](#msgswapexactamountinwithibctransfer) | singular |   |

### IBCTransferInfo

===================== IBC Transfer Info

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `source_channel` | 1 | `string` | singular |   |
| `receiver` | 2 | `string` | singular |   |
| `memo` | 3 | `string` | singular |   |
| `timeout_timestamp` | 4 | `uint64` | singular |   |

### MsgExitPool

===================== MsgExitPool

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `pool_id` | 2 | `uint64` | singular |   |
| `share_in_amount` | 3 | `string` | singular |   |
| `token_out_mins` | 4 | `cosmos.base.v1beta1.Coin` | repeated |   |

### MsgExitPoolResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token_out` | 1 | `cosmos.base.v1beta1.Coin` | repeated |   |

### MsgExitSwapExternAmountOut

===================== MsgExitSwapExternAmountOut

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `pool_id` | 2 | `uint64` | singular |   |
| `token_out` | 3 | `cosmos.base.v1beta1.Coin` | singular |   |
| `share_in_max_amount` | 4 | `string` | singular |   |

### MsgExitSwapExternAmountOutResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `share_in_amount` | 1 | `string` | singular |   |

### MsgExitSwapShareAmountIn

===================== MsgExitSwapShareAmountIn

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `pool_id` | 2 | `uint64` | singular |   |
| `token_out_denom` | 3 | `string` | singular |   |
| `share_in_amount` | 4 | `string` | singular |   |
| `token_out_min_amount` | 5 | `string` | singular |   |

### MsgExitSwapShareAmountInResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token_out_amount` | 1 | `string` | singular |   |

### MsgJoinPool

===================== MsgJoinPool

This is really MsgJoinPoolNoSwap

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `pool_id` | 2 | `uint64` | singular |   |
| `share_out_amount` | 3 | `string` | singular |   |
| `token_in_maxs` | 4 | `cosmos.base.v1beta1.Coin` | repeated |   |

### MsgJoinPoolResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `share_out_amount` | 1 | `string` | singular |   |
| `token_in` | 2 | `cosmos.base.v1beta1.Coin` | repeated |   |

### MsgJoinSwapExternAmountIn

===================== MsgJoinSwapExternAmountIn

TODO: Rename to MsgJoinSwapExactAmountIn

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `pool_id` | 2 | `uint64` | singular |   |
| `token_in` | 3 | `cosmos.base.v1beta1.Coin` | singular |   |
| `share_out_min_amount` | 4 | `string` | singular |   |

### MsgJoinSwapExternAmountInResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `share_out_amount` | 1 | `string` | singular |   |

### MsgJoinSwapShareAmountOut

===================== MsgJoinSwapShareAmountOut

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `pool_id` | 2 | `uint64` | singular |   |
| `token_in_denom` | 3 | `string` | singular |   |
| `share_out_amount` | 4 | `string` | singular |   |
| `token_in_max_amount` | 5 | `string` | singular |   |

### MsgJoinSwapShareAmountOutResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token_in_amount` | 1 | `string` | singular |   |

### MsgSwapExactAmountIn

===================== MsgSwapExactAmountIn

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `routes` | 2 | [`poolmanager.v1beta1.SwapAmountInRoute`](../../poolmanager/v1beta1/swap_route.md#swapamountinroute) | repeated |   |
| `token_in` | 3 | `cosmos.base.v1beta1.Coin` | singular |   |
| `token_out_min_amount` | 4 | `string` | singular |   |
| `affiliates` | 5 | [`poolmanager.v1beta1.Affiliate`](../../poolmanager/v1beta1/swap_route.md#affiliate) | repeated | affiliates are optional fee recipients that receive fees calculated from token_out_min_amount |

### MsgSwapExactAmountInResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token_out_amount` | 1 | `string` | singular |   |

### MsgSwapExactAmountInWithIBCTransfer

===================== MsgSwapExactAmountInWithIBCTransfer

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `routes` | 2 | [`poolmanager.v1beta1.SwapAmountInRoute`](../../poolmanager/v1beta1/swap_route.md#swapamountinroute) | repeated |   |
| `token_in` | 3 | `cosmos.base.v1beta1.Coin` | singular |   |
| `token_out_min_amount` | 4 | `string` | singular |   |
| `ibc_transfer_info` | 5 | [`IBCTransferInfo`](#ibctransferinfo) | singular |   |
| `affiliates` | 6 | [`poolmanager.v1beta1.Affiliate`](../../poolmanager/v1beta1/swap_route.md#affiliate) | repeated | affiliates are optional fee recipients that receive fees calculated from token_out_min_amount |

### MsgSwapExactAmountInWithIBCTransferResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token_out_amount` | 1 | `string` | singular |   |

### MsgSwapExactAmountOut

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sender` | 1 | `string` | singular |   |
| `routes` | 2 | [`poolmanager.v1beta1.SwapAmountOutRoute`](../../poolmanager/v1beta1/swap_route.md#swapamountoutroute) | repeated |   |
| `token_in_max_amount` | 3 | `string` | singular |   |
| `token_out` | 4 | `cosmos.base.v1beta1.Coin` | singular |   |

### MsgSwapExactAmountOutResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `token_in_amount` | 1 | `string` | singular |   |
