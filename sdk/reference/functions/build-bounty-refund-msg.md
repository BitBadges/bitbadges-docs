---
description: "Build the single MsgTransferTokens that fires the expire approval — available to anyone after the deadline passes; refunds the submitter from escrow."
---

# Function: buildBountyRefundMsg()

> **buildBountyRefundMsg**(`creator`, `collectionId`, `expireApproval`): [`BountyTransferMsg`](/sdk/reference/interfaces/bounty-transfer-msg)

Defined in: [packages/bitbadgesjs-sdk/src/core/bounties.ts:324](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bounties.ts#L324)

Build the single MsgTransferTokens that fires the expire approval —
available to anyone after the deadline passes; refunds the submitter
from escrow.

## Parameters

### creator

`string`

### collectionId

`string`

### expireApproval

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>

## Returns

[`BountyTransferMsg`](/sdk/reference/interfaces/bounty-transfer-msg)
