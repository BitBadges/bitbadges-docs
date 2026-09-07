---
description: "Generated schema for gamm/v2/query.proto: 1 service, 2 messages in the x/gamm module."
---

# gamm/v2/query.proto

Proto package `gamm.v2`, part of the [x/gamm](../README.md) module. It declares 1 service, 2 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/gamm/v2/query.proto).

## Service Query

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `SpotPrice` | [`QuerySpotPriceRequest`](#queryspotpricerequest) | [`QuerySpotPriceResponse`](#queryspotpriceresponse) | `GET /osmosis/gamm/v2/pools/{pool_id}/prices` | **Deprecated.** Deprecated: please use alternate in x/poolmanager |

## Messages

### QuerySpotPriceRequest

Deprecated: please use alternate in x/poolmanager

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pool_id` | 1 | `uint64` | singular |   |
| `base_asset_denom` | 2 | `string` | singular |   |
| `quote_asset_denom` | 3 | `string` | singular |   |
| `withSwapFee` | 4 | `bool` | singular | DEPRECATED |

### QuerySpotPriceResponse

Deprecated: please use alternate in x/poolmanager

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `spot_price` | 1 | `string` | singular | String of the Dec. Ex) 10.203uatom |
