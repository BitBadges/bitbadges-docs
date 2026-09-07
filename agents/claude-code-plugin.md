---
description: "Install and use the BitBadges Claude Code plugin. It wires the MCP builder tools and adds 8 workflow skills, two slash commands, and a builder subagent."
---

# Claude Code plugin

The Claude Code plugin is a convenience layer on top of the chain binary and CLI for Claude Code users. It registers the `bitbadges-builder` MCP server and ships 8 skills that teach Claude how to use the CLI, the MCP tools, and the docs for common workflows.

```sh
curl -fsSL https://install.bitbadges.io | sh
bb settings set apiKey <YOUR_KEY>
```

```text
/plugin marketplace add BitBadges/bitbadges-plugin
/plugin install bitbadges
/bitbadges:setup
```

The plugin is a thin harness, not a knowledge base. Token-type instructions live in the SDK and surface through `bb dev skills <id>`, the `get_skill_instructions` MCP tool, and the [Skills](skills/README.md) pages. The plugin's job is to teach Claude where to find them and how to compose them, not to ship one wrapper per token type.

## Prerequisites

The chain binary and CLI install is the entry point for everything BitBadges. It installs `bitbadgeschaind` (aliased as `bb`), which includes the `bitbadges-builder` MCP bin. Without it, the plugin falls back to running the MCP through `npx -y -p bitbadges bitbadges-builder`, which works but is slower and less reliable than a global binary.

Run `/bitbadges:setup` once to confirm the wiring, and `/bitbadges:status` for a health check at any time.

## What you get

### MCP server (auto-wired)

The plugin's `.mcp.json` registers `bitbadges-builder`, so there is no `claude mcp add` step:

```json
{
  "mcpServers": {
    "bitbadges-builder": {
      "command": "npx",
      "args": ["-y", "-p", "bitbadges", "bitbadges-builder"]
    }
  }
}
```

`npx` resolves the locally installed `bitbadges` package from the prerequisites step. If you skipped that install, npx fetches the package from the npm registry on first call.

### Skills (8)

Each skill routes Claude to the right CLI command, MCP tool, or docs page for one workflow. None duplicates token-type knowledge from the SDK.

| Skill | What it teaches |
| --- | --- |
| `build` | Meta-guide for any token type (smart token, fungible, NFT, subscription, vault, claim, quest, auction, payment, crowdfund, prediction market, and more). Discovers the type with `bb dev skills`, loads instructions with `get_skill_instructions`, then constructs with the per-field MCP session tools |
| `review` | Audit a transaction file or live collection for correctness, standards compliance, approval ordering, and UX issues. Wraps `bb check` and `review_collection` |
| `simulate` | Dry-run a transaction. Returns events and per-address balance diffs. Always before broadcast. Wraps `simulate_transaction` |
| `explain` | Plain-English description, audience-aware (user, developer, auditor). Wraps `explain_collection` and `bb explain` |
| `query` | Collections, balances, accounts, claims, standards, and every API route. Discovers routes with `--help-json` first, then calls |
| `address` | All six address operations: cosmos and EVM conversion, IBC backing, wrapper, mint-escrow, and alias derivations |
| `claim` | Build or audit a claim: whitelist, password, codes, open, or token-gated |
| `broadcast` | Sign and broadcast. On rails: dry-run by default, explicit confirmation for live. Picks between chain binary, burner, browser bridge, and programmatic signer |

For deeper instructions on a specific token type, the plugin sends Claude to the SDK, CLI, or docs rather than redefining them locally.

### Slash commands

| Command | What it does |
| --- | --- |
| `/bitbadges:setup` | One-time prerequisite check and API key wiring. Reads `~/.bitbadges/config.json` first (the CLI config is canonical) before prompting |
| `/bitbadges:status` | Health check: chain binary version, CLI version, API connectivity, MCP reachability, active network |

### Subagent

`bitbadges-builder` is a focused builder loop. It reaches for MCP tools first, falls back to the CLI, and only touches the chain binary for live broadcasts. Use it for isolation from the main conversation: "spawn the bitbadges-builder agent and have it build me a smart token end to end".

### SessionStart pre-warm hook

On every session start the plugin pre-warms the npx cache for the `bitbadges` package, so the first MCP tool call does not pay 5-15 seconds of npm download.

## API key

The plugin reads `~/.bitbadges/config.json` if the CLI is already configured. Otherwise `/bitbadges:setup` prompts and writes the key with `bb settings set apiKey <KEY>`, so the CLI and the plugin share it. Get a key at [bitbadges.io/developer](https://bitbadges.io/developer).

## Migrate from a manual MCP setup

If you previously ran `claude mcp add bitbadges-builder -- npx -y -p bitbadges bitbadges-builder`, remove the user-scope entry before installing the plugin to avoid duplicate servers:

```text
claude mcp remove bitbadges-builder
```

`/bitbadges:setup` detects duplicates and offers cleanup.

## When you do not need the plugin

The plugin is for Claude Code only. Other harnesses get the same coverage from the MCP server and the skill docs:

- Cursor, Claude Desktop, other MCP clients: set up the `bitbadges-builder` server in your client ([MCP builder tools](mcp-tools.md)). The server exposes `get_skill_instructions(<id>)` for on-demand loading, the same path the plugin uses.
- Generic LLMs, shell scripts, CI: use the [CLI](../cli/README.md). For skill instructions, read the [Skills](skills/README.md) pages or run `bb dev skills <id>`.
- TypeScript developers: `npm install bitbadges` and use the [SDK](../sdk/README.md).

The CLI is the base layer. Skill content is rendered in one place ([Skills](skills/README.md)) and consumed by reference from the plugin, the MCP server, and the CLI.

## Source

- Plugin repo: [BitBadges/bitbadges-plugin](https://github.com/BitBadges/bitbadges-plugin)
- MCP server: [bitbadgesjs-sdk/src/builder](https://github.com/BitBadges/bitbadgesjs/tree/main/packages/bitbadgesjs-sdk/src/builder)
- CLI: [bitbadgesjs-sdk/src/cli](https://github.com/BitBadges/bitbadgesjs/tree/main/packages/bitbadgesjs-sdk/src/cli)
- Skills source of truth: [skillInstructions.ts](https://github.com/BitBadges/bitbadgesjs/blob/main/packages/bitbadgesjs-sdk/src/builder/resources/skillInstructions.ts)
