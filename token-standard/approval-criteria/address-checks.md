---
description: "senderChecks, recipientChecks, and initiatorChecks: require or forbid EVM contracts and liquidity pools for each party of a transfer."
---

# Address Checks

Address checks constrain the type of address on each side of a transfer. They are how a collection keeps tokens out of pools, or requires that only contracts initiate a flow.

## Shape

A complete `approvalCriteria` with the `recipientChecks` and `initiatorChecks` fields open. Folded lines are defaults.

```json fold=2-66,79-97
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
    "mustBeEvmContract": true,
    "mustNotBeEvmContract": false,
    "mustBeLiquidityPool": false,
    "mustNotBeLiquidityPool": true
  },
  "initiatorChecks": {
    "mustBeEvmContract": false,
    "mustNotBeEvmContract": true,
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
  "votingChallenges": [],
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
interface AddressChecks {
  mustBeEvmContract?: boolean;
  mustNotBeEvmContract?: boolean;
  mustBeLiquidityPool?: boolean;
  mustNotBeLiquidityPool?: boolean;
}
```

| Field | Type | Description |
| --- | --- | --- |
| `mustBeEvmContract` | bool | The address must have EVM code |
| `mustNotBeEvmContract` | bool | The address must not have EVM code |
| `mustBeLiquidityPool` | bool | The address must be an `x/gamm` pool |
| `mustNotBeLiquidityPool` | bool | The address must not be an `x/gamm` pool |

The checks attach to a party:

| Criterion | Party checked | Collection | Outgoing | Incoming |
| --- | --- | --- | --- | --- |
| `senderChecks` | `from` | yes | no | yes |
| `recipientChecks` | `to` | yes | yes | no |
| `initiatorChecks` | `initiatedBy` | yes | yes | yes |

An outgoing approval cannot check the sender and an incoming approval cannot check the recipient, because that party is the approval's owner.

{% hint style="info" %}
Ask your agent: "Add a transfer approval to collection 1 where only EVM contracts can receive tokens, and never let tokens move into a liquidity pool." The MCP builder tools (`add_approval`) produce the objects on this page.
{% endhint %}

## How It Works

The chain converts the `bb1` address to its 20-byte EVM form and asks the EVM module whether code exists there. For pools it looks the address up in the pool address cache that `x/gamm` fills at pool creation. If the EVM or gamm module is not wired in, the corresponding check answers `false`.

Checks run after the address lists match. An address must be in `fromListId`, `toListId`, or `initiatedByListId` first, then pass its checks. Several flags on one party combine with AND.

### Examples

Only contracts can receive:

```json
{
  "recipientChecks": {
    "mustBeEvmContract": true,
    "mustNotBeEvmContract": false,
    "mustBeLiquidityPool": false,
    "mustNotBeLiquidityPool": false
  }
}
```

Pools cannot send (collection approval):

```json
{
  "senderChecks": {
    "mustBeEvmContract": false,
    "mustNotBeEvmContract": false,
    "mustBeLiquidityPool": false,
    "mustNotBeLiquidityPool": true
  }
}
```

Only contracts can initiate (incoming approval):

```json
{
  "initiatorChecks": {
    "mustBeEvmContract": true,
    "mustNotBeEvmContract": false,
    "mustBeLiquidityPool": false,
    "mustNotBeLiquidityPool": false
  }
}
```

Never send to a pool (outgoing approval):

```json
{
  "recipientChecks": {
    "mustBeEvmContract": false,
    "mustNotBeEvmContract": false,
    "mustBeLiquidityPool": false,
    "mustNotBeLiquidityPool": true
  }
}
```

Uses: contract-only integrations, keeping a token out of liquidity pools, requiring that a human (non-contract) initiates, and protocol-specific routing rules. Pair `mustNotBeLiquidityPool` with the reserved-address protection described on [Overrides](overrides.md) when you use forceful transfers.

## Related

- [Overrides](overrides.md)
- [Approval Criteria](README.md)
- [gamm](../../chain/modules/gamm/README.md)
