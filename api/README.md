---
description: "The BitBadges API in one page. Base URL, API keys, credits and pricing, rate limits, number types, errors, and the refresh queue."
---

# BitBadges API

The BitBadges API is the hosted REST service at `https://api.bitbadges.io` that indexes the chain and adds off-chain features (claims, sign in, metadata, search). Use it from any backend with an API key.

## Example

```bash
curl -X POST https://api.bitbadges.io/api/v0/collections/fetch \
  -H "Content-Type: application/json" \
  -H "x-api-key: <your-api-key>" \
  -d '{ "collectionsToFetch": [ { "collectionId": "1" } ] }'
```

```ts
import { BigIntify, BitBadgesAPI } from 'bitbadges';

const BitBadgesApi = new BitBadgesAPI({
  apiKey: process.env.BITBADGES_API_KEY,
  convertFunction: BigIntify, // or Numberify, Stringify
  apiUrl: 'https://api.bitbadges.io' // default when omitted
});

const res = await BitBadgesApi.getCollections({ collectionsToFetch: [{ collectionId: '1' }] });
```

```bash
bb api get-collection 1
```

Every route is documented in the [API reference](/api-reference). The reference groups routes by tag (Accounts, Tokens, Claims, Sign In with BitBadges, Transactions, Applications, Plugins, Dynamic Stores, On-Chain Dynamic Stores, Utility Pages, Miscellaneous, Assets).

## What is on this tab

| Page | Read it when |
| --- | --- |
| [Pagination and views](pagination-and-views.md) | A response returns `bookmark` and `hasMore`, or you fetch a `views` object. |
| [Swaps](swaps.md) | You want a swap estimate and the messages to execute it. |
| [Claims](claims/README.md) | You gate a mint or an app on off-chain criteria. Concepts, then [endpoints](claims/endpoints.md), [plugins](claims/plugins.md), and [dynamic stores](claims/dynamic-stores.md). |
| [Sign In with BitBadges](sign-in/README.md) | You want users to prove address ownership or grant your app API scopes. |
| [Self-hosting](self-hosting.md) | You want to run the indexer and API yourself. |

## API keys

