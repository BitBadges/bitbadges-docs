---
description: "Fetch all claimed users for the claim. If true, you will be able to find all { [bitbadgesAddress]: [...zeroIndexedClaimNumbers] } on the numUses plugin's…"
---

# Interface: iGetClaimPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:464](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L464)

## Properties

### fetchAllClaimedUsers?

> `optional` **fetchAllClaimedUsers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:469](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L469)

Fetch all claimed users for the claim.  If true, you will be able to find all { [bitbadgesAddress]: [...zeroIndexedClaimNumbers] }
on the numUses plugin's publicState.

***

### fetchPrivateParams?

> `optional` **fetchPrivateParams?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:466](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L466)

Fetch private parameters for the claim. Only applicable if you are the creator / manager of the claim.

***

### privateStatesToFetch?

> `optional` **privateStatesToFetch?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:471](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L471)

The private state instance IDs to fetch. By default, we do not fetch any private states.
