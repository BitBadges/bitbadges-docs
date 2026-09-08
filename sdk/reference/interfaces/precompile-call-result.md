---
description: "Result of converting a message to a precompile function call"
---

# Interface: PrecompileCallResult

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:135](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L135)

Result of converting a message to a precompile function call

## Properties

### data

> **data**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L139)

The encoded function data (ready to send in a transaction)

***

### functionName

> **functionName**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:137](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L137)

The function name to call on the precompile

***

### jsonMsg

> **jsonMsg**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:141](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L141)

The JSON message string (for debugging/logging)

***

### precompileAddress

> **precompileAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L143)

The precompile contract address (0x1001 for tokenization, 0x1002 for gamm, 0x1003 for sendmanager)
