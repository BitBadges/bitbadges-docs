---
description: "Classification result for a settlement-shaped approval (single token-id start balance + voting challenge + burn target). Used to disambiguate \"wins\" approvals…"
---

# Type Alias: SettlementApprovalClassification

> **SettlementApprovalClassification** = `"wins-yes"` \| `"wins-no"` \| `"push"` \| `"ambiguous"` \| `"unknown"`

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L77)

Classification result for a settlement-shaped approval (single token-id
start balance + voting challenge + burn target). Used to disambiguate
"wins" approvals from "push" approvals without needing an explicit role
field on the approval.

- 'wins-yes' / 'wins-no' — payout amount equals start balance (1:1)
- 'push'                 — payout amount equals exactly half the start
                           balance (push burns 2x tokens for 1x payout)
- 'ambiguous'            — payout matches NEITHER the wins nor the push
                           ratio cleanly, OR matches both at once (only
                           possible when the start balance is 0). The
                           validator surfaces this as a warning so the
                           user can fix the payout amount or otherwise
                           disambiguate the approval.
- 'unknown'              — not a recognizable settlement-shaped approval
