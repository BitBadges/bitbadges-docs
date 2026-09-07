---
description: "Multiple payouts per interval — use this OR price/denom/recipient"
---

# Interface: SubscriptionParams

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L25)

## Properties

### denom?

> `optional` **denom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L29)

***

### description?

> `optional` **description?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L38)

***

### image?

> `optional` **image?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:39](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L39)

***

### interval

> **interval**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L26)

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L37)

***

### payouts?

> `optional` **payouts?**: [`SubscriptionPayout`](/sdk/reference/interfaces/subscription-payout)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L32)

Multiple payouts per interval — use this OR price/denom/recipient

***

### price?

> `optional` **price?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:28](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L28)

Single payout — use this OR payouts[]

***

### recipient?

> `optional` **recipient?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L30)

***

### tiers?

> `optional` **tiers?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L33)

***

### transferable?

> `optional` **transferable?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L34)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L36)

Pre-hosted collection metadata URI. If provided, name/image/description are ignored.
