---
description: "T extends NumberType"
---

# Interface: iPredeterminedBalances\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:128](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L128)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### incrementedBalances

> **incrementedBalances**: [`iIncrementedBalances`](/sdk/reference/interfaces/i-incremented-balances)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:132](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L132)

Define a starting balance and increment the token IDs and owned times by a certain amount after each transfer. Cannot be used with manualBalances. Order number corresponds to number of times we increment.

***

### manualBalances

> **manualBalances**: [`iManualBalances`](/sdk/reference/interfaces/i-manual-balances)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:130](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L130)

Manually define the balances for each transfer. Cannot be used with incrementedBalances. Order number corresponds to the index of the balance in the array.

***

### orderCalculationMethod

> **orderCalculationMethod**: [`iPredeterminedOrderCalculationMethod`](/sdk/reference/interfaces/i-predetermined-order-calculation-method)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:134](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L134)

The order calculation method.
