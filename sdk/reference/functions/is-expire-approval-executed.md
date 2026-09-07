---
description: "Distinguishes \"window closed but expire not yet fired\" from \"expire branch executed\". The indexer collapses both into status === 'expired', so this finer…"
---

# Function: isExpireApprovalExecuted()

> **isExpireApprovalExecuted**(`approval`, `collection`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/bounties.ts:185](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bounties.ts#L185)

Distinguishes "window closed but expire not yet fired" from "expire branch executed".
The indexer collapses both into `status === 'expired'`, so this finer distinction
must come from the local approvalTracker. Used for the expire branch only —
accept/deny use the indexer status directly.

## Parameters

### approval

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>

### collection

`Readonly`\<[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc)\<`bigint`\>\>

## Returns

`boolean`
