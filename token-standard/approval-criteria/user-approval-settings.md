---
description: "userApprovalSettings: let a collection approval restrict the denoms in user-level coin transfers, disable them, and take a royalty on every coin payment."
---

# User approval settings

`userApprovalSettings` is how the issuer constrains what users can do in their own outgoing and incoming approvals for transfers that match a collection approval. It carries the allowed payment denoms, a switch to disable user coin transfers, and the royalty.

## Shape

A complete `approvalCriteria` with the `userApprovalSettings` object open. Folded lines are defaults.

```json fold=2-92
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
  "votingChallenges": [],
  "allowBackedMinting": false,
  "allowSpecialWrapping": false,
  "evmQueryChallenges": [],
  "userApprovalSettings": {
    "allowedDenoms": [
      "ubadge"
    ],
    "disableUserCoinTransfers": false,
    "userRoyalties": {
      "percentage": "500",
      "payoutAddress": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
    }
  }
}
```

```ts
interface UserApprovalSettings<T extends NumberType> {
  allowedDenoms?: string[];
  disableUserCoinTransfers?: boolean;
  userRoyalties?: iUserRoyalties<T>;
}

interface UserRoyalties<T extends NumberType> {
  percentage: T;         // basis points, 1 to 10000
  payoutAddress: string; // receives the royalty
}
```

| Field | Type | Description |
| --- | --- | --- |
| `allowedDenoms` | string[] | Denoms a user-level `coinTransfers` entry may use under this approval. Empty means every denom the module params allow. |
| `disableUserCoinTransfers` | bool | `true` rejects any user-level approval with `coinTransfers` under this collection approval |
| `userRoyalties.percentage` | Uint | Basis points. `100` is 1%, `250` is 2.5%, `10000` is 100%. |
| `userRoyalties.payoutAddress` | string | `bb1` address that receives the royalty. Required when `percentage` is above 0. |

Collection approvals only.

{% hint style="info" %}
Ask your agent: "Add a transfer approval to collection 1 with a 5% royalty to alice on every payment, and only allow payments in BADGE." The MCP builder tools (`add_approval`) produce the objects on this page.
{% endhint %}

## How it works

The chain matches the collection approval first, then checks the user-level approvals for the same balance slice. It passes this collection approval's `userApprovalSettings` down into that user-level check:

- If `disableUserCoinTransfers` is set and the user approval has `coinTransfers`, the transfer fails.
- If `allowedDenoms` is non-empty and a user coin transfer uses a denom outside it, the transfer fails.
- For every coin in a user-level coin transfer, `royalty = amount * percentage / 10000` goes to `payoutAddress` and the remainder goes to the coin transfer's recipient.

When one transfer is split across several collection approvals, each slice carries the settings of the approval that matched it.

### Royalties

Royalties apply to coin payments (for example a buyer paying a seller through the seller's outgoing approval), not to the tokens themselves. A `percentage` above 10000 is rejected. A `percentage` above 0 with an empty `payoutAddress` is rejected.

5% to alice, the creator:

```json
{
  "userApprovalSettings": {
    "allowedDenoms": [],
    "disableUserCoinTransfers": false,
    "userRoyalties": {
      "percentage": "500",
      "payoutAddress": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
    }
  }
}
```

2.5% to carol, the artist:

```json
{
  "userApprovalSettings": {
    "allowedDenoms": [],
    "disableUserCoinTransfers": false,
    "userRoyalties": {
      "percentage": "250",
      "payoutAddress": "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf"
    }
  }
}
```

### Examples

Users may pay only in BADGE:

```json
{
  "userApprovalSettings": {
    "allowedDenoms": [
      "ubadge"
    ],
    "disableUserCoinTransfers": false,
    "userRoyalties": { "percentage": "0", "payoutAddress": "" }
  }
}
```

No user-level payments at all:

```json
{
  "userApprovalSettings": {
    "allowedDenoms": [],
    "disableUserCoinTransfers": true,
    "userRoyalties": { "percentage": "0", "payoutAddress": "" }
  }
}
```

BADGE only, with 5% to alice:

```json
{
  "userApprovalSettings": {
    "allowedDenoms": [
      "ubadge"
    ],
    "disableUserCoinTransfers": false,
    "userRoyalties": {
      "percentage": "500",
      "payoutAddress": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
    }
  }
}
```

Use one of `allowedDenoms` or `disableUserCoinTransfers`; setting both is contradictory, and `disableUserCoinTransfers` wins because it is checked first.

## Related

- [Coin transfers](coin-transfers.md)
- [Transferability](../concepts/transferability.md)
- [Params](../queries/params.md)
