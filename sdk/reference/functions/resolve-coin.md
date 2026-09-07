---
description: "Resolve a coin symbol (USDC, BADGE, ATOM, OSMO) to its on-chain denom + metadata. Also accepts raw denoms (ibc/..., ubadge) for pass-through. Uses mainnet…"
---

# Function: resolveCoin()

> **resolveCoin**(`symbolOrDenom`): [`ResolvedCoin`](/sdk/reference/interfaces/resolved-coin)

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/shared.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/shared.ts#L37)

Resolve a coin symbol (USDC, BADGE, ATOM, OSMO) to its on-chain denom + metadata.
Also accepts raw denoms (ibc/..., ubadge) for pass-through.
Uses mainnet registry. If a coin doesn't exist on your target chain, the tx will fail on-chain.

## Parameters

### symbolOrDenom

`string`

## Returns

[`ResolvedCoin`](/sdk/reference/interfaces/resolved-coin)
