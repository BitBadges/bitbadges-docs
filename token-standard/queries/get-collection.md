---
description: "GetCollection returns the full on-chain record of a collection by ID."
---

# GetCollection

Returns the complete `TokenCollection` record for a collection ID.

## Example

```bash
bb query tokenization collection 1
```

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_collection/1
```

## Request

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | string | Collection ID. |

## Response

```json fold=18-28,42-133,148-239,247-259
{
  "collection": {
    "collectionId": "1",
    "collectionMetadata": {
      "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json",
      "customData": ""
    },
    "tokenMetadata": [
      {
        "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json",
        "customData": "",
        "tokenIds": [{ "start": "1", "end": "100" }]
      }
    ],
    "customData": "",
    "manager": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
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
    "standards": ["NFTs"],
    "isArchived": false,
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
    "createdBy": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "validTokenIds": [{ "start": "1", "end": "100" }],
    "mintEscrowAddress": "bb1upmh79dpm54jevyr087x4sfz7pqwtz03uqfecljw4h5kqum8a62swz4r3q",
    "cosmosCoinWrapperPaths": [],
    "invariants": {
      "noCustomOwnershipTimes": false,
      "maxSupplyPerId": "0",
      "noForcefulPostMintTransfers": false,
      "disablePoolCreation": false,
      "evmQueryChallenges": []
    },
    "aliasPaths": []
  }
}
```

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | Uint | ID. |
| `collectionMetadata` | `CollectionMetadata` | `uri`, `customData`. |
| `tokenMetadata` | `TokenMetadata[]` | Per-range metadata. |
| `customData` | string | Collection custom data. |
| `manager` | string | Current manager. |
| `collectionPermissions` | `CollectionPermissions` | Manager permissions. |
| `collectionApprovals` | `CollectionApproval[]` | Collection-level approvals with versions. |
| `standards` | string[] | Declared standards. |
| `isArchived` | bool | Read-only flag. |
| `defaultBalances` | `UserBalanceStore` | Defaults applied to addresses with no record. |
| `createdBy` | string | Creator. |
| `validTokenIds` | `UintRange[]` | Token IDs that exist. |
| `mintEscrowAddress` | string | Chain-derived escrow account for the collection. |
| `cosmosCoinWrapperPaths` | `CosmosCoinWrapperPath[]` | Wrapper paths with derived addresses. |
| `aliasPaths` | `AliasPath[]` | Alias denoms. |
| `invariants` | `CollectionInvariants` | Immutable rules set at creation. |

## Behavior

- Fails with `ErrCollectionNotExists` for an unknown ID.
- Balances are not included. Use [GetBalance](get-balance.md).

## Related

- [Collections](../concepts/collections.md)
- [GetCollectionStats](get-collection-stats.md)
- [GetBalance](get-balance.md)
