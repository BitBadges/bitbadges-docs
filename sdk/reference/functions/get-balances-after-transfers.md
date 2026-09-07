---
description: "Returns the balance after a set of TransferWithIncrements<bigint>[]."
---

# Function: getBalancesAfterTransfers()

> **getBalancesAfterTransfers**\<`T`\>(`startBalance`, `transfersArr`, `blockTime`, `allowUnderflow?`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:443](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L443)

Returns the balance after a set of TransferWithIncrements\<bigint>[].

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### startBalance

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

The balance to subtract from.

### transfersArr

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments)\<`T`\>[]

### blockTime

`T`

### allowUnderflow?

`boolean`

## Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>
