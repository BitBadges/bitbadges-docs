---
description: "Filters out all balances with amount == 0. Returns a new BalanceArray."
---

# Function: filterZeroBalances()

> **filterZeroBalances**\<`T`\>(`balances`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:224](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L224)

Filters out all balances with amount == 0. Returns a new BalanceArray.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### balances

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

## Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

## Remarks

Can also be used via the corresponding method with same name on [BalanceArray](/sdk/reference/classes/balance-array)
