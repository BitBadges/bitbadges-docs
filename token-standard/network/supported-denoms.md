---
description: "The x/tokenization allowed_denoms list on mainnet, the SDK coin registry, and the canonical USDC (via Injective) versus legacy USDC.n (via Noble) policy."
---

# Supported denoms

`x/tokenization` keeps an allowlist of denoms that approval criteria (`coinTransfers`, backed paths, pricing) may reference. Governance updates it through `MsgUpdateParams`. The live list is the source of truth; the SDK's `MAINNET_COINS_REGISTRY` mirrors it with symbols and decimals.

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/params
```

```json
{
  "params": {
    "allowed_denoms": [
      "ubadge",
      "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
      "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701",
      "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      "badges:49:chaosnet",
      "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"
    ],
    "affiliate_percentage": "0"
  }
}
```

## Allowlist (mainnet, 2026-09-06)

| Symbol | Denom | Decimals | Route | Status |
| --- | --- | --- | --- | --- |
| `BADGE` | `ubadge` | 9 | native | canonical |
| `USDC` | `ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8` | 6 | `transfer/channel-40/erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a` (Injective) | canonical, use for everything new |
| `USDC.n` | `ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349` | 6 | `transfer/channel-2/uusdc` (Noble) | legacy, deprecated for new use |
| `ATOM` | `ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701` | 6 | Cosmos Hub, `channel-3` | supported |
| `OSMO` | `ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518` | 6 | Osmosis, `channel-0` | supported |
| `CHAOS` | `badges:49:chaosnet` | 9 | wrapped collection 49 | supported, worthless test asset |

Any other `ibc/` denom that arrives (for example Osmosis's alloyed `allUSDC` or a bridged voucher of it) is unregistered: it is not allowlisted, carries no rate limits, and cannot back a collection.

## The two USDC routes

An IBC denom is the hash of the token's full transfer path, so the same asset arriving by two routes has two denoms. Treat them as separate balances; they never aggregate.

Canonical `USDC` is Circle's native USDC on Injective (erc20 contract `0xa00C59fF5a080D2b954d0c75e46E22a0c371235a`, CCTP-enabled), sent one IBC hop from Injective over `channel-40`. It is not a Noble voucher forwarded through Injective. The erc20 address in the trace is checksummed and the denom hash is case-sensitive. Use it for pricing, payment requests, subscriptions, prediction markets, pool creation, and backed collections. From `bitbadges@0.43.0`, the bare symbol `USDC` (in the SDK registry, in `bb --denom USDC`, in `"denom": "USDC"` JSON) resolves to `ibc/E1116484...`.

{% hint style="info" %}
The canonical route is proven and its allowlisting shipped with governance proposal 45, but circulating supply is still small. Skip Go indexes the denom on `bitbadges-1` (labeled `USDC.inj` in Skip's data, `USDC` in the BitBadges app) and can route native Injective USDC to BitBadges as a direct transfer. Routes that start from Noble or Ethereum USDC wait on Skip swap-venue coverage and pool liquidity; until then, get to native USDC on Injective first (CCTP or a swap there).
{% endhint %}

`USDC.n` is the original Noble-direct denom, kept only for existing balances and collections. The `.n` suffix is Skip Go's ecosystem-wide symbol for the Noble voucher; earlier drafts spelled it `USDC.noble`, and the CLI, SDK builders, and MCP builder tools still accept `USDC.noble` as typed input (output is always `USDC.n`).

- Existing balances stay usable and spendable, priced at $1, and Skip-supported so holders can swap out.
- `channel-2` stays open; no decommissioning is planned.
- The 16 collections with backed paths on it keep working. A backed path's escrow address derives from the denom string, so those collections cannot be repointed. That is also why a new backed collection on `USDC.n` is harmful: it would be stuck there. New backed collections use canonical `USDC`.
- Do not use it for anything new.

## SDK registry

`MAINNET_COINS_REGISTRY` in `bitbadges` (`src/common/constants.ts`) carries the same six entries with `label`, `symbol`, `decimals`, `baseDenom`, `image`, `skipGoSupported`, and, from `0.43.0`, `deprecated` and `deprecationNote` on `USDC.n`.

```ts
import { MAINNET_COINS_REGISTRY } from 'bitbadges';

const usdc = MAINNET_COINS_REGISTRY['ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8'];
// { label: 'USDC', symbol: 'USDC', decimals: '6', baseDenom: 'ibc/E1116484...', skipGoSupported: true, image: '...' }

const legacy = MAINNET_COINS_REGISTRY['ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349'];
// { label: 'USDC.n', symbol: 'USDC.n', decimals: '6', deprecated: true, deprecationNote: 'Legacy Noble-routed USDC. ...' }
```

`CHAOS` and `BADGE` use 9 decimals; the three IBC stablecoins and ATOM and OSMO use 6. `CHAOS` is not Skip-supported. Images point at the Cosmos chain registry.

## Related

- [Network](README.md)
- [Backed minting](../ibc/backed-minting.md)
- [Coin transfers](../approval-criteria/coin-transfers.md)
- [IBC rate limits](../ibc/rate-limits.md)
