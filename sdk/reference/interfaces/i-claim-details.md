---
description: "T extends NumberType"
---

# Interface: iClaimDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1978](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1978)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_includesPrivateParams

> **\_includesPrivateParams**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1980](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1980)

Whether the claim fetch includes private params

***

### \_templateInfo?

> `optional` **\_templateInfo?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2056](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2056)

**`Internal`**

For internal use by the frontend.

#### completedTemplateStep?

> `optional` **completedTemplateStep?**: `boolean`

#### pluginId?

> `optional` **pluginId?**: `string`

#### supportedApproaches?

> `optional` **supportedApproaches?**: `string`[]

***

### approach?

> `optional` **approach?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2021](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2021)

How the claim is expected to be completed. This is for display purposes for the frontend.

Available options:
- in-site (default): The claim is expected to be completed in-site.
- api: The claim is expected to be completed via an API call.
- zapier: The claim is expected to be completed via Zapier auto-completion.

Typically, you will use the in-site approach

***

### assignMethod?

> `optional` **assignMethod?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2035](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2035)

Algorithm to determine the claim number order. Blank is just incrementing claim numbers.

For most cases, you will not need to specify this.

***

### cachePolicy?

> `optional` **cachePolicy?**: [`iClaimCachePolicy`](/sdk/reference/interfaces/i-claim-cache-policy)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2050](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2050)

Cache policy for the claim. Only needed for on-demand claims.

***

### categories?

> `optional` **categories?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2002](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2002)

The categories of the claim

***

### claimId

> **claimId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1982](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1982)

Unique claim ID.

***

### collectionId?

> `optional` **collectionId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1988](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1988)

Collection ID that the claim is for (if applicable - collection claims).

***

### createdBy?

> `optional` **createdBy?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1984](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1984)

The original creator of the claim

***

### estimatedCost?

> `optional` **estimatedCost?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1998](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1998)

Estimated cost for the claim.

***

### estimatedTime?

> `optional` **estimatedTime?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2004](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2004)

Estimated time to satisfy the claim's requirements.

***

### lastUpdated?

> `optional` **lastUpdated?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2037](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2037)

Last updated timestamp for the claim.

***

### managedBy?

> `optional` **managedBy?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1986](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1986)

The BitBadges address of the user who is currently managing this

***

### manualDistribution?

> `optional` **manualDistribution?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2010](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2010)

If manual distribution is enabled, we do not handle any distribution of claim codes.
We leave that up to the claim creator.

Only applicable for on-chain token claims. This is only used in advanced self-hosted cases.

***

### metadata?

> `optional` **metadata?**: [`iMetadata`](/sdk/reference/interfaces/i-metadata)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2029](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2029)

Metadata for the claim.

***

### plugins

> **plugins**: [`IntegrationPluginDetails`](/sdk/reference/interfaces/integration-plugin-details)\<`string`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1994](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1994)

Claim plugins. These are the criteria that must pass for a user to claim.

***

### rewards?

> `optional` **rewards?**: [`iClaimReward`](/sdk/reference/interfaces/i-claim-reward)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1996](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1996)

Rewards for the claim.

***

### satisfyMethod?

> `optional` **satisfyMethod?**: [`iSatisfyMethod`](/sdk/reference/interfaces/i-satisfy-method)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2046](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2046)

Custom satisfaction logic.

If left blank, all plugins must pass for the claim to be satisfied.
Otherwise, you can specify a custom method to determine if the claim is satisfied.

***

### seedCode?

> `optional` **seedCode?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2027](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2027)

Seed code for the claim. Only used for on-chain token claims.

This is how we produce all reserved codes for the on-chain merkle challenge / proofs.

***

### showInSearchResults?

> `optional` **showInSearchResults?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2000](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2000)

If true, the claim will be shown in search results

***

### standaloneClaim?

> `optional` **standaloneClaim?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1990](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1990)

Standalone claims are not linked with a token or list.

***

### trackerDetails?

> `optional` **trackerDetails?**: [`iChallengeTrackerIdDetails`](/sdk/reference/interfaces/i-challenge-tracker-id-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1992](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1992)

The tracker details for the claim (if applicable - collection claims).

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2039](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2039)

The version of the claim.
