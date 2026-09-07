---
description: "Result from broadcasting a transaction."
---

# Interface: BroadcastResult

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:277](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L277)

Result from broadcasting a transaction.

## Properties

### code

> **code**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:287](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L287)

Transaction code (0 = success)

***

### error?

> `optional` **error?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:285](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L285)

Error message if broadcast failed

***

### rawResponse

> **rawResponse**: `any`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:281](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L281)

Raw response from the broadcast endpoint

***

### success

> **success**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:283](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L283)

Whether the broadcast was successful

***

### txHash

> **txHash**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:279](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L279)

Transaction hash
