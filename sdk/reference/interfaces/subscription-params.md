---
description: "Multiple payouts per interval — use this OR price/denom/recipient"
---

# Interface: SubscriptionParams

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L26)

## Properties

### denom?

> `optional` **denom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L30)

***

### description?

> `optional` **description?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L46)

***

### image?

> `optional` **image?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L47)

***

### interval

> **interval**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L27)

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L45)

***

### payouts?

> `optional` **payouts?**: [`SubscriptionPayout`](/sdk/reference/interfaces/subscription-payout)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L33)

Multiple payouts per interval — use this OR price/denom/recipient

***

### price?

> `optional` **price?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L29)

Single payout — use this OR payouts[]

***

### recipient?

> `optional` **recipient?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:31](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L31)

***

### tiers?

> `optional` **tiers?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L34)

***

### transferable?

> `optional` **transferable?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:35](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L35)

***

### updatableMint?

> `optional` **updatableMint?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L42)

Leave the mint (faucet) approval editable so the manager can change the
price later. Default false: the faucet is locked forever, which is what
`bb check` requires to pass. Opting in surfaces a critical review
finding, on purpose, so the choice is visible to whoever signs.

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/subscription.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/subscription.ts#L44)

Pre-hosted collection metadata URI. If provided, name/image/description are ignored.
