---
description: "Generated schema for poolmanager/v1beta1/swap_route.proto: 5 messages in the x/poolmanager module."
---

# poolmanager/v1beta1/swap_route.proto

Proto package `poolmanager.v1beta1`, part of the [x/poolmanager](../README.md) module. It declares 5 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/poolmanager/v1beta1/swap_route.proto).

## Messages

### Affiliate

===================== Affiliate

Affiliate represents an affiliate fee recipient

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `basis_points_fee` | 1 | `string` | singular | basis_points_fee is the fee in basis points (1/10000, e.g., 100 = 1%) |
| `address` | 2 | `string` | singular | address is the affiliate recipient address |

### SwapAmountInRoute

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |
| `token_out_denom` | 2 | `string` | singular |   |

### SwapAmountInSplitRoute

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pools` | 1 | [`SwapAmountInRoute`](#swapamountinroute) | repeated |   |
| `token_in_amount` | 2 | `string` | singular |   |

### SwapAmountOutRoute

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |
| `token_in_denom` | 2 | `string` | singular |   |

### SwapAmountOutSplitRoute

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pools` | 1 | [`SwapAmountOutRoute`](#swapamountoutroute) | repeated |   |
| `token_out_amount` | 2 | `string` | singular |   |
