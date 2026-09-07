---
description: "The three approval levels (collection, outgoing, incoming), the fields of an approval, auto-approval flags, overrides, and how a transfer is validated."
---

# Transferability

Transferability is a set of approvals on three levels. A transfer executes only when the sender has the balance and the approvals on every non-overridden level match.

## Shape

```ts
// Stored on TokenCollection.collectionApprovals[]
interface CollectionApproval<T extends bigint> {
  toListId: string;             // Who can receive
  fromListId: string;           // Who can send
  initiatedByListId: string;    // Who can initiate
  transferTimes: UintRange<T>[]; // When the transfer can happen (UNIX ms)
  tokenIds: UintRange<T>[];     // Which token IDs
  ownershipTimes: UintRange<T>[]; // Which ownership times are transferred
  approvalId: string;           // Unique on this level
  version: T;                   // Incremented by the chain on every update

  uri?: string;
  customData?: string;
  approvalCriteria?: ApprovalCriteria<T>;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `toListId` | address list ID | yes | Recipients that match. Examples: `"All"`, `"bb1..."` |
| `fromListId` | address list ID | yes | Senders that match. Examples: `"Mint"`, `"!Mint"` |
| `initiatedByListId` | address list ID | yes | Initiators (the transaction signer) that match |
| `transferTimes` | UintRange[] | yes | Block times when the transfer may occur |
| `tokenIds` | UintRange[] | yes | Token IDs covered |
| `ownershipTimes` | UintRange[] | yes | Ownership times that can be moved |
| `approvalId` | string | yes | Unique per level. Cannot be `default-outgoing`, `default-incoming`, `self-initiated-outgoing`, `self-initiated-incoming`, or `all-incoming-transfers`. |
| `version` | Uint | set by chain | Starts at 0 and increments on every update |
| `uri` | string | no | Metadata link |
| `customData` | string | no | Free-form string, or inline JSON metadata (`name` + `description`) |
| `approvalCriteria` | ApprovalCriteria | no | Extra conditions. See [Approval criteria](../approval-criteria/README.md). |

The first six fields answer who, when, and what. An approval matches a transfer when the sender is in `fromListId`, the recipient in `toListId`, the initiator in `initiatedByListId`, the block time in `transferTimes`, and the balance being moved falls inside `tokenIds` and `ownershipTimes`.

## How it works

### Three levels

| Level | Set by | `approvalLevel` | `approverAddress` | Stored on | Message | Typical use |
| --- | --- | --- | --- | --- | --- | --- |
| Collection | manager | `collection` | `""` | `TokenCollection.collectionApprovals` | [MsgSetCollectionApprovals](../messages/msg-set-collection-approvals.md) | global rules, freezing, compliance, minting |
| Outgoing | sender | `outgoing` | sender `bb1...` | `UserBalanceStore.outgoingApprovals` | [MsgSetOutgoingApproval](../messages/msg-set-outgoing-approval.md) | listings, delegation |
| Incoming | recipient | `incoming` | recipient `bb1...` | `UserBalanceStore.incomingApprovals` | [MsgSetIncomingApproval](../messages/msg-set-incoming-approval.md) | bids, opt-in receiving |

Every transfer must satisfy a collection approval. It must also satisfy the sender's outgoing approvals and the recipient's incoming approvals unless the matched collection approval overrides them.

### Validation flow

For each transfer the chain checks, in order:

1. The sender's balance covers the amounts, IDs, and ownership times.
2. A collection approval matches, including all of its approval criteria.
3. Unless `overridesFromOutgoingApprovals` is set on the matched collection approval: the sender's outgoing approvals match, or the transfer is self-initiated and `autoApproveSelfInitiatedOutgoingTransfers` is on.
4. Unless `overridesToIncomingApprovals` is set: the recipient's incoming approvals match, or the transfer is self-initiated and `autoApproveSelfInitiatedIncomingTransfers` is on, or `autoApproveAllIncomingTransfers` is on.

<img src="../../.gitbook/assets/image (1) (1).png" alt="Transfer validation flow: balance check, then collection approvals, then outgoing and incoming approvals unless overridden">

Approvals define what is allowed. Transfers execute when an allowed path exists and balances suffice. Permissions (`canUpdateCollectionApprovals` and the user equivalents) define whether approvals can change. See [Permissions](permissions.md).

### Collection approvals

Collection approvals apply to minting and to post-mint transfers alike. They are where the manager enforces global rules: freezing, revocation, whitelists, payments.

```ts
const mintApproval: CollectionApproval<bigint> = {
  fromListId: 'Mint',
  toListId: 'All',
  initiatedByListId: 'All',
  transferTimes: [{ start: 1691931600000n, end: 1723554000000n }],
  tokenIds: [{ start: 1n, end: 100n }],
  ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
  approvalId: 'mint-to-all',
  version: 0n,
  approvalCriteria: {
    maxNumTransfers: {
      overallMaxNumTransfers: 1000n,
      perFromAddressMaxNumTransfers: 0n,
      perToAddressMaxNumTransfers: 0n,
      perInitiatedByAddressMaxNumTransfers: 1n,
      amountTrackerId: 'mint-to-all',
    },
    overridesFromOutgoingApprovals: true, // Required for Mint
    // ... other criteria
  },
};
```

Reads as: anyone can claim one of token IDs 1-100 from Mint between Aug 13, 2023 and Aug 13, 2024, up to 1000 claims in total.

### User-level approvals

Outgoing and incoming approvals have the same shape minus the field that is fixed to the owner. An outgoing approval has no `fromListId` (it is the owner). An incoming approval has no `toListId`. User-level criteria cannot use overrides or the other collection-only fields listed in [Approval criteria](../approval-criteria/README.md).

```ts
interface UserBalanceStore<T extends bigint> {
  balances: Balance<T>[];
  outgoingApprovals: OutgoingApproval<T>[];
  incomingApprovals: IncomingApproval<T>[];
  autoApproveSelfInitiatedOutgoingTransfers: boolean;
  autoApproveSelfInitiatedIncomingTransfers: boolean;
  autoApproveAllIncomingTransfers: boolean;
  userPermissions: UserPermissions<T>;
}
```

```ts
const outgoingApproval: OutgoingApproval<bigint> = {
  // fromListId is fixed to the owner
  toListId: 'bb1...',
  initiatedByListId: 'bb1...',
  transferTimes: [{ start: 1n, end: 18446744073709551615n }],
  tokenIds: [{ start: 1n, end: 18446744073709551615n }],
  ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
  approvalId: 'my-listing',
  version: 0n,
  approvalCriteria: {
    // ... criteria
  },
};

