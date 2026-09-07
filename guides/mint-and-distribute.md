---
description: "Mint BitBadges tokens to yourself or to the public, charge for mints, pay out from escrow, and control circulating supply."
---

# Mint and distribute

At the end your collection has the mint approvals it needs, tokens are in wallets, and the supply is as fixed or as open as you decided.

Minting is a transfer from the reserved `Mint` address, allowed by a collection approval; see [Minting and supply](../token-standard/concepts/minting-and-supply.md). For code-, allowlist-, or social-gated distribution, use [Distribute with claims](distribute-with-claims.md) instead.

Rules that apply to every mint approval:

- `fromListId: "Mint"`.
- `overridesFromOutgoingApprovals: true`. The Mint address has no outgoing approvals to check. Without it, minting fails silently.
- `autoApproveAllIncomingTransfers: true` in `defaultBalances` for public-mint collections. Otherwise recipients cannot receive tokens.
- `predeterminedBalances` and `approvalAmounts` are incompatible; use one or the other.
- `orderCalculationMethod` must have exactly one method set to `true` when `predeterminedBalances` is used (default `useOverallNumTransfers`).
- `amountTrackerId` is required when `maxNumTransfers` or `approvalAmounts` is set.
- All numbers are strings.

## 1. Choose a mint pattern

| Pattern | `initiatedByListId` | Distinctive criteria |
| --- | --- | --- |
| Creator-only mint | your address | none; you mint any amount later |
| Public mint, sequential IDs | `"All"` | `predeterminedBalances.incrementedBalances` with `incrementTokenIdsBy: "1"` |
| Paid mint | `"All"` | `coinTransfers` with both override flags `false` |
| Free mint with payout | `"All"` | `coinTransfers` with both override flags `true`, funded via `mintEscrowCoinsToTransfer` |
| Capped mint | any | `maxNumTransfers` or `approvalAmounts` with an `amountTrackerId` |
| One-shot approval | any | `autoDeletionOptions.afterOneUse: true` |

### Creator-only mint

```ts
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
    collectionApprovals: [mintApproval, ...otherApprovals],
};
```

`EmptyApprovalCriteria` is the no-restrictions template in [Set transferability](set-transferability.md). `BaseCollectionDetails` is from [Create a collection](create-a-collection.md).

### Paid mint

```json
{
  "approvalCriteria": {
    "coinTransfers": [{
      "to": "bb1creator...",
      "coins": [{ "denom": "ubadge", "amount": "5000000000" }],
      "overrideFromWithApproverAddress": false,
      "overrideToWithInitiator": false
    }]
  }
}
```

Both override flags are `false` for a standard payment: the initiator pays, and `to` (the creator or approver) receives. See [Coin transfers](../token-standard/approval-criteria/coin-transfers.md).

### Sequential token IDs

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
        "allowOverrideWithAnyValidToken": false
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

For one-time or fixed-use approvals, prefer `incrementedBalances` with zero increments (`incrementTokenIdsBy: "0"`, `incrementOwnershipTimesBy: "0"`) over `maxNumTransfers` alone. The BitBadges site detects `predeterminedBalances` and shows users the exact tokens they will receive. Avoid `manualBalances`. See [Predetermined balances](../token-standard/approval-criteria/predetermined-balances.md).

### Transfer limits

```json
{
  "approvalCriteria": {
    "maxNumTransfers": {
      "overallMaxNumTransfers": "100",
      "perInitiatedByAddressMaxNumTransfers": "1",
      "perToAddressMaxNumTransfers": "0",
      "perFromAddressMaxNumTransfers": "0",
      "amountTrackerId": "mint-tracker-id",
      "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
    }
  }
}
```

`"0"` means unlimited. See [Approval trackers](../token-standard/approval-criteria/approval-trackers.md).

### Auto-deletion

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

See [Auto-deletion](../token-standard/approval-criteria/auto-deletion.md).

