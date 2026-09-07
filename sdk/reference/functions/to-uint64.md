---
description: "Convert a Uint64Like to a bigint, rejecting anything that cannot represent a uint64 exactly. This is the single conversion point for account numbers and…"
---

# Function: toUint64()

> **toUint64**(`value`, `label?`): `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/common.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/common.ts#L25)

Convert a [Uint64Like](/sdk/reference/type-aliases/uint64-like) to a bigint, rejecting anything that cannot
represent a uint64 exactly. This is the single conversion point for
account numbers and sequences — a `number` above 2^53 has ALREADY lost
precision by the time it gets here, so it is rejected loudly instead of
silently signing for the wrong account.

## Parameters

### value

[`Uint64Like`](/sdk/reference/type-aliases/uint64-like)

### label?

`string` = `'value'`

## Returns

`bigint`
