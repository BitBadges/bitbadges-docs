---
description: "mustOwnTokens: require the initiator, sender, recipient, or a fixed address to hold tokens from some collection before the transfer is approved."
---

# Token Ownership

`mustOwnTokens` gates a transfer on the balance of another (or the same) collection. It is how one collection depends on another: KYC passports, memberships, tiers, and holding periods.

## Shape

A complete `approvalCriteria` with the `mustOwnTokens` array open. Folded lines are defaults.

```json fold=2-57,73-111
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
  "mustOwnTokens": [
    {
      "collectionId": "1",
      "amountRange": { "start": "1", "end": "1" },
      "ownershipTimes": [
        { "start": "1", "end": "18446744073709551615" }
      ],
      "tokenIds": [
        { "start": "1", "end": "1" }
      ],
      "overrideWithCurrentTime": false,
      "mustSatisfyForAllAssets": true,
      "ownershipCheckParty": "initiator"
    }
  ],
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
    "allowedDenoms": [],
    "disableUserCoinTransfers": false,
    "userRoyalties": { "percentage": "0", "payoutAddress": "" }
  }
}
```

```ts
interface MustOwnTokens<T extends NumberType> {
  collectionId: T;
  amountRange: UintRange<T>;
  ownershipTimes: UintRange<T>[];
  tokenIds: UintRange<T>[];
  overrideWithCurrentTime: boolean;
  mustSatisfyForAllAssets: boolean;
  ownershipCheckParty: string;
}
```

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | Uint | Collection whose balances are checked |
| `amountRange` | UintRange | Minimum and maximum amount the party must hold. `{ "start": "1", "end": "1" }` means exactly one. |
| `ownershipTimes` | UintRange[] | Times during which the party must own the tokens (UNIX ms) |
| `tokenIds` | UintRange[] | Token IDs that must be owned |
| `overrideWithCurrentTime` | bool | Ignore `ownershipTimes` and check `[{ start: now, end: now }]` |
| `mustSatisfyForAllAssets` | bool | `true`: every (token ID, ownership time) combination must satisfy `amountRange`. `false`: at least one must. |
| `ownershipCheckParty` | string | `"initiator"` (default when empty), `"sender"`, `"recipient"`, or a fixed `bb1` address |

{% hint style="info" %}
Ask your agent:

```text
Add a transfer approval to collection 2 that only lets holders of token ID 1 in collection 1 receive tokens.
```

The MCP builder tools (`add_approval`) produce the objects on this page.
{% endhint %}

## How It Works

For each entry the chain loads the party's balances in `collectionId` and expands them over `tokenIds` and `ownershipTimes` (or the current block time). Each combination's amount is compared with `amountRange`. With `mustSatisfyForAllAssets: true`, all combinations must be inside the range; with `false`, one is enough. Every entry in the array must pass.

The check is read-only and auto-scannable. It works for balances the party holds by default from `defaultBalances` as well as minted ones.

### Party Examples

Initiator (default):

```json
{
  "mustOwnTokens": [
    {
      "collectionId": "1",
      "amountRange": { "start": "1", "end": "1" },
      "ownershipTimes": [
        { "start": "1", "end": "18446744073709551615" }
      ],
      "tokenIds": [
        { "start": "1", "end": "1" }
      ],
      "overrideWithCurrentTime": false,
      "mustSatisfyForAllAssets": true,
      "ownershipCheckParty": "initiator"
    }
  ]
}
```

Sender:

```json
{
  "mustOwnTokens": [
    {
      "collectionId": "1",
      "amountRange": { "start": "1", "end": "1" },
      "ownershipTimes": [
        { "start": "1", "end": "18446744073709551615" }
      ],
      "tokenIds": [
        { "start": "1", "end": "1" }
      ],
      "overrideWithCurrentTime": false,
      "mustSatisfyForAllAssets": true,
      "ownershipCheckParty": "sender"
    }
  ]
}
```

Recipient:

```json
{
  "mustOwnTokens": [
    {
      "collectionId": "1",
      "amountRange": { "start": "1", "end": "1" },
      "ownershipTimes": [
        { "start": "1", "end": "18446744073709551615" }
      ],
      "tokenIds": [
        { "start": "1", "end": "1" }
      ],
      "overrideWithCurrentTime": false,
      "mustSatisfyForAllAssets": true,
      "ownershipCheckParty": "recipient"
    }
  ]
}
```

A fixed address, whoever is transferring (a multisig or contract that must hold a token for the flow to be open):

```json
{
  "mustOwnTokens": [
    {
      "collectionId": "1",
      "amountRange": { "start": "1", "end": "1" },
      "ownershipTimes": [
        { "start": "1", "end": "18446744073709551615" }
      ],
      "tokenIds": [
        { "start": "1", "end": "1" }
      ],
      "overrideWithCurrentTime": false,
      "mustSatisfyForAllAssets": true,
      "ownershipCheckParty": "bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr"
    }
  ]
}
```

### Patterns

- Access gate: `amountRange { 1, MAX }` on a membership collection with `overrideWithCurrentTime: true`.
- Must not hold: `amountRange { 0, 0 }` to exclude holders of a blocklist token.
- Ownership window: require balances whose ownership-time ranges cover a specified interval. This checks the current balance record, not how long the address has possessed it. A newly received full-time balance can cover past timestamps; enforce elapsed holding periods with a separate acquisition-time policy.
- Same-collection cap: check `collectionId` equal to the current collection to require the recipient hold fewer than N before receiving.

## Related

- [Balances](../concepts/balances.md)
- [Dynamic Store Challenges](dynamic-store-challenges.md)
- [Compliance Zones](../concepts/compliance-zones.md)
