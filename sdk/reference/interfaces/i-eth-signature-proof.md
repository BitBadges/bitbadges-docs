---
description: "The nonce that was signed. The signature scheme is ETHSign(nonce + \"-\" + creatorAddress)."
---

# Interface: iETHSignatureProof

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:690](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L690)

## Properties

### nonce

> **nonce**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:694](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L694)

The nonce that was signed. The signature scheme is ETHSign(nonce + "-" + creatorAddress).

***

### signature

> **signature**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:699](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L699)

The Ethereum signature of the nonce.