const incomingApproval: IncomingApproval<bigint> = {
  // toListId is fixed to the owner
  fromListId: 'bb1...',
  initiatedByListId: 'bb1...',
  transferTimes: [{ start: 1n, end: 18446744073709551615n }],
  tokenIds: [{ start: 1n, end: 18446744073709551615n }],
  ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
  approvalId: 'my-bids',
  version: 0n,
  approvalCriteria: {
    // ... criteria
  },
};
```

### Auto-approval flags

Three flags on the balance store approve transfers without an explicit approval. Leaving all three `true` is the usual choice.

| Flag | Effect when `true` |
| --- | --- |
| `autoApproveSelfInitiatedOutgoingTransfers` | Outgoing transfers that the owner initiates skip the outgoing approval check |
| `autoApproveSelfInitiatedIncomingTransfers` | Incoming transfers that the owner initiates (claims, requested airdrops) skip the incoming approval check |
| `autoApproveAllIncomingTransfers` | Every incoming transfer skips the incoming approval check, whoever initiates it |

Turning `autoApproveAllIncomingTransfers` off makes an account opt-in only. The flags are auto-scannable and never need prioritization.

### Overrides

A collection approval can skip the user-level check for the sender, the recipient, or both. This is how freezing, revocation, and forced distribution work. Only collection approvals have these fields.

```ts
const collectionApproval: CollectionApproval<bigint> = {
  approvalCriteria: {
    overridesFromOutgoingApprovals: true, // skip sender's outgoing approvals
    overridesToIncomingApprovals: true,   // skip recipient's incoming approvals
    // ... other criteria
  },
  // ... other fields
};
```

Mint approvals must set `overridesFromOutgoingApprovals: true` because the Mint address has no approvals of its own. Set the `noForcefulPostMintTransfers` [invariant](../approval-criteria/invariants.md) to forbid overrides on every non-Mint approval forever. Full rules and the reserved-address protection are on [Overrides](../approval-criteria/overrides.md).

### Break-down matching

The chain can split one transfer across several approvals. It walks the approvals in order, deducts as much as each one allows, and continues with the remainder. If anything is left over, the transfer fails and the error lists what each candidate approval rejected.

Design approvals so a transfer matches one of them. Rely on splitting only when you must. [Prioritized approvals](prioritized-approvals.md) explains which approvals the scan considers and how to pin a specific one.

## Related

- [Approval criteria](../approval-criteria/README.md)
- [Prioritized approvals](prioritized-approvals.md)
- [Permissions](permissions.md)
- [MsgTransferTokens](../messages/msg-transfer-tokens.md)
