---
description: "Decide who can transfer, burn, trade, or force-move BitBadges tokens with collection approvals and user-level approvals."
---

# Set Transferability

At the end your collection has post-mint approvals (transferable, burnable, admin override, or none) and you know how users set their own incoming and outgoing approvals.

Transferability is the set of approvals a transfer must match at the collection, outgoing, and incoming levels; see [Transferability](../token-standard/concepts/transferability.md). The criteria you can attach to any approval are on [Approval Criteria](../token-standard/approval-criteria/README.md).

## 1. Split Approvals into Mint and Post-Mint

Keep two groups in `collectionApprovals`:

- Mint approvals: `fromListId: 'Mint'`. They create balances. See [Mint and Distribute](mint-and-distribute.md).
- Post-mint approvals: `fromListId: '!Mint'`. They move existing balances.

Two rules:

1. The reserved `All` list includes `Mint`. Never use `All` as `fromListId` on a post-mint approval, or it becomes a mint approval.
2. A `Mint` approval must set `overridesFromOutgoingApprovals: true`, because the Mint address cannot manage its own outgoing approvals.

```ts
const mintApprovals = [mintApproval]; // fromListId: 'Mint', from Mint and distribute

const postMintApprovals = [transferableApproval, burnableApproval]; // fromListId: '!Mint', step 3

const collectionApprovals = [...mintApprovals, ...postMintApprovals];
```

Reserved list IDs are `All`, `Mint`, `!Mint`, `AllWithoutMint`, one address such as `bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d`, `!bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d` (everyone except that address), and colon-separated addresses such as `bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d:bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue`. See [Address Lists](../token-standard/concepts/address-lists.md).

{% hint style="info" %}
**Ask your agent.** With the MCP builder tools installed, paste one of these:

```text
Make collection 1 transferable and burnable after mint, run the review, and give me the review link.
```

```text
Add an admin override approval on collection 1 for bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d that can move any token, and flag anything risky in the review.
```
{% endhint %}

## 2. Start from the Empty Criteria Template

Every approval carries `approvalCriteria`. This template means "no additional restrictions"; the other examples spread it and override a field or two. Amounts and counts of `'0'` mean unlimited; `amountTrackerId` is only needed when a limit is set.

```ts
// Every field at its proto default. Spread it, then override what you need.
const EmptyApprovalCriteria = {
  merkleChallenges: [],
  predeterminedBalances: {
    manualBalances: [],
    incrementedBalances: {
      startBalances: [],
      incrementTokenIdsBy: '0',
      incrementOwnershipTimesBy: '0',
      durationFromTimestamp: '0',
      allowOverrideTimestamp: false,
      recurringOwnershipTimes: { startTime: '0', intervalLength: '0', chargePeriodLength: '0' },
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
    }
  },
  approvalAmounts: {
    overallApprovalAmount: '0',
    perToAddressApprovalAmount: '0',
    perFromAddressApprovalAmount: '0',
    perInitiatedByAddressApprovalAmount: '0',
    amountTrackerId: '',
    resetTimeIntervals: { startTime: '0', intervalLength: '0' },
  },
  maxNumTransfers: {
    overallMaxNumTransfers: '0',
    perToAddressMaxNumTransfers: '0',
    perFromAddressMaxNumTransfers: '0',
    perInitiatedByAddressMaxNumTransfers: '0',
    amountTrackerId: '',
    resetTimeIntervals: { startTime: '0', intervalLength: '0' },
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
    allowPurgeIfExpired: false,
  },
  mustOwnTokens: [],
  dynamicStoreChallenges: [],
  ethSignatureChallenges: [],
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
  altTimeChecks: {
    offlineHours: [],
    offlineDays: [],
    offlineMonths: [],
    offlineDaysOfMonth: [],
    offlineWeeksOfYear: [],
    timezoneOffsetMinutes: '0',
    timezoneOffsetNegative: false,
  },
  mustPrioritize: false,
  votingChallenges: [],
  allowBackedMinting: false,
  allowSpecialWrapping: false,
  evmQueryChallenges: [],
  userApprovalSettings: {
    allowedDenoms: [],
    disableUserCoinTransfers: false,
    userRoyalties: { percentage: '0', payoutAddress: '' },
  }
};
```

