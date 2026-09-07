---
description: "Install the bb CLI, learn its command groups, configure settings and API keys, and run doctor and completion."
---

# CLI

The `bb` CLI builds, inspects, signs, and broadcasts BitBadges transactions and calls the BitBadges API from the terminal. This page covers install, the command groups, settings, and health checks.

## Install

```bash
curl -fsSL https://install.bitbadges.io | sh
bb version
bb doctor
```

The one-liner installs two binaries:

| Binary | What it is | Where it comes from |
| --- | --- | --- |
| `bitbadgeschaind` | The chain node binary (Cosmos SDK). The installer symlinks it as `bb`. | GitHub release for your OS and architecture, into `/usr/local/bin` |
| `bitbadges-cli` | The SDK CLI (Node.js). `bb` forwards SDK verbs to it. | `bun install -g bitbadges` if bun is present, else `npm install -g bitbadges` |

`bb` is the only name used in these docs. `bitbadgeschaind` is the canonical binary name and is accepted everywhere `bb` is.

Installer options:

```bash
curl -fsSL https://install.bitbadges.io | sh -s -- --version v35          # pin a release
curl -fsSL https://install.bitbadges.io | sh -s -- --install-dir ~/.local/bin
curl -fsSL https://install.bitbadges.io | sh -s -- --no-sudo
curl -fsSL https://install.bitbadges.io | sh -s -- --testnet             # testnet binary (testnet is offline)
```

| Platform | Architecture |
| --- | --- |
| Linux | x86_64, ARM64 |
| macOS | Intel, Apple Silicon |
| Windows | x86_64 via Git Bash, MSYS2, or WSL (no `bb` symlink; call `bitbadgeschaind.exe`) |

### SDK CLI only

If you do not need the chain node binary:

```bash
bun install -g bitbadges     # or: npm install -g bitbadges
bitbadges-cli --help
```

The npm package `bitbadges` ships three bins: `bitbadges` and `bitbadges-cli` (the CLI, same file) and `bitbadges-builder` (the MCP builder tools server, see [Set up your AI](../agents/setup.md)). Every `bb <verb>` example on these pages runs as `bitbadges-cli <verb>` with this install.

### Chain binary from source

```bash
git clone https://github.com/BitBadges/bitbadgeschain.git
cd bitbadgeschain
make build-mainnet-darwin/arm64   # or build-mainnet-linux/amd64, build-mainnet-linux/arm64, build-mainnet-darwin/amd64, build-mainnet-windows/amd64
```

