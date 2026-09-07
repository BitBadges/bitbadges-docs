---
description: "BitBadges is a Cosmos L1 with a native token standard. Start here to install the CLI, run a first query, and find the right tab."
---

# BitBadges documentation

BitBadges is a Cosmos SDK Layer 1 whose `x/tokenization` module is a complete token standard. Collections, balances, approvals, and permissions are chain state, not smart contracts. Transferability rules run on every transfer, swap, and IBC transfer. Balances carry ownership times, so subscriptions, vesting, and expiring credentials need no follow-up transactions. Tokens wrap to `x/bank` denoms for IBC, and EVM contracts reach the module through precompiles.

## Install and run a first query

```bash
curl -fsSL https://install.bitbadges.io | sh
bb settings set apiKey <your-api-key>   # get one at https://bitbadges.io/developer
bb api tokens get-collection 1          # fetch collection 1 from the BitBadges API
bb dev docs                             # browse these docs from the terminal
```

The installer puts the chain binary on your path with the `bb` alias and installs the SDK CLI. Linux, macOS, and Windows (Git Bash or WSL) are supported.

## Where to go

| Tab | Read it when you want to | Start at |
| --- | --- | --- |
| Quickstart | Install, query, and broadcast one transaction in the CLI, TypeScript, the site, or an AI agent | [Quickstart](start/quickstart.md) |
| Guides | Do a task: create a collection, mint, set transferability, gate access, sign users in | [Guides](guides/README.md) |
| Token Standard | Understand the data model, approval criteria, messages, queries, IBC, and EVM | [Token Standard](token-standard/README.md) |
| API | Call the hosted BitBadges API, use Sign In with BitBadges, or run claims | [BitBadges API](api/README.md) |
| SDK & CLI | Use `bitbadges` from TypeScript or drive the chain from the `bb` command line | [SDK](sdk/README.md), [CLI](cli/README.md) |
| Agents | Wire an AI agent through the MCP builder tools, the Claude Code plugin, or the CLI | [Agents](agents/README.md) |

## Surfaces

- No-code: the [Create tab](https://bitbadges.io/create) and the [developer portal](https://bitbadges.io/developer) cover token, claim, and address list creation without an integration.
- CLI: `bb` builds, checks, simulates, previews, and deploys transactions. It also exposes every BitBadges API route as `bb api <group> <route>`.
- TypeScript: `npm install bitbadges` gives you `BitBadgesAPI` for reads and `BitBadgesSigningClient` for transactions.
- Agents: bring your own AI. The same package ships the `bitbadges-builder` MCP server and a Claude Code plugin for Claude Code, Cursor, Codex, or any MCP client. The agent builds; a person reviews and signs in the browser through a handoff link. See [Agent setup](agents/setup.md).

Mainnet is the live network (chain id `bitbadges-1`). Testnet is offline. See [Testnet](token-standard/network/testnet.md) for status.

## Related

- [Why BitBadges](about/README.md)
- [Use cases](about/use-cases.md)
- [Links and resources](about/links.md)
- [FAQ](about/faq.md)
