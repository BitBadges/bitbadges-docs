---
description: "MsgSetOutgoingApproval creates or replaces one outgoing approval by ID without rebuilding the full approval list."
---

# MsgSetOutgoingApproval

Creates or replaces a single outgoing approval for the signer in one collection. It is a wrapper around [MsgUpdateUserApprovals](msg-update-user-approvals.md) that handles the list merge and versioning for you.

## Example

```bash
bb tx tokenization set-outgoing-approval 1 ./approval.json --from alice --chain-id bitbadges-1
```

```ts fold=22-41,84-87,90-93,96-102
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetOutgoingApproval } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

// alice lists token 5 for bob at 25 USDC, valid for 7 days, one use.
const msg = new MsgSetOutgoingApproval({
  creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  collectionId: 1n,
  approval: {
    toListId: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
    initiatedByListId: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
    transferTimes: [{ start: 1788739200000n, end: 1789344000000n }],
    tokenIds: [{ start: 5n, end: 5n }],
    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
    uri: '',
    customData: '',
    approvalId: 'sell-token-5-to-bob',
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
        overallApprovalAmount: 1n,
        perToAddressApprovalAmount: 0n,
        perFromAddressApprovalAmount: 0n,
        perInitiatedByAddressApprovalAmount: 0n,
        amountTrackerId: 'sell-token-5-to-bob',
        resetTimeIntervals: { startTime: 0n, intervalLength: 0n }
      },
      maxNumTransfers: {
        overallMaxNumTransfers: 1n,
        perToAddressMaxNumTransfers: 0n,
        perFromAddressMaxNumTransfers: 0n,
        perInitiatedByAddressMaxNumTransfers: 0n,
        amountTrackerId: 'sell-token-5-to-bob',
        resetTimeIntervals: { startTime: 0n, intervalLength: 0n }
      },
      coinTransfers: [
        {
          to: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
          coins: [
            {
              denom: 'ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8',
              amount: 25000000n
            }
          ],
          overrideFromWithApproverAddress: false,
          overrideToWithInitiator: false
        }
      ],
      requireToEqualsInitiatedBy: false,
      requireToDoesNotEqualInitiatedBy: false,
      autoDeletionOptions: {
        afterOneUse: true,
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
      mustPrioritize: true,
      votingChallenges: [],
      evmQueryChallenges: []
    },
    version: 0n
  }
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json fold=16-35,78-81,84-87,90-96
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "1",
  "approval": {
    "toListId": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
    "initiatedByListId": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
    "transferTimes": [{ "start": "1788739200000", "end": "1789344000000" }],
    "tokenIds": [{ "start": "5", "end": "5" }],
    "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "uri": "",
    "customData": "",
    "approvalId": "sell-token-5-to-bob",
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
        "overallApprovalAmount": "1",
        "perToAddressApprovalAmount": "0",
        "perFromAddressApprovalAmount": "0",
        "perInitiatedByAddressApprovalAmount": "0",
        "amountTrackerId": "sell-token-5-to-bob",
        "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
      },
      "maxNumTransfers": {
        "overallMaxNumTransfers": "1",
        "perToAddressMaxNumTransfers": "0",
        "perFromAddressMaxNumTransfers": "0",
        "perInitiatedByAddressMaxNumTransfers": "0",
        "amountTrackerId": "sell-token-5-to-bob",
        "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
      },
      "coinTransfers": [
        {
          "to": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
          "coins": [
            {
              "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8",
              "amount": "25000000"
            }
          ],
          "overrideFromWithApproverAddress": false,
          "overrideToWithInitiator": false
        }
      ],
      "requireToEqualsInitiatedBy": false,
      "requireToDoesNotEqualInitiatedBy": false,
      "autoDeletionOptions": {
        "afterOneUse": true,
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
      "mustPrioritize": true,
      "votingChallenges": [],
      "evmQueryChallenges": []
    },
    "version": "0"
  }
}
```

The `set-outgoing-approval` CLI command takes the `approval` object on its own, not the whole message. This approval has side effects (`coinTransfers`, trackers, auto-deletion), so `mustPrioritize` is `true` and bob must list it in `prioritizedApprovals` when he executes the transfer.

{% hint style="info" %}
Ask your agent: "List token 5 of collection 1 for sale to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue for 25 USDC."
{% endhint %}

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Users can only set their own approvals. |
| `collectionId` | Uint | yes | Collection. `"0"` resolves to the most recently created collection. |
| `approval` | `UserOutgoingApproval` | yes | The approval to create or replace. Matched to an existing approval by `approvalId`. `version` is assigned by the chain; pass `0`. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `action` | string | `created` or `edited`. |
| `version` | string | Version of the approval after the update. |
| `reviewItems` | string[] | Advisory notes. |

## Behavior

- Loads the signer's current outgoing approvals (or the collection defaults), replaces the entry with the same `approvalId` or appends a new one, then runs the full [MsgUpdateUserApprovals](msg-update-user-approvals.md) path with `updateOutgoingApprovals: true`.
- A new approval starts at version `0`. A changed approval gets an incremented version. An identical approval keeps its version and the response reports `edited` with the unchanged version.
- The update is validated against the signer's `canUpdateOutgoingApprovals` permission and the collection's archived state.
- Approvals that cannot be auto-scanned get `mustPrioritize` forced on.

## Related

- [MsgUpdateUserApprovals](msg-update-user-approvals.md)
- [MsgDeleteOutgoingApproval](msg-delete-outgoing-approval.md)
- [MsgSetIncomingApproval](msg-set-incoming-approval.md)
