---
description: "Task guides for BitBadges. Each one gets you to a working result with the bb CLI first, then the TypeScript SDK and raw JSON."
---

# Guides

Each guide takes one job (create a token, distribute it, gate access, sign users in) and shows the working commands first. Concepts are not re-explained here; each step links to the canonical page in the Token Standard tab.

Every guide assumes:

- `bb` is installed (see the [Quickstart](../start/quickstart.md)).
- Examples target mainnet. The testnet is offline; see [Testnet](../chain/testnet.md).
- Transaction JSON is signed and broadcast with `bb deploy` (see [Deploy](../cli/deploy.md)) or the [SDK signing client](../sdk/transactions/README.md).

{% hint style="info" %}
**Ask your agent.** Every guide here has a matching prompt. With the MCP builder tools installed, paste one of these to skip the hand-written JSON:

```text
Create a 100-piece NFT collection called Demo NFTs where only I can mint, and give me the review link.
```

```text
Build a subscription token that renews monthly for 5 USDC.
```
{% endhint %}

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
