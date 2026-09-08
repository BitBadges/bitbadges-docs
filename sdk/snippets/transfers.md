---
description: "Use TransferWithIncrements in the bitbadges SDK to describe batch transfers with incrementing token IDs or ownership times, and compute the resulting balances."
---

# Transfers

`TransferWithIncrements` describes one transfer to many recipients where each recipient gets the next token ID or the next time window. Helpers expand it into plain transfers and compute the balances before and after.

## Example

```ts
import {
  BalanceArray,
  TransferWithIncrements,
  getAllTokenIdsToBeTransferred,
  getAllBalancesToBeTransferred,
  getBalancesAfterTransfers,
  getTransfersFromTransfersWithIncrements
} from 'bitbadges';

const mintBalances = BalanceArray.From<bigint>([
  {
    amount: 100n,
    tokenIds: [{ start: 1n, end: 100n }],
    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }] // covers every incremented window
  }
]);

const batchTransfer = new TransferWithIncrements<bigint>({
  from: 'Mint',
  balances: BalanceArray.From<bigint>([
    {
      amount: 1n,
      tokenIds: [{ start: 1n, end: 1n }],
      ownershipTimes: [{ start: 1628770800000n, end: 1628857200000n }]
    }
  ]),
  toAddresses: [], // empty because toAddressesLength is set
  toAddressesLength: 100n,
  incrementTokenIdsBy: 1n, // recipient 1 gets ID 1, recipient 2 gets ID 2, and so on
  incrementOwnershipTimesBy: 86400000n // each window starts one day later
});

const blockTime = BigInt(Date.now());

getAllTokenIdsToBeTransferred([batchTransfer]); // [{ start: 1n, end: 100n }]
getAllBalancesToBeTransferred([batchTransfer], blockTime); // every balance that leaves `from`
getBalancesAfterTransfers(mintBalances, [batchTransfer], blockTime); // what `from` holds afterwards
// Supply actual recipients before expanding into transfers for a transaction.
const recipients = Array.from({ length: 100 }, () => 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue');
getTransfersFromTransfersWithIncrements([{ ...batchTransfer, toAddresses: recipients }], blockTime); // 100 Transfer objects
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `from` | `string` | yes | Sender address, or `Mint` |
| `toAddresses` | `string[]` | yes | Recipients. Can be empty for balance calculations when `toAddressesLength` is set; supply actual addresses before expanding transfers |
| `balances` | `BalanceArray<T>` | yes | The balance sent to the first recipient |
| `toAddressesLength` | `T` | no | Number of recipients when the addresses are not known yet (for example, code claims). Takes priority over `toAddresses.length` |
| `incrementTokenIdsBy` | `T` | no | Added to every token ID for each successive recipient |
| `incrementOwnershipTimesBy` | `T` | no | Added to every ownership time for each successive recipient |
| `durationFromTimestamp` | `T` | no | Unix ms duration; sets ownership times relative to the block time |
| `precalculateBalancesFromApproval`, `merkleProofs`, `memo`, `prioritizedApprovals`, `onlyCheckPrioritized*` | | no | Same meaning as on [MsgTransferTokens](../../token-standard/messages/msg-transfer-tokens.md) |

## Behavior

- `getAllTokenIdsToBeTransferred(transfers)` ignores `durationFromTimestamp` because it only returns IDs.
- `getAllBalancesToBeTransferred(transfers, blockTime)`, `getBalancesAfterTransfers(startBalance, transfers, blockTime, allowUnderflow?)`, and `getTransfersFromTransfersWithIncrements(transfers, blockTime)` need `blockTime` to resolve `durationFromTimestamp`.
- `getBalancesAfterTransfers` throws on underflow unless `allowUnderflow` is true.
- The chain applies the same increment rules through `predeterminedBalances` in an approval. See [Predetermined Balances](../../token-standard/approval-criteria/predetermined-balances.md).

## Related

- [Balances](balances.md)
- [MsgTransferTokens](../../token-standard/messages/msg-transfer-tokens.md)
