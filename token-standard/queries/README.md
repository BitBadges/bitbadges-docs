---
description: "Every x/tokenization gRPC query with its LCD REST path and bb CLI command. One page per query."
---

# Queries

The `x/tokenization` module exposes 16 read-only queries. Each is reachable three ways: the `bb query tokenization` CLI, the LCD REST endpoint under `https://lcd.bitbadges.io`, and gRPC. Every query page shows the CLI command, the REST path, and the response shape.

For indexed, paginated, or historical data (activity, metadata, claims, search) use the [BitBadges API](../../api/README.md). Chain queries return current state only.

## Collections and balances

| Query | CLI | What it returns |
| --- | --- | --- |
| [GetCollection](get-collection.md) | `collection [id]` | The full `TokenCollection` record. |
| [GetCollectionStats](get-collection-stats.md) | `collection-stats [id]` | Holder count and circulating supply. |
| [GetBalance](get-balance.md) | `balance [id] [address]` | An address's `UserBalanceStore`: balances, approvals, flags, permissions. |
| [GetBalanceForToken](get-balance-for-token.md) | `balance-for-token [id] [address] [token-id] [time]` | The amount of one token ID owned at one time. |
| [GetWrappableBalances](get-wrappable-balances.md) | `wrappable-balances [denom] [address]` | Maximum amount an address can wrap into a denom. |

## Address lists and dynamic stores

| Query | CLI | What it returns |
| --- | --- | --- |
| [GetAddressList](get-address-list.md) | `address-list [id]` | An address list, including reserved IDs. |
| [GetDynamicStore](get-dynamic-store.md) | `dynamic-store [store-id]` | Store config: default, kill switch, metadata. |
| [GetDynamicStoreValue](get-dynamic-store-value.md) | `dynamic-store-value [store-id] [address]` | The boolean stored for one address. |

## Approval trackers and challenges

| Query | CLI | What it returns |
| --- | --- | --- |
| [GetApprovalTracker](get-approval-tracker.md) | `approvals-trackers ...` | Cumulative transfers and amounts for an approval tracker. |
| [GetChallengeTracker](get-challenge-tracker.md) | `num-used-for-merkle-challenge ...` | Times a Merkle leaf has been used. |
| [GetETHSignatureTracker](get-eth-signature-tracker.md) | `num-used-for-eth-signature-challenge ...` | Times an ETH signature has been used. |
| [GetVote](get-vote.md) | `vote ...` | One voter's vote on a voting challenge. |
| [GetVotes](get-votes.md) | `votes ...` | Every vote on a voting challenge. |

## Protocol

| Query | CLI | What it returns |
| --- | --- | --- |
| [Params](params.md) | `params` | Module parameters. |
| [IsAddressReservedProtocol](is-address-reserved-protocol.md) | `is-address-reserved-protocol [address]` | Whether an address is reserved. |
| [GetAllReservedProtocolAddresses](get-all-reserved-protocol-addresses.md) | `all-reserved-protocol-addresses` | Every reserved protocol address. |

## Conventions

- `approvalLevel` is `collection`, `incoming`, or `outgoing`.
- `approverAddress` is empty for `collection`. In a REST path, an empty segment produces `//`, which the LCD accepts.
- Numbers are strings. Uint values up to `18446744073709551615` are common for open-ended ranges.
- Add `--node https://rpc.bitbadges.io:443` (or your node) to CLI commands when running off-box.

## Related

- [Messages](../messages/README.md)
- [Network](../network/README.md)
- [BitBadges API](../../api/README.md)
