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

## tools

```bash
bb dev tools list                 # full schemas
bb dev tools list --names         # names only, in data.names
bb dev tools call get_current_timestamp
bb dev tools call set_collection_metadata --args-file ./metadata.json --session demo
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
bb dev tools call set_standards --session $SESSION --args '{"standards":["SmartToken"]}'
bb dev tools call set_collection_metadata --session $SESSION --args-file ./meta.json
bb dev tools call add_approval --session $SESSION --args-file ./approval.json
bb dev tools call get_transaction --session $SESSION
bb dev tools call get_review_url --session $SESSION      # short bitbadges.io link to review and sign
```

An unknown tool name exits 1 and prints the available names on stderr. The tool list and per-tool docs are in [MCP tools](../agents/mcp-tools.md). Prefer `bb build` when a template fits.

Inspect or reset sessions with `bb session list | show <id> | reset <id>`.

## resources

```bash
bb dev resources list
bb dev resources list --uris
bb dev resources read bitbadges://recipes/all
```

Static resources: the token registry, recipes, skills, error patterns, and docs slugs. `read` puts the body at `data.text`.

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

Fetched from GitHub on first use and cached for 24 hours at `~/.bitbadges/docs-cache.json`. Slugs come from the tree view; nest with slashes. Other ways agents read the docs: [Reading the docs](../agents/reading-the-docs.md).

## skills

```bash
bb dev skills                     # list
bb dev skills smart-token         # one skill's instructions
```

Same as `bb dev docs builder-skills` and `bb dev docs builder-skills/<id>`. Rendered pages: [Skills](../agents/skills/README.md).

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

## MCP server

The same registry runs as an MCP server for Claude Code, Claude Desktop, Cursor, and other clients. The bin is `bitbadges-builder` from the `bitbadges` npm package (`npx -y -p bitbadges bitbadges-builder`). Setup per client: [Set up your AI](../agents/setup.md).

## Related

- [Set up your AI](../agents/setup.md)
- [MCP tools](../agents/mcp-tools.md)
- [Build](build.md)
- [Analyze](analyze.md)
