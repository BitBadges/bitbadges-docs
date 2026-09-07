---
description: "Sell SKUs on-chain with independent prices, supply caps, and burn-on-purchase. One purchase approval per product routes payment straight to the store."
---

# Product Catalogs and Commerce

A catalog is one token ID per product and one purchase approval per token ID. Each approval carries that product's price, its supply cap, and whether the buyer keeps a receipt token or the token burns on purchase (a consumable). Payment goes from the buyer to the store address in the same transaction as the mint. There is no cart contract and no escrow; a purchase is one MsgTransferTokens from `Mint`.

The receipt token is what makes the rest of the standard available: a receipt can gate a download with BB-402, be refunded through a return approval, or expire for a time-limited license.

## What Makes It Work

| Requirement | Token-standard primitive |
| --- | --- |
| Independent price per SKU | `coinTransfers` on each purchase approval, `overrideFromWithApproverAddress: false` so the buyer pays. See [Coin Transfers](../token-standard/approval-criteria/coin-transfers.md) |
| Exactly one unit per purchase | `predeterminedBalances.incrementedBalances.startBalances` of amount `1` for that token ID |
| Limited stock | `maxNumTransfers.overallMaxNumTransfers` = supply; `0` for unlimited. See [Approval Trackers](../token-standard/approval-criteria/approval-trackers.md) |
| Consumable versus keepsake | `toListId: "All"` mints a receipt to the buyer; `toListId` = burn address consumes it on purchase |
| Buyer can discard a receipt | One `!Mint` to burn-address approval over every product ID |
| Prices cannot change under a buyer | All permissions frozen at creation. See [Permissions](../token-standard/concepts/permissions.md) |

## The Fields That Matter

```json
{
  "approvalId": "product-purchase-1",
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "tokenIds": [{ "start": "1", "end": "1" }],
  "approvalCriteria": {
    "predeterminedBalances": {
      "incrementedBalances": { "startBalances": [{ "amount": "1", "tokenIds": [{ "start": "1", "end": "1" }], "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }] }] },
      "orderCalculationMethod": { "useOverallNumTransfers": true }
    },
    "coinTransfers": [{ "to": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", "coins": [{ "amount": "25000000", "denom": "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701" }], "overrideFromWithApproverAddress": false, "overrideToWithInitiator": false }],
    "maxNumTransfers": { "overallMaxNumTransfers": "100", "amountTrackerId": "product-purchase-1" },
    "overridesFromOutgoingApprovals": true,
    "overridesToIncomingApprovals": true
  }
}
```

Product 2 is the same approval on token ID 2 with its own price, and `toListId` set to the burn address if it is a consumable.

```bash
bb build product-catalog --store-address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d \
  --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json \
  --products '[{"name":"Widget","price":25,"denom":"USDC","maxSupply":100},{"name":"Pass","price":5,"denom":"USDC","burn":true}]'
```

This emits a `Products` collection with two purchase approvals, one burn approval, per-product token metadata, and frozen permissions.

## Variations

- Members-only pricing: a second purchase approval on the same token ID with a lower price and `mustOwnTokens` of a [membership](memberships-and-address-lists.md); buyers prioritize the one they qualify for.
- Pay in credits: `mustOwnTokens` of a [credit token](loyalty-points-and-credits.md) plus a burn of those credits in the same transaction.
- Time-limited license: mint receipts with `ownershipTimes` so the download gate closes after a year.
- Returns: a `!Mint` to burn-address approval with `coinTransfers` from the mint escrow back to the initiator, bounded by `transferTimes` to the return window.
- Drops: bound each purchase approval's `transferTimes` to the sale window, and add `perInitiatedByAddressMaxNumTransfers: "1"` for one per customer.

## Build It

- Skill: [Product Catalog](../agents/skills/product-catalog.md)
- Guide: [Mint and Distribute](../guides/mint-and-distribute.md) for paid mints, [Token-Gated Access](token-gated-access.md) to gate the delivery
- CLI: [`bb build product-catalog`](../cli/build.md#product-catalog), `bb products` from [Standards](../cli/standards.md#products)

```text
Load the product-catalog skill. Build a store paid to bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d with three products: Sticker Pack at 3 USDC unlimited, Poster at 20 USDC with 50 in stock, and Day Pass at 5 USDC that burns on purchase. Validate, review, simulate, then give me the review link.
```
