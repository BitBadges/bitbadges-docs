---
description: "Generated schema for poolmanager/v2/query.proto: 1 service, 2 messages in the x/poolmanager module."
---

# poolmanager/v2/query.proto

Proto package `poolmanager.v2`, part of the [x/poolmanager](../README.md) module. It declares 1 service, 2 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/poolmanager/v2/query.proto).

## Service Query

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `SpotPriceV2` | [`SpotPriceRequest`](#spotpricerequest) | [`SpotPriceResponse`](#spotpriceresponse) | `GET /osmosis/poolmanager/v2/pools/{pool_id}/prices` | SpotPriceV2 defines a gRPC query handler that returns the spot price given a base denomination and a quote denomination. The returned spot price has 36 decimal places. However, some of modules perform sig fig rounding so most of the rightmost decimals can be zeroes. |

## Messages

### SpotPriceRequest

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
| `spot_price` | 1 | `string` | singular | String of the BigDec. Ex) 10.203uatom |
