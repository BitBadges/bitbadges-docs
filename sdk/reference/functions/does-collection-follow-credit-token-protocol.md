---
description: "Return true if the collection has at least one credit- mint approval — cheap structural check used as the \"is this a Credit Token?\" gate. The builder…"
---

# Function: doesCollectionFollowCreditTokenProtocol()

> **doesCollectionFollowCreditTokenProtocol**(`collection`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/credit-tokens.ts:72](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/credit-tokens.ts#L72)

Return true if the collection has at least one `credit-*` mint approval —
cheap structural check used as the "is this a Credit Token?" gate. The
builder explicitly tags `standards: ['Credit Token']` so we prefer that
when present.

## Parameters

### collection

`Readonly`\<[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc)\<`bigint`\>\>

## Returns

`boolean`
