---
description: "votingChallenges: require a weighted quorum of on-chain votes from named voters, with partial votes, reset after execution, and a timelock."
---

# Voting challenges

A voting challenge requires named voters to approve the transfer on-chain, each with a weight. It is the standard's multisig: N-of-M signers, weighted governance, or a timelocked vault.

## Shape

```json
{
  "votingChallenges": [
    {
      "proposalId": "proposal-1",
      "quorumThreshold": "50",
      "voters": [
        { "address": "bb1abc...", "weight": "100" },
        { "address": "bb1def...", "weight": "200" },
        { "address": "bb1ghi...", "weight": "50" }
      ],
      "uri": "",
      "customData": "",
      "resetAfterExecution": false,
      "delayAfterQuorum": "0"
    }
  ]
}
```

```ts
interface VotingChallenge {
  proposalId: string;
  quorumThreshold: string;
  voters: Voter[];
  uri?: string;
  customData?: string;
  resetAfterExecution?: boolean;
  delayAfterQuorum?: string;
}

interface Voter {
  address: string;
  weight: string;
}
```

| Field | Type | Description |
| --- | --- | --- |
| `proposalId` | string | Scopes the votes. A new ID starts a fresh tally. |
| `quorumThreshold` | Uint | Percentage (0-100) of total possible weight that must vote yes |
| `voters` | Voter[] | Voters and weights. Every weight must be above 0. |
| `resetAfterExecution` | bool | Clear all votes after a transfer uses this challenge |
| `delayAfterQuorum` | Uint (ms) | Minimum time between reaching quorum and executing. `0` means none. |
| `uri`, `customData` | string | Explain to voters what they are approving |

Votes are cast with [MsgCastVote](../messages/msg-cast-vote.md):

| Field | Description |
| --- | --- |
| `proposalId` | The challenge's proposal ID |
| `voter` | The voter's address. Must be in `voters`. |
| `yesWeight` | 0-100. Percent of the voter's weight allocated to yes; the rest is no. |

## How it works

1. A voter casts a vote. The chain stores it under `collectionId-approverAddress-approvalLevel-approvalId-proposalId-voterAddress`. Casting again overwrites.
2. On a transfer, the chain sums every voter's yes contribution: `weight * yesWeight / 100`. A voter with no vote contributes 0.
3. `percentage = totalYes * 100 / totalPossibleWeight`, where `totalPossibleWeight` is the sum of all weights, voted or not.
4. The challenge passes when `percentage >= quorumThreshold`, and, if `delayAfterQuorum` is set, when `delayAfterQuorum` milliseconds have passed since quorum was first reached.

Read votes with [GetVote](../queries/get-vote.md) and [GetVotes](../queries/get-votes.md).

### Partial votes

| `yesWeight` | Yes | No |
| --- | --- | --- |
| `100` | 100% | 0% |
| `70` | 70% | 30% |
| `50` | 50% | 50% |
| `0` | 0% | 100% |

### Worked example

Voters A (100), B (200), C (50). Total possible weight 350. Threshold 50%.

- A votes 100% yes: 100
- B votes 50% yes: 100
- C does not vote: 0
- Total yes 200. `200 * 100 / 350 = 57%`. 57 >= 50, so the challenge passes.

Abstaining voters count as no. Set thresholds with expected participation in mind.

### Reset after execution

With `resetAfterExecution: true`, a successful transfer clears every vote on the challenge. The next transfer needs a fresh round of approval under the same `proposalId`. Use it for vaults where every withdrawal must be approved, or any recurring multisig. Without it, votes persist and every later matching transfer passes until someone changes their vote.

### Delay after quorum

When `delayAfterQuorum` is above 0, the chain records the time quorum is first reached (on the vote that crosses the threshold) and rejects transfers until that time plus the delay. If votes drop below quorum the timestamp clears and the clock restarts on the next crossing. Use it for timelocks: 86400000 (24 hours) gives stakeholders time to review or revoke before a large transfer executes.

### Examples

Unanimous 3-of-3:

```json
{
  "votingChallenges": [
    {
      "proposalId": "multisig-1",
      "quorumThreshold": "100",
      "voters": [
        { "address": "bb1alice...", "weight": "1" },
        { "address": "bb1bob...", "weight": "1" },
        { "address": "bb1charlie...", "weight": "1" }
      ]
    }
  ]
}
```

Weighted governance, 66% of 1600 (1056) must vote yes:

```json
{
  "votingChallenges": [
    {
      "proposalId": "governance-1",
      "quorumThreshold": "66",
      "voters": [
        { "address": "bb1founder...", "weight": "1000" },
        { "address": "bb1investor...", "weight": "500" },
        { "address": "bb1community...", "weight": "100" }
      ]
    }
  ]
}
```

Any one of three:

```json
{
  "votingChallenges": [
    {
      "proposalId": "flexible-1",
      "quorumThreshold": "30",
      "voters": [
        { "address": "bb1voter1...", "weight": "100" },
        { "address": "bb1voter2...", "weight": "100" },
        { "address": "bb1voter3...", "weight": "100" }
      ]
    }
  ]
}
```

### Failure conditions

- The voter is not in `voters`
- `yesWeight` is above 100
- Yes percentage is below `quorumThreshold`
- `proposalId` does not match a challenge on the approval
- No voters, or a voter with zero weight
- `delayAfterQuorum` has not elapsed

### Security

- Changing `proposalId` resets the tally. Use unique IDs per challenge so old votes cannot carry over.
- Votes are on-chain, scoped to the collection, approver, level, approval, and proposal, and can only be changed by the voter.
- Weight distribution is the security model. One dominant weight is one point of failure; equal weights make a plain multisig.
- Put the proposal's purpose in `uri` or `customData` so voters know what they approve.

## Related

- [MsgCastVote](../messages/msg-cast-vote.md)
- [GetVotes](../queries/get-votes.md)
- [Compliance zones](../concepts/compliance-zones.md)
