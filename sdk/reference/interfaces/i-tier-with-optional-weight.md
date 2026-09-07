---
description: "T extends NumberType"
---

# Interface: iTierWithOptionalWeight\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1097](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1097)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### claimId

> **claimId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1099](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1099)

The claim ID to satisfy the tier

***

### pointsCalculationMethod?

> `optional` **pointsCalculationMethod?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1113](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1113)

The calculation method to use for this tier. This is used for calculating the tier weight.

By default, we check if the user has met the criteria for non-indexed and for indexed, we check claimed successfully at least one time.

***

### uncheckable?

> `optional` **uncheckable?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1107](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1107)

Uncheckable? If so, we will not display success or failure for this tier.

We will just display the claim criteria and metadata.

***

### weight?

> `optional` **weight?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1101)

The weight of the tier
