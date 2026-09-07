---
description: "Options for sign and broadcast operations."
---

# Interface: SignAndBroadcastOptions

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:225](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L225)

Options for sign and broadcast operations.

## Properties

### fee?

> `optional` **fee?**: [`SigningFee`](/sdk/reference/interfaces/signing-fee)

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:229](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L229)

Custom fee (overrides auto-calculation)

***

### gasMultiplier?

> `optional` **gasMultiplier?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:233](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L233)

Gas multiplier for simulation result. Default: uses client's gasMultiplier

***

### memo?

> `optional` **memo?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:227](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L227)

Transaction memo

***

### simulate?

> `optional` **simulate?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:231](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L231)

Whether to simulate first for gas estimation. Default: true for Cosmos, false for EVM
