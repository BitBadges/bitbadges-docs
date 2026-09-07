---
description: "Estimate a token swap through the BitBadges API. Payload, response, Skip Go compatibility, and how to execute the returned messages."
---

# Swaps

`POST /api/v0/swap/estimate` returns the expected output amount and the messages needed to execute a swap. Routing covers native pools (the `x/gamm` module) and Skip Go routes across IBC chains such as Osmosis. The route requires an API key.

## Example

```bash
curl -X POST https://api.bitbadges.io/api/v0/swap/estimate \
  -H "Content-Type: application/json" -H "x-api-key: <key>" \
  -d '{
    "tokenIn": "amount:1000000,denom:ubadge",
    "tokenOutDenom": "uusdc",
    "chainIdsToAddresses": { "bitbadges-1": "bb1abc..." },
    "slippageTolerancePercent": 1
  }'
```

```ts
const res = await BitBadgesApi.estimateSwap({
  tokenIn: 'amount:1000000,denom:ubadge', // or '1000000ubadge'
  tokenOutDenom: 'uusdc',
  chainIdsToAddresses: { 'bitbadges-1': 'bb1abc...' },
  slippageTolerancePercent: 1
});

console.log(res.estimate.tokenOutAmount);
console.log(res.estimate.skipGoMsgs);
// Sign and broadcast the msgs to execute the swap
```

```bash
bb swap estimate ubadge uusdc 1000000 --execute --browser
```

The older path `/api/v0/swaps/estimate` still works as a deprecated alias that forwards to the same handler.

## Payload

```ts
interface iEstimateSwapPayload {
  tokenIn: string;
  tokenInChainId?: string;
  tokenOutDenom: string;
  tokenOutChainId?: string;
  chainIdsToAddresses: Record<string, string>;
  chainIdsToAffiliates?: Record<string, { affiliates: Array<{ address: string; basis_points_fee: string }> }>;
  slippageTolerancePercent: string | number;
  forcefulRecheckCompliance?: boolean;
  isLocalOnly?: boolean;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tokenIn` | string | yes | Token to swap in. Formats: `"amount:1,denom:ubadge"` or `"1ubadge"`. |
| `tokenInChainId` | string | no | Chain ID of the input token. Defaults to `bitbadges-1`. |
| `tokenOutDenom` | string | yes | Denom to receive. |
| `tokenOutChainId` | string | no | Chain ID of the output token. Defaults to `bitbadges-1`. |
| `chainIdsToAddresses` | object | yes | Chain ID to address. Supports `bitbadges-1` (bech32 `bb` address) and `1` (EVM `0x` address). Other chain addresses are derived from these. |
| `chainIdsToAffiliates` | object | no | Chain ID to affiliate fee recipients: `{ [chainId]: { affiliates: [{ address, basis_points_fee }] } }`. |
| `slippageTolerancePercent` | string or number | yes | Slippage tolerance, 0 to 100. |
| `forcefulRecheckCompliance` | boolean | no | Recheck compliance and skip the 5 minute cache. |
| `isLocalOnly` | boolean | no | Only use local pools for the estimate. |

## Response

```ts
interface iEstimateSwapSuccessResponse {
  success: boolean;
  estimate: {
    tokenOutAmount: string;
    tokenInAmount: string;
    skipGoMsgs: SkipGoMessage[];
    assetPath: { denom: string; chainId: string; how: 'genesis' | 'swap' | 'transfer' }[];
    doesSwap: boolean;
    lowLiquidityWarning?: boolean;
    complianceNotPassedWarning?: boolean;
    complianceErrorMessage?: string;
    estimatedTime?: number;
    fallbackAsset?: { denom: string; chainId: string };
    autoRedirectedToWETH?: boolean;
    rerouted?: boolean;
  };
}
```

| Field | Description |
| --- | --- |
| `tokenOutAmount` | Estimated amount received. |
| `tokenInAmount` | Amount swapped in. |
| `skipGoMsgs` | Messages for execution. Each entry is either a `multi_chain_msg` (Cosmos chains) or an `evm_tx` (EVM chains). |
| `assetPath` | The path the asset takes: denom, chain ID, and how it moves (`genesis`, `swap`, `transfer`). |
| `doesSwap` | `true` when a swap occurs, `false` for a pure transfer. |
| `lowLiquidityWarning` | The pool has low liquidity. Execution may fail or slip. |
| `complianceNotPassedWarning` | Compliance checks failed. The BitBadges pool swap is likely to fail. `complianceErrorMessage` has the detail. |
| `estimatedTime` | Estimated seconds to complete, when available. |
| `fallbackAsset` | Asset to fall back to when the swap is not possible. |
| `autoRedirectedToWETH` | The route was redirected to WETH. BitBadges only supports single-transaction operations, bridges return WETH, and the extra unwrap transaction is not handled. |
| `rerouted` | Internal flag: the result differs from the standard estimate. |

## Skip Go compatibility

The API mirrors Skip Go where it can. Full integration is planned, but there are differences:

- Skip does not support BitBadges routing yet, so the Skip API, engines, explorers, and client may not support the full feature set.
- `skipGoMsgs` follow the format of the [Skip API `POST /v2/fungible/msgs`](https://docs.skip.build/go/api-reference/prod/fungible/post-v2fungiblemsgs).
- Only Cosmos swaps are recommended. Chains outside Cosmos such as ETH and SOL are not supported yet.

## Executing from the CLI

For a BitBadges-only route (one native swap on the BitBadges chain with no Skip Go rerouting, EVM transaction, IBC transfer leg, or WETH redirect), the CLI signs and broadcasts without you handling `skipGoMsgs`:

```bash
bb swap estimate ubadge uusdc 1000000 --execute --browser
```

Cross-chain, EVM, and multi-hop routes are returned but not auto-executed. Sign the estimate in your wallet, broadcast the first transaction, then run `bb swap track`. See [CLI swap](../cli/swap.md).

## Related

- [Trade on the DEX](../guides/trade-on-the-dex.md)
- [CLI swap](../cli/swap.md)
- [gamm module](../token-standard/modules/gamm/README.md)
- [API reference](/api-reference)
