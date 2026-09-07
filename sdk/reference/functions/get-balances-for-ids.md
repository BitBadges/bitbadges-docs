---
description: "Gets the balances for specified ID ranges."
---

# Function: getBalancesForIds()

> **getBalancesForIds**\<`T`\>(`idRanges`, `times`, `balances`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:487](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L487)

Gets the balances for specified ID ranges.

Returns a BalanceArray.From\<T> where only the specified ID ranges and their balances are included.
Sets balance amount == 0 objects for IDs that are not found.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### idRanges

[`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

### times

[`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

### balances

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

## Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

## Remarks

Returns a new object but also modifies the original.

Can also be used via the corresponding method with same name on [BalanceArray](/sdk/reference/classes/balance-array)
