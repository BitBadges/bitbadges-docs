---
description: "The x/gamm AMM module, forked from Osmosis. How pools hold native tokens through badgeslp alias denoms and why pool trades still obey collection approvals."
---

# x/gamm

`x/gamm` (Generalized Automated Market Maker) is the DEX module on the BitBadges chain. It is a fork of Osmosis `x/gamm` with changes that let liquidity pools hold `x/tokenization` tokens and enforce each collection's transferability rules on every pool operation. Read this page before the [messages](messages.md) and [queries](queries.md) references. For a task-shaped walkthrough see [Trade on the DEX](../../../guides/trade-on-the-dex.md).

```bash
# Pool 1 on mainnet: a native token (alias denom) paired with BADGE
curl https://lcd.bitbadges.io/osmosis/gamm/v1beta1/pools/1
```

```json
{
  "pool": {
    "@type": "/gamm.poolmodels.balancer.Pool",
    "address": "bb19e2mf7cywkv7zaug6nk5f87d07fxrdgrladvymh2gwv5crvm3vnsy5m66z",
    "id": "1",
    "pool_params": { "swap_fee": "0.003000000000000000", "exit_fee": "0.000000000000000000" },
    "total_shares": { "denom": "gamm/pool/1", "amount": "100000000000000000000" },
    "pool_assets": [
      { "token": { "denom": "badgeslp:64:utoken", "amount": "800" }, "weight": "1073741824" },
      { "token": { "denom": "ubadge", "amount": "12523362993" }, "weight": "1073741824" }
    ],
    "total_weight": "2147483648"
  }
}
```

## Concepts

An AMM prices trades with a formula over pool reserves instead of an orderbook. A liquidity pool holds a set of assets and issues LP shares (`gamm/pool/<id>`) to depositors. Each pool has:

- Pool assets: the coins it holds, with weights for balancer pools.
- Pool shares: LP tokens that represent ownership of the pool.
- Swap fee: charged on each trade.
- Exit fee: charged when exiting the pool.

Pool types: balancer pools (configurable weights) are the primary type. The stableswap pool model is also compiled in (`MsgCreateStableswapPool`, `MsgStableSwapAdjustScalingFactors`). Pool creation can be disabled per collection with the `disablePoolCreation` invariant.

## Differences from Osmosis

Interface changes:

- Removed `smoothWeightChangeParams` and other unused parameters.
- Updated type definitions to fit the BitBadges codebase.
- Removed governance proposal handling and the future pool governor.
- Removed pool creation fee requirements.

Native token integration. A pool asset can be a native token expressed as an [alias denom](../../ibc/alias-denoms.md), `badgeslp:<collectionId>:<denom>`. The pool treats it as a "ghost denom": there is no mint or burn behind the scenes, and the coin is really backed by core `x/tokenization` balances. The collection's `aliasPaths` (`conversion.sideB`) define the rate between one alias unit and `Balances[]`.

```text
Token: badgeslp:21:utoken
  Collection ID: 21
  Base denom: utoken
  Alias path conversion: [{ amount: 1n, tokenIds: [{ start: 1n, end: 1n }], ownershipTimes: UintRangeArray.FullRanges() }]

1 badgeslp:21:utoken = [{ amount: 1n, tokenIds: [{ start: 1n, end: 1n }], ownershipTimes: UintRangeArray.FullRanges() }]
2 badgeslp:21:utoken = [{ amount: 2n, tokenIds: [{ start: 1n, end: 1n }], ownershipTimes: UintRangeArray.FullRanges() }]
```

The conversion happens before and after each swap and on every join or exit that touches a native asset, so existing pool code works unchanged.

## Transferability and compliance

A pool operation that moves a native token is a `MsgTransferTokens` under the hood. It must satisfy the collection's approvals at every level (collection, outgoing, incoming). The transfer is treated as initiated by the user and approved by the pool address.

That means the approval system gates the DEX:

- User-gated pools: restrict who may join, exit, or swap.
- Rate limiting: daily or weekly caps on pool exits.
- KYC or AML: require verification before pool participation.
- Geographic or address-based restrictions.
- Time windows: allow pool operations only at certain times.
- Any other criteria the approval system can express.

See [Approval criteria](../../approval-criteria/README.md) and [Compliance zones](../../concepts/compliance-zones.md).

## Reference

- [Messages](messages.md): all 12 `Msg` types with fields and examples.
- [Queries](queries.md): all 16 gRPC and LCD queries.
- [gamm precompile](../../evm/gamm-precompile/README.md): the same operations from Solidity at `0x...1002`.
- Proto definitions: `proto/gamm/` in [bitbadgeschain](https://github.com/bitbadges/bitbadgeschain/tree/master/proto/gamm).

## Related

- [Trade on the DEX](../../../guides/trade-on-the-dex.md)
- [Alias denoms](../../ibc/alias-denoms.md)
- [x/poolmanager](../pool-manager.md)
- [Swaps in the API](../../../api/swaps.md)
