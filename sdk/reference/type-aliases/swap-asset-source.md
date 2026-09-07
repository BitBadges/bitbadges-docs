---
description: "Provenance marker for entries returned by the consolidated /swap/ endpoints."
---

# Type Alias: SwapAssetSource

> **SwapAssetSource** = `"skip"` \| `"coinregistry"` \| `"verified"` \| `"native"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4556](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4556)

Provenance marker for entries returned by the consolidated /swap/* endpoints.
 - `skip` — upstream Skip:Go API
 - `coinregistry` — BitBadges SDK's CoinsRegistry (IBC-20 metadata)
 - `verified` — verified AssetInfoDoc (BB-native or wrapped badgeslp:/badges:)
 - `native` — chain-native denom (e.g. `ubadge`)
