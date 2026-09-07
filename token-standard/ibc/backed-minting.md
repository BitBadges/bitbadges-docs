---
description: "Backed paths back every token 1:1 with an existing IBC coin through a protocol-controlled special address. Invariant setup, conversion, Mint rules, approvals."
---

# Backed Minting

A backed path lets a collection issue tokens against an existing IBC coin (a standard Cosmos SDK coin). A special address escrows the IBC coins and converts in both directions. This is how you reverse-wrap an ICS-20 asset such as USDC or ATOM with added compliance.

- Back tokens: send tokens to the special address and receive IBC coins.
- Unback tokens: send IBC coins to the special address and receive tokens.

## Shape

The path is a collection invariant under `invariants.cosmosCoinBackedPath`.

A complete `MsgCreateCollection` for a collection backed by USDC. The invariant is open; `collectionApprovals` is empty because Mint is never a valid sender here (see below):

```json fold=3-17,21-55
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "defaultBalances": {
    "balances": [],
    "outgoingApprovals": [],
    "incomingApprovals": [],
    "autoApproveSelfInitiatedOutgoingTransfers": true,
    "autoApproveSelfInitiatedIncomingTransfers": true,
    "autoApproveAllIncomingTransfers": true,
    "userPermissions": {
      "canUpdateOutgoingApprovals": [],
      "canUpdateIncomingApprovals": [],
      "canUpdateAutoApproveSelfInitiatedOutgoingTransfers": [],
      "canUpdateAutoApproveSelfInitiatedIncomingTransfers": [],
      "canUpdateAutoApproveAllIncomingTransfers": []
    }
  },
  "validTokenIds": [
    { "start": "1", "end": "1" }
  ],
  "collectionPermissions": {
    "canDeleteCollection": [],
    "canArchiveCollection": [],
    "canUpdateStandards": [],
    "canUpdateCustomData": [],
    "canUpdateManager": [],
    "canUpdateCollectionMetadata": [],
    "canUpdateValidTokenIds": [],
    "canUpdateTokenMetadata": [],
    "canUpdateCollectionApprovals": [],
    "canAddMoreAliasPaths": [],
    "canAddMoreCosmosCoinWrapperPaths": []
  },
  "manager": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionMetadata": {
    "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json",
    "customData": ""
  },
  "tokenMetadata": [
    {
      "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json",
      "customData": "",
      "tokenIds": [
        { "start": "1", "end": "1" }
      ]
    }
  ],
  "customData": "",
  "collectionApprovals": [],
  "standards": [
    "Smart Token"
  ],
  "isArchived": false,
  "mintEscrowCoinsToTransfer": [],
  "cosmosCoinWrapperPathsToAdd": [],
  "invariants": {
    "noCustomOwnershipTimes": false,
    "maxSupplyPerId": "0",
    "cosmosCoinBackedPath": {
      "conversion": {
        "sideA": {
          "amount": "1000000",
          "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"
        },
        "sideB": [
          {
            "amount": "1",
            "tokenIds": [
              { "start": "1", "end": "1" }
            ],
            "ownershipTimes": [
              { "start": "1", "end": "18446744073709551615" }
            ]
          }
        ]
      }
    },
    "noForcefulPostMintTransfers": false,
    "disablePoolCreation": false,
    "evmQueryChallenges": []
  },
  "aliasPathsToAdd": []
}
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

The complete `invariants` object in raw JSON:

```json
{
  "noCustomOwnershipTimes": false,
  "maxSupplyPerId": "0",
  "cosmosCoinBackedPath": {
    "conversion": {
      "sideA": {
        "amount": "1000000",
        "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"
      },
      "sideB": [
        {
          "amount": "1",
          "tokenIds": [
            { "start": "1", "end": "1" }
          ],
          "ownershipTimes": [
            { "start": "1", "end": "18446744073709551615" }
          ]
        }
      ]
    }
  },
  "noForcefulPostMintTransfers": false,
  "disablePoolCreation": false,
  "evmQueryChallenges": []
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | string | derived | Special address, generated from `conversion.sideA.denom` |
| `conversion.sideA.amount` | string | yes | IBC coin amount on side A |
| `conversion.sideA.denom` | string | yes | Existing IBC denom with the `ibc/` prefix |
| `conversion.sideB` | `Balance[]` | yes | Tokens that side A backs |

{% hint style="info" %}
Ask your agent: "Create a smart token backed 1:1 by USDC (ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8) where each address can unback at most 10 times per day." The MCP builder tools (`generate_backing_address, set_invariants, add_approval`) produce the objects on this page.
{% endhint %}

## Special Address

Each backed path has one special address derived from `conversion.sideA.denom`.

```ts
import { generateAliasAddressForIBCBackedDenom } from 'bitbadges';

const ibcDenom = 'ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8';
const specialAddress = generateAliasAddressForIBCBackedDenom(ibcDenom);
console.log('Special Address:', specialAddress);
```

Properties:

- Deterministic hash of the IBC denom.
- The intermediary for every conversion.
- Marked as a reserved protocol address, which prevents accidental use elsewhere and keeps the chain's handling consistent.
- Holds the IBC coins that back the tokens.

The special address technically has unlimited token balances, but it only allows transfers when adequate IBC coins are present and sent or received. Think of it as an external contract that updates its own approvals. Conversions are initiated by the user and approved by the address itself.

## Conversion Mechanism

The conversion is `Conversion` (with denom), because the denom is part of the conversion, unlike wrapper paths. The rate is:

```text
conversion.sideA (amount, denom) = conversion.sideB[] (x/tokenization)
Ex: { amount: "1000000", denom: "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8" } = [{ amount: 1n, tokenIds: [{ start: 1n, end: 1n }], ownershipTimes: UintRangeArray.FullRanges() }]
```

```ts
// Configuration
const backedPath = {
    conversion: {
        sideA: {
            amount: '1000000', // IBC coin amount (from old ibcAmount)
            denom: 'ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8', // IBC denomination (from old ibcDenom)
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

## Configuration Rules

Backed paths are collection invariants:

- Set only at collection creation.
- Cannot be modified afterward.
- Exactly one backed path per collection.

A fuller creation example with 100 token IDs:

```json fold=3-17,21-33,35-55
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "defaultBalances": {
    "balances": [],
    "outgoingApprovals": [],
    "incomingApprovals": [],
    "autoApproveSelfInitiatedOutgoingTransfers": true,
    "autoApproveSelfInitiatedIncomingTransfers": true,
    "autoApproveAllIncomingTransfers": true,
    "userPermissions": {
      "canUpdateOutgoingApprovals": [],
      "canUpdateIncomingApprovals": [],
      "canUpdateAutoApproveSelfInitiatedOutgoingTransfers": [],
      "canUpdateAutoApproveSelfInitiatedIncomingTransfers": [],
      "canUpdateAutoApproveAllIncomingTransfers": []
    }
  },
  "validTokenIds": [
    { "start": "1", "end": "100" }
  ],
  "collectionPermissions": {
    "canDeleteCollection": [],
    "canArchiveCollection": [],
    "canUpdateStandards": [],
    "canUpdateCustomData": [],
    "canUpdateManager": [],
    "canUpdateCollectionMetadata": [],
    "canUpdateValidTokenIds": [],
    "canUpdateTokenMetadata": [],
    "canUpdateCollectionApprovals": [],
    "canAddMoreAliasPaths": [],
    "canAddMoreCosmosCoinWrapperPaths": []
  },
  "manager": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionMetadata": {
    "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json",
    "customData": ""
  },
  "tokenMetadata": [
    {
      "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json",
      "customData": "",
      "tokenIds": [
        { "start": "1", "end": "100" }
      ]
    }
  ],
  "customData": "",
  "collectionApprovals": [],
  "standards": [
    "Smart Token"
  ],
  "isArchived": false,
  "mintEscrowCoinsToTransfer": [],
  "cosmosCoinWrapperPathsToAdd": [],
  "invariants": {
    "noCustomOwnershipTimes": false,
    "maxSupplyPerId": "0",
    "cosmosCoinBackedPath": {
      "conversion": {
        "sideA": {
          "amount": "1000000",
          "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"
        },
        "sideB": [
          {
            "amount": "1",
            "tokenIds": [
              { "start": "1", "end": "100" }
            ],
            "ownershipTimes": [
              { "start": "1", "end": "18446744073709551615" }
            ]
          }
        ]
      }
    },
    "noForcefulPostMintTransfers": false,
    "disablePoolCreation": false,
    "evmQueryChallenges": []
  },
  "aliasPathsToAdd": []
}
```

The escrow address derives from the denom string. A backed collection cannot be repointed to another denom later. Pick the canonical denom at creation. See [Supported Denoms](../../chain/supported-denoms.md).

## Mint Address Restrictions

When a backed path is set:

- Transfers from the `Mint` address are never allowed.
- Every mint goes through the backed path.
- Collection approvals cannot list `Mint` in `fromListId`.

This stops mints that bypass the backing and desync supply. For a hybrid design, skip the invariant and build the logic with custom transferability instead.

```ts
// Invalid: Mint cannot be a sender when cosmosCoinBackedPath is set
const invalidApproval: CollectionApproval<bigint> = {
  fromListId: 'Mint',
  toListId: 'All',
  initiatedByListId: 'All',
  transferTimes: [{ start: 1n, end: 18446744073709551615n }],
  tokenIds: [{ start: 1n, end: 100n }],
  ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
  approvalId: 'mint',
  version: 0n,
  approvalCriteria: {
    overridesFromOutgoingApprovals: true,
  },
};

