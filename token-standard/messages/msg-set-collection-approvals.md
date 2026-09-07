---
description: "MsgSetCollectionApprovals replaces a collection's approvals and sets the canUpdateCollectionApprovals permission in one message."
---

# MsgSetCollectionApprovals

Sets the full list of collection-level approvals and the permission that guards future changes. Only the current manager can sign it. For multi-field updates use [MsgUpdateCollection](msg-update-collection.md).

## Example

```bash
bb tx tokenization set-setcollectionapprovals ./set-collection-approvals.json --from alice --chain-id bitbadges-1
```

```ts fold=22-113
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetCollectionApprovals } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

// Keep only the transferable approval, then freeze it so no manager can change it.
const msg = new MsgSetCollectionApprovals({
  creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  collectionId: 1n,
  collectionApprovals: [
    {
      fromListId: 'AllWithoutMint',
      toListId: 'All',
      initiatedByListId: 'All',
      transferTimes: [{ start: 1n, end: 18446744073709551615n }],
      tokenIds: [{ start: 1n, end: 100n }],
      ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
      uri: '',
      customData: '',
      approvalId: 'transferable',
      approvalCriteria: {
        merkleChallenges: [],
        predeterminedBalances: {
          manualBalances: [],
          incrementedBalances: {
            startBalances: [],
            incrementTokenIdsBy: 0n,
            incrementOwnershipTimesBy: 0n,
            durationFromTimestamp: 0n,
            allowOverrideTimestamp: false,
            recurringOwnershipTimes: { startTime: 0n, intervalLength: 0n, chargePeriodLength: 0n },
            allowOverrideWithAnyValidToken: false,
            allowAmountScaling: false,
            maxScalingMultiplier: 0n
          },
          orderCalculationMethod: {
            useOverallNumTransfers: false,
            usePerToAddressNumTransfers: false,
            usePerFromAddressNumTransfers: false,
            usePerInitiatedByAddressNumTransfers: false,
            useMerkleChallengeLeafIndex: false,
            challengeTrackerId: ''
          }
        },
        approvalAmounts: {
          overallApprovalAmount: 0n,
          perToAddressApprovalAmount: 0n,
          perFromAddressApprovalAmount: 0n,
          perInitiatedByAddressApprovalAmount: 0n,
          amountTrackerId: '',
          resetTimeIntervals: { startTime: 0n, intervalLength: 0n }
        },
        maxNumTransfers: {
          overallMaxNumTransfers: 0n,
          perToAddressMaxNumTransfers: 0n,
          perFromAddressMaxNumTransfers: 0n,
          perInitiatedByAddressMaxNumTransfers: 0n,
          amountTrackerId: '',
          resetTimeIntervals: { startTime: 0n, intervalLength: 0n }
        },
        coinTransfers: [],
        requireToEqualsInitiatedBy: false,
        requireFromEqualsInitiatedBy: false,
        requireToDoesNotEqualInitiatedBy: false,
        requireFromDoesNotEqualInitiatedBy: false,
        overridesFromOutgoingApprovals: false,
        overridesToIncomingApprovals: false,
        autoDeletionOptions: {
          afterOneUse: false,
          afterOverallMaxNumTransfers: false,
          allowCounterpartyPurge: false,
          allowPurgeIfExpired: false
        },
        mustOwnTokens: [],
        dynamicStoreChallenges: [],
        ethSignatureChallenges: [],
        senderChecks: {
          mustBeEvmContract: false,
          mustNotBeEvmContract: false,
          mustBeLiquidityPool: false,
          mustNotBeLiquidityPool: false
        },
        recipientChecks: {
          mustBeEvmContract: false,
          mustNotBeEvmContract: false,
          mustBeLiquidityPool: false,
          mustNotBeLiquidityPool: false
        },
        initiatorChecks: {
          mustBeEvmContract: false,
          mustNotBeEvmContract: false,
          mustBeLiquidityPool: false,
          mustNotBeLiquidityPool: false
        },
        altTimeChecks: {
          offlineHours: [],
          offlineDays: [],
          offlineMonths: [],
          offlineDaysOfMonth: [],
          offlineWeeksOfYear: [],
          timezoneOffsetMinutes: 0n,
          timezoneOffsetNegative: false
        },
        mustPrioritize: false,
        votingChallenges: [],
        allowBackedMinting: false,
        allowSpecialWrapping: false,
        evmQueryChallenges: [],
        userApprovalSettings: {
          allowedDenoms: [],
          disableUserCoinTransfers: false,
          userRoyalties: { percentage: 0n, payoutAddress: '' }
        }
      },
      version: 0n
    }
  ],
  canUpdateCollectionApprovals: [
    {
      fromListId: 'AllWithoutMint',
      toListId: 'All',
      initiatedByListId: 'All',
      transferTimes: [{ start: 1n, end: 18446744073709551615n }],
      tokenIds: [{ start: 1n, end: 100n }],
      ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
      approvalId: 'transferable',
      permanentlyPermittedTimes: [],
      permanentlyForbiddenTimes: [{ start: 1n, end: 18446744073709551615n }]
    }
  ]
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json fold=16-107
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "1",
  "collectionApprovals": [
    {
      "fromListId": "AllWithoutMint",
      "toListId": "All",
      "initiatedByListId": "All",
      "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "tokenIds": [{ "start": "1", "end": "100" }],
      "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "uri": "",
      "customData": "",
      "approvalId": "transferable",
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
            "recurringOwnershipTimes": { "startTime": "0", "intervalLength": "0", "chargePeriodLength": "0" },
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
        "overridesFromOutgoingApprovals": false,
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
  ],
  "canUpdateCollectionApprovals": [
    {
      "fromListId": "AllWithoutMint",
      "toListId": "All",
      "initiatedByListId": "All",
      "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "tokenIds": [{ "start": "1", "end": "100" }],
      "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "approvalId": "transferable",
      "permanentlyPermittedTimes": [],
      "permanentlyForbiddenTimes": [{ "start": "1", "end": "18446744073709551615" }]
    }
  ]
}
```

