---
description: "Task guides for BitBadges. Start with the AI builder, then follow CLI, TypeScript SDK, and JSON examples for direct integration."
---

# Guides

Each guide takes one job (create a token, distribute it, gate access, sign users in) and connects the creation flow to working commands. Concepts are not re-explained here; each step links to the canonical page in the Token Standard tab.

For the pitch behind each build (which two or three approval fields turn the standard into a stablecoin, a subscription, or an agent vault), read [Use Cases](../use-cases/README.md) first.

## Start with a Prompt

[Set up your AI](../agents/setup.md) and describe the result you want. The builder assembles and checks the transaction; you review and sign through a browser link.

```text
Create a 100-piece NFT collection called Demo NFTs where only I can mint,
validate and simulate it, and give me the review link.
```

Follow [Your First Collection](../start/first-collection.md) for a complete prompt-to-collection walkthrough. To embed this creation flow in application code, see [Programmatic Agent](../agents/programmatic-agent.md).

## Follow the Implementation

The CLI, SDK, and JSON examples below show how each build works and support repeatable integrations. For these examples:

- Install `bb` using the [Quickstart](../start/quickstart.md).
- Examples target mainnet. Replace example addresses, collection IDs, metadata URIs, and dates with your own values before signing. The signer needs BADGE for fees and any coins or tokens the transaction spends. See [Testnet](../chain/testnet.md) for availability.
- Review transaction JSON with `bb check` and `bb preview`, then sign with your wallet. See [Deploy](../cli/deploy.md) or the [SDK signing client](../sdk/transactions/README.md).

## Guides

| Task | Surfaces | Guide |
| --- | --- | --- |
| Create an NFT or fungible collection | `bb` CLI, SDK, JSON | [Create a Collection](create-a-collection.md) |
| Mint tokens and hand them out (creator mint, public mint, paid mint, escrow payouts) | `bb` CLI, SDK, JSON | [Mint and Distribute](mint-and-distribute.md) |
| Decide who can transfer, burn, or force-move tokens | SDK, JSON | [Set Transferability](set-transferability.md) |
| Freeze supply, approvals, metadata, or the whole collection | JSON, SDK | [Lock Permissions](lock-permissions.md) |
| Distribute with codes, allowlists, socials, and other claim plugins | BitBadges site, BitBadges API | [Distribute with Claims](distribute-with-claims.md) |
| Write your own claim plugin | BitBadges API | [Build a Claim Plugin](build-a-claim-plugin.md) |
| Gate an API route or page by token ownership (BB-402) | BitBadges API, SDK | [Gate access](gate-access.md) |
| Add "Sign in with BitBadges" to an app | BitBadges API | [Sign In Users](sign-in-users.md) |
| Make tokens spendable as an x/bank coin and over IBC | `bb` CLI, SDK, JSON | [Wrap to an IBC Denom](wrap-to-an-ibc-denom.md) |
| Create pools, swap, and add liquidity | `bb` CLI, BitBadges API | [Trade on the DEX](trade-on-the-dex.md) |
| Sell recurring subscriptions, prepaid credits, and expiring tokens | `bb` CLI, JSON | [Subscriptions and Time-Based Tokens](subscriptions-and-time-based-tokens.md) |
| Issue a 1:1 backed token or an AI agent vault | `bb` CLI, SDK, JSON | [Smart Tokens and Vaults](smart-tokens-and-vaults.md) |

## Reading Order

For a new token, read the first four guides in order. They build one collection: create it, add mint approvals, set post-mint transferability, then lock what must never change. The remaining guides stand alone.

## Related

- [Token Standard concepts](../token-standard/concepts/README.md)
- [CLI build commands](../cli/build.md)
- [Agents](../agents/README.md)
