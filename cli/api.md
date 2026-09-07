---
description: "Call any BitBadges API route from the terminal with bb api, search routes, print schemas, and attach a session."
---

# bb api

`bb api <group> <route> [path-params] [flags]` calls a BitBadges API route. The route list is generated from the OpenAPI spec, so `bb api --help` and `bb api --search` are the current inventory.

## Example

```bash
bb api tokens get-collection 1
bb api accounts get-account --body '{"address":"bb1abc..."}'
bb api accounts get-accounts --body '{"accountsToFetch":[{"address":"bb1abc..."}]}'
bb api tx broadcast-tx --body @tx.json
bb api accounts get-tokens-for-user bb1abc... --body '{"viewType":"collected"}'   # GET: body becomes query params
bb api tokens get-collection 1 --dry-run                                          # print the request, do not send
bb api --search swap | jq -r '.data.matches[] | "\(.name)\t\(.method)\t\(.path)"'
bb api tokens get-collection --schema
```

## Route groups

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

`bb api --search <keyword>` scans route name, path, tag, and description (case-insensitive substring) and returns matches in the envelope.

```json
{
  "ok": true,
  "data": {
    "search": "balance",
    "matches": [
      { "name": "get-balance-by-address-specific-token", "method": "GET", "path": "/api/{version}/collection/{collectionId}/{tokenId}/balance/{address}", "tag": "accounts", "description": "..." }
    ]
  },
  "warnings": [],
  "error": null
}
```

`bb api <group> <route> --schema` prints `{ name, method, path, sdkLinks, queryParams, bodyFields }` so an agent can build a valid body offline.

## Behavior

- An API key is required on every call (`bb settings set apiKey ...` or `BITBADGES_API_KEY`). Get one at [bitbadges.io/developer](https://bitbadges.io/developer).
- Routes gated by Full Access also need a user session. On HTTP 401 or 403 the envelope carries a `hint` that says to run `bb auth login` and retry with `--with-session`; if a cookie was already attached, the hint suggests a re-login.
- `--with-session` is opt-in; the CLI never attaches a cookie silently.
- Credits, limits, and error shapes: [API](../api/README.md).

## Related

- [Auth](auth.md)
- [Account](account.md)
- [API](../api/README.md)
