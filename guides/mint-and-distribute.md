---
description: "Mint BitBadges tokens to yourself or to the public, charge for mints, pay out from escrow, and control circulating supply."
---

# Mint and Distribute

At the end your collection has the mint approvals it needs, tokens are in wallets, and the supply is as fixed or as open as you decided.

Minting is a transfer from the reserved `Mint` address, allowed by a collection approval; see [Minting and Supply](../token-standard/concepts/minting-and-supply.md). For code-, allowlist-, or social-gated distribution, use [Distribute with Claims](distribute-with-claims.md) instead.

Rules that apply to every mint approval:

- `fromListId: "Mint"`.
- `overridesFromOutgoingApprovals: true`. The Mint address has no outgoing approvals to check. Without a matching or overridden outgoing check, the transfer is rejected.
- A passing incoming check: for example `autoApproveAllIncomingTransfers: true` in `defaultBalances`, a matching incoming approval, self-initiated incoming auto-approval, or an explicit collection-level override.
- `predeterminedBalances` and `approvalAmounts` are incompatible; use one or the other.
- `orderCalculationMethod` must have exactly one method set to `true` when `predeterminedBalances` is used (default `useOverallNumTransfers`).
- `amountTrackerId` is required when `maxNumTransfers` or `approvalAmounts` is set.
- All numbers are strings.

## 1. Choose a Mint Pattern

| Pattern | `initiatedByListId` | Distinctive criteria |
| --- | --- | --- |
| Creator-only mint | your address | none; you mint any amount later |
| Public mint, sequential IDs | `"All"` | `predeterminedBalances.incrementedBalances` with `incrementTokenIdsBy: "1"` |
| Paid mint | `"All"` | `coinTransfers` with both override flags `false` |
| Free mint with payout | `"All"` | `coinTransfers` with both override flags `true`, funded via `mintEscrowCoinsToTransfer` |
| Capped mint | any | `maxNumTransfers` or `approvalAmounts` with an `amountTrackerId` |
| One-shot approval | any | `autoDeletionOptions.afterOneUse: true` |

{% hint style="info" %}
**Ask your agent.** With the MCP builder tools installed, paste one of these:

```text
Add a public mint to collection 1 that charges 5 BADGE per mint, one per address, capped at 1,000 mints, and give me the review link.
```

```text
Build a transfer that mints token 1 of collection 1 to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue through the manager-mint approval, validate it, and give me the review link.
```
{% endhint %}

### Creator-Only Mint

```ts
import { UintRangeArray } from 'bitbadges';

const myAddress = 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d';

const mintApproval = {
    fromListId: 'Mint', // From the mint address
    toListId: 'All', // To any address
    initiatedByListId: myAddress, // Only you can initiate
    transferTimes: UintRangeArray.FullRanges(),
    tokenIds: UintRangeArray.FullRanges(), // All token IDs
    ownershipTimes: UintRangeArray.FullRanges(),
    approvalId: 'mint-approval',
    version: 0n,
    approvalCriteria: {
        // No restrictions: you can mint unlimited amounts
        ...EmptyApprovalCriteria,
        overridesFromOutgoingApprovals: true, // Required for the Mint address
    },
};

const collection = {
    ...BaseCollectionDetails,
    collectionApprovals: [mintApproval, transferableApproval],
};
```

`EmptyApprovalCriteria` and `transferableApproval` are the no-restrictions template and the post-mint approval in [Set Transferability](set-transferability.md). `BaseCollectionDetails` is from [Create a Collection](create-a-collection.md).

### Paid Mint

```json
{
  "approvalCriteria": {
    "coinTransfers": [{
      "to": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "coins": [{ "denom": "ubadge", "amount": "5000000000" }],
      "overrideFromWithApproverAddress": false,
      "overrideToWithInitiator": false
    }]
  }
}
```

Both override flags are `false` for a standard payment: the initiator pays, and `to` (the creator or approver) receives. See [Coin Transfers](../token-standard/approval-criteria/coin-transfers.md).

### Sequential Token IDs

```json
{
  "approvalCriteria": {
    "predeterminedBalances": {
      "incrementedBalances": {
        "startBalances": [{
          "amount": "1",
          "tokenIds": [{ "start": "1", "end": "1" }],
          "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }]
        }],
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
      },
      "manualBalances": []
    }
  }
}
```

