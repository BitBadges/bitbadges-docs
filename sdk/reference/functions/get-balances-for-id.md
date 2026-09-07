---
description: "Returns all matching balances for a specific token ID. Returns a new BalanceArray."
---

# Function: getBalancesForId()

> **getBalancesForId**\<`T`\>(`tokenId`, `balances`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:178](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L178)

Returns all matching balances for a specific token ID. Returns a new BalanceArray.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### tokenId

`T`

### balances

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

## Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

## Remarks

Can also be used via the corresponding method with same name on [BalanceArray](/sdk/reference/classes/balance-array)
