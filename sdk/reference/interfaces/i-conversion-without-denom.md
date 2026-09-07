---
description: "T extends NumberType"
---

# Interface: iConversionWithoutDenom\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:209](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L209)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### sideA

> **sideA**: [`iConversionSideA`](/sdk/reference/interfaces/i-conversion-side-a)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:211](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L211)

Side A: The cosmos coin amount side of the conversion (amount only, denom stored separately).

***

### sideB

> **sideB**: [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:213](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L213)

Side B: The badge balances side of the conversion.
