---
description: "Set up your AI harness for BitBadges: the MCP server command and the config for Claude Code, Claude Desktop, Cursor, Windsurf, Codex CLI, VS Code, and Zed."
---

# Set Up Your AI

Every harness below runs the same MCP server. Install the chain binary and CLI first, then add the client-specific wrapper for your harness.

```bash
curl -fsSL https://install.bitbadges.io | sh
bb settings set apiKey "$BITBADGES_API_KEY"
```

The server command is the `bitbadges-builder` bin from the `bitbadges` npm package:

```bash
npx -y -p bitbadges bitbadges-builder
```

The key in every config below is a fake example; paste your own from [bitbadges.io/developer](https://bitbadges.io/developer). `npx` resolves the package the install put on your machine. Without that install it fetches from npm on first call, which is slower. Optional environment variables: `BITBADGES_API_KEY` (queries, simulation, review links; get one at [bitbadges.io/developer](https://bitbadges.io/developer)), `BITBADGES_MNEMONIC` or `BITBADGES_PRIVATE_KEY` (server-side signing; leave unset for review-and-sign in the browser). Full list: [MCP Builder Tools](mcp-tools.md#environment-variables).

## Claude Code

Plugin (auto-wires the server, adds 8 skills and two slash commands):

```text
/plugin marketplace add BitBadges/bitbadges-plugin
/plugin install bitbadges
/bitbadges:setup
```

Plain MCP, no plugin:

```bash
claude mcp add bitbadges-builder -e BITBADGES_API_KEY="$BITBADGES_API_KEY" -- npx -y -p bitbadges bitbadges-builder
```

Do not run both; `/bitbadges:setup` detects a duplicate user-scope entry and offers cleanup. Details: [Claude Code Plugin](claude-code-plugin.md).

## Claude Desktop

`claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "bitbadges-builder": {
      "command": "npx",
      "args": ["-y", "-p", "bitbadges", "bitbadges-builder"],
      "env": { "BITBADGES_API_KEY": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef" }
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
      "env": { "BITBADGES_API_KEY": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef" }
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
      "env": { "BITBADGES_API_KEY": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef" }
    }
  }
}
```

## Codex CLI

Add this table to `~/.codex/config.toml` (do not replace your existing configuration). Codex uses TOML, not the JSON `mcpServers` format used by some other clients. Export `BITBADGES_API_KEY` before launching Codex so `env_vars` can forward it:

```toml
[mcp_servers.bitbadges-builder]
command = "npx"
args = ["-y", "-p", "bitbadges", "bitbadges-builder"]
env_vars = ["BITBADGES_API_KEY"]
```

Restart Codex after editing, then use `/mcp` to inspect the server connection. See the [official OpenAI MCP documentation](https://developers.openai.com/codex/mcp) for configuration options.

## VS Code and GitHub Copilot

`.vscode/mcp.json` in the workspace:

```json
{
  "servers": {
    "bitbadges-builder": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "-p", "bitbadges", "bitbadges-builder"],
      "env": { "BITBADGES_API_KEY": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef" }
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
      "env": { "BITBADGES_API_KEY": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef" }
    }
  }
}
```

## Any LLM Without Tools

Claude.ai, ChatGPT, Gemini, or any chat model with no MCP access can still build. Ask it for the transaction JSON and take that JSON to the site to review and sign.

1. Give the model context: paste the relevant [skill page](skills/README.md), or the prompt from `agent.exportPrompt()` on the [Programmatic Agent](programmatic-agent.md#export-as-a-single-prompt-for-no-tools-llms).
2. Ask for the transaction object and nothing else:

   ```text
   Return only a JSON object of the form { "messages": [{ "typeUrl": "/tokenization.MsgCreateCollection", "value": { "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", ... } }] } with the rest of value filled in. No prose, no code fence.
   ```

3. Paste it into `https://bitbadges.io/mint/local-builder` ("Bring your transaction"). Or, if you have the CLI, `bb preview tx.json --open` gives you a short review link, and a `#tx=<base64url JSON>` link opens the same page with the transaction in the URL hash.

A complete one-message example the model can return, revoking an outgoing approval:

```json
{
  "messages": [
    {
      "typeUrl": "/tokenization.MsgDeleteOutgoingApproval",
      "value": {
        "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
        "collectionId": "2",
        "approvalId": "agent-daily-budget"
      }
    }
  ]
}
```

The same transaction as a hash link, which any chat can hand to the user:

```text
https://bitbadges.io/mint/local-builder#tx=eyJtZXNzYWdlcyI6W3sidHlwZVVybCI6Ii90b2tlbml6YXRpb24uTXNnRGVsZXRlT3V0Z29pbmdBcHByb3ZhbCIsInZhbHVlIjp7ImNyZWF0b3IiOiJiYjFwMHJyZWwzMzY1c2NhZHE1azlwdjB4MHpwOWoyMmpzNmRudzcwZCIsImNvbGxlY3Rpb25JZCI6IjIiLCJhcHByb3ZhbElkIjoiYWdlbnQtZGFpbHktYnVkZ2V0In19XX0
```

The site runs review, transferability, and permissions checks before the wallet signature, so an unvalidated model output still gets the same review as a tool-built one.

## Verify

```bash
bb doctor                                  # chain binary, CLI, API key, network
bb dev tools list --names | jq -r '.data.names[]'   # the same registry your client sees
```

In the client, paste this prompt. A reply with a timestamp and a tool list proves the server is wired.

```text
Call get_current_timestamp and tell me the ISO time, then list every BitBadges tool you can see.
```

## Related

- [MCP Builder Tools](mcp-tools.md)
- [Claude Code Plugin](claude-code-plugin.md)
- [Agents](README.md)