// Valid: the special address is the only source of new tokens
const validApproval: CollectionApproval<bigint> = {
  fromListId: specialAddress,
  toListId: 'All',
  initiatedByListId: 'All',
  transferTimes: [{ start: 1n, end: 18446744073709551615n }],
  tokenIds: [{ start: 1n, end: 100n }],
  ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
  approvalId: 'backing-approval',
  version: 0n,
  approvalCriteria: {
    allowBackedMinting: true,
    mustPrioritize: true,
  },
};
```

## Transferability Requirements

The special address follows the same approval rules as any other address. You can gate by user, rate-limit, require KYC on the way out (for example a $2500 per day withdrawal limit), or apply any other criteria. Every approval used for a backed operation must set `allowBackedMinting: true` in `approvalCriteria`. See [Special Address Flags](../approval-criteria/special-address-flags.md).

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
                overallMaxNumTransfers: 0n,
                perToAddressMaxNumTransfers: 0n,
                perFromAddressMaxNumTransfers: 0n,
                perInitiatedByAddressMaxNumTransfers: 10n, // 10 backs per day
                amountTrackerId: 'backing-daily',
                resetTimeIntervals: { startTime: 1788739200000n, intervalLength: 86400000n },
            },
        },
    },
];
```

## How the Chain Detects a Conversion

