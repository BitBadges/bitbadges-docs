---
description: "The claim IDs to fetch."
---

# Interface: iGetClaimsPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:389](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L389)

## Properties

### claimIds

> **claimIds**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:391](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L391)

The claim IDs to fetch.

***

### fetchAllClaimedUsers?

> `optional` **fetchAllClaimedUsers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:406](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L406)

Fetch all claimed users for the claim. If true, you will be able to find all { [bitbadgesAddress]: [...zeroIndexedClaimNumbers] }
on the numUses plugin's publicState.

***

### fetchPrivateParams?

> `optional` **fetchPrivateParams?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:394](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L394)

Fetch private parameters for the claim. Only applicable if you are the creator / manager of the claim.

***

### privateStatesToFetch?

> `optional` **privateStatesToFetch?**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:397](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L397)

Which private state instance IDs to fetch. claimId and instanceId are required and must match a claimId in claimIds and the claim must have the corresponding instanceId.

#### claimId

> **claimId**: `string`

#### instanceId

> **instanceId**: `string`
