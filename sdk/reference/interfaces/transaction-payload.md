---
description: "A transaction payload is the payload for a given transaction context and messages. For Cosmos, the payload can be signed in Amino or Sign Direct format, so the…"
---

# Interface: TransactionPayload

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L117)

A transaction payload is the payload for a given transaction context and messages.
For Cosmos, the payload can be signed in Amino or Sign Direct format, so the payload.signDirect and
payload.legacyAmino are the payloads to sign.

If evmAddress is provided in TxContext, the payload will also include evmTx field with EVM transaction details.

## Properties

### eip712?

> `optional` **eip712?**: [`EIP712TypedData`](/sdk/reference/interfaces/eip712-typed-data)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:148](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L148)

EIP-712 typed-data payload (`{ domain, types, primaryType, message }`)
for the same Cosmos messages, ready to sign with `eth_signTypedData_v4`
(MetaMask / Privy / Coinbase Smart Wallet) or our own `hashTypedData`.
Present when sender is provided. Compatible with the Cosmos EVM ante
handler's EIP-712 verification path.

***

### evmTx?

> `optional` **evmTx?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:131](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L131)

Optional EVM transaction details. Present when evmAddress is provided in TxContext and messages are supported.

#### data

> **data**: `string`

Encoded function call data (ready to send in a transaction)

#### functionName

> **functionName**: `string`

Function name (for debugging/logging)

#### to

> **to**: `string`

Precompile contract address (0x1001 for tokenization, 0x1002 for gamm, 0x1003 for sendmanager)

#### value

> **value**: `string`

Transaction value (always "0" for precompiles)

***

### legacyAmino

> **legacyAmino**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:125](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L125)

Cosmos Legacy Amino payload. Present when sender is provided in TxContext.

#### authInfo

> **authInfo**: `AuthInfo`

#### body

> **body**: `TxBody`

#### signBytes

> **signBytes**: `string`

***

### signDirect

> **signDirect**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:119](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L119)

Cosmos Sign Direct payload. Present when sender is provided in TxContext.

#### authInfo

> **authInfo**: `AuthInfo`

#### body

> **body**: `TxBody`

#### signBytes

> **signBytes**: `string`