Requires the Go version in `go.mod` (1.26 at time of writing). Pre-built binaries are on the [releases page](https://github.com/BitBadges/bitbadgeschain/releases). Use the binary version that matches the current chain height; the chain upgrades periodically.

### Claude Code plugin

Claude Code users can add the [Claude Code plugin](../agents/claude-code-plugin.md) on top of this install. It wires the MCP server and adds workflow skills. It does not replace the CLI.

## Command groups

`bb --help` prints the commands in groups so you can tell which binary owns a verb.

```bash
bb --help
bb --help-json | jq '.commands[] | .name'   # full SDK command tree as JSON
```

| Group | Commands | Reference |
| --- | --- | --- |
| Chain node (Cosmos SDK) | `start`, `init`, `status`, `version`, `tx`, `query` (`q`), `keys`, `sign-arbitrary`, `genesis`, `config`, `debug`, `prune`, `snapshots`, `comet`, `export`, `rollback`, `index-eth-tx`, `pre-upgrade` | [Chain commands](chain.md) |
| Build and ship a transaction | `build`, `check`, `explain`, `simulate`, `preview`, `deploy`, `tx status`, `tx wait` | [Build](build.md), [Analyze](analyze.md), [Deploy](deploy.md) |
| Standards (end-user actions) | `pay-requests`, `bounties`, `subscriptions`, `intents`, `credit-tokens`, `products`, `crowdfunds`, `auctions`, `prediction-markets`, `smart-tokens`, `nfts`, `custom-2fa`, `dynamic-stores` | [Standards](standards.md) |
| Indexer access | `api`, `auth` | [API](api.md), [Auth](auth.md) |
| Account and lookup | `account`, `amount`, `url` | [Account](account.md), [Swap](swap.md) |
| Swap and DEX | `swap`, `pools`, `pairs`, `balances`, `price`, `assets` | [Swap](swap.md) |
| Dev / agent surface | `dev` (`tools`, `resources`, `docs`, `skills`, `gen-pub-key`, `feedback`) | [Dev](dev.md) |
| Local state | `settings`, `burner`, `session` | this page, [Deploy](deploy.md), [Dev](dev.md) |
| Discovery | `doctor` | this page |
| Misc | `completion` | this page |

{% hint style="warning" %}
The chain binary forwards SDK verbs by name. Chain releases before the fix in bitbadgeschain PR `fix/bb-forward-missing-sdk-verbs` do not forward `tx status`, `tx wait`, `amount`, `balances`, `assets`, `url`, or `custom-2fa`. On those releases run them as `bitbadges-cli <verb>`; `bb --help` shows which verbs your binary forwards.
{% endhint %}

### Deprecated forms

Old forms still resolve for one release and print a one-line `[bb] DEPRECATED:` banner on stderr that names the new form. The release after the window removes them.

| Old form | New form |
| --- | --- |
| `bb cli <verb>` | `bb <verb>` |
| `bb portfolio`, `bb address`, `bb lookup`, `bb alias`, `bb gen-list-id` | `bb account <verb>` |
| `bb tools`, `bb tool`, `bb resources`, `bb docs`, `bb skills`, `bb gen-pub-key` | `bb dev <verb>` |
| `bb config` | `bb settings` (the chain binary owns `bb config`, which manages `client.toml`) |
| `bb sign-with-browser` | `bb deploy --browser --message` |
| `bb gen-tx-payload` | `bb deploy --gen-payload` |
| `bb swap pools`, `bb swap asset-pairs` | `bb pools`, `bb pairs` |
| `bb build smart-account` | `bb build smart-token` |
| `--expiry`, `--valid-until` | `--expiration` |
| `--json-only` | `--quiet` |

`BB_QUIET=1` or `--quiet` suppresses the banner. Do not write new scripts or agent prompts against the old forms.

## Output envelope

Every data-emitting SDK verb prints one JSON envelope on stdout and human commentary on stderr.

```bash
bb api tokens get-collection 1 | jq .data
bb explain tx.json --quiet | jq -r .data.fullText
```

```json
{ "ok": true, "data": {}, "warnings": [], "hint": "optional", "meta": {}, "error": null }
```

| Flag | Applies to | Description |
| --- | --- | --- |
| `--condensed` | every envelope verb | Single-line JSON |
| `--output-file <path>` | every envelope verb | Write the envelope to a file instead of stdout |
| `-q`, `--quiet` | global | Silence stderr commentary (review banners, "Written to" notices, deprecation banners). Errors still print. Same as `BB_QUIET=1`. |
| `--help-json` | global | Print the whole SDK command tree as JSON |

`bb build` adds a `meta` sidecar with validation, review, simulate, and resolved-metadata reports next to the message in `data`. `hint` is set on common failures (auth rejected, 401/403, insufficient funds on deploy, `tx wait` timeout).

Inputs are uniform: a file path, `@file.json`, inline JSON, or `-` for stdin.

## Settings

```bash
bb settings set apiKey "$BITBADGES_API_KEY"
bb settings show
bb settings unset apiKeyTestnet
```

Config lives at `~/.bitbadges/config.json` (or `$BITBADGES_CONFIG_DIR/config.json`). Get an API key at [bitbadges.io/developer](https://bitbadges.io/developer).

| Subcommand | Description |
| --- | --- |
| `settings show` | Print the current config as an envelope |
| `settings set <key> <value>` | Set one key |
| `settings unset <key>` | Remove one key |

| Key | Values |
| --- | --- |
| `apiKey` | Default API key |
| `apiKeyTestnet` | Testnet API key |
| `apiKeyLocal` | Local API key |
| `network` | `mainnet`, `testnet`, `local` |
| `url` | Custom API base URL |

### Environment variables

| Variable | Description |
| --- | --- |
| `BITBADGES_API_KEY` | Default API key (all networks) |
| `BITBADGES_API_KEY_TESTNET` | Testnet API key |
| `BITBADGES_API_KEY_LOCAL` | Local API key |
| `BITBADGES_API_URL` | Custom API base URL (overrides config) |
| `BITBADGES_CONFIG_DIR` | Override `~/.bitbadges` |
| `BB_QUIET` | `1` silences stderr commentary |
| `BITBADGES_TESTNET_OFFLINE` | `false` bypasses the testnet-offline guard for a private chain that uses the testnet chain ID |

### Network flags

Every SDK verb that reaches the network accepts the same flags.

| Flag | Description |
| --- | --- |
| `--network <name>` | `mainnet`, `testnet`, or `local` |
| `--mainnet` | Shortcut for `--network mainnet` (the default) |
| `--testnet` | Shortcut for `--network testnet`. Testnet is offline; see [Testnet](../chain/testnet.md). |
| `--local` | Shortcut for `--network local` (`http://localhost:3001`, LCD `http://localhost:1317`) |
| `--url <url>` | Custom API base URL (overrides everything else) |
| `--api-key <key>` | Override the API key for this call |

Resolution order for the API key: `--api-key` > network-specific env var > `BITBADGES_API_KEY` > network-specific config key > `apiKey` in config. For the base URL: `--url` > `--local` > `--testnet` > `BITBADGES_API_URL` > config `url` > `https://api.bitbadges.io`.

| Network | API | LCD | Cosmos chain ID | EVM chain ID | EVM RPC |
| --- | --- | --- | --- | --- | --- |
| mainnet | `https://api.bitbadges.io` | `https://lcd.bitbadges.io` | `bitbadges-1` | 50024 | `https://evm-rpc.bitbadges.io` |
| testnet (offline) | `https://api.bitbadges.io/testnet` | `https://lcd-testnet.bitbadges.io` | `bitbadges-2` | 50025 | `https://evm-rpc-testnet.bitbadges.io` |
| local | `http://localhost:3001` | `http://localhost:1317` | `bitbadges-1` | 90123 | `http://localhost:8545` |

## Doctor

```bash
bb doctor
bb doctor --with-preview
bb doctor --condensed | jq '.data.checks[] | select(.status != "pass")'
```

Probes, in order: Node version (18 or newer), SDK package and version, config file, API key for the resolved network (pings the simulate endpoint), MCP stdio bin, persisted sessions parse, and with `--with-preview` a preview upload and fetch round trip that asserts byte equality. Each probe reports `pass`, `fail`, `warn`, or `skip`. The exit code is non-zero only on hard failures.

| Flag | Description |
| --- | --- |
| `--with-preview` | Add the preview round-trip probe |
| `--condensed`, `--output-file` | Output flags |
| network flags | Which API the key probe hits |

## Session

Builder sessions from `bb dev tools call --session <id>` persist under `~/.bitbadges/sessions/<id>.json`.

```bash
bb session list
bb session show demo
bb session reset demo
```

## Completion

```bash
eval "$(bb completion)"          # bash or zsh
bb completion zsh >> ~/.zshrc
```

The emitted script supports both shells through `bashcompinit`. Pass `bash` or `zsh` as a hint; any other value exits 2.

## Quick examples

```bash
bb query bank balances bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --output json   # chain native
bb api tokens get-collection 1                                                    # BitBadges API
bb build vault --backing-coin USDC --name "Demo Vault" \
  --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/vault.png \
  --description "USDC vault" \
  | bb preview - --open                                          # build, then review and sign in the browser
bb auth login --browser --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d   # session for Full Access routes
bb check tx.json && bb simulate tx.json                         # audit and dry-run
```

The first command, run against mainnet for an address that holds nothing, prints:

```json
{
  "balances": [],
  "pagination": {}
}
```

{% hint style="info" %}
Ask your agent. With the [MCP builder tools](../agents/setup.md) wired, the build-and-preview line above is one prompt: "Build a USDC vault called Demo Vault and give me a link to review and sign."
{% endhint %}

`bb --help` ends with the Chaosnet warning and a link to the policies at bitbadges.io/policies. Transactions use real tokens.

## Related

- [Build](build.md)
- [Deploy](deploy.md)
- [Agents](../agents/README.md)
- [Quickstart](../start/quickstart.md)
