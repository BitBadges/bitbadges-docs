---
description: "T extends NumberType"
---

# Function: convertOffChainBalancesMap()

> **convertOffChainBalancesMap**\<`T`, `U`\>(`item`, `convertFunction`): [`OffChainBalancesMap`](/sdk/reference/interfaces/off-chain-balances-map)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:134](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L134)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### item

[`iOffChainBalancesMap`](/sdk/reference/interfaces/i-off-chain-balances-map)\<`T`\>

### convertFunction

(`item`) => `U`

## Returns

[`OffChainBalancesMap`](/sdk/reference/interfaces/off-chain-balances-map)\<`U`\>
