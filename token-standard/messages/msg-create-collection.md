---
description: "MsgCreateCollection creates a new collection. The only message that can set defaultBalances and invariants."
---

# MsgCreateCollection

Creates a new collection. Anyone can sign it. The signer becomes the manager unless `manager` names another address.

## Example

```bash
bb tx tokenization create-collection ./create-collection.json --from alice --chain-id bitbadges-1
```

```ts fold=9-21,25-35,62-153,168-259
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgCreateCollection } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgCreateCollection({
  creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
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
  validTokenIds: [{ start: 1n, end: 100n }],
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
  manager: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  collectionMetadata: {
    uri: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json',
    customData: ''
  },
  tokenMetadata: [
    {
      uri: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json',
      customData: '',
      tokenIds: [{ start: 1n, end: 100n }]
    }
  ],
  customData: '',
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
  standards: ['NFTs'],
  isArchived: false,
  mintEscrowCoinsToTransfer: [],
  cosmosCoinWrapperPathsToAdd: [],
  aliasPathsToAdd: [],
  invariants: {
    noCustomOwnershipTimes: false,
    maxSupplyPerId: 0n,
    noForcefulPostMintTransfers: false,
    disablePoolCreation: false,
    evmQueryChallenges: []
  }
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json fold=4-16,20-30,57-148,163-254
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
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
  "validTokenIds": [{ "start": "1", "end": "100" }],
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
  "manager": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
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
  "mintEscrowCoinsToTransfer": [],
  "cosmosCoinWrapperPathsToAdd": [],
  "aliasPathsToAdd": [],
  "invariants": {
    "noCustomOwnershipTimes": false,
    "maxSupplyPerId": "0",
    "noForcefulPostMintTransfers": false,
    "disablePoolCreation": false,
    "evmQueryChallenges": []
  }
}
```

The example creates "Demo NFTs": 100 token IDs, alice as manager, one `mint` approval that only alice can initiate, and one `transferable` approval with empty criteria so holders can trade freely. Omit `invariants.cosmosCoinBackedPath` unless the collection is backed by a bank coin. See [Backed minting](../ibc/backed-minting.md).

{% hint style="info" %}
Ask your agent: "Create an NFT collection called Demo NFTs with 100 tokens, mint them all to me, and make them transferable between anyone."
{% endhint %}

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Recorded as `createdBy` and used as the default manager. |
| `defaultBalances` | `UserBalanceStore` | no | Starting balances, approvals, auto-approve flags, and permissions for every address. Settable only at creation. |
| `validTokenIds` | `UintRange[]` | no | Token IDs that exist. Must merge to one range that starts at 1. |
| `collectionPermissions` | `CollectionPermissions` | no | Manager permissions. Empty arrays mean neutral (allowed now, lockable later). |
| `manager` | string | no | Manager address. Empty keeps the default (the creator). |
| `collectionMetadata` | `CollectionMetadata` | no | `uri` and `customData` for the collection. |
| `tokenMetadata` | `TokenMetadata[]` | no | `uri`, `customData`, and `tokenIds` per metadata entry. |
| `customData` | string | no | Arbitrary string. |
| `collectionApprovals` | `CollectionApproval[]` | no | Collection-level approvals, including mint approvals from the `Mint` address. |
| `standards` | string[] | no | Standard identifiers. |
| `isArchived` | bool | no | Archive flag. Archived collections are read-only. |
| `mintEscrowCoinsToTransfer` | `Coin[]` | no | Bank coins sent from the creator to the collection's mint escrow address. |
| `cosmosCoinWrapperPathsToAdd` | `CosmosCoinWrapperPathAddObject[]` | no | Wrapper paths to an x/bank denom. See [Cosmos coin wrapper paths](../ibc/cosmos-coin-wrapper-paths.md). |
| `aliasPathsToAdd` | `AliasPathAddObject[]` | no | Alias denoms. See [Alias denoms](../ibc/alias-denoms.md). |
| `invariants` | `InvariantsAddObject` | no | Rules that can never change. See [Invariants](../approval-criteria/invariants.md). |

`InvariantsAddObject` fields: `noCustomOwnershipTimes` (bool), `maxSupplyPerId` (Uint, `0` means unlimited), `cosmosCoinBackedPath` (`{ conversion }`), `noForcefulPostMintTransfers` (bool), `disablePoolCreation` (bool), `evmQueryChallenges` (`EVMQueryChallenge[]`).

## Response

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | Uint | ID assigned by the chain. |
| `approvalChanges` | `ApprovalChange[]` | One entry per collection approval created. |
| `reviewItems` | string[] | Advisory notes about the transaction. |

## Behavior

- The handler converts the message to a `MsgUniversalUpdateCollection` with `collectionId: "0"` and every update flag set to `true`. All rules on [MsgUniversalUpdateCollection](msg-universal-update-collection.md) apply.
- No permissions exist yet, so nothing is restricted. Later updates must obey the permissions set here.
- The chain assigns the next collection ID and derives a `mintEscrowAddress` from it.
- `validTokenIds` must be sequential from 1 (`[{ start: 1, end: N }]`). Other shapes fail with `Ids must be sequential starting from 1`.
- Any approval whose `fromListId` includes `Mint` must be a whitelist of only `Mint` and must set `overridesFromOutgoingApprovals: true`.
- Wrapper paths and the backed path get chain-derived addresses that are marked as reserved protocol addresses with auto-approve flags on.
- A backed path prepends a permanent permission that forbids future changes to approvals with `fromListId: "Mint"`.
- Duplicate path denoms, duplicate symbols, zero decimals, duplicate decimals, or more than one default display unit fail.
- The collection ID is in the response and in the `collectionId` event attribute. To act on it in the same transaction, pass `collectionId: "0"` to later messages.

## Related

- [MsgUpdateCollection](msg-update-collection.md)
- [Collections](../concepts/collections.md)
- [Permissions](../concepts/permissions.md)
- [Create a collection](../../guides/create-a-collection.md)
