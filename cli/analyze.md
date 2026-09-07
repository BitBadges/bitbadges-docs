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
bb build vault --backing-coin USDC --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json | bb check -
```

| Command | Purpose |
| --- | --- |
| `check <input>` | Structural validation, design review, and metadata coverage in one pass |
| `explain <input>` | Plain-English summary; detects transaction vs collection |
| `simulate <input>` | Dry run against the simulate endpoint |
| `preview <input>` | Upload and print a read-only link and a review-and-sign link |

All four print the envelope on stdout and human-readable scorecards on stderr (`--quiet` or `BB_QUIET=1` silences stderr). All accept `--condensed`, `--output-file <path>`, and the [network flags](README.md#network-flags).

{% hint style="info" %}
Ask your agent. `review_collection`, `explain_collection`, `simulate_transaction`, and `get_review_url` are the MCP equivalents: "Review and explain the transaction in tx.json, simulate it, then give me a link to sign."
{% endhint %}

## check

```bash
bb check tx.json                       # full (default)
bb check tx.json --depth structural    # validateTransaction() only, offline
bb check tx.json --depth review        # reviewCollection() only
bb check 42 --depth review             # live mainnet collection by ID
bb check tx.json --strict              # exit 1 on warnings
```

A `bb build vault --backing-coin USDC` transaction at the default depth prints (review findings trimmed to the first one):

```json fold=9-19
{
  "ok": true,
  "data": {
    "validate": {
      "valid": true,
      "issues": []
    },
    "review": {
      "findings": [
        {
          "code": "review.ux.forceful_transfers_not_locked",
          "severity": "critical",
          "source": "ux",
          "category": "approvals",
          "title": { "en": "Forceful transfers are not permanently blocked" },
          "detail": { "en": "This collection has noForcefulPostMintTransfers set to false, which permits forceful post-mint transfers. No approvals currently enable them, but since the invariant is locked at creation time, any approval the manager adds later could introduce forceful transfers." },
          "recommendation": { "en": "If forceful transfers should be permanently impossible, set invariants.noForcefulPostMintTransfers = true at creation. It cannot be toggled later. If forceful transfers are intentional for this collection (auction settlement, subscription revoke, prediction market resolution, etc.), you can safely ignore this." }
        }
      ],
      "summary": {
        "critical": 1,
        "warning": 0,
        "info": 1,
        "verdict": "fail"
      }
    }
  },
  "warnings": [],
  "error": null
}
```

`--depth structural` on a valid file is the short form: `{ "ok": true, "data": { "valid": true, "issues": [] }, "warnings": [], "error": null }`.

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
bb explain '{"messages":[{"typeUrl":"/tokenization.MsgDeleteOutgoingApproval","value":{"creator":"bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d","collectionId":"2","approvalId":"agent-daily-budget"}}]}'
bb explain 42                       # fetch the collection, then interpret
bb build vault --backing-coin USDC --quiet | jq '{messages:[.data]}' | bb explain -
```

Input detection:

| Input | Path |
| --- | --- |
| Single message `{ typeUrl, value }` | `interpretTransaction()` over `value` |
| Wrapper `{ messages: [] }` with one or more entries | Finds the first collection message and explains it |
| Raw collection (no `typeUrl`, no `messages`) | `interpretCollection()` |
| Numeric `<n>` | Fetches `/api/v0/collection/<n>`, then `interpretCollection()` |

The last command above prints (summary and `fullText` trimmed to their first paragraphs):

```json
{
  "ok": true,
  "data": {
    "kind": "tx",
    "messages": [
      {
        "typeUrl": "/tokenization.MsgCreateCollection",
        "summary": "## Transaction Summary\n\nCreate a new Smart Token (IBC-backed) called \"Unnamed Collection\" on BitBadges.\n\n## Collection Overview\n\n**\"Unnamed Collection\"** (creator-provided name) is a Smart Token (IBC-backed) on BitBadges. It contains 1 unique token ID (#1). There is no hard cap on supply per token ID, meaning tokens can be minted without an on-chain maximum.\n\nThis is a smart token backed 1:1 by USDC. Users deposit the IBC backing asset into a vault and receive collection tokens in return. They can redeem their collection tokens at any time to withdraw the backing asset from the vault.\n\nDeclared standards: Smart Token, Vault."
      }
    ],
    "fullText": "## Transaction Summary\n\nCreate a new Smart Token (IBC-backed) called \"Unnamed Collection\" on BitBadges."
  },
  "warnings": [],
  "error": null
}
```

`kind` is `tx`, `collection`, or `msg`. `messages[]` is empty for raw collections. `fullText` is the whole prose, so `jq -r .data.fullText` works without branching on shape.

## simulate

```bash
bb simulate tx.json
bb simulate tx.json --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
bb simulate tx.json --events
```

| Flag | Description |
| --- | --- |
| `--creator <address>` | Simulation context address (default `bb1simulation`) |
| `--events` | Dump the full events array instead of the count |

Calls `/api/v0/simulate` and returns parsed events, per-address balance changes, and any error the chain would raise. Needs an API key on mainnet; a local BitBadges API usually accepts any key or none.

The `--creator` address must exist on chain. For an address that has never held BADGE the envelope is `ok` but the simulation reports the chain error (mainnet output):

```json
{
  "ok": true,
  "data": {
    "success": false,
    "error": "API Error 500: {\"errorMessage\":\"Error simulating transaction - fee payer address does not exist: unknown address\"}"
  },
  "warnings": [],
  "error": null
}
```

User approval messages (`MsgUpdateUserApprovals`, `MsgSetIncomingApproval`, and so on) are refused: they change state on an existing collection with set, append, and delete variants, so a dry run has no stable meaning. Use `check` for those.

## preview

```bash
bb preview tx.json
bb preview tx.json --open
bb build vault --backing-coin USDC --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json --quiet | bb preview - --open
bb preview tx.json --frontend-url http://localhost:3000
```

A successful upload prints (the code is an example; every upload mints a fresh one):

```json
{
  "ok": true,
  "data": {
    "code": "prv_ab12cd34",
    "url": "https://bitbadges.io/mint/local-builder?code=prv_ab12cd34",
    "reviewUrl": "https://bitbadges.io/mint/local-builder?code=prv_ab12cd34",
    "expiresAt": 1788742800000,
    "expiresIn": "1h"
  },
  "warnings": [],
  "error": null
}
```

| Field | Description |
| --- | --- |
| `reviewUrl` | Review and sign. Opens Preview, Review Items, Transferability, Permissions, then the wallet signature. Update transactions route to `/update/local-builder/<id>` so the site diffs against chain state. |
| `url` | The same destination. `url` is the older field name, kept so existing scripts keep working. |
| `code` | The `prv_` code behind the link. Valid for one hour. |

| Flag | Description |
| --- | --- |
| `--open` | Open the link in the default browser |
| `--frontend-url <url>` | Base for the printed link (default `https://bitbadges.io`) |
| network flags | Which BitBadges API stores the preview |

The preview endpoint needs no API key; the unguessable code is the secret. The site also accepts the code pasted into `/mint/local-builder`. Prefer `bb preview --open` when you want the full review sidebar before signing; `bb deploy --browser` is the tighter loop for a transaction you have already reviewed.

## Related

- [Build](build.md)
- [Deploy](deploy.md)
- [Dev](dev.md)
- [Agents](../agents/README.md)
