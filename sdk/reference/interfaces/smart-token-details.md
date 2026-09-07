---
description: "True if standards includes \"AI Agent Vault\"."
---

# Interface: SmartTokenDetails

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L30)

## Properties

### aiAgentVault

> **aiAgentVault**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L40)

True if `standards` includes "AI Agent Vault".

***

### backingAddress

> **backingAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L32)

Backing-address bb1... alias derived from the IBC denom.

***

### backingDenom

> **backingDenom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L34)

Full IBC denom string the collection wraps (`ibc/...` or `ubadge`).

***

### depositApproval

> **depositApproval**: [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:35](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L35)

***

### tradable

> **tradable**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L38)

True if `standards` includes "Liquidity Pools".

***

### withdrawApproval

> **withdrawApproval**: [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L36)
