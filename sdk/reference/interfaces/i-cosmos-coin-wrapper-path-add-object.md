---
description: "T extends NumberType"
---

# Interface: iCosmosCoinWrapperPathAddObject\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:241](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L241)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### allowOverrideWithAnyValidToken

> **allowOverrideWithAnyValidToken**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:255](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L255)

Whether to allow override with any valid token.

***

### conversion

> **conversion**: [`iConversionWithoutDenom`](/sdk/reference/interfaces/i-conversion-without-denom)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:246](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L246)

The conversion between cosmos coin and badge balances.

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:243](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L243)

The denom of the IBC wrapper path.

***

### denomUnits

> **denomUnits**: [`iDenomUnit`](/sdk/reference/interfaces/i-denom-unit)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:252](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L252)

The denomination units for this IBC wrapper path.

***

### metadata

> **metadata**: [`iPathMetadata`](/sdk/reference/interfaces/i-path-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:258](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L258)

The metadata for this wrapper path.

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:249](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L249)

The symbol for this IBC wrapper path.
