---
description: "T extends NumberType"
---

# Interface: iClaimReward\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1430](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1430)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### automatic?

> `optional` **automatic?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1445](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1445)

If true, the reward is automatically given to the user upon completion. No in-site logic is required.

***

### calculationMethod?

> `optional` **calculationMethod?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1455](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1455)

Calculation method to use for the gated content. This is used to determine who is shown the gated content.

By default, we check min 1 claim success for indexed claims and criteria met for non-indexed claims.

#### alwaysShow?

> `optional` **alwaysShow?**: `boolean`

#### minClaimSuccesses?

> `optional` **minClaimSuccesses?**: `number`

***

### gatedContent

> **gatedContent**: [`iClaimGatedContent`](/sdk/reference/interfaces/i-claim-gated-content)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1448](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1448)

The gated content to display upon completion.

***

### instanceId

> **instanceId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1435](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1435)

The instance ID of the reward. A unique identifier for the reward.

***

### metadata?

> `optional` **metadata?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1438](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1438)

Metadata for the reward. This is public-facing, so do not include any gated content here. By default, we use the associated rewardId.

#### description

> **description**: `string`

#### image

> **image**: `string`

#### name

> **name**: `string`

***

### rewardId

> **rewardId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1432](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1432)

The ID of the reward (either a pre-configured one or "custom"). Currently, this is not used for anything.
