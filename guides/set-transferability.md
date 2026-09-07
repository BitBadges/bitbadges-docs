---
description: "Decide who can transfer, burn, trade, or force-move BitBadges tokens with collection approvals and user-level approvals."
---

# Set transferability

At the end your collection has post-mint approvals (transferable, burnable, admin override, or none) and you know how users set their own incoming and outgoing approvals.

Transferability is the set of approvals a transfer must match at the collection, outgoing, and incoming levels; see [Transferability](../token-standard/concepts/transferability.md). The criteria you can attach to any approval are on [Approval criteria](../token-standard/approval-criteria/README.md).

## 1. Split approvals into mint and post-mint

Keep two groups in `collectionApprovals`:

- Mint approvals: `fromListId: 'Mint'`. They create balances. See [Mint and distribute](mint-and-distribute.md).
- Post-mint approvals: `fromListId: '!Mint'`. They move existing balances.

Two rules:

1. The reserved `All` list includes `Mint`. Never use `All` as `fromListId` on a post-mint approval, or it becomes a mint approval.
2. A `Mint` approval must set `overridesFromOutgoingApprovals: true`, because the Mint address cannot manage its own outgoing approvals.

```ts
const mintApprovals = [
    // Mint approvals with fromListId: 'Mint'
];

const postMintApprovals = [
    // Post-mint approvals with fromListId: '!Mint'
    transferableApproval,
    burnableApproval,
];

const collectionApprovals = [...mintApprovals, ...postMintApprovals];
```

Reserved list IDs are `All`, `Mint`, `!Mint`, `AllWithoutMint`, a `bb1...` address, `!bb1...` (everyone except that address), and colon-separated addresses such as `bb1abc:bb1xyz`. See [Address lists](../token-standard/concepts/address-lists.md).

## 2. Start from the empty criteria template

Every approval carries `approvalCriteria`. This template means "no additional restrictions"; the other examples spread it and override a field or two.

```ts
const EmptyApprovalCriteria = {
    approvalCriteria: {
        // No challenges to be completed
        merkleChallenges: [],
        // No specific balances to check
        predeterminedBalances: {
            manualBalances: [],
            incrementedBalances: {
                startBalances: [],
                incrementTokenIdsBy: '0',
                incrementOwnershipTimesBy: '0',
                durationFromTimestamp: '0',
                allowOverrideTimestamp: false,
                recurringOwnershipTimes: {
                    startTime: '0',
                    intervalLength: '0',
                    chargePeriodLength: '0',
                },
                allowOverrideWithAnyValidToken: false,
                allowAmountScaling: false,
                maxScalingMultiplier: '0',
            },
            orderCalculationMethod: {
                useOverallNumTransfers: false,
                usePerToAddressNumTransfers: false,
                usePerFromAddressNumTransfers: false,
                usePerInitiatedByAddressNumTransfers: false,
                useMerkleChallengeLeafIndex: false,
                challengeTrackerId: '',
            },
        },
        // No approval amounts to check (0 = unlimited)
        approvalAmounts: {
            overallApprovalAmount: '0',
            perToAddressApprovalAmount: '0',
            perFromAddressApprovalAmount: '0',
            perInitiatedByAddressApprovalAmount: '0',
            amountTrackerId:
                'a4ab9bc5e8752842a35a79238de4f627677ceae1d8fa9de44b52416e085f7f11',
            resetTimeIntervals: {
                startTime: '0',
                intervalLength: '0',
            },
        },
        // No max number of transfers to check (0 = unlimited)
        maxNumTransfers: {
            overallMaxNumTransfers: '0',
            perToAddressMaxNumTransfers: '0',
            perFromAddressMaxNumTransfers: '0',
            perInitiatedByAddressMaxNumTransfers: '0',
            amountTrackerId:
                'd711e23dbe57b786dfb2d86d4a6792fb8c9951a18223065ea0c07d424225a738',
            resetTimeIntervals: {
                startTime: '0',
                intervalLength: '0',
            },
        },
        // No coin transfers to execute
        coinTransfers: [],

        // No ETH signature challenges to be completed
        ethSignatureChallenges: [],
        // No dynamic store challenges to be completed
        dynamicStoreChallenges: [],

        // No address matching requirements
        requireToEqualsInitiatedBy: false,
        requireFromEqualsInitiatedBy: false,
        requireToDoesNotEqualInitiatedBy: false,
        requireFromDoesNotEqualInitiatedBy: false,
        // No overrides from outgoing approvals
        overridesFromOutgoingApprovals: false,
        // No overrides to incoming approvals
        overridesToIncomingApprovals: false,
        // No auto deletion options
        autoDeletionOptions: {
            afterOneUse: false,
            afterOverallMaxNumTransfers: false,
        },
        // No user royalties
        userRoyalties: {
            percentage: '0',
            payoutAddress: '',
        },
        // No tokens to check ownership of
        mustOwnTokens: [],
        // No address checks
        senderChecks: {
            mustBeEvmContract: false,
            mustNotBeEvmContract: false,
            mustBeLiquidityPool: false,
            mustNotBeLiquidityPool: false,
        },
        recipientChecks: {
            mustBeEvmContract: false,
            mustNotBeEvmContract: false,
            mustBeLiquidityPool: false,
            mustNotBeLiquidityPool: false,
        },
        initiatorChecks: {
            mustBeEvmContract: false,
            mustNotBeEvmContract: false,
            mustBeLiquidityPool: false,
            mustNotBeLiquidityPool: false,
        },
        // No alternative time checks
        altTimeChecks: {
            offlineHours: [],
            offlineDays: [],
        },
        // No priority requirement
        mustPrioritize: false,
        // No EVM query challenges
        evmQueryChallenges: [],
        // No voting challenges
        votingChallenges: [],
    },
};
```

