---
description: "Free-form grouping label — standards, metadata, supply, transferability, permissions, backing, etc."
---

# Interface: DesignDecision

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L101)

## Properties

### category

> **category**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L105)

Free-form grouping label — `standards`, `metadata`, `supply`, `transferability`, `permissions`, `backing`, etc.

***

### code

> **code**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:103](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L103)

Stable machine identifier, e.g. `design.standards.subscription`.

***

### detail

> **detail**: [`Localized`](/sdk/reference/interfaces/localized)

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:109](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L109)

Short "what this means" paragraph.

***

### evidence?

> `optional` **evidence?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:112](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L112)

Optional human-readable proof of the verdict, e.g. "Supply cap 500, mint approval has usesPerAddress 1".

***

### status

> **status**: [`DesignDecisionStatus`](/sdk/reference/type-aliases/design-decision-status)

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:110](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L110)

***

### title

> **title**: [`Localized`](/sdk/reference/interfaces/localized)

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:107](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L107)

Headline, e.g. "Follows the Subscription protocol".
