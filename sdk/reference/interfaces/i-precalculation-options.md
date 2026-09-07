---
description: "T extends NumberType"
---

# Interface: iPrecalculationOptions\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:438](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L438)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### overrideTimestamp?

> `optional` **overrideTimestamp?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:440](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L440)

The timestamp to use for the transfer.

***

### scalingMultiplier?

> `optional` **scalingMultiplier?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:444](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L444)

When > 0 and allowAmountScaling is true on the approval, all precalculated balance amounts are multiplied by this value. Must be \<= maxScalingMultiplier. 0 or absent means no scaling (returns 1x base).

***

### tokenIdsOverride?

> `optional` **tokenIdsOverride?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:442](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L442)

The token IDs to use for the transfer.
