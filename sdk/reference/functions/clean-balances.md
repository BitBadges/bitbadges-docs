---
description: "Cleans balances. Merges overlapping tokenIds and ownershipTimes, sorts by amounts, and handles duplicate tokenIds."
---

# Function: cleanBalances()

> **cleanBalances**\<`T`\>(`balancesArr`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:669](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L669)

Cleans balances. Merges overlapping tokenIds and ownershipTimes, sorts by amounts, and handles duplicate tokenIds.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### balancesArr

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

## Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>
