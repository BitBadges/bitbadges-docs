---
description: "Given the transaction context, payload, and signature, create the raw transaction to be sent to the blockchain. Signatures, context, and payload must be…"
---

# Function: createTxBroadcastBody()

> **createTxBroadcastBody**(`txContext`, `messages`, `signature`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:357](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L357)

Given the transaction context, payload, and signature, create the raw transaction to be sent to the blockchain.
Signatures, context, and payload must be provided and well-formed.

This can be sent to BitBadgesApi.broadcastTx, BitBadgesApi.simulateTx, or a node's REST API endpoint
using the  `/cosmos/tx/v1beta1/txs` endpoint.

See the BitBadges API documentation for more details:
https://docs.bitbadges.io/for-developers/create-and-broadcast-txs

## Parameters

### txContext

[`TxContext`](/sdk/reference/interfaces/tx-context)

### messages

`Message`\<`AnyMessage`\> \| `Message`\<`AnyMessage`\>[]

### signature

`string`

## Returns

`string`