In the SDK, `approvalCriteria: undefined` on a `CollectionApproval` has the same meaning.

## 3. Add the Post-Mint Approvals You Want

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

```json fold=11-20,22-40,42-48,50-101
{
  "fromListId": "!Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "uri": "",
  "customData": "",
  "approvalId": "transferable-approval",
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
```

:::widget{name="transferability-row" caption="The transferable approval as the transferability tab lists it: all except Mint can send to anyone, with no extra criteria."}
{
  "approvalId": "transferable-approval",
  "fromListId": "!Mint",
  "toListId": "All",
  "initiatedByListId": "All"
}
:::

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

```json fold=11-20,22-40,42-48,50-56,58-101
{
  "fromListId": "!Mint",
  "toListId": "bb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs7gvmv",
  "initiatedByListId": "All",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "uri": "",
  "customData": "",
  "approvalId": "burnable-approval",
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
}
```

:::widget{name="transferability-row" caption="The burnable approval: any holder can send to the burn address, which nobody controls."}
{
  "approvalId": "burnable-approval",
  "fromListId": "!Mint",
  "toListId": "bb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs7gvmv",
  "initiatedByListId": "All"
}
:::

- `fromListId: "!Mint"`: any holder can burn.
- `toListId`: the burn address as a single-address list.
- `initiatedByListId: "All"`: anyone can initiate (in practice the holder, whose outgoing approvals still apply).
- `overridesToIncomingApprovals: true`: the burn address has no user-level incoming approvals, so the collection approval must override.
- `approvalId: "burnable-approval"`: the site detects burnability by this ID.
- Amounts and transfer counts of `"0"` mean unlimited.

The burnable approval is additive and sits alongside mint and transferable approvals. Do not add it to credit tokens (increment-only by design), soulbound tokens, or subscription tokens (managed by the issuer).

### Admin Override

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

Add no post-mint approvals. Tokens stay where they were minted. Lock `canUpdateCollectionApprovals` so the manager cannot add one later; see [Lock Permissions](lock-permissions.md).

## 4. Make NFTs Tradable on the Marketplace

The orderbook needs three standards together plus the transferable approval from step 3 with `approvalId: "transferable-approval"`. `MsgSetStandards` replaces the list on an existing collection; at creation, or in `MsgUniversalUpdateCollection` with `updateStandards: true`, set the same `standards` array.

```json
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "1",
  "standards": ["NFTMarketplace", "NFTs", "NFTPricingDenom:ubadge"],
  "canUpdateStandards": []
}
```

- `NFTPricingDenom:<denom>` sets the denom the orderbook displays prices in. Replace `ubadge` with your pricing denom; new collections should use canonical USDC (see [Create a Collection](create-a-collection.md)).
- The legacy names `Tradable` and `DefaultDisplayCurrency` still work for existing collections.

Listings and bids are user-level approvals that `bb build listing`, `bb build bid`, `bb nfts list`, and `bb nfts bid` emit for you; see [Trade on the DEX](trade-on-the-dex.md) and [Build](../cli/build.md).

## 5. Set User-Level Approvals

Users control their own transfers through outgoing and incoming approvals. They use the same shape and criteria as collection approvals with three differences:

- Fixed address lists. Outgoing approvals lock `fromListId` to the user's address; incoming approvals lock `toListId` to the user's address. The message omits the locked field.
- No overrides. User approvals cannot override other levels.
- Only the user can update their own approvals (subject to their user permissions).

