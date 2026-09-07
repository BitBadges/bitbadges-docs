---
description: "Backed paths back every token 1:1 with an existing IBC coin through a protocol-controlled special address. Invariant setup, conversion, Mint rules, approvals."
---

# Backed minting

A backed path lets a collection issue tokens against an existing IBC coin (a standard Cosmos SDK coin). A special address escrows the IBC coins and converts in both directions. This is how you reverse-wrap an ICS-20 asset such as USDC or ATOM with added compliance.

- Back tokens: send tokens to the special address and receive IBC coins.
- Unback tokens: send IBC coins to the special address and receive tokens.

## Shape

The path is a collection invariant under `invariants.cosmosCoinBackedPath`.

```ts
// Collection with IBC backed path
const collection: MsgCreateCollection = {
    creator: 'bb1kj9kt5y64n5a8677fhjqnmcc24ht2vy9atmdls',
    collectionId: '0', // 0 for new collection
    validTokenIds: [{ start: 1n, end: 1n }],
    invariants: {
        cosmosCoinBackedPath: {
            // address: auto-generated from conversion.sideA.denom
            conversion: {
                sideA: {
                    amount: '1000000', // IBC coin amount (from old ibcAmount)
                    denom: 'ibc/1234567890ABCDEF', // IBC denomination (from old ibcDenom)
                },
                sideB: [
                    {
                        amount: 1n,
                        tokenIds: [{ start: 1n, end: 1n }],
                        ownershipTimes: [
                            { start: 1n, end: 18446744073709551615n },
                        ],
                    },
                ],
            },
        },
        noCustomOwnershipTimes: false,
        maxSupplyPerId: '0',
        noForcefulPostMintTransfers: false,
        disablePoolCreation: false,
        evmQueryChallenges: [],
    },
    // ... other fields (collectionPermissions, manager, etc.)
};
```

Proto definition:

```proto
message CosmosCoinBackedPath {
  string address = 1;              // Auto-generated special address (from conversion.sideA.denom)
  Conversion conversion = 2;       // Conversion structure with sideA (amount+denom) and sideB (balances)
}

message Conversion {
  ConversionSideAWithDenom sideA = 1;  // Contains amount + denom (from old ibcAmount + ibcDenom)
  repeated Balance sideB = 2;          // Token balances (from old balances field)
}

message ConversionSideAWithDenom {
  string amount = 1;  // IBC coin amount (from old ibcAmount)
  string denom = 2;   // IBC denomination (from old ibcDenom)
}
```

Raw JSON form:

```json
{
    "invariants": {
        "cosmosCoinBackedPath": {
            "conversion": {
                "sideA": {
                    "amount": "1000000",
                    "denom": "ibc/1234567890ABCDEF"
                },
                "sideB": [
                    {
                        "amount": "1",
                        "tokenIds": [{ "start": "1", "end": "1" }],
                        "ownershipTimes": [
                            { "start": "1", "end": "18446744073709551615" }
                        ]
                    }
                ]
            }
        }
    }
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | string | derived | Special address, generated from `conversion.sideA.denom` |
| `conversion.sideA.amount` | string | yes | IBC coin amount on side A |
| `conversion.sideA.denom` | string | yes | Existing IBC denom (`ibc/...`) |
| `conversion.sideB` | `Balance[]` | yes | Tokens that side A backs |

## Special address

Each backed path has one special address derived from `conversion.sideA.denom`.

```ts
import { generateAliasAddressForIBCBackedDenom } from 'bitbadges';

