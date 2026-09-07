---
description: "33-byte compressed pubkey of the EVM signer (recovered from the signature)."
---

# Interface: BuildEip712TxRawArgs

Defined in: [packages/bitbadgesjs-sdk/src/eip712/broadcast.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/broadcast.ts#L25)

## Properties

### compressedPubKey

> **compressedPubKey**: `Uint8Array`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/broadcast.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/broadcast.ts#L29)

33-byte compressed pubkey of the EVM signer (recovered from the signature).

***

### fee

> **fee**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/broadcast.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/broadcast.ts#L33)

Fee parameters that match what the user signed in the EIP-712 typed-data.

#### amount

> **amount**: `string`

#### denom

> **denom**: `string`

#### gas

> **gas**: `number`

***

### memo?

> `optional` **memo?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/broadcast.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/broadcast.ts#L34)

***

### messages

> **messages**: `any`[]

Defined in: [packages/bitbadgesjs-sdk/src/eip712/broadcast.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/broadcast.ts#L27)

Proto messages (already wrapped via `createProtoMsg`) included in the tx.

***

### sequence

> **sequence**: [`Uint64Like`](/sdk/reference/type-aliases/uint64-like)

Defined in: [packages/bitbadgesjs-sdk/src/eip712/broadcast.ts:31](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/broadcast.ts#L31)

Cosmos sequence at the time of signing.

***

### signatureHex

> **signatureHex**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/broadcast.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/broadcast.ts#L36)

65-byte hex signature returned by `eth_signTypedData_v4` / `Signer.signTypedData`.
