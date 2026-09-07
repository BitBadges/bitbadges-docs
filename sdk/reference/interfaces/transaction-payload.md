---
description: "A transaction payload is the payload for a given transaction context and messages. For Cosmos, the payload can be signed in Amino or Sign Direct format, so the…"
---

# Interface: TransactionPayload

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:108](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L108)

A transaction payload is the payload for a given transaction context and messages.
For Cosmos, the payload can be signed in Amino or Sign Direct format, so the payload.signDirect and
payload.legacyAmino are the payloads to sign.

If evmAddress is provided in TxContext, the payload will also include evmTx field with EVM transaction details.

## Properties

### evmTx?

> `optional` **evmTx?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:122](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L122)

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

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L116)

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

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:110](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L110)

Cosmos Sign Direct payload. Present when sender is provided in TxContext.

#### authInfo

> **authInfo**: `AuthInfo`

#### body

> **body**: `TxBody`

#### signBytes

> **signBytes**: `string`
