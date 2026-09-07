---
description: "x/sendmanager routes sdk.Coins by denom prefix to x/bank or x/tokenization. MsgSendWithAliasRouting, balance query, keeper API, send precompile."
---

# x/sendmanager

`x/sendmanager` is a bank-shaped send layer that understands [alias denoms](../../token-standard/ibc/alias-denoms.md). It inspects each coin's denom prefix: `badgeslp:` routes to `x/tokenization`, anything else routes to `x/bank`. One message or keeper call can therefore carry a native token and a standard coin side by side. The [send manager precompile](../evm/send-manager-precompile.md) at `0x...1003` exposes the same message to Solidity.

```json
{
  "@type": "/sendmanager.MsgSendWithAliasRouting",
  "from_address": "bb1sender...",
  "to_address": "bb1recipient...",
  "amount": [
    { "denom": "badgeslp:64:utoken", "amount": "5" },
    { "denom": "ubadge", "amount": "1000000000" }
  ]
}
```

## Messages

### MsgSendWithAliasRouting

Mirrors `cosmos.bank.MsgSend`, signed by `from_address`.

```proto
message MsgSendWithAliasRouting {
  option (cosmos.msg.v1.signer) = "from_address";
  option (amino.name) = "bitbadgeschain/x/sendmanager/MsgSendWithAliasRouting";

  string from_address = 1;
  string to_address = 2;
  repeated cosmos.base.v1beta1.Coin amount = 3;
}

message MsgSendWithAliasRoutingResponse {}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `from_address` | string | yes | Sender and signer |
| `to_address` | string | yes | Recipient |
| `amount` | Coin[] | yes | Any mix of standard denoms and `badgeslp:` alias denoms |

Behavior:

- For a `badgeslp:<collectionId>:<denom>` coin, the integer amount converts to `Balances[]` through the collection's alias path and a `MsgTransferTokens` runs in auto-scan mode (no prioritized approvals). Collection, outgoing, and incoming approvals all apply.
- For any other denom, the coin moves through `x/bank`.
- The module does not set user-level approvals for you. If the recipient rejects incoming transfers, the alias leg fails.

### MsgUpdateParams

Governance-only. `Params` has no fields today.

```proto
message MsgUpdateParams {
  option (cosmos.msg.v1.signer) = "authority";
  string authority = 1;
  Params params = 2;
}
```

## Queries

| Query | LCD path | Returns |
| --- | --- | --- |
| `Params` | `GET /bitbadges/bitbadgeschain/sendmanager/params` | Module params |
| `Balance` | `GET /bitbadges/bitbadgeschain/sendmanager/balance/{address}/{denom}` | One coin balance with alias routing |

`Balance` is the useful one. For an alias denom it reports how many alias units the address could send, derived from its native balances and the alias path.

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/sendmanager/balance/bb19e2mf7cywkv7zaug6nk5f87d07fxrdgrladvymh2gwv5crvm3vnsy5m66z/badgeslp:64:utoken
```

```json
{"balance":{"denom":"badgeslp:64:utoken","amount":"800"}}
```

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/sendmanager/balance/bb1kj9kt5y64n5a8677fhjqnmcc24ht2vy9atmdls/ubadge
```

```json
{"balance":{"denom":"ubadge","amount":"101000000000"}}
```

On mainnet the `params` route currently returns `Not Implemented` (gRPC code 12); the `balance` route works.

## Keeper API

Chain developers use the keeper as a drop-in replacement for `BankKeeper` sends. Full details and the routing internals are on [Support multiple standards](../../token-standard/integrate/multiple-standards.md).

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

The keeper also exposes `IsICS20Compatible(ctx, denom)` and `StandardName(ctx, denom)` helpers and `GetRegisteredPrefixes()`. Modules plug in by implementing `types.AliasDenomRouter` for a prefix; `x/tokenization` registers `badgeslp:`.

## Precompile

From Solidity, call `send(string msgJson) returns (bool success)` on `0x0000000000000000000000000000000000001003` with the JSON above as `msgJson`. The precompile signs as the calling EVM account's bech32 address, so `from_address` must equal that address. See [Send manager precompile](../evm/send-manager-precompile.md).

## Related

- [Alias denoms](../../token-standard/ibc/alias-denoms.md)
- [Support multiple standards](../../token-standard/integrate/multiple-standards.md)
- [Send manager precompile](../evm/send-manager-precompile.md)
- [MsgTransferTokens](../../token-standard/messages/msg-transfer-tokens.md)
