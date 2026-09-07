---
description: "Applys increments to balances. Returns a new BalanceArray with the incremented balances."
---

# Function: applyIncrementsToBalances()

> **applyIncrementsToBalances**\<`T`\>(`startBalances`, `incrementTokenIdsBy`, `incrementOwnershipTimesBy`, `numIncrements`, `durationFromTimestamp`, `blockTime`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:89](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L89)

Applys increments to balances. Returns a new BalanceArray with the incremented balances.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### startBalances

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

### incrementTokenIdsBy

`T`

### incrementOwnershipTimesBy

`T`

### numIncrements

`T`

### durationFromTimestamp

`T`

### blockTime

`T`

## Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

## Remarks

Can also be used via the applyIncrements method on [BalanceArray](/sdk/reference/classes/balance-array)
