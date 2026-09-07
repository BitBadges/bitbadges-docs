---
description: "Returns the post balance after a transfer of x(amountToTransfer numRecipients) from startTokenId to endTokenId"
---

# Function: getBalanceAfterTransfer()

> **getBalanceAfterTransfer**\<`T`\>(`balance`, `startTokenId`, `endTokenId`, `ownershipTimeStart`, `ownershipTimeEnd`, `amountToTransfer`, `numRecipients`, `allowUnderflow?`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:409](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L409)

Returns the post balance after a transfer of x(amountToTransfer * numRecipients) from startTokenId to endTokenId

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### balance

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

The balance to subtract from.

### startTokenId

`T`

The start token ID to subtract from.

### endTokenId

`T`

The end token ID to subtract from.

### ownershipTimeStart

`T`

### ownershipTimeEnd

`T`

### amountToTransfer

`T`

The amount to subtract.

### numRecipients

`T`

The number of recipients to subtract from.

### allowUnderflow?

`boolean`

## Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>
