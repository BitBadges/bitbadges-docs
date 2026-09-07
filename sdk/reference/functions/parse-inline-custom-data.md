---
description: "Parse + sanitize a free-form customData string into a Metadata object. Returns null on any failure (oversized, malformed JSON, wrong type, missing required…"
---

# Function: parseInlineCustomData()

> **parseInlineCustomData**(`customData`): [`Metadata`](/sdk/reference/classes/metadata)\<`bigint`\> \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/inlineCustomData.ts:108](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/inlineCustomData.ts#L108)

Parse + sanitize a free-form `customData` string into a `Metadata`
object. Returns `null` on any failure (oversized, malformed JSON,
wrong type, missing required shape, etc.). Never throws, never
returns the raw parsed object.

Required shape gate: must have at least one of `name`, `image`, or
`description` as a non-empty string. Per-preset stricter shapes are
enforced at write time by builders / CLI; this read-side helper
stays permissive on optionals so legacy customData with name-only
still resolves.

## Parameters

### customData

`string`

## Returns

[`Metadata`](/sdk/reference/classes/metadata)\<`bigint`\> \| `null`
