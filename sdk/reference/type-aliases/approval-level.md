---
description: "Approval level — determines which rules apply. Collection approvals carry the full ApprovalCriteria proto (overridesFromOutgoingApprovals, allowBackedMinting…"
---

# Type Alias: ApprovalLevel

> **ApprovalLevel** = `"collection"` \| `"outgoing"` \| `"incoming"`

Defined in: [packages/bitbadgesjs-sdk/src/core/validate.ts:284](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/validate.ts#L284)

Approval level — determines which rules apply. Collection approvals carry
the full `ApprovalCriteria` proto (overridesFromOutgoingApprovals,
allowBackedMinting, etc.); user-level outgoing/incoming approvals carry
the narrower `OutgoingApprovalCriteria` / `IncomingApprovalCriteria`
proto types that omit the collection-only fields. Rules that reference
those omitted fields are skipped when the level isn't 'collection'.
