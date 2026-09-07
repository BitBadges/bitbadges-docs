# Build with AI Agents

BitBadges is built to be driven by AI. You bring your own AI — Claude Code, Cursor, Claude Desktop, or any LLM — and it builds the transaction; bitbadges.io reviews it and your wallet signs it. There is no AI to configure on the website, and no BitBadges-managed model key: your agent, your model, your keys.

This page is the spine: **install → set up your AI client → build → review → sign.** The rest of the section covers bots, claims, WebSocket events, and spending limits.

## Install

```bash
curl -fsSL https://install.bitbadges.io | sh
```

This installs the chain binary and SDK CLI. For CLI-based agent workflows (query, review, transact — no TypeScript needed), see [CLI for AI Agents](../cli/for-ai-agents.md).

## Set up your AI client

Pick one. All of them wrap the same MCP builder (53 tools) and the same `bb` CLI.

### Claude Code

```bash
# The plugin auto-wires the MCP server plus 8 workflow skills.
/plugin marketplace add BitBadges/bitbadges-plugin
/plugin install bitbadges
```

Manual alternative, no plugin:

```bash
claude mcp add bitbadges-builder -- npx -y -p bitbadges bitbadges-builder
```

### Cursor

Add to `.cursor/mcp.json` in your project (or `~/.cursor/mcp.json` for every project):

```json
{
  "mcpServers": {
    "bitbadges-builder": {
      "command": "npx",
      "args": ["-y", "-p", "bitbadges", "bitbadges-builder"],
      "env": { "BITBADGES_API_KEY": "your-api-key" }
    }
  }
}
```

### Claude Desktop

