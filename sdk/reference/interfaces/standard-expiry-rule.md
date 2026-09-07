---
description: "A clock-only status transition: a row whose status is activeStatus and whose endTime has passed is treated as expiredStatus at query time — no tx fires for…"
---

# Interface: StandardExpiryRule

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L54)

A clock-only status transition: a row whose status is `activeStatus` and
whose `endTime` has passed is treated as `expiredStatus` at query time —
no tx fires for this (e.g. a PaymentRequest auto-expiring). Standards that
only transition via on-chain tx (which already triggers a rebuild) omit it.

## Properties

### activeStatus

> **activeStatus**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:55](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L55)

***

### expiredStatus

> **expiredStatus**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:56](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L56)