The `mint` approval is not in the list, so this message deletes it: minting stops for good. The permission entry forbids every future change to `transferable`, so the collection stays freely tradable.

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Must be the current manager. |
| `collectionId` | Uint | yes | Collection to update. |
| `collectionApprovals` | `CollectionApproval[]` | yes | Full replacement list. Approvals not in the list are deleted. |
| `canUpdateCollectionApprovals` | `CollectionApprovalPermission[]` | no | New permission, scoped by the approval's lists, times, and IDs. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | Uint | The updated collection. |
| `approvalChanges` | `ApprovalChange[]` | Each approval created, edited, or deleted, with its new version. |
| `reviewItems` | string[] | Advisory notes. |

## Behavior

- Builds a [MsgUniversalUpdateCollection](msg-universal-update-collection.md) with `updateCollectionApprovals: true` and `updateCollectionPermissions: true`. Every other permission is copied from the stored collection.
- Every created, edited, or deleted approval is checked against the stored `canUpdateCollectionApprovals` and against the collection's invariants.
- Unchanged approvals keep their `version`. New or changed approvals get an incremented version, which invalidates `prioritizedApprovals` entries that pinned the old version.
- Approvals that cannot be auto-scanned get `mustPrioritize` forced on. `mustOwnTokens` with `collectionId: "0"` resolve to this collection.
- An approval with `Mint` in `fromListId` must be a whitelist of only `Mint` and set `overridesFromOutgoingApprovals: true`.
- Errors: `ErrCollectionNotExists`, `ErrSenderIsNotManager`, `ErrCollectionIsArchived`, permission forbidden, invariant violated.

## Related

- [MsgUpdateCollection](msg-update-collection.md)
- [Transferability](../concepts/transferability.md)
- [Approval criteria](../approval-criteria/README.md)
- [Set transferability](../../guides/set-transferability.md)
