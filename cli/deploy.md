---
description: "Sign and broadcast with bb deploy (browser wallet, keyring, burner, or a generated payload), confirm with bb tx status and tx wait, and use the browser sign bridge."
---

# bb deploy and bb tx

`bb deploy` broadcasts a message through one of four signing paths, and `bb tx status` / `bb tx wait` confirm the hash on chain. This page also documents the browser sign bridge that `--browser` and `bb auth login --browser` share.

## Example

```bash
# review and sign in a browser wallet (Keplr, MetaMask)
bb build vault --backing-coin USDC --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json --quiet \
  | bb deploy --browser --msg-stdin --manager bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d

# sign with a key in the chain binary keyring
bb deploy --with-keyring --from alice --exec --msg-file col.json

# emit a signable payload for ethers, viem, cosmjs, or an HSM
bb deploy --gen-payload --from bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --msg-file col.json --gas 600000

# dry run first, then confirm the hash
bb deploy col.json --browser --dry-run --manager bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
bb tx wait 903D4A6E205AD77D334933E3C9BB455012D8A334AA2D98DFD301C3F7E8AB92C6 --timeout 120
```

## Signing paths

Pick exactly one.

| Path | Flag | Use when |
| --- | --- | --- |
| Browser wallet | `--browser` | Your key lives in Keplr, MetaMask, Phantom, or WalletConnect. The CLI opens `/sign`, you confirm, the hash comes back. |
| Keyring | `--with-keyring --from <name>` | A key imported with `bb keys add`. Headless scripts where one long-lived key signs many transactions. |
| Payload | `--gen-payload --from <address>` | A programmatic signer: ethers, viem, cosmjs, custodial, hardware. Nothing is signed or sent. |
| Burner | `--burner --manager <address>` | A throwaway signer funded from the faucet, create-collection only. Needs a faucet; testnet is offline, so this path is unavailable until it returns. |

`--browser` and `--burner` emit the same envelope. `--with-keyring` prints the chain binary command, or runs it with `--exec`. `--gen-payload` prints the payload and exits.

## deploy

```bash
bb deploy col.json --browser --manager bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --wait-for-indexer 60000
```

