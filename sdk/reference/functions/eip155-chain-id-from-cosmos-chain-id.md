---
description: "Maps a Cosmos chain numeric id (1 = mainnet, 2 = testnet) to the corresponding EIP-155 numeric chain id used by the EVM module."
---

# Function: eip155ChainIdFromCosmosChainId()

> **eip155ChainIdFromCosmosChainId**(`cosmosChainNumeric`): `number`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/build.ts:49](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/build.ts#L49)

Maps a Cosmos chain numeric id (1 = mainnet, 2 = testnet) to the
corresponding EIP-155 numeric chain id used by the EVM module.

Throws on unknown ids — callers using a chainIdOverride / local devnet
must pass the EIP-155 chain id explicitly.

## Parameters

### cosmosChainNumeric

`number`

## Returns

`number`
