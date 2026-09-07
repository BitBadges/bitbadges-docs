---
description: "T extends NumberType"
---

# Interface: iIncrementedBalances\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:160](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L160)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### allowAmountScaling

> **allowAmountScaling**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:176](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L176)

When true, transfers can be any evenly divisible integer multiple of startBalances. coinTransfers scale by the same multiplier. All other fields must be zero/false/nil.

***

### allowOverrideTimestamp

> **allowOverrideTimestamp**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:170](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L170)

Whether to allow the override timestamp to be used.

***

### allowOverrideWithAnyValidToken

> **allowOverrideWithAnyValidToken**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:174](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L174)

Whether to allow the override with any valid ID.

***

### durationFromTimestamp

> **durationFromTimestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:168](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L168)

The number of unix milliseconds to approve starting from now. Incompatible with incrementOwnershipTimesBy.

***

### incrementOwnershipTimesBy

> **incrementOwnershipTimesBy**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:166](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L166)

The amount to increment the owned times by after each transfer. Incompatible with durationFromTimestamp.

***

### incrementTokenIdsBy

> **incrementTokenIdsBy**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:164](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L164)

The amount to increment the token IDs by after each transfer.

***

### maxScalingMultiplier

> **maxScalingMultiplier**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:178](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L178)

Maximum allowed scaling multiplier. Must be > 0 when allowAmountScaling is true. 0 means N/A (scaling disabled).

***

### recurringOwnershipTimes

> **recurringOwnershipTimes**: [`iRecurringOwnershipTimes`](/sdk/reference/interfaces/i-recurring-ownership-times)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:172](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L172)

The recurring ownership times for the approval.

***

### startBalances

> **startBalances**: [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:162](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L162)

The starting balances for each transfer. Order number corresponds to the number of times we increment.
