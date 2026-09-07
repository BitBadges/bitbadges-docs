---
description: "A send manager with alias denom routing lets one BankKeeper-shaped call move x/bank coins and native tokens. Prefix matching, auto-scan, routing."
---

# Support multiple standards

To support more than one token standard on a chain, put a send manager with alias denom routing in front of `x/bank`. It reads each coin's denom prefix and routes the send to the module that owns it. The BitBadges chain ships this as [x/sendmanager](../../chain/modules/send-manager.md); copy or import that implementation when the chain only combines `x/tokenization` and `x/bank`.

The keeper is a drop-in replacement for the `BankKeeper` interface. Replace calls such as `k.bankKeeper.SendCoins()` with `k.sendManagerKeeper.SendCoinsWithAliasRouting()` (or the matching function) and every caller gains multi-standard support through dynamic routing.

```go
type SendManagerKeeper interface {
	SendCoinWithAliasRouting(ctx sdk.Context, fromAddressAcc sdk.AccAddress, toAddressAcc sdk.AccAddress, coin *sdk.Coin) error
	SendCoinsWithAliasRouting(ctx sdk.Context, fromAddressAcc sdk.AccAddress, toAddressAcc sdk.AccAddress, coins sdk.Coins) error
	FundCommunityPoolWithAliasRouting(ctx sdk.Context, fromAddressAcc sdk.AccAddress, coins sdk.Coins) error
	SpendFromCommunityPoolWithAliasRouting(ctx sdk.Context, toAddressAcc sdk.AccAddress, coins sdk.Coins) error
	SendCoinsFromModuleToAccountWithAliasRouting(ctx sdk.Context, moduleName string, toAddressAcc sdk.AccAddress, coins sdk.Coins) error
	SendCoinsFromAccountToModuleWithAliasRouting(ctx sdk.Context, fromAddressAcc sdk.AccAddress, moduleName string, coins sdk.Coins) error
	GetBalanceWithAliasRouting(ctx sdk.Context, address sdk.AccAddress, denom string) (sdk.Coin, error)
}
```

## Usage

```go
// Sending - works for both standard coins ("uatom") and alias denoms ("badgeslp:1:utoken")
err := sendManagerKeeper.SendCoinsWithAliasRouting(ctx, from, to, coins)

// Querying - automatically routes to correct handler
balance, err := sendManagerKeeper.GetBalanceWithAliasRouting(ctx, address, denom)
```

## How it works

### Prefix matching

The send manager checks each registered prefix against the denom and routes to the first match.

```go
// Example: denom = "badgeslp:1:utoken"
func (k Keeper) getRouterForDenom(denom string) (types.AliasDenomRouter, bool) {
    // Check registered prefixes in order (e.g., ["badgeslp:", "badges:"])
    for _, prefix := range k.registeredPrefixes {
        // Does "badgeslp:1:utoken" start with "badgeslp:"? Yes!
        if strings.HasPrefix(denom, prefix) {
            // Return the router registered for this prefix
            return k.prefixToRouter[prefix], true
        }
    }
    // No prefix matched - will use bank keeper for standard coins
    return nil, false
}
```

- `badgeslp:1:utoken` matches `badgeslp:` and routes to `x/tokenization`.
- `uatom` matches nothing and routes to `x/bank`.

A module joins the router by implementing `types.AliasDenomRouter` (`CheckIsAliasDenom`, `SendNativeTokensViaAliasDenom`, `FundCommunityPoolViaAliasDenom`, `SpendFromCommunityPoolViaAliasDenom`, `SendFromModuleToAccountViaAliasDenom`, `SendFromAccountToModuleViaAliasDenom`, `GetBalanceWithAliasRouting`) and registering its prefix.

### Alias denoms

The BitBadges format is `badgeslp:COLLECTION_ID:denom`, for example `badgeslp:1:utoken`. The integer amount converts to `Balances[]` through the collection's alias path, where the conversion rate is defined. No wrapping happens; the alias is a name for the full `Balances[]` field so that other environments can use it. See [Alias denoms](../ibc/alias-denoms.md).

### Auto-scan mode

Every send through the send manager runs in auto-scan mode with no prioritized approvals. The underlying transfer is a `MsgTransferTokens`:

