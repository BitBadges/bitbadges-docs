---
description: "evmQueryChallenges: gate an approval on a read-only EVM staticcall whose result must compare as expected, with placeholders for the transfer parties."
---

# EVM query challenges

An EVM query challenge calls a contract with `staticcall` before the transfer and compares the return value against an expected one. It lets an approval depend on any EVM state: an ERC-20 balance, an NFT owner, a screening contract, a custom compliance oracle.

## Shape

```json
{
  "evmQueryChallenges": [
    {
      "contractAddress": "0x1234567890123456789012345678901234567890",
      "calldata": "70a08231000000000000000000000000$initiator",
      "expectedResult": "0000000000000000000000000000000000000000000000000000000000000001",
      "comparisonOperator": "gte",
      "gasLimit": "250000",
      "uri": "",
      "customData": ""
    }
  ]
}
```

```ts
interface EVMQueryChallenge {
  contractAddress: string;
  calldata: string;
  expectedResult?: string;
  comparisonOperator?: string;
  gasLimit: string;
  uri?: string;
  customData?: string;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contractAddress` | string | yes | `0x` hex address or `bb1` address of the contract |
| `calldata` | string | yes | Function selector plus ABI-encoded arguments, hex without `0x`. Placeholders allowed. |
| `expectedResult` | string | no | Hex without `0x`. Empty means any non-reverting result passes. |
| `comparisonOperator` | string | no | `eq` (default), `ne`, `gt`, `gte`, `lt`, `lte` |
| `gasLimit` | Uint | no | Gas for the call. `0` means the default 250000. Maximum 500000. |
| `uri`, `customData` | string | no | Metadata. Use `uri` to document what the check verifies. |

The same structure is used for post-transfer [invariants](invariants.md) on the collection. This page covers the approval criterion.

## How it works

1. Replace placeholders in `calldata` with values from the transfer.
2. Execute a `staticcall` to `contractAddress` with the calldata under `gasLimit`.
3. Compare the returned bytes with `expectedResult` using `comparisonOperator`.
4. Pass or fail. All challenges on the approval must pass.

### Placeholders

Approval checks run once per (sender, recipient) pair, so one recipient is in scope.

| Placeholder | Replaced with |
| --- | --- |
| `$initiator` | Initiator's 20-byte address as hex (no `0x`) |
| `$sender` | Sender's address as hex |
| `$recipient` | Recipient's address as hex |
| `$collectionId` | Collection ID as a 32-byte padded uint256 |

`$recipients` is not available here; it exists only in invariants. Placeholders come from the transfer context and cannot be set by the user.

Placeholders are also accepted in `expectedResult`, which is how you check that a call returns a party's address.

### Comparison operators

| Operator | Meaning |
| --- | --- |
| `eq` | Return value equals `expectedResult` |
| `ne` | Not equal |
| `gt` | Greater than (numeric) |
| `gte` | Greater than or equal |
| `lt` | Less than |
| `lte` | Less than or equal |

Only `eq` and `ne` are reliable for non-numeric return types.

### Gas

| Limit | Value |
| --- | --- |
| Default per query (`gasLimit` = 0) | 250000 |
| Maximum per query | 500000 |
| Maximum total across all challenges on one approval | 2500000 (10 default-gas challenges) |

A query that runs out of gas fails the challenge. Contracts that call precompiles need more headroom than plain storage reads. Rough guide: about 30000 for a storage read, 50000 for an ERC-20 balance, more for logic that touches a precompile.

### Building calldata

1. Selector: first 4 bytes of `keccak256(signature)`. `balanceOf(address)` is `70a08231`.
2. ABI-encode each argument to 32 bytes. An address is left-padded with 24 zero bytes.
3. Concatenate selector and arguments.
4. Substitute placeholders for the addresses you want filled at runtime: `70a08231000000000000000000000000$initiator`.

### Examples

Sender must hold at least 100 units of an ERC-20 (`0x64` = 100):

```json
{
  "evmQueryChallenges": [
    {
      "contractAddress": "0xUSDCAddress...",
      "calldata": "70a08231000000000000000000000000$sender",
      "expectedResult": "0000000000000000000000000000000000000000000000000000000000000064",
      "comparisonOperator": "gte",
      "gasLimit": "250000"
    }
  ]
}
```

Initiator must own NFT #1 (`ownerOf(uint256)` is `6352211e`):

```json
{
  "evmQueryChallenges": [
    {
      "contractAddress": "0xNFTContract...",
      "calldata": "6352211e0000000000000000000000000000000000000000000000000000000000000001",
      "expectedResult": "$initiator",
      "comparisonOperator": "eq",
      "gasLimit": "250000"
    }
  ]
}
```

### Failure conditions

- Contract address is invalid or has no code
- Calldata is malformed or empty
- The call reverts or runs out of gas
- The result does not satisfy the comparison
- Invalid operator, or a numeric operator on non-numeric data

### Security

- `staticcall` cannot write state, emit events, or create contracts. Results are deterministic within a block.
- Gas limits bound the work a transfer can demand. Set them from measurement, not guesses.
- Query only contracts you trust. A malicious or upgraded proxy can return anything.
- Combine with other criteria for defense in depth.
- Test the calldata against the live contract before shipping the approval.

## Related

- [Invariants](invariants.md)
- [Tokenization precompile](../evm/tokenization-precompile/README.md)
- [EVM](../evm/README.md)
