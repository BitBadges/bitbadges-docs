---
description: "Create an NFT or fungible token collection on BitBadges with the bb CLI, the TypeScript SDK, or raw MsgCreateCollection JSON."
---

# Create a collection

At the end you have a live collection with token IDs, metadata, a manager, and a mint approval, ready for [Mint and distribute](mint-and-distribute.md).

A collection is one on-chain record that holds every field below; see [Collections](../token-standard/concepts/collections.md). Every numeric value in transaction JSON is a string (`"100"`, not `100`).

## 1. Pick the token shape

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

## 2. Write the base fields

Most collections share this base. It excludes `collectionPermissions` and `collectionApprovals`, which the next two guides cover.

```ts
const BaseCollectionDetails = {
    validTokenIds: [
        {
            start: '1',
            end: '100', // Set to your max ID
        },
    ],
    manager: 'bb1kj9kt5y64n5a8677fhjqnmcc24ht2vy9atmdls', // Set to your address
    collectionMetadata: {
        uri: 'ipfs://QmSTZZPgYF58gS9bM7q3nWVegUJH51WBdT91fz7q94qDwS', // Points to a valid .json metadata file
        customData: '',
    },
    tokenMetadata: [
        {
            uri: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/{id}', // {id} is replaced with the token ID
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
            uri: 'ipfs://QmSTZZPgYF58gS9bM7q3nWVegUJH51WBdT91fz7q94qDwS',
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

Field reference: `validTokenIds`, `collectionMetadata`, `tokenMetadata`, `customData`, `standards`, `isArchived`, and `defaultBalances` are on [Collections](../token-standard/concepts/collections.md). `manager` is on [Permissions](../token-standard/concepts/permissions.md). `mintEscrowCoinsToTransfer` is on [Coin transfers](../token-standard/approval-criteria/coin-transfers.md). `cosmosCoinWrapperPathsToAdd` is on [Cosmos coin wrapper paths](../token-standard/ibc/cosmos-coin-wrapper-paths.md).

`autoApproveAllIncomingTransfers: true` matters for any collection with a public mint. Without it, recipients cannot receive minted tokens.

## 3. Add a mint approval

Every approval with `fromListId: "Mint"` creates balances. Two rules apply to all of them:

- `overridesFromOutgoingApprovals: true` is required. The Mint address has no outgoing approvals to check.
- `initiatedByListId` decides who can mint. Use your own address for a creator-only mint, or `"All"` for a public mint.

NFT pattern with sequential IDs:

```json
{
  "updateValidTokenIds": true,
  "validTokenIds": [{ "start": "1", "end": "100" }],
  "updateCollectionMetadata": true,
  "collectionMetadata": {
    "uri": "ipfs://QmCollectionMetadata",
    "customData": ""
  },
  "updateTokenMetadata": true,
  "tokenMetadata": [{
    "uri": "ipfs://QmTokenMetadata/{id}",
    "customData": "",
    "tokenIds": [{ "start": "1", "end": "100" }]
  }],
  "updateCollectionApprovals": true,
  "collectionApprovals": [{
    "fromListId": "Mint",
    "toListId": "All",
    "initiatedByListId": "bb1creator...",
    "approvalId": "manager-mint",
    "tokenIds": [{ "start": "1", "end": "100" }],
    "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "approvalCriteria": {
      "overridesFromOutgoingApprovals": true,
      "predeterminedBalances": {
        "manualBalances": [],
        "incrementedBalances": {
          "startBalances": [{ "amount": "1", "tokenIds": [{ "start": "1", "end": "1" }], "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }] }],
          "incrementTokenIdsBy": "1",
          "incrementOwnershipTimesBy": "0",
          "durationFromTimestamp": "0",
          "allowOverrideTimestamp": false,
          "recurringOwnershipTimes": { "startTime": "0", "intervalLength": "0", "chargePeriodLength": "0" },
          "allowOverrideWithAnyValidToken": false
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
      "maxNumTransfers": {
        "overallMaxNumTransfers": "100",
        "perInitiatedByAddressMaxNumTransfers": "1",
        "perToAddressMaxNumTransfers": "0",
        "perFromAddressMaxNumTransfers": "0",
        "amountTrackerId": "nft-mint-tracker",
        "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
      }
    }
  }],
  "updateStandards": true,
  "standards": ["NFTs"]
}
```

`incrementTokenIdsBy: "1"` gives each mint the next token ID. `maxNumTransfers` caps total mints and per-user mints. `orderCalculationMethod` must have exactly one method set to `true`. See [Predetermined balances](../token-standard/approval-criteria/predetermined-balances.md).

Fungible pattern with a supply cap:

```json
{
  "updateValidTokenIds": true,
  "validTokenIds": [{ "start": "1", "end": "1" }],
  "updateStandards": true,
  "standards": ["Fungible Tokens"],
  "updateTokenMetadata": true,
  "tokenMetadata": [{
    "uri": "ipfs://...",
    "customData": "",
    "tokenIds": [{ "start": "1", "end": "1" }]
  }],
  "updateCollectionApprovals": true,
  "collectionApprovals": [{
    "fromListId": "Mint",
    "toListId": "All",
    "initiatedByListId": "All",
    "approvalId": "public-mint",
    "tokenIds": [{ "start": "1", "end": "1" }],
    "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "approvalCriteria": {
      "overridesFromOutgoingApprovals": true,
      "approvalAmounts": {
        "overallApprovalAmount": "1000000",
        "perInitiatedByAddressApprovalAmount": "1000",
        "perToAddressApprovalAmount": "0",
        "perFromAddressApprovalAmount": "0",
        "amountTrackerId": "mint-tracker",
        "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
      }
    }
  }]
}
```

`overallApprovalAmount` is the total supply cap and `perInitiatedByAddressApprovalAmount` the per-user cap; `"0"` means unlimited. `amountTrackerId` is required whenever `approvalAmounts` or `maxNumTransfers` is set. See [Approval trackers](../token-standard/approval-criteria/approval-trackers.md).

List IDs in approvals use reserved IDs only: `"All"`, `"Mint"`, `"!Mint"`, `"AllWithoutMint"`, or a `bb1...` address. See [Address lists](../token-standard/concepts/address-lists.md).

## 4. Build the transaction

### bb CLI

`bb build` ships presets for specific standards (vault, subscription, bounty, credit token, and more; see [Build](../cli/build.md)). A plain NFT or fungible collection has no preset, so write the message JSON from steps 2 and 3 to a file and check it:

```bash
bb check ./collection.json            # structural validation + design review
bb explain ./collection.json          # human-readable summary of what the tx does
```

`bb check` exits 2 on errors and, with `--strict`, 1 on warnings. Use `--depth structural` for validation only.

Metadata does not need IPFS hosting. Every `bb build` preset accepts either `--uri <pre-hosted-uri>` or the per-entity flags `--name`, `--image`, `--description`, which the CLI serializes into the on-chain `customData` field. The BitBadges API, SDK, and site parse `customData` on read and surface it as the resolved metadata. Approvals are text-only (`--name` + `--description`). The CLI errors if neither mode is fully satisfied; there are no default placeholders. See [Collections](../token-standard/concepts/collections.md) for the inline-metadata shape.

### TypeScript SDK

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgCreateCollection } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgCreateCollection({
    creator: client.address,
    collectionId: '0', // 0 = create a new collection
    ...BaseCollectionDetails,
    collectionPermissions, // see "Lock permissions"
    collectionApprovals: [mintApproval], // see step 3
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash);
```

Full signing options (Ethereum wallets, browser handoff, payload generation) are in [Transactions](../sdk/transactions/README.md).

### Raw JSON

A complete `MsgCreateCollection` for a tradable NFT collection (100 NFTs, creator-only mint, free post-mint transfers, priced in canonical USDC). All permissions are empty, so the manager keeps soft-enabled control of everything.

```json
[
    {
        "creator": "bb18el5ug46umcws58m445ql5scgg2n3tzagfecvl",
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
        "validTokenIds": [
            {
                "start": "1",
                "end": "100"
            }
        ],
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
        "manager": "bb18el5ug46umcws58m445ql5scgg2n3tzagfecvl",
        "collectionMetadata": {
            "uri": "ipfs://QmdqD7VE4MTZz2V1XeCBqdFcQ9orE6a4PEUzbFi2SfFxoR",
            "customData": ""
        },
        "tokenMetadata": [
            {
                "uri": "ipfs://QmRbRYYyphz73apphqP3QQmkeZxbtMWmAxasGfhcw1RApD",
                "customData": "",
                "tokenIds": [
                    {
                        "start": "101",
                        "end": "18446744073709551615"
                    }
                ]
            },
            {
                "uri": "ipfs://QmdqD7VE4MTZz2V1XeCBqdFcQ9orE6a4PEUzbFi2SfFxoR",
                "customData": "",
                "tokenIds": [
                    {
                        "start": "1",
                        "end": "100"
                    }
                ]
            }
        ],
        "customData": "",
        "collectionApprovals": [
            {
                "fromListId": "Mint",
                "toListId": "All",
                "initiatedByListId": "bb18el5ug46umcws58m445ql5scgg2n3tzagfecvl",
                "transferTimes": [
                    {
                        "start": "1",
                        "end": "18446744073709551615"
                    }
                ],
                "tokenIds": [
                    {
                        "start": "1",
                        "end": "100"
                    }
                ],
                "ownershipTimes": [
                    {
                        "start": "1",
                        "end": "18446744073709551615"
                    }
                ],
                "uri": "",
                "customData": "",
                "approvalId": "a4ab9bc5e8752842a35a79238de4f627677ceae1d8fa9de44b52416e085f7f11",
                "approvalCriteria": {
                    "merkleChallenges": [],
                    "ethSignatureChallenges": [],
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
                            "allowOverrideWithAnyValidToken": false
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
                        "amountTrackerId": "a4ab9bc5e8752842a35a79238de4f627677ceae1d8fa9de44b52416e085f7f11",
                        "resetTimeIntervals": {
                            "startTime": "0",
                            "intervalLength": "0"
                        }
                    },
                    "maxNumTransfers": {
                        "overallMaxNumTransfers": "0",
                        "perToAddressMaxNumTransfers": "0",
                        "perFromAddressMaxNumTransfers": "0",
                        "perInitiatedByAddressMaxNumTransfers": "0",
                        "amountTrackerId": "d711e23dbe57b786dfb2d86d4a6792fb8c9951a18223065ea0c07d424225a738",
                        "resetTimeIntervals": {
                            "startTime": "0",
                            "intervalLength": "0"
                        }
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
                        "afterOverallMaxNumTransfers": false
                    },
                    "userRoyalties": {
                        "percentage": "0",
                        "payoutAddress": ""
                    },
                    "mustOwnTokens": [],
                    "dynamicStoreChallenges": [],
                    "votingChallenges": [],
                    "evmQueryChallenges": [],
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
                        "offlineDays": []
                    },
                    "mustPrioritize": false
                },
                "version": "0"
            },
            {
                "fromListId": "!Mint",
                "toListId": "All",
                "initiatedByListId": "All",
                "transferTimes": [
                    {
                        "start": "1",
                        "end": "18446744073709551615"
                    }
                ],
                "tokenIds": [
                    {
                        "start": "1",
                        "end": "18446744073709551615"
                    }
                ],
                "ownershipTimes": [
                    {
                        "start": "1",
                        "end": "18446744073709551615"
                    }
                ],
                "uri": "",
                "customData": "",
                "approvalId": "transferable-approval",
                "approvalCriteria": {
                    "merkleChallenges": [],
                    "ethSignatureChallenges": [],
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
                                "intervalLength": "0"
                            },
                            "allowOverrideWithAnyValidToken": false
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
                        "amountTrackerId": "d79af272f33e76e5ba77c4edc356ad5b2e4014dd93ec7cea2b45ba56c65e11ac",
                        "resetTimeIntervals": {
                            "startTime": "0",
                            "intervalLength": "0"
                        }
                    },
                    "maxNumTransfers": {
                        "overallMaxNumTransfers": "0",
                        "perToAddressMaxNumTransfers": "0",
                        "perFromAddressMaxNumTransfers": "0",
                        "perInitiatedByAddressMaxNumTransfers": "0",
                        "amountTrackerId": "d79af272f33e76e5ba77c4edc356ad5b2e4014dd93ec7cea2b45ba56c65e11ac",
                        "resetTimeIntervals": {
                            "startTime": "0",
                            "intervalLength": "0"
                        }
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
                        "afterOverallMaxNumTransfers": false
                    },
                    "userRoyalties": {
                        "percentage": "0",
                        "payoutAddress": ""
                    },
                    "mustOwnTokens": [],
                    "dynamicStoreChallenges": [],
                    "votingChallenges": [],
                    "evmQueryChallenges": [],
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
                        "offlineDays": []
                    },
                    "mustPrioritize": false
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
        "aliasPathsToAdd": [],
        "invariants": {
            "noCustomOwnershipTimes": false,
            "maxSupplyPerId": "0",
            "cosmosCoinBackedPath": null,
            "noForcefulPostMintTransfers": false,
            "disablePoolCreation": false,
            "evmQueryChallenges": []
        }
    }
]
```

{% hint style="warning" %}
Price new collections in canonical USDC, the Injective-routed denom `ibc/E1116484...`. Its token-standard allowlisting ships with governance proposal 45 and early supply is small, so early traders may need to bridge via Injective themselves. Do not use the legacy `USDC.n` (`ibc/F082B65C...`): backed-path escrows derive from the denom string, so a collection created on it is stuck there permanently. See [Supported denoms](../token-standard/network/supported-denoms.md).
{% endhint %}

### Variant: a claim-gated quest token

The same message shape serves a single-token quest collection (`standards: ["Quests"]`, `validTokenIds: [{ "start": "1", "end": "1" }]`). Only the mint approval and the escrow funding change. The approval is public (`initiatedByListId: "All"`), requires a Merkle proof issued by a BitBadges claim, mints exactly one token per claim, and pays the claimant 5000000000 `ubadge` from the mint escrow:

```json
{
    "fromListId": "Mint",
    "toListId": "All",
    "initiatedByListId": "All",
    "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "tokenIds": [{ "start": "1", "end": "1" }],
    "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "uri": "ipfs://QmPUAjAPMDQMJZV8mpnaYbhBu2BUS4u449c7KsRNZip9uf",
    "customData": "",
    "approvalId": "quests-approval",
    "approvalCriteria": {
        "merkleChallenges": [
            {
                "root": "5958c51f7c54d8e27ac42a9a2f03069c1412071abb87bf0e7be0dde790a82dbb",
                "expectedProofLength": "0",
                "useCreatorAddressAsLeaf": false,
                "maxUsesPerLeaf": "1",
                "uri": "ipfs://QmRsSK3Fw63bcJPuiYutNfBK3TYdnB8X5QG8W6ksVMuNcH",
                "customData": "",
                "challengeTrackerId": "1c5b9f3c390d26981996a6b593fe42300023b0e43534954a73075b912d9ca2e6",
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
                "allowOverrideWithAnyValidToken": false
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
        "overridesFromOutgoingApprovals": true,
        "overridesToIncomingApprovals": false,
        "mustPrioritize": false
    },
    "version": "0"
}
```

The remaining criteria fields are the empty defaults shown in the full example above. The collection-level fields that differ: `"standards": ["Quests"]`, `"tokenMetadata"` uses one entry `ipfs://QmRbRYYyphz73apphqP3QQmkeZxbtMWmAxasGfhcw1RApD` for `1` to `18446744073709551615`, and `"mintEscrowCoinsToTransfer": [{ "denom": "ubadge", "amount": "5000000000" }]` funds the escrow that pays the reward. The Merkle root, leaf signer (`0xa612B14Ff99DAe9FBC9613bF4553781086c5F887`), and challenge URI come from the claim you create in [Distribute with claims](distribute-with-claims.md). The escrow override flags are explained in [Mint and distribute](mint-and-distribute.md).

## 5. Sign and broadcast

```bash
# Sign with the wallet in your browser (Keplr, MetaMask, ...)
bb deploy --msg-file ./collection.json --browser

# Or use a throwaway signer that hands the collection to --manager afterwards
bb deploy --msg-file ./collection.json --burner --manager bb1youraddress... --fund manual

# Simulate only
bb deploy --msg-file ./collection.json --dry-run
```

`--burner` is create-only. It generates an ephemeral key, needs a little `BADGE` for gas (`--fund faucet` requires an API key on non-local networks; `--fund manual` lets you send the dust yourself), broadcasts, and transfers management to `--manager`. `--browser` hands the transaction to your connected wallet through the `/sign` page and returns the hash; add `--sign-only` to get signed bytes back for your own submitter. Every `bb build` preset accepts the same `--browser` and `--burner` flags inline, so a preset can build and broadcast in one command. See [Deploy](../cli/deploy.md).

## Common mistakes

- Reusing token IDs across editions. Each token ID is one distinct NFT unless you understand ownership times.
- Omitting `tokenIds` in a `canUpdateTokenMetadata` permission entry. The permission must say which ID ranges it covers.
- Omitting `overridesFromOutgoingApprovals: true` on a Mint approval. Minting fails silently.
- Using a custom list ID. Only reserved IDs and direct addresses are valid.
- Using numbers instead of strings for amounts and IDs.
- Using more than one token ID for a fungible token.

## Next steps

- [Mint and distribute](mint-and-distribute.md)
- [Set transferability](set-transferability.md)
- [Lock permissions](lock-permissions.md)
- [MsgCreateCollection](../token-standard/messages/msg-create-collection.md)
