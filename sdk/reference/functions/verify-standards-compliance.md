---
description: "Verify that a collection transaction satisfies all deterministic requirements for its declared standards."
---

# Function: verifyStandardsCompliance()

> **verifyStandardsCompliance**(`transaction`, `onChainCollection?`): [`VerificationResult`](/sdk/reference/interfaces/verification-result)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/verify-standards.ts:1547](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/verify-standards.ts#L1547)

Verify that a collection transaction satisfies all deterministic
requirements for its declared standards.

Runs with 0 AI tokens — pure structural validation.

## Parameters

### transaction

`any`

The full transaction object (with messages array)

### onChainCollection?

`any`

Optional prior on-chain state. Required for
  accurate verification of update transactions — the chain ignores
  `defaultBalances` and `invariants` on MsgUpdateCollection, so those
  fields are absent from the tx body even though the checks below
  depend on them. When supplied, we splice the on-chain values onto
  the verification view so every downstream check runs against the
  full effective collection state.

## Returns

[`VerificationResult`](/sdk/reference/interfaces/verification-result)

VerificationResult with violations and checked standards