For one-time or fixed-use approvals, prefer `incrementedBalances` with zero increments (`incrementTokenIdsBy: "0"`, `incrementOwnershipTimesBy: "0"`) over `maxNumTransfers` alone. The BitBadges site detects `predeterminedBalances` and shows users the exact tokens they will receive. Avoid `manualBalances`. See [Predetermined Balances](../token-standard/approval-criteria/predetermined-balances.md).

### Transfer Limits

```json
{
  "approvalCriteria": {
    "maxNumTransfers": {
      "overallMaxNumTransfers": "100",
      "perInitiatedByAddressMaxNumTransfers": "1",
      "perToAddressMaxNumTransfers": "0",
      "perFromAddressMaxNumTransfers": "0",
      "amountTrackerId": "mint-tracker",
      "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
    }
  }
}
```

`"0"` means unlimited. See [Approval Trackers](../token-standard/approval-criteria/approval-trackers.md).

### Auto-Deletion

```json
{
  "approvalCriteria": {
    "autoDeletionOptions": {
      "afterOneUse": true,
      "afterOverallMaxNumTransfers": false,
      "allowCounterpartyPurge": false,
      "allowPurgeIfExpired": false
    }
  }
}
```

See [Auto-Deletion](../token-standard/approval-criteria/auto-deletion.md).

### Free Mint with a Payout from Escrow

The mint escrow address is a reserved address derived from the collection ID. It holds native coins and has no private key; only collection approvals can move funds out of it. Fund it at creation with `mintEscrowCoinsToTransfer` (the address depends on the collection ID, so genesis is the convenient moment) or top it up later. This complete `MsgCreateCollection` funds the escrow with 10,000 BADGE, pays each minter 1 BADGE, and caps the mint at one token per address and ten in total:

```json fold=3-6,10-17,19-31,56-60,73-77,79-91,108-113,115-159,161-165,169-172,174-178
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
      "initiatedByListId": "All",
      "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "tokenIds": [{ "start": "1", "end": "100" }],
      "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "uri": "",
      "customData": "",
      "approvalId": "free-mint",
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
          "overallMaxNumTransfers": "10",
          "perToAddressMaxNumTransfers": "0",
          "perFromAddressMaxNumTransfers": "0",
          "perInitiatedByAddressMaxNumTransfers": "1",
          "amountTrackerId": "free-mint",
          "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
        },
        "coinTransfers": [
          {
            "to": "",
            "coins": [{ "denom": "ubadge", "amount": "1000000000" }],
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
  ],
  "standards": ["NFTs"],
  "isArchived": false,
  "mintEscrowCoinsToTransfer": [{ "denom": "ubadge", "amount": "10000000000" }],
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
```

- `overrideFromWithApproverAddress: true` makes the mint escrow the payer.
- `overrideToWithInitiator: true` pays whoever initiated the mint, ignoring `to`.

### Complete Example: Public Paid Mint with Sequential IDs and Caps

One complete `CollectionApproval` for `collectionApprovals`:

