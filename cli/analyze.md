---
description: "Inspect a built transaction before signing with bb check, bb explain, bb simulate, and bb preview."
---

# bb check, explain, simulate, preview

Four verbs inspect a transaction JSON (from `bb build`, the MCP builder tools, or by hand) before anyone signs it. All accept a file path, `@file.json`, inline JSON, `-` for stdin, and where noted a numeric collection ID.

## Example

```bash
bb check tx.json                     # validate + review + metadata coverage
bb explain tx.json --quiet | jq -r .data.fullText
bb simulate tx.json                  # gas + per-address balance changes, no broadcast
bb preview tx.json --open            # upload, then open the review-and-sign page
bb build vault --backing-coin USDC --uri ipfs://Qm... | bb check -
```

| Command | Purpose |
| --- | --- |
| `check <input>` | Structural validation, design review, and metadata coverage in one pass |
| `explain <input>` | Plain-English summary; detects transaction vs collection |
| `simulate <input>` | Dry run against the simulate endpoint |
| `preview <input>` | Upload and print a read-only link and a review-and-sign link |

All four print the envelope on stdout and human-readable scorecards on stderr (`--quiet` or `BB_QUIET=1` silences stderr). All accept `--condensed`, `--output-file <path>`, and the [network flags](README.md#network-flags).

## check

```bash
bb check tx.json                       # full (default)
bb check tx.json --depth structural    # validateTransaction() only, offline
bb check tx.json --depth review        # reviewCollection() only
bb check 42 --depth review             # live mainnet collection by ID
bb check tx.json --strict              # exit 1 on warnings
```

| `--depth` | Runs | Use when |
| --- | --- | --- |
| `structural` | `validateTransaction()`: uint ranges, approval criteria, shape | Fast offline check before writing JSON to disk |
| `review` | `reviewCollection()`: design audit, standards conformance, UX checks | Reviewing someone else's work or a live collection by ID |
| `full` (default) | validate + review + design + metadata coverage | Pre-broadcast diligence |

| Flag | Description |
| --- | --- |
| `--depth <level>` | `structural`, `review`, `full` |
| `--strict` | Exit 1 on warnings. Criticals always exit 2. |
| `--no-validate`, `--no-review`, `--no-metadata` | Skip a section at `full` depth |
| `--design` | Include the informational design-decisions section in the envelope |

`review` and `full` accept a numeric collection ID and fetch it from the BitBadges API first. `structural` is offline and refuses numeric IDs.

## explain

```bash
bb explain tx.json
bb explain '{"messages":[...]}'
bb explain 42                       # fetch the collection, then interpret
echo '{"messages":[...]}' | bb explain -
```

Input detection:

| Input | Path |
| --- | --- |
| Single message `{ typeUrl, value }` | `interpretTransaction()` over `value` |
| Wrapper `{ messages: [...] }` | Finds the first collection message and explains it |
| Raw collection (no `typeUrl`, no `messages`) | `interpretCollection()` |
| Numeric `<n>` | Fetches `/api/v0/collection/<n>`, then `interpretCollection()` |

```json
{
  "ok": true,
  "data": {
    "kind": "tx",
    "messages": [
      { "typeUrl": "/tokenization.MsgCreateCollection", "summary": "Create a new Smart Token (IBC-backed) called \"My Vault\" ..." }
    ],
    "fullText": "...full prose interpretation..."
  },
  "warnings": [],
  "error": null
}
```

`kind` is `tx`, `collection`, or `msg`. `messages[]` is empty for raw collections. `fullText` is the whole prose, so `jq -r .data.fullText` works without branching on shape.

## simulate

```bash
bb simulate tx.json
bb simulate tx.json --creator bb1mysigner...
bb simulate tx.json --events
```

| Flag | Description |
| --- | --- |
| `--creator <address>` | Simulation context address (default `bb1simulation`) |
| `--events` | Dump the full events array instead of the count |

Calls `/api/v0/simulate` and returns parsed events, per-address balance changes, and any error the chain would raise. Needs an API key on mainnet; a local BitBadges API usually accepts any key or none.

User approval messages (`MsgUpdateUserApprovals`, `MsgSetIncomingApproval`, and so on) are refused: they change state on an existing collection with set, append, and delete variants, so a dry run has no stable meaning. Use `check` for those.

## preview

```bash
bb preview tx.json
bb preview tx.json --open
bb build vault --backing-coin USDC --uri ipfs://Qm... --quiet | bb preview - --open
bb preview tx.json --frontend-url http://localhost:3000
```

```json
{
  "ok": true,
  "data": {
    "code": "prv_ab12cd34",
    "url": "https://bitbadges.io/builder/preview?code=prv_ab12cd34",
    "reviewUrl": "https://bitbadges.io/mint/local-builder?code=prv_ab12cd34",
    "expiresAt": 1780000000000,
    "expiresIn": "1h"
  },
  "warnings": [],
  "error": null
}
```

| Field | Description |
| --- | --- |
| `reviewUrl` | Review and sign. Opens Preview, Review Items, Transferability, Permissions, then the wallet signature. Update transactions route to `/update/local-builder/<id>` so the site diffs against chain state. |
| `url` | Read-only preview at `/builder/preview`. Hand it to a reviewer without submit rights. |
| `code` | The `prv_` code behind both links. Valid for one hour. |

| Flag | Description |
| --- | --- |
| `--open` | Open `reviewUrl` in the default browser |
| `--frontend-url <url>` | Base for the printed links (default `https://bitbadges.io`) |
| network flags | Which BitBadges API stores the preview |

The preview endpoint needs no API key; the unguessable code is the secret. The site also accepts the code pasted into `/mint/local-builder`. Prefer `bb preview --open` when you want the full review sidebar before signing; `bb deploy --browser` is the tighter loop for a transaction you have already reviewed.

## Related

- [Build](build.md)
- [Deploy](deploy.md)
- [Dev](dev.md)
- [Agents](../agents/README.md)
