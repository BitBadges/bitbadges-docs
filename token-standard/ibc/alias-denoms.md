---
description: "The badgeslp:COLLECTION_ID:denom alias format that lets Cosmos SDK interfaces treat x/tokenization balances as sdk.Coin without wrapping."
---

# Alias denoms

An alias denom is an `sdk.Coin` view of a native token balance. It exists so that liquidity pools, the send manager, and other code that expects `(denom, amount)` can hold and move `x/tokenization` tokens. Nothing is minted or burned. The environment must support aliases for this to work.

## Shape

```text
badgeslp:COLLECTION_ID:denom
```

```text
5 badgeslp:73:utoken
```

| Part | Value in the example | Meaning |
| --- | --- | --- |
| prefix | `badgeslp:` | Marks an alias denom. Distinct from `badges:`, the wrapper path prefix. |
| collection ID | `73` | The collection whose `aliasPaths` define the conversion |
| base denom | `utoken` | The `denom` of one entry in the collection's `aliasPaths` |
| amount | `5` | Integer alias units, converted to `Balances[]` by the path's `conversion` |

## How it works

1. Parse the alias into collection ID and denom.
2. Look up the `AliasPath` in the collection's `aliasPaths` array by denom.
3. Convert the integer amount to `Balances[]` with the path's `conversion`. The rate is `conversion.sideA.amount` alias units = `conversion.sideB[]` tokens. With `sideA.amount = "1"` and `sideB = [{ amount: 1n, ... }]`, `1 badgeslp:73:utoken` equals one token (1:1).
4. Execute the transfer through `MsgTransferTokens` with the converted `Balances[]`.

Rules that follow from this:

- There is no wrapping. The alias names the full `Balances[]` field; it does not create a new coin.
- The conversion rate lives only in `aliasPaths[].conversion.sideA.amount` and `conversion.sideB[]`.
- Code that supports aliases almost always runs in auto-scan mode, with no prioritized approvals. See [Prioritized approvals](../concepts/prioritized-approvals.md).

## Configuration

Alias paths are added with `aliasPathsToAdd` on `MsgCreateCollection` or `MsgUniversalUpdateCollection`.

```ts
const collection: MsgCreateCollection = {
    // ... other fields
    aliasPathsToAdd: [
        {
            denom: 'utoken',
            conversion: {
                sideA: {
                    amount: '1', // Required: amount of alias unit
                },
                sideB: [
                    {
                        amount: 1n,
                        tokenIds: [{ start: 1n, end: 100n }],
                        ownershipTimes: [
                            { start: 1n, end: 18446744073709551615n },
                        ],
                    },
                ],
            },
            symbol: 'BASETOKEN',
            denomUnits: [
                {
                    decimals: 6n,
                    symbol: 'TOKEN',
                    isDefaultDisplay: true,
                },
            ],
            metadata: { uri: '', customData: '' }, // Optional PathMetadata
        },
    ],
};
```

In this example `1 badgeslp:COLLECTION_ID:utoken` converts to one token from IDs 1 to 100 with full ownership times. The rate is 1:1 because `conversion.sideA.amount = "1"` and `conversion.sideB[0].amount = 1n`. The conversion type is `ConversionWithoutDenom` because the denom is stored on the path, not inside the conversion. An alias path has no `address` field and no `allowOverrideWithAnyValidToken` field; those belong to wrapper paths.

`metadata.uri` (for example `ipfs://Qm...`) points at hosted JSON of the form `{ name, image, description }`. The image is the main use. The on-chain `symbol` identifies the path; the metadata name does not.

## Use cases

Adding liquidity to a pool with an alias and a standard coin side by side:

```ts
const coins = [
    {
        denom: 'badgeslp:73:utoken',
        amount: '1000000', // Converts to Balances[] via aliasPaths behind the scenes
    },
    {
        denom: 'uatom',
        amount: '500000',
    },
];
```

Mixing standards in one transfer:

```ts
const transfer = {
    from: 'bb1...',
    to: 'bb1...',
    amount: [
        {
            denom: 'badgeslp:73:utoken', // BitBadges token (alias)
            amount: '1000',
        },
        {
            denom: 'uatom', // Standard Cosmos SDK coin
            amount: '500',
        },
    ],
};
```

On the BitBadges chain, [Send manager](../../chain/modules/send-manager.md) is the module that accepts mixed `sdk.Coins` like these and routes each denom to x/bank or `x/tokenization` by prefix. [x/gamm](../../chain/modules/gamm/README.md) pools hold alias denoms as pool assets.

## Permission control

The `canAddMoreAliasPaths` collection permission controls when the manager may add alias paths. It is an `ActionPermission` with time-based controls.

- Empty or nil means adding paths is allowed (neutral state).
- Collections migrated from v21 have empty permissions, so adding paths is allowed by default.

Allow at all times:

```ts
const collectionPermissions: CollectionPermissions<bigint> = {
    canAddMoreAliasPaths: [], // Empty = allowed by default
};
```

Explicitly permit forever:

```ts
const collectionPermissions: CollectionPermissions<bigint> = {
    canAddMoreAliasPaths: [
        {
            permanentlyPermittedTimes: [
                { start: 1n, end: 18446744073709551615n },
            ],
            permanentlyForbiddenTimes: [],
        },
    ],
};
```

Lock forever:

```ts
const collectionPermissions: CollectionPermissions<bigint> = {
    canAddMoreAliasPaths: [
        {
            permanentlyPermittedTimes: [],
            permanentlyForbiddenTimes: [
                { start: 1n, end: 18446744073709551615n },
            ],
        },
    ],
};
```

Allow only during a window:

```ts
const collectionPermissions: CollectionPermissions<bigint> = {
    canAddMoreAliasPaths: [
        {
            permanentlyPermittedTimes: [
                { start: 1704067200000n, end: 1735689600000n },
            ],
            permanentlyForbiddenTimes: [],
        },
    ],
};
```

When `MsgUniversalUpdateCollection` carries `aliasPathsToAdd`, the chain checks `canAddMoreAliasPaths` before it processes the paths. A failed check rejects the transaction. The check happens before the paths are added, but the permission itself can still be updated at the end of the same transaction when `updateCollectionPermissions` is `true`.

## Properties

- Drop-in: existing Cosmos SDK code can accept a token by changing the denom string.
- Works with `sdk.Coin` interfaces and tools, including AMM pools.
- One interface for several token standards.
- No mint or burn overhead.

## Related

- [Cosmos coin wrapper paths](cosmos-coin-wrapper-paths.md)
- [Send manager](../../chain/modules/send-manager.md)
- [Permissions](../concepts/permissions.md)
- [MsgUniversalUpdateCollection](../messages/msg-universal-update-collection.md)
