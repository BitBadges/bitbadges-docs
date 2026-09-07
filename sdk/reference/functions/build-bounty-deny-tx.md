---
description: "Build the 2-msg tx wrapper the verifier signs to DENY a bounty: same shape as accept, but targeting the deny approval (payout to submitter)."
---

# Function: buildBountyDenyTx()

> **buildBountyDenyTx**(`creator`, `collectionId`, `denyApproval`): [`BountyTxWrapper`](/sdk/reference/interfaces/bounty-tx-wrapper)

Defined in: [packages/bitbadgesjs-sdk/src/core/bounties.ts:306](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bounties.ts#L306)

Build the 2-msg tx wrapper the verifier signs to DENY a bounty:
same shape as accept, but targeting the deny approval (payout to submitter).

## Parameters

### creator

`string`

### collectionId

`string`

### denyApproval

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>

## Returns

[`BountyTxWrapper`](/sdk/reference/interfaces/bounty-tx-wrapper)
