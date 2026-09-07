---
description: "Generated schema for cosmwasm/wasm/v1/tx.proto: 2 messages in the x/wasm module."
---

# cosmwasm/wasm/v1/tx.proto

Proto package `cosmwasm.wasm.v1`, part of the [x/wasm](../../README.md) module. It declares 2 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/cosmwasm/wasm/v1/tx.proto).

## Messages

### MsgUpdateParams

MsgUpdateParams is the MsgUpdateParams request type.

Since: 0.40

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `authority` | 1 | `string` | singular | Authority is the address of the governance account. |
| `params` | 2 | [`Params`](types.md#params) | singular | params defines the x/wasm parameters to update. NOTE: All parameters must be supplied. |

### MsgUpdateParamsResponse

MsgUpdateParamsResponse defines the response structure for executing a

MsgUpdateParams message.

Since: 0.40

No fields.