1. Sign in at [https://bitbadges.io/developer](https://bitbadges.io/developer) and open the **API Keys** tab.
2. Create a key. Send it in the `x-api-key` header on every request.
3. Top up credits in the same tab.

Select read-only routes are public without a key and are rate limited per IP. Everything else requires a key. A route that needs a key answers `401` with `{ "errorMessage": "Unauthorized request. This route is only accessible with an API key." }` when the key is missing.

The SDK also reads `BITBADGES_API_KEY` from the environment when `apiKey` is not passed. The CLI reads the same variable (see [CLI api](../cli/api.md)).

## Credits and pricing

API credits (on-chain symbol `APITOKEN`) meter API calls. Every request debits one credit from the account that owns the key.

| Item | Value |
| --- | --- |
| API request | 1 credit per request, every route |
| Exchange rate | 1 USDC = 100,000 credits, so 100,000 requests cost about $1 |
| Tiers, subscriptions, card on file | None |
| Refunds | None. Credits are non-refundable. |
| Transfers | None. Credits are soulbound to the account that buys them. |
| Expiry | None |

To top up: open [https://bitbadges.io/developer](https://bitbadges.io/developer), **API Keys** tab, enter a USDC amount, confirm the on-chain transaction. The balance updates once the transfer confirms. The same card shows the current balance and a low-balance warning.

The legacy hosted AI Builder on the site drew from the same credit balance and charged per model call based on tokens read and written, with the exact cost quoted before a run. It is being retired. Build tokens with your own AI instead: see [Agents setup](../agents/setup.md).

### Balance

```bash
curl https://api.bitbadges.io/api/v0/credits/balance \
  -H "Authorization: Bearer <access-token>"
```

```json
{
  "onChainTotal": 100000,
  "used": 423,
  "remaining": 99577,
  "decimals": 6
}
```

The balance route needs a signed-in session with the `Full Access` scope. It is served with website-only CORS, so call it from a server, not a browser on another origin. `onChainTotal`, `used`, and `remaining` are display `APITOKEN` (1 credit = 1 request). `decimals` is the on-chain base-unit scale (`base = display * 10^decimals`). The off-chain `used` counter is only exposed to the account owner. The `402` response below is the simplest way to read it without a session.

### Out of credits (402)

When the balance is zero, every request answers `402 Payment Required`:

```json
{
  "error": "Insufficient credits",
  "errorMessage": "Insufficient API credits. Top up at /developer?tab=apiKeys.",
  "topUpUrl": "/developer?tab=apiKeys",
  "onChainTotal": 100,
  "used": 100,
  "remaining": 0,
  "decimals": 6
}
```

The key stays valid. Catch the `402`, prompt the account owner to top up, and retry once the balance confirms on-chain.

## Rate limits and size limits

| Limit | Value |
| --- | --- |
| Requests per account (all keys combined) | 10,000 per minute. Answers `429` with `{ "errorMessage": "Exceeded rate limit. Too many requests." }` |
| Requests without a key (public routes) | 10 per 10 seconds per IP |
| Metadata URIs per request | 250 |
| Account lookups per request | 250 |
| Collection fetches per request | 250 |
| IPFS uploads | 100 MB total per address |
| Collection size | Limited functionality above JavaScript `Number.MAX_SAFE_INTEGER` |
| External fetch timeout (metadata URIs, plugin endpoints, hooks) | 10 seconds |
| Failed fetch retry | Exponential backoff: `delay = 1 hour * 2^attempts` |
| Manual metadata refresh | Once per 5 minutes per collection |

The per-account limit exists to stop runaway loops. Contact BitBadges if you need a higher ceiling. Limits can change.

## Number types

Responses stringify numbers to avoid precision loss. Convert them yourself (bigint is the safe choice) or let the SDK do it through `convertFunction`. See [SDK types](../sdk/types.md).

## Route naming

This documentation often shows the SDK call. The raw HTTP route is the same name under `/api/v0`:

```ts
await BitBadgesApi.routeFn(...)
```

```bash
POST https://api.bitbadges.io/api/v0/routeFn
```

Use the [API reference](/api-reference) for the exact method, path, and body of each route.

## Errors

Errors return a JSON body with `errorMessage`:

```json
{ "errorMessage": "Collection not found" }
```

Common codes: `400` invalid payload, `401` missing or invalid key or session, `402` no credits, `404` not found, `429` rate limited, `500` server error. The SDK throws on any non-2xx response.

## Authorization and scopes

Most apps only read public data and need no user authorization. To act on behalf of a user (complete claims, read private claim data, manage claims), use [Sign In with BitBadges](sign-in/README.md). It is a standard OAuth 2.0 flow. Request scopes in the authorization URL and send the access token as `Authorization: Bearer <token>`. The [API reference](/api-reference) lists the scope each route needs.

## Refresh queue

The API fetches anything behind a source URI (metadata, off-chain balances) through a load-balanced queue, then caches the result until the next refresh. New metadata can take a moment to populate.

Refreshes trigger automatically on-chain events such as collection creation or a URI change. You can also trigger one manually, subject to the cooldown above:

```ts
await BitBadgesApi.refreshMetadata(collectionId);
const status = await BitBadgesApi.getRefreshStatus(collectionId);
```

```bash
curl -X POST https://api.bitbadges.io/api/v0/collection/1/refresh -H "x-api-key: <key>"
curl https://api.bitbadges.io/api/v0/collection/1/refreshStatus -H "x-api-key: <key>"
```

Failed fetches retry with the backoff in the limits table. On the site, a collection page under **Actions** then **Refresh** shows the same status and any error documents.

## Testnet

A testnet API exists at `https://api.bitbadges.io/testnet` with the same routes under the `/testnet` prefix. It is a separate service: keys, credits, and data do not carry over. Testnet is offline at the time of writing. See [Testnet](../chain/testnet.md) for status.

## Related

- [API reference](/api-reference)
- [SDK](../sdk/README.md)
- [CLI api](../cli/api.md)
- [Sign In with BitBadges](sign-in/README.md)