`MsgTransferTokens` is the entry point. The chain checks:

- `to` equals the backed path address: backing.
- `from` equals the backed path address: unbacking.

The bank module alone cannot trigger a conversion because it does not know about backed paths. To back or unback, send a `MsgTransferTokens` to or from the special address. The chain manages the special address's own approvals. The approval must be prioritized because this is a special context.

State:

- Token balances are managed normally.
- IBC coin balances are managed by the bank module.
- The special address holds the escrowed IBC coins.

Every conversion is atomic. It succeeds completely or fails completely, with no partial state.

## Example: Backing Tokens

```ts
// User sends tokens to special address
// IBC backed path operations require prioritized approvals (not compatible with auto-scan mode)
// The initiator must equal the sender/recipient - no doing this on behalf of another user
const backTokens: MsgTransferTokens = {
    creator: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', // Must equal from address
    collectionId: '1',
    transfers: [
        {
            from: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', // Must equal creator
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

## Example: Unbacking Tokens

The chain handles the special address's approvals. The user only needs enough IBC coins to unback.

```ts
// User initiates transfer on behalf of special address to receive tokens
// IBC backed path operations require prioritized approvals (not compatible with auto-scan mode)
// The initiator must equal the recipient - no doing this on behalf of another user
const unbackTokens: MsgTransferTokens = {
    creator: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', // Must equal toAddress
    collectionId: '1',
    transfers: [
        {
            from: specialAddress, // Transfer from special IBC backed path address
            toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'], // Must equal creator
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

## Differences from Wrapper Paths

The main difference is which denom is used for minting.

| Feature | Backed path | Wrapper path |
| --- | --- | --- |
| Minting | No mint or burn; uses the existing IBC denom | Mints and burns a generated denom |
| Denom source | Existing IBC denom | Generated denom |
| Configuration | Collection invariant | Paths can be added, never edited |
| Standard minting | Disabled | Enabled |

## Related

- [Cosmos Coin Wrapper Paths](cosmos-coin-wrapper-paths.md)
- [Special Address Flags](../approval-criteria/special-address-flags.md)
- [Invariants](../approval-criteria/invariants.md)
- [Smart Tokens and Vaults](../../guides/smart-tokens-and-vaults.md)
