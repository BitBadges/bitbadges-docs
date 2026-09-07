---
description: "T extends NumberType"
---

# Interface: iAliasPathWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:529](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L529)

## Extends

- [`iAliasPath`](/sdk/reference/interfaces/i-alias-path)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### assetPairInfos?

> `optional` **assetPairInfos?**: [`iAssetInfoDoc`](/sdk/reference/interfaces/i-asset-info-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:537](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L537)

Asset Pair Infos

***

### conversion

> **conversion**: [`iConversionWithoutDenom`](/sdk/reference/interfaces/i-conversion-without-denom)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:519](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L519)

#### Inherited from

[`iAliasPath`](/sdk/reference/interfaces/i-alias-path).[`conversion`](/sdk/reference/interfaces/i-alias-path#conversion)

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:518](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L518)

#### Inherited from

[`iAliasPath`](/sdk/reference/interfaces/i-alias-path).[`denom`](/sdk/reference/interfaces/i-alias-path#denom)

***

### denomUnits

> **denomUnits**: [`iDenomUnitWithDetails`](/sdk/reference/interfaces/i-denom-unit-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:533](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L533)

The denomination units with metadata details populated.

#### Overrides

[`iAliasPath`](/sdk/reference/interfaces/i-alias-path).[`denomUnits`](/sdk/reference/interfaces/i-alias-path#denomunits)

***

### metadata

> **metadata**: [`iPathMetadataWithDetails`](/sdk/reference/interfaces/i-path-metadata-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:531](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L531)

Metadata object containing uri, customData, and fetched metadata.

#### Overrides

[`iAliasPath`](/sdk/reference/interfaces/i-alias-path).[`metadata`](/sdk/reference/interfaces/i-alias-path#metadata)

***

### poolInfos?

> `optional` **poolInfos?**: [`iPoolInfo`](/sdk/reference/interfaces/i-pool-info)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:535](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L535)

Pool Infos

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:520](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L520)

#### Inherited from

[`iAliasPath`](/sdk/reference/interfaces/i-alias-path).[`symbol`](/sdk/reference/interfaces/i-alias-path#symbol)
