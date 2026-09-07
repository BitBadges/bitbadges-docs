---
description: "Mirrors cosmos/evm/ethereum/eip712/types.go::sanitizeTypedef."
---

# Function: sanitizeTypedef()

> **sanitizeTypedef**(`str`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/sanitize.ts:12](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/sanitize.ts#L12)

Mirrors `cosmos/evm/ethereum/eip712/types.go::sanitizeTypedef`.

`_.foo_bar.baz` becomes `TypeFooBarBaz`. Geth's typed-data validator
rejects names containing `.` or `_`, so the canonical Go reference
normalises them by title-casing each segment and prefixing the root
placeholder (`_`) with `Type`.

## Parameters

### str

`string`

## Returns

`string`
