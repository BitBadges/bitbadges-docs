---
description: "Converts a TransferWithIncrements<bigint>[] to a Transfer<bigint>[]."
---

# Function: getTransfersFromTransfersWithIncrements()

> **getTransfersFromTransfersWithIncrements**\<`T`\>(`transfersWithIncrements`, `blockTime`): [`Transfer`](/sdk/reference/classes/transfer)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:340](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L340)

Converts a TransferWithIncrements\<bigint>[] to a Transfer\<bigint>[].

Note that if there are N increments, this will create N transfers.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### transfersWithIncrements

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments)\<`T`\>[]

The list of transfers with increments.

### blockTime

`T`

## Returns

[`Transfer`](/sdk/reference/classes/transfer)\<`T`\>[]
