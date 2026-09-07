---
description: "The claim body for each unique plugin."
---

# Interface: iCompleteClaimPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:545](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L545)

## Indexable

> \[`customInstanceId`: `string`\]: `any`

The claim body for each unique plugin.

## Properties

### \_expectedVersion

> **\_expectedVersion**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:547](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L547)

Needs to be provided so we check that no plugins or claims have been updated since the claim was fetched. To override, set to -1.

***

### \_specificInstanceIds?

> `optional` **\_specificInstanceIds?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:550](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L550)

If provided, we will only complete the claim for the specific plugins w/ the provided instance IDs. Must be compatible with the satisfaction logic.
