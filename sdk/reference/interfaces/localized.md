---
description: "Localized string bag. en is always populated. Additional language codes (e.g. es) are optional — consumers should fall back to en when the user's preferred…"
---

# Interface: Localized

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L19)

Localized string bag. `en` is always populated. Additional language
codes (e.g. `es`) are optional — consumers should fall back to `en`
when the user's preferred language is missing.

Strings are pre-interpolated at finding-creation time. There is no
runtime template substitution — if a check needs to inject a name or
count, it builds the string inline via template literals.

## Indexable

> \[`lang`: `string`\]: `string` \| `undefined`

## Properties

### en

> **en**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L20)
