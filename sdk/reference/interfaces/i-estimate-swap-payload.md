---
description: "Mapping of chain IDs to addresses. Only supports \"bitbadges-1\" (bech32 bb prefixed address for Cosmos-based chains) and \"1\" (EVM-based chains with a standard…"
---

# Interface: iEstimateSwapPayload

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:217](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L217)

## Properties

### chainIdsToAddresses

> **chainIdsToAddresses**: `Record`\<`string`, `string`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:232](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L232)

Mapping of chain IDs to addresses.
Only supports "bitbadges-1" (bech32 bb prefixed address for Cosmos-based chains) and "1" (EVM-based chains with a standard 0x address)

We will generate any other chain addresses from these addresses.

***

### chainIdsToAffiliates?

> `optional` **chainIdsToAffiliates?**: `Record`\<`string`, \{ `affiliates`: `object`[]; \}\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:237](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L237)

Optional mapping of chain IDs to affiliate fee recipients.
Structure: { [chainId]: { affiliates: Array\<{ address: string; basis_points_fee: string }> } }

***

### forcefulRecheckCompliance?

> `optional` **forcefulRecheckCompliance?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:241](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L241)

Forcefully recheck compliance and avoid cache (5 minutes)

***

### isLocalOnly?

> `optional` **isLocalOnly?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:243](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L243)

Whether to only use local pools for the swap estimation

***

### slippageTolerancePercent

> **slippageTolerancePercent**: `string` \| `number`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:239](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L239)

Slippage tolerance as a percentage (0-100). Can be a string or number.

***

### tokenIn

> **tokenIn**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:219](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L219)

The token in to swap. Formats accepted: "amount:1,denom:ubadge" or "1ubadge"

***

### tokenInChainId?

> `optional` **tokenInChainId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:221](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L221)

Optional chain ID for the token in. Defaults to "bitbadges-1" if not provided.

***

### tokenOutChainId?

> `optional` **tokenOutChainId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:225](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L225)

Optional chain ID for the token out. Defaults to "bitbadges-1" if not provided.

***

### tokenOutDenom

> **tokenOutDenom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:223](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L223)

The token out denom to swap to.
