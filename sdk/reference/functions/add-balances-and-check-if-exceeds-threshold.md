---
description: "Attempts to add a balance to the current amounts. Then, it checks if it exceeds some threshold."
---

# Function: addBalancesAndCheckIfExceedsThreshold()

> **addBalancesAndCheckIfExceedsThreshold**\<`T`\>(`currTally`, `toAdd`, `threshold`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:268](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L268)

Attempts to add a balance to the current amounts. Then, it checks if it exceeds some threshold.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### currTally

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

### toAdd

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

### threshold

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

## Returns

`boolean`

## Remarks

Can also be used via the corresponding method with same name on [BalanceArray](/sdk/reference/classes/balance-array).
Note this function modifies the inputted currTallyBalances
