---
description: "Generated schema for ibcratelimit/params.proto: 5 messages, 1 enum in the x/ibc-rate-limit module."
---

# ibcratelimit/params.proto

Proto package `ibcratelimit`, part of the [x/ibc-rate-limit](README.md) module. It declares 5 messages, 1 enum. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/ibcratelimit/params.proto).

## Messages

### AddressLimit

AddressLimit defines limits per address

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `max_transfers` | 1 | `int64` | singular | max_transfers is the maximum number of transfers allowed per address in the timeframe If set to 0, transfer count limit is disabled |
| `max_amount` | 2 | `string` | singular | max_amount is the maximum total amount allowed per address in the timeframe Value is represented as an integer (e.g., "1000000" = 1,000,000 tokens) If set to 0, amount limit is disabled |
| `timeframe_type` | 3 | [`TimeframeType`](#timeframetype) | singular | timeframe_type defines the type of timeframe (block, hour, day) |
| `timeframe_duration` | 4 | `int64` | singular | timeframe_duration is the duration of the timeframe |

### Params

Params defines the parameters for the module.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `rate_limits` | 1 | [`RateLimitConfig`](#ratelimitconfig) | repeated | rate_limits is an array of rate limit configurations Each configuration can specify channel_id, denom, and various limit types (supply_shift_limits, unique_sender_limits, address_limits) Configurations are checked in order, and the first matching config is used If no config matches, the transfer is allowed (no rate limit) |

### RateLimitConfig

RateLimitConfig defines a rate limit configuration for a specific channel and denom

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `channel_id` | 1 | `string` | singular | channel_id is the IBC channel ID this rate limit applies to If empty, applies to all channels |
| `denom` | 2 | `string` | singular | denom is the denomination this rate limit applies to Must be specified (empty denoms are not allowed) |
| `supply_shift_limits` | 5 | [`TimeframeLimit`](#timeframelimit) | repeated | supply_shift_limits defines multiple timeframe limits for supply shift All limits are checked, and the transfer is rejected if any limit would be exceeded |
| `unique_sender_limits` | 6 | [`UniqueSenderLimit`](#uniquesenderlimit) | repeated | unique_sender_limits defines limits on unique senders per channel All limits are checked, and the transfer is rejected if any limit would be exceeded |
| `address_limits` | 7 | [`AddressLimit`](#addresslimit) | repeated | address_limits defines per-address transfer limits All limits are checked, and the transfer is rejected if any limit would be exceeded |

### TimeframeLimit

TimeframeLimit defines a limit for a specific timeframe

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `max_amount` | 1 | `string` | singular | max_amount is the maximum absolute amount of supply change allowed in this timeframe Value is represented as an integer (e.g., "1000000" = 1,000,000 tokens) If set to 0, this limit is disabled |
| `timeframe_type` | 2 | [`TimeframeType`](#timeframetype) | singular | timeframe_type defines the type of timeframe (block, hour, day) |
| `timeframe_duration` | 3 | `int64` | singular | timeframe_duration is the duration of the timeframe For BLOCK: number of blocks For HOUR: number of hours (will be converted to blocks using block time) For DAY: number of days (will be converted to blocks using block time) |

### UniqueSenderLimit

UniqueSenderLimit defines limits on unique senders per channel

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `max_unique_senders` | 1 | `int64` | singular | max_unique_senders is the maximum number of unique senders allowed in the timeframe If set to 0, this limit is disabled |
| `timeframe_type` | 2 | [`TimeframeType`](#timeframetype) | singular | timeframe_type defines the type of timeframe (block, hour, day) |
| `timeframe_duration` | 3 | `int64` | singular | timeframe_duration is the duration of the timeframe |

## Enums

### TimeframeType

TimeframeType defines the type of timeframe

| Value | # | Description |
| --- | --- | --- |
| `TIMEFRAME_TYPE_UNSPECIFIED` | 0 |   |
| `TIMEFRAME_TYPE_BLOCK` | 1 | Duration in blocks |
| `TIMEFRAME_TYPE_HOUR` | 2 | Duration in hours (converted to blocks using block time) |
| `TIMEFRAME_TYPE_DAY` | 3 | Duration in days (converted to blocks using block time) |
