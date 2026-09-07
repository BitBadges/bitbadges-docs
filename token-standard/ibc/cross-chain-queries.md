---
description: "Interchain queries let another Cosmos chain verify x/tokenization ownership over IBC without moving tokens. Packet types, channel setup, Go examples."
---

# Cross-chain queries

Other Cosmos chains can verify token ownership on BitBadges over IBC with interchain queries. Tokens stay in the BitBadges silo; the remote chain receives a balance answer. Use this for cross-chain gating, collateral checks, shared credentials, and ownership-weighted governance. To move value across chains, wrap first (see [Cosmos coin wrapper paths](cosmos-coin-wrapper-paths.md)).

```go
// Create ownership query packet for a single token ID and time
query := &types.OwnershipQueryPacket{
    QueryId:       "my-query-123",
    Address:       "bb1abc...",      // or "0x..." format
    CollectionId:  "5",
    TokenId:       "1",              // Single token ID
    OwnershipTime: "1609459200000",  // Single timestamp (ms)
}

// Wrap in packet data
packetData := &types.TokenizationPacketData{
    Packet: &types.TokenizationPacketData_OwnershipQuery{
        OwnershipQuery: query,
    },
}

// Send via IBC channel to BitBadges
// Response contains exact balance amount for that token/time
```

## Channel setup

| Setting | Value |
| --- | --- |
| Port | `tokenization` |
| Version | `tokenization-1` |
| Ordering | `UNORDERED` |

## Packet types

Two query shapes exist. `OwnershipQuery` answers one (token ID, ownership time) pair with an exact amount. `FullBalanceQuery` returns the whole `UserBalanceStore`.

### OwnershipQueryPacket

| Field | Type | Description |
| --- | --- | --- |
| `query_id` | string | Correlation ID |
| `address` | string | Address to check (bech32 or 0x hex) |
| `collection_id` | string | Collection to query |
| `token_id` | string | One token ID (uint as string) |
| `ownership_time` | string | One ownership time (uint as string, typically a ms timestamp) |

### OwnershipQueryResponsePacket

| Field | Type | Description |
| --- | --- | --- |
| `query_id` | string | Correlation ID from the request |
| `owns_tokens` | bool | `true` when `total_amount > 0` |
| `total_amount` | Uint | Exact balance for the (token ID, ownership time) pair |
| `proof_height` | uint64 | Block height of the response |
| `error` | string | Error message, empty on success |

### FullBalanceQueryPacket

| Field | Type | Description |
| --- | --- | --- |
| `query_id` | string | Correlation ID |
| `address` | string | Address to check (bech32 or 0x hex) |
| `collection_id` | string | Collection to query |

### FullBalanceQueryResponsePacket

| Field | Type | Description |
| --- | --- | --- |
| `query_id` | string | Correlation ID from the request |
| `balance_store` | bytes | Serialized `UserBalanceStore` (protobuf bytes) |
| `proof_height` | uint64 | Block height of the response |
| `error` | string | Error message, empty on success |

`balance_store` decodes to:

- `balances`: `Balance[]` (amount, token ID ranges, ownership time ranges)
- `outgoingApprovals` and `incomingApprovals`
- `autoApproveSelfInitiatedOutgoingTransfers`, `autoApproveSelfInitiatedIncomingTransfers`, `autoApproveAllIncomingTransfers`
- `userPermissions`

### Bulk queries

`BulkOwnershipQueryPacket` carries `queries: OwnershipQueryPacket[]` and returns `BulkOwnershipQueryResponsePacket` with `responses: OwnershipQueryResponsePacket[]`. One packet may hold at most 100 queries.

## Full balance store example

```go
// Create full balance query packet
query := &types.FullBalanceQueryPacket{
    QueryId:      "my-query-456",
    Address:      "bb1abc...",
    CollectionId: "5",
}

// Wrap in packet data
packetData := &types.TokenizationPacketData{
    Packet: &types.TokenizationPacketData_FullBalanceQuery{
        FullBalanceQuery: query,
    },
}

// Send via IBC channel to BitBadges
// Response contains serialized UserBalanceStore with all data
```

## Use cases

- Cross-chain token gating: check ownership before granting access on another chain.
- DeFi collateral verification without transfer.
- Multi-chain identity: BitBadges tokens as credentials across the Cosmos ecosystem.
- Governance weighted by verified holdings.
- Approval checks: query the full store to inspect approval state.

## Related

- [Balances](../concepts/balances.md)
- [Cosmos coin wrapper paths](cosmos-coin-wrapper-paths.md)
- [BB-402](../bb-402/README.md)
