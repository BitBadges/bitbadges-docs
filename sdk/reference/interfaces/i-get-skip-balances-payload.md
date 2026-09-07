---
description: "Get Skip Balances Route: POST /api/v0/skip/balances"
---

# Interface: iGetSkipBalancesPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4424](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4424)

Get Skip Balances
Route: POST /api/v0/skip/balances

## Properties

### chains

> **chains**: `Record`\<`string`, `string`[] \| \{ `address`: `string`; `denoms?`: `string`[]; \}\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4429](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4429)

Map of chain_id → either an array of addresses, or an object with an address and optional denoms.
Mirrors Skip:Go /v2/info/balances.
