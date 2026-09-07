---
description: "Gate any Cosmos SDK message type on token ownership with one ante decorator: circuit breakers, KYC sends, compliant staking, governance gates."
---

# Ante handler token gates

Any chain that embeds `x/tokenization` can gate any message type on token ownership with a single stateless ante decorator. The decorator checks whether the transaction sender (or a configured address) holds a given token before the message proceeds. All policy state is token ownership: no new store, no migration, no custom module. Credentials, accreditation, circuit-breaker signals, and governance eligibility become balances checked in the ante handler.

```go
requirements := map[string][]TokenRequirement{
	"/cosmos.bank.v1beta1.MsgSend": {
		{
			CollectionId: sdkmath.NewUint(100),  // KYC credential collection
			TokenId:      sdkmath.NewUint(1),    // basic KYC token
			MinBalance:   sdkmath.NewUint(1),
			CheckAddress: "",                    // empty = check tx sender
			MustHold:     true,
			ErrorMsg:     "KYC credential required to send funds",
		},
	},
}
```

## The decorator

`ComplianceAnteDecorator` is generic. You supply a map from message type URL to token requirements, and it enforces them. Every use case on this page is a different configuration of this one decorator.

```go
package app

import (
	"fmt"

	sdkmath "cosmossdk.io/math"
	sdk "github.com/cosmos/cosmos-sdk/types"
	tokenizationkeeper "github.com/bitbadges/bitbadgeschain/x/tokenization/keeper"
	tokenizationtypes "github.com/bitbadges/bitbadgeschain/x/tokenization/types"
)

// TokenRequirement defines what token must be held for a message type to be allowed.
type TokenRequirement struct {
	CollectionId   sdkmath.Uint
	TokenId        sdkmath.Uint
	MinBalance     sdkmath.Uint
	CheckAddress   string // If empty, checks the transaction sender
	MustHold       bool   // true = must hold token to proceed; false = must NOT hold (circuit breaker)
	ErrorMsg       string
}

// ComplianceAnteDecorator gates message types on token ownership.
type ComplianceAnteDecorator struct {
	tokenizationKeeper tokenizationkeeper.Keeper
	requirements       map[string][]TokenRequirement // msg type URL -> requirements
}

func NewComplianceAnteDecorator(
	tk tokenizationkeeper.Keeper,
	requirements map[string][]TokenRequirement,
) ComplianceAnteDecorator {
	return ComplianceAnteDecorator{
		tokenizationKeeper: tk,
		requirements:       requirements,
	}
}

func (cad ComplianceAnteDecorator) AnteHandle(
	ctx sdk.Context, tx sdk.Tx, simulate bool, next sdk.AnteHandler,
) (sdk.Context, error) {
	now := sdkmath.NewUint(uint64(ctx.BlockTime().UnixMilli()))
	nowRange := []*tokenizationtypes.UintRange{{Start: now, End: now}}

	// Get the fee payer (transaction sender)
	feeTx, ok := tx.(sdk.FeeTx)
	var sender string
	if ok {
		sender = sdk.AccAddress(feeTx.FeePayer()).String()
	}

	for _, msg := range tx.GetMsgs() {
		msgType := sdk.MsgTypeURL(msg)
		reqs, exists := cad.requirements[msgType]
		if !exists {
			continue
		}

		for _, req := range reqs {
			checkAddr := req.CheckAddress
			if checkAddr == "" {
				checkAddr = sender
			}
			if checkAddr == "" {
				continue
			}

			collection, found := cad.tokenizationKeeper.GetCollectionFromStore(ctx, req.CollectionId)
			if !found {
				if req.MustHold {
					return ctx, fmt.Errorf("%s", req.ErrorMsg)
				}
				continue
			}

			balanceStore, _, err := cad.tokenizationKeeper.GetBalanceOrApplyDefault(ctx, collection, checkAddr)
			if err != nil {
				if req.MustHold {
					return ctx, fmt.Errorf("%s", req.ErrorMsg)
				}
				continue
			}

			tokenIdRange := []*tokenizationtypes.UintRange{{Start: req.TokenId, End: req.TokenId}}
			balances, err := tokenizationtypes.GetBalancesForIds(ctx, tokenIdRange, nowRange, balanceStore.Balances)

			hasBalance := err == nil && len(balances) > 0 && balances[0].Amount.GTE(req.MinBalance)

			if req.MustHold && !hasBalance {
				return ctx, fmt.Errorf("%s", req.ErrorMsg)
			}
			if !req.MustHold && hasBalance {
				return ctx, fmt.Errorf("%s", req.ErrorMsg)
			}
		}
	}

	return next(ctx, tx, simulate)
}
```

