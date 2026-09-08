---
description: "What people build with the BitBadges token standard, grouped by domain, with the feature each use case relies on."
---

# Use Cases

The token standard tokenizes assets, services, and rights with protocol-level transferability rules, payments in any IBC denom, and time-dependent balances. Any use case in crypto is a tokenization use case in some form, so the module also serves as a general primitive for application development.

## Asset Tokenization

- Compliant tokenized assets. Compliance checks run on every transfer at the protocol level, including in liquidity pools and orderbooks, so no application has to enforce the rules itself.
- Real-world assets. Jewelry, art, collectibles, or any product, purchasable with any IBC currency and moved with permissioned IBC transfers.
- Real estate with license verification. A property license is verified on every transfer, so only licensed properties move.
- Compliant ICS-20 derivatives. Wrap an existing ICS-20 token such as USDC into a derivative (for example clUSDC) backed 1:1 by the original, with rate limits, compliance checks, and withdrawal restrictions. This gives a chain a permissioned version of a standard token without modifying the token itself. See [Smart Tokens and Vaults](../guides/smart-tokens-and-vaults.md).

## NFTs and Collectibles

- Collectibles and profile pictures. Standard NFT mechanics with rarity and full transferability controls.
- Gated NFTs and quests. Mints gated by claim plugins or external integrations: email verification, Discord membership, or a custom requirement.
- Quest rewards. NFTs with payouts attached, gated by criteria-based approvals, for games, loyalty programs, and engagement campaigns.

## Soulbound Tokens and Compliance

- Soulbound tokens. A non-transferable collection locks tokens to addresses for achievements, credentials, attestations, and proof of anything.
- Compliance as a service. Keep your token on ERC-3643 or `x/bank` and use BitBadges as the compliance check by verifying ownership of compliance tokens: licenses, subscriptions, NFTs, KYC credentials, and address lists. Configure the approval criteria needed for the application rather than assuming token ownership proves every compliance requirement. See [Comparisons](comparisons.md).

## Subscriptions and Recurring Payments

- Auto-renewing subscriptions. Subscription tokens purchasable with any IBC currency that renew through bots, with optional provider revocation for cancellation policies. See [Subscriptions and Time-Based Tokens](../guides/subscriptions-and-time-based-tokens.md).
- Payroll automation. Recurring payments with no-code setup. Verify that recipients still hold an employment NFT or meet custom criteria before each payment.

## Securities and Financial Instruments

- Stocks with accredited investor KYC. Transferability approvals allow only verified investors to receive the security.
- Freezable and revocable currencies. The manager can freeze or revoke transfers, as regulated currencies, stablecoins, and other instruments require.
- Bonds and CDs with clawbacks. Administrative clawback controls built into the instrument.

## Time-Based Systems

- Vesting. Time-dependent balances and approvals release tokens on a schedule for employee options, token vesting, and gradual rewards.
- Time-vested escrow. Assets stay in custody until a time condition is met, for milestone payments and conditional releases.
- Expiring access tokens. Tickets and session credentials that expire through time-dependent balances.
- Auto-expiring occupation tokens. Rentals, bookings, and temporary ownership that end at a set time with no manual step.
- Rental agreements. Time-dependent leases with custom terms enforced through approvals. Contracts, payments, and access rights are on-chain and expire automatically.

## Legal and Compliance

- Dispute resolution and clearing. Define the rules to hold, freeze, or reverse transactions.
- Advanced admin controls. Revocability and freezability for regulatory compliance or emergency asset protection.
- Intellectual property rights. Patents and IP rights with licensing terms enforced on every transfer.

## Business Operations

- Refund and return policies. Receipt tokens with return policies expressed as transferability approvals and refunds paid out on-chain.
- Address lists and reputation. Public lists of scammers, compromised keys, and trusted entities that any application can reference.

## Features Every Use Case Shares

- Protocol-level enforcement: rules run in the chain, not in each application.
- Multi-currency: payments in any IBC-compatible denom.
- Custom transferability: who can transfer, to whom, and under what conditions.
- Time dependence: schedules, expirations, and vesting in the balance itself.
- Claim plugins and external integrations for off-chain eligibility checks.
- On-chain verification of configured approval criteria and submitted proofs; off-chain facts still depend on the services attesting to them.

## Related

- [Use Cases by Build](../use-cases/README.md)
- [Why BitBadges](README.md)
- [Guides](../guides/README.md)
- [Transferability](../token-standard/concepts/transferability.md)
