---
description: "Informational property of the collection. Unlike a Finding, a decision has no severity and asks for no action — it answers the inverse question: \"what did this…"
---

# Type Alias: DesignDecisionStatus

> **DesignDecisionStatus** = `"pass"` \| `"fail"` \| `"n/a"`

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:99](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L99)

Informational property of the collection. Unlike a `Finding`, a decision
has no severity and asks for no action — it answers the inverse question:
"what did this collection end up being?"

Three states:
  - `pass`  — the collection has the property (e.g. "follows the Subscription protocol end-to-end")
  - `fail`  — the collection explicitly does not have the property (e.g. "is NOT non-transferable")
  - `n/a`   — the property is not applicable to this collection (e.g. backing check on a non-backed token)

Checks must encode a cross-field invariant or a cross-standard conformance
judgment. Restating something trivially readable from the raw JSON
(e.g. "has 'Subscriptions' in standards[]") is not a design decision.
