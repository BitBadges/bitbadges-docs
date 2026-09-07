---
description: "T extends NumberType"
---

# Interface: iDenomUnitWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:233](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L233)

## Extends

- [`iDenomUnit`](/sdk/reference/interfaces/i-denom-unit)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### decimals

> **decimals**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:221](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L221)

The number of decimal places for this denomination unit.

#### Inherited from

[`iDenomUnit`](/sdk/reference/interfaces/i-denom-unit).[`decimals`](/sdk/reference/interfaces/i-denom-unit#decimals)

***

### isDefaultDisplay

> **isDefaultDisplay**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:225](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L225)

Whether this denomination unit is the default display unit.

#### Inherited from

[`iDenomUnit`](/sdk/reference/interfaces/i-denom-unit).[`isDefaultDisplay`](/sdk/reference/interfaces/i-denom-unit#isdefaultdisplay)

***

### metadata

> **metadata**: [`iPathMetadataWithDetails`](/sdk/reference/interfaces/i-path-metadata-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:235](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L235)

Metadata object containing uri, customData, and fetched metadata.

#### Overrides

[`iDenomUnit`](/sdk/reference/interfaces/i-denom-unit).[`metadata`](/sdk/reference/interfaces/i-denom-unit#metadata)

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:223](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L223)

The symbol for this denomination unit.

#### Inherited from

[`iDenomUnit`](/sdk/reference/interfaces/i-denom-unit).[`symbol`](/sdk/reference/interfaces/i-denom-unit#symbol)
