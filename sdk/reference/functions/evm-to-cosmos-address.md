---
description: "Convert EVM address to Cosmos bech32 address"
---

# Function: evmToCosmosAddress()

> **evmToCosmosAddress**(`evmAddress`, `prefix?`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/helpers.ts:58](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/helpers.ts#L58)

Convert EVM address to Cosmos bech32 address

## Parameters

### evmAddress

`string`

The EVM address (0x...)

### prefix?

`string` = `'bb'`

The bech32 prefix (default: 'bb')

## Returns

`string`

The Cosmos bech32 address

## Throws

If address conversion fails
