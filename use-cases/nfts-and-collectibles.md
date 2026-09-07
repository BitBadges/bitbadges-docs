---
description: "Mint 1-of-1s or editions, choose tradable, burnable, or soulbound per approval, and get listings and bids from user approvals instead of a contract."
---

# NFTs and Collectibles

An NFT collection is `validTokenIds` set to a range and a mint approval. Every question a marketplace contract usually answers (can it trade, can it burn, who takes a royalty, what is listed at what price) is an approval on the collection or on a holder's own account. Listings and bids are outgoing and incoming approvals with a coin transfer attached, so the orderbook lives in the same place as the tokens.

Editions are the same collection with an amount above 1 per token ID. Soulbound is the same collection with no post-mint approval.

## What Makes It Work

| Requirement | Token-standard primitive |
| --- | --- |
| 100 unique tokens | `validTokenIds: [{ "start": "1", "end": "100" }]` and amount `1` per transfer. See [Collections](../token-standard/concepts/collections.md) |
| Per-token metadata | `tokenMetadata` URI with an `{id}` placeholder |
| Tradable | A post-mint approval `fromListId: "!Mint"`, `toListId: "All"`, plus the `NFTMarketplace` and `NFTPricingDenom:ubadge` standards. See [Set Transferability](../guides/set-transferability.md) |
| Listed at a price | The seller's outgoing approval with `coinTransfers` to the seller. `bb build listing` writes it |
| Bid on a token or the whole collection | The bidder's incoming approval with `coinTransfers` from the bidder. `bb build bid` writes it |
| Royalty on every sale | `userApprovalSettings` on the collection approval. See [User Approval Settings](../token-standard/approval-criteria/user-approval-settings.md) |
| Supply capped forever | `invariants.maxSupplyPerId` and `canUpdateValidTokenIds` locked. See [Minting and Supply](../token-standard/concepts/minting-and-supply.md) |

## The Fields That Matter

```json
{
  "standards": ["NFTs", "NFTMarketplace", "NFTPricingDenom:ubadge"],
  "validTokenIds": [{ "start": "1", "end": "100" }],
  "tokenMetadata": [{ "tokenIds": [{ "start": "1", "end": "100" }], "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json" }],
  "collectionApprovals": [
    {
      "approvalId": "creator-mint",
      "fromListId": "Mint",
      "toListId": "All",
      "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "approvalCriteria": { "overridesFromOutgoingApprovals": true }
    },
    {
      "approvalId": "transferable-approval",
      "fromListId": "!Mint",
      "toListId": "All",
      "initiatedByListId": "All",
      "approvalCriteria": {}
    }
  ]
}
```

Delete `transferable-approval` and the collection is soulbound. Replace `toListId: "All"` with the burn address and it is burnable but not tradable.

```bash
bb build listing --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --collection-id 1 --token-ids 4 --price 40 --denom USDC --expiration 30d
bb build bid --address bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --collection-id 1 --price 35 --denom USDC --expiration 7d
```

The first emits a MsgSetOutgoingApproval that sells token 4 for 40 USDC to whoever executes it. The second emits a MsgSetIncomingApproval that buys any token in the collection for 35 USDC. When a transfer matches both, the token and the coins move in one transaction.

## Variations

- Editions: mint amount `50` of token ID 1 instead of amount `1` of IDs 1 to 50.
- Allowlist mint: `merkleChallenges` on the mint approval, or a [claim](../guides/distribute-with-claims.md) with plugins that emit the proof.
- Paid mint: `coinTransfers` on the mint approval with the price.
- Admin revocation: a manager-only approval with both override flags, for a ticket that must be voidable.
- One-item sale with a bidding window: an [auction](crowdfunding-and-auctions.md), where the token is minted straight to the winner.

## Build It

- Skill: [NFT Collection](../agents/skills/nft-collection.md), [Tradable](../agents/skills/tradable.md), [Burnable](../agents/skills/burnable.md)
- Guide: [Create a Collection](../guides/create-a-collection.md), [Set Transferability](../guides/set-transferability.md)
- CLI: [`bb build listing`](../cli/build.md#listing), [`bb build bid`](../cli/build.md#bid), `bb nfts` from [Standards](../cli/standards.md#nfts)

```text
Load the nft-collection and tradable skills. Create a 500-piece collection called Demo Relics with metadata at ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json, where only I can mint, holders can trade, and supply is locked. Validate, review, simulate, then give me the review link.
```
