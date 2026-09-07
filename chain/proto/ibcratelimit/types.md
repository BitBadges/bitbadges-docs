---
description: "Generated schema for ibcratelimit/types.proto: 4 messages in the x/ibc-rate-limit module."
---

# ibcratelimit/types.proto

Proto package `ibcratelimit`, part of the [x/ibc-rate-limit](README.md) module. It declares 4 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/ibcratelimit/types.proto).

## Messages

### AddressTransferData

AddressTransferData tracks transfer data for a specific address

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `transfer_count` | 1 | `int64` | singular | transfer_count is the number of transfers made by this address |
| `total_amount` | 2 | `string` | singular | total_amount is the total amount transferred by this address |

### ChannelFlow

ChannelFlow tracks the net flow (inflow - outflow) for a channel

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `net_flow` | 1 | `string` | singular | net_flow is the net amount transferred (inflow - outflow) in the current window Positive values mean more inflow than outflow Negative values mean more outflow than inflow |

### ChannelFlowWindow

ChannelFlowWindow tracks the time window for rate limiting

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `window_start` | 1 | `int64` | singular | window_start is the block height when the current window started |
| `window_duration` | 2 | `int64` | singular | window_duration is the duration of the window in blocks |

### UniqueSenders

UniqueSenders tracks unique sender addresses for a channel

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `senders` | 1 | `string` | repeated | senders is a list of unique sender addresses |
