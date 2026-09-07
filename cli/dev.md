---
description: "The agent-facing bb dev surface: call MCP builder tools directly, read resources, browse docs and skills, and send feedback."
---

# bb dev

`bb dev` exposes the MCP builder tool registry, its static resources, the docs corpus, and the builder skills as plain CLI calls. It is the same surface MCP clients reach over stdio, without a protocol round trip.

## Example

```bash
bb dev tools list --names
bb dev tools call get_skill_instructions --args '{"skillId":"smart-token"}'
bb dev resources read bitbadges://recipes/all
bb dev docs learn/approval-criteria/merkle-challenges
bb dev skills smart-token
bb dev feedback "the --denom flag rejects lowercase usdc"
```

The second command returns the skill's structured instructions (mainnet-independent; `summary` trimmed to its first lines):

```json
{
  "ok": true,
  "data": {
    "id": "smart-token",
    "name": "Smart Token",
    "category": "token-type",
    "description": "IBC-backed smart token with 1:1 backing and two required approvals (backing + unbacking)",
    "summary": "Required standards: [\"Smart Token\"]\n\n- MUST include cosmosCoinBackedPath in invariants with conversion sideA/sideB\n- MUST configure at least one alias path (decimals must match IBC denom decimals)\n- MUST create TWO required collection approvals (backing + unbacking)."
  },
  "warnings": [],
  "error": null
}
```

| Command | Purpose |
| --- | --- |
| `dev tools list` | Every builder tool with its JSON schema |
| `dev tools call <name>` | Invoke one tool |
| `dev resources list`, `dev resources read <uri>` | Static resource registry |
| `dev docs [section]` | Docs corpus, cached locally |
| `dev skills [id]` | Builder skills (shorthand for `dev docs builder-skills`) |
| `dev gen-pub-key` | Cosmos pubkey derivation, see [Account](account.md#gen-pub-key) |
| `dev feedback <message>` | Send feedback or a feature idea to BitBadges |

The old top-level `tools`, `tool`, `resources`, `docs`, `skills`, and `gen-pub-key` still resolve with a deprecation banner.

{% hint style="info" %}
Ask your agent. Everything under `bb dev` is what the agent already calls through MCP (`get_skill_instructions`, `search_knowledge_base`, `fetch_docs`). This prompt runs the first example for you:

```text
Load the smart-token skill and explain the two required approvals.
```
{% endhint %}

## tools

```bash
bb dev tools list                 # full schemas
bb dev tools list --names         # names only, in data.names
bb dev tools call get_current_timestamp
bb dev tools call set_collection_metadata --args-file ./metadata.json --session demo
```

`get_current_timestamp` needs no arguments and no key; it is the standard "is the registry wired" probe:

```json
{
  "ok": true,
  "data": {
    "timestamp": "1788749458531",
    "timestampMs": 1788749458531,
    "isoDate": "2026-09-07T02:50:58.531Z",
    "foreverEnd": "18446744073709551615",
    "helpers": {
      "fiveMinutesFromNow": "1788749758531",
      "oneHourFromNow": "1788753058531",
      "oneDayFromNow": "1788835858531",
      "oneWeekFromNow": "1789354258531",
      "oneMonthFromNow": "1791341458531",
      "oneYearFromNow": "1820285458531"
    },
    "durations": {
      "fiveMinutes": "300000",
      "oneHour": "3600000",
      "oneDay": "86400000",
      "oneWeek": "604800000",
      "oneMonth": "2592000000",
      "oneYear": "31536000000"
    }
  },
  "warnings": [],
  "error": null
}
```

| Flag | Command | Description |
| --- | --- | --- |
| `--names` | `list` | Only tool names |
| `--args <json>` | `call` | Arguments as inline JSON |
| `--args-file <path>` | `call` | Arguments from a file |
| `--session <id>` | `call` | Session for stateful tools. Stored at `~/.bitbadges/sessions/<id>.json`. Defaults to `args.sessionId` or the built-in default. |
| `--raw` | `call` | Structured result instead of the formatted text block |

Stateful tools (`set_*`, `add_*`, `remove_*`, `get_transaction`, `get_review_url`) read and write the named session, so an agent can compose a collection across many calls:

```bash
SESSION=demo
bb dev tools call set_standards --session $SESSION --args '{"standards":["Smart Token"]}'
bb dev tools call set_collection_metadata --session $SESSION --args '{"name":"Demo Vault","description":"USDC vault","image":"ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/vault.png"}'
bb dev tools call add_approval --session $SESSION --args-file ./approval.json
bb dev tools call get_transaction --session $SESSION
bb dev tools call get_review_url --session $SESSION      # short bitbadges.io link to review and sign
```

An unknown tool name exits 1 and prints the available names on stderr. Invalid `--args` JSON returns `{ "ok": false, "error": { "code": "invalid_args" } }`. The tool list and per-tool docs are in [MCP tools](../agents/mcp-tools.md). Prefer `bb build` when a template fits.

Inspect or reset sessions with `bb session list`, `bb session show demo`, and `bb session reset demo`.

## resources

```bash
bb dev resources list
bb dev resources list --uris
bb dev resources read bitbadges://recipes/all
```

Static resources: the token registry, recipes, skills, error patterns, and docs slugs. `read` puts the body at `data.text`:

```json
{
  "ok": true,
  "data": {
    "uri": "bitbadges://recipes/all",
    "text": "# BitBadges Code Recipes & Decision Matrices\n\nSnippets and decision guides for common operations.\n\n## Token Type Decision Matrix\n\nChoose the right token type for your use case"
  },
  "warnings": [],
  "error": null
}
```

## docs

```bash
bb dev docs                                 # section tree
bb dev docs all                             # full for-llms.txt dump
bb dev docs learn
bb dev docs learn/approval-criteria
bb dev docs messages/msg-transfer-tokens
bb dev docs approvals                       # partial match: first section containing "approvals"
bb dev docs --refresh
```

Fetched from GitHub on first use and cached for 24 hours at `~/.bitbadges/docs-cache.json`. Slugs come from the tree view; nest with slashes. Other ways agents read the docs: [Reading the Docs](../agents/reading-the-docs.md).

## skills

```bash
bb dev skills                     # list
bb dev skills smart-token         # one skill's instructions
```

Same as `bb dev docs builder-skills` and `bb dev docs builder-skills/smart-token`. Rendered pages: [Skills](../agents/skills/README.md).

## feedback

```bash
bb dev feedback "the --denom flag rejects 'usdc' lowercase"
bb dev feedback --type feature-idea --category cli "add tab completion for collection IDs"
```

| Flag | Description |
| --- | --- |
| `--type <feedback\|feature-idea>` | Default `feedback` |
| `--category <name>` | Tag, used with `--type feature-idea` |
| `--page <ref>` | Override the source tag (default `cli:<version>`) |

Submissions appear next to the in-app feedback widget.

## MCP Server

The same registry runs as an MCP server for Claude Code, Claude Desktop, Cursor, and other clients. The bin is `bitbadges-builder` from the `bitbadges` npm package (`npx -y -p bitbadges bitbadges-builder`). Setup per client: [Set Up Your AI](../agents/setup.md).

## Related

- [Set Up Your AI](../agents/setup.md)
- [MCP tools](../agents/mcp-tools.md)
- [Build](build.md)
- [Analyze](analyze.md)
