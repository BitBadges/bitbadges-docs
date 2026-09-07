---
description: "Returns the 32-byte hash of a single struct value. Useful for callers who want to verify intermediate digests against the chain's Go reference."
---

# Function: hashStruct()

> **hashStruct**(`primaryType`, `value`, `types`): `Uint8Array`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/hash.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/hash.ts#L40)

Returns the 32-byte hash of a single struct value. Useful for callers who
want to verify intermediate digests against the chain's Go reference.

## Parameters

### primaryType

`string`

### value

`Record`\<`string`, `unknown`\>

### types

[`EIP712Types`](/sdk/reference/type-aliases/eip712-types)

## Returns

`Uint8Array`
