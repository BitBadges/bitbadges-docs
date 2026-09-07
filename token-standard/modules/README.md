---
description: "The other Cosmos SDK modules on the BitBadges chain besides x/tokenization: gamm, poolmanager, sendmanager, managersplitter, and the IBC middleware."
---

# Chain modules

`x/tokenization` is the token standard. These modules surround it on the BitBadges chain and are what a DEX integrator, a delegated manager, or a chain developer touches next.

```bash
# Every module's REST surface hangs off the mainnet LCD
curl https://lcd.bitbadges.io/osmosis/gamm/v1beta1/pools?pagination.limit=1
curl https://lcd.bitbadges.io/osmosis/poolmanager/v1beta1/num_pools
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/managersplitter
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/sendmanager/balance/bb1abc.../badgeslp:64:utoken
```

| Module | Path in chain | What it does | Read when |
| --- | --- | --- | --- |
| [x/gamm](gamm/README.md) | `x/gamm` | Balancer and stableswap AMM pools, forked from Osmosis, with native token support through alias denoms | You trade, provide liquidity, or create pools |
| [x/poolmanager](pool-manager.md) | `x/poolmanager` | Pool ID registry, swap routing across pool types, taker fees, estimate queries | You need multi-pool routing or the canonical swap estimate endpoints |
| [x/sendmanager](send-manager.md) | `x/sendmanager` | Routes `sdk.Coins` by denom prefix to x/bank or `x/tokenization`; the send precompile uses it | You move alias denoms with bank-style calls, from Cosmos or Solidity |
| [x/managersplitter](manager-splitter/README.md) | `x/managersplitter` | A proxy manager address whose permissions are split across approved addresses | A collection needs role-based management |
| [x/custom-hooks](../ibc/transfer-tokens-hook.md) | `x/custom-hooks` | IBC memo hooks: `transfer_tokens` and `swap_and_action` | An inbound IBC transfer should mint, transfer, or swap |
| [x/ibc-rate-limit](../ibc/rate-limits.md) | `x/ibc-rate-limit` | Per channel and denom flow caps | You hit a rate limit or draft a governance change |

The chain also ships standard Cosmos SDK modules (bank, staking, gov, authz, feegrant, distribution) and the Cosmos EVM module set. The EVM side is documented under [EVM](../evm/README.md).

## Related

- [Token standard](../README.md)
- [IBC and x/bank compatibility](../ibc/README.md)
- [Integrate the module](../integrate/README.md)