```json fold=11-15,28-32,34-46,61-68,70-114
{
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "uri": "",
  "customData": "",
  "approvalId": "public-mint-5-badge",
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
      "overallMaxNumTransfers": "1000",
      "perToAddressMaxNumTransfers": "0",
      "perFromAddressMaxNumTransfers": "0",
      "perInitiatedByAddressMaxNumTransfers": "1",
      "amountTrackerId": "public-mint-tracker",
      "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
    },
    "coinTransfers": [
      {
        "to": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
        "coins": [{ "denom": "ubadge", "amount": "5000000000" }],
        "overrideFromWithApproverAddress": false,
        "overrideToWithInitiator": false
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

:::widget{name="approval-criteria" caption="The public mint on bitbadges.io: 5,000 BADGE per mint to alice, sequential IDs, 1,000 mints in total and one per address."}
{
  "predeterminedBalances": {
    "incrementedBalances": {
      "startBalances": [
        {
          "amount": "1",
          "tokenIds": [
            {
              "start": "1",
              "end": "1"
            }
          ]
        }
      ],
      "incrementTokenIdsBy": "1"
    },
    "orderCalculationMethod": {
      "useOverallNumTransfers": true
    }
  },
  "maxNumTransfers": {
    "overallMaxNumTransfers": "1000",
    "perInitiatedByAddressMaxNumTransfers": "1",
    "amountTrackerId": "public-mint-tracker"
  },
  "coinTransfers": [
    {
      "to": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "coins": [
        {
          "denom": "ubadge",
          "amount": "5000000000"
        }
      ]
    }
  ],
  "overridesFromOutgoingApprovals": true
}
:::

To add a mint approval after creation, the collection's `canUpdateCollectionApprovals` permission must not be frozen for `Mint`, and you send the approval in a separate `MsgUniversalUpdateCollection`. See [Lock Permissions](lock-permissions.md).

## 2. Mint at Creation Time

One transaction can carry the `MsgUniversalUpdateCollection` that creates the collection plus one or more `MsgTransferTokens`. Every transfer uses `collectionId: "0"`, which refers to the collection created by the first message in the same transaction.

```json fold=15-21,23-26,31-40
{
  "typeUrl": "/tokenization.MsgTransferTokens",
  "value": {
    "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "collectionId": "0",
    "transfers": [
      {
        "from": "Mint",
        "toAddresses": ["bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"],
        "balances": [
          {
            "amount": "1",
            "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
            "tokenIds": [{ "start": "1", "end": "1" }]
          }
        ],
        "precalculateBalancesFromApproval": {
          "approvalId": "",
          "approvalLevel": "",
          "approverAddress": "",
          "version": "0",
          "precalculationOptions": { "overrideTimestamp": "0", "tokenIdsOverride": [], "scalingMultiplier": "0" }
        },
        "merkleProofs": [],
        "ethSignatureProofs": [],
        "memo": "",
        "prioritizedApprovals": [
          {
            "approvalId": "manager-mint",
            "approvalLevel": "collection",
            "approverAddress": "",
            "version": "0"
          }
        ],
        "onlyCheckPrioritizedCollectionApprovals": false,
        "onlyCheckPrioritizedIncomingApprovals": false,
        "onlyCheckPrioritizedOutgoingApprovals": false
      }
    ]
  }
}
```

Use this when you want tokens in wallets right after creation: minting to yourself or others, an initial allocation, or a manager-only collection where the manager holds everything. Do not add transfer messages to public-mint, subscription, or smart token collections; those mint later through their approvals.

Rules:

1. `prioritizedApprovals` must be present, even as `[]`. Match `approvalId` to one of the collection's `collectionApprovals`.
2. `from: "Mint"` mints new tokens. A regular `bb1` address makes a peer-to-peer transfer.
3. The signer (`creator`) is the initiator, so the collection needs an approval that allows this address as `initiatedBy`.
4. All numbers are strings.

For expiring tokens, set `ownershipTimes` on the balance to a window in milliseconds since the epoch. This one lasts five minutes from `1788739200000` (2026-09-06T00:00:00Z), the current timestamp plus `5 * 60 * 1000`:

```json
{
  "amount": "1",
  "tokenIds": [{ "start": "1", "end": "1" }],
  "ownershipTimes": [{ "start": "1788739200000", "end": "1788739500000" }]
}
```

MCP builder tool sessions edit these messages with patch operations: `add_transfer` (`{ op: "add_transfer", transfer: { transfers: [...] } }`) appends a `MsgTransferTokens`, `remove_transfer` (`{ op: "remove_transfer", index: 0 }`) removes one by 0-based index among the transfer messages, and `update_transfer` (`{ op: "update_transfer", index: 0, changes: {...} }`) deep-merges changes. See [MCP tools](../agents/mcp-tools.md).

## 3. Mint After Creation

### bb CLI

`bb build transfer` fetches the collection, the sender's outgoing approvals, and the recipient's incoming approvals, then walks you through the choices. It needs `BITBADGES_API_KEY` (env var or `bb settings set apiKey ...`). Create a key at [bitbadges.io/developer](https://bitbadges.io/developer).

```bash
# Interactive walkthrough: prompts for everything
bb build transfer

# Flag-driven: still prompts for the approval-selection step
bb build transfer --collection-id 1 --from Mint --to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 5

