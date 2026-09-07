---
description: "Create and manage BitBadges API user sessions from the CLI with bb auth, using a browser wallet or any external signer."
---

# bb auth

`bb auth` signs the CLI in to the BitBadges API with the Sign In with BitBadges challenge flow and stores the session cookie for `bb api --with-session`. The CLI never holds a private key; a browser wallet, `bb sign-arbitrary`, or any ADR-36 / EIP-191 signer produces the signature.

## Example

```bash
# browser wallet (Keplr, MetaMask)
bb auth login --browser --address bb1abc...

# headless, with a key in the chain binary keyring
MSG=$(bb auth challenge --address bb1abc... | jq -r .data.message)
SIG_JSON=$(bb sign-arbitrary mykey "$MSG")
bb auth login \
  --address    "$(echo "$SIG_JSON" | jq -r .address)" \
  --signature  "$(echo "$SIG_JSON" | jq -r .signature)" \
  --public-key "$(echo "$SIG_JSON" | jq -r .pubKey)" \
  --message    "$MSG"

# use the session
bb api accounts update-account-info --body '{"username":"new"}' --with-session
bb auth whoami
```

The API key is the app scope and is required on every call. The session cookie is the user scope and is required on Full Access routes (anything that mutates an account, manages keys, or publishes signed data).

## Subcommands

| Command | Purpose |
| --- | --- |
| `auth login` | Fetch a challenge (or reuse a pending one), post the signature, store the cookie, mark the address active |
| `auth challenge` | Print a challenge for two-step or external-signer flows |
| `auth verify` | Two-step counterpart to `login` (same flags, requires `--signature`) |
| `auth status` | List stored sessions; `--check` revalidates server-side |
| `auth use <address>` | Set the active address for a network |
| `auth whoami` | Print the active address for the resolved network (non-zero exit if none) |
| `auth logout` | Sign out server-side and remove the local record |
| `auth path` | Print the path of the auth store |

Every subcommand accepts the [network flags](README.md#network-flags). Sessions are stored per network; a mainnet and a local session for the same address coexist.

### login and verify

| Flag | Description |
| --- | --- |
| `--address <addr>` | Required. `bb1...` for Cosmos, `0x...` for ETH. |
| `--signature <sig>` | Hex or base64 signature over the challenge. Required unless `--browser`. |
| `--public-key <b64>` | Compressed pubkey. Required for Cosmos signatures; ignored for ETH; captured from the wallet with `--browser`. |
| `--message <text>`, `--message-file <path>` | The exact challenge text (`-` for stdin). Defaults to the saved pending entry. |
| `--browser` | Sign in the browser through the [sign bridge](deploy.md#sign-bridge). Mutually exclusive with `--signature`. |
| `--frontend-url <url>`, `--no-open`, `--port <n>`, `--timeout <seconds>` | Bridge options (default timeout 300, max 1800) |

Exit `0` when the cookie is stored, `1` on a rejected signature or network failure.

### challenge

```bash
bb auth challenge --address bb1abc... [--no-save-pending]
```

```json
{ "ok": true, "data": { "message": "...challenge text...", "nonce": "..." }, "warnings": [], "error": null }
```

The BitBadges API binds each challenge nonce to the cookie it sets on `getChallenge`. `auth challenge` saves that cookie as a pending entry (5-minute TTL) so `auth login` can replay it. Without it, verify fails with `No sign-in request found`. `--no-save-pending` skips the save; use it only if you will re-fetch the challenge yourself.

### status, use, whoami, logout, path

```bash
bb auth status [--all] [--check]
bb auth use bb1xyz... [--local]
bb auth whoami
bb auth logout [--address bb1abc...] [--all]
bb auth path                      # /home/you/.bitbadges/auth.json
```

`status` prints one line per session, for example `mainnet   bb1abc...   Cosmos   expires=2026-05-10T03:14:15.000Z (valid) [server: signed-in]`. `logout` removes the local record even if the server call fails.

## Manual paste-in

```bash
bb auth challenge --address 0xabc...
# sign the printed message in the wallet's "Sign Message" dialog
bb auth login --address 0xabc... --signature 0x...
```

ETH addresses are detected by the `0x` prefix and need no `--public-key`.

## Storage

`~/.bitbadges/auth.json`, mode `0600`:

```json
{
  "version": 1,
  "networks": {
    "mainnet": {
      "active": "bb1abc...",
      "sessions": {
        "bb1abc...": {
          "address": "bb1abc...",
          "nativeAddress": "bb1abc...",
          "chain": "Cosmos",
          "cookieName": "bitbadges",
          "cookieValue": "...",
          "scopes": [{ "scopeName": "Full Access" }],
          "createdAt": 1746240000000,
          "expiresAt": 1746844800000,
          "indexerUrl": "https://api.bitbadges.io/api/v0"
        }
      },
      "pending": {}
    },
    "testnet": {},
    "local": {}
  }
}
```

## Behavior

- Scope is always `Full Access`; the API hard-codes the scope set today.
- Sessions roll on use. The API resets the expiry to now plus 7 days on every authenticated request, and the CLI writes the new `expiresAt` back. A long-lived agent that makes any request inside that window never needs to log in again.
- The pending challenge expires after 5 minutes. After that, `login` fetches a fresh challenge that will not match a signature made over the old one.
- The store is portable. Copy `auth.json` to another machine and `bb api --with-session` works there; keep it `0600`.

## Related

- [API](api.md)
- [Deploy](deploy.md#sign-bridge)
- [Chain commands](chain.md#sign-arbitrary)
- [Sign in with BitBadges](../api/sign-in/README.md)
