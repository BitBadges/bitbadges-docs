---
description: "The tokenization precompile security model from security.go: caller checks, overflow, validation, DoS limits, error sanitization, threat model."
---

# Security

The tokenization precompile's protections live in `x/tokenization/precompile/security.go` and `validation.go`. This page states what the code enforces so contract authors know what they still have to check themselves.

```go
// Every transaction method starts here
caller := contract.Caller()
if err := VerifyCaller(caller); err != nil {
    return nil, err
}
```

## What the Precompile Enforces

### Caller Verification

- `contract.Caller()` is the address that made the call. The EVM sets it; a contract cannot forge it.
- The caller becomes the `creator` on tokenization messages. A transfer's `from` remains the requested sender and is subject to approvals. Any `creator` in the JSON is overwritten.
- A zero-address caller is rejected by `VerifyCaller` with error code 8.

The caller is the immediate caller, not the transaction origin. See [Developer Guide](../developer-guide.md#precompile-caller).

### Reentrancy

- Transaction atomicity rolls back failed state changes; it is not a reentrancy guard.
- Approval criteria and collection invariants can invoke EVM contracts through [EVM query challenges](../../../token-standard/approval-criteria/evm-query-challenges.md). Review these callbacks when reasoning about a transfer's call graph.
- Contracts must protect their own state around external calls, using checks-effects-interactions and a reentrancy guard where needed. The EVM call stack does not provide this protection automatically. See [Solidity's reentrancy guidance](https://docs.solidity.org/en/latest/security-considerations.html#reentrancy).

### Overflow

- Every `big.Int` is validated before conversion to `sdkmath.Uint`.
- `CheckOverflow` rejects nil, negative, and values above `2^256-1` (`MaxUint256`), so nothing is silently truncated on the way back to Solidity.
- Ranges must satisfy `start <= end`; amounts must be greater than zero.
- IDs and times are `uint64` on the chain. Values above `18446744073709551615` fail validation. Use `FOREVER`.

```go
func CheckOverflow(value *big.Int, fieldName string) error {
	if value == nil {
		return ErrInvalidInput(fmt.Sprintf("%s cannot be nil", fieldName))
	}
	if value.Sign() < 0 {
		return ErrInvalidInput(fmt.Sprintf("%s cannot be negative", fieldName))
	}
	if value.Cmp(MaxUint256) > 0 {
		return ErrInvalidInput(fmt.Sprintf("%s overflow: value exceeds maximum uint256 (2^256-1)", fieldName))
	}
	return nil
}
```

### Input Validation

- Zero addresses are rejected (`ValidateAddress`).
- Empty arrays are rejected where the field is required (`ValidateArraySize`).
- Invalid ranges are rejected (`ValidateBigIntRanges`).
- Collection IDs must be non-zero (`ValidateCollectionId`); zero IDs in queries are rejected by `validateQueryRequest`.
- Required strings must be non-empty (`ValidateString`).
- Every message runs its `ValidateBasic` before the keeper call.

### DoS Limits

Array sizes are capped so a single call cannot exhaust the node.

| Field | Maximum |
| --- | --- |
| Recipients per transfer (`MaxRecipients`) | 100 |
| Token ID ranges (`MaxTokenIdRanges`) | 100 |
| Ownership time ranges (`MaxOwnershipTimeRanges`) | 100 |
| Approval ranges (`MaxApprovalRanges`) | 100 |
| Denom units per path (`MaxDenomUnits`) | 50 |
| Merkle challenges per approval (`MaxMerkleChallenges`) | 20 |
| Coin transfers per approval (`MaxCoinTransfers`) | 50 |
| Dynamic store challenges (`MaxDynamicStoreChallenges`) | 20 |
| ETH signature challenges (`MaxETHSignatureChallenges`) | 20 |
| Voting challenges (`MaxVotingChallenges`) | 20 |
| EVM query challenges (`MaxEVMQueryChallenges`) | 10 |
| Must-own-tokens rules (`MaxMustOwnTokens`) | 50 |
| Addresses per address list (`MaxAddressListEntries`) | 1,000 |
| Metadata string length, URI or customData (`MaxMetadataLength`) | 10,000 characters |
| Messages per `executeMultiple` (`MaxMessagesPerBatch`) | 50 |
| Ranges per query array (`MaxQueryArraySize`) | 1,000 |

Input size also adds gas (`GasPerInputChunk`) on `executeMultiple`, `searchInRanges`, and `getBalanceForIdAndTime`, so large JSON cannot be under-priced. See [Gas](gas.md).

### Error Handling

- Errors are structured `PrecompileError` values with a code, message, and details.
- Details are sanitized: file paths, Go internals, module paths, and IP addresses are redacted; messages longer than 500 characters are truncated.
- Codes let a contract branch without parsing text. See [Errors](errors.md).

### State Consistency

- All writes go through the module keeper.
- A transaction either applies every change or none. A failing `executeMultiple` message reverts the whole batch.

## Threat Model

| Threat | Protection |
| --- | --- |
| Reentrancy | Review EVM query callbacks and protect application state around external calls; atomicity alone is insufficient |
| Integer overflow | `CheckOverflow`, range validation, `sdkmath.Uint` arithmetic |
| Invalid input | Validation of every field before the keeper call |
| DoS through large inputs | Array size limits, input-size gas |
| Information leakage | Sanitized, truncated error details |
| State corruption | Atomic transactions, keeper validation |
| Caller spoofing | `contract.Caller()`, creator overwritten on the Go side |

## Known Limitations

- No rate limiting at the precompile level. Add it at the chain or contract level if you need it.
- Gas price manipulation is handled by the EVM module, not the precompile.
- Access control (who may transfer, who may update a collection) is the tokenization module's approval and permission system. The precompile does not add its own authorization layer.
- Full protobuf decoding of query responses is not available in Solidity. See [Return values](README.md#return-values).

## What Your Contract Must Still Do

1. Validate inputs before building JSON. The precompile rejects bad input, but a revert after JSON construction wastes gas.
2. Check return values. Transaction methods return `bool success` or an ID.
3. Wrap calls in `try`/`catch` where you want to recover instead of revert.
4. Use `TokenizationJSONHelpers` and `TokenizationErrors` so the JSON matches the schema.
5. Review the collection's approvals and permissions. A transfer from a contract is subject to the same rules as any other sender. See [Transferability](../../../token-standard/concepts/transferability.md) and [Permissions](../../../token-standard/concepts/permissions.md).
6. Do authorization in the contract. The precompile sees the contract as the caller, never the user behind it.

## Related

- [Errors](errors.md)
- [Gas](gas.md)
- [Developer Guide](../developer-guide.md)
- [Security source](https://github.com/BitBadges/bitbadgeschain/blob/master/x/tokenization/precompile/security.go)
