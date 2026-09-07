---
description: "Tokenization precompile gas: per-method base costs, the fixed buffers RequiredGas adds, executeMultiple and input-size costs, per-element constants."
---

# Gas

The tokenization precompile charges a base cost per method plus a fixed buffer, computed in `RequiredGas` from the method ID and input size. This page lists the numbers from `x/tokenization/precompile/precompile.go` and `gas.go`.

```go
// RequiredGas, simplified
baseGas := baseGasForMethod(methodID) // the per-method constant from the tables below
if isTransaction {
    return baseGas + 200_000
}
return baseGas + 50_000
```

The base is deducted before the precompile runs. The keeper's own work (state reads and writes, approval checks, events) then draws from the remaining gas of the call. The buffer exists so `eth_estimateGas` converges on a value that works.

## Transaction methods

| Method | Base gas | Charged up front |
| --- | --- | --- |
| `transferTokens` | 30,000 | 230,000 |
| `setIncomingApproval` | 20,000 | 220,000 |
| `setOutgoingApproval` | 20,000 | 220,000 |
| `createCollection` | 50,000 | 250,000 |
| `updateCollection` | 40,000 | 240,000 |
| `universalUpdateCollection` | 50,000 | 250,000 |
| `deleteCollection` | 20,000 | 220,000 |
| `createAddressLists` | 30,000 | 230,000 |
| `updateUserApprovals` | 30,000 | 230,000 |
| `deleteIncomingApproval` | 15,000 | 215,000 |
| `deleteOutgoingApproval` | 15,000 | 215,000 |
| `purgeApprovals` | 25,000 | 225,000 |
| `createDynamicStore` | 20,000 | 220,000 |
| `updateDynamicStore` | 20,000 | 220,000 |
| `deleteDynamicStore` | 15,000 | 215,000 |
| `setDynamicStoreValue` | 15,000 | 215,000 |
| `setValidTokenIds` | 20,000 | 220,000 |
| `setManager` | 15,000 | 215,000 |
| `setCollectionMetadata` | 15,000 | 215,000 |
| `setTokenMetadata` | 20,000 | 220,000 |
| `setCustomData` | 15,000 | 215,000 |
| `setStandards` | 15,000 | 215,000 |
| `setCollectionApprovals` | 30,000 | 230,000 |
| `setIsArchived` | 15,000 | 215,000 |
| `castVote` | 15,000 | 215,000 |

### executeMultiple

```text
base = 10,000
     + 1,000 * min(messageCount, 50)
     + 100 * floor(len(input) / 32)
charged = base + 200,000
```

The per-chunk term prices JSON parsing by input size, so a large batch cannot be under-charged. Each message's own keeper work still draws from the remaining gas.

## Query methods

| Method | Base gas | Charged up front |
| --- | --- | --- |
| `getCollection` | 3,000 | 53,000 |
| `getBalance` | 3,000 | 53,000 |
| `getBalanceAmount` | 3,000 | 53,000 |
| `getTotalSupply` | 3,000 | 53,000 |
| `getCollectionStats` | 3,000 | 53,000 |
| `getAddressList` | 5,000 | 55,000 |
| `getApprovalTracker` | 5,000 | 55,000 |
| `getChallengeTracker` | 5,000 | 55,000 |
| `getETHSignatureTracker` | 5,000 | 55,000 |
| `getDynamicStore` | 5,000 | 55,000 |
| `getDynamicStoreValue` | 5,000 | 55,000 |
| `getWrappableBalances` | 5,000 | 55,000 |
| `getAllReservedProtocolAddresses` | 5,000 | 55,000 |
| `getVote` | 5,000 | 55,000 |
| `getVotes` | 5,000 | 55,000 |
| `isAddressReservedProtocol` | 2,000 | 52,000 |
| `params` | 2,000 | 52,000 |

## Utility methods

Pure functions, no state access. They still receive the `+50,000` query buffer in `RequiredGas`.

| Method | Base gas | Extra |
| --- | --- | --- |
| `convertEvmAddressToBech32` | 500 | |
| `convertBech32ToEvmAddress` | 500 | |
| `rangeContains` | 200 | |
| `rangesOverlap` | 200 | |
| `searchInRanges` | 500 | + 100 per 32-byte input chunk |
| `getBalanceForIdAndTime` | 500 | + 100 per 32-byte input chunk |
| `getReservedListId` | 300 | |

## Per-element constants

`gas.go` defines calculators for size-proportional estimates. `RequiredGas` does not add these on top of the base today; the module's own gas metering covers the real per-element work. They are useful for off-chain estimation and may be applied in a future version.

| Constant | Gas | Used by |
| --- | --- | --- |
| `GasPerRecipient` | 5,000 | `CalculateTransferGas` |
| `GasPerTokenIdRange` | 1,000 | `CalculateTransferGas`, `CalculateApprovalGas` |
| `GasPerOwnershipTimeRange` | 1,000 | `CalculateTransferGas`, `CalculateApprovalGas` |
| `GasPerApprovalField` | 500 | `CalculateApprovalGas` (per transfer time range) |
| `GasPerQueryRange` | 500 | `CalculateQueryGas` |
| `GasPerInputChunk` | 100 | `executeMultiple`, `searchInRanges`, `getBalanceForIdAndTime` |
| `GasPerMessageInBatch` | 1,000 | `executeMultiple` |

```go
// CalculateTransferGas
gas := GasTransferTokensBase
gas += len(toAddresses) * GasPerRecipient
gas += len(tokenIdsRanges) * GasPerTokenIdRange
gas += len(ownershipTimesRanges) * GasPerOwnershipTimeRange
```

## Limits that affect gas

| Limit | Value |
| --- | --- |
| `MaxMessagesPerBatch` | 50 |
| `MaxQueryArraySize` (token ID or ownership time ranges in a query) | 1,000 |
| `MaxRecipients`, `MaxTokenIdRanges`, `MaxOwnershipTimeRanges`, `MaxApprovalRanges` | 100 |

Full list on [Security](security.md).

## Spending less

- Fewer recipients per transfer; merge adjacent token ID and ownership time ranges.
- Use `getBalanceAmount` and `getTotalSupply` (direct `uint256`) instead of `getBalance` when you only need an amount.
- Batch with `executeMultiple` instead of separate transactions; one buffer instead of N.
- Use `rangeContains` and `searchInRanges` instead of hand-written range loops in Solidity.
- Cache JSON strings you reuse across calls.
- Simple operations are cheaper as native Cosmos messages than through the EVM. See [Developer guide](../developer-guide.md).

## Related

- [API reference](api.md)
- [Security](security.md)
- [GAMM precompile API](../gamm-precompile/api.md#gas)
