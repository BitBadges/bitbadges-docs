---
description: "Gets the token IDs to be transferred for a given transfer with increments."
---

# Function: getAllTokenIdsToBeTransferred()

> **getAllTokenIdsToBeTransferred**\<`T`\>(`transfers`): [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:262](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L262)

Gets the token IDs to be transferred for a given transfer with increments.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### transfers

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments)\<`T`\>[]

## Returns

[`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

## Remarks

For a transfer with balances: [{ tokenIds: [{ start: 1n, end: 1n }], amount: 1n }], incrementTokenIdsBy: 1n, toAddressesLength: 1000
We return the range [{ start: 1n, end: 1000n }] because we increment the tokenIds by 1 each time.
