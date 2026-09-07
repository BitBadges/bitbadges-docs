---
description: "The call path from a Solidity contract through a Go precompile to a Cosmos SDK keeper, the package layout, and how to add methods or precompiles."
---

# Architecture

This page explains how a precompile call travels from Solidity to chain state. Read it if you maintain contracts that depend on precompile behavior or want to extend the chain.

## Call path

```text
┌─────────────────────────────────────────────────────────────┐
│                    Solidity smart contract                  │
│  calls 0x0000000000000000000000000000000000001001 (tokenization),  │
│        0x0000000000000000000000000000000000001002 (gamm),          │
│        0x0000000000000000000000000000000000001003 (sendmanager)   │
└────────────────────────┬────────────────────────────────────┘
                         │ ABI-encoded call: method ID + string msgJson
┌────────────────────────▼────────────────────────────────────┐
│              Precompile contract (Go)                       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  ABI decoder: method ID resolution, unpack args      │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  JSON unmarshal: msgJson -> Cosmos SDK Msg / Query   │   │
│  │  creator/sender := contract.Caller()                 │   │
│  │  0x addresses -> bech32                              │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Security layer: caller check, ValidateBasic,        │   │
│  │  array size limits, overflow checks                  │   │
│  └──────────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │ keeper / msg server call
┌────────────────────────▼────────────────────────────────────┐
│              Cosmos SDK module keeper                        │
│  x/tokenization, x/gamm, x/sendmanager                       │
│  state, business rules, validation, events                   │
└─────────────────────────────────────────────────────────────┘
```

## Registration

`app/evm.go` builds the EVM keeper with the upstream cosmos/evm static precompiles, then registers the three BitBadges precompiles:

```go
func (app *App) registerCustomPrecompiles() {
	tokenizationPrecompile := tokenizationprecompile.NewPrecompile(app.TokenizationKeeper)
	app.EVMKeeper.RegisterStaticPrecompile(common.HexToAddress(tokenizationprecompile.TokenizationPrecompileAddress), tokenizationPrecompile)

	gammPrecompile := gammprecompile.NewPrecompile(app.GammKeeper)
	app.EVMKeeper.RegisterStaticPrecompile(common.HexToAddress(gammprecompile.GammPrecompileAddress), gammPrecompile)

	sendManagerPrecompile := sendmanagerprecompile.NewPrecompile(app.SendmanagerKeeper)
	app.EVMKeeper.RegisterStaticPrecompile(common.HexToAddress(sendmanagerprecompile.SendManagerPrecompileAddress), sendManagerPrecompile)

	// Next available address: 0x0000000000000000000000000000000000001004
}
```

A precompile must be both registered and enabled. Registration happens at app start. Enabling happens in genesis (the `active_static_precompiles` list of the EVM params) or in an upgrade handler. `app/precompile_helpers.go` provides `GetAllCustomPrecompileAddresses`, `ValidateNoAddressCollisions` (panics at startup on a duplicate), and a test helper that registers and enables everything.

The EVM keeper is built on the `precisebank` keeper, not raw `x/bank`, because the chain's native coin has 9 decimals and the EVM expects 18. See [Developer guide](developer-guide.md#decimals-9-on-the-cosmos-side-18-on-the-evm-side).

## Package layout

Each precompile is a Go package under its module: `x/tokenization/precompile/`, `x/gamm/precompile/`, `x/sendmanager/precompile/`.

| File | Role |
| --- | --- |
| `precompile.go` | Implements `vm.PrecompiledContract`: `RequiredGas()`, `Run()`, `Execute()`, method constants, gas constants, handlers |
| `abi.json` | The Solidity ABI: method signatures, parameter and return types, events. Embedded into the binary |
| `json_unmarshal.go` | Maps a method name to a Msg or Query type, unmarshals `msgJson`, sets the creator or sender from the caller, converts addresses |
| `validation.go` | Input validation helpers |
| `security.go` | Caller check, overflow check, array size limits |
| `errors.go` | Structured `PrecompileError` with codes, Cosmos error mapping, detail sanitization |
| `events.go` | Emits `precompile_*` Cosmos events |
| `gas.go` | Per-element gas constants and calculators |
| `return_types.go`, `return_types_conversions.go` (tokenization) | Go-to-Solidity struct conversion helpers |
| `metrics.go` (tokenization, gamm) | Usage logging |

The Solidity side lives in the chain repo under `contracts/`: `interfaces/` (`ITokenizationPrecompile.sol`, `IGammPrecompile.sol`, `ISendManagerPrecompile.sol`), `libraries/` (JSON helpers, struct helpers, errors, decoders, wrappers), `types/` (`TokenizationTypes.sol` mirrors the proto types), `examples/`, `templates/`, and `test/`.

