---
description: "Wrapper paths burn native tokens into a generated badges:COLLECTION_ID:denom x/bank coin and back. Fields, conversion rates, {id} denoms, approvals."
---

# Cosmos coin wrapper paths

A wrapper path gives a collection a generated x/bank denom, `badges:<collectionId>:<denom>`, that is IBC-compatible. Sending tokens to the path's wrapper address burns them and mints the coin. Sending the coin back burns the coin and mints the tokens. The denom is new and generated; it is not an existing IBC denom (for that, see [Backed minting](backed-minting.md)).

Use cases:

- Keep tokens native for time-based logic, then convert them to plain Cosmos coins later.
- Reach chains and services that only understand x/bank coins (Osmosis, Juno, and others).

{% hint style="warning" %}
Wrapper addresses have no private key. Collection approvals must override the wrapper address's user-level approvals where needed, and every approval used for a wrap or unwrap must set `allowSpecialWrapping: true` in `approvalCriteria`. See [Special address flags](../approval-criteria/special-address-flags.md).
{% endhint %}

## Shape

A collection with one wrapper path and one alias path:

```ts
// Collection with wrapper path
const collection: MsgCreateCollection = {
    creator: 'bb1kj9kt5y64n5a8677fhjqnmcc24ht2vy9atmdls',
    collectionId: '0', // 0 for new collection
    validTokenIds: [{ start: 1n, end: 100n }],
    cosmosCoinWrapperPathsToAdd: [
        {
            denom: 'utoken',
            conversion: {
                sideA: {
                    amount: '1', // Required: amount of wrapped coin
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
            symbol: 'TOKEN',
            denomUnits: [
                {
                    decimals: 6n,
                    symbol: 'TOKEN',
                    isDefaultDisplay: true,
                },
            ],
            allowOverrideWithAnyValidToken: false,
            metadata: { uri: '', customData: '' }, // Optional metadata
        },
    ],
    aliasPathsToAdd: [
        {
            denom: 'utoken-alias',
            conversion: {
                sideA: {
                    amount: '1', // Required: amount of wrapped coin
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
            symbol: 'ALIAS',
            denomUnits: [
                {
                    decimals: 6n,
                    symbol: 'ALIAS',
                    isDefaultDisplay: true,
                },
            ],
            metadata: { uri: '', customData: '' }, // Optional metadata
        },
    ],
    // ... other fields
};
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `denom` | string | yes | Base denom. Full x/bank denom becomes `badges:<collectionId>:<denom>`. May contain `{id}`. |
| `conversion` | `ConversionWithoutDenom` | yes | `sideA.amount` wrapped units = `sideB[]` token balances |
| `symbol` | string | yes | On-chain symbol used for identification. May contain `{id}`. |
| `denomUnits` | `DenomUnit[]` | no | Display units with `decimals`, `symbol`, `isDefaultDisplay`, optional `metadata` |
| `allowOverrideWithAnyValidToken` | bool | no | Accept any single valid token ID and override `sideB[].tokenIds` at transfer time |
| `metadata` | `PathMetadata` | no | `uri` and `customData` |
| `address` | string | derived | The wrapper address, generated from `denom`. Not present on alias paths. |

## Wrapper paths versus alias paths

The chain keeps two separate path types.

Cosmos coin wrapper paths do real wrapping:

- Purpose: convert tokens to native Cosmos SDK coins and back.
- Behavior: tokens burn when wrapping and coins mint; coins burn when unwrapping and tokens mint.
- Use case: IBC transfers and Cosmos ecosystem compatibility.
- Storage: the `cosmosCoinWrapperPaths` array.
- Extra fields: `address` (the wrapper address) and `allowOverrideWithAnyValidToken`.

```ts
{
    denom: 'utoken',
    conversion: {
        sideA: {
            amount: '1', // Required: amount of wrapped coin
        },
        sideB: [
            {
                amount: 1n,
                tokenIds: [{ start: 1n, end: 100n }],
                ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
            },
        ],
    },
    symbol: 'TOKEN',
    denomUnits: [
        {
            decimals: 6n,
            symbol: 'TOKEN',
            isDefaultDisplay: true,
        },
    ],
    allowOverrideWithAnyValidToken: false,
    metadata: { uri: '', customData: '' }, // Optional PathMetadata
}
```

Alias paths do no wrapping:

- Purpose: alias denom support (`badgeslp:COLLECTION_ID:denom`).
- Behavior: no mint or burn; the alias is informational.
- Use case: liquidity pools and DeFi code that expects `sdk.Coin`.
- Storage: the `aliasPaths` array, separate from wrapper paths.
- No `address` and no `allowOverrideWithAnyValidToken` fields.

```ts
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
                ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
            },
        ],
    },
    symbol: 'TOKEN',
    denomUnits: [
        {
            decimals: 6n,
            symbol: 'TOKEN',
            isDefaultDisplay: true,
        },
    ],
    metadata: { uri: '', customData: '' }, // Optional PathMetadata
}
```

See [Alias denoms](alias-denoms.md) for the alias side.

## Wrapper address generation

The wrapper address derives from the base denom only, not from the full `badges:collectionId:denom` string.

```ts
import { generateAliasAddressForDenom } from 'bitbadges';

