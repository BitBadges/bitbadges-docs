---
description: "Returns the balance amount for a specific token ID at the current time (Date.now()). Convenience wrapper around getBalanceForIdAndTime."
---

# Function: getBalanceForIdNow()

> **getBalanceForIdNow**\<`T`\>(`id`, `balances`): `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:165](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L165)

Returns the balance amount for a specific token ID at the current time (Date.now()).
Convenience wrapper around [getBalanceForIdAndTime](/sdk/reference/functions/get-balance-for-id-and-time).

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### id

`T`

The token ID to search for.

### balances

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

The set of balances to search.

## Returns

`T`
