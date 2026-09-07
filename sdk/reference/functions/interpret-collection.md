---
description: "Produces a thorough markdown explanation of a BitBadgesCollection, structured as a professional report with full paragraphs, proper headings, and…"
---

# Function: interpretCollection()

> **interpretCollection**\<`T`\>(`collection`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/interpret.ts:336](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/interpret.ts#L336)

Produces a thorough markdown explanation of a BitBadgesCollection,
structured as a professional report with full paragraphs, proper
headings, and human-readable values.

Privacy: Sensitive fields (seed codes, preimages, private params,
template info, signature challenge content, voting challenge content)
are never included in the output.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### collection

[`BitBadgesCollection`](/sdk/reference/classes/bit-badges-collection)\<`T`\> \| [`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection)\<`T`\>

A BitBadgesCollection instance or plain interface object

## Returns

`string`

A single markdown string with a comprehensive explanation