## Transaction flow

1. The contract calls a precompile method with an ABI-encoded `string msgJson`.
2. `RequiredGas` reads the method ID and charges the base cost plus a fixed buffer ([gas](tokenization-precompile/gas.md)).
3. `Run` opens an SDK context from the EVM state DB and dispatches by method name.
4. `unmarshalMsgFromJSON` picks the Msg type, unmarshals the JSON, overrides `creator` (or `sender`) with the caller's bech32 address, converts any `0x` addresses in the message to bech32, and runs `ValidateBasic`.
5. The handler calls the module's msg server. The keeper applies the business rules and writes state.
6. The keeper and the precompile emit events.
7. The result is ABI-packed and returned: `bool success`, or a `uint256` ID for creation methods.

An error at any step returns a `PrecompileError` and reverts the EVM call. State written by the keeper is rolled back with the transaction.

## Query flow

1. The contract calls a `view` method with `msgJson`.
2. `unmarshalQueryFromJSON` picks the query request type, unmarshals, and converts addresses (the `userAddress` alias is accepted for `getBalance` and `getDynamicStoreValue`).
3. `validateQueryRequest` rejects zero IDs and oversized range arrays (`MaxQueryArraySize` = 1000).
4. The keeper's gRPC query handler runs.
5. The response is packed. Most getters return the protobuf-encoded response as `bytes`. `getChallengeTracker`, `getETHSignatureTracker`, `getWrappableBalances`, `getBalanceAmount`, and `getTotalSupply` return `uint256`; `isAddressReservedProtocol` returns `bool`; `getAllReservedProtocolAddresses` returns `address[]`.

Decode `bytes` off-chain with the TypeScript SDK, or extract single fields on-chain with `TokenizationDecoders` (for example `parseHolderCountFromStats`).

## Address conversion

```go
// EVM address -> Cosmos address
caller := contract.Caller()  // common.Address (20 bytes)
cosmosAddr := sdk.AccAddress(caller.Bytes()).String()  // Bech32 format
```

Address strings inside JSON go through `convertEVMAddressToBech32`: a valid bech32 string passes through; a hex address is converted; anything else is left for `ValidateBasic` to reject.

## Gas

```go
// x/tokenization/precompile/gas.go: base gas + per-element costs
func CalculateTransferGas(toAddresses []common.Address, tokenIdsRanges []uintRange, ownershipTimesRanges []uintRange) uint64 {
	var gas uint64 = GasTransferTokensBase
	gas += uint64(len(toAddresses)) * GasPerRecipient
	gas += uint64(len(tokenIdsRanges)) * GasPerTokenIdRange
	gas += uint64(len(ownershipTimesRanges)) * GasPerOwnershipTimeRange
	return gas
}
```

The per-method base costs, the fixed buffers (`+200,000` for transactions, `+50,000` for queries), and the per-element constants are listed on [Gas](tokenization-precompile/gas.md).

## Security

Every transaction method verifies the caller:

```go
caller := contract.Caller()
if err := VerifyCaller(caller); err != nil {
    return nil, err
}
```

Inputs are type-checked, range-checked (`start <= end`), size-limited (DoS protection), and validated against module rules. Errors are structured and sanitized:

```go
return nil, ErrInvalidInput("invalid collectionId")
```

Details on [Security](tokenization-precompile/security.md).

## Performance notes

- Gas is computed from the method and input size, so simple calls stay cheap.
- The ABI is parsed once at init. Method lookup is a map lookup.
- If `abi.json` fails to load, the precompile is disabled but the chain still starts (`GetABILoadError`).

## Extending

Add a method to an existing precompile:

1. Define the method in `abi.json`.
2. Add the method constant in `precompile.go`.
3. Add a gas constant and a case in `RequiredGas`.
4. Add a case to `Execute` and implement the handler.
5. Add JSON routing in `json_unmarshal.go` and type conversions if needed.
6. Add validation and tests.

Add a new precompile:

1. Create a package that implements `vm.PrecompiledContract`.
2. Register it in `registerCustomPrecompiles` (next address is `0x...1004`) and add it to `GetAllCustomPrecompileAddresses`.
3. Enable it in genesis or an upgrade handler.
4. Define the ABI and the Solidity interface under `contracts/`.

## Related

- [Tokenization precompile](tokenization-precompile/README.md)
- [Developer guide](developer-guide.md)
- [Token standard](../../token-standard/README.md)
- [Cosmos EVM documentation](https://docs.cosmos.network/evm/v0.5.0/documentation/overview)
