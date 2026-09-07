---
description: "Frontend-flavored looser check than isProductApproval — used to enumerate the products in a catalog rather than to validate conformance. Mirrors the FE's…"
---

# Function: isProductCatalogPurchaseApproval()

> **isProductCatalogPurchaseApproval**(`approval`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/products.ts:300](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/products.ts#L300)

Frontend-flavored looser check than `isProductApproval` — used to
enumerate the products in a catalog rather than to validate
conformance. Mirrors the FE's `ProductCatalogRegistry.isProductCatalogPurchaseApproval`.

## Parameters

### approval

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>

## Returns

`boolean`