# Fully non-interactive: no prioritized approvals (chain matches), no
# precalculation, default amount=1, default tokenIds=all valid
bb build transfer --yes --collection-id 1 --from Mint --to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue | bb deploy --browser
```

| Flag | Required | Description |
| --- | --- | --- |
| `--collection-id <id>` | No | Collection ID (prompts if omitted) |
| `--from <address>` | No | Sender: a `bb1` or `0x` address, or `Mint` for minting (prompts if omitted) |
| `--to <address>` | No | Recipient (cannot be `Mint`; prompts if omitted) |
| `--amount <n>` | No | Per-recipient amount when not precalculated (default: prompt; `1` with `--yes`) |
| `--token-ids <spec>` | No | `1-5`, `1,3,5`, or `all` (default: prompt; `all` with `--yes`) |
| `-y, --yes` | No | Skip every prompt. For scripts and CI |

The walkthrough lists approvals grouped by level (collection, outgoing, incoming) with tags `predetermined`, `payment`, `must-own`, and `backed`, then asks:

1. Which approvals to set as `prioritizedApprovals` (comma-separated indices, blank to skip).
2. For each level with a pick, whether to set `onlyCheckPrioritized<Level>Approvals: true`.
3. If a picked approval has `predeterminedBalances`, whether to delegate balance computation with `precalculateBalancesFromApproval` (and an optional `scalingMultiplier` to consume N predetermined steps in one transaction).
4. If not precalculated, the per-recipient `amount` and `tokenIds`.

If a picked approval requires a coin payment or prerequisite token ownership, the walkthrough prints a "Heads up" line before emitting. The output flows through the same pipeline as the collection builders, so `--simulate`, `--explain`, and `--browser` behave identically. `--burner` is create-only and refuses transfers.

### Raw JSON: Explicit Balances

Mint token ID 1 of collection 1 to the creator, naming the collection approval to use. `onlyCheckPrioritizedCollectionApprovals: true` skips auto-scanning of other collection approvals; the user-level approvals still auto-scan.

```json fold=13-19,21-24,29-32,34-37
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "1",
  "transfers": [
    {
      "from": "Mint",
      "toAddresses": ["bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"],
      "balances": [
        {
          "amount": "1",
          "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
          "tokenIds": [{ "start": "1", "end": "1" }]
        }
      ],
      "precalculateBalancesFromApproval": {
        "approvalId": "",
        "approvalLevel": "",
        "approverAddress": "",
        "version": "0",
        "precalculationOptions": { "overrideTimestamp": "0", "tokenIdsOverride": [], "scalingMultiplier": "0" }
      },
      "merkleProofs": [],
      "ethSignatureProofs": [],
      "memo": "",
      "prioritizedApprovals": [
        {
          "approvalId": "manager-mint",
          "approvalLevel": "collection",
          "approverAddress": "",
          "version": "0"
        }
      ],
      "onlyCheckPrioritizedCollectionApprovals": true,
      "onlyCheckPrioritizedIncomingApprovals": false,
      "onlyCheckPrioritizedOutgoingApprovals": false
    }
  ]
}
```

### Raw JSON: Precalculated Balances

When the approval has `predeterminedBalances`, leave `balances` empty and let the chain compute them from the approval. Only the named approval is checked; no other approval is scanned. This is how approvals with side effects (Merkle challenges, ETH signature challenges, payments) are used deliberately, and it shows the approval version being pinned.

```json fold=15-18,23-26,28-31
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "1",
  "transfers": [
    {
      "from": "Mint",
      "toAddresses": ["bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"],
      "balances": [],
      "precalculateBalancesFromApproval": {
        "approvalId": "manager-mint",
        "approvalLevel": "collection",
        "approverAddress": "",
        "version": "0",
        "precalculationOptions": { "overrideTimestamp": "0", "tokenIdsOverride": [], "scalingMultiplier": "0" }
      },
      "merkleProofs": [],
      "ethSignatureProofs": [],
      "memo": "",
      "prioritizedApprovals": [
        {
          "approvalId": "manager-mint",
          "approvalLevel": "collection",
          "approverAddress": "",
          "version": "0"
        }
      ],
      "onlyCheckPrioritizedCollectionApprovals": true,
      "onlyCheckPrioritizedIncomingApprovals": false,
      "onlyCheckPrioritizedOutgoingApprovals": false
    }
  ]
}
```

- `precalculationOptions.overrideTimestamp: "0"` uses the current time. It applies only if the approval has `allowOverrideTimestamp: true`.
- `precalculationOptions.tokenIdsOverride: []` uses the approval's own token IDs. It applies only if the approval has `allowOverrideWithAnyValidToken: true`.
- `precalculationOptions.scalingMultiplier: "0"` consumes one predetermined step. A larger value consumes that many steps in one transaction and applies only if the approval has `allowAmountScaling: true`.

| | Explicit balances | Precalculated |
| --- | --- | --- |
| Balance specification | manual amounts | computed from the approval |
| Approval scanning | auto-scan for unlisted levels | only the named approval |
| Fits | fixed amounts you control | approvals whose criteria decide amounts and IDs |

See [Prioritized Approvals](../token-standard/concepts/prioritized-approvals.md) and [MsgTransferTokens](../token-standard/messages/msg-transfer-tokens.md).

### TypeScript SDK

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgTransferTokens, UintRangeArray } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });
const myAddress = client.address;

const transfers = [
    {
        from: 'Mint', // From mint address
        toAddresses: [myAddress], // To your address
        balances: [
            {
                tokenIds: [{ start: 1n, end: 100n }],
                ownershipTimes: UintRangeArray.FullRanges(),
                amount: 100n,
            },
        ],
        prioritizedApprovals: [{ approvalId: 'mint-approval', approvalLevel: 'collection', approverAddress: '', version: 0n }],
        onlyCheckPrioritizedCollectionApprovals: true,
        onlyCheckPrioritizedIncomingApprovals: false,
        onlyCheckPrioritizedOutgoingApprovals: false,
        merkleProofs: [],
        ethSignatureProofs: [],
        memo: '',
    },
];

const msg = new MsgTransferTokens({ creator: myAddress, collectionId: '1', transfers });
const result = await client.signAndBroadcast([msg]);
console.log(result.success ? result.txHash : result.error);
```

