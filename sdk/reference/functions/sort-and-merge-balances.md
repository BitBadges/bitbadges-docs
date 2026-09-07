---
description: "Sorts and merges balances. Precondition that all tokenIds and ownershipTimes are non-overlapping."
---

# Function: sortAndMergeBalances()

> **sortAndMergeBalances**\<`T`\>(`balances`): [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:835](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L835)

Sorts and merges balances. Precondition that all tokenIds and ownershipTimes are non-overlapping.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### balances

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

The balances to sort and merge.

## Returns

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]
