---
description: "Call any BitBadges API route from the terminal with bb api, search routes, print schemas, and attach a session."
---

# bb api

`bb api <group> <route> [path-params] [flags]` calls a BitBadges API route. The route list is generated from the OpenAPI spec, so `bb api --help` and `bb api --search` are the current inventory.

## Example

```bash
bb api tokens get-collection 1
bb api accounts get-account --body '{"address":"bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"}'
bb api accounts get-accounts --body '{"accountsToFetch":[{"address":"bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"}]}'
bb api tx broadcast-tx --body @tx.json
bb api accounts get-tokens-view-for-user bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --body '{"viewType":"collected"}'   # GET: body becomes query params
bb api tokens get-collection 1 --dry-run                                          # print the request, do not send
bb api --search swap | jq -r '.data.matches[] | "\(.name)\t\(.method)\t\(.path)"'
bb api tokens get-collection --schema
```

`bb api accounts get-account` for the fixture address returns (mainnet output, `views` and empty arrays trimmed):

```json
{
  "ok": true,
  "data": {
    "account": {
      "bitbadgesAddress": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "ethAddress": "0x0bC63Cfe31D5218eB414b142c799e20964a54A1A",
      "accountNumber": "-1",
      "sequence": "-1",
      "balances": [{ "amount": "0", "denom": "ubadge" }],
      "pubKeyType": "secp256k1",
      "publicKey": "",
      "chain": "Cosmos",
      "address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
    }
  },
  "warnings": [],
  "error": null
}
```

{% hint style="info" %}
Ask your agent. `query_collection`, `query_balance`, and `search` wrap the most-used routes: "Fetch collection 1 and tell me whether bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d holds any of its tokens."
{% endhint %}

## Route Groups

```bash
bb api --help            # groups with route counts
bb api tokens --help     # routes in one group
bb api all --help        # every route, flat
```

| Group | Routes for |
| --- | --- |
| `accounts` | Accounts and users |
| `tokens` | Collections and tokens |
| `claims` | Claims |
| `auth` | Sign In with BitBadges and OAuth |
| `tx` | Broadcast and simulate |
| `apps` | Developer apps |
| `plugins` | Plugins |
| `stores` | Off-chain dynamic data stores |
| `onchain-stores` | On-chain dynamic stores |
| `pages` | Utility pages |
| `maps` | On-chain maps and protocols |
| `assets` | DEX, pools, asset pairs |
| `misc` | Everything else |
| `all` | Every route, ungrouped |

Path parameters are positional. Each route's `--help` shows the HTTP method, path template, SDK type names, key body and query fields, and an SDK example where one exists.

## Flags

| Flag | Description |
| --- | --- |
| `--body <json>` | Request body: inline JSON, `@file.json`, or `-` for stdin. On GET routes it is converted to query params. |
| `--query <json>` | Query params as a JSON object |
| `--dry-run` | Print method, URL, headers, and body without sending |
| `--schema` | Print the route's request body fields, query params, and SDK type names. No API call. |
| `--with-session` | Attach the cookie of the active address for the resolved network (see [Auth](auth.md)) |
| `--as-address <addr>` | Attach the cookie of a specific stored address (overrides `--with-session`) |
| `--condensed`, `--output-file <path>` | Output flags |
| `--api-key`, `--network`, `--mainnet`, `--testnet`, `--local`, `--url` | [Network flags](README.md#network-flags) |

## Discovery

`bb api --search <keyword>` scans route name, path, tag, and description (case-insensitive substring) and returns matches in the envelope. `bb api --search balance` prints (trimmed to the first three matches):

```json
{
  "ok": true,
  "data": {
    "search": "balance",
    "matches": [
      { "name": "get-user-balances", "method": "GET", "path": "/account/{address}/balances", "tag": "accounts", "description": "Get User Balances" },
      { "name": "get-balance-by-address-specific-token", "method": "GET", "path": "/collection/{collectionId}/balance/{address}/{tokenId}", "tag": "tokens", "description": "Get Balance By Address - Specific Token" },
      { "name": "get-balance-by-address", "method": "GET", "path": "/collection/{collectionId}/balance/{address}", "tag": "tokens", "description": "Get Balances By Address" }
    ]
  },
  "warnings": [],
  "error": null
}
```

`bb api <group> <route> --schema` prints the route shape so an agent can build a valid body offline. For `bb api tokens get-collection --schema`:

```json
{
  "ok": true,
  "data": {
    "name": "get-collection",
    "method": "GET",
    "path": "/collection/{collectionId}",
    "description": "Get Collection",
    "pathParams": ["collectionId"],
    "hasBody": false,
    "sdkLinks": {
      "response": "iGetCollectionSuccessResponse",
      "function": "BitBadgesAPI.getCollection"
    },
    "queryParams": [],
    "bodyFields": [],
    "requestSchema": null,
    "responseSchema": null,
    "example": null
  },
  "warnings": [],
  "error": null
}
```

## Behavior

- An API key is required on every call (`bb settings set apiKey "$BITBADGES_API_KEY"` or the `BITBADGES_API_KEY` variable). Get one at [bitbadges.io/developer](https://bitbadges.io/developer).
- Routes gated by Full Access also need a user session. On HTTP 401 or 403 the envelope carries a `hint` that says to run `bb auth login` and retry with `--with-session`; if a cookie was already attached, the hint suggests a re-login.
- `--with-session` is opt-in; the CLI never attaches a cookie silently.
- Credits, limits, and error shapes: [API](../api/README.md).

## Related

- [Auth](auth.md)
- [Account](account.md)
- [API](../api/README.md)
