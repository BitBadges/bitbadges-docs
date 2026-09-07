---
description: "33-byte compressed secp256k1 pubkey as bytes. Suitable for the key field of cosmos.evm.crypto.v1.ethsecp256k1.PubKey."
---

# Interface: RecoveredKey

Defined in: [packages/bitbadgesjs-sdk/src/eip712/recover.ts:18](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/recover.ts#L18)

## Properties

### compressedPubKeyBytes

> **compressedPubKeyBytes**: `Uint8Array`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/recover.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/recover.ts#L23)

33-byte compressed secp256k1 pubkey as bytes. Suitable for the
`key` field of `cosmos.evm.crypto.v1.ethsecp256k1.PubKey`.

***

### compressedPubKeyHex

> **compressedPubKeyHex**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/recover.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/recover.ts#L20)

33-byte compressed secp256k1 pubkey, hex-encoded with 0x prefix.

***

### ethAddress

> **ethAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/recover.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/recover.ts#L25)

0x... checksummed Ethereum address derived from the pubkey.
