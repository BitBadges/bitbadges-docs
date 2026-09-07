---
description: "One token standard, twelve products. Each page shows the approval fields that turn the standard into a stablecoin, a subscription, an agent vault, or a store."
---

# Use Cases

Every product on these pages is the same `x/tokenization` collection with different approvals. There is no contract per product. A stablecoin, a subscription, a bounty, an auction, and an AI agent budget differ only in which `approvalCriteria` fields are set and on which approval level.

The pattern repeats on every page:

- One collection holds the tokens. `validTokenIds` says how many kinds exist.
- Collection approvals say who can move tokens, when, and what happens on each move (a coin payment, a burn, a mint, a vote check).
- User approvals (outgoing and incoming) let holders set their own terms, such as a bid, a listing, or a spend limit for a delegate.
- Permissions and invariants lock the parts that must never change.

Each page is a pitch with the fields that matter, not a tutorial. The last section of every page links the skill, the guide, and the `bb build` template, and gives a prompt to paste into an agent.

## Pages

| Use case | Read it when you want to | Core primitive |
| --- | --- | --- |
| [Stablecoins and Backed Tokens](stablecoins-and-backed-tokens.md) | Issue a token backed 1:1 by USDC or any IBC coin, with deposit and withdraw rules | `cosmosCoinBackedPath`, `allowBackedMinting` |
| [Subscriptions](subscriptions.md) | Sell access that renews monthly and expires on its own | `durationFromTimestamp`, `coinTransfers` |
| [Payment Requests and Invoices](payment-requests-and-invoices.md) | Let an agent or merchant ask a specific payer for funds, with no escrow | `initiatedByListId`, `coinTransfers` |
| [Bounties and Escrow](bounties-and-escrow.md) | Lock funds up front and release them on a verifier's decision or a deadline | `mintEscrowCoinsToTransfer`, `votingChallenges` |
| [Agent Vaults and Spending Limits](agent-vaults-and-spending-limits.md) | Give an AI agent money with a daily cap, a time window, and one-transaction revocation | `approvalAmounts`, `resetTimeIntervals`, `mustOwnTokens` |
| [Token-Gated Access](token-gated-access.md) | Gate an API, a page, or a download behind ownership with BB-402 | soulbound mint approval, `AccessCondition` |
| [NFTs and Collectibles](nfts-and-collectibles.md) | Mint 1-of-1s or editions and decide if they trade, burn, or stay soulbound | `validTokenIds`, post-mint approvals, listings and bids |
| [Crowdfunding and Auctions](crowdfunding-and-auctions.md) | Raise toward a goal with refunds, or sell one item to the best bid | `mustOwnTokens` on self, bounded `transferTimes` |
| [Prediction Markets](prediction-markets.md) | Mint YES and NO pairs against USDC, trade them, settle by vote | paired `predeterminedBalances`, `votingChallenges`, alias paths |
| [Loyalty Points and Credits](loyalty-points-and-credits.md) | Sell prepaid credits at a fixed rate, or pay out rewards per completed quest | `allowAmountScaling`, `merkleChallenges`, mint escrow |
| [Memberships and Address Lists](memberships-and-address-lists.md) | Keep an allowlist, a ban list, a DAO roster, or a 2FA token on-chain | `Mint` and burn approvals, `!` list inversion, `allowPurgeIfExpired` |
| [Product Catalogs and Commerce](product-catalogs-and-commerce.md) | Sell SKUs with independent prices, supply caps, and burn-on-purchase | one purchase approval per token ID, `maxNumTransfers` |

## Related

- [Guides](../guides/README.md)
- [Approval Criteria](../token-standard/approval-criteria/README.md)
- [Builder skills](../agents/skills/README.md)
- [bb build](../cli/build.md)
