---
description: "Updates the balance for what it currently is to newAmount."
---

# Function: updateBalances()

> **updateBalances**\<`T`\>(`newBalance`, `balances`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:329](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L329)

Updates the balance for what it currently is to newAmount.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### newBalance

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>

### balances

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

## Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

## Remarks

Returns a new BalanceArray. Does not modify the original.

Can also be used via the corresponding method with same name on [BalanceArray](/sdk/reference/classes/balance-array)
