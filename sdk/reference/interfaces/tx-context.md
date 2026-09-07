---
description: "LegacyTxContext is the transaction context for the transaction payload."
---

# Interface: TxContext

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L30)

LegacyTxContext is the transaction context for the transaction payload.

## Properties

### chainIdOverride?

> `optional` **chainIdOverride?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L34)

Override the chain ID to a custom value. Uses BitBadges mainnet by default.

***

### eip155ChainIdOverride?

> `optional` **eip155ChainIdOverride?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:78](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L78)

Override the EIP-155 numeric chain id used when building the EIP-712
typed-data payload. Default: derived from `testnet` (50024 mainnet,
50025 testnet). Required for custom chains (e.g. 90123 for local
devnet) since they don't match the default mapping.

***

### evmAddress?

> `optional` **evmAddress?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:71](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L71)

Optional EVM address for precompile conversion. If provided, payload will include evmTx field.

Behavior:
- If only evmAddress is provided: Only evmTx will be generated (no Cosmos payloads)
- If only sender is provided: Only Cosmos payloads will be generated (no evmTx)
- If both are provided: Both Cosmos payloads and evmTx will be generated

***

### fee

> **fee**: [`Fee`](/sdk/reference/interfaces/fee)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:61](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L61)

***

### memo?

> `optional` **memo?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L62)

***

### sender?

> `optional` **sender?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L44)

Details about the sender of this transaction. Address must be a BitBadges address (bb-prefixed).

Required if you want to generate Cosmos payloads (signDirect, legacyAmino).
If only evmAddress is provided, Cosmos payloads will not be generated.

Public key is required for Cosmos signatures.

#### accountNumber

> **accountNumber**: [`Uint64Like`](/sdk/reference/type-aliases/uint64-like)

Account number. Post-v34 accounts get hash-derived numbers above 2^53
— pass the chain's string value (or a bigint) unchanged; never convert
it with Number(). Unsafe `number` inputs are rejected loudly.

#### address

> **address**: `string`

#### publicKey

> **publicKey**: `string`

#### sequence

> **sequence**: [`Uint64Like`](/sdk/reference/type-aliases/uint64-like)

Sequence (nonce). Post-v34 unordered-tx nonces can be nanosecond
timestamps above 2^53 — pass the chain's string value (or a bigint)
unchanged; never convert it with Number().

***

### testnet?

> `optional` **testnet?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/base.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/base.ts#L32)

Use the BitBadges testnet? Usee mainnet by default.