Add the same block to `claude_desktop_config.json` and restart the app. Full paths and options: [Builder Tools Reference](builder-tools.md#installation).

### No MCP client?

The `bb` CLI does everything the tools do, from any shell or any language. See [CLI for AI Agents](../cli/for-ai-agents.md).

## Build your first token

Describe what you want. Your agent calls the builder tools, validates, and simulates before you ever see a transaction.

> Build me a subscription token: $10/mo in USDC, cancellable any time, and I'm the manager.

The agent chains `set_standards` → `add_approval` → `set_permissions` → `validate_transaction` → `simulate_transaction` → `get_transaction`. You do not need to know those names; ask for the token you want.

Prefer a shell? The CLI has deterministic builders for the same shapes, no LLM involved:

```bash
bb build subscription \
  --name "Pro Plan" --price 10 --denom USDC \
  --manager bb1your...address \
  --review > tx.json
```

`bb build --help` lists every template (vault, nft, subscription, bounty, crowdfund, auction, prediction-market, credit-token, …). Full reference: [Build Commands](../cli/build-commands.md).

## Review it

Never sign a transaction you have not read. Three checks, all offline or read-only:

| Check | MCP tool | CLI |
|---|---|---|
| Audit, standards, and UX findings | `review_collection` | `bb check tx.json` |
| Plain-language explanation | — | `bb explain tx.json` |
| Dry run against the chain | `simulate_transaction` | `bb simulate tx.json` |

`review_collection` returns findings with a `verdict` of `pass`, `warn`, or `fail`. Fix anything critical before you sign. See [Analysis Commands](../cli/analysis-commands.md).

## Sign it

Agents build; people sign. Your agent never holds your keys. Every path ends in a bitbadges.io link that opens the transaction in the review-and-sign flow — Preview, Review Items, Transferability, Permissions — with the wallet signature as the last step:

| From | Get the link |
|------|--------------|
| MCP / Claude Code | call `get_review_url` → open `reviewUrl` |
| CLI | `bb preview tx.json --open` (or `bb build … \| bb preview - --open`) |
| SDK agent | `result.reviewUrl` |
| Any LLM, no tools | paste the JSON into `bitbadges.io/mint/local-builder` |

See the full [Builder Tools Reference](builder-tools.md) for all 53 tools, client configuration, and workflow guides.

The links carry the transaction either in the URL fragment (nothing uploaded) or behind a short `prv_` code that expires after an hour. Update transactions open against the existing collection so the site can diff them against on-chain state.

Signing without a browser wallet? `bb deploy --burner` (throwaway funded wallet, create-only) and `bb deploy --with-keyring --exec` (your local chain keyring) both broadcast from the terminal. See [Deploy Commands](../cli/deploy-commands.md) and the [Sign Bridge](../cli/sign-bridge.md).

## Integration Paths

Everything above uses the MCP builder or the CLI. These are the other ways in, once you are past your first token.

| Path | Best For | Install |
|------|----------|---------|
| **CLI & Chain Binary** | Terminal agents, shell scripts, any language | `curl -fsSL https://install.bitbadges.io \| sh` — [guide](../cli/for-ai-agents.md) |
| **BitBadges Builder Tools (MCP)** | Cursor, Claude Desktop, other MCP clients | `npm i -g bitbadges` — [guide](builder-tools.md) |
| **Claude Code Plugin** | Claude Code users — auto-wired MCP + 8 workflow skills (built on top of the CLI) | `/plugin marketplace add BitBadges/bitbadges-plugin` then `/plugin install bitbadges` — [guide](claude-code-plugin.md) |
| **SDK Signing Client** | Full-featured TypeScript bots | `npm i bitbadges` |
| **Direct HTTP** | Lightweight scripts, any language | REST calls to `api.bitbadges.io` |
| **Agent Spending Authorization** | Set daily caps, time windows, and revocation | [guide](agent-spending-authorization.md) |

## Writing a bot instead?

The signing client is for unattended TypeScript services that hold their own key — the opposite of the review-and-sign flow above. Scope what it can spend with [Agent Spending Authorization](agent-spending-authorization.md).

```bash
npm install bitbadges
```

```typescript
import { BitBadgesSigningClient, GenericEvmAdapter, MsgTransferTokens, NETWORK_CONFIGS } from 'bitbadges';

// 1. Create adapter from mnemonic (server-side)
const adapter = await GenericEvmAdapter.fromMnemonic(
  'your twelve word mnemonic phrase here ...',
  NETWORK_CONFIGS['testnet'].evmRpcUrl
);

// 2. Create signing client (testnet)
const client = new BitBadgesSigningClient({
  adapter,
  network: 'testnet'
});

// 3. Get testnet tokens
await fetch('https://api.bitbadges.io/testnet/api/v0/faucet', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ address: client.address })
});

// 4. Broadcast your first transaction
const result = await client.signAndBroadcast([
  MsgTransferTokens.create({
    creator: client.address,
    collectionId: '1',
    transfers: [/* ... */]
  })
]);

console.log('TX Hash:', result.txHash);
```

## Metadata: No Hosting Required

The CLI builders and templates accept `--name`, `--image`, and `--description` (or `--name` + `--description` for approvals — no image) and serialize them into the on-chain `customData` field. The indexer, SDK, and frontend parse `customData` on read and surface the result as the resolved metadata, so an agent can ship a working collection without an IPFS pin or Pinata account. Pass `--uri <pre-hosted-uri>` instead if you would rather host the JSON yourself; URI takes priority when both are populated. See [Collection Configuration › Inline metadata via customData](../../token-standard/learn/collection-setup-fields.md#inline-metadata-via-customdata) for the on-chain shape.

> **`--image` should be a URL, not bytes.** Inline `customData` lives on-chain — you pay gas per byte and blocks have a hard size cap. Pre-host images on IPFS (or any URL host) and pass the URL to `--image`. Inline customData is for the metadata wrapper (name, description, link to image), not the image itself. See [Cost considerations](../../token-standard/learn/collection-setup-fields.md#cost-considerations-keep-images-off-chain).
>
> **Want zero hosting AND an image?** The SDK ships a deterministic SVG placeholder-art generator (`import { generatePlaceholderArt } from 'bitbadges'`) that produces 1-8 KB `data:image/svg+xml;base64,...` URIs you can drop into `--image`. Same seed always produces the same art. Trade-off: the SVG bytes still live on-chain — a 1-8 KB SVG costs an extra ~10-80k gas per write versus a hosted-URL image. Cheap convenience for placeholder-y looks; not the right call for image-heavy or high-frequency-update collections. See [Optional: deterministic SVG placeholder art](../../token-standard/learn/collection-setup-fields.md#optional-deterministic-svg-placeholder-art-zero-hosting-image).

## Network Configuration

| Network | API URL | Node LCD | Cosmos Chain ID | EVM Chain ID | EVM RPC |
|---------|---------|----------|-----------------|--------------|---------|
| **Mainnet** | `https://api.bitbadges.io` | `https://lcd.bitbadges.io` | `bitbadges-1` | 50024 | `https://evm-rpc.bitbadges.io` |
| **Testnet** | `https://api.bitbadges.io/testnet` | `https://lcd-testnet.bitbadges.io` | `bitbadges-2` | 50025 | `https://evm-rpc-testnet.bitbadges.io` |
| **Local** | `http://localhost:3001` | `http://localhost:1317` | `bitbadges-1` | 90123 | `http://localhost:8545` |

Additional endpoints (testnet):
- **RPC:** `https://rpc-testnet.bitbadges.io`
- **EVM RPC:** `https://evm-rpc-testnet.bitbadges.io`
- **WebSocket:** `wss://rpc-testnet.bitbadges.io/websocket`

## Section Contents

| Page | Description |
|------|-------------|
| [Builder Tools Reference](builder-tools.md) | Every MCP tool, client setup, and the build workflow |
| [Claude Code Plugin](claude-code-plugin.md) | Auto-wired MCP + workflow skills for Claude Code |
| [Programmatic Agent](programmatic-agent.md) | Run the builder from your own Node code with your own model key |
| [CLI for AI Agents](../cli/for-ai-agents.md) | The same capabilities from any shell, no MCP client |
| [Testnet Faucet API](testnet-faucet.md) | Get free testnet BADGE tokens for your bot |
| [WebSocket Events](websocket-events.md) | Subscribe to real-time blockchain events |
| [Bot Examples](bot-examples.md) | Copy-paste examples for common bot patterns |
| [E2E: AI Agent with USDC Vault](openclaw-vault-tutorial.md) | Full tutorial: wallet setup, vault rules, withdraw/deposit |

## BB-402: Token-Gated API Access

BB-402 lets any server gate API access behind on-chain token ownership using the standard HTTP 402 status code. Unlike x402 (Coinbase) which only supports per-request USDC payments, BB-402 uses token ownership as a universal primitive -- a soulbound token costing X USDC is a verifiable on-chain receipt (equivalent to x402), but the same protocol also handles subscriptions, tiered access, reputation, blocklists, and compound conditions with `$and`/`$or` logic.

```
Agent --> Server:  GET /api/data
Server --> Agent:  402 { ownershipRequirements, message }
Agent --> Server:  GET /api/data + X-BB-Proof: { address, chain, message, signature }
Server --> Agent:  200 OK (or 403)
```

See the full [BB-402 guide and quickstart](../../token-standard/bb-402/overview.md) in the Token Standard section, or the [complete specification](../../token-standard/bb-402/spec.md).

## Further Reading

- [Signing Client Reference](../bitbadges-blockchain/create-and-broadcast-txs/signing-client.md) - Full signing client documentation
- [API Getting Started](../bitbadges-api/) - REST API reference
- [Testnet Mode](../bitbadges-blockchain/testnet-mode.md) - Testnet environment details
- [BitBadges AI Quickstarter](https://github.com/BitBadges/bitbadges-quickstarter-ai) - GitHub template repo
- [SDK AI Agent Guide](https://github.com/BitBadges/bitbadgesjs/blob/main/packages/bitbadgesjs-sdk/AI_AGENT_GUIDE.md) - SDK-specific AI guide
