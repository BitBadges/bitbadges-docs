---
description: "Short answers on smart contracts, compliance enforcement, L1 versus L2, ERC compatibility, EVM extension, and the protocol fee schedule."
---

# FAQ

Short answers to the questions that come up most. Each answer links to the page with the detail.

## Are smart contracts needed?

No. One universal standard supports every use case with no code and no smart contracts. It is a Cosmos SDK module reused for every token type.

## How is compliance checked on every transfer?

The `collectionApprovals` of a collection are checked on every transfer. They define the collection-wide transferability rules. A transfer that satisfies no collection approval fails. Because the rules live at the collection level, they hold in every application, pool, and IBC transfer. See [Transferability](../token-standard/concepts/transferability.md).

## Is BitBadges an L1 or an L2?

BitBadges is its own Layer 1 built with the Cosmos SDK.

## Why a registry instead of a contract per collection?

A reusable standard exercised thousands of times beats unique, vulnerable contracts over the long run. The registry approach also improves scalability, consistency, and standardization.

## Are tokens ERC-721, ERC-20, or ERC-3643 compatible?

No. The standard takes inspiration from ERC-721 but has its own properties and architecture. It is a superset of those standards, so tokens can be used compatibly where needed, and ERC-3643 works as a Solidity interface through precompiles. See [Comparisons](comparisons.md).

## Can the standard be extended with smart contracts?

Yes. The token standard is a Cosmos module. The aim is that no smart contract is ever needed, but EVM environments can call into the module, and the module can call into other environments. See [EVM](../token-standard/evm/README.md).

## What does the protocol charge? Can I add affiliate fees?

BitBadges charges a 0.1% fee at the protocol level on swaps and on paid transfers:

- `x/tokenization` transfers with coin payments (`coinTransfers`): 0.1% in the payment denom.
- `x/gamm` swaps: a 0.1% taker fee.

Plain `x/tokenization` transfers without a payment, and IBC or `x/bank` sends, carry no protocol fee.

Affiliate fees are yours to design on top of that:

- `x/tokenization`: add another coin transfer to the approval (for example a 0.1% payout to the initiator).
- `x/gamm`: an affiliates field is built into the protocol. The protocol itself takes nothing from it. The BitBadges API takes a 20% cut of affiliate fees routed through it.

## Related

- [Why BitBadges](README.md)
- [BADGE token](badge-token.md)
- [Links and resources](links.md)
