---
description: "Generated schema for tokenization/challenges.proto: 10 messages in the x/tokenization module."
---

# tokenization/challenges.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 10 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/challenges.proto).

## Messages

### ETHSignatureChallenge

ETHSignatureChallenge defines a rule for the approval in the form of an Ethereum signature challenge.

An ETH signature challenge is a challenge where the user must provide a valid Ethereum signature for a specific nonce. The signature scheme is ETHSign(nonce + "-" + initiatorAddress + "-" + collectionId + "-" + approverAddress + "-" + approvalLevel + "-" + approvalId + "-" + challengeId) and each signature can only be used once. All challenges must be met with valid solutions for the transfer to be approved.

IMPORTANT: We track the usage of each signature to prevent replay attacks. Each signature can only be used once. If you update the challenge ID, then the used signatures tracker will reset and start a new tally. We recommend using a unique challenge ID for each challenge to prevent overlap and unexpected behavior.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `signer` | 1 | `string` | singular | The Ethereum address that must sign the nonce for verification. |
| `challengeTrackerId` | 2 | `string` | singular | The ID of this ETH signature challenge for tracking the number of uses per signature. |
| `uri` | 3 | `string` | singular | The URI associated with this ETH signature challenge, optionally providing metadata about the challenge. |
| `customData` | 4 | `string` | singular | Arbitrary custom data associated with this ETH signature challenge. |

### ETHSignatureProof

ETHSignatureProof represents an Ethereum signature proof for a challenge.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `nonce` | 1 | `string` | singular | The nonce that was signed. The signature scheme is ETHSign(nonce + "-" + initiatorAddress + "-" + collectionId + "-" + approverAddress + "-" + approvalLevel + "-" + approvalId + "-" + challengeId). |
| `signature` | 2 | `string` | singular | The Ethereum signature of the nonce. |

### EVMQueryChallenge

EVMQueryChallenge defines a rule for approval via read-only EVM contract query.

The challenge executes a staticcall to the specified contract with the given calldata. The result is compared against the expected result (if provided) or checked for non-zero return.

IMPORTANT: This is read-only and cannot modify state. The query is executed with a gas limit to prevent DoS attacks. All results are deterministic since EVM state is consistent within a block.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `contractAddress` | 1 | `string` | singular | The EVM contract address to query (0x format or bb1 format) |
| `calldata` | 2 | `string` | singular | ABI-encoded function selector + arguments (hex string without 0x prefix) Example: "70a08231000000000000000000000000{address}" for balanceOf(address) Can use placeholders: $initiator, $sender, $recipient (replaced at runtime) |
| `expectedResult` | 3 | `string` | singular | Expected return value (hex string without 0x prefix). If empty, any non-error result passes. For boolean checks, use "0000...0001" for true. |
| `comparisonOperator` | 4 | `string` | singular | Comparison operator: "eq" (equals), "ne" (not equals), "gt" (greater than), "gte", "lt", "lte" Only "eq" and "ne" work for non-numeric types. Default is "eq". |
| `gasLimit` | 5 | `string` | singular | Gas limit for the query (default 100000, max 500000) |
| `uri` | 6 | `string` | singular | The URI associated with this challenge (metadata) |
| `customData` | 7 | `string` | singular | Arbitrary custom data |

### MerkleChallenge

Challenges define a rule for the approval in the form of a Merkle challenge.

A Merkle challenge is a challenge where the user must provide a Merkle proof to a Merkle tree. If they provide a valid proof, then the challenge is met. All challenges must be met with valid solutions for the transfer to be approved.

IMPORTANT: Merkle challenges currently are limited to SHA256 hashes. See documentation for MerkleChallenge for more details and tutorials.

