---
description: "Checks if two balances are equal. Flag to check if the balances with zero amounts should be checked as well."
---

# Function: areBalancesEqual()

> **areBalancesEqual**\<`T`\>(`expected`, `actual`, `checkZeroBalances`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:294](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L294)

Checks if two balances are equal. Flag to check if the balances with zero amounts should be checked as well.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### expected

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

### actual

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

### checkZeroBalances

`boolean`

## Returns

`boolean`

## Remarks

Can also be used via the corresponding method with same name on [BalanceArray](/sdk/reference/classes/balance-array)
