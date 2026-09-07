---
description: "The x/ibc-rate-limit middleware: per channel and denom caps on supply shift, unique senders, and per-address transfers, plus the governance messages."
---

# IBC rate limits

`x/ibc-rate-limit` is IBC middleware that caps token flow over IBC channels so that a burst of inflows or outflows cannot destabilize supply. Governance sets the limits per channel and denom. Node operators and integrators need this page to understand why a transfer was rejected and how limits are shaped.

```json
{
  "channel_id": "channel-2",
  "denom": "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
  "supply_shift_limits": [
    { "max_amount": "1000000000000", "timeframe_type": "TIMEFRAME_TYPE_DAY", "timeframe_duration": "1" }
  ],
  "unique_sender_limits": [
    { "max_unique_senders": "500", "timeframe_type": "TIMEFRAME_TYPE_HOUR", "timeframe_duration": "1" }
  ],
  "address_limits": [
    { "max_transfers": "20", "max_amount": "100000000000", "timeframe_type": "TIMEFRAME_TYPE_DAY", "timeframe_duration": "1" }
  ]
}
```

## How it works

The module wraps the transfer application. Its hooks:

1. Check limits before an inbound packet is processed (`OnRecvPacketOverride`).
2. Check limits before an outbound packet is sent (`SendPacketOverride`).
3. Record transfer statistics after a successful transfer.

Three kinds of limit exist:

- Supply shift: the absolute value of net flow (inflows minus outflows) over a timeframe.
- Unique senders: how many distinct addresses may send through a channel in a timeframe.
- Per address: how many transfers and how much total amount one address may send in a timeframe.

Each config targets one `channel_id` and `denom`. An empty `channel_id` applies to every channel; `denom` is required. Configs are checked in order and the first match is used. If no config matches, the transfer is allowed. Inside a matching config every listed limit is checked; if any would be exceeded, the transfer is rejected.

Timeframes:

| `timeframe_type` | `timeframe_duration` means |
| --- | --- |
| `TIMEFRAME_TYPE_BLOCK` | number of blocks |
| `TIMEFRAME_TYPE_HOUR` | hours, converted to blocks using block time |
| `TIMEFRAME_TYPE_DAY` | days, converted to blocks using block time |

A `max_amount`, `max_unique_senders`, or `max_transfers` of `0` disables that particular limit.

## Params

```proto
message Params {
  // Configurations are checked in order, and the first matching config is used
  // If no config matches, the transfer is allowed (no rate limit)
  repeated RateLimitConfig rate_limits = 1;
}

message RateLimitConfig {
  string channel_id = 1;                       // empty = all channels
  string denom = 2;                            // required
  repeated TimeframeLimit supply_shift_limits = 5;
  repeated UniqueSenderLimit unique_sender_limits = 6;
  repeated AddressLimit address_limits = 7;
}

message TimeframeLimit {
  string max_amount = 1;           // math.Int as string; 0 disables
  TimeframeType timeframe_type = 2;
  int64 timeframe_duration = 3;
}

message UniqueSenderLimit {
  int64 max_unique_senders = 1;    // 0 disables
  TimeframeType timeframe_type = 2;
  int64 timeframe_duration = 3;
}

message AddressLimit {
  int64 max_transfers = 1;         // 0 disables
  string max_amount = 2;           // 0 disables
  TimeframeType timeframe_type = 3;
  int64 timeframe_duration = 4;
}
```

Tracked state per channel: `ChannelFlow.net_flow` (positive means more inflow than outflow), `ChannelFlowWindow` (`window_start` height and `window_duration` in blocks), `UniqueSenders.senders`, and `AddressTransferData` (`transfer_count`, `total_amount`).

## Messages

Both messages are signed by the module authority, which defaults to the `x/gov` module account (`bb10d07y265gmmuvt4z0w9aw880jnsr700jelmk2z` on mainnet). Submit them inside a governance proposal.

### MsgUpdateRateLimit

Adds or replaces one config. If a config with the same `channel_id` and `denom` exists, it is updated in place; otherwise the config is appended.

```json
{
  "@type": "/ibcratelimit.MsgUpdateRateLimit",
  "authority": "bb10d07y265gmmuvt4z0w9aw880jnsr700jelmk2z",
  "rate_limit": {
    "channel_id": "channel-40",
    "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8",
    "supply_shift_limits": [
      { "max_amount": "5000000000000", "timeframe_type": "TIMEFRAME_TYPE_DAY", "timeframe_duration": "1" }
    ],
    "unique_sender_limits": [],
    "address_limits": []
  }
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authority` | string | yes | Module authority (governance account) |
| `rate_limit` | `RateLimitConfig` | yes | Config to add or update |

### MsgUpdateParams

Replaces the whole parameter set. All parameters must be supplied.

```json
{
  "@type": "/ibcratelimit.MsgUpdateParams",
  "authority": "bb10d07y265gmmuvt4z0w9aw880jnsr700jelmk2z",
  "params": {
    "rate_limits": [
      {
        "channel_id": "",
        "denom": "ubadge",
        "supply_shift_limits": [
          { "max_amount": "100000000000000", "timeframe_type": "TIMEFRAME_TYPE_DAY", "timeframe_duration": "1" }
        ],
        "unique_sender_limits": [],
        "address_limits": []
      }
    ]
  }
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authority` | string | yes | Module authority (governance account) |
| `params.rate_limits` | `RateLimitConfig[]` | yes | Full ordered list of configs |

The module has no query service. Read the live configuration from the module's genesis export or from the governance proposal that set it.

## Related

- [IBC and x/bank compatibility](../../token-standard/ibc/README.md)
- [Supported denoms](../supported-denoms.md)
- [Cosmos coin wrapper paths](../../token-standard/ibc/cosmos-coin-wrapper-paths.md)
