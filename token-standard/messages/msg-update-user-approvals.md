---
description: "MsgUpdateUserApprovals replaces a user's outgoing and incoming approvals, auto-approve flags, and user permissions in one collection."
---

# MsgUpdateUserApprovals

Updates the signer's own approval settings for one collection. Each field has an update flag; only flagged fields change.

## Example

```bash
bb tx tokenization update-user-approved-transfers ./user-approvals.json --from bob --chain-id bitbadges-1
```

```ts fold=24-43,46-51,54-59,65-68,74-77,80-83,86-92,111-115
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgUpdateUserApprovals } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

// bob lets alice move his token 1 for the next 30 days. Nothing else changes.
const msg = new MsgUpdateUserApprovals({
  creator: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
  collectionId: 1n,
  updateOutgoingApprovals: true,
  outgoingApprovals: [
    {
      toListId: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
      initiatedByListId: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
      transferTimes: [{ start: 1788739200000n, end: 1791331200000n }],
      tokenIds: [{ start: 1n, end: 1n }],
      ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
      uri: '',
      customData: '',
      approvalId: 'let-alice-move-token-1',
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
        requireToDoesNotEqualInitiatedBy: false,
        autoDeletionOptions: {
          afterOneUse: false,
          afterOverallMaxNumTransfers: false,
          allowCounterpartyPurge: false,
          allowPurgeIfExpired: false
        },
        mustOwnTokens: [],
        dynamicStoreChallenges: [],
        ethSignatureChallenges: [],
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
        evmQueryChallenges: []
      },
      version: 0n
    }
  ],
  updateIncomingApprovals: false,
  incomingApprovals: [],
  updateAutoApproveSelfInitiatedOutgoingTransfers: false,
  autoApproveSelfInitiatedOutgoingTransfers: true,
  updateAutoApproveSelfInitiatedIncomingTransfers: false,
  autoApproveSelfInitiatedIncomingTransfers: true,
  updateAutoApproveAllIncomingTransfers: false,
  autoApproveAllIncomingTransfers: true,
  updateUserPermissions: false,
  userPermissions: {
    canUpdateOutgoingApprovals: [],
    canUpdateIncomingApprovals: [],
    canUpdateAutoApproveSelfInitiatedOutgoingTransfers: [],
    canUpdateAutoApproveSelfInitiatedIncomingTransfers: [],
    canUpdateAutoApproveAllIncomingTransfers: []
  }
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json fold=18-37,40-45,48-53,59-62,68-71,74-77,80-86,105-109
{
  "creator": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  "collectionId": "1",
  "updateOutgoingApprovals": true,
  "outgoingApprovals": [
    {
      "toListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "transferTimes": [{ "start": "1788739200000", "end": "1791331200000" }],
      "tokenIds": [{ "start": "1", "end": "1" }],
      "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "uri": "",
      "customData": "",
      "approvalId": "let-alice-move-token-1",
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
  ],
  "updateIncomingApprovals": false,
  "incomingApprovals": [],
  "updateAutoApproveSelfInitiatedOutgoingTransfers": false,
  "autoApproveSelfInitiatedOutgoingTransfers": true,
  "updateAutoApproveSelfInitiatedIncomingTransfers": false,
  "autoApproveSelfInitiatedIncomingTransfers": true,
  "updateAutoApproveAllIncomingTransfers": false,
  "autoApproveAllIncomingTransfers": true,
  "updateUserPermissions": false,
  "userPermissions": {
    "canUpdateOutgoingApprovals": [],
    "canUpdateIncomingApprovals": [],
    "canUpdateAutoApproveSelfInitiatedOutgoingTransfers": [],
    "canUpdateAutoApproveSelfInitiatedIncomingTransfers": [],
    "canUpdateAutoApproveAllIncomingTransfers": []
  }
}
```

:::widget{name="transferability-row" caption="The outgoing approval after this message: alice can move bob's token 1 to herself for 30 days."}
{
  "approvalId": "let-alice-move-token-1",
  "level": "outgoing",
  "fromListId": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  "toListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "transferTimes": [
    {
      "start": "1788739200000",
      "end": "1791331200000"
    }
  ],
  "tokenIds": [
    {
      "start": "1",
      "end": "1"
    }
  ]
}
:::

## Fields

When an `update*` flag is `false` the paired value is ignored, so placeholder data is safe.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Users can only update their own approvals. |
| `collectionId` | Uint | yes | Collection. `"0"` resolves to the most recently created collection. |
| `updateOutgoingApprovals`, `outgoingApprovals` | bool, `UserOutgoingApproval[]` | no | Full replacement list of outgoing approvals. |
| `updateIncomingApprovals`, `incomingApprovals` | bool, `UserIncomingApproval[]` | no | Full replacement list of incoming approvals. |
| `updateAutoApproveSelfInitiatedOutgoingTransfers`, `autoApproveSelfInitiatedOutgoingTransfers` | bool, bool | no | Approve transfers where `from == initiatedBy`. |
| `updateAutoApproveSelfInitiatedIncomingTransfers`, `autoApproveSelfInitiatedIncomingTransfers` | bool, bool | no | Approve transfers where `to == initiatedBy`. |
| `updateAutoApproveAllIncomingTransfers`, `autoApproveAllIncomingTransfers` | bool, bool | no | Approve every incoming transfer. Shorthand for an accept-all incoming approval. |
| `updateUserPermissions`, `userPermissions` | bool, `UserPermissions` | no | Permissions that guard future updates to the fields above. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `incomingChanges` | `ApprovalChange[]` | Incoming approvals created, edited, or deleted. |
| `outgoingChanges` | `ApprovalChange[]` | Outgoing approvals created, edited, or deleted. |
| `reviewItems` | string[] | Advisory notes, including a summary of the changes. |

## Behavior

- Fails with `ErrCollectionNotExists` for an unknown collection and `ErrCollectionIsArchived` for an archived one.
- If the user has no stored balance record, the collection's `defaultBalances` are applied first. In that case every approval keeps version `0`.
- Otherwise a new or changed approval gets an incremented `version`; unchanged approvals keep theirs. Versions are what `prioritizedApprovals` in `MsgTransferTokens` pin.
- Approvals that cannot be auto-scanned get `mustPrioritize` forced on.
- Outgoing and incoming lists are validated against `canUpdateOutgoingApprovals` and `canUpdateIncomingApprovals`.
- Auto-approve flags are checked against their permission only when the value actually changes.
- New `userPermissions` cannot re-open a permanently forbidden time.
- User permissions are almost always left permanently allowed. Customize them only when you need to lock a user's own approvals, for example a vault address.

## Related

- [MsgSetIncomingApproval](msg-set-incoming-approval.md)
- [MsgSetOutgoingApproval](msg-set-outgoing-approval.md)
- [User Approval Settings](../approval-criteria/user-approval-settings.md)
- [Set Transferability](../../guides/set-transferability.md)
