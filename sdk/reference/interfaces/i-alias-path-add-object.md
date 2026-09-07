---
description: "T extends NumberType"
---

# Interface: iAliasPathAddObject\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:327](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L327)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### conversion

> **conversion**: [`iConversionWithoutDenom`](/sdk/reference/interfaces/i-conversion-without-denom)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:332](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L332)

The conversion between cosmos coin and badge balances.

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:329](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L329)

The denomination (denom) to be used for the alias.

***

### denomUnits

> **denomUnits**: [`iDenomUnit`](/sdk/reference/interfaces/i-denom-unit)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:338](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L338)

Denomination units for the alias. Defines how the coin can be displayed with different decimal places and symbols.

***

### metadata

> **metadata**: [`iPathMetadata`](/sdk/reference/interfaces/i-path-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:341](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L341)

The metadata for this alias path.

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:335](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L335)

The symbol for the alias (e.g., "BADGE", "NFT").
