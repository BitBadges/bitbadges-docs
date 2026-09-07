---
description: "Idea to on-chain in one sitting: build a subscription token with the CLI or an AI agent, check it, simulate it, and sign it in the browser. Every command shows its real output."
---

# Your First Collection

This page goes from an idea to a signed collection on-chain. Every command below shows the output it produced, so you can tell success from failure at each step.

Two ways in. Pick one, or read both; they meet at the same review link.

- **Terminal.** The `bb` CLI builds from flags. No model involved.
- **AI agent.** Claude Code, Codex, or Cursor with the BitBadges MCP server. You describe the token; the agent runs the same steps.

The agent never signs. Neither does the CLI unless you tell it to. Both hand you a link, and you sign in the browser with your own wallet.

## Prerequisites

```bash
curl -fsSL https://install.bitbadges.io | sh
bb settings set apiKey <key>
bb doctor
```

Get a key at [bitbadges.io/developer](https://bitbadges.io/developer). You do not need one to build; you need one for `bb simulate` and for the query tools. Set it now so nothing below stalls.

For the agent path, wire the MCP server into your client first. See [Setup](../agents/setup.md).

Starting with v35, transactions require fees of at least `10ubadge` per unit of gas. Fund the signing account with BADGE before broadcasting. With the updated CLI, burner `--fee 0` means automatic fee estimation; it does not produce a zero-fee transaction. If you need BADGE, use the faucet when available or ask in the [BitBadges Discord](https://discord.com/invite/TJMaEd9bar).

## The idea

A subscription: members pay 10 USDC a month and hold a token while their subscription is live. This is the whole spec.

## Path A: the CLI

### 1. Build

```bash
bb build subscription \
  --interval monthly --price 10 --denom USDC \
  --recipient bb1w63npeee74ewuudzf8cgvy6at4jn4mjr0a9r5p \
  --creator bb1w63npeee74ewuudzf8cgvy6at4jn4mjr0a9r5p \
  --manager bb1w63npeee74ewuudzf8cgvy6at4jn4mjr0a9r5p \
  --name "Pro Plan" --description "Monthly access." --image https://example.com/pro.png \
  --output-file tx.json
```

`--creator` and `--manager` are your address. Leave them out and the message ships with `creator: ""`, which the chain rejects at simulate time, not build time.

The build prints a review to stderr, then writes the file:

```text
━━━ Review ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Summary  0 critical  ·  2 warning  ·  3 info  ·  verdict: warn
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Written to tx.json
```

Zero critical findings. The warning and info entries are advisory; step 2 shows how to read them.

The file holds the universal envelope. `data` is the message; `hint` is the next command:

```json
{
  "ok": true,
  "data": { "typeUrl": "/tokenization.MsgCreateCollection", "value": { "creator": "bb1w63np…", "…": "…" } },
  "warnings": [],
  "hint": "Next: bb check tx.json && bb preview tx.json --open — audits it, then opens the browser to review and sign.",
  "meta": { "review": { "summary": { "critical": 0, "warning": 2, "info": 3, "verdict": "warn" } } },
  "error": null
}
```

### 2. Check

```bash
bb check tx.json
```

```json
{
  "ok": true,
  "data": { "review": { "summary": { "critical": 0, "warning": 2, "info": 3, "verdict": "warn" }, "findings": ["…"] } },
  "warnings": [],
  "error": null
}
```

Exit code 0. A `warn` verdict means nothing blocks signing. Read the warning anyway; it tells you a permission is neutral, which is a choice the manager still holds.

The builder locks the mint (faucet) approval forever by default. Nobody, including the manager, can re-point it after launch, so the token supply cannot be quietly changed. Every other approval stays editable.

**Need to change the price later?** The price lives in that faucet approval, so locking it freezes the price too. Build with the opt-out:

```bash
bb build subscription … --updatable-mint --output-file tx.json && bb check tx.json
```

```json
{
  "ok": false,
  "data": null,
  "hint": "Fix the reported errors and critical findings (each carries a recommendation), then re-run `bb check`. Do not preview or deploy a transaction that fails here.",
  "error": { "code": "review_critical", "message": "Check failed: 1 critical review finding(s)." }
}
```

Exit code 2, and the one critical finding is the one you chose:

| Finding | What it means | Recommendation |
| --- | --- | --- |
| Mint approvals can be modified (unlimited supply risk) | The manager can edit the faucet later, including its price, and could also re-point it to mint for free. | Lock canUpdateCollectionApprovals for mint-related approvals (fromListId: "Mint"). Use scoped approval permissions to lock mint while allowing transfer approval updates if needed. |

That is not a bug. The reviewer does not know your intent, so it flags anything a manager could abuse and leaves the decision to you. `bb check` fails so the choice is visible to whoever signs. If you mean it, preview and sign anyway; the site shows the same finding.

`bb explain tx.json` prints the transaction in plain English if the review text is too dense.

### 3. Simulate

```bash
bb simulate tx.json
```

```json
{
  "ok": true,
  "data": { "success": true, "valid": true, "gasUsed": "118061", "events": ["…"], "netChanges": {} },
  "warnings": [],
  "error": null
}
```

`valid: true` means the chain would accept it. A failing simulation exits 2 with `ok: false` and the chain's reason in `error.message`.

### 4. Review and sign

```bash
bb preview tx.json --open
```

```text
Review + sign: https://bitbadges.io/mint/local-builder?code=prv_7tffq58d
Expires in 1 hour.
```

```json
{
  "ok": true,
  "data": {
    "code": "prv_7tffq58d",
    "url": "https://bitbadges.io/mint/local-builder?code=prv_7tffq58d",
    "reviewUrl": "https://bitbadges.io/mint/local-builder?code=prv_7tffq58d",
    "expiresAt": 1788803578315,
    "expiresIn": "1 hour"
  },
  "warnings": [],
  "error": null
}
```

`--open` launches the link. The page loads the transaction, lands on Review, and walks Preview, Review Items, Transferability, and Permissions before the wallet signature. Sign there.

Prefer to stay in the terminal and have the hash come back to you? `bb deploy --browser` opens the sign page and blocks until the wallet confirms:

```bash
bb deploy --msg-file tx.json --browser --manager bb1w63npeee74ewuudzf8cgvy6at4jn4mjr0a9r5p
```

```json
{ "success": true, "path": "browser", "mode": "sign-and-broadcast", "txHash": "E5B4C3A6E5B1F3B9F0F4C1F2B7A6D5C4E3F2A1B0C9D8E7F6A5B4C3D2E1F0A9B8", "chain": "cosmos" }
```

### 5. Confirm

```bash
bb tx wait E5B4C3A6E5B1F3B9F0F4C1F2B7A6D5C4E3F2A1B0C9D8E7F6A5B4C3D2E1F0A9B8 --timeout 60
```

The response carries the new `collectionId` in its events. Then:

```bash
bb api tokens get-collection <collectionId>
```

That returns the collection as the indexer sees it. Your subscription is on-chain.

## Path B: an AI agent

With the MCP server wired, paste this into Claude Code, Codex, or Cursor:

```text
Build me a subscription token called Pro Plan: members pay 10 USDC a month and keep access while it is live. I am the manager. Load the subscription skill, use the session tools, run validate, review, and simulate in parallel, fix anything critical, then call get_review_url and give me the link.
```

The agent calls `get_skill_instructions`, then the `set_*` and `add_approval` tools in one round, then the three verify tools, then `get_review_url`. The review comes back with no critical findings. Tell the agent you need to change the price later and it rebuilds with the mint left editable, then shows you the one critical finding that choice creates, in plain English, before handing back:

```json
{
  "success": true,
  "code": "prv_5cip1cmg",
  "reviewUrl": "https://bitbadges.io/mint/local-builder?code=prv_5cip1cmg",
  "expiresAt": 1788803578315,
  "expiresIn": "1 hour"
}
```

Open `reviewUrl`. From here it is step 4 above: review, sign with your wallet, confirm.

Building a second collection in the same conversation? Ask the agent to call `reset_session` first. Session state persists, and without the reset the new collection inherits the first one's approvals.

## Running against a local stack

Every command above takes `--local` to target an indexer on `localhost:3001` and a chain on `localhost:26657`. `bb simulate --local` needs no API key. `bb preview --local` prints a `localhost:3000` link.

## Where to go next

- [Build Commands](../cli/build.md) lists all 19 templates and their flags.
- [Skills](../agents/skills/README.md) is the agent's version of the same list, with a paste-ready prompt on every page.
- [Deploy Commands](../cli/deploy.md) covers every signing path, including unattended `--burner` and keyring signing.
- [Create a Collection](../guides/create-a-collection.md) builds the message by hand when no template fits.
