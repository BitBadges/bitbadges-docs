---
description: "Generated schema for ibcratelimit/tx.proto: 1 service, 4 messages in the x/ibc-rate-limit module."
---

# ibcratelimit/tx.proto

Proto package `ibcratelimit`, part of the [x/ibc-rate-limit](README.md) module. It declares 1 service, 4 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/ibcratelimit/tx.proto).

## Service Msg

Msg defines the Msg service.

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `UpdateParams` | [`MsgUpdateParams`](#msgupdateparams) | [`MsgUpdateParamsResponse`](#msgupdateparamsresponse) | none | UpdateParams defines a (governance) operation for updating the module parameters. The authority defaults to the x/gov module account. |
| `UpdateRateLimit` | [`MsgUpdateRateLimit`](#msgupdateratelimit) | [`MsgUpdateRateLimitResponse`](#msgupdateratelimitresponse) | none | UpdateRateLimit defines a (governance) operation for updating or adding a single rate limit. If a rate limit with the same channel_id and denom exists, it will be updated. Otherwise, it will be appended to the list. The authority defaults to the x/gov module account. |

## Messages

### MsgUpdateParams

MsgUpdateParams is the Msg/UpdateParams request type.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `authority` | 1 | `string` | singular | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| `params` | 2 | [`Params`](params.md#params) | singular | params defines the module parameters to update. NOTE: All parameters must be supplied. |

### MsgUpdateParamsResponse

MsgUpdateParamsResponse defines the response structure for executing a

MsgUpdateParams message.

No fields.

### MsgUpdateRateLimit

MsgUpdateRateLimit is the Msg/UpdateRateLimit request type.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `authority` | 1 | `string` | singular | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| `rate_limit` | 2 | [`RateLimitConfig`](params.md#ratelimitconfig) | singular | rate_limit defines the rate limit configuration to update or add. If a rate limit with the same channel_id and denom exists, it will be updated. Otherwise, it will be appended to the list. |

### MsgUpdateRateLimitResponse

MsgUpdateRateLimitResponse defines the response structure for executing a

MsgUpdateRateLimit message.

No fields.
