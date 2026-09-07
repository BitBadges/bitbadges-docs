---
description: "Converts to a JS number. Lossy above 2^53 — Number.MAXSAFEINTEGER — and it does NOT throw: values are silently rounded."
---

# Function: Numberify()

> **Numberify**(`item`): `number`

Defined in: [packages/bitbadgesjs-sdk/src/common/string-numbers.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/string-numbers.ts#L34)

Converts to a JS `number`. **Lossy above 2^53** — `Number.MAX_SAFE_INTEGER` —
and it does NOT throw: values are silently rounded.

Values that legitimately exceed 2^53 on BitBadges include uint64 range
sentinels (`18446744073709551615`), post-v34 hash-derived account numbers,
and nanosecond unordered-tx sequence nonces (BB-34). Never use `Numberify`
on data that must round-trip exactly — especially `accountNumber` and
`sequence`, which feed signing. Use `BigIntify`, `Stringify`, or
`NumberifyIfPossible` (which falls back to a string) instead.

## Parameters

### item

[`NumberType`](/sdk/reference/type-aliases/number-type)

## Returns

`number`
