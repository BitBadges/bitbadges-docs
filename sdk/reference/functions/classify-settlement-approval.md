---
description: "Classify a settlement-shaped approval based on its coin transfer payout vs its start balance amount. The token id targeted by the start balance decides whether…"
---

# Function: classifySettlementApproval()

> **classifySettlementApproval**(`approval`): [`SettlementApprovalClassification`](/sdk/reference/type-aliases/settlement-approval-classification)

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:88](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L88)

Classify a settlement-shaped approval based on its coin transfer payout
vs its start balance amount. The token id targeted by the start balance
decides whether a "wins" classification is YES or NO.

Pure heuristic — does not look at the broader collection. Callers should
already have filtered to approvals that look like settlement approvals
(burn target, single start balance, voting challenge present).

## Parameters

### approval

`any`

## Returns

[`SettlementApprovalClassification`](/sdk/reference/type-aliases/settlement-approval-classification)
