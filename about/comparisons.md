---
description: "How the BitBadges L1 and token standard compare to other chains and to ERC-3643, and how ERC-3643 works as an interface on BitBadges."
---

# Comparisons

BitBadges is its own Cosmos SDK Layer 1 with a token standard that works like an API: the logic is implemented once in the module, and each collection customizes it through messages. This page compares that design to other protocols and to ERC-3643 (T-REX), the leading standard for regulated securities.

## BitBadges L1 Versus Other Protocols

### Chain Architecture

BitBadges is a Layer 1, not a Layer 2 or a sidechain. It is built with the Cosmos SDK, which gives it the IBC ecosystem and every other Cosmos feature. The token standard is not EVM, ERC-20, or Bitcoin Ordinals compatible. It is a separate standard built on Cosmos foundations.

### Security Model

BitBadges is less decentralized today than the largest protocols, and decentralization grows over time. The intended role is one part of an application stack rather than the whole of it. An application can use BitBadges for authentication and gating while accepting payments in its native currency.

### Cross-Chain Interoperability

IBC connects BitBadges to other chains, so the token standard is usable from any Cosmos chain and tokens wrap to IBC denoms. See [IBC](../token-standard/ibc/README.md).

### Token Standard

Protocols such as Ethereum rely on ERC-20 and ERC-721, which need a smart contract deployment per token. That approach grows complex, adds a new attack surface per contract, and does not model the structure most use cases need. On BitBadges, everything is implemented natively and a collection customizes the requests, which is why the BitBadges site is no-code by default.

### Smart Contract Support

Ethereum and Solana have broad smart contract support. BitBadges does not run ERC-20 contracts natively, but it does support EVM contracts, which can extend the module and build dApps through precompiles. The goal remains a standard where custom contracts are never needed. See [EVM](../chain/evm/README.md).

## BitBadges and ERC-3643

ERC-3643 and BitBadges are not competing standards. They operate at different layers. The BitBadges standard enforces compliance at the protocol level, and ERC-3643 can serve as a Solidity interface that calls into it through EVM precompiles. A Solidity developer keeps the ERC-3643 API and gets protocol-level enforcement behind it.

### Overview

ERC-3643 (T-REX, Token for Regulated EXchanges) is an Ethereum standard for compliant security tokens. It is ratified through the ERC process, has facilitated more than $32 billion in tokenized assets, and is the most widely adopted standard for institutional tokenized securities.

BitBadges enforces compliance rules, transfer restrictions, and approval logic in the chain itself. No contract deployment is needed. For EVM developers, precompiles expose the native standard through Solidity interfaces such as ERC-3643.

### Feature Comparison

| Feature | BitBadges protocol standard | ERC-3643 interface (through precompiles on BitBadges, or natively on Ethereum) |
| --- | --- | --- |
| Enforcement layer | Protocol level; the chain enforces the rules | Contract level; Solidity contracts enforce the rules |
| Smart contracts required | No; collections are configured through transaction messages | Yes; each token deploys several contracts (token, identity registry, compliance module, claim topics) |
| Deployment experience | No-code site, CLI template builders, or MCP builder tools | Developer only; needs Solidity expertise and contract deployment |
| Multi-chain support | Native IBC to all Cosmos chains | Bridge dependent, unless deployed on BitBadges |
| Identity and compliance | Built-in approval criteria: ownership requirements, merkle proofs, signature challenges, on-chain queries | ONCHAINID identity framework with claim topics and trusted issuers |
| Transfer restrictions | Per-approval rules: address lists, time windows, amount limits, tracker-based caps, 2FA gating, coin payment requirements | Compliance modules with rule contracts (country restrictions, investor limits, time locks) |
| Permissioning | Granular, lockable permissions; each field can be frozen or left manager-controlled independently | Owner and agent roles with recovery mechanisms |
| Token types | Fungible tokens, NFTs, subscriptions, vaults, prediction markets, bounties, and more from one standard | Primarily fungible equity and security tokens |
| Forced transfers | Admin override approvals | Recovery and forced transfer functions |
| Supply control | Configurable mint and burn rules with lockable permissions | Mint and burn controlled by token agents |

### ERC-3643 Strengths

- Institutional adoption: a ratified Ethereum standard with more than $32B in tokenized assets and major financial institutions behind it.
- Regulatory track record: purpose-built for securities compliance with established legal frameworks.
- Ecosystem maturity: identity providers, compliance modules, and institutional tooling.
- ONCHAINID: a mature decentralized identity framework for KYC and AML.

### BitBadges Strengths

- No smart contract development: a compliant token is configured through transaction parameters or the no-code site.
- Protocol-level guarantees: transfer rules cannot be bypassed by a contract bug or an upgradeable proxy exploit.
- Broader token types: subscriptions, prediction markets, vaults, auctions, bounties, and NFTs from the same standard.
- Agent friendly: MCP builder tools and CLI template builders let AI agents create and manage compliant tokens.
- Cosmos ecosystem: native IBC to more than 50 chains without bridges.
- Lower barrier: no Solidity, gas optimization, or contract auditing.

### How They Work Together

Through EVM precompiles, a Solidity contract calls the native token standard with the ERC-3643 function signatures developers already know. The precompile bridges the call; the chain enforces the transfer rules, identity checks, and compliance logic, not the contract. The ERC-3643 interface is optional: the no-code site, the CLI builders, and the MCP builder tools talk to the protocol standard directly. See [Tokenization Precompile](../chain/evm/tokenization-precompile/README.md) and the [ERC-3643 specification](https://erc3643.info/).

## Related

- [Why BitBadges](README.md)
- [Transferability](../token-standard/concepts/transferability.md)
- [Permissions](../token-standard/concepts/permissions.md)
- [EVM](../chain/evm/README.md)
