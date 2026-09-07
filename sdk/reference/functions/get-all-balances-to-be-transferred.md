---
description: "Gets the balances to be transferred for a given transfer with increments."
---

# Function: getAllBalancesToBeTransferred()

> **getAllBalancesToBeTransferred**\<`T`\>(`transfers`, `blockTime`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:314](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L314)

Gets the balances to be transferred for a given transfer with increments.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### transfers

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments)\<`T`\>[]

### blockTime

`T`

## Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`bigint`\>

## Example

```ts
For a transfer with balances: [{ tokenIds: [{ start: 1n, end: 1n }], amount: 1n }], incrementIdsBy: 1n, toAddressesLength: 1000
We return [{ tokenIds: [{ start: 1n, end: 1000n }], amount: 1n }] because we transfer x1 token to 1000 addresses
and increment the tokenIds by 1 each time.

This is really inefficient and should be optimized for large N.
```
