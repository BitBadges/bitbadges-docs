---
description: "T extends NumberType"
---

# Interface: iConversion\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:199](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L199)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### sideA

> **sideA**: [`iConversionSideAWithDenom`](/sdk/reference/interfaces/i-conversion-side-a-with-denom)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:201](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L201)

Side A: The cosmos coin side of the conversion (amount + denom).

***

### sideB

> **sideB**: [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:203](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L203)

Side B: The badge balances side of the conversion.
