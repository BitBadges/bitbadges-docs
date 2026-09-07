---
description: "Build the 2-msg tx wrapper the verifier signs to ACCEPT a bounty: MsgCastVote(yesweight=100) on the accept approval's proposal, then MsgTransferTokens that…"
---

# Function: buildBountyAcceptTx()

> **buildBountyAcceptTx**(`creator`, `collectionId`, `acceptApproval`): [`BountyTxWrapper`](/sdk/reference/interfaces/bounty-tx-wrapper)

Defined in: [packages/bitbadgesjs-sdk/src/core/bounties.ts:289](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bounties.ts#L289)

Build the 2-msg tx wrapper the verifier signs to ACCEPT a bounty:
MsgCastVote(yes_weight=100) on the accept approval's proposal, then
MsgTransferTokens that fires the accept approval (payout to recipient).

## Parameters

### creator

`string`

### collectionId

`string`

### acceptApproval

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>

## Returns

[`BountyTxWrapper`](/sdk/reference/interfaces/bounty-tx-wrapper)
