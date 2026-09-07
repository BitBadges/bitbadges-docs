---
description: "Free-form rationale shown to the payer at approval time. Mirrors Stripe Link's ≥100 char context requirement — agents must justify the spend in human-readable…"
---

# Interface: PaymentRequestParams

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts#L32)

## Properties

### amount

> **amount**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts#L33)

***

### context?

> `optional` **context?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts:48](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts#L48)

Free-form rationale shown to the payer at approval time. Mirrors
Stripe Link's ≥100 char `context` requirement — agents must justify
the spend in human-readable terms. Used as the collection description
(in inline mode) or appended to the auto-generated default.

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts#L34)

***

### expiration?

> `optional` **expiration?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts#L37)

***

### image?

> `optional` **image?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts#L41)

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts#L40)

***

### payer

> **payer**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts:35](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts#L35)

***

### recipient

> **recipient**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts#L36)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts:39](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/payment-request.ts#L39)

Pre-hosted collection metadata URI. If provided, name/image/description are ignored.
