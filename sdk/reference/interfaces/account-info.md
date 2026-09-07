---
description: "Account information from the blockchain."
---

# Interface: AccountInfo

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:12](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L12)

Account information from the blockchain.

## Properties

### accountNumber

> **accountNumber**: `number` \| `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L17)

Account number on the blockchain. Post-v34 accounts get hash-derived
numbers above 2^53, so this is a bigint at runtime — never Number() it.

***

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L26)

BitBadges address (bb-prefixed)

***

### publicKey

> **publicKey**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L24)

Public key in base64 format

***

### sequence

> **sequence**: `number` \| `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L22)

Current sequence (nonce) for the account. Post-v34 unordered-tx nonces
can be nanosecond timestamps above 2^53, so this is a bigint at runtime.
