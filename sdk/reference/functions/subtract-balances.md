---
description: "Subtracts multiple balances from the existing balances. Returns a new BalanceArray."
---

# Function: subtractBalances()

> **subtractBalances**\<`T`\>(`balancesToSubtract`, `balances`, `allowUnderflow?`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:425](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L425)

Subtracts multiple balances from the existing balances. Returns a new BalanceArray.

Throws an error if the balances underflow.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### balancesToSubtract

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

### balances

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

### allowUnderflow?

`boolean`

## Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

## Remarks

Can also be used via the corresponding method with same name on [BalanceArray](/sdk/reference/classes/balance-array)
