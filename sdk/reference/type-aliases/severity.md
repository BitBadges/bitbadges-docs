---
description: "Unified review types — kept in a standalone file so the review-ux check modules can import types without creating a circular dependency with review.ts (which…"
---

# Type Alias: Severity

> **Severity** = `"critical"` \| `"warning"` \| `"info"`

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:7](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L7)

Unified review types — kept in a standalone file so the review-ux check
modules can import types without creating a circular dependency with
`review.ts` (which imports the check modules at runtime).