| Flag | Default | Description |
| --- | --- | --- |
| `[input]`, `--msg-file <path>`, `--msg-stdin` | | Message JSON. `[input]` is a path, `-`, or inline JSON. A `bb build` envelope is unwrapped on read. |
| `--manager <address>` | | Owner of the created collection. Required for `--burner`; recommended for `--browser`. |
| `--dry-run` | | Simulate and print expected gas and balance changes; never broadcast. Needs an API key off `--local`. |
| `--wait-for-indexer [timeout-ms]` | `30000` | After broadcast, poll the BitBadges API until the created collection or dynamic store appears. Adds `waited: { entity, id, attempts, elapsedMs, ok, body }` (or `{ ok: false, lastStatus }`). |
| `--fee <amount>`, `--fee-denom <symbol\|denom>`, `--gas <n>` | `0`, `ubadge`, `400000` | Fee and gas. The chain accepts zero-fee transactions today. |
| network flags | mainnet | See [CLI](README.md#network-flags) |

`--dry-run` differs from `bb build --simulate`: `--simulate` augments the build output and still emits JSON; `--dry-run` simulates and exits.

### --browser

```bash
bb deploy --browser --msg-file collection.json --manager bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
```

```json
{ "success": true, "path": "browser", "mode": "sign-and-broadcast", "txHash": "E5B4C3A6E5B1F3B9F0F4C1F2B7A6D5C4E3F2A1B0C9D8E7F6A5B4C3D2E1F0A9B8", "chain": "cosmos" }
```

The site's transaction modal fetches account number, sequence, gas, and fees at sign time, so the message JSON needs none of them. MetaMask signs an `MsgEthereumTx`-wrapped transaction and the Cosmos hash comes back; set `--manager` to the `bb1` form of your ETH address.

| Flag | Description |
| --- | --- |
| `--expected-address <addr>` | The connected wallet must match (default `--manager`) |
| `--sign-only` | Sign but do not broadcast. Returns base64 `TxRaw` bytes as `signedTx`. |
| `--frontend-url <url>` | Override the frontend base (defaults per network) |
| `--no-open` | Print the sign URL to stderr instead of launching the browser |
| `--port <n>` | Pin the loopback listener port (for SSH-forwarded setups) |
| `--timeout <seconds>` | Wait for the wallet (default 300, max 1800) |

With `--sign-only` the output is `{ "success": true, "path": "browser", "mode": "sign-only", "signedTx": "CpIBCo8BCiEvdG9rZW5pemF0aW9uLk1zZ0NyZWF0ZUNvbGxlY3Rpb24SagoqYmIxcDBycmVsMzM2NXNjYWRxNWs5cHYweDB6cDlqMjJqczZkbnc3MGQ=", "chain": "cosmos" }` (bytes shortened). The bytes are the `tx_bytes` shape for `/api/v0/broadcast`; POST `{"tx_bytes": "<bytes>", "mode": "BROADCAST_MODE_SYNC"}`. Use it for custodial submitters, retry control, batching, or sign-now-broadcast-later.

`bb build <type> --browser` composes build and this path in one step, and accepts `--sign-only`.

### --browser --message

```bash
bb deploy --browser --message "I authorize the agent key at $(date -u +%FT%TZ)" --expected-address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
```

```json
{
  "signature": "Bk/AuuDrt/kChEgF4myQJMCX//1wqoEffd+4RghpKaU0q2QRpVjw0zaf+WHs3FnM8AsEnKm3CeMLc/2/AfKQ9A==",
  "address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "publicKey": "A7TliNEJ+WoiaZvtnrOrdIuLIaVayagqvp47kF2L3Np3",
  "chain": "Cosmos"
}
```

Personal-sign any message with the browser wallet (the signature and key above are from a throwaway key, shown for shape). Input is `--message <text>`, `--message-file <path>` (`-` for stdin), or a positional (`-` or `@path`). ETH signatures omit `publicKey` because `personal_sign` is recoverable. This replaces the standalone `sign-with-browser` command.

### --with-keyring

```bash
bb deploy --with-keyring --from alice --msg-file col.json            # print the bitbadgeschaind tx command
bb deploy --with-keyring --from alice --exec --msg-file col.json     # run it, capture the hash, emit the envelope
```

| Flag | Default | Description |
| --- | --- | --- |
| `--from <name>` | | Keyring identity |
| `--exec` | | Run the printed command in place. Inherits the TTY so keyring password prompts work. Multi-message transactions run sequentially, not atomically. |
| `--binary <name>` | `bitbadgeschaind` | Chain binary on PATH |
| `--keyring-backend <backend>` | `os` | `os`, `file`, `test`, `pass`, `kwallet` |
| `--gas-adjustment <n>` | `1.3` | Passthrough |

### --gen-payload

```bash
bb build vault --backing-coin USDC --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json --quiet \
  | bb deploy --gen-payload --from bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --gas 600000
bb deploy --gen-payload --msg-file col.json --from 0x0bc63cfe31d5218eb414b142c799e20964a54a1a --gas 600000
bb deploy --gen-payload --msg-file col.json --from bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --with-evm-tx --gas 600000
```

The payload for the third command (synthesized for a funded account; byte strings shortened):

```json
{
  "chain": "cosmos+evm",
  "chainId": "bitbadges-1",
  "sender": { "address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", "accountNumber": "7", "sequence": "3", "publicKey": "A7TliNEJ+WoiaZvtnrOrdIuLIaVayagqvp47kF2L3Np3" },
  "evmAddress": "0x0bc63cfe31d5218eb414b142c799e20964a54a1a",
  "fee": { "amount": "0", "denom": "ubadge", "gas": "600000" },
  "memo": "",
  "messages": [{ "typeUrl": "/tokenization.MsgCreateCollection", "value": { "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d" } }],
  "signDirect": { "bodyBytes": "CpIBCo8BCiEvdG9rZW5pemF0aW9uLk1zZ0NyZWF0ZUNvbGxlY3Rpb24=", "authInfoBytes": "ClAKRgofL2Nvc21vcy5jcnlwdG8uc2VjcDI1NmsxLlB1YktleQ==", "signBytes": "Athauu8aoa3qxL2n1o1yQ2Q2dQ6n3n8Uu1G9xI0uY0k=" },
  "legacyAmino": { "bodyBytes": "CpIBCo8BCiEvdG9rZW5pemF0aW9uLk1zZ0NyZWF0ZUNvbGxlY3Rpb24=", "authInfoBytes": "ClAKRgofL2Nvc21vcy5jcnlwdG8uc2VjcDI1NmsxLlB1YktleQ==", "signBytes": "9bJ06ZSKq8v2Q0m4t1r7c3d5e6f8a9b0c1d2e3f4g5h6i7j8k9l0=" },
  "evmTx": { "to": "0x0000000000000000000000000000000000001001", "data": "0x059dfe130000000000000000000000000000000000000000000000000000000000000020", "value": "0", "functionName": "createCollection", "chainId": 50024, "gasLimit": "600000" },
  "broadcastEndpoint": "https://api.bitbadges.io/api/v0/broadcast"
}
```

| Field | Present when | Use |
| --- | --- | --- |
| `signDirect.signBytes` | `--from` is a `bb1` address, or a Cosmos pubkey is on chain | Sign for `SIGN_MODE_DIRECT` |
| `legacyAmino.signBytes` | same | Hardware wallets that speak amino |
| `signDirect.bodyBytes`, `authInfoBytes` | same | Build `TxRaw{bodyBytes, authInfoBytes, signatures: [sig]}` after signing |
| `evmTx` | `--from` is a `0x` address, or `--evm-from` or `--with-evm-tx` is set | `wallet.sendTransaction({to, data, value, chainId, gasLimit})` |
| `broadcastEndpoint` | always | Where to POST the assembled `TxRaw` |

| Flag | Description |
| --- | --- |
| `--from <address>` | A `bb1` address emits `signDirect` + `legacyAmino`; a `0x` address emits `evmTx` (plus `signDirect` if a pubkey is on chain) |
| `--evm-from <address>` | EVM address for `evmTx` next to a `bb1` sender. Implies `--with-evm-tx`. |
| `--with-evm-tx` | Also emit the precompile call for a `bb1` sender |
| `--public-key <b64>`, `--account-number <n>`, `--sequence <n>` | Overrides. Required with `--no-fetch` or for an account not yet on chain. |
| `--chain-id <id>`, `--memo <text>` | Cosmos chain ID override; memo |
| `--no-fetch` | Skip the BitBadges API account lookup (offline or air-gapped) |

For a `0x` `--from` the EVM transaction signs itself with the wallet's secp256k1 key; no separate pubkey. `signDirect` for an ETH user needs a pubkey on chain, which one prior transaction sets. Covers every `tokenization.Msg*` type, which is every `bb build` output. Other modules (IBC, gov) are out of scope. This replaces the standalone `gen-tx-payload` command.

### --burner

```bash
bb build subscription --interval monthly --price 10 --denom USDC \
  --recipient bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d \
  --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json --quiet \
  | bb deploy --burner --msg-stdin --manager bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --local --fund faucet
```

```json
{
  "success": true,
  "ephemeralAddress": "bb1hz59w73vsqygl7z9zl49yvwjnl534n0yyexmkf",
  "recoveryPath": "/home/you/.bitbadges/burners/2026-09-06T00-00-00-000Z-bb1hz59w73vsqygl7z9zl49yvwjnl534n0yyexmkf.json",
  "txHash": "E5B4C3A6E5B1F3B9F0F4C1F2B7A6D5C4E3F2A1B0C9D8E7F6A5B4C3D2E1F0A9B8",
  "collectionId": "28"
}
```

{% hint style="warning" %}
`--fund faucet` needs a live faucet. Testnet is offline, so the burner path works only against a local chain today. Mainnet has no faucet; `--fund manual` waits for you to send dust yourself. See [Testnet](../chain/testnet.md).
{% endhint %}

Two addresses are involved: the burner, generated fresh and discarded after one signature, and the owner you pass as `--manager`, who holds the collection from the first block. The burner has no lasting authority.

Constraints:

- Create-collection only: `MsgCreateCollection` or `MsgUniversalUpdateCollection` with a new collection ID. Updates, transfers, approvals, and manager changes are rejected before the wallet is generated.
- Dust only. Burners are stored in plaintext under `~/.bitbadges/burners/` (files `0600`, directory `0700`), with mnemonic, address, network, and broadcast status. Never fund them beyond fees; sweep any excess with `bb burner sweep`.
- Not offline-capable; each run leaves a new on-chain account.

| Flag | Default | Description |
| --- | --- | --- |
| `--fund <faucet\|manual>` | `faucet` | `faucet` calls the BitBadges API faucet (needs an API key off `--local`). `manual` prints the address and waits. |
| `--new` | | Skip the picker; always a fresh burner |
| `--reuse <selector>` | | Reuse a saved burner by address or recovery file path |
| `--non-interactive` | | Never prompt; save state and exit at any prompt. Forced when stdout is not a TTY. |
| `--poll-timeout <seconds>` | `60` | Wait for funding before prompting or exiting |

In a TTY with saved burners, a picker lists them with balance and status. Reusing a funded wallet skips the faucet. If funding stalls past `--poll-timeout`, the CLI offers: keep waiting, retry the faucet, pause and exit (writes `pending` state), or give up. Non-interactive runs default to pause and exit. Failure envelopes carry a `hint` (for example pointing at `bb burner sweep` on insufficient funds).

### burner

```bash
bb burner list --network local
bb burner show bb1hz59w73vsqygl7z9zl49yvwjnl534n0yyexmkf                 # includes the mnemonic
bb burner resume bb1hz59w73vsqygl7z9zl49yvwjnl534n0yyexmkf --msg-file col.json \
  --manager bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --fund faucet --fee 0 --fee-denom ubadge --gas 400000 --poll-timeout 60
bb burner sweep bb1hz59w73vsqygl7z9zl49yvwjnl534n0yyexmkf --to bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --denom ubadge --fee 0 --gas 200000
bb burner forget bb1hz59w73vsqygl7z9zl49yvwjnl534n0yyexmkf -y
```

The selector is an address or a recovery file path.

## tx status and tx wait

```bash
bb tx status 903D4A6E205AD77D334933E3C9BB455012D8A334AA2D98DFD301C3F7E8AB92C6
bb tx status 0x9f1c2b3a4d5e6f708192a3b4c5d6e7f8091a2b3c4d5e6f708192a3b4c5d6e7f8       # EVM hash
bb tx wait 903D4A6E205AD77D334933E3C9BB455012D8A334AA2D98DFD301C3F7E8AB92C6 --timeout 120 --interval 2
bb tx status 903D4A6E205AD77D334933E3C9BB455012D8A334AA2D98DFD301C3F7E8AB92C6 | jq -r .data.code
```

The first command, for a real mainnet transaction (events trimmed):

```json
{
  "ok": true,
  "data": {
    "via": "cosmos",
    "hash": "903D4A6E205AD77D334933E3C9BB455012D8A334AA2D98DFD301C3F7E8AB92C6",
    "height": "11980239",
    "code": 0,
    "gasUsed": "462095",
    "events": []
  },
  "warnings": [],
  "error": null
}
```

An unknown hash returns `"ok": false` with `error.code` `not_found`, the list of backends tried, and a `hint` to run `tx wait`.

Both hit the chain directly: the Cosmos LCD `/cosmos/tx/v1beta1/txs/{hash}` first, then the EVM JSON-RPC `eth_getTransactionReceipt` for keccak256 hashes (`via` becomes `evm`). No BitBadges API round trip, so they work while the API is degraded. Hashes are accepted with or without `0x`, any case.

| Flag | Default | Description |
| --- | --- | --- |
| `--node-url <url>` | per network | Chain LCD override |
| `--evm-rpc-url <url>` | per network | EVM JSON-RPC override |
| `--timeout <seconds>` (`wait`) | `60` | Max wait |
| `--interval <seconds>` (`wait`) | `2` | Poll interval |

| Exit code | Meaning |
| --- | --- |
| `0` | Committed (Cosmos `code === 0` or EVM `status === 0x1`) |
| `1` | Included but failed (non-zero code or revert) |
| `2` | RPC error, not found, or (`wait`) timeout. On timeout `error.code` is `timeout` and `hint` says to re-run `tx status` or extend `--timeout`. |

{% hint style="warning" %}
Chain releases before the forwarder fix do not expose `bb tx status` or `bb tx wait`. If they print unknown command, run `bitbadges-cli tx status 903D4A6E205AD77D334933E3C9BB455012D8A334AA2D98DFD301C3F7E8AB92C6`.
{% endhint %}

## Sign bridge

`--browser` on `deploy` and `bb auth login --browser` share one mechanism, modeled on `gh auth login --web`:

1. The CLI starts a loopback HTTP listener on `127.0.0.1:<port>`.
2. It opens `https://bitbadges.io/sign?...` with the request in the URL (or a short code when the payload is large).
3. You review and sign with the connected wallet.
4. The page redirects to `127.0.0.1:<port>/callback?...` with the signature or hash. The listener accepts one callback.

| Mode | Command | Signed | Returned |
| --- | --- | --- | --- |
| `login` | `bb auth login --browser` | The SIWBB challenge | Signature; the CLI replays it on `/auth/verify` for a session cookie |
| `msg` | `bb deploy --browser --message` | Any string | Signature, address, pubkey for Cosmos |
| `tx` | `bb deploy --browser`, `bb build vault --browser` | One transaction; collection messages get the full review sidebar | Hash, or signed bytes with `--sign-only` |

The `/sign` page shows a review-and-trust warning, the full request, a wallet-mismatch panel that disables Sign until the connected address matches (with a disconnect shortcut), and one Sign button. Defenses: loopback-only redirect targets (RFC 8252 native-app exception), a per-request state nonce (mismatch is a 403), a single-shot listener (later requests get `410 Gone`), and the wallet's own confirmation popup. Out of scope: an attacker-supplied CLI, a malicious wallet extension, and multi-transaction atomicity on EVM (each `deploy --browser` is one transaction).

SSH-forwarded setups: the browser's loopback is the laptop's, not the server's. Pin a port and forward it:

```text
Host dev-server
    LocalForward 4849 localhost:4849
```

```bash
bb auth login --browser --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --port 4849
```

Or run the CLI on the laptop and point it at the remote services with `--frontend-url http://localhost:3000 --url http://localhost:3001/api/v0`.

## Related

- [Build](build.md)
- [Auth](auth.md)
- [Chain commands](chain.md)
- [Broadcast](../sdk/transactions/broadcast.md)
