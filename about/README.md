---
description: "Why BitBadges exists, the three theses behind it, the design decisions, and what the x/tokenization standard provides."
---

# Why BitBadges

BitBadges is a Cosmos SDK Layer 1 built around one module, `x/tokenization`, that serves as a complete token standard for RWAs, compliance, payments, and custom transferability. This page states the reasoning behind that choice. The mechanics live in the [Token Standard](../token-standard/README.md) tab.

| Page | Read it when |
| --- | --- |
| [Use cases](use-cases.md) | You want to know what people build with the standard |
| [Comparisons](comparisons.md) | You are coming from ERC-20, ERC-3643, or another L1 |
| [BADGE token](badge-token.md) | You need the native coin, its purposes, and the validator model |
| [Links and resources](links.md) | You want the app, explorer, socials, brand assets, or how to contribute |
| [FAQ](faq.md) | You have a short question, including the fee schedule |

## Theses

1. The next wave of tokenization needs a new standard. Existing ones are built on older technology and are not enough.
2. Compliance and transferability are not an allowlist, a blocklist, or a transferable-versus-soulbound switch. They are a set of moving parts: time gating, ownership checks, approvals, who can send to whom, who can initiate, revocation, freezing, and more. On-chain compliance has to handle all of these automatically, and that logic belongs in the token standard, not in a manually updated list.
3. A standardized, reusable, no-code approach wins over per-use-case smart contracts over time.

The motive is the same as the theses. Blockchains and interoperability have potential that the current infrastructure and token standards cannot deliver.

## Problems with existing standards

ERC-20, ERC-721, CW-20, ICS-20, `x/bank`, `x/tokenfactory`, and `x/nft` cover many use cases, but the approach has structural problems:

- Too simple. Mint, transfer, and burn are not enough for most real-world applications. The industry has stayed on these primitives for more than ten years because of technical debt.
- Vulnerable by default. Each token contract is a new deployment and a new attack surface, and each needs its own audit.
- Complex and expensive. Even a basic contract needs technical knowledge to implement, deploy, and maintain.
- Low interoperability. Tokens stay siloed in one ecosystem, which splits a user base across chains. IBC is the best current answer and still leaves room to improve.
- Fragmented. Competing standards add incompatible twists, which creates confusion.

## Design decisions

### Universality

One standard for NFTs, fungible tokens, subscriptions, quests, credentials, real-world assets, and regulatory compliance. The standard is a superset of the existing ones, so a token can be used compatibly where a simpler standard is expected.

### A module, not contracts

The standard is a Cosmos SDK module. Every feature is implemented once and reused by every collection. Creating a collection is a message with parameters, which is how the BitBadges site is no-code by default. The expectation is that nearly all users never write code, whatever the complexity of the use case. One reusable, tested code path replaces a new contract per token.

### Ever-evolving

Features are added to the module as the need appears, without accruing technical debt in deployed contracts. If a use case is missing, the answer is to add it to the standard.

### IBC-first

BitBadges is Cosmos native with IBC at the core:

1. Any token wraps to an ICS-20 or ICS-721 denom for use on any IBC-enabled chain.
2. Payments, subscriptions, swaps, and liquidity can use any IBC denom.
3. The module is IBC-enabled, so core messages can run over IBC, including one-signature multi-hop transfers.

For example, a team can create a token on BitBadges, wrap 20% of the supply to ICS-20, send 10% to Osmosis, send 10% to an EVM chain over IBC Eureka, and keep the rest under time-dependent release in the native module. Think of BitBadges as a layer above IBC: launch on BitBadges for the features, wrap to IBC for reach.

### Value-add over duplication

BitBadges prioritizes utility that Cosmos does not already have. Where a service already exists in the ecosystem, the preferred path is to wrap tokens and send them there over IBC rather than rebuild it.

## What the standard provides

### Time-dependent accounting

Every balance carries ownership times, down to the millisecond. A balance is an ownership right for a token id over a time range. Bob can own token 5 until next July, at which point ownership ends with no further transaction. This supports auto-expiring and renewing subscriptions, vesting, and time-based release schedules. Recurring subscriptions combine this with a bot-tipping system for the recurring payment.

### Three transferability levels

1. Collection-level approvals. The manager defines the collection-wide rules and can override user-level approvals when configured to.
2. Outgoing approvals. Each sender sets rules for transfers out (for example listings).
3. Incoming approvals. Each recipient sets rules for transfers in (for example bids).

A transfer succeeds only if the sender has the balance, a collection-level approval matches, and the outgoing and incoming approvals match (unless the collection approval overrides them). The same checks run on swaps, in liquidity pools, and on IBC transfers, so compliance holds regardless of the application.

### Approval criteria

Every approval, on every level, can specify who can send, who can receive, who can initiate, transfer times, ownership times, predetermined or tallied amounts, the number of transfers, revocability, freezing, BADGE or other IBC coin transfers, royalties, recurrence, non-transferability, incrementing token ids, and ownership of other tokens. See [Approval criteria](../token-standard/approval-criteria/README.md).

### Off-chain criteria

An oracle-like path lets a service check off-chain criteria and hand the user a signed code to redeem on-chain. BitBadges runs one such service with no-code plugins for more than 7,000 apps: Discord membership, X followers, email, passwords and claim codes, private off-chain data, AI agents, and custom endpoints. Anyone can run their own criteria service to remove the trust assumption on BitBadges. See [Distribute with claims](../guides/distribute-with-claims.md).

### Manager permissions

Each collection can have a manager with fine-grained, lockable permissions: update metadata, update transferability, archive, delete, add tokens, pause transfers, throttle volume, and more. Checks and balances are enforced on-chain. See [Permissions](../token-standard/concepts/permissions.md).

### EVM and IBC extension

The goal is that every use case works natively. Where custom logic is needed, EVM contracts call into the module through precompiles, and the module reaches other environments over IBC. See [EVM](../chain/evm/README.md).

## Related

- [Token Standard](../token-standard/README.md)
- [Quickstart](../start/quickstart.md)
- [Comparisons](comparisons.md)