In the SDK, `approvalCriteria: undefined` on a `CollectionApproval` has the same meaning.

## 3. Add the post-mint approvals you want

### Transferable

Anyone can send to anyone after mint.

```ts
const transferableApproval = new CollectionApproval({
    fromListId: '!Mint', // Excludes the Mint address
    toListId: 'All',
    initiatedByListId: 'All',
    transferTimes: UintRangeArray.FullRanges(),
    ownershipTimes: UintRangeArray.FullRanges(),
    tokenIds: UintRangeArray.FullRanges(),
    approvalId: 'transferable-approval',
    version: 0n,
    approvalCriteria: undefined, // No additional restrictions
});
```

```json
{
  "fromListId": "!Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "approvalId": "transferable-approval",
  "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }]
}
```

Keep `approvalId: "transferable-approval"`. The BitBadges site and the CLI detect free transferability by this ID.

### Burnable

Holders destroy tokens by sending them to the burn address `bb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs7gvmv`, which is the Ethereum null address `0x0000000000000000000000000000000000000000` in BitBadges format. No one holds its key, so tokens sent there are gone.

```ts
const burnableApproval = new CollectionApproval({
    fromListId: '!Mint', // Excludes the Mint address
    toListId: 'bb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs7gvmv', // Burn address (bb-prefixed)
    initiatedByListId: 'All',
    transferTimes: UintRangeArray.FullRanges(),
    ownershipTimes: UintRangeArray.FullRanges(),
    tokenIds: UintRangeArray.FullRanges(),
    approvalId: 'burnable-approval',
    version: 0n,
    approvalCriteria: undefined, // No additional restrictions
});
```

```json
{
  "fromListId": "!Mint",
  "toListId": "bb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs7gvmv",
  "initiatedByListId": "All",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "approvalId": "burnable-approval",
  "uri": "",
  "customData": "",
  "version": "0",
  "approvalCriteria": {
    "predeterminedBalances": {
      "manualBalances": [],
      "incrementedBalances": {
        "startBalances": [],
        "incrementTokenIdsBy": "0",
        "incrementOwnershipTimesBy": "0",
        "allowOverrideTimestamp": false,
        "recurringOwnershipTimes": { "startTime": "0", "intervalLength": "0", "chargePeriodLength": "0" },
        "allowOverrideWithAnyValidToken": false
      },
      "orderCalculationMethod": { "useOverallNumTransfers": false, "usePerToAddressNumTransfers": false, "usePerFromAddressNumTransfers": false, "usePerInitiatedByAddressNumTransfers": false, "useMerkleChallengeLeafIndex": false, "challengeTrackerId": "" }
    },
    "approvalAmounts": { "overallApprovalAmount": "0", "perToAddressApprovalAmount": "0", "perFromAddressApprovalAmount": "0", "perInitiatedByAddressApprovalAmount": "0", "amountTrackerId": "", "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" } },
    "maxNumTransfers": { "overallMaxNumTransfers": "0", "perToAddressMaxNumTransfers": "0", "perFromAddressMaxNumTransfers": "0", "perInitiatedByAddressMaxNumTransfers": "0", "amountTrackerId": "", "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" } },
    "coinTransfers": [],
    "merkleChallenges": [],
    "mustOwnTokens": [],
    "overridesFromOutgoingApprovals": false,
    "overridesToIncomingApprovals": true,
    "mustPrioritize": false
  }
}
```

