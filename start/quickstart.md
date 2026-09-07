---
description: "Install BitBadges, run a first query, and broadcast a first transaction in the CLI, TypeScript, the no-code site, or an AI agent."
---

# Quickstart

At the end of this page you have the `bb` CLI installed, an API key configured, a collection fetched, and one transaction signed and broadcast on mainnet. Pick the surface that matches your work: CLI, TypeScript, the no-code site, or an AI agent.

## 1. Install the CLI

```bash
curl -fsSL https://install.bitbadges.io | sh
```

The installer detects your OS and architecture and installs two things:

1. `bitbadgeschaind`, the chain binary, into `/usr/local/bin/` with the `bb` symlink. `bb` is the entry point for everything on this site.
2. `bitbadges-cli`, the SDK CLI, through bun or npm (whichever is on your path). It is reachable as `bb <command>`.

| Platform | Architecture |
| --- | --- |
| Linux | x86_64 (amd64), ARM64 (aarch64) |
| macOS | Intel (amd64), Apple Silicon (arm64) |
| Windows | x86_64 through Git Bash, MSYS2, or WSL |

Installer options:

```bash
curl -fsSL https://install.bitbadges.io | sh -s -- --version v35              # a specific release
curl -fsSL https://install.bitbadges.io | sh -s -- --install-dir ~/.local/bin  # custom directory
curl -fsSL https://install.bitbadges.io | sh -s -- --no-sudo                   # never use sudo
```

The `--testnet` flag installs the testnet binary. Testnet is offline, so use the mainnet default. See [Testnet](../chain/testnet.md).

SDK CLI only (API access, review tools, docs, no chain binary):

```bash
npm install -g bitbadges   # or: bun install -g bitbadges
bitbadges-cli --help       # every `bb <command>` on this site also works as `bitbadges-cli <command>`
```

