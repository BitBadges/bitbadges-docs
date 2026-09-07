---
description: "How x/tokenization tokens reach x/bank, IBC, and other chains. Map of the four mechanisms and when to use each."
---

# IBC and x/bank compatibility

Tokens in `x/tokenization` are not `sdk.Coin` values and cannot be sent over IBC directly. Four mechanisms bridge the gap. This page tells you which one fits your job.

```bash
# The same collection seen three ways (mainnet LCD)
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_balance/21/bb1abc...   # native balance
curl https://lcd.bitbadges.io/cosmos/bank/v1beta1/balances/bb1abc.../by_denom?denom=badges:21:utoken   # wrapped x/bank coin
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/sendmanager/balance/bb1abc.../badgeslp:21:utoken   # alias denom view
```

## The four mechanisms

| Mechanism | Denom it produces | Mints or burns | Configured where | Use it when |
| --- | --- | --- | --- | --- |
| [Alias denoms](alias-denoms.md) | `badgeslp:<collectionId>:<denom>` | No | `aliasPaths` on the collection | A local module (pools, send manager) needs an `sdk.Coin` view of native tokens |
| [Cosmos coin wrapper paths](cosmos-coin-wrapper-paths.md) | `badges:<collectionId>:<denom>` | Yes, a new x/bank denom | `cosmosCoinWrapperPaths` on the collection | Tokens must leave the chain over ICS-20 or sit in any x/bank account |
| [Backed minting](backed-minting.md) | An existing `ibc/...` denom | No, escrows the IBC coin | `invariants.cosmosCoinBackedPath` at creation | Each token must be backed 1:1 by an existing IBC asset (compliant wrappers of ATOM, USDC, and so on) |
| [Transfer tokens hook](transfer-tokens-hook.md) | None | Runs `MsgTransferTokens` | The ICS-20 memo of an inbound transfer | An inbound IBC transfer should mint or move tokens atomically |

Two supporting pages complete the picture:

- [Rate limits](../../chain/modules/ibc-rate-limit.md): the `x/ibc-rate-limit` middleware that caps net flow, unique senders, and per-address volume per channel and denom.
- [Cross-chain queries](../../chain/cross-chain-queries.md): interchain queries that let another chain verify ownership without moving tokens.

## How to choose

Alias denoms and wrapper paths both start from a native collection. The alias is an accounting view and never leaves `x/tokenization` state. The wrapper path burns native tokens and mints a real x/bank coin, which is the only form ICS-20 can carry. Backed minting is the reverse direction: an IBC asset already exists and the collection issues tokens against it. The transfer tokens hook is not a denom mechanism at all. It is a trigger that runs a token transfer when an IBC packet lands.

All four route through `MsgTransferTokens` and obey the collection's approvals. Wrapper and backed operations require prioritized approvals with the matching special-address flag (`allowSpecialWrapping` or `allowBackedMinting`). See [Special address flags](../approval-criteria/special-address-flags.md).

{% hint style="warning" %}
Native `x/tokenization` balances never travel over IBC. Only x/bank coins do. Wrap first, then transfer.
{% endhint %}

## Related

- [Wrap to an IBC denom](../../guides/wrap-to-an-ibc-denom.md)
- [Special address flags](../approval-criteria/special-address-flags.md)
- [Prioritized approvals](../concepts/prioritized-approvals.md)
- [Send manager](../../chain/modules/send-manager.md)
