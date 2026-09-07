---
description: "Find the balance amount for a specific token ID at a specific time within a set of balances. Returns x0 if not found."
---

# Function: getBalanceForIdAndTime()

> **getBalanceForIdAndTime**\<`T`\>(`id`, `time`, `balances`): `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:144](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L144)

Find the balance amount for a specific token ID at a specific time within a set of balances. Returns x0 if not found.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### id

`T`

The Token ID to search for.

### time

`T`

The time to search for.

### balances

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

The set of balances to search.

## Returns

`T`

## Remarks

Can also be used via the corresponding method with same name on [BalanceArray](/sdk/reference/classes/balance-array)
