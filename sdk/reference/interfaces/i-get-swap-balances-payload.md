---
description: "Get Swap Balances Route: POST /api/v0/swap/balances"
---

# Interface: iGetSwapBalancesPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4558](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4558)

Get Swap Balances
Route: POST /api/v0/swap/balances

Same request shape as `/skip/balances`. Response is normalized to
`{ balances: { [chainId]: { [address]: iSwapBalance[] } } }`. For
BitBadges chains, server-side enrichment adds CoinsRegistry bank
balances + computed wrappable amounts for verified badgeslp:/badges: denoms.

## Properties

### chains

> **chains**: `Record`\<`string`, `string`[] \| \{ `address`: `string`; `denoms?`: `string`[]; \}\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4563](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4563)

Map of chain_id → either an array of addresses, or an object with an address and optional denoms.
Mirrors Skip:Go /v2/info/balances.