### Free mint with a payout from escrow

The mint escrow address is a reserved address derived from the collection ID. It holds native coins and has no private key; only collection approvals can move funds out of it. Fund it at creation with `mintEscrowCoinsToTransfer` (the address depends on the collection ID, so genesis is the convenient moment) or top it up later.

```json
{
  "collectionId": "0",
  "mintEscrowCoinsToTransfer": [{ "denom": "ubadge", "amount": "10000000000" }],
  "collectionApprovals": [{
    "fromListId": "Mint",
    "toListId": "All",
    "initiatedByListId": "All",
    "approvalId": "free-mint",
    "approvalCriteria": {
      "coinTransfers": [{
        "to": "bb1user...",
        "coins": [{ "denom": "ubadge", "amount": "1000000000" }],
        "overrideFromWithApproverAddress": true,
        "overrideToWithInitiator": true
      }],
      "overridesFromOutgoingApprovals": true
    }
  }]
}
```

- `overrideFromWithApproverAddress: true` makes the mint escrow the payer.
- `overrideToWithInitiator: true` pays whoever initiated the mint, ignoring `to`.

### Complete example: public paid mint with sequential IDs and caps

```json
{
  "collectionApprovals": [{
    "fromListId": "Mint",
    "toListId": "All",
    "initiatedByListId": "All",
    "approvalId": "public-mint-5-badge",
    "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
    "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "approvalCriteria": {
      "overridesFromOutgoingApprovals": true,
      "coinTransfers": [{
        "to": "bb1creator...",
        "coins": [{ "denom": "ubadge", "amount": "5000000000" }],
        "overrideFromWithApproverAddress": false,
        "overrideToWithInitiator": false
      }],
      "predeterminedBalances": {
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
        },
        "manualBalances": []
      },
      "maxNumTransfers": {
        "overallMaxNumTransfers": "1000",
        "perInitiatedByAddressMaxNumTransfers": "1",
        "perToAddressMaxNumTransfers": "0",
        "perFromAddressMaxNumTransfers": "0",
        "amountTrackerId": "public-mint-tracker",
        "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
      }
    }
  }]
}
```

To add a mint approval after creation, the collection's `canUpdateCollectionApprovals` permission must not be frozen for `Mint`, and you send the approval in a separate `MsgUniversalUpdateCollection`. See [Lock permissions](lock-permissions.md).

## 2. Mint at creation time

One transaction can carry the `MsgUniversalUpdateCollection` that creates the collection plus one or more `MsgTransferTokens`. Every transfer uses `collectionId: "0"`, which refers to the collection created by the first message in the same transaction.

```json
{
  "typeUrl": "/tokenization.MsgTransferTokens",
  "value": {
    "creator": "bb1...",
    "collectionId": "0",
    "transfers": [{
      "from": "Mint",
      "toAddresses": ["bb1recipientaddress..."],
      "balances": [{
        "amount": "1",
        "tokenIds": [{ "start": "1", "end": "1" }],
        "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }]
      }],
      "prioritizedApprovals": [{
        "approvalId": "the-mint-approval-id",
        "approvalLevel": "collection",
        "approverAddress": "",
        "version": "0"
      }],
      "onlyCheckPrioritizedCollectionApprovals": false,
      "onlyCheckPrioritizedIncomingApprovals": false,
      "onlyCheckPrioritizedOutgoingApprovals": false,
      "memo": ""
    }]
  }
}
```

Use this when you want tokens in wallets right after creation: minting to yourself or others, an initial allocation, or a manager-only collection where the manager holds everything. Do not add transfer messages to public-mint, subscription, or smart token collections; those mint later through their approvals.

Rules:

1. `prioritizedApprovals` must be present, even as `[]`. Match `approvalId` to one of the collection's `collectionApprovals`.
2. `from: "Mint"` mints new tokens. A `bb1...` address makes a peer-to-peer transfer.
3. The signer (`creator`) is the initiator, so the collection needs an approval that allows this address as `initiatedBy`.
4. All numbers are strings.

