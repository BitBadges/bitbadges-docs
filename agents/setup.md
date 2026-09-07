---
description: "Set up your AI harness for BitBadges. The one MCP server command, then the exact config for Claude Code, Claude Desktop, Cursor, Windsurf, Codex CLI, VS Code, Zed, and LLMs without tools."
---

# Set up your AI

Every harness below runs the same MCP server. Install the chain binary and CLI first, then add the client-specific wrapper for your harness.

```bash
curl -fsSL https://install.bitbadges.io | sh
bb settings set apiKey <YOUR_KEY>
```

The server command is the `bitbadges-builder` bin from the `bitbadges` npm package:

```bash
npx -y -p bitbadges bitbadges-builder
```

`npx` resolves the package the install put on your machine. Without that install it fetches from npm on first call, which is slower. Optional environment variables: `BITBADGES_API_KEY` (queries, simulation, review links on testnet), `BITBADGES_MNEMONIC` or `BITBADGES_PRIVATE_KEY` (server-side signing; leave unset for review-and-sign in the browser). Full list: [MCP builder tools](mcp-tools.md#environment-variables).

## Claude Code

Plugin (auto-wires the server, adds 8 skills and two slash commands):

```text
/plugin marketplace add BitBadges/bitbadges-plugin
/plugin install bitbadges
/bitbadges:setup
```

Plain MCP, no plugin:

```bash
claude mcp add bitbadges-builder -e BITBADGES_API_KEY=<YOUR_KEY> -- npx -y -p bitbadges bitbadges-builder
```

Do not run both; `/bitbadges:setup` detects a duplicate user-scope entry and offers cleanup. Details: [Claude Code plugin](claude-code-plugin.md).

## Claude Desktop

`claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "bitbadges-builder": {
      "command": "npx",
      "args": ["-y", "-p", "bitbadges", "bitbadges-builder"],
      "env": { "BITBADGES_API_KEY": "<YOUR_KEY>" }
    }
  }
}
```

## Cursor

`.cursor/mcp.json` in the project (or `~/.cursor/mcp.json` for all projects):

```json
{
  "mcpServers": {
    "bitbadges-builder": {
      "command": "npx",
      "args": ["-y", "-p", "bitbadges", "bitbadges-builder"],
      "env": { "BITBADGES_API_KEY": "<YOUR_KEY>" }
    }
  }
}
```

## Windsurf

`~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "bitbadges-builder": {
      "command": "npx",
      "args": ["-y", "-p", "bitbadges", "bitbadges-builder"],
      "env": { "BITBADGES_API_KEY": "<YOUR_KEY>" }
    }
  }
}
```

## Codex CLI

`~/.codex/config.toml`:

```toml
[mcp_servers.bitbadges-builder]
command = "npx"
args = ["-y", "-p", "bitbadges", "bitbadges-builder"]
env = { BITBADGES_API_KEY = "<YOUR_KEY>" }
```

## VS Code and GitHub Copilot

`.vscode/mcp.json` in the workspace:

```json
{
  "servers": {
    "bitbadges-builder": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "-p", "bitbadges", "bitbadges-builder"],
      "env": { "BITBADGES_API_KEY": "<YOUR_KEY>" }
    }
  }
}
```

## Zed

`settings.json` (`zed: open settings`):

```json
{
  "context_servers": {
    "bitbadges-builder": {
      "source": "custom",
      "command": "npx",
      "args": ["-y", "-p", "bitbadges", "bitbadges-builder"],
      "env": { "BITBADGES_API_KEY": "<YOUR_KEY>" }
    }
  }
}
```

## Any LLM without tools

Claude.ai, ChatGPT, Gemini, or any chat model with no MCP access can still build. Ask it for the transaction JSON and take that JSON to the site to review and sign.

1. Give the model context: paste the relevant [skill page](skills/README.md), or the prompt from `agent.exportPrompt()` on the [Programmatic agent](programmatic-agent.md#export-as-a-single-prompt-for-no-tools-llms).
2. Ask for a `{ "messages": [{ "typeUrl": "...", "value": { ... } }] }` object and nothing else.
3. Paste it into `https://bitbadges.io/mint/local-builder` ("Bring your transaction"). Or, if you have the CLI, `bb preview tx.json --open` gives you a short review link, and a `#tx=<base64url JSON>` link opens the same page with the transaction in the URL hash.

The site runs review, transferability, and permissions checks before the wallet signature, so an unvalidated model output still gets the same review as a tool-built one.

## Verify

```bash
bb doctor                                  # chain binary, CLI, API key, network
bb dev tools list --names | head           # the same registry your client sees
```

In the client, ask for `get_current_timestamp`; a reply proves the server is wired.

## Related

- [MCP builder tools](mcp-tools.md)
- [Claude Code plugin](claude-code-plugin.md)
- [Agents](README.md)
