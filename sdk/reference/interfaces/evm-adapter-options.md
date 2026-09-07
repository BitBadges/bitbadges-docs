---
description: "Options for creating an EVM adapter with chain validation."
---

# Interface: EvmAdapterOptions

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:51](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L51)

Options for creating an EVM adapter with chain validation.

## Properties

### expectedChainId?

> `optional` **expectedChainId?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:56](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L56)

Expected EVM chain ID. If provided, the adapter will validate that
the wallet is connected to this chain.
