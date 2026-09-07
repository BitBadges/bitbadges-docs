---
description: "MsgUniversalUpdateCollection creates or updates a collection in one legacy interface. All other collection messages route through it."
---

# MsgUniversalUpdateCollection

Creates a collection when `collectionId` is `"0"` and updates one otherwise. It is the handler that `MsgCreateCollection`, `MsgUpdateCollection`, and every `MsgSet*` helper call internally. Prefer those messages; use this one when a single message must do both jobs.

## Example

```bash
bb tx tokenization universal-update-collection ./universal-update.json --from alice --chain-id bitbadges-1
```

```ts fold=11-23,29-39,71-162,177-268
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgUniversalUpdateCollection } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

// Create: collectionId 0n with every update flag set.
const msg = new MsgUniversalUpdateCollection({
  creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  collectionId: 0n,
  defaultBalances: {
    balances: [],
    outgoingApprovals: [],
    incomingApprovals: [],
    autoApproveSelfInitiatedOutgoingTransfers: true,
    autoApproveSelfInitiatedIncomingTransfers: true,
    autoApproveAllIncomingTransfers: true,
    userPermissions: {
      canUpdateOutgoingApprovals: [],
      canUpdateIncomingApprovals: [],
      canUpdateAutoApproveSelfInitiatedOutgoingTransfers: [],
      canUpdateAutoApproveSelfInitiatedIncomingTransfers: [],
      canUpdateAutoApproveAllIncomingTransfers: []
    }
  },
  updateValidTokenIds: true,
  validTokenIds: [{ start: 1n, end: 100n }],
  updateCollectionPermissions: true,
  collectionPermissions: {
    canDeleteCollection: [],
    canArchiveCollection: [],
    canUpdateStandards: [],
    canUpdateCustomData: [],
    canUpdateManager: [],
    canUpdateCollectionMetadata: [],
    canUpdateValidTokenIds: [],
    canUpdateTokenMetadata: [],
    canUpdateCollectionApprovals: [],
    canAddMoreAliasPaths: [],
    canAddMoreCosmosCoinWrapperPaths: []
  },
  updateManager: true,
  manager: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  updateCollectionMetadata: true,
  collectionMetadata: {
    uri: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json',
    customData: ''
  },
  updateTokenMetadata: true,
  tokenMetadata: [
    {
      uri: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json',
      customData: '',
      tokenIds: [{ start: 1n, end: 100n }]
    }
  ],
  updateCustomData: true,
  customData: '',
  updateCollectionApprovals: true,
  collectionApprovals: [
    {
      fromListId: 'Mint',
      toListId: 'All',
      initiatedByListId: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
      transferTimes: [{ start: 1n, end: 18446744073709551615n }],
      tokenIds: [{ start: 1n, end: 100n }],
      ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
      uri: '',
      customData: '',
      approvalId: 'mint',
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
        overridesFromOutgoingApprovals: true,
        overridesToIncomingApprovals: true,
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
    },
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
  updateStandards: true,
  standards: ['NFTs'],
  updateIsArchived: true,
  isArchived: false,
  mintEscrowCoinsToTransfer: [],
  cosmosCoinWrapperPathsToAdd: [],
  invariants: {
    noCustomOwnershipTimes: false,
    maxSupplyPerId: 0n,
    noForcefulPostMintTransfers: false,
    disablePoolCreation: false,
    evmQueryChallenges: []
  },
  aliasPathsToAdd: []
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

Create (`collectionId: "0"`):

```json fold=5-17,23-33,65-156,171-262
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "0",
  "defaultBalances": {
    "balances": [],
    "outgoingApprovals": [],
    "incomingApprovals": [],
    "autoApproveSelfInitiatedOutgoingTransfers": true,
    "autoApproveSelfInitiatedIncomingTransfers": true,
    "autoApproveAllIncomingTransfers": true,
    "userPermissions": {
      "canUpdateOutgoingApprovals": [],
      "canUpdateIncomingApprovals": [],
      "canUpdateAutoApproveSelfInitiatedOutgoingTransfers": [],
      "canUpdateAutoApproveSelfInitiatedIncomingTransfers": [],
      "canUpdateAutoApproveAllIncomingTransfers": []
    }
  },
  "updateValidTokenIds": true,
  "validTokenIds": [{ "start": "1", "end": "100" }],
  "updateCollectionPermissions": true,
  "collectionPermissions": {
    "canDeleteCollection": [],
    "canArchiveCollection": [],
    "canUpdateStandards": [],
    "canUpdateCustomData": [],
    "canUpdateManager": [],
    "canUpdateCollectionMetadata": [],
    "canUpdateValidTokenIds": [],
    "canUpdateTokenMetadata": [],
    "canUpdateCollectionApprovals": [],
    "canAddMoreAliasPaths": [],
    "canAddMoreCosmosCoinWrapperPaths": []
  },
  "updateManager": true,
  "manager": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "updateCollectionMetadata": true,
  "collectionMetadata": {
    "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json",
    "customData": ""
  },
  "updateTokenMetadata": true,
  "tokenMetadata": [
    {
      "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json",
      "customData": "",
      "tokenIds": [{ "start": "1", "end": "100" }]
    }
  ],
  "updateCustomData": true,
  "customData": "",
  "updateCollectionApprovals": true,
  "collectionApprovals": [
    {
      "fromListId": "Mint",
      "toListId": "All",
      "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "tokenIds": [{ "start": "1", "end": "100" }],
      "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "uri": "",
      "customData": "",
      "approvalId": "mint",
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
    },
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
  "updateStandards": true,
  "standards": ["NFTs"],
  "updateIsArchived": true,
  "isArchived": false,
  "mintEscrowCoinsToTransfer": [],
  "cosmosCoinWrapperPathsToAdd": [],
  "invariants": {
    "noCustomOwnershipTimes": false,
    "maxSupplyPerId": "0",
    "noForcefulPostMintTransfers": false,
    "disablePoolCreation": false,
    "evmQueryChallenges": []
  },
  "aliasPathsToAdd": []
}
```

Update (`collectionId` set): same shape without `defaultBalances` and without `invariants`, with `update*` set to `true` only for the fields that change. Including `invariants` on an update fails with `ErrInvariantsImmutable`.

{% hint style="info" %}
Ask your agent: "Use bb build to make a crowdfund collection with a 10,000 USDC goal and a 30-day deadline."
{% endhint %}

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Anyone for create; the manager (or x/gov) for update. |
| `collectionId` | Uint | yes | `"0"` to create. An existing ID to update. |
| `defaultBalances` | `UserBalanceStore` | no | Creation only. Ignored on update. |
| `updateValidTokenIds`, `validTokenIds` | bool, `UintRange[]` | no | Token IDs. Must merge to one range starting at 1. |
| `updateCollectionPermissions`, `collectionPermissions` | bool, `CollectionPermissions` | no | Applied after every other change. |
| `updateManager`, `manager` | bool, string | no | On create, the manager defaults to `creator` if the flag is `false`. |
| `updateCollectionMetadata`, `collectionMetadata` | bool, `CollectionMetadata` | no | |
| `updateTokenMetadata`, `tokenMetadata` | bool, `TokenMetadata[]` | no | |
| `updateCustomData`, `customData` | bool, string | no | |
| `updateCollectionApprovals`, `collectionApprovals` | bool, `CollectionApproval[]` | no | Full replacement list. |
| `updateStandards`, `standards` | bool, string[] | no | |
| `updateIsArchived`, `isArchived` | bool, bool | no | |
| `mintEscrowCoinsToTransfer` | `Coin[]` | no | Sent from `creator` to `mintEscrowAddress`. |
| `cosmosCoinWrapperPathsToAdd` | `CosmosCoinWrapperPathAddObject[]` | no | `denom`, `conversion`, `symbol`, `denomUnits`, `allowOverrideWithAnyValidToken`, `metadata`. |
| `aliasPathsToAdd` | `AliasPathAddObject[]` | no | `denom`, `conversion`, `symbol`, `denomUnits`, `metadata`. |
| `invariants` | `InvariantsAddObject` | no | Creation only. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | Uint | Created or updated collection. |
| `approvalChanges` | `ApprovalChange[]` | Set only when `updateCollectionApprovals` is `true`. |
| `reviewItems` | string[] | Advisory notes. |

## Behavior

Order of operations in the handler:

1. Validate the message (`CheckAndCleanMsg`): valid creator, valid ranges, metadata, approvals, custom data.
2. Create: allocate the next collection ID, derive `mintEscrowAddress`, set `createdBy` and `manager` to `creator`, and convert `invariants`. Update: load the collection or fail with `ErrCollectionNotExists`.
3. Require the signer to be the current manager (`ErrSenderIsNotManager`). The x/gov authority bypasses this check.
4. Apply `isArchived` if flagged (checked against `canArchiveCollection` when the value changes). If the collection was archived and stays archived, fail with `ErrCollectionIsArchived`.
5. Apply collection approvals: validate against `canUpdateCollectionApprovals` and invariants, force `mustPrioritize` on approvals that cannot be auto-scanned, resolve `mustOwnTokens.collectionId: "0"` to self, and bump `version` only for new or changed approvals.
6. Apply collection metadata, token metadata, manager, standards, and custom data, each against its permission.
7. Apply `validTokenIds`. Only IDs not already valid are checked against `canUpdateValidTokenIds`.
8. Send `mintEscrowCoinsToTransfer` from the creator to the escrow address.
9. Add wrapper paths (needs `canAddMoreCosmosCoinWrapperPaths`) and alias paths (needs `canAddMoreAliasPaths`). Wrapper path addresses are derived from the denom, marked as reserved protocol addresses, and given auto-approve flags.
10. Apply invariants (create only). A backed path gets a derived, reserved address.
11. Reject duplicate wrapper denoms, duplicate alias denoms, alias denoms that collide with wrapper denoms, duplicate symbols across all paths, zero decimals, duplicate decimals in one path, and more than one `isDefaultDisplay` unit.
12. Apply `collectionPermissions` last. A permission cannot re-permit a permanently forbidden time.
13. If a backed path exists, prepend a permanent permission that forbids changes to any approval with `fromListId: "Mint"`.
14. Any approval whose `fromListId` includes `Mint` must be a whitelist of only `Mint` and must set `overridesFromOutgoingApprovals: true`.
15. Store the collection, emit events, and compute `approvalChanges` and `reviewItems`.

## Related

- [MsgCreateCollection](msg-create-collection.md)
- [MsgUpdateCollection](msg-update-collection.md)
- [Collections](../concepts/collections.md)
- [Invariants](../approval-criteria/invariants.md)
