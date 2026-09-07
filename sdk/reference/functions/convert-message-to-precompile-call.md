---
description: "Convert a BitBadges SDK message to a precompile function call"
---

# Function: convertMessageToPrecompileCall()

> **convertMessageToPrecompileCall**(`message`, `evmAddress?`): [`PrecompileCallResult`](/sdk/reference/interfaces/precompile-call-result)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:185](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L185)

Convert a BitBadges SDK message to a precompile function call

## Parameters

### message

`any`

The SDK message (any supported message type)

### evmAddress?

`string`

The EVM address of the caller (for address conversion)

## Returns

[`PrecompileCallResult`](/sdk/reference/interfaces/precompile-call-result)

The function name, encoded data, and precompile address for the precompile call

## Throws

If encoding fails

## Example

```typescript
const msg = new MsgCreateCollection({...});
const result = convertMessageToPrecompileCall(msg, '0x1234...');
// result.functionName = 'createCollection'
// result.data = '0x...' (encoded function call with JSON string)
// result.precompileAddress = '0x1001' (tokenization precompile)
```
