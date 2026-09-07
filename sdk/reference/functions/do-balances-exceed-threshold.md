---
description: "Returns true if some balances exceed the specified threshold balances."
---

# Function: doBalancesExceedThreshold()

> **doBalancesExceedThreshold**\<`T`\>(`balances`, `thresholdBalances`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:245](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L245)

Returns true if some balances exceed the specified threshold balances.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### balances

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

### thresholdBalances

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

## Returns

`boolean`

## Remarks

Can also be used via the corresponding method with same name on [BalanceArray](/sdk/reference/classes/balance-array)