For expiring tokens, set `ownershipTimes` to a window in milliseconds since the epoch. Five minutes from now is the current timestamp plus `5 * 60 * 1000`:

```json
"ownershipTimes": [{
  "start": "1706000000000",
  "end": "1706000300000"
}]
```

MCP builder tool sessions edit these messages with patch operations: `add_transfer` (`{ op: "add_transfer", transfer: { transfers: [...] } }`) appends a `MsgTransferTokens`, `remove_transfer` (`{ op: "remove_transfer", index: 0 }`) removes one by 0-based index among the transfer messages, and `update_transfer` (`{ op: "update_transfer", index: 0, changes: {...} }`) deep-merges changes. See [MCP tools](../agents/mcp-tools.md).

## 3. Mint after creation

### bb CLI

`bb build transfer` fetches the collection, the sender's outgoing approvals, and the recipient's incoming approvals, then walks you through the choices. It needs `BITBADGES_API_KEY` (env var or `bb settings set apiKey ...`).

```bash
# Interactive walkthrough: prompts for everything
bb build transfer

# Flag-driven: still prompts for the approval-selection step
bb build transfer --collection-id 1 --from Mint --to bb1xyz... --amount 5

# Fully non-interactive: no prioritized approvals (chain matches), no
# precalculation, default amount=1, default tokenIds=all valid
bb build transfer --yes --collection-id 1 --from Mint --to bb1xyz... | bb deploy --browser
```

| Flag | Required | Description |
| --- | --- | --- |
| `--collection-id <id>` | No | Collection ID (prompts if omitted) |
| `--from <address>` | No | Sender: `bb1...`, `0x...`, or `Mint` for minting (prompts if omitted) |
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

### Raw JSON: explicit balances

Mint token ID 1 of collection 20 to the creator, naming the collection approval to use. `onlyCheckPrioritizedCollectionApprovals: true` skips auto-scanning of other collection approvals; the user-level approvals still auto-scan.

```json
[
    {
        "creator": "bb18el5ug46umcws58m445ql5scgg2n3tzagfecvl",
        "collectionId": "20",
        "transfers": [
            {
                "from": "Mint",
                "toAddresses": ["bb18el5ug46umcws58m445ql5scgg2n3tzagfecvl"],
                "balances": [
                    {
                        "amount": "1",
                        "ownershipTimes": [
                            {
                                "start": "1",
                                "end": "18446744073709551615"
                            }
                        ],
                        "tokenIds": [
                            {
                                "start": "1",
                                "end": "1"
                            }
                        ]
                    }
                ],
                "precalculateBalancesFromApproval": {
                    "approvalId": "",
                    "approvalLevel": "",
                    "approverAddress": "",
                    "version": "0"
                },
                "merkleProofs": [],
                "ethSignatureProofs": [],
                "memo": "",
                "prioritizedApprovals": [
                    {
                        "approvalId": "4a1ed47db7bc0f9f7174eab12aa9b8c9b9e4e37474ca2264668cf8e1b1598dde",
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
]
```

### Raw JSON: precalculated balances

When the approval has `predeterminedBalances`, leave `balances` empty and let the chain compute them from the approval. Only the named approval is checked; no other approval is scanned. This is how approvals with side effects (Merkle challenges, ETH signature challenges, payments) are used deliberately, and it shows the approval version being pinned.

