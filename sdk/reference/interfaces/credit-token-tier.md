---
description: "Approval id — credit-scaled or credit-<N>."
---

# Interface: CreditTokenTier

Defined in: [packages/bitbadgesjs-sdk/src/core/credit-tokens.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/credit-tokens.ts#L47)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/credit-tokens.ts:49](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/credit-tokens.ts#L49)

Approval id — `credit-scaled` or `credit-<N>`.

***

### isScaled

> **isScaled**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/credit-tokens.ts:61](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/credit-tokens.ts#L61)

True for the scaled-balances variant (buyer picks multiplier).

***

### maxMultiplier?

> `optional` **maxMultiplier?**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/credit-tokens.ts:63](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/credit-tokens.ts#L63)

For scaled tier: max multiplier (chain-enforced upper bound).

***

### mintAmount

> **mintAmount**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/credit-tokens.ts:57](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/credit-tokens.ts#L57)

Amount of credit token minted per `value` units.

***

### paymentAmount

> **paymentAmount**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/credit-tokens.ts:55](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/credit-tokens.ts#L55)

Amount of paymentDenom per `value` units, in base units.

***

### paymentDenom

> **paymentDenom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/credit-tokens.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/credit-tokens.ts#L53)

Payment denom (chain-side; ibc/... or ubadge).

***

### recipient

> **recipient**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/credit-tokens.ts:59](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/credit-tokens.ts#L59)

Address that receives the payment (the seller).

***

### value

> **value**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/credit-tokens.ts:51](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/credit-tokens.ts#L51)

Display-units-per-tier (1 for scaled, N for `credit-<N>`).
