---
description: "coinTransfers: move x/bank coins (BADGE, IBC coins, alias denoms) every time an approval is used, plus the mint escrow address that pays on behalf of Mint."
---

# Coin transfers

`coinTransfers` executes `x/bank` sends every time the approval is used. It is how payments, payouts, and swaps ride on a token transfer.

## Shape

```json
{
  "coinTransfers": [
    {
      "to": "bb1...",
      "coins": [{ "amount": "1000000000", "denom": "ubadge" }],
      "overrideFromWithApproverAddress": false,
      "overrideToWithInitiator": false
    }
  ]
}
```

```ts
interface iCoinTransfer<T extends NumberType> {
  to: string;
  coins: iCosmosCoin<T>[];
  overrideFromWithApproverAddress: boolean;
  overrideToWithInitiator: boolean;
}

interface iCosmosCoin<T extends NumberType> {
  amount: T;
  denom: string; // "ubadge", an IBC denom, or a badgeslp: alias denom
}
```

| Field | Type | Description |
| --- | --- | --- |
| `to` | string | Recipient. `"Mint"` resolves to the collection's mint escrow address. |
| `coins` | Coin[] | Amounts and denoms to send. Must not be empty. |
| `overrideFromWithApproverAddress` | bool | `false`: the initiator pays. `true`: the approval's owner pays. For a collection approval the owner is the mint escrow address. |
| `overrideToWithInitiator` | bool | `true`: send to the initiator instead of `to`. |

## How it works

For each entry, the chain sends `coins` from the payer to the recipient inside the transfer's transaction. If any send fails (for example insufficient balance), the whole transfer reverts.

Rules:

- The approval is no longer auto-scannable. Transfers must [prioritize](../concepts/prioritized-approvals.md) it.
- Denoms must be in the module's allowed denom list ([Params](../queries/params.md)). `badgeslp:` [alias denoms](../ibc/alias-denoms.md) are always allowed.
- An alias denom that points at the same collection as the approval is rejected. Route through another denom (for example USDC).
- With [amount scaling](predetermined-balances.md), every coin amount is multiplied by the transfer's multiplier.
- [Royalties](user-approval-settings.md) set by the collection are deducted from each coin before the remainder reaches `to`.

### Mint escrow address

`"Mint"` cannot hold coins. Each collection has a `mintEscrowAddress`, derived from the collection ID, that holds coins on its behalf. No one holds its key. Coins leave it only through collection approvals with `overrideFromWithApproverAddress: true`.

```ts
const mintEscrowAddress = generateAlias(
  'tokenization',
  getAliasDerivationKeysForCollection(collectionId)
);
```

Properties:

- Longer than a normal address; no private key.
- Can receive any `x/bank` coin.
- Only collection approvals move coins out of it.
- Read it from `TokenCollection.mintEscrowAddress`.

Fund it at creation with `mintEscrowCoinsToTransfer` on [MsgCreateCollection](../messages/msg-create-collection.md). The address depends on the collection ID, which is unknown before creation, so this field lets you escrow in the same transaction:

```ts
const msgCreateCollection: MsgCreateCollection = {
  creator: 'bb1...',
  collectionId: '0',
  mintEscrowCoinsToTransfer: [{ denom: 'ubadge', amount: '1000000' }],
  // ... other collection fields
};
```

### Examples

Charge 1000 BADGE per mint, paid by the claimer to the creator:

```json
{
  "coinTransfers": [
    {
      "to": "bb1creator...",
      "coins": [{ "amount": "1000000000", "denom": "ubadge" }],
      "overrideFromWithApproverAddress": false,
      "overrideToWithInitiator": false
    }
  ]
}
```

Pay 1 USDC from the collection escrow to whoever redeems (a payout). `to` is ignored because `overrideToWithInitiator` is set:

```json
{
  "coinTransfers": [
    {
      "to": "bb1ignored...",
      "coins": [{ "amount": "1000000", "denom": "ibc/..." }],
      "overrideFromWithApproverAddress": true,
      "overrideToWithInitiator": true
    }
  ]
}
```

## Related

- [User approval settings](user-approval-settings.md)
- [Predetermined balances](predetermined-balances.md)
- [Minting and supply](../concepts/minting-and-supply.md)
- [Alias denoms](../ibc/alias-denoms.md)
