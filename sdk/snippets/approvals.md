---
description: "Find the unhandled (disapproved) transfer combinations in a set of approvals and append the default self-initiated user approvals with the bitbadges SDK."
---

# Approvals

A transfer is allowed only when some approval handles it. These helpers compute which `(from, to, initiatedBy, tokenIds, times)` combinations no approval handles, which means the chain rejects them.

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

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });
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
const withDefaults = appendSelfInitiatedOutgoingApproval(balanceDoc.outgoingApprovals, BOB);
const incomingWithDefaults = appendSelfInitiatedIncomingApproval(balanceDoc.incomingApprovals, BOB);
```

## Signatures

```ts
function getUnhandledCollectionApprovals(
  collectionApprovals: CollectionApprovalWithDetails<bigint>[],
  ignoreTrackerIds = true,
  doNotMerge = false
): CollectionApprovalWithDetails<bigint>[];

function getUnhandledUserOutgoingApprovals(
  approvals: UserOutgoingApprovalWithDetails<bigint>[],
  userAddress: string,
  ignoreTrackerIds: boolean,
  doNotMerge?: boolean
): UserOutgoingApprovalWithDetails<bigint>[];

function getUnhandledUserIncomingApprovals(
  approvals: UserIncomingApprovalWithDetails<bigint>[],
  userAddress: string,
  ignoreTrackerIds: boolean,
  doNotMerge?: boolean
): UserIncomingApprovalWithDetails<bigint>[];

function appendSelfInitiatedOutgoingApproval(
  currApprovals: UserOutgoingApprovalWithDetails<bigint>[],
  userAddress: string
): UserOutgoingApprovalWithDetails<bigint>[];

function appendSelfInitiatedIncomingApproval(
  currApprovals: UserIncomingApprovalWithDetails<bigint>[],
  userAddress: string
): UserIncomingApprovalWithDetails<bigint>[];
```

## Behavior

- The result is a list of approval-shaped objects whose lists and ranges describe the unhandled space. An empty result means every combination has a matching approval.
- `ignoreTrackerIds` treats approvals with different tracker IDs as the same for coverage purposes. `doNotMerge` returns the raw unmerged pieces.
- The user helpers cast each user approval to a collection approval (fixing `from` for outgoing, `to` for incoming) and reuse the collection logic.
- `appendSelfInitiated*` adds the chain's default: incoming transfers are approved when `to == initiatedBy`; outgoing transfers are approved when `from == initiatedBy`. Both return the input unchanged for the `Mint` and `Total` addresses. These defaults apply only when the user has not disabled them with `autoApproveSelfInitiatedIncomingTransfers` and `autoApproveSelfInitiatedOutgoingTransfers`.
- These functions expect bigint-typed inputs. Convert with `BigIntify` first.

## Related

- [Transferability](../../token-standard/concepts/transferability.md)
- [Approval criteria](../../token-standard/approval-criteria/README.md)
- [User approval settings](../../token-standard/approval-criteria/user-approval-settings.md)
