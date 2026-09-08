---
description: "Install paths, quickstart, and the review-and-sign handoff for AI agents and bots that build on BitBadges."
---

# Agents

This tab is for AI agents, bots, and the people wiring them: how to install, which surface to use, and how a built transaction reaches a human wallet for signature.

## Install

```bash
curl -fsSL https://install.bitbadges.io | sh
export BITBADGES_API_KEY=0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef   # your key from bitbadges.io/developer
bb settings set apiKey "$BITBADGES_API_KEY"
bb doctor
```

This installs the chain binary and the SDK CLI as `bb`. Every path below starts from this install. Get an API key at [bitbadges.io/developer](https://bitbadges.io/developer); the example key above is fake. Per-harness MCP configs (Claude Desktop, Cursor, Windsurf, Codex, VS Code, Zed, no-tools LLMs): [Set Up Your AI](setup.md).

## What to Say

Once a harness is wired, these prompts map onto the MCP builder tools and the skills. Copy one and change the names.

Create a token:

```text
Create an NFT collection called Demo NFTs with 100 tokens, manager bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d, fully immutable after creation.
```

```text
Build a fungible token called Demo Coin with 1,000,000 units of token ID 1 and a public mint of up to 10 per address.
```

```text
Make a USDC-backed smart token with symbol vUSDC and a daily withdraw limit of 1000.
```

Distribute:

```text
Mint 100 Demo Coin to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue and bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf in the same transaction that creates the collection.
```

```text
Create a code-gated claim for collection 1 with 50 codes, one use per address.
```

Gate:

```text
Check whether bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue owns at least 1 of token ID 1 in collection 1.
```

```text
Build a 30-day subscription called Demo Membership at 10 USDC per interval paid to bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d.
```

Trade:

```text
Add a tradable listing approval to collection 1 so anyone can buy token ID 5 for 25 USDC.
```

```text
Give my agent wallet bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr a daily budget of 100 units of collection 2 that it can send to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue.
```

Inspect:

```text
Explain collection 1 for an auditor: who can change what, and how do tokens move.
```

```text
Review this transaction file for problems before I sign it.
```

Every build ends the same way: the agent calls `get_review_url` (or runs `bb preview`) and hands you a bitbadges.io link where you review and sign with your own wallet; the agent never holds the key.

## Paths

| Path | Best for | Install | Reference |
| --- | --- | --- | --- |
| CLI and chain binary (start here) | Terminal agents, shell scripts, any language | `curl -fsSL https://install.bitbadges.io \| sh` | [CLI](../cli/README.md) |
| MCP builder tools | Cursor, Claude Desktop, Codex, any MCP client | `npm i -g bitbadges` | [MCP Builder Tools](mcp-tools.md) |
| Claude Code plugin | Claude Code users: auto-wired MCP plus 8 workflow skills | `/plugin marketplace add BitBadges/bitbadges-plugin` then `/plugin install bitbadges` | [Claude Code Plugin](claude-code-plugin.md) |
| Programmatic agent | Node processes that build from a prompt with your own Anthropic or OpenAI key | `npm i bitbadges @anthropic-ai/sdk` | [Programmatic Agent](programmatic-agent.md) |
| SDK signing client | Full TypeScript bots that sign and broadcast | `npm i bitbadges` | [Signing Client](../sdk/transactions/signing-client.md) |
| Direct HTTP | Lightweight scripts in any language | REST calls to `api.bitbadges.io` | [API](../api/README.md) |
| Spending authorization | Daily caps, time windows, and revocation for a delegate wallet | on-chain approval | [Spending Authorization](spending-authorization.md) |

Bring your own AI. The MCP server, the CLI, and the plugin are model-agnostic; the harness you already run provides the model. The site runs no LLM of its own and never holds your model key: it receives what you built, reviews it, and signs it.

```bash
# Step 1: install the chain binary and CLI (always)
curl -fsSL https://install.bitbadges.io | sh
bb settings set apiKey "$BITBADGES_API_KEY"

# Step 2: optionally add a harness convenience
# Claude Code:
#   /plugin marketplace add BitBadges/bitbadges-plugin
#   /plugin install bitbadges
# Cursor, Claude Desktop, other MCP clients:
#   claude mcp add bitbadges-builder -- npx -y -p bitbadges bitbadges-builder
```

## Quickstart (TypeScript)

```bash
npm install bitbadges
```

```ts
import { BitBadgesSigningClient, GenericEvmAdapter, MsgTransferTokens, NETWORK_CONFIGS } from 'bitbadges';

// 1. Create an adapter from a mnemonic (server-side only; never commit the phrase)
const adapter = await GenericEvmAdapter.fromMnemonic(process.env.MNEMONIC!, NETWORK_CONFIGS['mainnet'].evmRpcUrl);

// 2. Create a signing client (mainnet)
const client = new BitBadgesSigningClient({
  adapter,
  network: 'mainnet'
});

// 3. Fund client.address with BADGE for fees before the first broadcast

// 4. Broadcast your first transaction: send 5 units of Demo Coin (collection 2, token ID 1) to bob
const result = await client.signAndBroadcast([
  new MsgTransferTokens({
    creator: client.address,
    collectionId: '2',
    transfers: [
      {
        from: client.address,
        toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'],
        balances: [
          {
            amount: '5',
            tokenIds: [{ start: '1', end: '1' }],
            ownershipTimes: [{ start: '1', end: '18446744073709551615' }]
          }
        ]
      }
    ]
  })
]);

console.log('TX Hash:', result.txHash, 'success:', result.success);
```

Examples target mainnet because testnet is offline. The faucet API shape and the testnet status live on [Testnet](../chain/testnet.md).

## Agent Workflow with the CLI

The CLI returns JSON on every command, accepts stdin (`-`), file paths (`@file.json`), and inline JSON, and needs no build step.

```bash
# Discover the command tree as JSON (for LLM tool discovery)
bb --help-json
bb api --help
bb api tokens --help

# Query
bb api tokens get-collection 1
bb api tokens get-balance-by-address 1 bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue
bb api accounts get-account --body '{"address":"bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"}'
bb api --search owners

# Review and audit
bb check tx.json
bb explain tx.json
bb check 42
bb explain 42

# Browse docs and skills
bb dev docs all
bb dev docs learn/approvals
bb dev skills
bb dev skills smart-token

# Sign and broadcast with the chain binary
bb keys add agent-wallet
bb tx tokenization create-collection ./collection.json \
  --from agent-wallet --chain-id bitbadges-1 \
  --node https://rpc.bitbadges.io:443 \
  --gas auto --gas-adjustment 1.5 --gas-prices 10ubadge

# Or broadcast a signed tx through the API
bb api tx broadcast-tx --body @signed-tx.json
```

`bb api tokens get-collection 1` returns the standard envelope (mainnet output, trimmed to the first fields):

```json
{
  "ok": true,
  "data": {
    "collection": {
      "collectionId": "1",
      "collectionMetadata": {
        "metadata": {
          "name": "BitBadges Examples",
          "description": "Badges are generic and can be created for many different purposes and use cases. This collection highlights some of our favorites.",
          "image": "ipfs://QmNytJNN44stkMndshtdfcCW2mzaCm6A23maiKaQvUqoj8"
        },
        "uri": "ipfs://QmSTZZPgYF58gS9bM7q3nWVegUJH51WBdT91fz7q94qDwS",
        "customData": ""
      }
    }
  },
  "warnings": [],
  "error": null
}
```

`--dry-run` simulates any API call without side effects.

### Which Surface Does What

| Task | Surface |
| --- | --- |
| Query data, browse docs, review transactions | CLI (`bb`) |
| Build collections with guided workflows | MCP builder tools |
| Sign and broadcast | Chain binary (`bb tx`) or SDK signing client |
| Key management | Chain binary (`bb keys`) |

### API Key Versus Session

The API key is required on every BitBadges API call and carries the app scope. Anything that mutates an account, manages keys, or publishes signed data also needs a user scope: a session cookie from `bb auth login`. The CLI is wallet-agnostic. Pair it with `bb sign-arbitrary` for headless Cosmos signing, or paste in a signature from any external wallet.

```bash
# 1. Fetch a challenge (saves the nonce cookie locally for step 3)
MSG=$(bb auth challenge --address $(bb keys show agent-wallet -a) | jq -r .data.message)

# 2. Sign offline with the chain binary
SIG_JSON=$(bb sign-arbitrary agent-wallet "$MSG")

# 3. Post the signature (stores the session under ~/.bitbadges/auth.json)
bb auth login \
  --address    "$(echo "$SIG_JSON" | jq -r .address)" \
  --signature  "$(echo "$SIG_JSON" | jq -r .signature)" \
  --public-key "$(echo "$SIG_JSON" | jq -r .pubKey)" \
  --message    "$MSG"

# 4. Add --with-session to Full Access requests
bb api accounts get-account --body '{"address":"bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr"}' --with-session
```

Sessions are multi-account and multi-network. Full reference: [Auth](../cli/auth.md).

### Deprecation Banner

Legacy forms (`bb cli <subcmd>`, `bitbadges-cli sign-with-browser`, `bitbadges-cli gen-tx-payload`, and the per-utility top-level names that moved under `bb account`, `bb dev`, and `bb settings`) print a one-line deprecation banner to stderr during the migration window. Stdout (the JSON envelope) is unchanged. Set `BB_QUIET=1` in the agent's environment if banner noise breaks line-based stderr parsers; the same flag suppresses every command's auto-review commentary. The release after the migration window hard-fails the old forms, so update prompts and scripts ahead of the cutover.

### Example: Automated Balance Check and Mint

```bash
#!/bin/bash
# Check bob's Demo Coin balance and mint when it drops below a threshold

COLLECTION_ID=2
ADDRESS="bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"
THRESHOLD=10

BALANCE=$(bb api tokens get-balance-by-address "$COLLECTION_ID" "$ADDRESS" --condensed)

# bb api emits the envelope; the body lives at .data
AMOUNT=$(echo "$BALANCE" | jq -r '.data.balances[0].amount // "0"')

if [ "$AMOUNT" -lt "$THRESHOLD" ]; then
  echo "Balance $AMOUNT below threshold $THRESHOLD, minting"

  bb check ./mint-tx.json

  bb tx tokenization transfer-tokens ./mint-tx.json \
    --from agent-wallet --chain-id bitbadges-1 \
    --node https://rpc.bitbadges.io:443 \
    --gas auto --gas-prices 10ubadge
fi
```

## Hand Off to the Browser to Sign

In the browser-handoff workflow, agents build and people sign. The link opens the review flow (Preview, Review Items, Transferability, Permissions, then wallet signature). Separately, a bot configured with a signing key can use the SDK or CLI to broadcast; see [Spending Authorization](spending-authorization.md) for bounded delegation.

| From | Get the link |
| --- | --- |
| MCP or Claude Code | call `get_review_url` and open `reviewUrl` (see [MCP Builder Tools](mcp-tools.md#hand-off-to-the-browser)) |
| CLI | `bb preview tx.json --open` (or `bb build vault --backing-coin USDC --name "Demo Vault" \| bb preview - --open`) |
| Programmatic agent | `result.reviewUrl` |
| Any LLM, no tools | paste the JSON into `bitbadges.io/mint/local-builder` |

Two carriers exist. `bb preview` and `get_review_url` upload the transaction to the open preview endpoint and return a short `?code=prv_...` link that expires in 1 hour. The programmatic agent returns a `#tx=<base64url JSON>` link that carries the whole transaction in the URL hash, so nothing is uploaded. Update transactions (a non-zero `collectionId`) route to `/update/local-builder/:id` so the site diffs against on-chain state. Details: [Analyze](../cli/analyze.md) and [Deploy](../cli/deploy.md).

## Metadata Without Hosting

The CLI builders and templates accept `--name`, `--image`, and `--description` (or `--name` plus `--description` for approvals, which have no image) and serialize them into the on-chain `customData` field. The BitBadges API, the SDK, and the site parse `customData` on read and surface it as the resolved metadata, so an agent can ship a working collection without an IPFS pin or a Pinata account. Pass `--uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json` (a file you host) instead to host the JSON yourself. The URI takes priority when both are set. On-chain shape: [Collections](../token-standard/concepts/collections.md).

{% hint style="warning" %}
`--image` should be a URL, not bytes. Inline `customData` lives on-chain: you pay gas per byte and blocks have a hard size cap. Pre-host images on IPFS or any URL host and pass the URL to `--image`. Inline `customData` is for the metadata wrapper (name, description, link to image), not the image itself.
{% endhint %}

For zero hosting and an image, the SDK ships a deterministic SVG placeholder-art generator (`import { generatePlaceholderArt } from 'bitbadges'`). It produces 1-8 KB `data:image/svg+xml;base64,...` URIs you can pass to `--image`. The same seed always produces the same art. The SVG bytes still live on-chain, so a 1-8 KB SVG costs about 10-80k extra gas per write versus a hosted URL. Use it for placeholder looks, not for image-heavy or high-frequency-update collections.

## Network Configuration

| Network | API URL | Node LCD | Cosmos chain ID | EVM chain ID | EVM RPC |
| --- | --- | --- | --- | --- | --- |
| mainnet | `https://api.bitbadges.io` | `https://lcd.bitbadges.io` | `bitbadges-1` | 50024 | `https://evm-rpc.bitbadges.io` |
| testnet (offline) | `https://api.bitbadges.io/testnet` | `https://lcd-testnet.bitbadges.io` | `bitbadges-2` | 50025 | `https://evm-rpc-testnet.bitbadges.io` |
| local | `http://localhost:3001` | `http://localhost:1317` | `bitbadges-1` | 90123 | `http://localhost:8545` |

Testnet endpoints when it returns: RPC `https://rpc-testnet.bitbadges.io`, WebSocket `wss://rpc-testnet.bitbadges.io/websocket`. Status: [Testnet](../chain/testnet.md). Full endpoint table: [Network](../chain/README.md).

## Token-Gated API Access (BB-402)

BB-402 lets any server gate API access behind on-chain token ownership with the standard HTTP 402 status code. BB-402 uses token ownership as the primitive: a soulbound token that costs X USDC is a verifiable on-chain receipt, and the same protocol handles subscriptions, tiered access, reputation, blocklists, and compound conditions with `$and` / `$or` logic.

```text
Agent --> Server:  GET /api/data
Server --> Agent:  402 { ownershipRequirements, message }
Agent --> Server:  GET /api/data + X-BB-Proof: { address, chain, message, signature }
Server --> Agent:  200 OK (or 403)
```

Guide: [Gate access](../guides/gate-access.md). Spec: [BB-402](../token-standard/bb-402/README.md).

## In This Tab

| Page | Read it when |
| --- | --- |
| [Set Up Your AI](setup.md) | You want the exact MCP config for your harness |
| [MCP Builder Tools](mcp-tools.md) | You run an MCP client and want the full tool list, client configs, and workflows |
| [Claude Code Plugin](claude-code-plugin.md) | You use Claude Code and want the auto-wired MCP plus workflow skills |
| [Programmatic Agent](programmatic-agent.md) | You build from prompts in Node with your own Anthropic or OpenAI key |
| [Spending Authorization](spending-authorization.md) | You give an agent a delegate wallet with on-chain caps and revocation |
| [Bot Examples](bot-examples.md) | You want copy-paste patterns: mint, gate, react to events |
| [Reading the Docs](reading-the-docs.md) | Your agent needs to fetch documentation by URL, tool, or CLI |
| [Skills](skills/README.md) | You want the per-token-type build instructions the builder ships with |

## Related

- [Claims API](../api/claims/endpoints.md) for automated minting through claims
- [WebSocket Events](../chain/websocket-events.md)
- [BitBadges AI Quickstarter](https://github.com/BitBadges/bitbadges-quickstarter-ai) (GitHub template repo)
- [SDK AI agent guide](https://github.com/BitBadges/bitbadgesjs/blob/main/packages/bitbadgesjs-sdk/AI_AGENT_GUIDE.md)
