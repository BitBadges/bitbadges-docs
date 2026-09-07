---
description: "Verified TypeScript examples for the bitbadges SDK helpers, balances, uint ranges, transfers, address lists, metadata, approvals, and interpreters."
---

# Snippets

Working examples for the SDK helper classes and functions. Each snippet imports from `bitbadges` and uses the names exported by the current package.

| Page | Use it for |
| --- | --- |
| [Address Conversions](address-conversions.md) | `0x` and `bb1` conversion, address validation |
| [Uint Ranges](uint-ranges.md) | `UintRange` and `UintRangeArray`: merge, search, invert, remove, overlaps |
| [Balances](balances.md) | `BalanceArray`: add, subtract, look up by token ID and time |
| [Balance Lookups](balance-lookups.md) | Fetch a balance from the API, the chain, or the CLI; full array vs single amount |
| [Transfers](transfers.md) | `TransferWithIncrements` for batch and sequential distribution |
| [Address Lists](address-lists.md) | `AddressList`: membership checks, inversion, reserved lists |
| [Token Metadata](token-metadata.md) | `TokenMetadataDetails`: update, remove, and read metadata per token ID |
| [Approvals](approvals.md) | Find unhandled (disapproved) approval combinations, append default user approvals |
| [Interpret a Collection](interpret-collection.md) | `interpretCollection`: a plain-language report of an on-chain collection |
| [Interpret a Transaction](interpret-transaction.md) | `interpretTransaction`: a plain-language report of an unsigned `MsgUniversalUpdateCollection` |
| [Simulation Balance Diffs](simulation-balance-diffs.md) | `simulateAndReview`, `parseSimulationEvents`, `calculateNetChanges` |

Concepts behind these helpers live in the [Token standard](../../token-standard/concepts/README.md). The generated API is at the [SDK reference](../reference/README.md).
