---
description: "Create an NFT or fungible token collection on BitBadges with the bb CLI, the TypeScript SDK, or raw MsgCreateCollection JSON."
---

# Create a Collection

At the end you have a live collection with token IDs, metadata, a manager, and a mint approval, ready for [Mint and Distribute](mint-and-distribute.md).

A collection is one on-chain record that holds every field below; see [Collections](../token-standard/concepts/collections.md). Every numeric value in transaction JSON is a string (`"100"`, not `100`).

## 1. Pick the Token Shape

| | NFT collection | Fungible token |
| --- | --- | --- |
| `standards` | `["NFTs"]`, or `["NFTs", "NFTMarketplace", "NFTPricingDenom:<denom>"]` for tradable NFTs | `["Fungible Tokens"]` |
| `validTokenIds` | one ID per NFT, for example `[{ "start": "1", "end": "100" }]` | exactly `[{ "start": "1", "end": "1" }]` |
| `tokenMetadata[].uri` | `ipfs://QmHash/{id}` (`{id}` is replaced by the token ID) | one entry covering token ID 1 |
| Transfer `amount` | usually `"1"` | the quantity (`"100"` means 100 tokens) |
| Mint accounting | `predeterminedBalances` with `incrementTokenIdsBy: "1"` | `approvalAmounts` (`overallApprovalAmount` = supply cap, `"0"` = unlimited) |
| `ownershipTimes` | usually forever: `[{ "start": "1", "end": "18446744073709551615" }]` | usually forever |

`predeterminedBalances` and `approvalAmounts` are incompatible on one approval. NFTs use the first; fungible tokens use the second.

The `{id}` placeholder works only inside the metadata URI string, never inside the name, description, or image fields of the metadata JSON.

{% hint style="info" %}
**Ask your agent.** With the MCP builder tools installed, paste one of these:

- "Create a 100-piece NFT collection called Demo NFTs where only I can mint, one per transaction, run the review, and give me the review link."
- "Create a fungible token called Demo Coin with a 1,000,000 supply cap and a public mint of up to 1,000 per address."
{% endhint %}

## 2. Write the Base Fields

Most collections share this base. It excludes `collectionPermissions` and `collectionApprovals`, which the next two guides cover.

```ts
const BaseCollectionDetails = {
    validTokenIds: [
        {
            start: '1',
            end: '100', // Set to your max ID
        },
    ],
    manager: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d', // Set to your address
    collectionMetadata: {
        uri: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json', // Points to a valid .json metadata file
        customData: '',
    },
    tokenMetadata: [
        {
            uri: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json', // {id} is replaced with the token ID
            tokenIds: [
                {
                    start: '1',
                    end: '100',
                },
            ],
            customData: '',
        },
        // Multiple entries are allowed. This one is placeholder metadata for IDs not yet used.
        {
            uri: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/placeholder.json',
            tokenIds: [
                {
                    start: '101',
                    end: '100000000',
                },
            ],
            customData: '',
        },
    ],
    customData: '',
    standards: ['NFTs'],
    isArchived: false,

    // Coins to send to the mint escrow address. You can also fund it later.
    // Funding at genesis is useful because the escrow address depends on the
    // collectionId, which you do not know until the collection exists.
    mintEscrowCoinsToTransfer: [
        {
            denom: 'ubadge',
            amount: '1',
        },
    ],

    // Paths that wrap tokens as Cosmos coins. See "Wrap to an IBC denom".
    cosmosCoinWrapperPathsToAdd: [],

    defaultBalances: {
        // Everyone starts with empty balances and no approvals
        balances: [],
        incomingApprovals: [],
        outgoingApprovals: [],
        // Empty = soft enabled (enabled, but each user can disable it at any time)
        userPermissions: {
            canUpdateOutgoingApprovals: [],
            canUpdateIncomingApprovals: [],
            canUpdateAutoApproveSelfInitiatedOutgoingTransfers: [],
            canUpdateAutoApproveSelfInitiatedIncomingTransfers: [],
            canUpdateAutoApproveAllIncomingTransfers: [],
        },

        // Typically these three flags are all you set.
        autoApproveSelfInitiatedIncomingTransfers: true,
        autoApproveSelfInitiatedOutgoingTransfers: true,
        autoApproveAllIncomingTransfers: true,
    },
};
```