Chain binary only, from source (Go 1.24+), or from [GitHub Releases](https://github.com/BitBadges/bitbadgeschain/releases):

```bash
git clone https://github.com/BitBadges/bitbadgeschain.git
cd bitbadgeschain
make build-mainnet-linux/amd64   # or your platform
```

Verify:

```bash
bb version   # chain binary
bb doctor    # SDK CLI health and API connectivity
```

## 2. Set an API Key

Get a key from the [developer portal](https://bitbadges.io/developer), then:

```bash
bb settings set apiKey "$BITBADGES_API_KEY"   # key from https://bitbadges.io/developer
```

`BITBADGES_API_KEY` in the environment also works. Config lives in `~/.bitbadges/config.json`. See [CLI](../cli/README.md) for every settings key, environment variable, and the resolution order.

## 3. First Query

```bash
bb api tokens get-collection 1
```

`bb api` exposes every BitBadges API route as `bb api <group> <route>`. `bb api --help` lists the groups. `bb dev docs` prints these docs in the terminal.

## 4. First Transaction

Build a message, then hand it to your browser wallet to sign. The agent or script builds; a person signs.

```bash
bb build send --from bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 1 --denom BADGE \
  | bb deploy - --browser
```

`bb build <type>` prints ready-to-sign JSON. `bb deploy --browser` opens the sign page on bitbadges.io and waits for your wallet (Keplr, MetaMask, and others). Two useful steps in between:

```bash
bb build send --from bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 1 --denom BADGE > tx.json
bb check tx.json      # validate the message shape
bb simulate tx.json   # expected gas and balance changes, nothing broadcast
bb preview tx.json    # shareable bitbadges.io preview URL; add --open to jump to review and sign
bb deploy tx.json --browser
```

For a BitBadges token transfer instead of a bank send, use `bb build transfer --yes --collection-id 1 --from bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --token-ids 1 --amount 1`. Builders exist for vaults, subscriptions, bounties, auctions, smart tokens, listings, and more. See [Build](../cli/build.md) and [Deploy](../cli/deploy.md).

## TypeScript Path

```bash
npm install bitbadges
```

Read a collection with `BitBadgesAPI`. No wallet is needed.

```ts
import { BitBadgesAPI, BigIntify } from 'bitbadges';

const api = new BitBadgesAPI({
  convertFunction: BigIntify,
  apiKey: process.env.BITBADGES_API_KEY // get one at bitbadges.io/developer
});

const { collection, metadata } = await api.getCollection('1');
console.log(collection.collectionId, metadata.name);
```

Sign and broadcast with `BitBadgesSigningClient`. Server-side, create the adapter from a mnemonic.

```ts
import { BitBadgesSigningClient, GenericEvmAdapter, MsgTransferTokens, NETWORK_CONFIGS } from 'bitbadges';

// 1. Adapter from a mnemonic (server-side only)
const adapter = await GenericEvmAdapter.fromMnemonic(
  process.env.MNEMONIC!,
  NETWORK_CONFIGS['mainnet'].evmRpcUrl
);

// 2. Signing client (mainnet is the default network)
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

// 3. Broadcast
const result = await client.signAndBroadcast([
  new MsgTransferTokens({
    creator: client.address,
    collectionId: '1',
    transfers: [
      {
        from: client.address,
        toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'],
        balances: [
          {
            amount: '1',
            tokenIds: [{ start: '1', end: '1' }],
            ownershipTimes: [{ start: '1', end: '18446744073709551615' }] // forever
          }
        ],
        prioritizedApprovals: [],
        onlyCheckPrioritizedCollectionApprovals: false,
        onlyCheckPrioritizedIncomingApprovals: false,
        onlyCheckPrioritizedOutgoingApprovals: false
      }
    ]
  })
]);

if (result.success) console.log('TX Hash:', result.txHash);
else console.error('Failed:', result.error);
```

In the browser, replace step 1 with a wallet adapter: `GenericCosmosAdapter.fromKeplr('bitbadges-1')` for Keplr, or `GenericEvmAdapter.fromBrowserWallet({ expectedChainId: NETWORK_CONFIGS['mainnet'].evmChainId })` for MetaMask and other EVM wallets. The same user gets a different address on each path, so pick one per app. The [React and Next.js quickstart](../sdk/react-quickstart.md) walks through install, connect, query, and sign in under 10 minutes.

## No-Code Path

The [Create tab](https://bitbadges.io/create) and the [developer portal](https://bitbadges.io/developer) create tokens, claims, and address lists with no integration. Most setup and management happens there. Explore the claim tester and the creation forms first; the interface answers many questions faster than prose.

## AI Agent Path

Bring your own AI. Use Claude Code, Cursor, Codex, or any MCP client you already have. Install the CLI as in step 1, then add the MCP builder tools or the Claude Code plugin. The CLI is the base layer; the rest are conveniences on top of it. Full setup per client: [Agent setup](../agents/setup.md).

Claude Code plugin (auto-wired MCP plus workflow skills):

```bash
/plugin marketplace add BitBadges/bitbadges-plugin
/plugin install bitbadges
```

Claude Code without the plugin:

```bash
claude mcp add bitbadges-builder -- npx -y -p bitbadges bitbadges-builder
```

Cursor, Claude Desktop, Codex, or any other MCP client, in its MCP config:

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

The server reads `BITBADGES_API_KEY` from its environment. Add an `env` block with that key to the entry above, or export it in the shell that launches the client.

{% hint style="info" %}
**Ask your agent.** With the MCP builder tools installed, paste one of these:

```text
Show me collection 1 and explain its mint approval.
```

```text
Build a transfer of token 1 in collection 1 from my address to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue, validate it, and give me the review link.
```
{% endhint %}

The agent builds the transaction. A person reviews and signs it in the browser through a handoff link. Get the link one of three ways:

| From | Get the link |
| --- | --- |
| CLI | `bb preview tx.json --open` (or `bb build ... \| bb preview - --open`) |
| MCP client | call `get_review_url` and open `reviewUrl` |
| Any LLM, no tools | paste the transaction JSON at [bitbadges.io/mint/local-builder](https://bitbadges.io/mint/local-builder) |

See [Agents](../agents/README.md) for the paths table, the review-and-sign handoff, and the MCP builder tools.

## Networks

| Network | API | Node LCD | Cosmos chain id | EVM chain id | EVM RPC |
| --- | --- | --- | --- | --- | --- |
| mainnet | `https://api.bitbadges.io` | `https://lcd.bitbadges.io` | `bitbadges-1` | 50024 | `https://evm-rpc.bitbadges.io` |
| local | `http://localhost:3001` | `http://localhost:1317` | `bitbadges-1` | 90123 | `http://localhost:8545` |

Testnet (`bitbadges-2`, EVM 50025) is offline. The SDK throws on `network: 'testnet'`. Mainnet runs as a chaosnet: gas fees can be zero while activity is low, so test there with low-value assets. See [Testnet](../chain/testnet.md) and [Network](../chain/README.md).

Starting with v35, transactions require fees of at least `10ubadge` per unit of gas. Fund the signing account with BADGE before broadcasting. With the updated CLI, burner `--fee 0` means automatic fee estimation; it does not produce a zero-fee transaction. If you need BADGE, use the faucet when available or ask in the [BitBadges Discord](https://discord.com/invite/TJMaEd9bar).

## Resources for AI-Assisted Development

| Resource | Link |
| --- | --- |
| SDK and MCP builder tools | `npm install bitbadges`, [MCP tools](../agents/mcp-tools.md) |
| AI quickstarter repo | [github.com/BitBadges/bitbadges-quickstarter-ai](https://github.com/BitBadges/bitbadges-quickstarter-ai) |
| API reference | [/api-reference](/api-reference) |
| Proto definitions | [Proto reference](../chain/proto/README.md) |
| Docs as text | [Reading the Docs](../agents/reading-the-docs.md) (`llms.txt`, `for-llms.txt`, `bb dev docs`) |
| SDK type reference | [SDK reference](../sdk/reference/README.md) |

## Next Steps

- [Create a Collection](../guides/create-a-collection.md)
- [Token Standard concepts](../token-standard/concepts/README.md)
- [BitBadges API](../api/README.md)
- [CLI](../cli/README.md)
