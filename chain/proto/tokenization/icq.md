---
description: "Generated schema for tokenization/icq.proto: 6 messages in the x/tokenization module."
---

# tokenization/icq.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 6 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/icq.proto).

## Messages

### BulkOwnershipQueryPacket

BulkOwnershipQueryPacket allows querying multiple addresses/collections in a single IBC packet.

This is more efficient than sending multiple individual queries.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `query_id` | 1 | `string` | singular | Unique identifier for the bulk query |
| `queries` | 2 | [`OwnershipQueryPacket`](#ownershipquerypacket) | repeated | Individual queries to process (max 100 recommended) |

### BulkOwnershipQueryResponsePacket

BulkOwnershipQueryResponsePacket contains responses for all queries in a bulk request.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `query_id` | 1 | `string` | singular | Correlation ID from the original bulk request |
| `responses` | 2 | [`OwnershipQueryResponsePacket`](#ownershipqueryresponsepacket) | repeated | Responses in the same order as the original queries |

### FullBalanceQueryPacket

FullBalanceQueryPacket is sent from a querying chain to BitBadges to retrieve

the complete balance store for a user (balances, approvals, permissions).

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `query_id` | 1 | `string` | singular | Unique identifier for correlating request and response |
| `address` | 2 | `string` | singular | Address to get balance for (bech32 or EVM hex format) |
| `collection_id` | 3 | `string` | singular | Collection ID to query (uint as string for cross-chain compatibility) |

### FullBalanceQueryResponsePacket

FullBalanceQueryResponsePacket is sent from BitBadges back to the querying chain

with the complete balance store (serialized as bytes for cross-chain compatibility).

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `query_id` | 1 | `string` | singular | Correlation ID from the original request |
| `balance_store` | 2 | `bytes` | singular | The serialized UserBalanceStore (protobuf bytes) Contains balances, incoming/outgoing approvals, auto-approve settings, and permissions |
| `proof_height` | 3 | `uint64` | singular | Block height at which the response was generated |
| `error` | 4 | `string` | singular | Error message if the query failed (empty on success) |

### OwnershipQueryPacket

OwnershipQueryPacket is sent from a querying chain to BitBadges to verify token ownership.

The querying chain provides the address and token criteria, and BitBadges responds with

ownership status and optional cryptographic proof.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `query_id` | 1 | `string` | singular | Unique identifier for correlating request and response |
| `address` | 2 | `string` | singular | Address to check ownership for (bech32 or EVM hex format) |
| `collection_id` | 3 | `string` | singular | Collection ID to query (uint as string for cross-chain compatibility) |
| `token_id` | 4 | `string` | singular | Token ID to check ownership for (uint as string) |
| `ownership_time` | 5 | `string` | singular | Ownership time to check (uint as string, typically current time in milliseconds) |

### OwnershipQueryResponsePacket

OwnershipQueryResponsePacket is sent from BitBadges back to the querying chain

with the ownership verification result.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `query_id` | 1 | `string` | singular | Correlation ID from the original request |
| `owns_tokens` | 2 | `bool` | singular | True if the address owns any of the specified tokens (total_amount &gt; 0) |
| `total_amount` | 3 | `string` | singular | Total amount owned for the specified token IDs and ownership times |
| `proof_height` | 4 | `uint64` | singular | Block height at which the response was generated |
| `error` | 5 | `string` | singular | Error message if the query failed (empty on success) |
