---
description: "T extends NumberType"
---

# Interface: iUserApprovalSettings\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:422](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L422)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### allowedDenoms?

> `optional` **allowedDenoms?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:424](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L424)

Restricts which denoms user-level coinTransfers can reference. If empty, all params-allowed denoms are permitted.

***

### disableUserCoinTransfers?

> `optional` **disableUserCoinTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:426](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L426)

If true, user-level approvals cannot trigger coinTransfers at all for transfers matched by this collection approval.

***

### userRoyalties?

> `optional` **userRoyalties?**: [`iUserRoyalties`](/sdk/reference/interfaces/i-user-royalties)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:428](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L428)

User-level royalties to enforce for transfers matched by this collection approval.