## 4. Define and Lock Circulating Supply

Supply on BitBadges is not a fixed number. It is whatever the current mint approvals allow, plus whatever new mint approvals the manager can still create. If the manager can add or edit a `Mint` approval, they can raise supply by whatever that approval allows. The `canUpdateCollectionApprovals` permission is what makes supply final.

```ts
const FullTimeRanges = [
    {
        start: '1',
        end: '18446744073709551615',
    },
];
```

Each block below is the `canUpdateCollectionApprovals` value to set inside `collectionPermissions`; the other ten permission arrays stay as in [Create a Collection](create-a-collection.md).

Lock supply forever (fixed cap). Every existing Mint approval stays as it is and no new one can be added:

```ts
const canUpdateCollectionApprovals = [
    {
        fromListId: 'Mint', // Target all mint approvals
        toListId: 'All',
        initiatedByListId: 'All',
        transferTimes: FullTimeRanges,
        tokenIds: FullTimeRanges,
        ownershipTimes: FullTimeRanges,
        approvalId: 'All',
        permanentlyPermittedTimes: [],
        permanentlyForbiddenTimes: FullTimeRanges, // Cannot update mint approvals
    },
];
```

Controlled supply. Only the `initial-mint` approval is locked; the manager can add new ones:

```ts
const canUpdateCollectionApprovals = [
    {
        fromListId: 'Mint',
        toListId: 'All',
        initiatedByListId: 'All',
        transferTimes: FullTimeRanges,
        tokenIds: FullTimeRanges,
        ownershipTimes: FullTimeRanges,
        approvalId: 'initial-mint', // Only lock initial mint approval
        permanentlyPermittedTimes: [],
        permanentlyForbiddenTimes: FullTimeRanges,
    },
];
```

Dynamic supply. The manager can always change mint approvals:

```ts
const canUpdateCollectionApprovals = []; // Soft-enabled, like canAddMoreAliasPaths and canAddMoreCosmosCoinWrapperPaths
```

Lock specific token IDs. Mint approvals for tokens 1 to 100 are final; the manager can still add Mint approvals for other IDs, and post-mint approvals for these:

```ts
const canUpdateCollectionApprovals = [
    {
        fromListId: 'Mint',
        toListId: 'All',
        initiatedByListId: 'All',
        transferTimes: FullTimeRanges,
        tokenIds: [
            {
                start: '1',
                end: '100',
            },
        ],
        ownershipTimes: FullTimeRanges,
        approvalId: 'All',
        permanentlyPermittedTimes: [],
        permanentlyForbiddenTimes: FullTimeRanges,
    },
];
```

More locking patterns are in [Lock Permissions](lock-permissions.md).

## Common Mistakes

- Numbers instead of strings (`"1000"`, not `1000`).
- Missing `overridesFromOutgoingApprovals: true` on a Mint approval.
- No matching incoming approval, auto-approve flag, or collection-level incoming override for the recipient.
- Missing `prioritizedApprovals` in `MsgTransferTokens`. The field must be present, even as `[]`.
- Combining `predeterminedBalances` with `approvalAmounts`.
- More than one `true` in `orderCalculationMethod`.
- Coin transfer override flags set `true` for a standard payment (they are for escrow payouts only).

## Next Steps

- [Set Transferability](set-transferability.md)
- [Lock Permissions](lock-permissions.md)
- [Distribute with Claims](distribute-with-claims.md)
- [MsgTransferTokens](../token-standard/messages/msg-transfer-tokens.md)
