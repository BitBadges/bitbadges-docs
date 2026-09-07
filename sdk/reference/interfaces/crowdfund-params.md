---
description: "Creator address — used as the default crowdfunder when crowdfunder isn't specified. The CLI passes this through from --creator. Without a real address the…"
---

# Interface: CrowdfundParams

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts#L22)

## Properties

### creator?

> `optional` **creator?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts:39](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts#L39)

Creator address — used as the default crowdfunder when `crowdfunder`
isn't specified. The CLI passes this through from `--creator`.
Without a real address the resulting tx is broken (the success/refund
approvals would have `toListId: 'All'` which is meaningless for an
escrow payout).

***

### crowdfunder?

> `optional` **crowdfunder?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts#L25)

***

### deadline?

> `optional` **deadline?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts#L26)

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts#L24)

***

### description?

> `optional` **description?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts#L30)

***

### goal

> **goal**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts#L23)

***

### image?

> `optional` **image?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts:31](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts#L31)

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts#L29)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts:28](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/crowdfund.ts#L28)

Pre-hosted collection metadata URI. If provided, name/image/description are ignored.