Most users never write these. The three `defaultBalances` flags (`autoApproveSelfInitiatedOutgoingTransfers`, `autoApproveSelfInitiatedIncomingTransfers`, `autoApproveAllIncomingTransfers`) cover the common case. See [Transferability](../token-standard/concepts/transferability.md) and [User Approval Settings](../token-standard/approval-criteria/user-approval-settings.md).

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
    creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d', // Your address
    collectionId: '1',
    updateIncomingApprovals: true,
    incomingApprovals: [userIncomingApproval],
    updateOutgoingApprovals: true,
    outgoingApprovals: [userOutgoingApproval],
    // Flags left false keep the current value
    updateAutoApproveSelfInitiatedOutgoingTransfers: false,
    autoApproveSelfInitiatedOutgoingTransfers: false,
    updateAutoApproveSelfInitiatedIncomingTransfers: false,
    autoApproveSelfInitiatedIncomingTransfers: false,
    updateAutoApproveAllIncomingTransfers: false,
    autoApproveAllIncomingTransfers: false,
    updateUserPermissions: false,
    userPermissions: {
        canUpdateOutgoingApprovals: [],
        canUpdateIncomingApprovals: [],
        canUpdateAutoApproveSelfInitiatedOutgoingTransfers: [],
        canUpdateAutoApproveSelfInitiatedIncomingTransfers: [],
        canUpdateAutoApproveAllIncomingTransfers: [],
    },
};
```

Raw `MsgUpdateUserApprovals` that sets one outgoing approval: the signer may send tokens 1 to 20 to anyone, one token in total and at most one per initiator, and self-initiated outgoing transfers are auto-approved. Every `update*` flag set to `false` leaves that field untouched, whatever value is passed.

```json fold=15-24,26-39,46-51,54-96,99-110
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "1",
  "updateOutgoingApprovals": true,
  "outgoingApprovals": [
    {
      "toListId": "All",
      "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "tokenIds": [{ "start": "1", "end": "20" }],
      "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "uri": "",
      "customData": "",
      "approvalId": "user-outgoing-approval",
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
          "perInitiatedByAddressApprovalAmount": "1",
          "amountTrackerId": "user-outgoing-approval",
          "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
        },
        "maxNumTransfers": {
          "overallMaxNumTransfers": "0",
          "perToAddressMaxNumTransfers": "0",
          "perFromAddressMaxNumTransfers": "0",
          "perInitiatedByAddressMaxNumTransfers": "0",
          "amountTrackerId": "user-outgoing-approval",
          "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
        },
        "coinTransfers": [],
        "requireToEqualsInitiatedBy": false,
        "requireToDoesNotEqualInitiatedBy": false,
        "autoDeletionOptions": {
          "afterOneUse": false,
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
        "mustPrioritize": false,
        "votingChallenges": [],
        "evmQueryChallenges": []
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
```

:::widget{name="transferability-row" caption="The outgoing approval as the signer's account page lists it: tokens 1 to 20 to anyone, one in total and one per initiator."}
{
  "approvalId": "user-outgoing-approval",
  "level": "outgoing",
  "fromListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "toListId": "All",
  "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "tokenIds": [
    {
      "start": "1",
      "end": "20"
    }
  ],
  "criteria": [
    "1 overall",
    "1 per initiator"
  ]
}
:::

Outgoing approvals have no `senderChecks` and no `overrides*` fields, since the sender is fixed and user approvals cannot override.

Broadcast with `bb deploy --msg-file ./update-approvals.json --browser`. The single-approval variants `MsgSetOutgoingApproval`, `MsgSetIncomingApproval`, `MsgDeleteOutgoingApproval`, and `MsgDeleteIncomingApproval` edit one approval without resending the whole set; see [Messages](../token-standard/messages/README.md).

## 6. Deploy the Change

Collection approvals go in `collectionApprovals` at creation, or later through `MsgUniversalUpdateCollection` with `updateCollectionApprovals: true` (allowed only where `canUpdateCollectionApprovals` is not frozen).

```bash
bb check ./update.json
bb deploy --msg-file ./update.json --browser
```

Other criteria worth attaching to post-mint approvals: [Address Checks](../token-standard/approval-criteria/address-checks.md) for contract and pool restrictions, [EVM Query Challenges](../token-standard/approval-criteria/evm-query-challenges.md) for token gating by contract state, and [Token Ownership](../token-standard/approval-criteria/token-ownership.md) for holder-only transfers.

## Next Steps

- [Lock Permissions](lock-permissions.md)
- [Prioritized Approvals](../token-standard/concepts/prioritized-approvals.md)
- [MsgUpdateUserApprovals](../token-standard/messages/msg-update-user-approvals.md)
- [Trade on the DEX](trade-on-the-dex.md)
