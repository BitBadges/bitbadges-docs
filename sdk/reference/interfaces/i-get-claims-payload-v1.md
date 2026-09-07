---
description: "The claims to fetch."
---

# Interface: iGetClaimsPayloadV1

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:413](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L413)

## Properties

### claimsToFetch

> **claimsToFetch**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:415](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L415)

The claims to fetch.

#### claimId

> **claimId**: `string`

The claim ID to fetch.

#### fetchAllClaimedUsers?

> `optional` **fetchAllClaimedUsers?**: `boolean`

Fetch all claimed users for the claim. If true, you will be able to find all { [bitbadgesAddress]: [...zeroIndexedClaimNumbers] }
on the numUses plugin's publicState.

#### fetchPrivateParams?

> `optional` **fetchPrivateParams?**: `boolean`

Fetch private parameters for the claim. Only applicable if you are the creator / manager of the claim.

#### privateStatesToFetch?

> `optional` **privateStatesToFetch?**: `string`[]

The private state instance IDs to fetch. By default, we do not fetch any private states.
