---
description: "MsgSetIncomingApproval creates or replaces one incoming approval by ID without rebuilding the full approval list."
---

# MsgSetIncomingApproval

Creates or replaces a single incoming approval for the signer in one collection. It is a wrapper around [MsgUpdateUserApprovals](msg-update-user-approvals.md) that handles the list merge and versioning for you.

## Example

```bash
bb tx tokenization set-incoming-approval 1 ./approval.json --from bob --chain-id bitbadges-1
```

```ts fold=22-41,44-49,52-57,63-66,72-75,78-81,84-90
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetIncomingApproval } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

// bob accepts any token of collection 1 that alice sends him.
const msg = new MsgSetIncomingApproval({
  creator: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
  collectionId: 1n,
  approval: {
    fromListId: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
    initiatedByListId: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
    transferTimes: [{ start: 1n, end: 18446744073709551615n }],
    tokenIds: [{ start: 1n, end: 100n }],
    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
    uri: '',
    customData: '',
    approvalId: 'accept-from-alice',
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
      requireFromEqualsInitiatedBy: false,
      requireFromDoesNotEqualInitiatedBy: false,
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
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json fold=16-35,38-43,46-51,57-60,66-69,72-75,78-84
{
  "creator": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  "collectionId": "1",
  "approval": {
    "fromListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "tokenIds": [{ "start": "1", "end": "100" }],
    "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "uri": "",
    "customData": "",
    "approvalId": "accept-from-alice",
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
}
```

The `set-incoming-approval` CLI command takes the `approval` object on its own, not the whole message.

{% hint style="info" %}
Ask your agent:

```text
Place a bid of 20 USDC on token 5 of collection 1.
```
{% endhint %}

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Users can only set their own approvals. |
| `collectionId` | Uint | yes | Collection. `"0"` resolves to the most recently created collection. |
| `approval` | `UserIncomingApproval` | yes | The approval to create or replace. Matched to an existing approval by `approvalId`. `version` is assigned by the chain; pass `0`. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `action` | string | `created` or `edited`. |
| `version` | string | Version of the approval after the update. |
| `reviewItems` | string[] | Advisory notes. |

## Behavior

- Loads the signer's current incoming approvals (or the collection defaults), replaces the entry with the same `approvalId` or appends a new one, then runs the full [MsgUpdateUserApprovals](msg-update-user-approvals.md) path with `updateIncomingApprovals: true`.
- A new approval starts at version `0`. A changed approval gets an incremented version. An identical approval keeps its version and the response reports `edited` with the unchanged version.
- The update is validated against the signer's `canUpdateIncomingApprovals` permission and the collection's archived state.
- Approvals that cannot be auto-scanned get `mustPrioritize` forced on.

## Related

- [MsgUpdateUserApprovals](msg-update-user-approvals.md)
- [MsgDeleteIncomingApproval](msg-delete-incoming-approval.md)
- [MsgSetOutgoingApproval](msg-set-outgoing-approval.md)
