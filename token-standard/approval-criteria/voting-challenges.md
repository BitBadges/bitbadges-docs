---
description: "votingChallenges: require a weighted quorum of on-chain votes from named voters, with partial votes, reset after execution, and a timelock."
---

# Voting Challenges

A voting challenge requires named voters to approve the transfer on-chain, each with a weight. It is the standard's multisig: N-of-M signers, weighted governance, or a timelocked vault.

## Shape

A complete `approvalCriteria` with the `votingChallenges` array open. Folded lines are defaults.

```json fold=2-88,113-120
{
  "merkleChallenges": [],
  "predeterminedBalances": {
    "manualBalances": [],
    "incrementedBalances": {
      "startBalances": [],
      "incrementTokenIdsBy": "0",
      "incrementOwnershipTimesBy": "0",
      "durationFromTimestamp": "0",
      "allowOverrideTimestamp": false,
      "recurringOwnershipTimes": {
        "startTime": "0",
        "intervalLength": "0",
        "chargePeriodLength": "0"
      },
      "allowOverrideWithAnyValidToken": false,
      "allowAmountScaling": false,
      "maxScalingMultiplier": "0"
    },
    "orderCalculationMethod": {
      "useOverallNumTransfers": false,
      "usePerToAddressNumTransfers": false,
      "usePerFromAddressNumTransfers": false,
      "usePerInitiatedByAddressNumTransfers": false,
      "useMerkleChallengeLeafIndex": false,
      "challengeTrackerId": ""
    }
  },
  "approvalAmounts": {
    "overallApprovalAmount": "0",
    "perToAddressApprovalAmount": "0",
    "perFromAddressApprovalAmount": "0",
    "perInitiatedByAddressApprovalAmount": "0",
    "amountTrackerId": "",
    "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
  },
  "maxNumTransfers": {
    "overallMaxNumTransfers": "0",
    "perToAddressMaxNumTransfers": "0",
    "perFromAddressMaxNumTransfers": "0",
    "perInitiatedByAddressMaxNumTransfers": "0",
    "amountTrackerId": "",
    "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
  },
  "coinTransfers": [],
  "requireToEqualsInitiatedBy": false,
  "requireFromEqualsInitiatedBy": false,
  "requireToDoesNotEqualInitiatedBy": false,
  "requireFromDoesNotEqualInitiatedBy": false,
  "overridesFromOutgoingApprovals": true,
  "overridesToIncomingApprovals": false,
  "autoDeletionOptions": {
    "afterOneUse": false,
    "afterOverallMaxNumTransfers": false,
    "allowCounterpartyPurge": false,
    "allowPurgeIfExpired": false
  },
  "mustOwnTokens": [],
  "dynamicStoreChallenges": [],
  "ethSignatureChallenges": [],
  "senderChecks": {
    "mustBeEvmContract": false,
    "mustNotBeEvmContract": false,
    "mustBeLiquidityPool": false,
    "mustNotBeLiquidityPool": false
  },
  "recipientChecks": {
    "mustBeEvmContract": false,
    "mustNotBeEvmContract": false,
    "mustBeLiquidityPool": false,
    "mustNotBeLiquidityPool": false
  },
  "initiatorChecks": {
    "mustBeEvmContract": false,
    "mustNotBeEvmContract": false,
    "mustBeLiquidityPool": false,
    "mustNotBeLiquidityPool": false
  },
  "altTimeChecks": {
    "offlineHours": [],
    "offlineDays": [],
    "offlineMonths": [],
    "offlineDaysOfMonth": [],
    "offlineWeeksOfYear": [],
    "timezoneOffsetMinutes": "0",
    "timezoneOffsetNegative": false
  },
  "mustPrioritize": false,
  "votingChallenges": [
    {
      "proposalId": "proposal-1",
      "quorumThreshold": "50",
      "voters": [
        {
          "address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
          "weight": "100"
        },
        {
          "address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
          "weight": "200"
        },
        {
          "address": "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf",
          "weight": "50"
        }
      ],
      "uri": "",
      "customData": "",
      "resetAfterExecution": false,
      "delayAfterQuorum": "0"
    }
  ],
  "allowBackedMinting": false,
  "allowSpecialWrapping": false,
  "evmQueryChallenges": [],
  "userApprovalSettings": {
    "allowedDenoms": [],
    "disableUserCoinTransfers": false,
    "userRoyalties": { "percentage": "0", "payoutAddress": "" }
  }
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

{% hint style="info" %}
Ask your agent:

```text
Add a transfer approval to collection 1 that needs 2 of 3 votes from alice, bob, and carol before any transfer executes.
```

The MCP builder tools (`add_approval`) produce the objects on this page.
{% endhint %}

## How It Works

1. A voter casts a vote. The chain stores it under `collectionId-approverAddress-approvalLevel-approvalId-proposalId-voterAddress`. Casting again overwrites.
2. On a transfer, the chain sums every voter's yes contribution: `weight * yesWeight / 100`. A voter with no vote contributes 0.
3. `percentage = totalYes * 100 / totalPossibleWeight`, where `totalPossibleWeight` is the sum of all weights, voted or not.
4. The challenge passes when `percentage >= quorumThreshold`, and, if `delayAfterQuorum` is set, when `delayAfterQuorum` milliseconds have passed since quorum was first reached.

Read votes with [GetVote](../queries/get-vote.md) and [GetVotes](../queries/get-votes.md).

### Partial Votes

| `yesWeight` | Yes | No |
| --- | --- | --- |
| `100` | 100% | 0% |
| `70` | 70% | 30% |
| `50` | 50% | 50% |
| `0` | 0% | 100% |

### Worked Example

Voters alice (100), bob (200), carol (50). Total possible weight 350. Threshold 50%.

- alice votes 100% yes: 100
- bob votes 50% yes: 100
- carol does not vote: 0
- Total yes 200. `200 * 100 / 350 = 57%`. 57 >= 50, so the challenge passes.

Abstaining voters count as no. Set thresholds with expected participation in mind.

### Reset After Execution

With `resetAfterExecution: true`, a successful transfer clears every vote on the challenge. The next transfer needs a fresh round of approval under the same `proposalId`. Use it for vaults where every withdrawal must be approved, or any recurring multisig. Without it, votes persist and every later matching transfer passes until someone changes their vote.

### Delay After Quorum

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
        {
          "address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
          "weight": "1"
        },
        {
          "address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
          "weight": "1"
        },
        {
          "address": "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf",
          "weight": "1"
        }
      ],
      "uri": "",
      "customData": "",
      "resetAfterExecution": false,
      "delayAfterQuorum": "0"
    }
  ]
}
```

Weighted governance (alice as founder, bob as investor, carol as community), 66% of 1600 (1056) must vote yes:

```json
{
  "votingChallenges": [
    {
      "proposalId": "governance-1",
      "quorumThreshold": "66",
      "voters": [
        {
          "address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
          "weight": "1000"
        },
        {
          "address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
          "weight": "500"
        },
        {
          "address": "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf",
          "weight": "100"
        }
      ],
      "uri": "",
      "customData": "",
      "resetAfterExecution": false,
      "delayAfterQuorum": "0"
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
        {
          "address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
          "weight": "100"
        },
        {
          "address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
          "weight": "100"
        },
        {
          "address": "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf",
          "weight": "100"
        }
      ],
      "uri": "",
      "customData": "",
      "resetAfterExecution": false,
      "delayAfterQuorum": "0"
    }
  ]
}
```

### Failure Conditions

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
- [Compliance Zones](../concepts/compliance-zones.md)
