---
description: "Produces a thorough markdown explanation of a raw MsgUniversalUpdateCollection transaction body, structured as a professional report with full paragraphs…"
---

# Function: interpretTransaction()

> **interpretTransaction**(`txBody`, `isUpdate?`, `activeUpdateFlags?`, `messages?`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/interpret-transaction.ts:332](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/interpret-transaction.ts#L332)

Produces a thorough markdown explanation of a raw MsgUniversalUpdateCollection
transaction body, structured as a professional report with full paragraphs,
proper headings, and human-readable values.

Unlike interpretCollection() which works with hydrated BitBadgesCollection
instances, this function works with the raw JSON `value` object from the
transaction message. All values are strings or numbers, not BigInt.

## Parameters

### txBody

`Record`\<`string`, `any`\>

The raw `value` object from MsgUniversalUpdateCollection

### isUpdate?

`boolean`

Whether this is an update to an existing collection (default: false)

### activeUpdateFlags?

`string`[]

The list of fields being updated (e.g., ['updateCollectionApprovals'])

### messages?

`any`[]

Optional full messages array for multi-message transactions

## Returns

`string`

A single markdown string with a comprehensive explanation
