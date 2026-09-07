---
description: "For Cosmos SDK chain developers who embed x/tokenization in their own app. What the module needs from app.go and where each integration pattern lives."
---

# Integrate the Module

This section is for teams building their own Cosmos SDK chain with `x/tokenization` compiled in. It is not needed to build on the BitBadges chain itself; for that, start at [Token Standard](../README.md). Each page here is a pattern you wire in `app.go` and then configure with ordinary tokens.

```go
// app.go: the pieces every integration touches
app.TokenizationKeeper = tokenizationkeeper.NewKeeper(
    appCodec,
    runtime.NewKVStoreService(keys[tokenizationtypes.StoreKey]),
    logger,
    authtypes.NewModuleAddress(govtypes.ModuleName).String(),
    app.BankKeeper,
    app.AccountKeeper,
    app.DistrKeeper,
    app.SendManagerKeeper,
    func() *ibckeeper.Keeper { return app.IBCKeeper },
)
app.TokenizationKeeper.SetGammKeeper(app.GammKeeper) // optional
app.TokenizationKeeper.SetEVMKeeper(app.EVMKeeper)   // optional

app.TokenizationKeeper.RegisterCustomApprovalCriteriaChecker(myCriteriaFactory)
app.TokenizationKeeper.RegisterCustomGlobalTransferChecker(myTransferFactory)
app.TokenizationKeeper.RegisterCustomCollectionVerifier(myVerifier)

anteHandler, err := sdk.ChainAnteDecorators(
    ante.NewSetUpContextDecorator(),
    ante.NewValidateBasicDecorator(),
    ante.NewTxTimeoutHeightDecorator(),
    ante.NewValidateMemoDecorator(app.AccountKeeper),
    ante.NewConsumeGasForTxSizeDecorator(app.AccountKeeper),
    ante.NewDeductFeeDecorator(app.AccountKeeper, app.BankKeeper, app.FeeGrantKeeper, nil),
    ante.NewSetPubKeyDecorator(app.AccountKeeper),
    ante.NewValidateSigCountDecorator(app.AccountKeeper),
    ante.NewSigGasConsumeDecorator(app.AccountKeeper, ante.DefaultSigVerificationGasConsumer),
    ante.NewSigVerificationDecorator(app.AccountKeeper, txConfig.SignModeHandler()),
    NewComplianceAnteDecorator(app.TokenizationKeeper, requirements),
    ante.NewIncrementSequenceDecorator(app.AccountKeeper),
)
if err != nil {
    panic(err)
}
app.SetAnteHandler(anteHandler)
```

## What the Module Needs from an App

- Standard keepers: account and bank for balances and module accounts.
- A send manager (or your own `BankKeeper`-shaped router) if any other module should move native tokens as `sdk.Coins`. See [Support Multiple Standards](multiple-standards.md).
- IBC wiring only if you want wrapper paths to reach other chains, backed minting against IBC denoms, the transfer tokens hook, or interchain queries. See [IBC and x/bank Compatibility](../ibc/README.md).
- Optional EVM wiring for the precompiles. See [EVM](../../chain/evm/README.md).

The source of truth is [bitbadgeschain](https://github.com/bitbadges/bitbadgeschain) `app/` and `x/tokenization`. The BitBadges app itself wires the keeper through depinject in `app_config.go`; the explicit `NewKeeper` call above matches `x/tokenization/keeper/keeper.go`. Copy the wiring from the repository rather than from memory; keeper constructor signatures change between versions.

## Patterns

| Page | Pattern | Read when |
| --- | --- | --- |
| [Support Multiple Standards](multiple-standards.md) | Route `sdk.Coins` by denom prefix so modules that speak bank can also move native tokens | Your chain has another token standard, or pools, staking, or distribution should accept native tokens |
| [Extension Hooks](extension-hooks.md) | Register custom approval criteria checkers, global transfer checkers, and collection verifiers | You need a chain-wide invariant that the built-in criteria cannot express |
| [Ante Handler Token Gates](ante-handler-token-gates.md) | Gate any message type on token ownership from a single ante decorator | KYC-gated sends, credentialed staking, circuit breakers, governance eligibility |
| [Proof-of-Token Voting Power](proof-of-token-voting-power.md) | Gate validator voting power on a credential token | Credentialed or consortium consensus. App-level design; not a shipped module. |

## Related

- [Token Standard](../README.md)
- [Chain Modules](../../chain/modules/README.md)
- [IBC and x/bank Compatibility](../ibc/README.md)
- [EVM](../../chain/evm/README.md)
