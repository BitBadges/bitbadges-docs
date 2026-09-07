---
description: "GetVote returns one voter's current vote on a voting challenge."
---

# GetVote

Returns the stored vote of one voter for one voting challenge proposal.

## Example

```bash
# [collection-id] [approval-level] [approver-address] [approval-id] [proposal-id] [voter-address]
bb query tokenization vote 1 collection "" multisig-approval proposal-1 bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf
```

```bash
curl "https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_vote/1/collection//multisig-approval/proposal-1/bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf"
```

## Request

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | string | Collection ID. |
| `approvalLevel` | string | `collection`, `incoming`, or `outgoing`. |
| `approverAddress` | string | Empty for `collection`. |
| `approvalId` | string | Approval that holds the voting challenge. |
| `proposalId` | string | `proposalId` of the `VotingChallenge`. |
| `voterAddress` | string | Voter to look up. |

## Response

```json
{
  "vote": {
    "proposalId": "proposal-1",
    "voter": "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf",
    "yesWeight": "100",
    "votedAt": "1788739200000"
  }
}
```

| Field | Type | Description |
| --- | --- | --- |
| `proposalId` | string | Proposal. |
| `voter` | string | Voter. |
| `yesWeight` | Uint | Percentage (0 to 100) of the voter's weight cast as yes. |
| `votedAt` | Uint | Unix milliseconds when the vote was last cast. |

## Behavior

- Returns gRPC `NotFound` (`vote not found`) when the voter has not voted.
- The voter's contribution to quorum is `voterWeight * yesWeight / 100`, where `voterWeight` comes from the challenge's `voters` list.

## Related

- [GetVotes](get-votes.md)
- [MsgCastVote](../messages/msg-cast-vote.md)
- [Voting challenges](../approval-criteria/voting-challenges.md)
