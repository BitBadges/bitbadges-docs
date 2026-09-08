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
import { MsgDeleteCollection, convertMessageToPrecompileCall, convertToBitBadgesAddress } from 'bitbadges';

const evmAddress = '0x0bc63cfe31d5218eb414b142c799e20964a54a1a';
const msg = new MsgDeleteCollection({
  creator: convertToBitBadgesAddress(evmAddress),
  collectionId: '1'
});
const result = convertMessageToPrecompileCall(msg, evmAddress);
console.log(result.functionName); // 'deleteCollection'
console.log(result.precompileAddress, result.data); // destination and ABI-encoded call; nothing is broadcast
```
