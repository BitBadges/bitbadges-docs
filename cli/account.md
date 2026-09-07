---
description: "Read an address's profile, tokens, balances, activity, and approvals; convert and validate addresses; derive alias addresses; resolve bitbadges.io URLs; derive a public key."
---

# bb account, url, gen-pub-key

`bb account` is the read-only user view (the same sections as `bitbadges.io/account/<addr>`) plus address utilities. `bb url` resolves canonical links and `bb dev gen-pub-key` derives a Cosmos public key.

## Example

```bash
bb account all --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
bb account me                                  # same, for the active auth session
bb account tokens --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --view collected
bb account approvals --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --has-coin-transfers
bb account convert 0x0bc63cfe31d5218eb414b142c799e20964a54a1a --to bb1
bb account lookup USDC
bb url collection 42 --raw | xargs open
```

`bb account tokens` for an address that holds nothing returns an empty page (mainnet output):

```json
{
  "ok": true,
  "data": {
    "tokens": [],
    "pagination": {
      "bookmark": "",
      "hasMore": false
    }
  },
  "warnings": [],
  "error": null
}
```

Every read verb accepts the [network flags](README.md#network-flags), `--condensed`, and `--output-file`. `0x` inputs are normalized to `bb1` client-side.

{% hint style="info" %}
Ask your agent. The MCP tools `convert_address`, `validate_address`, `query_balance`, and `lookup_token_info` cover the same ground: "Convert 0x0bc63cfe31d5218eb414b142c799e20964a54a1a to a bb1 address and tell me what it holds in collection 1."
{% endhint %}

## Read verbs

| Verb | Wraps | Purpose |
| --- | --- | --- |
| `profile` | `GET /user` | Profile document plus LCD bank balances |
| `tokens` | `GET /account/:addr/tokens` | BitBadges-standard holdings |
| `balances` | `GET /account/:addr/balances` | Lean balance documents |
| `assets` | swap-consolidated balances | Skip:Go plus verified BitBadges assets, numeric amounts |
| `activity` | activity feeds | Transfers, claims, points |
| `approvals` | `POST /collection/:id/filterApprovals` | Approvals owned by the user: subscriptions, listings, bids, payments |
| `all` | all of the above in parallel | One JSON with a section per verb; a failing section degrades to `{ error }` |
| `me` | `all` | For the active `bb auth` address |

| Flag | Verbs | Description |
| --- | --- | --- |
| `--address <addr>` | all but `me` | Required |
| `--view <type>` | `tokens` | `collected` (default), `created`, `managing`, `all` |
| `--bookmark <b>`, `--oldest-first` | `tokens`, `balances`, `activity` | Pagination and sort |
| `--chain <id>`, `--all-chains` | `assets`, `all`, `me` | Chain for the assets section (default `bitbadges-1`) or a broad Skip:Go set |
| `--type <kind>` | `activity` | `tokens` (default), `claims`, `points`, `all` |
| `--collection <id>` | `approvals` | Collection ID or `any` (default) |
| `--token-id <n>`, `--time <ms>` | `approvals` | Filter to approvals covering a token or valid at a time |
| `--has-coin-transfers` | `approvals` | Only approvals with a coin transfer leg |
| `--price-min <n>`, `--price-max <n>`, `--denom <symbol\|denom>`, `--sort <price-asc\|price-desc>` | `approvals` | Price filter and sort |
| `--include <list>`, `--exclude <list>` | `all`, `me` | Subset of `account`, `tokens`, `balances`, `assets`, `activity`, `approvals` |

## Address utilities

```bash
bb account convert 0x0bc63cfe31d5218eb414b142c799e20964a54a1a --to bb1
bb account convert bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --to 0x
bb account validate bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d     # exit 0 valid, 2 invalid
bb account lookup                                                 # every known token
bb account lookup BADGE                                           # denom, decimals, networks, backing address
bb account gen-list-id bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue
```

`convert`, `validate`, `lookup BADGE`, and `gen-list-id` print, in order:

```json
{ "ok": true, "data": { "result": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", "source": "0x0bc63cfe31d5218eb414b142c799e20964a54a1a", "target": "bb1" }, "warnings": [], "error": null }
```

```json
{ "ok": true, "data": { "valid": true, "chain": "BitBadges", "address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d" }, "warnings": [], "error": null }
```

```json
{ "ok": true, "data": { "symbol": "BADGE", "ibcDenom": "ubadge", "decimals": 9, "networks": ["mainnet", "testnet"] }, "warnings": [], "error": null }
```

```json
{
  "ok": true,
  "data": {
    "listId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d:bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
    "mode": "whitelist",
    "addresses": ["bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"]
  },
  "warnings": [],
  "error": null
}
```

| Verb | Description |
| --- | --- |
| `convert <address> [--to bb1\|0x]` | Convert between encodings. Default target is the opposite of the input. `bb1` and `0x` are the same key in two encodings. |
| `validate <address>` | Check validity and detect the chain |
| `lookup [symbol]` | Token info from the coins registry. Omit the symbol to list all. |
| `gen-list-id <addresses...> [--blacklist]` | Deterministic reserved address list ID for an ad-hoc allowlist or blocklist, without registering it on chain. See [Address lists](../token-standard/concepts/address-lists.md). |

### alias

```bash
bb account alias for-ibc-backing ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8
bb account alias for-wrapper ubadge
bb account alias for-mint-escrow 42
```

```json
{ "ok": true, "data": { "address": "bb1xx5h3l85tnxgj07vef2cjtqzpg2qc9jt52z2q0lptjasajez3cgs5hklra", "kind": "ibc-backing", "source": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8" }, "warnings": [], "error": null }
```

```json
{ "ok": true, "data": { "address": "bb1gycvn0nc50lh753dgk4qys5p2sdws8aw7ec9v9gg65pkhm6hqq3qjd3t3n", "kind": "wrapper", "source": "ubadge" }, "warnings": [], "error": null }
```

```json
{ "ok": true, "data": { "address": "bb1slvx3q432arp0ekkt9t2uednd643t9zycmyz8c2x9ppq5def7yssuuwl36", "kind": "mint-escrow", "source": "42" }, "warnings": [], "error": null }
```

| Verb | Address |
| --- | --- |
| `for-ibc-backing <ibcDenom>` | Backing address of an IBC-backed Smart Token (deposits land here) |
| `for-wrapper <denom>` | Wrapper path address for a Cosmos coin wrapper |
| `for-mint-escrow <collectionId>` | Mint escrow address of a collection (where quest reward funds go) |

These are protocol-controlled addresses with auto-set approvals. Do not write to them directly; use the matching flow. See [Alias denoms](../token-standard/ibc/alias-denoms.md) and [Backed minting](../token-standard/ibc/backed-minting.md).

## url

```bash
bb url tx 0x9f1c2b3a4d5e6f708192a3b4c5d6e7f8091a2b3c4d5e6f708192a3b4c5d6e7f8   # EVM explorer (Blockscout)
bb url tx-cosmos E5B4C3A6E5B1F3B9F0F4C1F2B7A6D5C4E3F2A1B0C9D8E7F6A5B4C3D2E1F0A9B8   # Cosmos explorer (ping.pub)
bb url collection 42
bb url badge 42 7                   # token 7 in collection 42
bb url address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
bb url collection 42 --raw          # only the URL string
```

`bb url tx-cosmos`, `bb url address`, and `bb url collection 42 --raw` print:

```json
{
  "ok": true,
  "data": {
    "kind": "tx",
    "explorer": "ping.pub",
    "hash": "E5B4C3A6E5B1F3B9F0F4C1F2B7A6D5C4E3F2A1B0C9D8E7F6A5B4C3D2E1F0A9B8",
    "url": "https://explorer.bitbadges.io/BitBadges%20Mainnet/tx/E5B4C3A6E5B1F3B9F0F4C1F2B7A6D5C4E3F2A1B0C9D8E7F6A5B4C3D2E1F0A9B8"
  },
  "warnings": [],
  "error": null
}
```

```json
{ "ok": true, "data": { "kind": "address", "address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", "url": "https://bitbadges.io/account/bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d" }, "warnings": [], "error": null }
```

```text
https://bitbadges.io/collections/42
```

| Flag | Description |
| --- | --- |
| `--testnet` | Resolve testnet URLs |
| `--raw` | Print the URL without the envelope, for piping into `open` or `xdg-open` |
| `--condensed`, `--output-file <path>` | Output flags |

{% hint style="warning" %}
Chain releases before the forwarder fix do not forward `url`. If `bb url` prints unknown command, run `bitbadges-cli url` with the same arguments.
{% endhint %}

## gen-pub-key

```bash
bb dev gen-pub-key --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d                       # look up on the BitBadges API, then the chain LCD
bb dev gen-pub-key --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --print-message       # what the wallet must sign for recovery
bb dev gen-pub-key --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --signature "$SIG" --no-lookup
```

`--print-message` returns the canonical text:

```json
{
  "ok": true,
  "data": {
    "message": "BitBadges public key derivation. This signature is used only to derive your public key for offline signing. No transaction is being created or authorized, no session is being granted, and this signature has no validity outside this CLI flow."
  },
  "warnings": [],
  "error": null
}
```

For an address that has never broadcast or signed in, the lookup path fails with `"code": "pubkey_not_found"` and tells you to use the signature path.

Derives the base64 compressed secp256k1 public key for a `bb1` address (or a `0x` address, converted). Fresh accounts have no pubkey on chain, so the recovery path takes a signature over the canonical message and recovers the key. EVM-only signing does not need this; the EVM transaction recovers the pubkey itself.

| Flag | Description |
| --- | --- |
| `--address <addr>` | Required |
| `--signature <b64>` | Skip lookups and recover from this signature |
| `--message <text>` | Message that was signed, if not the canonical one |
| `--print-message` | Print the canonical message and exit |
| `--no-lookup` | Force the recovery path |

## Related

- [Accounts](../token-standard/concepts/accounts.md)
- [Address conversions](../sdk/snippets/address-conversions.md)
- [Auth](auth.md)
- [Swap](swap.md)