const denom = 'utoken';
const wrapperAddress = generateAliasAddressForDenom(denom);
console.log('Wrapper Address:', wrapperAddress);
```

## Conversion structure

Wrapper paths and alias paths both use `ConversionWithoutDenom`. The denom is stored at the path level, which is why the type carries "WithoutDenom".

```ts
{
    conversion: {
        sideA: {
            amount: '1', // Required: amount of wrapped/alias coin (Uint type)
        },
        sideB: [
            // Balances[] that define which tokens participate
            {
                amount: 1n,
                tokenIds: [{ start: 1n, end: 100n }],
                ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
            },
        ],
    },
}
```

- `sideA.amount` is the number of wrapped or alias units. It is required and cannot be `"0"` or nil.
- `sideB` is the `Balance[]` that takes part in the conversion.
- Rate: `sideA.amount` wrapped units = `sideB[]` tokens.

With `sideA.amount = "1"` and `sideB = [{ amount: 1n, ... }]`, one wrapped coin equals one token (1:1). With `sideA.amount = "100"` and the same `sideB`, 100 wrapped coins equal one token (100:1).

## Configuration fields

### Denom

The full Cosmos denom is `badges:collectionId:denom`. `badges:` is the wrapper prefix; `badgeslp:` is the alias prefix.

```ts
{
    denom: 'utoken', // Base denom
    // Full denom: badges:1:utoken
}
```

### Conversion

```ts
{
    conversion: {
        sideA: {
            amount: '1', // Required: amount of wrapped coin
        },
        sideB: [
            {
                amount: 1n, // Token amount
                tokenIds: [{ start: 1n, end: 100n }], // Token IDs that can wrap
                ownershipTimes: [{ start: 1n, end: 18446744073709551615n }], // Ownership times
            },
        ],
    },
}
```

Rate: `conversion.sideA.amount` wrapped coin = `conversion.sideB[]` tokens.

### Denom units

Several display units can describe the same base unit.

```ts
{
    denomUnits: [
        {
            decimals: 3n, // 3 decimal places
            symbol: 'mtoken', // Milli-token
            isDefaultDisplay: false,
            metadata: { uri: '', customData: '' }, // Optional PathMetadata
        },
        {
            decimals: 6n, // 6 decimal places
            symbol: 'TOKEN', // Full token
            isDefaultDisplay: true, // Shown by default
            metadata: { uri: '', customData: '' }, // Optional PathMetadata
        },
    ],
}
```

- `utoken` is the base unit (0 decimals).
- `mtoken` is 1,000 `utoken` (3 decimals).
- `TOKEN` is 1,000,000 `utoken` (6 decimals, default display).

Each `DenomUnit` carries an optional `metadata` field of type `PathMetadata`.

### Allow override with any valid token

When `true`, the wrapper accepts any single token ID inside the collection's `validTokenIds`.

```ts
{
    denom: 'utoken',
    conversion: {
        sideA: {
            amount: '1',
        },
        sideB: [
            {
                amount: 1n,
                tokenIds: [{ start: 1n, end: 1n }], // Overridden during transfer
                ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
            },
        ],
    },
    allowOverrideWithAnyValidToken: true, // Accept any valid token ID
}
```

1. A user transfers token ID 5 to the wrapper.
2. The chain checks that token ID 5 is in `validTokenIds`.
3. The chain replaces `conversion.sideB[].tokenIds` with `[{ start: 5n, end: 5n }]` for this transfer and ignores the stored values.
4. The conversion proceeds with token ID 5.

### `{id}` placeholder

`{id}` in `denom` or `symbol` is replaced by the actual token ID.

```ts
{
    denom: 'utoken{id}', // Dynamic denom
    symbol: 'TOKEN:{id}',
    conversion: {
        sideA: {
            amount: '1',
        },
        sideB: [
            {
                amount: 1n,
                tokenIds: [{ start: 1n, end: 1n }],
                ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
            },
        ],
    },
    allowOverrideWithAnyValidToken: true,
}
```

Transferring token ID 5 produces the denom `utoken5`.

### Metadata

```ts
{
    metadata: {
        uri: 'ipfs://Qm...', // Optional URI to hosted JSON metadata
        customData: '{"key": "value"}', // Optional custom JSON data
    },
}
```

The hosted JSON is usually `{ name, image, description }`; the image is the main use. The on-chain `symbol` identifies the path, not the metadata name. Metadata is optional on the path and on each `DenomUnit`.

## Transferability requirements

A wrapper address follows the same approval rules as any other address. You can gate by user, rate-limit, or apply any criteria.

```ts
// Example: Rate-limited wrapping
const collectionApprovals = [
    {
        fromListId: 'AllWithoutMint',
        toListId: wrapperAddress,
        initiatedByListId: 'All',
        transferTimes: [{ start: 1n, end: 18446744073709551615n }],
        tokenIds: [{ start: 1n, end: 100n }],
        ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
        approvalId: 'wrap-approval',
        version: 0n,
        approvalCriteria: {
            allowSpecialWrapping: true, // Required for wrapper path operations
            mustPrioritize: true, // Chain-enforced: required for allowSpecialWrapping
            maxNumTransfers: {
                perInitiatedByAddressMaxNumTransfers: 10n, // 10 wraps per day
                // ... reset time intervals
            },
        },
    },
    {
        fromListId: wrapperAddress,
        toListId: 'All',
        initiatedByListId: 'All',
        transferTimes: [{ start: 1n, end: 18446744073709551615n }],
        tokenIds: [{ start: 1n, end: 100n }],
        ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
        approvalId: 'unwrap-approval',
        version: 0n,
        approvalCriteria: {
            allowSpecialWrapping: true, // Required for wrapper path operations
            mustPrioritize: true, // Chain-enforced: required for allowSpecialWrapping
            // Override wrapper's outgoing approvals (wrapper is the sender for unwrapping)
            overridesFromOutgoingApprovals: true,
        },
    },
];
```

## Conversion process

### Token to coin (wrapping)

1. The user transfers tokens to the wrapper address.
2. The chain processes the denom (replaces `{id}`, validates the override if enabled).
3. The chain burns the tokens from the user's balance.
4. The chain mints the equivalent native coins.
5. The coins are credited to the user's account.

```ts
// Wrapping tokens
// Wrapping/unwrapping requires prioritized approvals (not compatible with auto-scan mode)
const wrapTokens: MsgTransferTokens = {
    creator: 'bb1user...',
    collectionId: '1',
    transfers: [
        {
            from: 'bb1user...',
            toAddresses: [wrapperAddress],
            balances: [
                {
                    amount: 10n,
                    tokenIds: [{ start: 1n, end: 100n }],
                    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
                },
            ],
            prioritizedApprovals: [
                {
                    approvalId: 'wrap-approval',
                    approvalLevel: 'collection',
                    approverAddress: '',
                    version: 0n,
                },
            ],
            onlyCheckPrioritizedCollectionApprovals: true,
        },
    ],
};