```json
[
    {
        "creator": "bb18el5ug46umcws58m445ql5scgg2n3tzagfecvl",
        "collectionId": "20",
        "transfers": [
            {
                "from": "Mint",
                "toAddresses": ["bb18el5ug46umcws58m445ql5scgg2n3tzagfecvl"],
                "balances": [],
                "precalculateBalancesFromApproval": {
                    "approvalId": "fd1cef5941fb08487ecc1038af09fb29a6d7d40a89d8e4889c9c954978aa7e41",
                    "approvalLevel": "collection",
                    "approverAddress": "",
                    "version": "0",
                    "precalculationOptions": {
                        "overrideTimestamp": "0",
                        "tokenIdsOverride": []
                    }
                },
                "merkleProofs": [],
                "ethSignatureProofs": [],
                "memo": "",
                "prioritizedApprovals": [
                    {
                        "approvalId": "fd1cef5941fb08487ecc1038af09fb29a6d7d40a89d8e4889c9c954978aa7e41",
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
]
```

- `precalculationOptions.overrideTimestamp: "0"` uses the current time. It applies only if the approval has `allowOverrideTimestamp: true`.
- `precalculationOptions.tokenIdsOverride: []` uses the approval's own token IDs. It applies only if the approval has `allowOverrideWithAnyValidToken: true`.

| | Explicit balances | Precalculated |
| --- | --- | --- |
| Balance specification | manual amounts | computed from the approval |
| Approval scanning | auto-scan for unlisted levels | only the named approval |
| Fits | fixed amounts you control | approvals whose criteria decide amounts and IDs |

See [Prioritized approvals](../token-standard/concepts/prioritized-approvals.md) and [MsgTransferTokens](../token-standard/messages/msg-transfer-tokens.md).

### TypeScript SDK

```ts
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
        merkleProofs: [],
        ethSignatureProofs: [],
        memo: '',
    },
];

const msg = MsgTransferTokens.create({ creator: myAddress, collectionId: '1', transfers });
await client.signAndBroadcast([msg]);
```

## 4. Define and lock circulating supply

Supply on BitBadges is not a fixed number. It is whatever the current mint approvals allow, plus whatever new mint approvals the manager can still create. If the manager can add or edit a `Mint` approval, they can raise supply by whatever that approval allows. The `canUpdateCollectionApprovals` permission is what makes supply final.

```ts
const FullTimeRanges = [
    {
        start: '1',
        end: '18446744073709551615',
    },
];
```

Lock supply forever (fixed cap). Every existing Mint approval stays as it is and no new one can be added:

```ts
const collectionPermissions = {
    // ... other permissions
    canUpdateCollectionApprovals: [
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
    ],
};
```

Controlled supply. Only the `initial-mint` approval is locked; the manager can add new ones:

```ts
const collectionPermissions = {
    // ... other permissions
    canUpdateCollectionApprovals: [
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
    ],
};
```

Dynamic supply. The manager can always change mint approvals:

```ts
const collectionPermissions = {
    // ... other permissions
    canUpdateCollectionApprovals: [], // Soft-enabled
    canAddMoreAliasPaths: [],
    canAddMoreCosmosCoinWrapperPaths: [],
};
```

Lock specific token IDs. Mint approvals for tokens 1 to 100 are final; the manager can still add Mint approvals for other IDs, and post-mint approvals for these:

```ts
const collectionPermissions = {
    // ... other permissions
    canUpdateCollectionApprovals: [
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
    ],
};
```

More locking patterns are in [Lock permissions](lock-permissions.md).

## Common mistakes

- Numbers instead of strings (`"1000"`, not `1000`).
- Missing `overridesFromOutgoingApprovals: true` on a Mint approval.
- Missing `autoApproveAllIncomingTransfers: true` in `defaultBalances` for public mints.
- Missing `prioritizedApprovals` in `MsgTransferTokens`. The field must be present, even as `[]`.
- Combining `predeterminedBalances` with `approvalAmounts`.
- More than one `true` in `orderCalculationMethod`.
- Coin transfer override flags set `true` for a standard payment (they are for escrow payouts only).

## Next steps

- [Set transferability](set-transferability.md)
- [Lock permissions](lock-permissions.md)
- [Distribute with claims](distribute-with-claims.md)
- [MsgTransferTokens](../token-standard/messages/msg-transfer-tokens.md)
