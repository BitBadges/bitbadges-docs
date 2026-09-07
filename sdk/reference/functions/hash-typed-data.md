---
description: "Computes the canonical EIP-712 digest for a { domain, types, primaryType, message } payload. The result is what an EVM wallet signs via personalsign on the…"
---

# Function: hashTypedData()

> **hashTypedData**(`typed`): `Uint8Array`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/hash.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/hash.ts#L30)

Computes the canonical EIP-712 digest for a `{ domain, types, primaryType, message }`
payload. The result is what an EVM wallet signs via personal_sign on the
digest, or equivalently what `eth_signTypedData_v4` derives internally.

## Parameters

### typed

[`EIP712TypedData`](/sdk/reference/interfaces/eip712-typed-data)

## Returns

`Uint8Array`
