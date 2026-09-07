---
description: "Creation-only collection rules: ownership times, supply caps, backed paths, forceful transfers, pool creation, and post-transfer EVM checks."
---

# Invariants

Invariants are rules set when a collection is created that can never be changed or removed. They give holders guarantees that no manager action can undo.

## Shape

```ts
const invariants: CollectionInvariants<bigint> = {
  noCustomOwnershipTimes: false,
  maxSupplyPerId: '0',
  cosmosCoinBackedPath: undefined,
  noForcefulPostMintTransfers: false,
  disablePoolCreation: false,
  evmQueryChallenges: [],
};
```

```proto
message CollectionInvariants {
  bool noCustomOwnershipTimes = 1;
  string maxSupplyPerId = 2;
  CosmosCoinBackedPath cosmosCoinBackedPath = 3;
  bool noForcefulPostMintTransfers = 4;
  bool disablePoolCreation = 5;
  repeated EVMQueryChallenge evmQueryChallenges = 6;
}
```

| Field | Type | Effect |
| --- | --- | --- |
| `noCustomOwnershipTimes` | bool | Every `ownershipTimes` in balances, collection approvals, and user approvals must be the full range `[{ start: 1, end: 18446744073709551615 }]` |
| `maxSupplyPerId` | Uint | After every transfer, no token ID may have total supply above this. `0` disables. |
| `cosmosCoinBackedPath` | CosmosCoinBackedPath | The collection is backed 1:1 by an `x/bank` coin. One path per collection. See [Backed minting](../ibc/backed-minting.md). |
| `noForcefulPostMintTransfers` | bool | Collection approvals whose `fromListId` is not exactly `"Mint"` cannot set `overridesFromOutgoingApprovals` or `overridesToIncomingApprovals` |
| `disablePoolCreation` | bool | `x/gamm` rejects pools that include this collection's assets |
| `evmQueryChallenges` | EVMQueryChallenge[] | Read-only EVM calls run after all balance updates. Any failure reverts the transfer. Up to 10. |

{% hint style="info" %}
Ask your agent: "Create a collection with a hard cap of 1 per token ID, no custom ownership times, and no forceful post-mint transfers, locked as invariants." The MCP builder tools (`set_invariants`) produce the objects on this page.
{% endhint %}

## How it works

Set invariants only in the message that creates the collection (`MsgCreateCollection`, or `MsgUniversalUpdateCollection` with `collectionId: "0"`). Invariants in an update message are ignored. Read them back from `TokenCollection.invariants`.

### noCustomOwnershipTimes

Turn this on when you do not need time-bound ownership, which is most collections. The chain then rejects any balance, approval, or transfer that uses a partial ownership time range, on every level.

### maxSupplyPerId

A hard cap on supply per token ID, checked after every transfer. It is a sanity check on top of mint approval design, not a replacement for it. See [Minting and supply](../concepts/minting-and-supply.md).

### noForcefulPostMintTransfers

With this on, no post-mint collection approval can bypass user-level approvals, so freezing, revocation, and forced distribution are impossible forever. Mint approvals are exempt because the Mint address has no approvals to override. The check runs both when approvals are set and when a transfer executes.

### disablePoolCreation

Pool creation in [gamm](../../chain/modules/gamm/README.md) fails for this collection's denoms.

### evmQueryChallenges

Post-transfer invariants use the same [challenge structure](evm-query-challenges.md) as the approval criterion but run once, after all balance changes in the transfer, and can see every recipient. Use them for global rules such as a maximum holder count, a per-address balance cap, or a compliance contract that inspects the resulting state.

```ts
const evmQueryChallenges: EVMQueryChallenge<bigint>[] = [
  {
    contractAddress: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
    calldata: '70a08231000000000000000000000000$collectionId',
    expectedResult: '0000000000000000000000000000000000000000000000000000000000000001',
    comparisonOperator: 'eq',
    gasLimit: '250000',
    uri: '',
    customData: '',
  },
];
```

Placeholders in the invariant context:

| Placeholder | Replaced with |
| --- | --- |
| `$initiator` | Initiator's address as hex |
| `$sender` | Sender's address as hex |
| `$recipient` | First recipient only |
| `$recipients` | Every recipient, each ABI-padded to 32 bytes, concatenated with no separator (two recipients = 128 hex characters) |
| `$collectionId` | Collection ID as a 32-byte padded uint256 |

Gas: default 250000 per query when `gasLimit` is `0`, maximum 500000 per query, maximum 2500000 across all invariants on the collection, and at most 10 invariants. A contract that reads collection state through the [tokenization precompile](../../chain/evm/tokenization-precompile/README.md) needs roughly 145000 gas for one `getCollectionStats` call, so leave headroom.

## Related

- [Collections](../concepts/collections.md)
- [EVM query challenges](evm-query-challenges.md)
- [Overrides](overrides.md)
- [Backed minting](../ibc/backed-minting.md)
