---
description: "Size of the data URI in bytes (post-base64)."
---

# Interface: GeneratePlaceholderArtResult

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts#L50)

## Properties

### bytes

> **bytes**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts:58](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts#L58)

Size of the data URI in bytes (post-base64).

***

### imageUri

> **imageUri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts#L52)

`data:image/svg+xml;base64,...` — drop directly into any image field.

***

### palette

> **palette**: [`Palette`](/sdk/reference/interfaces/palette)

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts:56](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts#L56)

The palette that was used — name + stops + text color.

***

### style

> **style**: `"gradient-mono"` \| `"geometric-tile"` \| `"letterform"` \| `"orbital"` \| `"mesh"` \| `"glyph"`

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts#L54)

The style that was actually chosen (resolved if `style === 'auto'`).

***

### svg

> **svg**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts#L60)

The minified SVG string (pre-base64) — useful for debugging / previews.

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/index.ts#L62)

The symbol that actually got rendered on the art.