| Field | Meaning |
| --- | --- |
| `CollectionId`, `TokenId` | Which token to check |
| `MinBalance` | Balance threshold, checked at the current block time |
| `CheckAddress` | Empty checks the transaction fee payer; a fixed address checks that address (global policy) |
| `MustHold` | `true`: the address must hold the token. `false`: the address must not hold it (circuit breaker). |
| `ErrorMsg` | Returned when the check fails |

## Wiring in app.go

Add the decorator to the ante chain. The `requirements` map holds your chain's policies; each section below is an entry for that map. The wiring below starts with the KYC entry and the standard Cosmos SDK decorators.

```go
// In app.go, where you build the AnteHandler:
requirements := map[string][]TokenRequirement{
	"/cosmos.bank.v1beta1.MsgSend": {
		{
			CollectionId: sdkmath.NewUint(100), // KYC credential collection
			TokenId:      sdkmath.NewUint(1),   // basic KYC token
			MinBalance:   sdkmath.NewUint(1),
			CheckAddress: "",                   // empty = check tx sender
			MustHold:     true,
			ErrorMsg:     "KYC credential required to send funds",
		},
	},
}

complianceDecorator := NewComplianceAnteDecorator(
	app.TokenizationKeeper,
	requirements,
)

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
	complianceDecorator,
	ante.NewIncrementSequenceDecorator(app.AccountKeeper),
)
if err != nil {
	panic(err)
}
app.SetAnteHandler(anteHandler)
```

## Circuit breaker (replacing x/circuit)

The Cosmos SDK `x/circuit` module is deprecated. Replace it with a "halt token" collection where each token ID maps to a message type. When the authority address holds the halt token, that message type is rejected. Burn the token, or let it expire, to re-enable. This uses `MustHold: false`: the message is blocked while the token is held.

```go
// Circuit breaker: block messages when authority holds halt-token
"/cosmos.bank.v1beta1.MsgSend": {
	{
		CollectionId: sdkmath.NewUint(42),
		TokenId:      sdkmath.NewUint(1),
		MinBalance:   sdkmath.NewUint(1),
		CheckAddress: "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", // fixed address, not sender
		MustHold:     false,            // must NOT hold -> message allowed
		ErrorMsg:     "circuit breaker: MsgSend is currently disabled",
	},
},
"/ibc.applications.transfer.v1.MsgTransfer": {
	{
		CollectionId: sdkmath.NewUint(42),
		TokenId:      sdkmath.NewUint(2),
		MinBalance:   sdkmath.NewUint(1),
		CheckAddress: "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
		MustHold:     false,
		ErrorMsg:     "circuit breaker: IBC transfers are currently disabled",
	},
},
```

Mint a halt token to the authority to disable a message type. Burn it to re-enable.

## KYC-gated transfers

Require the sender to hold a KYC credential before sending funds. In the KYC collection, token ID 1 is basic KYC and token ID 2 is enhanced KYC. Issue tokens after identity verification.

```go
// Basic KYC required for all bank sends
"/cosmos.bank.v1beta1.MsgSend": {
	{
		CollectionId: sdkmath.NewUint(100),  // KYC credential collection
		TokenId:      sdkmath.NewUint(1),    // basic KYC token
		MinBalance:   sdkmath.NewUint(1),
		CheckAddress: "",                    // empty = check tx sender
		MustHold:     true,
		ErrorMsg:     "KYC credential required to send funds",
	},
},
// Enhanced KYC for multi-send (large/batch transfers)
"/cosmos.bank.v1beta1.MsgMultiSend": {
	{
		CollectionId: sdkmath.NewUint(100),
		TokenId:      sdkmath.NewUint(2),    // enhanced KYC token
		MinBalance:   sdkmath.NewUint(1),
		CheckAddress: "",
		MustHold:     true,
		ErrorMsg:     "enhanced KYC credential required for multi-send",
	},
},
```

Tiers are token IDs. Basic KYC for standard transfers, enhanced for large or batch operations. The issuer decides who gets which tier by minting the matching token.

## Compliant staking

Restrict delegation to accredited investors by requiring an accreditation credential.