IMPORTANT: We track the number of uses per leaf according to the challengeTrackerId specified by the parent approval of this challenge. If you update the challenge ID, then the used leaves tracker will reset and start a new tally. We recommend using a unique challenge ID for each challenge to prevent overlap and unexpected behavior.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `root` | 1 | `string` | singular | The root hash of the Merkle tree to which the Merkle path must lead for verification. |
| `expectedProofLength` | 2 | `string` | singular | The expected length of the Merkle path for verification. Used to prevent Merkle path truncation attacks. |
| `useCreatorAddressAsLeaf` | 3 | `bool` | singular | If true, we will override the user's leaf for their proof with their creator address. Used for whitelist trees where all leaves are valid BitBadges addresses. |
| `maxUsesPerLeaf` | 4 | `string` | singular | The maximum number of times each leaf can be used. Must be 1 if useCreatorAddressAsLeaf is false to prevent replay attacks. |
| `uri` | 5 | `string` | singular | The URI associated with this Merkle challenge, optionally providing metadata about the challenge. |
| `customData` | 6 | `string` | singular | Arbitrary custom data associated with this Merkle challenge. |
| `challengeTrackerId` | 7 | `string` | singular | The ID of this Merkle challenge for tracking the number of uses per leaf. |
| `leafSigner` | 8 | `string` | singular | Ethereum address that must sign the leaf. Used to protect against man-in-the-middle attacks. Signature scheme: sign(leaf + "-" + creatorAddress), verified using elliptic curve signature verification. |

### MerklePathItem

MerklePathItem represents an item in a Merkle path.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `aunt` | 1 | `string` | singular | The hash of the sibling node (aunt) in the Merkle path. |
| `onRight` | 2 | `bool` | singular | Indicates whether the aunt node is on the right side of the path. |

### MerkleProof

MerkleProof represents a Merkle proof, consistent with Tendermint/Crypto Merkle tree.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `leaf` | 1 | `string` | singular | The hash of the leaf node for which the proof is generated. |
| `aunts` | 2 | [`MerklePathItem`](#merklepathitem) | repeated | List of Merkle path items (aunts) that make up the proof. |
| `leafSignature` | 3 | `string` | singular | The signature of the leaf node tying the address to the leaf node. |

### VoteProof

VoteProof represents a vote cast for a voting challenge.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `proposalId` | 1 | `string` | singular | The proposal ID this vote is for. |
| `voter` | 2 | `string` | singular | The address of the voter casting the vote. |
| `yesWeight` | 3 | `string` | singular | The percentage weight (0-100) allocated to "yes" vote. The remaining percentage (100 - yesWeight) is allocated to "no" vote. Example: yesWeight=70 means 70% yes, 30% no. |
| `votedAt` | 4 | `string` | singular | Timestamp (unix ms) when this vote was cast. Set automatically by the chain. |

### Voter

Voter defines a voter with their address and weight.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `address` | 1 | `string` | singular | The address of the voter. |
| `weight` | 2 | `string` | singular | The weight of this voter's vote. |

### VotingChallenge

VotingChallenge defines a rule for approval in the form of a voting/multi-sig challenge. Requires a weighted quorum threshold to be met through votes from specified voters. All challenges must be met with valid solutions for the transfer to be approved.

IMPORTANT: Votes are stored separately and can be updated. The threshold is calculated as a percentage of total possible weight (all voters), not just voted weight. If you update the proposal ID, then the vote tracker will reset and start a new tally. We recommend using a unique proposal ID for each challenge to prevent overlap and unexpected behavior.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `proposalId` | 1 | `string` | singular | The ID of this voting challenge for tracking votes (scoped like challengeTrackerId). Format: collectionId-approverAddress-approvalLevel-approvalId-challengeId |
| `quorumThreshold` | 2 | `string` | singular | The quorum threshold as a percentage (0-100) of total possible weight that must vote "yes". Example: 50 means 50% of total voter weight must vote yes for approval. |
| `voters` | 3 | [`Voter`](#voter) | repeated | List of voters with their weights. Each voter can cast a weighted vote. |
| `uri` | 4 | `string` | singular | The URI associated with this voting challenge. |
| `customData` | 5 | `string` | singular | Arbitrary custom data associated with this voting challenge. |
| `resetAfterExecution` | 6 | `bool` | singular | If true, all votes for this challenge are cleared after a successful transfer execution. This makes the challenge reusable (e.g., for vault withdrawals that need fresh approval each time). |
| `delayAfterQuorum` | 7 | `string` | singular | Mandatory delay in milliseconds after quorum is reached before the transfer can execute. If set, the transfer will fail until: now &gt;= quorumReachedTimestamp + delayAfterQuorum. During the delay, signers can remove their votes to cancel (quorum drops = delay resets). |

### VotingChallengeTracker

VotingChallengeTracker tracks the quorum state for a voting challenge.

Stored per (collectionId, approverAddress, approvalLevel, approvalId, proposalId).

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `quorumReachedTimestamp` | 1 | `string` | singular | Timestamp (unix ms) when quorum was first reached. Cleared when quorum drops or after reset. |
