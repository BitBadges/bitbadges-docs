---
description: "Generated schema for tokenization/packet.proto: 2 messages in the x/tokenization module."
---

# tokenization/packet.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 2 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/packet.proto).

## Messages

### NoData

NoData is a placeholder packet type (legacy scaffold).

No fields.

### TokenizationPacketData

TokenizationPacketData defines the packet data for the tokenization module.

It uses a oneof to support multiple packet types over the same IBC channel.

Fields marked `oneof packet` are mutually exclusive.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `noData` | 1 | [`NoData`](#nodata) | oneof `packet` |   |
| `ownershipQuery` | 2 | [`OwnershipQueryPacket`](icq.md#ownershipquerypacket) | oneof `packet` | ICQ (Interchain Query) packet types for cross-chain token ownership verification OwnershipQuery: Query for a single token ID and ownership time -&gt; returns amount |
| `ownershipQueryResponse` | 3 | [`OwnershipQueryResponsePacket`](icq.md#ownershipqueryresponsepacket) | oneof `packet` |   |
| `bulkOwnershipQuery` | 4 | [`BulkOwnershipQueryPacket`](icq.md#bulkownershipquerypacket) | oneof `packet` |   |
| `bulkOwnershipQueryResponse` | 5 | [`BulkOwnershipQueryResponsePacket`](icq.md#bulkownershipqueryresponsepacket) | oneof `packet` |   |
| `fullBalanceQuery` | 6 | [`FullBalanceQueryPacket`](icq.md#fullbalancequerypacket) | oneof `packet` | FullBalanceQuery: Query for complete balance store -&gt; returns full UserBalanceStore |
| `fullBalanceQueryResponse` | 7 | [`FullBalanceQueryResponsePacket`](icq.md#fullbalancequeryresponsepacket) | oneof `packet` |   |
