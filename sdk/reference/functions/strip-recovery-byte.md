---
description: "Strip the trailing recovery byte (v) from a 65-byte EIP-712 signature, leaving the 64-byte r || s form that the chain's ethsecp256k1.VerifySignature (and…"
---

# Function: stripRecoveryByte()

> **stripRecoveryByte**(`signatureHex`): `Uint8Array`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/recover.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/recover.ts#L52)

Strip the trailing recovery byte (`v`) from a 65-byte EIP-712
signature, leaving the 64-byte `r || s` form that the chain's
`ethsecp256k1.VerifySignature` (and underlying geth
`crypto.VerifySignature`) expects. Wallet outputs always include
`v`; the chain's verifier always discards it.

## Parameters

### signatureHex

`string`

## Returns

`Uint8Array`
