---
description: "The claim body for each unique plugin."
---

# Interface: iSimulateClaimPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:746](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L746)

## Indexable

> \[`customInstanceId`: `string`\]: `any`

The claim body for each unique plugin.

## Properties

### \_expectedVersion

> **\_expectedVersion**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:748](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L748)

Will fail if the claim version is not the expected version. To override, set to -1.

***

### \_specificInstanceIds?

> `optional` **\_specificInstanceIds?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:751](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L751)

If provided, we will only simulate the claim for the specific plugins w/ the provided instance IDs.
