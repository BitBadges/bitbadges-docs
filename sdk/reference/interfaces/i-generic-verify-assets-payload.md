---
description: "Generic route to verify any asset ownership requirements."
---

# Interface: iGenericVerifyAssetsPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1772](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1772)

Generic route to verify any asset ownership requirements.

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1776](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1776)

The address to check

***

### assetOwnershipRequirements

> **assetOwnershipRequirements**: [`AssetConditionGroup`](/sdk/reference/type-aliases/asset-condition-group)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1781](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1781)

The asset requirements to verify.