- `fromListId: "!Mint"`: any holder can burn.
- `toListId`: the burn address as a single-address list.
- `initiatedByListId: "All"`: anyone can initiate (in practice the holder, whose outgoing approvals still apply).
- `overridesToIncomingApprovals: true`: the burn address has no user-level incoming approvals, so the collection approval must override.
- `approvalId: "burnable-approval"`: the site detects burnability by this ID.
- Amounts and transfer counts of `"0"` mean unlimited.

The burnable approval is additive and sits alongside mint and transferable approvals. Do not add it to credit tokens (increment-only by design), soulbound tokens, or subscription tokens (managed by the issuer).

### Admin override

One address can move any token from any address to any address, ignoring both user-level approval sets.

```ts
const approveSelfForcefully = (address: string) => {
    const id = 'complete-admin-control';

    return {
        fromListId: 'Mint',
        toListId: 'All',
        initiatedByListId: address,
        transferTimes: UintRangeArray.FullRanges(),
        tokenIds: UintRangeArray.FullRanges(),
        ownershipTimes: UintRangeArray.FullRanges(),
        approvalId: id,
        version: 0n,
        approvalCriteria: {
            ...EmptyApprovalCriteria,
            overridesFromOutgoingApprovals: true,
            overridesToIncomingApprovals: true,
        },
    };
};
```

{% hint style="warning" %}
This grants complete control over every holder's balance. Give it only to an address you trust, and consider locking `canUpdateCollectionApprovals` so nobody can add one later. To forbid forceful post-mint transfers for the whole collection, set the `noForcefulPostMintTransfers` invariant; see [Invariants](../token-standard/approval-criteria/invariants.md).
{% endhint %}

For the `!Mint` variant (move existing tokens only), change `fromListId` to `'!Mint'`.

### Non-transferable

Add no post-mint approvals. Tokens stay where they were minted. Lock `canUpdateCollectionApprovals` so the manager cannot add one later; see [Lock permissions](lock-permissions.md).

## 4. Make NFTs tradable on the marketplace

The orderbook needs three standards together plus the transferable approval from step 3 with `approvalId: "transferable-approval"`.

```json
{
  "updateStandards": true,
  "standards": ["NFTMarketplace", "NFTs", "NFTPricingDenom:ubadge"]
}
```

- `NFTPricingDenom:<denom>` sets the denom the orderbook displays prices in. Replace `ubadge` with your pricing denom; new collections should use canonical USDC (see [Create a collection](create-a-collection.md)).
- The legacy names `Tradable` and `DefaultDisplayCurrency` still work for existing collections.

Listings and bids are user-level approvals that `bb build listing`, `bb build bid`, `bb nfts list`, and `bb nfts bid` emit for you; see [Trade on the DEX](trade-on-the-dex.md) and [Build](../cli/build.md).

## 5. Set user-level approvals

Users control their own transfers through outgoing and incoming approvals. They use the same shape and criteria as collection approvals with three differences:

- Fixed address lists. Outgoing approvals lock `fromListId` to the user's address; incoming approvals lock `toListId` to the user's address. The message omits the locked field.
- No overrides. User approvals cannot override other levels.
- Only the user can update their own approvals (subject to their user permissions).

Most users never write these. The three `defaultBalances` flags (`autoApproveSelfInitiatedOutgoingTransfers`, `autoApproveSelfInitiatedIncomingTransfers`, `autoApproveAllIncomingTransfers`) cover the common case. See [Transferability](../token-standard/concepts/transferability.md) and [User approval settings](../token-standard/approval-criteria/user-approval-settings.md).

```ts
const userIncomingApproval = {
    fromListId: 'All', // Who may send to me
    initiatedByListId: 'All',
    transferTimes: [{ start: '1', end: '18446744073709551615' }],
    tokenIds: [{ start: '1', end: '100' }],
    ownershipTimes: [{ start: '1', end: '18446744073709551615' }],
    approvalId: 'user-incoming-approval',
    approvalCriteria: {
        ...EmptyApprovalCriteria, // or any criteria from the collection examples
    },
};

const userOutgoingApproval = {
    toListId: 'All', // Who I may send to
    initiatedByListId: 'All',
    transferTimes: [{ start: '1', end: '18446744073709551615' }],
    tokenIds: [{ start: '1', end: '100' }],
    ownershipTimes: [{ start: '1', end: '18446744073709551615' }],
    approvalId: 'user-outgoing-approval',
    approvalCriteria: {
        ...EmptyApprovalCriteria,
    },
};

const updateUserApprovals = {
    creator: 'bb1...', // Your address
    collectionId: '1',
    updateIncomingApprovals: true,
    incomingApprovals: [userIncomingApproval],
    updateOutgoingApprovals: true,
    outgoingApprovals: [userOutgoingApproval],
    // ...
};
```

