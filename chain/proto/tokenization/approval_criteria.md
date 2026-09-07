---
description: "Generated schema for tokenization/approval_criteria.proto: 3 messages in the x/tokenization module."
---

# tokenization/approval_criteria.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 3 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/approval_criteria.proto).

## Messages

### ApprovalCriteria

ApprovalCriteria defines the criteria for approving transfers.

All criteria must be satisfied for the approval to be considered valid.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `merkleChallenges` | 1 | [`MerkleChallenge`](challenges.md#merklechallenge) | repeated | Merkle challenges that must be satisfied for approval. The initiator must provide valid Merkle proofs that satisfy all specified challenges. Each challenge requires a proof that leads to a specific root hash. |
| `predeterminedBalances` | 2 | [`PredeterminedBalances`](predetermined_balances.md#predeterminedbalances) | singular | Predetermined balances that must be used for each approval. Defines the exact token amounts and IDs that can be transferred when using this approval. |
| `approvalAmounts` | 3 | [`ApprovalAmounts`](approval_tracking.md#approvalamounts) | singular | Threshold limit of amounts that can be transferred using this approval. Tracks cumulative amounts transferred and enforces maximum limits per approval. |
| `maxNumTransfers` | 4 | [`MaxNumTransfers`](approval_tracking.md#maxnumtransfers) | singular | Maximum number of transfers that can be processed using this approval. Tracks the count of transfers and enforces the limit to prevent exceeding the allowed number of uses. |
| `coinTransfers` | 5 | [`CoinTransfer`](approval_conditions.md#cointransfer) | repeated | The sdk.Coins that need to be transferred for approval. Defines required coin transfers (e.g., fees, royalties) that must be executed alongside the token transfer for the approval to be valid. |
| `requireToEqualsInitiatedBy` | 6 | `bool` | singular | Require the "to" address to be equal to the "initiated by" address for approval. If true, only transfers where the recipient matches the initiator are allowed. |
| `requireFromEqualsInitiatedBy` | 7 | `bool` | singular | Require the "from" address to be equal to the "initiated by" address for approval. If true, only transfers where the sender matches the initiator are allowed. |
| `requireToDoesNotEqualInitiatedBy` | 8 | `bool` | singular | Require the "to" address to not be equal to the "initiated by" address for approval. If true, transfers where the recipient equals the initiator are forbidden. |
| `requireFromDoesNotEqualInitiatedBy` | 9 | `bool` | singular | Require the "from" address to not be equal to the "initiated by" address for approval. If true, transfers where the sender equals the initiator are forbidden. |
| `overridesFromOutgoingApprovals` | 10 | `bool` | singular | Overrides the user's outgoing approvals for approval. If true, this collection-level approval takes precedence over any outgoing approvals defined by the sender, allowing the collection to control outgoing transfer behavior. |
| `overridesToIncomingApprovals` | 11 | `bool` | singular | Overrides the user's incoming approvals for approval. If true, this collection-level approval takes precedence over any incoming approvals defined by the recipient, allowing the collection to control incoming transfer behavior. |
| `autoDeletionOptions` | 12 | [`AutoDeletionOptions`](approval_tracking.md#autodeletionoptions) | singular | Auto-deletion options for this approval. Defines conditions under which this approval should be automatically deleted (e.g., after a certain number of uses or time period). |
| `mustOwnTokens` | 14 | [`MustOwnTokens`](approval_conditions.md#mustowntokens) | repeated | Must own tokens for approval. Defines token ownership requirements that must be satisfied for the approval to be valid. The initiator must own the specified tokens at the specified ownership times. |
| `dynamicStoreChallenges` | 15 | [`DynamicStoreChallenge`](approval_conditions.md#dynamicstorechallenge) | repeated | Dynamic store challenges that the initiator must pass for approval. The initiator must provide valid proofs that satisfy all specified dynamic store challenges (e.g., key-value store lookups). |
| `ethSignatureChallenges` | 16 | [`ETHSignatureChallenge`](challenges.md#ethsignaturechallenge) | repeated | ETH signature challenges that the initiator must pass for approval. The initiator must provide valid Ethereum signatures for all specified challenges. Each signature can only be used once. |
| `senderChecks` | 17 | [`AddressChecks`](approval_conditions.md#addresschecks) | singular | Address checks for the sender of the transfer. Validates that the sender address meets the specified criteria (e.g., whitelist, blacklist, protocol address requirements). |
| `recipientChecks` | 18 | [`AddressChecks`](approval_conditions.md#addresschecks) | singular | Address checks for the recipient of the transfer. Validates that the recipient address meets the specified criteria (e.g., whitelist, blacklist, protocol address requirements). |
| `initiatorChecks` | 19 | [`AddressChecks`](approval_conditions.md#addresschecks) | singular | Address checks for the initiator of the transfer. Validates that the initiator address meets the specified criteria (e.g., whitelist, blacklist, protocol address requirements). |
| `altTimeChecks` | 20 | [`AltTimeChecks`](approval_conditions.md#alttimechecks) | singular | Alternative time-based checks for approval denial (offline hours/days). Defines time periods during which this approval should be denied, such as specific hours of the day or days of the week. |
| `mustPrioritize` | 21 | `bool` | singular | If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used. This allows fine-grained control over which approvals are applied when multiple approvals could match. |
| `votingChallenges` | 22 | [`VotingChallenge`](challenges.md#votingchallenge) | repeated | Voting challenges that must be satisfied for approval. The initiator must provide valid votes that meet the quorum threshold for all specified challenges. |
| `allowBackedMinting` | 23 | `bool` | singular | If true, this collection approval allows backed minting operations (CosmosCoinBackedPath). When false, this approval cannot be used for transfers involving backed minting addresses. This prevents accidental allowances when toListIds is "All". |
| `allowSpecialWrapping` | 24 | `bool` | singular | If true, this collection approval allows special wrapping operations (CosmosCoinWrapperPath). When false, this approval cannot be used for transfers involving wrapping addresses. This prevents accidental allowances when toListIds is "All". |
| `evmQueryChallenges` | 25 | [`EVMQueryChallenge`](challenges.md#evmquerychallenge) | repeated | EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state (e.g., token ownership in another contract). |
| `userApprovalSettings` | 26 | [`UserApprovalSettings`](approval_conditions.md#userapprovalsettings) | singular | Issuer-imposed constraints on user-level coin transfers. Propagated to user-level approvals during greedy transfer matching (same pattern as userRoyalties). Only applicable on collection-level approvals. If conflicting settings across multiple matched approvals, the transfer is rejected (like royalties). |

### IncomingApprovalCriteria

IncomingApprovalCriteria defines the criteria for approving incoming transfers.

This is used for user-level incoming approvals and only includes fields relevant to incoming transfers.

All criteria must be satisfied for the approval to be considered valid.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `merkleChallenges` | 1 | [`MerkleChallenge`](challenges.md#merklechallenge) | repeated | Merkle challenges that must be satisfied for approval. The initiator must provide valid Merkle proofs that satisfy all specified challenges. Each challenge requires a proof that leads to a specific root hash. |
| `predeterminedBalances` | 2 | [`PredeterminedBalances`](predetermined_balances.md#predeterminedbalances) | singular | Predetermined balances that must be used for each approval. Defines the exact token amounts and IDs that can be transferred when using this approval. |
| `approvalAmounts` | 3 | [`ApprovalAmounts`](approval_tracking.md#approvalamounts) | singular | Threshold limit of amounts that can be transferred using this approval. Tracks cumulative amounts transferred and enforces maximum limits per approval. |
| `maxNumTransfers` | 4 | [`MaxNumTransfers`](approval_tracking.md#maxnumtransfers) | singular | Maximum number of transfers that can be processed using this approval. Tracks the count of transfers and enforces the limit to prevent exceeding the allowed number of uses. |
| `coinTransfers` | 5 | [`CoinTransfer`](approval_conditions.md#cointransfer) | repeated | The sdk.Coins that need to be transferred for approval. Defines required coin transfers (e.g., fees, royalties) that must be executed alongside the token transfer for the approval to be valid. |
| `requireFromEqualsInitiatedBy` | 6 | `bool` | singular | Require the "from" address to be equal to the "initiated by" address for approval. If true, only transfers where the sender matches the initiator are allowed. |
| `requireFromDoesNotEqualInitiatedBy` | 7 | `bool` | singular | Require the "from" address to not be equal to the "initiated by" address for approval. If true, transfers where the sender equals the initiator are forbidden. |
| `autoDeletionOptions` | 8 | [`AutoDeletionOptions`](approval_tracking.md#autodeletionoptions) | singular | Auto-deletion options for this approval. Defines conditions under which this approval should be automatically deleted (e.g., after a certain number of uses or time period). |
| `mustOwnTokens` | 9 | [`MustOwnTokens`](approval_conditions.md#mustowntokens) | repeated | Must own tokens for approval. Defines token ownership requirements that must be satisfied for the approval to be valid. The initiator must own the specified tokens at the specified ownership times. |
| `dynamicStoreChallenges` | 10 | [`DynamicStoreChallenge`](approval_conditions.md#dynamicstorechallenge) | repeated | Dynamic store challenges that the initiator must pass for approval. The initiator must provide valid proofs that satisfy all specified dynamic store challenges (e.g., key-value store lookups). |
| `ethSignatureChallenges` | 11 | [`ETHSignatureChallenge`](challenges.md#ethsignaturechallenge) | repeated | ETH signature challenges that the initiator must pass for approval. The initiator must provide valid Ethereum signatures for all specified challenges. Each signature can only be used once. |
| `senderChecks` | 12 | [`AddressChecks`](approval_conditions.md#addresschecks) | singular | Address checks for the sender of the transfer. Validates that the sender address meets the specified criteria (e.g., whitelist, blacklist, protocol address requirements). Note: No recipient checks are included for incoming approvals since the recipient is the user themselves. |
| `initiatorChecks` | 13 | [`AddressChecks`](approval_conditions.md#addresschecks) | singular | Address checks for the initiator of the transfer. Validates that the initiator address meets the specified criteria (e.g., whitelist, blacklist, protocol address requirements). |
| `altTimeChecks` | 14 | [`AltTimeChecks`](approval_conditions.md#alttimechecks) | singular | Alternative time-based checks for approval denial (offline hours/days). Defines time periods during which this approval should be denied, such as specific hours of the day or days of the week. |
| `mustPrioritize` | 15 | `bool` | singular | If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used. This allows fine-grained control over which approvals are applied when multiple approvals could match. |
| `votingChallenges` | 16 | [`VotingChallenge`](challenges.md#votingchallenge) | repeated | Voting challenges that must be satisfied for approval. The initiator must provide valid votes that meet the quorum threshold for all specified challenges. |
| `evmQueryChallenges` | 17 | [`EVMQueryChallenge`](challenges.md#evmquerychallenge) | repeated | EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state (e.g., token ownership in another contract). |

### OutgoingApprovalCriteria

OutgoingApprovalCriteria defines the criteria for approving outgoing transfers.

This is used for user-level outgoing approvals and only includes fields relevant to outgoing transfers.

All criteria must be satisfied for the approval to be considered valid.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `merkleChallenges` | 1 | [`MerkleChallenge`](challenges.md#merklechallenge) | repeated | Merkle challenges that must be satisfied for approval. The initiator must provide valid Merkle proofs that satisfy all specified challenges. Each challenge requires a proof that leads to a specific root hash. |
| `predeterminedBalances` | 2 | [`PredeterminedBalances`](predetermined_balances.md#predeterminedbalances) | singular | Predetermined balances that must be used for each approval. Defines the exact token amounts and IDs that can be transferred when using this approval. |
| `approvalAmounts` | 3 | [`ApprovalAmounts`](approval_tracking.md#approvalamounts) | singular | Threshold limit of amounts that can be transferred using this approval. Tracks cumulative amounts transferred and enforces maximum limits per approval. |
| `maxNumTransfers` | 4 | [`MaxNumTransfers`](approval_tracking.md#maxnumtransfers) | singular | Maximum number of transfers that can be processed using this approval. Tracks the count of transfers and enforces the limit to prevent exceeding the allowed number of uses. |
| `coinTransfers` | 5 | [`CoinTransfer`](approval_conditions.md#cointransfer) | repeated | The sdk.Coins that need to be transferred for approval. Defines required coin transfers (e.g., fees, royalties) that must be executed alongside the token transfer for the approval to be valid. |
| `requireToEqualsInitiatedBy` | 6 | `bool` | singular | Require the "to" address to be equal to the "initiated by" address for approval. If true, only transfers where the recipient matches the initiator are allowed. |
| `requireToDoesNotEqualInitiatedBy` | 7 | `bool` | singular | Require the "to" address to not be equal to the "initiated by" address for approval. If true, transfers where the recipient equals the initiator are forbidden. |
| `autoDeletionOptions` | 8 | [`AutoDeletionOptions`](approval_tracking.md#autodeletionoptions) | singular | Auto-deletion options for this approval. Defines conditions under which this approval should be automatically deleted (e.g., after a certain number of uses or time period). |
| `mustOwnTokens` | 9 | [`MustOwnTokens`](approval_conditions.md#mustowntokens) | repeated | Must own tokens for approval. Defines token ownership requirements that must be satisfied for the approval to be valid. The initiator must own the specified tokens at the specified ownership times. |
| `dynamicStoreChallenges` | 10 | [`DynamicStoreChallenge`](approval_conditions.md#dynamicstorechallenge) | repeated | Dynamic store challenges that the initiator must pass for approval. The initiator must provide valid proofs that satisfy all specified dynamic store challenges (e.g., key-value store lookups). |
| `ethSignatureChallenges` | 11 | [`ETHSignatureChallenge`](challenges.md#ethsignaturechallenge) | repeated | ETH signature challenges that the initiator must pass for approval. The initiator must provide valid Ethereum signatures for all specified challenges. Each signature can only be used once. |
| `recipientChecks` | 12 | [`AddressChecks`](approval_conditions.md#addresschecks) | singular | Address checks for the recipient of the transfer. Validates that the recipient address meets the specified criteria (e.g., whitelist, blacklist, protocol address requirements). Note: No sender checks are included for outgoing approvals since the sender is the user themselves. |
| `initiatorChecks` | 13 | [`AddressChecks`](approval_conditions.md#addresschecks) | singular | Address checks for the initiator of the transfer. Validates that the initiator address meets the specified criteria (e.g., whitelist, blacklist, protocol address requirements). |
| `altTimeChecks` | 14 | [`AltTimeChecks`](approval_conditions.md#alttimechecks) | singular | Alternative time-based checks for approval denial (offline hours/days). Defines time periods during which this approval should be denied, such as specific hours of the day or days of the week. |
| `mustPrioritize` | 15 | `bool` | singular | If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used. This allows fine-grained control over which approvals are applied when multiple approvals could match. |
| `votingChallenges` | 16 | [`VotingChallenge`](challenges.md#votingchallenge) | repeated | Voting challenges that must be satisfied for approval. The initiator must provide valid votes that meet the quorum threshold for all specified challenges. |
| `evmQueryChallenges` | 17 | [`EVMQueryChallenge`](challenges.md#evmquerychallenge) | repeated | EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state (e.g., token ownership in another contract). |
