---
description: "Generated schema for tokenization/transfers.proto: 2 messages in the x/tokenization module."
---

# tokenization/transfers.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 2 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/transfers.proto).

## Messages

### PrecalculateBalancesFromApprovalDetails

PrecalculateBalancesFromApprovalDetails defines the details for precalculating balances from an approval.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `approvalId` | 1 | `string` | singular | The ID of the approval. |
| `approvalLevel` | 2 | `string` | singular | The level of the approval. Can be "collection", "incoming", or "outgoing". |
| `approverAddress` | 3 | `string` | singular | The address of the approver. Leave blank "" if approvalLevel == "collection". |
| `version` | 4 | `string` | singular | The version of the approval. |
| `precalculationOptions` | 5 | [`PrecalculationOptions`](balances.md#precalculationoptions) | singular | The options for precalculating the balances. |

### Transfer

Transfer defines the details of a transfer of tokens.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `from` | 1 | `string` | singular | The address of the sender of the transfer. |
| `toAddresses` | 2 | `string` | repeated | The addresses of the recipients of the transfer. |
| `balances` | 3 | [`Balance`](balances.md#balance) | repeated | The balances to be transferred. |
| `precalculateBalancesFromApproval` | 4 | [`PrecalculateBalancesFromApprovalDetails`](#precalculatebalancesfromapprovaldetails) | singular | If defined, we will use the predeterminedBalances from the specified approval to calculate the balances at execution time. We will override the balances field with the precalculated balances. Only applicable for approvals with predeterminedBalances set. |
| `merkleProofs` | 5 | [`MerkleProof`](challenges.md#merkleproof) | repeated | The Merkle proofs / solutions for all Merkle challenges required for the transfer. |
| `ethSignatureProofs` | 6 | [`ETHSignatureProof`](challenges.md#ethsignatureproof) | repeated | The ETH signature proofs / solutions for all ETH signature challenges required for the transfer. |
| `memo` | 7 | `string` | singular | The memo for the transfer. |
| `prioritizedApprovals` | 8 | [`ApprovalIdentifierDetails`](approvals.md#approvalidentifierdetails) | repeated | The prioritized approvals for the transfer. By default, we scan linearly through the approvals and use the first match. This field can be used to prioritize specific approvals and scan through them first. |
| `onlyCheckPrioritizedCollectionApprovals` | 9 | `bool` | singular | Whether to only check prioritized approvals for the transfer. If true, we will only check the prioritized approvals and fail if none of them match (i.e. do not check any non-prioritized approvals). If false, we will check the prioritized approvals first and then scan through the rest of the approvals. |
| `onlyCheckPrioritizedIncomingApprovals` | 10 | `bool` | singular | Whether to only check prioritized approvals for the transfer. If true, we will only check the prioritized approvals and fail if none of them match (i.e. do not check any non-prioritized approvals). If false, we will check the prioritized approvals first and then scan through the rest of the approvals. |
| `onlyCheckPrioritizedOutgoingApprovals` | 11 | `bool` | singular | Whether to only check prioritized approvals for the transfer. If true, we will only check the prioritized approvals and fail if none of them match (i.e. do not check any non-prioritized approvals). If false, we will check the prioritized approvals first and then scan through the rest of the approvals. |
