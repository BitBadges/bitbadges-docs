---
description: "Read an address's profile, tokens, balances, activity, and approvals; convert and validate addresses; derive alias addresses; resolve bitbadges.io URLs; derive a public key."
---

# bb account, url, gen-pub-key

`bb account` is the read-only user view (the same sections as `bitbadges.io/account/<addr>`) plus address utilities. `bb url` resolves canonical links and `bb dev gen-pub-key` derives a Cosmos public key.

## Example

```bash
bb account all --address bb1abc...
bb account me                                  # same, for the active auth session
bb account tokens --address bb1abc... --view collected
bb account approvals --address bb1abc... --has-coin-transfers
bb account convert 0x1234...abcd --to bb1
bb account lookup USDC
bb url collection 42 --raw | xargs open
```

Every read verb accepts the [network flags](README.md#network-flags), `--condensed`, and `--output-file`. `0x` inputs are normalized to `bb1` client-side.

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
bb account convert 0x1234...abcd --to bb1
bb account convert bb1qpzm... --to 0x
bb account validate bb1qpzm...              # exit 0 valid, 2 invalid
bb account lookup                           # every known token
bb account lookup BADGE                     # denom, decimals, networks, backing address
bb account gen-list-id bb1abc... bb1def... [--blacklist]
```

| Verb | Description |
| --- | --- |
| `convert <address> [--to bb1\|0x]` | Convert between encodings. Default target is the opposite of the input. `bb1` and `0x` are the same key in two encodings. |
| `validate <address>` | Check validity and detect the chain |
| `lookup [symbol]` | Token info from the coins registry. Omit the symbol to list all. |
| `gen-list-id <addresses...> [--blacklist]` | Deterministic reserved address list ID for an ad-hoc allowlist or blocklist, without registering it on chain. See [Address lists](../token-standard/concepts/address-lists.md). |

### alias

```bash
bb account alias for-ibc-backing ibc/E1116484...
bb account alias for-wrapper ubadge
bb account alias for-mint-escrow 42
```

| Verb | Address |
| --- | --- |
| `for-ibc-backing <ibcDenom>` | Backing address of an IBC-backed Smart Token (deposits land here) |
| `for-wrapper <denom>` | Wrapper path address for a Cosmos coin wrapper |
| `for-mint-escrow <collectionId>` | Mint escrow address of a collection (where quest reward funds go) |

These are protocol-controlled addresses with auto-set approvals. Do not write to them directly; use the matching flow. See [Alias denoms](../token-standard/ibc/alias-denoms.md) and [Backed minting](../token-standard/ibc/backed-minting.md).

## url

```bash
bb url tx 0xabc...                  # EVM explorer (Blockscout)
bb url tx-cosmos ABC123...          # Cosmos explorer (ping.pub)
bb url collection 42
bb url badge 42 7                   # token 7 in collection 42
bb url address bb1abc...
bb url collection 42 --raw          # only the URL string
```

| Flag | Description |
| --- | --- |
| `--testnet` | Resolve testnet URLs |
| `--raw` | Print the URL without the envelope, for piping into `open` or `xdg-open` |
| `--condensed`, `--output-file <path>` | Output flags |

{% hint style="warning" %}
The chain binary does not forward `url`. Run it as `bitbadges-cli url ...` until the forwarder list is updated.
{% endhint %}

## gen-pub-key

```bash
bb dev gen-pub-key --address bb1abc...                       # look up on the BitBadges API, then the chain LCD
bb dev gen-pub-key --print-message                           # what the wallet must sign for recovery
bb dev gen-pub-key --address bb1abc... --signature <b64> [--message <text>] --no-lookup
```

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