// Result: User receives 10 badges:1:utoken coins (based on conversion.sideA.amount = 1)
// 10 tokens are burned (based on conversion.sideB balances)
```

### Coin to token (unwrapping)

Unwrapping also uses `MsgTransferTokens`. The user initiates a transfer on behalf of the wrapper address.

1. The user submits `MsgTransferTokens` with the wrapper address as `from`.
2. The chain processes the denom (replaces `{id}`, validates the override if enabled).
3. The chain burns the native coins from the wrapper address.
4. The chain mints the equivalent tokens.
5. The tokens are credited to the user's balance.

```ts
// Unwrapping coins
// Wrapping/unwrapping requires prioritized approvals (not compatible with auto-scan mode)
// You initiate a transfer on behalf of the wrapper address
const unwrapCoins: MsgTransferTokens = {
    creator: 'bb1user...',
    collectionId: '1',
    transfers: [
        {
            from: wrapperAddress, // Transfer from wrapper address
            toAddresses: ['bb1user...'], // To user
            balances: [
                {
                    amount: 10n,
                    tokenIds: [{ start: 1n, end: 100n }],
                    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
                },
            ],
            prioritizedApprovals: [
                {
                    approvalId: 'unwrap-approval',
                    approvalLevel: 'collection',
                    approverAddress: '',
                    version: 0n,
                },
            ],
            onlyCheckPrioritizedCollectionApprovals: true,
        },
    ],
};

