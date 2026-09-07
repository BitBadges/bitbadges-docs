---
description: "Pin a specific palette name. Case-sensitive. Overrides hash."
---

# Interface: GeneratePlaceholderArtInput

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts#L34)

## Properties

### paletteName?

> `optional` **paletteName?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts#L47)

Pin a specific palette name. Case-sensitive. Overrides hash.

***

### seed

> **seed**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts#L36)

Deterministic seed — usually the asset's name. Empty → `'BitBadges'`.

***

### style?

> `optional` **style?**: [`PlaceholderArtStyle`](/sdk/reference/type-aliases/placeholder-art-style)

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts#L38)

Style override. `'auto'` (default) picks from hash + vibe.

***

### symbol?

> `optional` **symbol?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts:43](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts#L43)

Text overlay on presets that use one. 1-3 chars recommended.
Omit to derive from the seed (first letter, or initials).

***

### vibe?

> `optional` **vibe?**: [`PlaceholderArtVibe`](/sdk/reference/type-aliases/placeholder-art-vibe)

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts#L45)

Biases the auto-style pick toward styles that match the vibe.