```go
// Accredited investor credential required to stake
"/cosmos.staking.v1beta1.MsgDelegate": {
	{
		CollectionId: sdkmath.NewUint(200),  // accreditation collection
		TokenId:      sdkmath.NewUint(1),    // accredited investor token
		MinBalance:   sdkmath.NewUint(1),
		CheckAddress: "",
		MustHold:     true,
		ErrorMsg:     "accredited investor credential required to stake",
	},
},
// Also gate redelegation and unbonding if needed
"/cosmos.staking.v1beta1.MsgBeginRedelegate": {
	{
		CollectionId: sdkmath.NewUint(200),
		TokenId:      sdkmath.NewUint(1),
		MinBalance:   sdkmath.NewUint(1),
		CheckAddress: "",
		MustHold:     true,
		ErrorMsg:     "accredited investor credential required to redelegate",
	},
},
```

## IBC transfer compliance

Gate cross-chain sends on a credential so unverified users cannot move assets to chains where your controls do not apply.

```go
// KYC required for cross-chain sends
"/ibc.applications.transfer.v1.MsgTransfer": {
	{
		CollectionId: sdkmath.NewUint(100),  // same KYC collection
		TokenId:      sdkmath.NewUint(1),
		MinBalance:   sdkmath.NewUint(1),
		CheckAddress: "",
		MustHold:     true,
		ErrorMsg:     "KYC credential required for IBC transfers",
	},
},
```

## Governance participation gates

Require a credential to vote, so only compliant holders take part in security token governance.

```go
// Credential required to vote
"/cosmos.gov.v1.MsgVote": {
	{
		CollectionId: sdkmath.NewUint(300),  // governance eligibility collection
		TokenId:      sdkmath.NewUint(1),
		MinBalance:   sdkmath.NewUint(1),
		CheckAddress: "",
		MustHold:     true,
		ErrorMsg:     "governance credential required to vote",
	},
},
// Also gate weighted votes
"/cosmos.gov.v1.MsgVoteWeighted": {
	{
		CollectionId: sdkmath.NewUint(300),
		TokenId:      sdkmath.NewUint(1),
		MinBalance:   sdkmath.NewUint(1),
		CheckAddress: "",
		MustHold:     true,
		ErrorMsg:     "governance credential required to vote",
	},
},
```

## Custom chain policies

The decorator gates any message type on any token requirement. Other ideas:

- Authz: gate `MsgGrant` so only credentialed addresses can delegate permissions.
- Contracts: gate `MsgExecuteContract` on a developer license token.
- Fee grants: gate `MsgGrantAllowance` on an institutional credential.

Requirements stack. One `MsgSend` can require a KYC token and also not be circuit-broken:

```go
"/cosmos.bank.v1beta1.MsgSend": {
	{
		CollectionId: sdkmath.NewUint(100),  // KYC
		TokenId:      sdkmath.NewUint(1),
		MinBalance:   sdkmath.NewUint(1),
		CheckAddress: "",
		MustHold:     true,
		ErrorMsg:     "KYC credential required to send funds",
	},
	{
		CollectionId: sdkmath.NewUint(42),   // circuit breaker
		TokenId:      sdkmath.NewUint(1),
		MinBalance:   sdkmath.NewUint(1),
		CheckAddress: "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
		MustHold:     false,
		ErrorMsg:     "circuit breaker: MsgSend is currently disabled",
	},
},
```

## What the token standard adds for free

Because every credential and signal is an ordinary `x/tokenization` token, these come without extra ante handler code:

- Time-dependent credentials: mint a KYC token with an expiring ownership time range. It revokes itself when the window closes; the balance query already accounts for time.
- Auto-resuming circuit breakers: mint a halt token with a time range and the message type re-enables when the window ends.
- Multi-sig activation: put a voting challenge on the token's mint approval so halting, issuing, or revoking needs N-of-M approval.
- Revocable credentials: the issuer burns or transfers the token to revoke access at once. No separate revocation registry.
- Graduated response: use `MinBalance` for severity. Balance 1 is rate-limited, balance 2 is fully blocked; or balance 1 is basic KYC, balance 2 is enhanced.
- Per-address policies: empty `CheckAddress` checks the sender; a fixed address makes a global policy. Both can coexist in one map.
- Audit trail: every mint, burn, and transfer of a credential token is an on-chain event, so policy history is queryable without extra logging.

## Related

- [Proof-of-token voting power](proof-of-token-voting-power.md)
- [Extension hooks](extension-hooks.md)
- [Voting challenges](../approval-criteria/voting-challenges.md)
- [Balances](../concepts/balances.md)