// Result: User receives 10 tokens (based on conversion.sideB balances)
// 10 badges:1:utoken coins are burned from wrapper address (based on conversion.sideA.amount = 1)
```

## Use cases

### IBC transfers

Wrap, then send the x/bank coin over ICS-20.

```ts
// Wrap tokens for IBC transfer
// Requires prioritized approvals
// The conversion rate is defined in the wrapper path's conversion field
const wrapForIBC: MsgTransferTokens = {
    creator: 'bb1user...',
    collectionId: '1',
    transfers: [
        {
            from: 'bb1user...',
            toAddresses: [wrapperAddress],
            balances: [
                {
                    amount: 100n,
                    tokenIds: [{ start: 1n, end: 100n }],
                    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
                },
            ],
            prioritizedApprovals: [
                {
                    approvalId: 'wrap-approval',
                    approvalLevel: 'collection',
                    approverAddress: '',
                    version: 0n,
                },
            ],
            onlyCheckPrioritizedCollectionApprovals: true,
        },
    ],
};

// Transfer wrapped coins via IBC
const ibcTransfer = {
    sourcePort: 'transfer',
    sourceChannel: 'channel-0',
    token: {
        denom: 'badges:1:utoken',
        amount: '100',
    },
    sender: 'bb1user...',
    receiver: 'cosmos1...',
};
```

### DeFi integration

```ts
// Add wrapped tokens to liquidity pool
const addLiquidity = {
    poolId: '1',
    sender: 'bb1user...',
    tokenInMaxs: [
        {
            denom: 'badges:1:utoken',
            amount: '1000000',
        },
        {
            denom: 'uatom',
            amount: '500000',
        },
    ],
};
```

## Permission control

The `canAddMoreCosmosCoinWrapperPaths` collection permission controls when the manager may add wrapper paths. It is an `ActionPermission` with time-based controls.

- Empty or nil means adding paths is allowed (neutral state).
- Collections migrated from v21 have empty permissions, so adding paths is allowed by default.

Allow at all times:

```ts
const collectionPermissions: CollectionPermissions<bigint> = {
    canAddMoreCosmosCoinWrapperPaths: [], // Empty = allowed by default
};
```

Explicitly permit forever:

```ts
const collectionPermissions: CollectionPermissions<bigint> = {
    canAddMoreCosmosCoinWrapperPaths: [
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
    canAddMoreCosmosCoinWrapperPaths: [
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
    canAddMoreCosmosCoinWrapperPaths: [
        {
            permanentlyPermittedTimes: [
                { start: 1704067200000n, end: 1735689600000n },
            ],
            permanentlyForbiddenTimes: [],
        },
    ],
};
```

When `MsgUniversalUpdateCollection` carries `cosmosCoinWrapperPathsToAdd`, the chain checks `canAddMoreCosmosCoinWrapperPaths` before it processes the paths. A failed check rejects the transaction. The check happens before the paths are added, but the permission itself can still be updated at the end of the same transaction when `updateCollectionPermissions` is `true`. Paths can be added but never edited.

## Differences from backed paths

| Feature | Wrapper path | Backed path |
| --- | --- | --- |
| Minting | Mints and burns a new denom | No mint or burn; uses an existing IBC denom |
| Denom source | Generated | Existing IBC denom |
| Configuration | Paths can be added, never edited | Collection invariant, set once |
| Mint address | Enabled | Disabled |

## Related

- [Wrap to an IBC denom](../../guides/wrap-to-an-ibc-denom.md)
- [Backed minting](backed-minting.md)
- [Special address flags](../approval-criteria/special-address-flags.md)
- [MsgTransferTokens](../messages/msg-transfer-tokens.md)
