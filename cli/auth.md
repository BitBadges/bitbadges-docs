---
description: "Create and manage BitBadges API user sessions from the CLI with bb auth, using a browser wallet or any external signer."
---

# bb auth

`bb auth` signs the CLI in to the BitBadges API with the Sign In with BitBadges challenge flow and stores the session cookie for `bb api --with-session`. The CLI never holds a private key; a browser wallet, `bb sign-arbitrary`, or any ADR-36 / EIP-191 signer produces the signature.

## Example

```bash
# browser wallet (Keplr, MetaMask)
bb auth login --browser --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d

# headless, with a key in the chain binary keyring
MSG=$(bb auth challenge --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d | jq -r .data.message)
SIG_JSON=$(bb sign-arbitrary alice "$MSG")
bb auth login \
  --address    "$(echo "$SIG_JSON" | jq -r .address)" \
  --signature  "$(echo "$SIG_JSON" | jq -r .signature)" \
  --public-key "$(echo "$SIG_JSON" | jq -r .pubKey)" \
  --message    "$MSG"

# use the session
bb api accounts update-account-info --body '{"username":"alice"}' --with-session
bb auth whoami
```

The API key is the app scope and is required on every call. Create one at [bitbadges.io/developer](https://bitbadges.io/developer) and store it with `bb settings set apiKey "$BITBADGES_API_KEY"`. The session cookie is the user scope and is required on Full Access routes (anything that mutates an account, manages keys, or publishes signed data).

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
| `--address <addr>` | Required. A `bb1` address for Cosmos, a `0x` address for ETH. |
| `--signature <sig>` | Hex or base64 signature over the challenge. Required unless `--browser`. |
| `--public-key <b64>` | Compressed pubkey. Required for Cosmos signatures; ignored for ETH; captured from the wallet with `--browser`. |
| `--message <text>`, `--message-file <path>` | The exact challenge text (`-` for stdin). Defaults to the saved pending entry. |
| `--browser` | Sign in the browser through the [sign bridge](deploy.md#sign-bridge). Mutually exclusive with `--signature`. |
| `--frontend-url <url>`, `--no-open`, `--port <n>`, `--timeout <seconds>` | Bridge options (default timeout 300, max 1800) |

Exit `0` when the cookie is stored, `1` on a rejected signature or network failure.

### challenge

```bash
bb auth challenge --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --no-save-pending
```

The message is the Sign In with BitBadges text with a fresh nonce (mainnet output):

```json
{
  "ok": true,
  "data": {
    "message": "bitbadges.io wants you to sign in with your Cosmos account:\nbb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d\n\nSign this message only if prompted by a trusted party. The signature of this message can be used to authenticate you on BitBadges. By signing, you agree to the BitBadges privacy policy and terms of service.\n\nURI: https://bitbadges.io\nVersion: 1\nChain ID: 1\nNonce: eesRtnq0lSLSuthUx\nIssued At: 2026-09-07T02:56:49.365Z\nResources:\n- bitbadges://scope/full-access",
    "nonce": "eesRtnq0lSLSuthUx"
  },
  "warnings": [],
  "error": null
}
```

The BitBadges API binds each challenge nonce to the cookie it sets on `getChallenge`. `auth challenge` saves that cookie as a pending entry (5-minute TTL) so `auth login` can replay it. Without it, verify fails with `No sign-in request found`. `--no-save-pending` skips the save; use it only if you will re-fetch the challenge yourself.

### status, use, whoami, logout, path

```bash
bb auth status --all --check
bb auth use bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --local
bb auth whoami
bb auth logout --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
bb auth logout --all
bb auth path                      # /home/you/.bitbadges/auth.json
```

`status` prints one line per session, for example `mainnet   bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d   Cosmos   expires=2026-09-13T02:56:49.365Z (valid) [server: signed-in]`, and the envelope `{ "ok": true, "data": { "sessions": [] }, "warnings": [], "error": null }` when nothing is stored. `logout` removes the local record even if the server call fails.

## Manual Paste-In

```bash
bb auth challenge --address 0x0bc63cfe31d5218eb414b142c799e20964a54a1a
# sign the printed message in the wallet's "Sign Message" dialog, then paste the hex signature
bb auth login --address 0x0bc63cfe31d5218eb414b142c799e20964a54a1a --signature "$SIG"
```

ETH addresses are detected by the `0x` prefix and need no `--public-key`.

## Storage

`~/.bitbadges/auth.json`, mode `0600`:

```json
{
  "version": 1,
  "networks": {
    "mainnet": {
      "active": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "sessions": {
        "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d": {
          "address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
          "nativeAddress": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
          "chain": "Cosmos",
          "cookieName": "bitbadges",
          "cookieValue": "s%3A4f1c9e2a7b3d.QmZ8rT2vLx0pW5nK9yH3cJ6uB1eD4sF7gA",
          "scopes": [{ "scopeName": "Full Access" }],
          "createdAt": 1788739200000,
          "expiresAt": 1789344000000,
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
- [Chain Commands](chain.md#sign-arbitrary)
- [Sign In with BitBadges](../api/sign-in/README.md)
