---
description: "Adds the balanceToAdd to the existing balances. Returns a new BalanceArray."
---

# Function: addBalance()

> **addBalance**\<`T`\>(`existingBalances`, `balanceToAdd`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:356](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L356)

Adds the balanceToAdd to the existing balances. Returns a new BalanceArray.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### existingBalances

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

### balanceToAdd

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>

## Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

## Remarks

Can also be used via the corresponding method with same name on [BalanceArray](/sdk/reference/classes/balance-array)
