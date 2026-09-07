---
description: "Result of converting a message to a precompile function call"
---

# Interface: PrecompileCallResult

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:138](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L138)

Result of converting a message to a precompile function call

## Properties

### data

> **data**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:142](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L142)

The encoded function data (ready to send in a transaction)

***

### functionName

> **functionName**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:140](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L140)

The function name to call on the precompile

***

### jsonMsg

> **jsonMsg**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:144](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L144)

The JSON message string (for debugging/logging)

***

### precompileAddress

> **precompileAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L146)

The precompile contract address (0x1001 for tokenization, 0x1002 for gamm, 0x1003 for sendmanager)
