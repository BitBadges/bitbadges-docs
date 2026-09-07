---
description: "Split a Bounty collection's 3 approvals into accept / deny / expire."
---

# Function: extractBountyDetails()

> **extractBountyDetails**(`approvals`): [`BountyDetails`](/sdk/reference/interfaces/bounty-details) \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/bounties.ts:145](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bounties.ts#L145)

Split a Bounty collection's 3 approvals into accept / deny / expire.
- Accept and deny both carry a votingChallenge.
- Expire has no votingChallenge — it's the deadline-fallback refund.
- Accept pays recipient; deny pays submitter. They're disambiguated by
  whose address the coinTransfer targets (the expire approval's payout
  address IS the submitter).

Returns null on shape mismatch; caller should treat that as non-conformant.

## Parameters

### approvals

readonly [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>[]

## Returns

[`BountyDetails`](/sdk/reference/interfaces/bounty-details) \| `null`
