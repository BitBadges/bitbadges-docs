---
description: "Options for the signing client."
---

# Interface: SigningClientOptions

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:181](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L181)

Options for the signing client.

## Properties

### adapter

> **adapter**: [`WalletAdapterInterface`](/sdk/reference/interfaces/wallet-adapter-interface)

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:183](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L183)

The wallet adapter to use for signing

***

### apiKey?

> `optional` **apiKey?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:217](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L217)

BitBadges API key for authenticated requests

***

### apiUrl?

> `optional` **apiUrl?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:196](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L196)

Override the API URL (indexer). Overrides network preset.

***

### cosmosChainId?

> `optional` **cosmosChainId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:200](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L200)

Override the Cosmos chain ID. Overrides network preset.

***

### defaultGasLimit?

> `optional` **defaultGasLimit?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:213](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L213)

Default gas limit when not simulating. Default: 400000

***

### evmChainId?

> `optional` **evmChainId?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:202](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L202)

Override the EVM chain ID. Overrides network preset.

***

### evmPrecompileGasLimit?

> `optional` **evmPrecompileGasLimit?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:215](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L215)

Gas limit for EVM precompile transactions. Default: 2000000

***

### evmRpcUrl?

> `optional` **evmRpcUrl?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:204](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L204)

Override the EVM JSON-RPC URL. Overrides network preset.

***

### gasMultiplier?

> `optional` **gasMultiplier?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:211](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L211)

Gas multiplier for estimation. Default: 1.3

***

### maxSequenceRetries?

> `optional` **maxSequenceRetries?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:209](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L209)

Maximum sequence retry attempts. Default: 3

***

### network?

> `optional` **network?**: [`NetworkMode`](/sdk/reference/type-aliases/network-mode)

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:193](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L193)

Network mode preset. Use this for standard configurations.
- 'mainnet': BitBadges mainnet (default)
- 'testnet': BitBadges testnet
- 'local': Local development (localhost)

Individual URL/chainId options below will override the preset values.

***

### nodeUrl?

> `optional` **nodeUrl?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:198](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L198)

Override the node URL (LCD). Overrides network preset.

***

### sequenceRetryEnabled?

> `optional` **sequenceRetryEnabled?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:207](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L207)

Enable automatic sequence retry on mismatch. Default: true
