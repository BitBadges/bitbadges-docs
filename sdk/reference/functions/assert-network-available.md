---
description: "Throws a descriptive error if the requested network is currently disabled in NETWORKCONFIGS. Acts as the single choke point for the temporary testnet shutdown…"
---

# Function: assertNetworkAvailable()

> **assertNetworkAvailable**(`network`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L152)

Throws a descriptive error if the requested network is currently
disabled in `NETWORK_CONFIGS`. Acts as the single choke point for the
temporary testnet shutdown so SDK consumers fail fast with a clear
message instead of silently hitting dead hosts.

Override hatch: set `BITBADGES_TESTNET_OFFLINE=false` in the
environment to bypass the assertion (useful when running a private
chain at the testnet chain ID for local development).

## Parameters

### network

`string`

## Returns

`void`
