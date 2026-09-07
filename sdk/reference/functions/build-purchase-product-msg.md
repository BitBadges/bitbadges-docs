---
description: "Build the MsgTransferTokens that purchases one unit of a given product. Uses precalculateBalancesFromApproval so the chain figures out the mint balance from…"
---

# Function: buildPurchaseProductMsg()

> **buildPurchaseProductMsg**(`creator`, `collectionId`, `product`): [`PurchaseProductMsg`](/sdk/reference/interfaces/purchase-product-msg)

Defined in: [packages/bitbadgesjs-sdk/src/core/products.ts:349](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/products.ts#L349)

Build the MsgTransferTokens that purchases one unit of a given product.
Uses `precalculateBalancesFromApproval` so the chain figures out the
mint balance from the approval definition. Routes to the burn address
if the product is `burnOnPurchase` (consumable goods), else to creator.

## Parameters

### creator

`string`

### collectionId

`string`

### product

[`ExtractedProduct`](/sdk/reference/interfaces/extracted-product)

## Returns

[`PurchaseProductMsg`](/sdk/reference/interfaces/purchase-product-msg)
