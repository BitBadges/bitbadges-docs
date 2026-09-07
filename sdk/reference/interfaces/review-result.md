---
description: "Interface: ReviewResult — BitBadges TypeScript SDK interface."
---

# Interface: ReviewResult

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:75](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L75)

## Properties

### findings

> **findings**: [`Finding`](/sdk/reference/interfaces/finding)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:76](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L76)

***

### summary

> **summary**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L77)

#### critical

> **critical**: `number`

#### info

> **info**: `number`

#### verdict

> **verdict**: `"pass"` \| `"fail"` \| `"warn"`

#### warning

> **warning**: `number`
