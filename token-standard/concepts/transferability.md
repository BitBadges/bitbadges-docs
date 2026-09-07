---
description: "The three approval levels (collection, outgoing, incoming), the fields of an approval, auto-approval flags, overrides, and how a transfer is validated."
---

# Transferability

Transferability is a set of approvals on three levels. A transfer executes only when the sender has the balance and the approvals on every non-overridden level match.

## Shape

```ts
// Stored on TokenCollection.collectionApprovals[]
interface CollectionApproval<T extends bigint> {
  toListId: string;             // Who can receive
  fromListId: string;           // Who can send
  initiatedByListId: string;    // Who can initiate
  transferTimes: UintRange<T>[]; // When the transfer can happen (UNIX ms)
  tokenIds: UintRange<T>[];     // Which token IDs
  ownershipTimes: UintRange<T>[]; // Which ownership times are transferred
  approvalId: string;           // Unique on this level
  version: T;                   // Incremented by the chain on every update

  uri?: string;
  customData?: string;
  approvalCriteria?: ApprovalCriteria<T>;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `toListId` | address list ID | yes | Recipients that match. Examples: `"All"`, a single `bb1` address |
| `fromListId` | address list ID | yes | Senders that match. Examples: `"Mint"`, `"!Mint"` |
| `initiatedByListId` | address list ID | yes | Initiators (the transaction signer) that match |
| `transferTimes` | UintRange[] | yes | Block times when the transfer may occur |
| `tokenIds` | UintRange[] | yes | Token IDs covered |
| `ownershipTimes` | UintRange[] | yes | Ownership times that can be moved |
| `approvalId` | string | yes | Unique per level. Cannot be `default-outgoing`, `default-incoming`, `self-initiated-outgoing`, `self-initiated-incoming`, or `all-incoming-transfers`. |
| `version` | Uint | set by chain | Starts at 0 and increments on every update |
| `uri` | string | no | Metadata link |
| `customData` | string | no | Free-form string, or inline JSON metadata (`name` + `description`) |
| `approvalCriteria` | ApprovalCriteria | no | Extra conditions. See [Approval Criteria](../approval-criteria/README.md). |

The first six fields answer who, when, and what. An approval matches a transfer when the sender is in `fromListId`, the recipient in `toListId`, the initiator in `initiatedByListId`, the block time in `transferTimes`, and the balance being moved falls inside `tokenIds` and `ownershipTimes`.

{% hint style="info" %}
Ask your agent:

```text
Make collection 1 freely transferable between all non-Mint addresses, and keep minting limited to alice.
```

The MCP builder tools (`add_approval, add_preset_approval`) produce the objects on this page.
{% endhint %}

## How It Works

### Three Levels

| Level | Set by | `approvalLevel` | `approverAddress` | Stored on | Message | Typical use |
| --- | --- | --- | --- | --- | --- | --- |
| Collection | manager | `collection` | `""` | `TokenCollection.collectionApprovals` | [MsgSetCollectionApprovals](../messages/msg-set-collection-approvals.md) | global rules, freezing, compliance, minting |
| Outgoing | sender | `outgoing` | the sender's address | `UserBalanceStore.outgoingApprovals` | [MsgSetOutgoingApproval](../messages/msg-set-outgoing-approval.md) | listings, delegation |
| Incoming | recipient | `incoming` | the recipient's address | `UserBalanceStore.incomingApprovals` | [MsgSetIncomingApproval](../messages/msg-set-incoming-approval.md) | bids, opt-in receiving |

Every transfer must satisfy a collection approval. It must also satisfy the sender's outgoing approvals and the recipient's incoming approvals unless the matched collection approval overrides them.

### Validation Flow

For each transfer the chain checks, in order:

1. The sender's balance covers the amounts, IDs, and ownership times.
2. A collection approval matches, including all of its approval criteria.
3. Unless `overridesFromOutgoingApprovals` is set on the matched collection approval: the sender's outgoing approvals match, or the transfer is self-initiated and `autoApproveSelfInitiatedOutgoingTransfers` is on.
4. Unless `overridesToIncomingApprovals` is set: the recipient's incoming approvals match, or the transfer is self-initiated and `autoApproveSelfInitiatedIncomingTransfers` is on, or `autoApproveAllIncomingTransfers` is on.

<img src="../../.gitbook/assets/image (1) (1).png" alt="Transfer validation flow: balance check, then collection approvals, then outgoing and incoming approvals unless overridden">

Approvals define what is allowed. Transfers execute when an allowed path exists and balances suffice. Permissions (`canUpdateCollectionApprovals` and the user equivalents) define whether approvals can change. See [Permissions](permissions.md).

### Collection Approvals

Collection approvals apply to minting and to post-mint transfers alike. They are where the manager enforces global rules: freezing, revocation, whitelists, payments.

```json fold=11-15,18-52,61-65,67-113
{
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "transferTimes": [
    { "start": "1691931600000", "end": "1723554000000" }
  ],
  "tokenIds": [
    { "start": "1", "end": "100" }
  ],
  "ownershipTimes": [
    { "start": "1", "end": "18446744073709551615" }
  ],
  "uri": "",
  "customData": "",
  "approvalId": "mint-to-all",
  "approvalCriteria": {
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
      "overallMaxNumTransfers": "1000",
      "perToAddressMaxNumTransfers": "0",
      "perFromAddressMaxNumTransfers": "0",
      "perInitiatedByAddressMaxNumTransfers": "1",
      "amountTrackerId": "mint-to-all",
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
      "allowedDenoms": [],
      "disableUserCoinTransfers": false,
      "userRoyalties": { "percentage": "0", "payoutAddress": "" }
    }
  },
  "version": "0"
}
```

Reads as: anyone can claim one of token IDs 1-100 from Mint between Aug 13, 2023 and Aug 13, 2024, up to 1000 claims in total.

### User-Level Approvals

Outgoing and incoming approvals have the same shape minus the field that is fixed to the owner. An outgoing approval has no `fromListId` (it is the owner). An incoming approval has no `toListId`. User-level criteria cannot use overrides or the other collection-only fields listed in [Approval Criteria](../approval-criteria/README.md).

```ts
interface UserBalanceStore<T extends bigint> {
  balances: Balance<T>[];
  outgoingApprovals: OutgoingApproval<T>[];
  incomingApprovals: IncomingApproval<T>[];
  autoApproveSelfInitiatedOutgoingTransfers: boolean;
  autoApproveSelfInitiatedIncomingTransfers: boolean;
  autoApproveAllIncomingTransfers: boolean;
  userPermissions: UserPermissions<T>;
}
```

An outgoing approval owned by carol that lets bob take token ID 1 to 100 (a listing). `fromListId` is absent because it is carol:

```json fold=4-6,10-14,16-97
{
  "toListId": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  "initiatedByListId": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  "transferTimes": [
    { "start": "1", "end": "18446744073709551615" }
  ],
  "tokenIds": [
    { "start": "1", "end": "18446744073709551615" }
  ],
  "ownershipTimes": [
    { "start": "1", "end": "18446744073709551615" }
  ],
  "uri": "",
  "customData": "",
  "approvalId": "my-listing",
  "approvalCriteria": {
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
    "requireToDoesNotEqualInitiatedBy": false,
    "autoDeletionOptions": {
      "afterOneUse": false,
      "afterOverallMaxNumTransfers": false,
      "allowCounterpartyPurge": false,
      "allowPurgeIfExpired": false
    },
    "mustOwnTokens": [],
    "dynamicStoreChallenges": [],
    "ethSignatureChallenges": [],
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
    "evmQueryChallenges": []
  },
  "version": "0"
}
```

An incoming approval owned by carol that accepts token ID 1 to 100 from alice (a bid). `toListId` is absent because it is carol:

```json fold=4-6,10-14,16-97
{
  "fromListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "transferTimes": [
    { "start": "1", "end": "18446744073709551615" }
  ],
  "tokenIds": [
    { "start": "1", "end": "18446744073709551615" }
  ],
  "ownershipTimes": [
    { "start": "1", "end": "18446744073709551615" }
  ],
  "uri": "",
  "customData": "",
  "approvalId": "my-bids",
  "approvalCriteria": {
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
    "requireFromEqualsInitiatedBy": false,
    "requireFromDoesNotEqualInitiatedBy": false,
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
    "evmQueryChallenges": []
  },
  "version": "0"
}
```

### Auto-Approval Flags

Three flags on the balance store approve transfers without an explicit approval. Leaving all three `true` is the usual choice.

| Flag | Effect when `true` |
| --- | --- |
| `autoApproveSelfInitiatedOutgoingTransfers` | Outgoing transfers that the owner initiates skip the outgoing approval check |
| `autoApproveSelfInitiatedIncomingTransfers` | Incoming transfers that the owner initiates (claims, requested airdrops) skip the incoming approval check |
| `autoApproveAllIncomingTransfers` | Every incoming transfer skips the incoming approval check, whoever initiates it |

Turning `autoApproveAllIncomingTransfers` off makes an account opt-in only. The flags are auto-scannable and never need prioritization.

### Overrides

A collection approval can skip the user-level check for the sender, the recipient, or both. This is how freezing, revocation, and forced distribution work. Only collection approvals have these fields.

A collection approval that lets alice, the manager, move any post-mint token without the sender's or the recipient's consent:

```json fold=5-15,18-65,68-113
{
  "fromListId": "!Mint",
  "toListId": "All",
  "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "transferTimes": [
    { "start": "1", "end": "18446744073709551615" }
  ],
  "tokenIds": [
    { "start": "1", "end": "18446744073709551615" }
  ],
  "ownershipTimes": [
    { "start": "1", "end": "18446744073709551615" }
  ],
  "uri": "",
  "customData": "",
  "approvalId": "manager-revoke",
  "approvalCriteria": {
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
    "overridesToIncomingApprovals": true,
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
      "allowedDenoms": [],
      "disableUserCoinTransfers": false,
      "userRoyalties": { "percentage": "0", "payoutAddress": "" }
    }
  },
  "version": "0"
}
```

Mint approvals must set `overridesFromOutgoingApprovals: true` because the Mint address has no approvals of its own. Set the `noForcefulPostMintTransfers` [invariant](../approval-criteria/invariants.md) to forbid overrides on every non-Mint approval forever. Full rules and the reserved-address protection are on [Overrides](../approval-criteria/overrides.md).

### Break-Down Matching

The chain can split one transfer across several approvals. It walks the approvals in order, deducts as much as each one allows, and continues with the remainder. If anything is left over, the transfer fails and the error lists what each candidate approval rejected.

Design approvals so a transfer matches one of them. Rely on splitting only when you must. [Prioritized Approvals](prioritized-approvals.md) explains which approvals the scan considers and how to pin a specific one.

## Related

- [Approval Criteria](../approval-criteria/README.md)
- [Prioritized Approvals](prioritized-approvals.md)
- [Permissions](permissions.md)
- [MsgTransferTokens](../messages/msg-transfer-tokens.md)
