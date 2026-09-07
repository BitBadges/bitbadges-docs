---
description: "Generated schema for sendmanager/v1/tx.proto: 1 service, 4 messages in the x/sendmanager module."
---

# sendmanager/v1/tx.proto

Proto package `sendmanager`, part of the [x/sendmanager](../README.md) module. It declares 1 service, 4 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/sendmanager/v1/tx.proto).

## Service Msg

Msg defines the Msg service.

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `UpdateParams` | [`MsgUpdateParams`](#msgupdateparams) | [`MsgUpdateParamsResponse`](#msgupdateparamsresponse) | none | UpdateParams defines a (governance) operation for updating the module parameters. The authority defaults to the x/gov module account. |
| `SendWithAliasRouting` | [`MsgSendWithAliasRouting`](#msgsendwithaliasrouting) | [`MsgSendWithAliasRoutingResponse`](#msgsendwithaliasroutingresponse) | none | SendWithAliasRouting defines a message for sending coins with alias denom routing. This allows sending both standard coins and alias denoms (e.g., badgeslp:) through the sendmanager. |

## Messages

### MsgSendWithAliasRouting

MsgSendWithAliasRouting defines a message for sending coins with alias denom routing.

This message mirrors cosmos bank MsgSend but routes through sendmanager to handle

both standard coins and alias denoms (e.g., badgeslp:).

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `from_address` | 1 | `string` | singular | from_address is the address of the account sending the coins. |
| `to_address` | 2 | `string` | singular | to_address is the address of the account receiving the coins. |
| `amount` | 3 | `cosmos.base.v1beta1.Coin` | repeated | amount is the list of coins to send. |

### MsgSendWithAliasRoutingResponse

MsgSendWithAliasRoutingResponse defines the response structure for executing a

MsgSendWithAliasRouting message.

No fields.

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
