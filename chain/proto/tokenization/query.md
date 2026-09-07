---
description: "Generated schema for tokenization/query.proto: 1 service, 32 messages in the x/tokenization module."
---

# tokenization/query.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 1 service, 32 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/query.proto).

## Service Query

Query defines the gRPC querier service.

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `Params` | [`QueryParamsRequest`](#queryparamsrequest) | [`QueryParamsResponse`](#queryparamsresponse) | `GET /bitbadges/bitbadgeschain/tokenization/params` | Parameters queries the parameters of the module. |
| `GetCollection` | [`QueryGetCollectionRequest`](#querygetcollectionrequest) | [`QueryGetCollectionResponse`](#querygetcollectionresponse) | `GET /bitbadges/bitbadgeschain/tokenization/get_collection/{collectionId}` | Queries a collection by ID. |
| `GetAddressList` | [`QueryGetAddressListRequest`](#querygetaddresslistrequest) | [`QueryGetAddressListResponse`](#querygetaddresslistresponse) | `GET /bitbadges/bitbadgeschain/tokenization/get_address_list/{listId}` | Queries an address list by ID. |
| `GetApprovalTracker` | [`QueryGetApprovalTrackerRequest`](#querygetapprovaltrackerrequest) | [`QueryGetApprovalTrackerResponse`](#querygetapprovaltrackerresponse) | `GET /bitbadges/bitbadgeschain/tokenization/get_approvals_tracker/{collectionId}/{approvalLevel}/{approverAddress}/{amountTrackerId}/{trackerType}/{approvedAddress}` | Queries an approvals tracker by ID. |
| `GetChallengeTracker` | [`QueryGetChallengeTrackerRequest`](#querygetchallengetrackerrequest) | [`QueryGetChallengeTrackerResponse`](#querygetchallengetrackerresponse) | `GET /bitbadges/bitbadgeschain/tokenization/get_challenge_tracker/{collectionId}/{approvalLevel}/{approverAddress}/{challengeTrackerId}/{leafIndex}` | Queries the number of times a given leaf has been used for a given merkle challenge. |
| `GetETHSignatureTracker` | [`QueryGetETHSignatureTrackerRequest`](#querygetethsignaturetrackerrequest) | [`QueryGetETHSignatureTrackerResponse`](#querygetethsignaturetrackerresponse) | `GET /bitbadges/bitbadgeschain/tokenization/get_eth_signature_tracker/{collectionId}/{approvalLevel}/{approverAddress}/{approvalId}/{challengeTrackerId}/{signature}` | Queries the number of times a given signature has been used for a given ETH signature challenge. |
| `GetBalance` | [`QueryGetBalanceRequest`](#querygetbalancerequest) | [`QueryGetBalanceResponse`](#querygetbalanceresponse) | `GET /bitbadges/bitbadgeschain/tokenization/get_balance/{collectionId}/{address}` | Queries an addresses balance for a collection, specified by its ID. |
| `GetDynamicStore` | [`QueryGetDynamicStoreRequest`](#querygetdynamicstorerequest) | [`QueryGetDynamicStoreResponse`](#querygetdynamicstoreresponse) | `GET /bitbadges/bitbadgeschain/tokenization/get_dynamic_store/{storeId}` | Queries a dynamic store by ID. |
| `GetDynamicStoreValue` | [`QueryGetDynamicStoreValueRequest`](#querygetdynamicstorevaluerequest) | [`QueryGetDynamicStoreValueResponse`](#querygetdynamicstorevalueresponse) | `GET /bitbadges/bitbadgeschain/tokenization/get_dynamic_store_value/{storeId}/{address}` | Queries a dynamic store value by store ID and address. |
| `GetWrappableBalances` | [`QueryGetWrappableBalancesRequest`](#querygetwrappablebalancesrequest) | [`QueryGetWrappableBalancesResponse`](#querygetwrappablebalancesresponse) | `GET /bitbadges/bitbadgeschain/tokenization/get_wrappable_balances/{denom}/{address}` | Queries the maximum wrappable amount for a given denom and user address. |
| `IsAddressReservedProtocol` | [`QueryIsAddressReservedProtocolRequest`](#queryisaddressreservedprotocolrequest) | [`QueryIsAddressReservedProtocolResponse`](#queryisaddressreservedprotocolresponse) | `GET /bitbadges/bitbadgeschain/tokenization/is_address_reserved_protocol/{address}` | Queries if an address is a reserved protocol address. |
| `GetAllReservedProtocolAddresses` | [`QueryGetAllReservedProtocolAddressesRequest`](#querygetallreservedprotocoladdressesrequest) | [`QueryGetAllReservedProtocolAddressesResponse`](#querygetallreservedprotocoladdressesresponse) | `GET /bitbadges/bitbadgeschain/tokenization/get_all_reserved_protocol_addresses` | Queries all reserved protocol addresses. |
| `GetVote` | [`QueryGetVoteRequest`](#querygetvoterequest) | [`QueryGetVoteResponse`](#querygetvoteresponse) | `GET /bitbadges/bitbadgeschain/tokenization/get_vote/{collectionId}/{approvalLevel}/{approverAddress}/{approvalId}/{proposalId}/{voterAddress}` | Queries a vote by collection ID, approval level, approver address, approval ID, proposal ID, and voter address. |
| `GetVotes` | [`QueryGetVotesRequest`](#querygetvotesrequest) | [`QueryGetVotesResponse`](#querygetvotesresponse) | `GET /bitbadges/bitbadgeschain/tokenization/get_votes/{collectionId}/{approvalLevel}/{approverAddress}/{approvalId}/{proposalId}` | Queries all votes for a proposal. |
| `GetCollectionStats` | [`QueryGetCollectionStatsRequest`](#querygetcollectionstatsrequest) | [`QueryGetCollectionStatsResponse`](#querygetcollectionstatsresponse) | `GET /bitbadges/bitbadgeschain/tokenization/get_collection_stats/{collectionId}` | Queries collection stats (holder count and circulating supply) by collection ID. |
| `GetBalanceForToken` | [`QueryGetBalanceForTokenRequest`](#querygetbalancefortokenrequest) | [`QueryGetBalanceForTokenResponse`](#querygetbalancefortokenresponse) | `GET /bitbadges/bitbadgeschain/tokenization/get_balance_for_token/{collectionId}/{address}/{tokenId}` | Queries the balance amount for a specific token ID at a specific time. |

## Messages

### QueryGetAddressListRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `listId` | 1 | `string` | singular |   |

### QueryGetAddressListResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `list` | 1 | [`AddressList`](address_lists.md#addresslist) | singular |   |

### QueryGetAllReservedProtocolAddressesRequest

No fields.

### QueryGetAllReservedProtocolAddressesResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `addresses` | 1 | `string` | repeated |   |

### QueryGetApprovalTrackerRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `amountTrackerId` | 1 | `string` | singular |   |
| `approvalLevel` | 2 | `string` | singular | "collection" or "incoming" or "outgoing" |
| `approverAddress` | 3 | `string` | singular | if approvalLevel is "collection", leave blank |
| `trackerType` | 4 | `string` | singular |   |
| `collectionId` | 5 | `string` | singular |   |
| `approvedAddress` | 6 | `string` | singular | if trackerType is "overall", leave blank |
| `approvalId` | 7 | `string` | singular |   |

### QueryGetApprovalTrackerResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `tracker` | 1 | [`ApprovalTracker`](approval_tracking.md#approvaltracker) | singular |   |

### QueryGetBalanceForTokenRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular |   |
| `address` | 2 | `string` | singular |   |
| `tokenId` | 3 | `string` | singular |   |
| `time` | 4 | `string` | singular | Optional - milliseconds since epoch, defaults to current block time |

### QueryGetBalanceForTokenResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `balance` | 1 | `string` | singular |   |

### QueryGetBalanceRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular |   |
| `address` | 2 | `string` | singular |   |

### QueryGetBalanceResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `balance` | 1 | [`UserBalanceStore`](user_balance_store.md#userbalancestore) | singular |   |

### QueryGetChallengeTrackerRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular |   |
| `approvalLevel` | 2 | `string` | singular | "collection" or "incoming" or "outgoing" |
| `approverAddress` | 3 | `string` | singular | if approvalLevel is "collection", leave blank |
| `challengeTrackerId` | 4 | `string` | singular |   |
| `leafIndex` | 5 | `string` | singular |   |
| `approvalId` | 6 | `string` | singular |   |

### QueryGetChallengeTrackerResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `numUsed` | 1 | `string` | singular |   |

### QueryGetCollectionRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular |   |

### QueryGetCollectionResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collection` | 1 | [`TokenCollection`](collections.md#tokencollection) | singular |   |

### QueryGetCollectionStatsRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular |   |

### QueryGetCollectionStatsResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `stats` | 1 | [`CollectionStats`](collections.md#collectionstats) | singular |   |

### QueryGetDynamicStoreRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `storeId` | 1 | `string` | singular |   |

### QueryGetDynamicStoreResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `store` | 1 | [`DynamicStore`](dynamic_stores.md#dynamicstore) | singular |   |

### QueryGetDynamicStoreValueRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `storeId` | 1 | `string` | singular |   |
| `address` | 2 | `string` | singular |   |

### QueryGetDynamicStoreValueResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `value` | 1 | [`DynamicStoreValue`](dynamic_stores.md#dynamicstorevalue) | singular |   |

### QueryGetETHSignatureTrackerRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular |   |
| `approvalLevel` | 2 | `string` | singular | "collection" or "incoming" or "outgoing" |
| `approverAddress` | 3 | `string` | singular | if approvalLevel is "collection", leave blank |
| `approvalId` | 4 | `string` | singular |   |
| `challengeTrackerId` | 5 | `string` | singular |   |
| `signature` | 6 | `string` | singular |   |

### QueryGetETHSignatureTrackerResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `numUsed` | 1 | `string` | singular |   |

### QueryGetVoteRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular |   |
| `approvalLevel` | 2 | `string` | singular | "collection" or "incoming" or "outgoing" |
| `approverAddress` | 3 | `string` | singular | if approvalLevel is "collection", leave blank |
| `approvalId` | 4 | `string` | singular |   |
| `proposalId` | 5 | `string` | singular |   |
| `voterAddress` | 6 | `string` | singular |   |

### QueryGetVoteResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `vote` | 1 | [`VoteProof`](challenges.md#voteproof) | singular |   |

### QueryGetVotesRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular |   |
| `approvalLevel` | 2 | `string` | singular | "collection" or "incoming" or "outgoing" |
| `approverAddress` | 3 | `string` | singular | if approvalLevel is "collection", leave blank |
| `approvalId` | 4 | `string` | singular |   |
| `proposalId` | 5 | `string` | singular |   |

### QueryGetVotesResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `votes` | 1 | [`VoteProof`](challenges.md#voteproof) | repeated |   |

### QueryGetWrappableBalancesRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `denom` | 1 | `string` | singular |   |
| `address` | 2 | `string` | singular |   |

### QueryGetWrappableBalancesResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `amount` | 1 | `string` | singular |   |

### QueryIsAddressReservedProtocolRequest

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `address` | 1 | `string` | singular |   |

### QueryIsAddressReservedProtocolResponse

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `isReservedProtocol` | 1 | `bool` | singular |   |

### QueryParamsRequest

QueryParamsRequest is request type for the Query/Params RPC method.

No fields.

### QueryParamsResponse

QueryParamsResponse is response type for the Query/Params RPC method.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `params` | 1 | [`Params`](params.md#params) | singular | params holds all the parameters of this module. |
