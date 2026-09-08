---
description: "Short answers on smart contracts, compliance enforcement, L1 versus L2, ERC compatibility, EVM extension, and the protocol fee schedule."
---

# FAQ

Short answers to the questions that come up most. Each answer links to the page with the detail.

## Are Smart Contracts Needed?

A collection can be created and managed through native transaction messages without deploying a custom smart contract. Use the site, CLI, or SDK for the patterns supported by the module. Applications may still need backend logic or EVM contracts for behavior outside those primitives.

## How Is Compliance Checked on Every Transfer?

The `collectionApprovals` of a collection are checked on every transfer. They define the collection-wide transferability rules. A transfer that satisfies no collection approval fails. Because the rules live at the collection level, they hold in every application, pool, and IBC transfer. See [Transferability](../token-standard/concepts/transferability.md).

## Is BitBadges an L1 or an L2?

BitBadges is its own Layer 1 built with the Cosmos SDK.

## Why a Registry Instead of a Contract per Collection?

A reusable standard exercised thousands of times beats unique, vulnerable contracts over the long run. The registry approach also improves scalability, consistency, and standardization.

## Are Tokens ERC-721, ERC-20, or ERC-3643 Compatible?

Native collections use their own token model and are not automatically ERC contracts. EVM contracts can integrate through precompiles and expose compatible interfaces; the wrapper must map the native balances and permissions to that interface. See [Comparisons](comparisons.md).

## Can the Standard Be Extended with Smart Contracts?

Yes. The token standard is a Cosmos module. The aim is that no smart contract is ever needed, but EVM environments can call into the module, and the module can call into other environments. See [EVM](../chain/evm/README.md).

## What Does the Protocol Charge? Can I Add Affiliate Fees?

BitBadges charges a 0.1% fee at the protocol level on swaps and on paid transfers:

- `x/tokenization` transfers with coin payments (`coinTransfers`): 0.1% in the payment denom.
- `x/gamm` swaps: a 0.1% taker fee.

Plain `x/tokenization` transfers without a payment, and IBC or `x/bank` sends, carry no protocol fee.

Affiliate fees are yours to design on top of that:

- `x/tokenization`: add another coin transfer to the approval (for example a 0.1% payout to the initiator).
- `x/gamm`: an affiliates field is built into the protocol. The protocol itself takes nothing from it. The BitBadges API takes a 20% cut of affiliate fees routed through it.

## Related

- [Why BitBadges](README.md)
- [BADGE Token](badge-token.md)
- [Links and Resources](links.md)