const ibcDenom = 'ibc/1234567890ABCDEF';
const specialAddress = generateAliasAddressForIBCBackedDenom(ibcDenom);
console.log('Special Address:', specialAddress);
```

Properties:

- Deterministic hash of the IBC denom.
- The intermediary for every conversion.
- Marked as a reserved protocol address, which prevents accidental use elsewhere and keeps the chain's handling consistent.
- Holds the IBC coins that back the tokens.

The special address technically has unlimited token balances, but it only allows transfers when adequate IBC coins are present and sent or received. Think of it as an external contract that updates its own approvals. Conversions are initiated by the user and approved by the address itself.

## Conversion mechanism

The conversion is `Conversion` (with denom), because the denom is part of the conversion, unlike wrapper paths. The rate is:

```text
conversion.sideA (amount, denom) = conversion.sideB[] (x/tokenization)
Ex: { amount: "1000000", denom: "ibc/1234..." } = [{ amount: 1n, tokenIds: [{ start: 1n, end: 1n }], ownershipTimes: UintRangeArray.FullRanges() }]
```

```ts
// Configuration
const backedPath = {
    conversion: {
        sideA: {
            amount: '1000000', // IBC coin amount (from old ibcAmount)
            denom: 'ibc/1234567890ABCDEF', // IBC denomination (from old ibcDenom)
        },
        sideB: [
            {
                amount: 1n,
                tokenIds: [{ start: 1n, end: 1n }],
                ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
            },
        ],
    },
};
```

- `sideA` holds `amount` and `denom` (the old `ibcAmount` and `ibcDenom` fields).
- `sideB` is the `Balance[]` for the tokens (the old `balances` field).
- Rate: `conversion.sideA.amount` of `conversion.sideA.denom` = `conversion.sideB[]` tokens.

You cannot fractionalize a conversion. Make the units as small as needed to get the granularity you want.

## Configuration rules

Backed paths are collection invariants:

- Set only at collection creation.
- Cannot be modified afterward.
- Exactly one backed path per collection.

A fuller creation example with 100 token IDs:

```ts
const collection: MsgCreateCollection = {
    creator: 'bb1kj9kt5y64n5a8677fhjqnmcc24ht2vy9atmdls',
    collectionId: '0', // 0 for new collection
    validTokenIds: [{ start: 1n, end: 100n }],
    invariants: {
        cosmosCoinBackedPath: {
            conversion: {
                sideA: {
                    amount: '1000000', // IBC coin amount
                    denom: 'ibc/1234567890ABCDEF', // IBC denomination
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
        },
        noCustomOwnershipTimes: false,
        maxSupplyPerId: '0',
        noForcefulPostMintTransfers: false,
        disablePoolCreation: false,
        evmQueryChallenges: [],
    },
    collectionPermissions: {
        // ... permission fields
    },
    manager: 'bb1kj9kt5y64n5a8677fhjqnmcc24ht2vy9atmdls',
    // ... other collection fields
};
```

The escrow address derives from the denom string. A backed collection cannot be repointed to another denom later. Pick the canonical denom at creation. See [Supported denoms](../../chain/supported-denoms.md).

## Mint address restrictions

When a backed path is set:

- Transfers from the `Mint` address are never allowed.
- Every mint goes through the backed path.
- Collection approvals cannot list `Mint` in `fromListId`.

This stops mints that bypass the backing and desync supply. For a hybrid design, skip the invariant and build the logic with custom transferability instead.

```ts
// Invalid - Cannot use Mint address with IBC backed path
const invalidApproval = {
    fromListId: 'Mint', // Not allowed when cosmosCoinBackedPath is set
    toListId: 'All',
    // ...
};

// Valid - Must use special address for minting
const validApproval = {
    fromListId: specialAddress, // Use the IBC backed path address
    toListId: 'All',
    // ...
};
```

## Transferability requirements

The special address follows the same approval rules as any other address. You can gate by user, rate-limit, require KYC on the way out (for example a $2500 per day withdrawal limit), or apply any other criteria. Every approval used for a backed operation must set `allowBackedMinting: true` in `approvalCriteria`. See [Special address flags](../approval-criteria/special-address-flags.md).

```ts
// Example: Rate-limited backing
const collectionApprovals = [
    {
        fromListId: specialAddress,
        toListId: 'All',
        initiatedByListId: 'All',
        transferTimes: [{ start: 1n, end: 18446744073709551615n }],
        tokenIds: [{ start: 1n, end: 100n }],
        ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
        approvalId: 'backing-approval',
        version: 0n,
        approvalCriteria: {
            allowBackedMinting: true, // Required for IBC backed path operations
            // overridesFromOutgoingApprovals is irrelevant: backing addresses are protocol-controlled with auto-set approvals
            mustPrioritize: true, // Required for IBC backed operations
            maxNumTransfers: {
                perInitiatedByAddressMaxNumTransfers: 10n, // 10 backs per day
                // ... reset time intervals
            },
        },
    },
];
```

## How the chain detects a conversion

`MsgTransferTokens` is the entry point. The chain checks:

- `to` equals the backed path address: backing.
- `from` equals the backed path address: unbacking.

The bank module alone cannot trigger a conversion because it does not know about backed paths. To back or unback, send a `MsgTransferTokens` to or from the special address. The chain manages the special address's own approvals. The approval must be prioritized because this is a special context.

State:

- Token balances are managed normally.
- IBC coin balances are managed by the bank module.
- The special address holds the escrowed IBC coins.

Every conversion is atomic. It succeeds completely or fails completely, with no partial state.

## Example: backing tokens

```ts
// User sends tokens to special address
// IBC backed path operations require prioritized approvals (not compatible with auto-scan mode)
// The initiator must equal the sender/recipient - no doing this on behalf of another user
const backTokens: MsgTransferTokens = {
    creator: 'bb1user...', // Must equal from address
    collectionId: '1',
    transfers: [
        {
            from: 'bb1user...', // Must equal creator
            toAddresses: [specialAddress], // Special IBC backed path address
            balances: [
                {
                    amount: 5n,
                    tokenIds: [{ start: 1n, end: 1n }],
                    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
                },
            ],
            prioritizedApprovals: [
                {
                    approvalId: 'backing-approval',
                    approvalLevel: 'collection',
                    approverAddress: '',
                    version: 0n,
                },
            ],
            onlyCheckPrioritizedCollectionApprovals: true,
        },
    ],
};

// Result: User receives corresponding IBC coins automatically based on the conversion rate
```

## Example: unbacking tokens

The chain handles the special address's approvals. The user only needs enough IBC coins to unback.

```ts
// User initiates transfer on behalf of special address to receive tokens
// IBC backed path operations require prioritized approvals (not compatible with auto-scan mode)
// The initiator must equal the recipient - no doing this on behalf of another user
const unbackTokens: MsgTransferTokens = {
    creator: 'bb1user...', // Must equal toAddress
    collectionId: '1',
    transfers: [
        {
            from: specialAddress, // Transfer from special IBC backed path address
            toAddresses: ['bb1user...'], // Must equal creator
            balances: [
                {
                    amount: 5n,
                    tokenIds: [{ start: 1n, end: 1n }],
                    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
                },
            ],
            prioritizedApprovals: [
                {
                    approvalId: 'unbacking-approval',
                    approvalLevel: 'collection',
                    approverAddress: '',
                    version: 0n,
                },
            ],
            onlyCheckPrioritizedCollectionApprovals: true,
        },
    ],
};

// Result: User receives 5 tokens
// Corresponding IBC coins are deducted from special address
```

## Differences from wrapper paths

The main difference is which denom is used for minting.

| Feature | Backed path | Wrapper path |
| --- | --- | --- |
| Minting | No mint or burn; uses the existing IBC denom | Mints and burns a generated denom |
| Denom source | Existing IBC denom | Generated denom |
| Configuration | Collection invariant | Paths can be added, never edited |
| Standard minting | Disabled | Enabled |

## Related

- [Cosmos coin wrapper paths](cosmos-coin-wrapper-paths.md)
- [Special address flags](../approval-criteria/special-address-flags.md)
- [Invariants](../approval-criteria/invariants.md)
- [Smart tokens and vaults](../../guides/smart-tokens-and-vaults.md)
