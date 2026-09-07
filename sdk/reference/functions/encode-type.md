---
description: "Returns the canonical type signature string for primaryType and all of its transitively-referenced struct types, in the order required by EIP-712 (primary…"
---

# Function: encodeType()

> **encodeType**(`primaryType`, `types`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/hash.ts:49](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/hash.ts#L49)

Returns the canonical type signature string for `primaryType` and all of
its transitively-referenced struct types, in the order required by EIP-712
(primary first, then references sorted alphabetically by name).

## Parameters

### primaryType

`string`

### types

[`EIP712Types`](/sdk/reference/type-aliases/eip712-types)

## Returns

`string`
