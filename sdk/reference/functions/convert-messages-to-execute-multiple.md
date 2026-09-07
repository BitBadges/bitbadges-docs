---
description: "Convert multiple tokenization messages to executeMultiple precompile call"
---

# Function: convertMessagesToExecuteMultiple()

> **convertMessagesToExecuteMultiple**(`messages`, `evmAddress?`): [`PrecompileCallResult`](/sdk/reference/interfaces/precompile-call-result)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:408](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L408)

Convert multiple tokenization messages to executeMultiple precompile call

## Parameters

### messages

`any`[]

Array of tokenization SDK messages

### evmAddress?

`string`

The EVM address of the caller (for address conversion)

## Returns

[`PrecompileCallResult`](/sdk/reference/interfaces/precompile-call-result)

The encoded data and precompile address for the executeMultiple call

## Throws

If encoding fails

## Throws

If any message is not a tokenization message
