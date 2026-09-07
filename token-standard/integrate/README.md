---
description: "For Cosmos SDK chain developers who embed x/tokenization in their own app. What the module needs from app.go and where each integration pattern lives."
---

# Integrate the module

This section is for teams building their own Cosmos SDK chain with `x/tokenization` compiled in. It is not needed to build on the BitBadges chain itself; for that, start at [Token standard](../README.md). Each page here is a pattern you wire in `app.go` and then configure with ordinary tokens.

```go
// app.go: the pieces every integration touches
app.TokenizationKeeper = tokenizationkeeper.NewKeeper(
    appCodec, keys[tokenizationtypes.StoreKey],
    app.AccountKeeper, app.BankKeeper, app.SendManagerKeeper, // ... other keepers
)

app.TokenizationKeeper.RegisterCustomApprovalCriteriaChecker(myCriteriaFactory)
app.TokenizationKeeper.RegisterCustomGlobalTransferChecker(myTransferFactory)
app.TokenizationKeeper.RegisterCustomCollectionVerifier(myVerifier)

anteHandler, _ := sdk.ChainAnteDecorators(
    // ... standard decorators ...
    NewComplianceAnteDecorator(app.TokenizationKeeper, requirements),
)
```

## What the module needs from an app

- Standard keepers: account and bank for balances and module accounts.
- A send manager (or your own `BankKeeper`-shaped router) if any other module should move native tokens as `sdk.Coins`. See [Support multiple standards](multiple-standards.md).
- IBC wiring only if you want wrapper paths to reach other chains, backed minting against IBC denoms, the transfer tokens hook, or interchain queries. See [IBC and x/bank compatibility](../ibc/README.md).
- Optional EVM wiring for the precompiles. See [EVM](../evm/README.md).

The source of truth is [bitbadgeschain](https://github.com/bitbadges/bitbadgeschain) `app/` and `x/tokenization`. Copy the wiring from there rather than from memory; keeper constructor signatures change between versions.

## Patterns

| Page | Pattern | Read when |
| --- | --- | --- |
| [Support multiple standards](multiple-standards.md) | Route `sdk.Coins` by denom prefix so modules that speak bank can also move native tokens | Your chain has another token standard, or pools, staking, or distribution should accept native tokens |
| [Extension hooks](extension-hooks.md) | Register custom approval criteria checkers, global transfer checkers, and collection verifiers | You need a chain-wide invariant that the built-in criteria cannot express |
| [Ante handler token gates](ante-handler-token-gates.md) | Gate any message type on token ownership from a single ante decorator | KYC-gated sends, credentialed staking, circuit breakers, governance eligibility |
| [Proof-of-token voting power](proof-of-token-voting-power.md) | Gate validator voting power on a credential token | Credentialed or consortium consensus. App-level design; not a shipped module. |

## Related

- [Token standard](../README.md)
- [Chain modules](../modules/README.md)
- [IBC and x/bank compatibility](../ibc/README.md)
- [EVM](../evm/README.md)
