---
description: "Calculates the maximum wrappable/fungible amount for an alias or Cosmos coin wrapper path."
---

# Function: getMaxWrappableAmount()

> **getMaxWrappableAmount**\<`T`\>(`path`, `userBalances`): `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:732](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L732)

Calculates the maximum wrappable/fungible amount for an alias or Cosmos coin wrapper path.

This function determines how many wrapped tokens can be created based on the user's balances
and the conversion path requirements.

Logic:
1. Gets the path's conversion.sideB (balances required per conversion)
2. For each sideB balance, finds matching user balances via getBalancesForIds
3. Calculates minimum conversions possible across all sideB requirements
4. Multiplies by conversion.sideA.amount (wrapped tokens created per conversion)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### path

The alias path or cosmos coin wrapper path with conversion details

#### conversion

\{ `sideA`: \{ `amount`: `T`; \}; `sideB`: `object`[]; \}

#### conversion.sideA

\{ `amount`: `T`; \}

#### conversion.sideA.amount

`T`

#### conversion.sideB

`object`[]

### userBalances

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

The user's current balances to check against

## Returns

`bigint`

The maximum amount of wrapped tokens that can be created
