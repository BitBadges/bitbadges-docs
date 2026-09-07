---
description: "What the x/tokenization module is, how its pieces fit together, and the order to read this tab in."
---

# Token standard

`x/tokenization` is the Cosmos SDK module that defines BitBadges tokens. Read this tab if you build against the chain directly or need to understand the rules an application enforces on your behalf.

## What the module does

A collection is an on-chain object that holds tokens with numeric IDs. Every transfer of those tokens runs through an approval engine that checks three layers of rules: the collection's rules, the sender's rules, and the recipient's rules. The manager configures the collection's rules and locks them with permissions. Nothing runs in a smart contract; the module enforces every rule on every transfer.

```bash
bb query tokenization get-collection 1
```

Main properties:

- No code and no smart contracts. Everything is module state and Cosmos messages.
- Three approval levels (collection, outgoing, incoming) that a transfer must satisfy.
- Approval criteria that gate transfers on payments, proofs, votes, token ownership, dynamic stores, EVM queries, and time.
- Any IBC coin can be attached to a transfer as a payment.
- Tokens can be wrapped into `x/bank` denoms for IBC and for the DEX.
- Extendable with the EVM precompiles and the extension hooks.

## Module map

| Area | What it covers | Read when |
| --- | --- | --- |
| [Concepts](concepts/README.md) | The data model: ranges, balances, collections, address lists, approvals, permissions | First. Everything else assumes it. |
| [Approval criteria](approval-criteria/README.md) | Every field of `approvalCriteria` and how each one is enforced | Designing transferability |
| [Messages](messages/README.md) | One page per transaction message | Building a transaction |
| [Queries](queries/README.md) | One page per query | Reading chain state |
| [IBC and x/bank](ibc/README.md) | Alias denoms, wrapper paths, backed minting, transfer hooks, rate limits | Moving tokens across chains or into the DEX |
| [Modules](modules/README.md) | `x/gamm`, `x/managersplitter`, `x/sendmanager`, `x/poolmanager` | Using the DEX or shared management |
| [EVM](evm/README.md) | Precompiles and Solidity integration | Writing contracts against tokens |
| [Integrate](integrate/README.md) | Standards, extension hooks, ante handler gates | Extending the chain itself |
| [BB-402](bb-402/README.md) | Payment-required protocol built on approvals | Charging for access |
| [Network](network/README.md) | Chain IDs, denoms, endpoints, nodes, testnet status | Connecting a client |

## Reading order

1. [Concepts](concepts/README.md), in the order that page lists.
2. [Approval criteria](approval-criteria/README.md) once you know what an approval is.
3. [Messages](messages/README.md) and [Queries](queries/README.md) as reference while you build.

Most application developers do not need this tab. The BitBadges API returns balances and metadata, and the `bb` CLI and MCP builder tools generate valid transactions without hand-writing the structures described here.

## Related

- [Proto definitions](https://github.com/bitbadges/bitbadgeschain/tree/master/proto/tokenization)
- [bitbadgeschain repository](https://github.com/bitbadges/bitbadgeschain)
