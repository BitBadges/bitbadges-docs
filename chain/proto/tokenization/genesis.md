---
description: "Generated schema for tokenization/genesis.proto: 1 message in the x/tokenization module."
---

# tokenization/genesis.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 1 message. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/genesis.proto).

## Messages

### GenesisState

GenesisState defines the tokens module's genesis state.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `params` | 1 | [`Params`](params.md#params) | singular |   |
| `port_id` | 2 | `string` | singular |   |
| `collections` | 3 | [`TokenCollection`](collections.md#tokencollection) | repeated |   |
| `nextCollectionId` | 4 | `string` | singular |   |
| `balances` | 5 | [`UserBalanceStore`](user_balance_store.md#userbalancestore) | repeated |   |
| `balanceStoreKeys` | 6 | `string` | repeated |   |
| `challengeTrackers` | 7 | `string` | repeated |   |
| `challengeTrackerStoreKeys` | 8 | `string` | repeated |   |
| `addressLists` | 9 | [`AddressList`](address_lists.md#addresslist) | repeated |   |
| `approvalTrackers` | 10 | [`ApprovalTracker`](approval_tracking.md#approvaltracker) | repeated |   |
| `approvalTrackerStoreKeys` | 11 | `string` | repeated |   |
| `approvalTrackerVersions` | 12 | `string` | repeated |   |
| `approvalTrackerVersionsStoreKeys` | 13 | `string` | repeated |   |
| `dynamicStores` | 14 | [`DynamicStore`](dynamic_stores.md#dynamicstore) | repeated |   |
| `nextDynamicStoreId` | 15 | `string` | singular |   |
| `dynamicStoreValues` | 16 | [`DynamicStoreValue`](dynamic_stores.md#dynamicstorevalue) | repeated |   |
| `ethSignatureTrackers` | 17 | `string` | repeated |   |
| `ethSignatureTrackerStoreKeys` | 18 | `string` | repeated |   |
| `votingTrackers` | 19 | [`VoteProof`](challenges.md#voteproof) | repeated |   |
| `votingTrackerStoreKeys` | 20 | `string` | repeated |   |
| `collectionStats` | 21 | [`CollectionStats`](collections.md#collectionstats) | repeated |   |
| `collectionStatsIds` | 22 | `string` | repeated |   |
| `votingChallengeTrackers` | 23 | [`VotingChallengeTracker`](challenges.md#votingchallengetracker) | repeated |   |
| `votingChallengeTrackerStoreKeys` | 24 | `string` | repeated |   |
| `nextAddressListCounter` | 25 | `string` | singular |   |
| `reservedProtocolAddresses` | 26 | `string` | repeated |   |
