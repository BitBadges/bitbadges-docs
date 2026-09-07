---
description: "Get User Balances Route: GET /api/v0/account/:address/balances"
---

# Interface: iGetUserBalancesPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4798](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4798)

Get User Balances
Route: GET /api/v0/account/:address/balances

Lean alternative to fetching `/users` with a `tokensCollected` view.
Returns ONLY the balance docs (no account wrapper, no metadata), so it
is the cheapest call for read-side flows that just need balances.

Use `getAccounts` / `getAccountsAndUpdate` when you also need account
fields (profile, bio, sequence, etc.).

## Properties

### bookmark?

> `optional` **bookmark?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4800](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4800)

Pagination bookmark from the previous response.

***

### limit?

> `optional` **limit?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4802](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4802)

Page size. Indexer-enforced max applies.
