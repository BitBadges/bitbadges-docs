---
description: "Curated palettes for placeholder art."
---

# Interface: Palette

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/palettes.ts:15](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/palettes.ts#L15)

Curated palettes for placeholder art.

Each palette is a small hand-picked set of colors (2-4 stops) that
look intentional side-by-side. Values are tuned for:
  - Contrast against white AND dark dashboards
  - Sans-serif monograms legibility (first stop ~ background, last stop ~ accent)
  - Tasteful range: jewel tones, duotones, muted pastels, sunset/ocean gradients

Adding palettes is additive and deterministic — the hash % palettes.length
selection in `index.ts` stays stable for existing seeds as long as new
palettes are appended to the END of this array (never inserted mid-list).

## Properties

### name

> **name**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/palettes.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/palettes.ts#L17)

Human-readable label — surfaced in tool result for debugging.

***

### stops

> **stops**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/palettes.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/palettes.ts#L19)

Gradient stops, ordered light → dark (or cool → warm). 2-4 entries.

***

### text

> **text**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/palettes.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/palettes.ts#L21)

Text color used for monograms / glyphs. High-contrast against the mid-stop.
