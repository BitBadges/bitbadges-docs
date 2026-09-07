---
description: "A uint64 chain value (account number, sequence) as accepted by the SDK."
---

# Type Alias: Uint64Like

> **Uint64Like** = `number` \| `string` \| `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/common.ts:14](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/common.ts#L14)

A uint64 chain value (account number, sequence) as accepted by the SDK.

Chain v34 (cosmos-sdk 0.54) assigns hash-derived account numbers larger
than 2^53 to every new account, and unordered-tx sequence nonces can be
nanosecond timestamps — neither fits a JS `number`. Pass strings or
bigints; `number` stays accepted for small pre-v34 values only.
