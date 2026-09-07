---
description: "createTransactionPayload creates a transaction payload for a given transaction context and messages."
---

# Function: createTransactionPayload()

> **createTransactionPayload**(`context`, `messages`): [`TransactionPayload`](/sdk/reference/interfaces/transaction-payload)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:231](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L231)

createTransactionPayload creates a transaction payload for a given transaction context and messages.

It returns the payload in the following format: { signDirect?, legacyAmino?, evmTx? }

Behavior:
- If only sender is provided: Only Cosmos payloads (signDirect, legacyAmino) will be generated
- If only evmAddress is provided: Only evmTx will be generated (no Cosmos payloads)
- If both are provided: Both Cosmos payloads and evmTx will be generated

signDirect and legacyAmino are the payloads for signing with the respective signing methods from the Cosmos SDK.
evmTx is included if evmAddress is provided in context and messages are supported for precompile conversion.

Messages can be either:
- SDK messages (with toProto() method) - will be used for both Cosmos and EVM conversion
- Proto messages (with getType() method) - will be used for Cosmos, EVM conversion will be attempted if possible

## Parameters

### context

[`TxContext`](/sdk/reference/interfaces/tx-context)

Transaction context. Must include either sender (for Cosmos) or evmAddress (for EVM), or both

### messages

`Message`\<`AnyMessage`\> \| `Message`\<`AnyMessage`\>[]

Messages to include in the transaction. Can be proto messages (with getType()) or SDK messages (with toProto())

## Returns

[`TransactionPayload`](/sdk/reference/interfaces/transaction-payload)

## Throws

If neither sender nor evmAddress is provided