```go
// From SendNativeTokensViaAliasDenom
msg := &badgestypes.MsgTransferTokens{
    Creator:      recipientAddress,
    CollectionId: collection.CollectionId,
    Transfers: []*badgestypes.Transfer{
        {
            From:        recipientAddress,
            ToAddresses: []string{toAddress},
            Balances:    balancesToTransfer,
            // Note: No PrioritizedApprovals field - uses auto-scan mode
        },
    },
}
badgesMsgServer.TransferTokens(ctx, msg)
```

### User-level approvals

The send manager does not manage user-level approvals. Every `x/tokenization` transfer must satisfy approvals at the collection, sender, and recipient level where applicable. Set them elsewhere, before or after the send, when a transfer needs them. Module addresses and other non-user addresses matter most here: they inherit the collection defaults.

```go
// Example: Sometimes, you may need both pre and post approval updates to make stuff work and clean up.
preUpdateApprovalsMsg := &badgestypes.MsgUpdateUserApprovals{ ... }
badgesMsgServer.UpdateUserApprovals(ctx, preUpdateApprovalsMsg)

sendManagerKeeper.SendCoinsWithAliasRouting(ctx, from, to, coins)

postUpdateApprovalsMsg := &badgestypes.MsgUpdateUserApprovals{ ... }
badgesMsgServer.UpdateUserApprovals(ctx, postUpdateApprovalsMsg)
```

The community pool is a concrete case. Depending on the collection defaults, its address may not accept incoming transfers, which a native token deposit requires. `FundCommunityPoolViaAliasDenom` sets the flags first:

```go
func (k Keeper) FundCommunityPoolViaAliasDenom(
    ctx sdk.Context,
    fromAddress string,
    toAddress string,
    denom string,
    amount sdkmath.Uint,
) error {
    collection, err := k.ParseCollectionFromDenom(ctx, denom)
    if err != nil {
        return err
    }

    // Set auto-approvals for recipient to accept incoming transfers
    err = k.SetAllAutoApprovalFlagsForAddress(ctx, collection, toAddress)
    if err != nil {
        return err
    }

    // Now safe to send - recipient has auto-approvals set
    return k.SendNativeTokensViaAliasDenom(ctx, fromAddress, toAddress, denom, amount)
}

// SetAllAutoApprovalFlagsForAddress sets all auto-approval flags for an address
func (k Keeper) SetAllAutoApprovalFlagsForAddress(
    ctx sdk.Context,
    collection *badgestypes.TokenCollection,
    address string,
) error {
    badgesMsgServer := NewMsgServerImpl(k)
    updateApprovalsMsg := &badgestypes.MsgUpdateUserApprovals{
        Creator:                               address,
        CollectionId:                          collection.CollectionId,
        UpdateAutoApproveAllIncomingTransfers: true,
        AutoApproveAllIncomingTransfers:       true,
        UpdateAutoApproveSelfInitiatedOutgoingTransfers: true,
        AutoApproveSelfInitiatedOutgoingTransfers:       true,
        UpdateAutoApproveSelfInitiatedIncomingTransfers: true,
        AutoApproveSelfInitiatedIncomingTransfers:       true,
    }
    _, err := badgesMsgServer.UpdateUserApprovals(ctx, updateApprovalsMsg)
    return err
}
```

### Routing flow

```go
func (k Keeper) SendCoinsWithAliasRouting(ctx sdk.Context, from, to sdk.AccAddress, coins sdk.Coins) error {
    for _, coin := range coins {
        router, found := k.getRouterForDenom(coin.Denom)
        if found {
            // Alias denom - use custom router
            amountUint := sdkmath.NewUintFromBigInt(coin.Amount.BigInt())
            return router.SendNativeTokensViaAliasDenom(ctx, from.String(), to.String(), coin.Denom, amountUint)
        }
        // Standard coin - use bank keeper
        return k.bankKeeper.SendCoins(ctx, from, to, sdk.NewCoins(coin))
    }
}
```

## Related

- [x/sendmanager](../../chain/modules/send-manager.md)
- [Alias denoms](../ibc/alias-denoms.md)
- [Prioritized approvals](../concepts/prioritized-approvals.md)
- [MsgUpdateUserApprovals](../messages/msg-update-user-approvals.md)