Field reference: `validTokenIds`, `collectionMetadata`, `tokenMetadata`, `customData`, `standards`, `isArchived`, and `defaultBalances` are on [Collections](../token-standard/concepts/collections.md). `manager` is on [Permissions](../token-standard/concepts/permissions.md). `mintEscrowCoinsToTransfer` is on [Coin Transfers](../token-standard/approval-criteria/coin-transfers.md). `cosmosCoinWrapperPathsToAdd` is on [Cosmos Coin Wrapper Paths](../token-standard/ibc/cosmos-coin-wrapper-paths.md).

`autoApproveAllIncomingTransfers: true` matters for any collection with a public mint. Without it, recipients cannot receive minted tokens.

## 3. Add a Mint Approval

Every approval with `fromListId: "Mint"` creates balances. Two rules apply to all of them:

- `overridesFromOutgoingApprovals: true` is required. The Mint address has no outgoing approvals to check.
- `initiatedByListId` decides who can mint. Use your own address for a creator-only mint, or `"All"` for a public mint.

NFT pattern with sequential IDs. This is one complete `CollectionApproval`; put it in `collectionApprovals` of `MsgCreateCollection` (step 4), or of `MsgUniversalUpdateCollection` with `updateCollectionApprovals: true` for an existing collection:

```json fold=11-15,28-32,34-46,56-61,63-107
{
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "100" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "uri": "",
  "customData": "",
  "approvalId": "manager-mint",
  "approvalCriteria": {
    "merkleChallenges": [],
    "predeterminedBalances": {
      "manualBalances": [],
      "incrementedBalances": {
        "startBalances": [
          {
            "amount": "1",
            "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
            "tokenIds": [{ "start": "1", "end": "1" }]
          }
        ],
        "incrementTokenIdsBy": "1",
        "incrementOwnershipTimesBy": "0",
        "durationFromTimestamp": "0",
        "allowOverrideTimestamp": false,
        "recurringOwnershipTimes": { "startTime": "0", "intervalLength": "0", "chargePeriodLength": "0" },
        "allowOverrideWithAnyValidToken": false,
        "allowAmountScaling": false,
        "maxScalingMultiplier": "0"
      },
      "orderCalculationMethod": {
        "useOverallNumTransfers": true,
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
      "overallMaxNumTransfers": "100",
      "perToAddressMaxNumTransfers": "0",
      "perFromAddressMaxNumTransfers": "0",
      "perInitiatedByAddressMaxNumTransfers": "1",
      "amountTrackerId": "nft-mint-tracker",
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

`incrementTokenIdsBy: "1"` gives each mint the next token ID. `maxNumTransfers` caps total mints and per-user mints. `orderCalculationMethod` must have exactly one method set to `true`. See [Predetermined Balances](../token-standard/approval-criteria/predetermined-balances.md).

Fungible pattern with a supply cap:

```json fold=11-20,22-35,42-48,50-55,57-101
{
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "1" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "uri": "",
  "customData": "",
  "approvalId": "public-mint",
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
      "overallApprovalAmount": "1000000",
      "perToAddressApprovalAmount": "0",
      "perFromAddressApprovalAmount": "0",
      "perInitiatedByAddressApprovalAmount": "1000",
      "amountTrackerId": "mint-tracker",
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

`overallApprovalAmount` is the total supply cap and `perInitiatedByAddressApprovalAmount` the per-user cap; `"0"` means unlimited. `amountTrackerId` is required whenever `approvalAmounts` or `maxNumTransfers` is set. See [Approval Trackers](../token-standard/approval-criteria/approval-trackers.md).

List IDs in approvals use reserved IDs only: `"All"`, `"Mint"`, `"!Mint"`, `"AllWithoutMint"`, or one full `bb1` address. See [Address Lists](../token-standard/concepts/address-lists.md).

## 4. Build the Transaction

### bb CLI

`bb build` ships presets for specific standards (vault, subscription, bounty, credit token, and more; see [Build](../cli/build.md)). A plain NFT or fungible collection has no preset, so write the message JSON from steps 2 and 3 to a file and check it:

```bash
bb check ./collection.json            # structural validation + design review
bb explain ./collection.json          # human-readable summary of what the tx does
```

`bb check` exits 2 on errors and, with `--strict`, 1 on warnings. Use `--depth structural` for validation only.

Metadata does not need IPFS hosting. Every `bb build` preset accepts either `--uri <pre-hosted-uri>` or the per-entity flags `--name`, `--image`, `--description`, which the CLI serializes into the on-chain `customData` field. The BitBadges API, SDK, and site parse `customData` on read and surface it as the resolved metadata. Approvals are text-only (`--name` + `--description`). The CLI errors if neither mode is fully satisfied; there are no default placeholders. See [Collections](../token-standard/concepts/collections.md) for the inline-metadata shape.

### TypeScript SDK

Save the step 3 approval as `mint-approval.json`, then:

```ts
import { readFileSync } from 'node:fs';
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgCreateCollection } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const mintApproval = JSON.parse(readFileSync('./mint-approval.json', 'utf8'));

const msg = new MsgCreateCollection({
    creator: client.address,
    ...BaseCollectionDetails, // step 2
    collectionApprovals: [mintApproval],
    // Every array empty = the manager keeps soft-enabled control. See "Lock permissions".
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
        canAddMoreCosmosCoinWrapperPaths: [],
    },
});

const result = await client.signAndBroadcast([msg]);
console.log(result.success ? result.txHash : result.error);
```

Full signing options (Ethereum wallets, browser handoff, payload generation) are in [Transactions](../sdk/transactions/README.md).

### Raw JSON

A complete `MsgCreateCollection` for a tradable NFT collection, wrapped in the `{ typeUrl, value }` envelope that `bb check`, `bb preview`, and `bb deploy` accept (100 NFTs, creator-only mint, free post-mint transfers, priced in canonical USDC). All permissions are empty, so the manager keeps soft-enabled control of everything. Rows at their defaults are folded; click one to expand it.

```json fold=5-8,12-19,21-33,63-67,80-84,86-98,108-113,115-159,161-165,175-184,186-203,206-211,214-265,267-271,276-282,284-288
{
  "typeUrl": "/tokenization.MsgCreateCollection",
  "value": {
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
      },
      {
        "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/placeholder.json",
        "customData": "",
        "tokenIds": [{ "start": "101", "end": "18446744073709551615" }]
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
        "approvalId": "manager-mint",
        "approvalCriteria": {
          "merkleChallenges": [],
          "predeterminedBalances": {
            "manualBalances": [],
            "incrementedBalances": {
              "startBalances": [
                {
                  "amount": "1",
                  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
                  "tokenIds": [{ "start": "1", "end": "1" }]
                }
              ],
              "incrementTokenIdsBy": "1",
              "incrementOwnershipTimesBy": "0",
              "durationFromTimestamp": "0",
              "allowOverrideTimestamp": false,
              "recurringOwnershipTimes": { "startTime": "0", "intervalLength": "0", "chargePeriodLength": "0" },
              "allowOverrideWithAnyValidToken": false,
              "allowAmountScaling": false,
              "maxScalingMultiplier": "0"
            },
            "orderCalculationMethod": {
              "useOverallNumTransfers": true,
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
            "overallMaxNumTransfers": "100",
            "perToAddressMaxNumTransfers": "0",
            "perFromAddressMaxNumTransfers": "0",
            "perInitiatedByAddressMaxNumTransfers": "1",
            "amountTrackerId": "nft-mint-tracker",
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
      },
      {
        "fromListId": "!Mint",
        "toListId": "All",
        "initiatedByListId": "All",
        "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
        "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
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
            "amountTrackerId": "transferable",
            "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
          },
          "maxNumTransfers": {
            "overallMaxNumTransfers": "0",
            "perToAddressMaxNumTransfers": "0",
            "perFromAddressMaxNumTransfers": "0",
            "perInitiatedByAddressMaxNumTransfers": "0",
            "amountTrackerId": "transferable",
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
    "standards": [
      "NFTMarketplace",
      "NFTs",
      "NFTPricingDenom:ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"
    ],
    "isArchived": false,
    "mintEscrowCoinsToTransfer": [],
    "cosmosCoinWrapperPathsToAdd": [],
    "invariants": {
      "noCustomOwnershipTimes": false,
      "maxSupplyPerId": "0",
      "cosmosCoinBackedPath": { "conversion": { "sideA": { "amount": "0", "denom": "" }, "sideB": [] } },
      "noForcefulPostMintTransfers": false,
      "disablePoolCreation": false,
      "evmQueryChallenges": []
    },
    "aliasPathsToAdd": []
  }
}
```

{% hint style="warning" %}
Price new collections in canonical USDC, the Injective-routed denom `ibc/E1116484...`. Its token-standard allowlisting ships with governance proposal 45 and early supply is small, so early traders may need to bridge via Injective themselves. Do not use the legacy `USDC.n` (`ibc/F082B65C...`): backed-path escrows derive from the denom string, so a collection created on it is stuck there permanently. See [Supported Denoms](../chain/supported-denoms.md).
{% endhint %}

### Variant: A Claim-Gated Quest Token

The same message shape serves a single-token quest collection (`standards: ["Quests"]`, `validTokenIds: [{ "start": "1", "end": "1" }]`). Only the mint approval and the escrow funding change. The approval is public (`initiatedByListId: "All"`), requires a Merkle proof issued by a BitBadges claim, mints exactly one token per claim, and pays the claimant 5000000000 `ubadge` from the mint escrow:

```json fold=22-26,32-37,39-43,45-56,74-79,81-125
{
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "1" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/quest-approval.json",
  "customData": "",
  "approvalId": "quests-approval",
  "approvalCriteria": {
    "merkleChallenges": [
      {
        "root": "5958c51f7c54d8e27ac42a9a2f03069c1412071abb87bf0e7be0dde790a82dbb",
        "expectedProofLength": "0",
        "useCreatorAddressAsLeaf": false,
        "maxUsesPerLeaf": "1",
        "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/challenge.json",
        "customData": "",
        "challengeTrackerId": "quests-challenge",
        "leafSigner": "0xa612B14Ff99DAe9FBC9613bF4553781086c5F887"
      }
    ],
    "predeterminedBalances": {
      "manualBalances": [],
      "incrementedBalances": {
        "startBalances": [
          {
            "amount": "1",
            "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
            "tokenIds": [{ "start": "1", "end": "1" }]
          }
        ],
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
        "useOverallNumTransfers": true,
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
      "amountTrackerId": "quests-approval",
      "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
    },
    "maxNumTransfers": {
      "overallMaxNumTransfers": "1",
      "perToAddressMaxNumTransfers": "0",
      "perFromAddressMaxNumTransfers": "0",
      "perInitiatedByAddressMaxNumTransfers": "0",
      "amountTrackerId": "quests-approval",
      "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
    },
    "coinTransfers": [
      {
        "to": "",
        "coins": [{ "denom": "ubadge", "amount": "5000000000" }],
        "overrideFromWithApproverAddress": true,
        "overrideToWithInitiator": true
      }
    ],
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

The collection-level fields that differ: `"standards": ["Quests"]`, `"tokenMetadata"` uses one entry `ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/quest.json` for `1` to `18446744073709551615`, and `"mintEscrowCoinsToTransfer": [{ "denom": "ubadge", "amount": "5000000000" }]` funds the escrow that pays the reward. The Merkle root, leaf signer (`0xa612B14Ff99DAe9FBC9613bF4553781086c5F887`), and challenge URI come from the claim you create in [Distribute with Claims](distribute-with-claims.md). The escrow override flags are explained in [Mint and Distribute](mint-and-distribute.md).

## 5. Sign and Broadcast

```bash
# Sign with the wallet in your browser (Keplr, MetaMask, ...)
bb deploy --msg-file ./collection.json --browser

# Or use a throwaway signer that hands the collection to --manager afterwards
bb deploy --msg-file ./collection.json --burner --manager bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --fund manual

# Simulate only
bb deploy --msg-file ./collection.json --dry-run
```

`--burner` is create-only. It generates an ephemeral key, needs a little `BADGE` for gas (`--fund faucet` requires an [API key](../api/README.md#api-keys) on non-local networks; `--fund manual` lets you send the dust yourself), broadcasts, and transfers management to `--manager`. `--browser` hands the transaction to your connected wallet through the `/sign` page and returns the hash; add `--sign-only` to get signed bytes back for your own submitter. Every `bb build` preset accepts the same `--browser` and `--burner` flags inline, so a preset can build and broadcast in one command. See [Deploy](../cli/deploy.md).

## Common Mistakes

- Reusing token IDs across editions. Each token ID is one distinct NFT unless you understand ownership times.
- Omitting `tokenIds` in a `canUpdateTokenMetadata` permission entry. The permission must say which ID ranges it covers.
- Omitting `overridesFromOutgoingApprovals: true` on a Mint approval. Minting fails silently.
- Using a custom list ID. Only reserved IDs and direct addresses are valid.
- Using numbers instead of strings for amounts and IDs.
- Using more than one token ID for a fungible token.

## Next Steps

- [Mint and Distribute](mint-and-distribute.md)
- [Set Transferability](set-transferability.md)
- [Lock Permissions](lock-permissions.md)
- [MsgCreateCollection](../token-standard/messages/msg-create-collection.md)
