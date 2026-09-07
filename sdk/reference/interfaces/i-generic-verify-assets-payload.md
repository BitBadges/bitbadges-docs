---
description: "Generic route to verify any asset ownership requirements."
---

# Interface: iGenericVerifyAssetsPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1771](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1771)

Generic route to verify any asset ownership requirements.

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1775](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1775)

The address to check

***

### assetOwnershipRequirements

> **assetOwnershipRequirements**: [`AssetConditionGroup`](/sdk/reference/type-aliases/asset-condition-group)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1780](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1780)

The asset requirements to verify.
