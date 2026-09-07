---
description: "Submitter address (bb1...) — receives the refund on deny / expire. Required: the chain rejects empty to when overrideToWithInitiator is false (which it must be…"
---

# Interface: BountyParams

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/bounty.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/bounty.ts#L25)

## Properties

### amount

> **amount**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/bounty.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/bounty.ts#L26)

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/bounty.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/bounty.ts#L27)

***

### description?

> `optional` **description?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/bounty.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/bounty.ts#L42)

***

### expiration?

> `optional` **expiration?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/bounty.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/bounty.ts#L38)

***

### image?

> `optional` **image?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/bounty.ts:43](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/bounty.ts#L43)

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/bounty.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/bounty.ts#L41)

***

### recipient

> **recipient**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/bounty.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/bounty.ts#L29)

***

### submitter

> **submitter**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/bounty.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/bounty.ts#L37)

Submitter address (bb1...) — receives the refund on deny / expire.
Required: the chain rejects empty `to` when `overrideToWithInitiator`
is false (which it must be for these branches, since the verifier is
the initiator on deny — we want refunds to go to the submitter, not
to the verifier who triggers them).

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/bounty.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/bounty.ts#L40)

Pre-hosted collection metadata URI. If provided, name/image/description are ignored.

***

### verifier

> **verifier**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/bounty.ts:28](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/bounty.ts#L28)
