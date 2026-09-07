---
description: "Given some transfers (potentially incremented), return the balance map to store as a JSON for a collection with off-chain balances."
---

# Function: createBalanceMapForOffChainBalances()

> **createBalanceMapForOffChainBalances**\<`T`\>(`transfersWithIncrements`): [`OffChainBalancesMap`](/sdk/reference/interfaces/off-chain-balances-map)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:229](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L229)

Given some transfers (potentially incremented), return the balance map to store as a JSON for a collection with off-chain balances.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### transfersWithIncrements

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments)\<`T`\>[]

## Returns

[`OffChainBalancesMap`](/sdk/reference/interfaces/off-chain-balances-map)\<`T`\>
