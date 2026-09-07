---
description: "dynamicStoreChallenges: require the initiator, sender, recipient, or a fixed address to be true in an address-to-bool store with a global kill switch."
---

# Dynamic Store Challenges

A dynamic store is an on-chain map from address to boolean that its creator maintains. A dynamic store challenge requires a party of the transfer to be `true` in that store. It is the cheapest way to gate transfers on state that another account, contract, or off-chain system controls.

## Shape

A complete `approvalCriteria` with the `dynamicStoreChallenges` array open. Folded lines are defaults.

```json fold=2-58,63-100
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
  "dynamicStoreChallenges": [
    { "storeId": "1", "ownershipCheckParty": "initiator" },
    { "storeId": "2", "ownershipCheckParty": "sender" }
  ],
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
interface DynamicStoreChallenge {
  storeId: string;
  ownershipCheckParty?: string;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `storeId` | Uint | yes | ID of the dynamic store |
| `ownershipCheckParty` | string | no | `"initiator"` (default), `"sender"`, `"recipient"`, or a fixed `bb1` address |

The store itself:

```proto
message DynamicStore {
  string storeId = 1;
  string createdBy = 2;
  bool defaultValue = 3;
  bool globalEnabled = 4;
  string uri = 5;
  string customData = 6;
}
```

| Field | Description |
| --- | --- |
| `defaultValue` | Value for any address without an explicit entry |
| `globalEnabled` | Kill switch. `false` fails every challenge on this store. New stores start `true`. |
| `uri`, `customData` | Metadata, or inline JSON metadata |

{% hint style="info" %}
Ask your agent: "Create a dynamic store owned by alice that defaults to false, then add an approval to collection 1 so only addresses set to true in that store can initiate transfers." The MCP builder tools (`build_dynamic_store, add_approval`) produce the objects on this page.
{% endhint %}

## How It Works

For each challenge:

1. Load the store. A missing store fails the challenge.
2. If `globalEnabled` is `false`, fail with `dynamic store storeId {id} is globally disabled`.
3. Resolve the party from `ownershipCheckParty`. Empty means `"initiator"`. A `bb1` address means that address, whoever is transferring.
4. Read the party's value. If no entry exists, use `defaultValue`.
5. The value must be `true`.

All challenges on the approval must pass. The check is read-only; transfers never modify a store.

### Kill Switch

`globalEnabled: false` halts every approval that depends on the store in one transaction, whatever the per-address values. Use it as an emergency stop, for example when an integrated protocol is compromised. Both blocks are complete `MsgUpdateDynamicStore` values: the first halts, the second resumes.

```json
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "storeId": "1",
  "defaultValue": true,
  "globalEnabled": false,
  "uri": "",
  "customData": ""
}
```

```json
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "storeId": "1",
  "defaultValue": true,
  "globalEnabled": true,
  "uri": "",
  "customData": ""
}
```

### Managing Stores

| Action | Message or query |
| --- | --- |
| Create a store with a default value | [MsgCreateDynamicStore](../messages/msg-create-dynamic-store.md) |
| Change `defaultValue`, `globalEnabled`, `uri`, `customData` | [MsgUpdateDynamicStore](../messages/msg-update-dynamic-store.md) |
| Set a value for an address | [MsgSetDynamicStoreValue](../messages/msg-set-dynamic-store-value.md) |
| Delete a store | [MsgDeleteDynamicStore](../messages/msg-delete-dynamic-store.md) |
| Read a store | [GetDynamicStore](../queries/get-dynamic-store.md) |
| Read a value | [GetDynamicStoreValue](../queries/get-dynamic-store-value.md) |

Only the creator can update or delete a store or set its values. A contract or a multisig can be that creator.

### Alternatives

Off-chain authorization with no per-address writes: [Merkle Challenges](merkle-challenges.md) or [ETH Signature Challenges](eth-signature-challenges.md). Token-based gating: [Token Ownership](token-ownership.md).

## Related

- [Token Ownership](token-ownership.md)
- [EVM Query Challenges](evm-query-challenges.md)
- [MsgCreateDynamicStore](../messages/msg-create-dynamic-store.md)
