---
description: "Handles duplicate tokenIds in balances. Returns a new BalanceArray."
---

# Function: handleDuplicateTokenIdsInBalances()

> **handleDuplicateTokenIdsInBalances**\<`T`\>(`balances`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:850](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L850)

Handles duplicate tokenIds in balances. Returns a new BalanceArray.

For example, if we have x1 of ID 1 and x1 of ID 1, we will return x2 of ID 1.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### balances

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

## Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>
