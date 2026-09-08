---
description: "Find the unhandled (disapproved) transfer combinations in a set of approvals and append the default self-initiated user approvals with the bitbadges SDK."
---

# Approvals

A transfer needs approval coverage at each applicable level. These helpers find `(from, to, initiatedBy, tokenIds, times)` combinations outside the supplied approvals. They inspect coverage, not whether payments, ownership requirements, proofs, or tracker limits will pass.

## Example

```ts
import {
  BitBadgesAPI,
  BigIntify,
  getUnhandledCollectionApprovals,
  getUnhandledUserOutgoingApprovals,
  getUnhandledUserIncomingApprovals,
  appendSelfInitiatedOutgoingApproval,
  appendSelfInitiatedIncomingApproval
} from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY }); // key from https://bitbadges.io/developer
const { collection } = await api.getCollection('1');

// Collection level: everything not covered by collectionApprovals
const unhandled = getUnhandledCollectionApprovals(collection.collectionApprovals);
// or the method form
const sameThing = collection.getUnhandledCollectionApprovals();

// User level: the same question for one user's outgoing and incoming approvals
const BOB = 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue';
const balanceDoc = await api.getBalanceByAddress('1', BOB);
const unhandledOut = getUnhandledUserOutgoingApprovals(balanceDoc.outgoingApprovals, BOB, true);
const unhandledIn = getUnhandledUserIncomingApprovals(balanceDoc.incomingApprovals, BOB, true);

// Add the implicit defaults before you evaluate a user's approvals
const withDefaults = balanceDoc.autoApproveSelfInitiatedOutgoingTransfers
  ? appendSelfInitiatedOutgoingApproval(balanceDoc.outgoingApprovals, BOB)
  : balanceDoc.outgoingApprovals;
const incomingWithDefaults = balanceDoc.autoApproveSelfInitiatedIncomingTransfers
  ? appendSelfInitiatedIncomingApproval(balanceDoc.incomingApprovals, BOB)
  : balanceDoc.incomingApprovals;
```

## Signatures

```ts
declare function getUnhandledCollectionApprovals(
  collectionApprovals: CollectionApprovalWithDetails<bigint>[],
  ignoreTrackerIds?: boolean, // default true
  doNotMerge?: boolean // default false
): CollectionApprovalWithDetails<bigint>[];

declare function getUnhandledUserOutgoingApprovals(
  approvals: UserOutgoingApprovalWithDetails<bigint>[],
  userAddress: string,
  ignoreTrackerIds: boolean,
  doNotMerge?: boolean
): UserOutgoingApprovalWithDetails<bigint>[];

declare function getUnhandledUserIncomingApprovals(
  approvals: UserIncomingApprovalWithDetails<bigint>[],
  userAddress: string,
  ignoreTrackerIds: boolean,
  doNotMerge?: boolean
): UserIncomingApprovalWithDetails<bigint>[];

declare function appendSelfInitiatedOutgoingApproval(
  currApprovals: UserOutgoingApprovalWithDetails<bigint>[],
  userAddress: string
): UserOutgoingApprovalWithDetails<bigint>[];

declare function appendSelfInitiatedIncomingApproval(
  currApprovals: UserIncomingApprovalWithDetails<bigint>[],
  userAddress: string
): UserIncomingApprovalWithDetails<bigint>[];
```

## Behavior

- The result is a list of approval-shaped objects whose lists and ranges describe the unhandled space. An empty result means every combination has a matching approval in the supplied set; it does not guarantee a transfer will execute. Simulate the actual transaction to check its criteria and balances.
- `ignoreTrackerIds` treats approvals with different tracker IDs as the same for coverage purposes. `doNotMerge` returns the raw unmerged pieces.
- The user helpers cast each user approval to a collection approval (fixing `from` for outgoing, `to` for incoming) and reuse the collection logic.
- `appendSelfInitiated*` adds the chain's default: incoming transfers are approved when `to == initiatedBy`; outgoing transfers are approved when `from == initiatedBy`. Both return the input unchanged for the `Mint` and `Total` addresses. These defaults apply only when the user has not disabled them with `autoApproveSelfInitiatedIncomingTransfers` and `autoApproveSelfInitiatedOutgoingTransfers`.
- These functions expect bigint-typed inputs. Convert with `BigIntify` first.

## Related

- [Transferability](../../token-standard/concepts/transferability.md)
- [Approval Criteria](../../token-standard/approval-criteria/README.md)
- [User Approval Settings](../../token-standard/approval-criteria/user-approval-settings.md)
