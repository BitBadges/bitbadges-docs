---
description: "GetVotes returns every stored vote on a voting challenge proposal."
---

# GetVotes

Returns all votes cast on one voting challenge proposal.

## Example

```bash
# [collection-id] [approval-level] [approver-address] [approval-id] [proposal-id]
bb query tokenization votes 1 collection "" multisig-approval proposal-1
```

```bash
curl "https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_votes/1/collection//multisig-approval/proposal-1"
```

## Request

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | string | Collection ID. |
| `approvalLevel` | string | `collection`, `incoming`, or `outgoing`. |
| `approverAddress` | string | Empty for `collection`. |
| `approvalId` | string | Approval that holds the voting challenge. |
| `proposalId` | string | `proposalId` of the `VotingChallenge`. |

## Response

```json
{
  "votes": [
    { "proposalId": "proposal-1", "voter": "bb1voter1...", "yesWeight": "100", "votedAt": "1735689600000" },
    { "proposalId": "proposal-1", "voter": "bb1voter2...", "yesWeight": "60", "votedAt": "1735693200000" }
  ]
}
```

| Field | Type | Description |
| --- | --- | --- |
| `votes` | `VoteProof[]` | One entry per voter who has voted. Voters who have not voted are absent. |

## Behavior

- Returns an empty array when nobody has voted.
- To compute quorum, sum `voterWeight * yesWeight / 100` over the entries and compare against `quorumThreshold` percent of the total weight in the challenge's `voters` list.
- Votes are cleared after a successful transfer when the challenge sets `resetAfterExecution`.

## Related

- [GetVote](get-vote.md)
- [MsgCastVote](../messages/msg-cast-vote.md)
- [Voting challenges](../approval-criteria/voting-challenges.md)