Raw `MsgUpdateUserApprovals` that sets one outgoing approval: the signer may send tokens 1 to 20 to anyone, one token in total and at most one per initiator, and self-initiated outgoing transfers are auto-approved. Every `update*` flag set to `false` leaves that field untouched, whatever value is passed.

```json
[
    {
        "creator": "bb18el5ug46umcws58m445ql5scgg2n3tzagfecvl",
        "collectionId": "1",
        "updateOutgoingApprovals": true,
        "outgoingApprovals": [
            {
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
                        "end": "20"
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
                "approvalId": "87bc6dd97492b913b3d2b6c91c71b7a2bc98d41a715e49285180e8db9f4ea0bb",
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
                        "overallApprovalAmount": "1",
                        "perToAddressApprovalAmount": "0",
                        "perFromAddressApprovalAmount": "0",
                        "perInitiatedByAddressApprovalAmount": "1",
                        "amountTrackerId": "87bc6dd97492b913b3d2b6c91c71b7a2bc98d41a715e49285180e8db9f4ea0bb",
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
                        "amountTrackerId": "fe1ffc5f6ff98f0e41b097f33623248868d367dc36dd7f22b2717b61b9d7c91c",
                        "resetTimeIntervals": {
                            "startTime": "0",
                            "intervalLength": "0"
                        }
                    },
                    "coinTransfers": [],
                    "requireToEqualsInitiatedBy": false,
                    "requireToDoesNotEqualInitiatedBy": false,
                    "autoDeletionOptions": {
                        "afterOneUse": false,
                        "afterOverallMaxNumTransfers": false
                    },
                    "mustOwnTokens": [],
                    "dynamicStoreChallenges": [],
                    "votingChallenges": [],
                    "evmQueryChallenges": [],
                    "userRoyalties": {
                        "percentage": "0",
                        "payoutAddress": ""
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
        "updateIncomingApprovals": false,
        "incomingApprovals": [],
        "updateAutoApproveSelfInitiatedOutgoingTransfers": true,
        "autoApproveSelfInitiatedOutgoingTransfers": true,
        "updateAutoApproveSelfInitiatedIncomingTransfers": false,
        "autoApproveSelfInitiatedIncomingTransfers": false,
        "updateAutoApproveAllIncomingTransfers": false,
        "autoApproveAllIncomingTransfers": false,
        "updateUserPermissions": false,
        "userPermissions": {
            "canUpdateOutgoingApprovals": [],
            "canUpdateIncomingApprovals": [],
            "canUpdateAutoApproveSelfInitiatedOutgoingTransfers": [],
            "canUpdateAutoApproveSelfInitiatedIncomingTransfers": [],
            "canUpdateAutoApproveAllIncomingTransfers": []
        }
    }
]
```

Outgoing approvals have no `senderChecks` and no `overrides*` fields, since the sender is fixed and user approvals cannot override.

Broadcast with `bb deploy --msg-file ./update-approvals.json --browser`. The single-approval variants `MsgSetOutgoingApproval`, `MsgSetIncomingApproval`, `MsgDeleteOutgoingApproval`, and `MsgDeleteIncomingApproval` edit one approval without resending the whole set; see [Messages](../token-standard/messages/README.md).

## 6. Deploy the change

Collection approvals go in `collectionApprovals` at creation, or later through `MsgUniversalUpdateCollection` with `updateCollectionApprovals: true` (allowed only where `canUpdateCollectionApprovals` is not frozen).

```bash
bb check ./update.json
bb deploy --msg-file ./update.json --browser
```

Other criteria worth attaching to post-mint approvals: [Address checks](../token-standard/approval-criteria/address-checks.md) for contract and pool restrictions, [EVM query challenges](../token-standard/approval-criteria/evm-query-challenges.md) for token gating by contract state, and [Token ownership](../token-standard/approval-criteria/token-ownership.md) for holder-only transfers.

## Next steps

- [Lock permissions](lock-permissions.md)
- [Prioritized approvals](../token-standard/concepts/prioritized-approvals.md)
- [MsgUpdateUserApprovals](../token-standard/messages/msg-update-user-approvals.md)
- [Trade on the DEX](trade-on-the-dex.md)
