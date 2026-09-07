---
description: "Derives a bech32 address from a compressed secp256k1 public key using standard Cosmos address derivation: ripemd160(sha256(compressedPubKey))."
---

# Function: cosmosAddressFromPublicKey()

> **cosmosAddressFromPublicKey**(`compressedPubKeyHex`, `prefix?`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/address-converter/converter.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/address-converter/converter.ts#L77)

Derives a bech32 address from a compressed secp256k1 public key using standard Cosmos
address derivation: ripemd160(sha256(compressedPubKey)).

This is the correct derivation for chains using cosmos.crypto.secp256k1.PubKey.
For EVM-derived addresses, use convertToBitBadgesAddress with an EVM hex address instead.

## Parameters

### compressedPubKeyHex

`string`

The compressed public key as a hex string (33 bytes / 66 hex chars)

### prefix?

`string` = `'bb'`

The bech32 prefix (default: 'bb')

## Returns

`string`

The bech32-encoded address
