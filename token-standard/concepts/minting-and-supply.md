---
description: "The reserved Mint address, how circulating supply is defined, and how to cap or leave open the supply of a collection."
---

# Minting and supply

Every mint is a transfer from the reserved `"Mint"` address. Circulating supply is whatever has left that address, so mint approvals and the permission to change them are the supply policy.

## Shape

```ts
const transferMsg: MsgTransferTokens = {
  from: 'Mint',
  toAddresses: ['bb1...'],
  balances: [
    {
      amount: 1n,
      tokenIds: [{ start: 1n, end: 1n }],
      ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
    },
  ],
  // ... other fields
};
```

```ts
const mintApproval: CollectionApproval<bigint> = {
  fromListId: 'Mint',
  toListId: 'All',
  initiatedByListId: 'All',
  transferTimes: [{ start: 1n, end: 18446744073709551615n }],
  tokenIds: [{ start: 1n, end: 18446744073709551615n }],
  ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
  approvalId: 'mint-approval',
  version: 0n,
  approvalCriteria: {
    overridesFromOutgoingApprovals: true, // Required for Mint
    // ... other criteria
  },
};
```

| Term | Meaning |
| --- | --- |
| `"Mint"` | Reserved sender with unlimited balance of every token ID. Cannot receive tokens. |
| mint approval | A collection approval with `fromListId: "Mint"`. |
| circulating supply | Cumulative total transferred out of `"Mint"`. Not a stored field. |
| `mintEscrowAddress` | A generated `bb1` address that holds `x/bank` coins on behalf of `"Mint"`. |

## How it works

### The Mint address

`"Mint"` has no key pair and no user-level approvals. Any transfer from it creates tokens. Because it cannot set its own outgoing approvals, every mint approval must set `overridesFromOutgoingApprovals: true`, or no transfer from it can match.

### The manager controls the flow

The manager controls minting through two things:

- the mint approvals themselves (`collectionApprovals` where `fromListId` is `"Mint"`)
- the permission to change them (`collectionPermissions.canUpdateCollectionApprovals`)

Approvals define what transfers are allowed. Minting happens only when someone executes a matching transfer. Permissions define whether the approvals can change.

```ts
const collection: TokenCollection<bigint> = {
  manager: 'bb1...',
  collectionApprovals: [
    {
      fromListId: 'Mint',
      toListId: 'All',
      initiatedByListId: 'All',
      transferTimes: [{ start: 1n, end: 18446744073709551615n }],
      tokenIds: [{ start: 1n, end: 18446744073709551615n }],
      ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
      approvalId: 'mint-approval',
      version: 0n,
      // ... other fields
    },
  ],
  collectionPermissions: {
    canUpdateCollectionApprovals: [
      {
        fromListId: 'Mint',
        toListId: 'All',
        initiatedByListId: 'All',
        transferTimes: [{ start: 1n, end: 18446744073709551615n }],
        tokenIds: [{ start: 1n, end: 18446744073709551615n }],
        ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
        approvalId: 'All',
        permanentlyPermittedTimes: [],
        permanentlyForbiddenTimes: [{ start: 1n, end: 18446744073709551615n }], // Locks it forever
      },
    ],
    // ... other permission fields
  },
};
```

To lock minting, forbid updates to every Mint approval forever. The current approvals then freeze.

### Two supply strategies

**Mint at genesis, then lock.** Create the collection with a mint approval, mint everything you will ever need to yourself with `MsgTransferTokens`, then forbid mint approval updates. Result: fixed supply. Distribution is then governed by post-mint approvals.

**Keep Mint as an escrow.** Create the collection with mint approvals and keep the permission to edit them. Result: elastic supply. Current approvals bound what can be minted now; the manager can widen them later.

### Supply caps live in approvals

Approval criteria on a mint approval decide who can mint, when, and how much:

```ts
const mintApproval: CollectionApproval<bigint> = {
  fromListId: 'Mint',
  toListId: 'All',
  initiatedByListId: 'All',
  transferTimes: [{ start: 1n, end: 18446744073709551615n }],
  tokenIds: [{ start: 1n, end: 18446744073709551615n }],
  ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
  approvalId: 'supply-control',
  version: 0n,
  approvalCriteria: {
    maxNumTransfers: {
      overallMaxNumTransfers: 1000n,
      perFromAddressMaxNumTransfers: 0n,
      perToAddressMaxNumTransfers: 0n,
      perInitiatedByAddressMaxNumTransfers: 0n,
      amountTrackerId: 'supply-control',
      resetTimeIntervals: null,
    },
    overridesFromOutgoingApprovals: true,
    // ... other criteria
  },
};
```

The `maxSupplyPerId` [invariant](../approval-criteria/invariants.md) adds a hard per-ID cap as a sanity check. It does not replace approval design.

### The supply cap bypass

A cap in the current approvals is not a cap if the manager can still edit approvals.

```text
Collection: "Limited Edition"
Current supply: 500 / 1,000

Current mint approval:
  allows 500 more
  blocks anything beyond

Manager permission:
  canUpdateCollectionApprovals: neutral (can still update)
```

From the outside, 500 more can be minted. In reality the manager can replace the approval with an unlimited one. To cap supply, lock both the current approvals and the permission to update them.

{% hint style="warning" %}
Never put `"Mint"` in the same list as other senders. `"All"` includes `"Mint"`. Use `"Mint"` for mint approvals and `"!Mint"` (or `"AllWithoutMint"`) for post-mint approvals.
{% endhint %}

```ts
// Wrong: mixes Mint with every other sender
const badApproval: CollectionApproval<bigint> = {
  fromListId: 'All',
  toListId: 'All',
  initiatedByListId: 'All',
  transferTimes: [{ start: 1n, end: 18446744073709551615n }],
  tokenIds: [{ start: 1n, end: 18446744073709551615n }],
  ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
  approvalId: 'bad-approval',
  version: 0n,
  // ... other fields
};

// Right: one approval for minting, one for everything after
const mintApproval: CollectionApproval<bigint> = {
  fromListId: 'Mint',
  toListId: 'All',
  initiatedByListId: 'All',
  transferTimes: [{ start: 1n, end: 18446744073709551615n }],
  tokenIds: [{ start: 1n, end: 18446744073709551615n }],
  ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
  approvalId: 'mint-only',
  version: 0n,
  // ... other fields
};

const postMintApproval: CollectionApproval<bigint> = {
  fromListId: '!Mint',
  toListId: 'All',
  initiatedByListId: 'All',
  transferTimes: [{ start: 1n, end: 18446744073709551615n }],
  tokenIds: [{ start: 1n, end: 18446744073709551615n }],
  ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
  approvalId: 'post-mint',
  version: 0n,
  // ... other fields
};
```

Rules:

- `"Mint"` for mint approvals only.
- `"!Mint"` or `"AllWithoutMint"` for post-mint approvals.
- Never `"All"` as a `fromListId`.
- Never mix `"Mint"` with other addresses in one list.

### Mint escrow address

`"Mint"` cannot hold `x/bank` coins. Each collection has a generated `mintEscrowAddress` that holds coins on its behalf, used for payouts and escrows in [coin transfers](../approval-criteria/coin-transfers.md).

```ts
const mintEscrowAddress = generateAlias(
  'tokenization',
  getAliasDerivationKeysForCollection(collectionId)
);
```

## Related

- [Transferability](transferability.md)
- [Permissions](permissions.md)
- [Coin transfers](../approval-criteria/coin-transfers.md)
- [MsgTransferTokens](../messages/msg-transfer-tokens.md)
