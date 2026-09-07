---
description: "Result from broadcasting a transaction."
---

# Interface: BroadcastResult

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:289](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L289)

Result from broadcasting a transaction.

## Properties

### code

> **code**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:299](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L299)

Transaction code (0 = success)

***

### error?

> `optional` **error?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:297](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L297)

Error message if broadcast failed

***

### rawResponse

> **rawResponse**: `any`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:293](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L293)

Raw response from the broadcast endpoint

***

### success

> **success**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:295](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L295)

Whether the broadcast was successful

***

### txHash

> **txHash**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:291](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L291)

Transaction hash
