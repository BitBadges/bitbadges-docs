---
description: "EVM transaction for precompile calls."
---

# Interface: EvmTransaction

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L46)

EVM transaction for precompile calls.

## Properties

### data

> **data**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L50)

Encoded function call data

***

### gasLimit?

> `optional` **gasLimit?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L54)

Gas limit for the transaction

***

### to

> **to**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:48](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L48)

Target contract address (precompile address)

***

### value

> **value**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L52)

Value to send (typically "0" for precompiles)
