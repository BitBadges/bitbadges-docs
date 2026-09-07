---
description: "allowBackedMinting and allowSpecialWrapping: opt a collection approval into backed-path and wrapper-path transfers, and the rules enforced."
---

# Special address flags

Backed paths and cosmos coin wrapper paths transfer tokens to and from generated path addresses. An approval matches those transfers only if it opts in with these flags, so an approval that says `toListId: "All"` does not accidentally allow wrapping or backing.

## Shape

```ts
interface ApprovalCriteria<T extends NumberType> {
  allowBackedMinting?: boolean;
  allowSpecialWrapping?: boolean;
}
```

| Field | Default | Opts the approval into |
| --- | --- | --- |
| `allowBackedMinting` | `false` | Transfers to or from the `cosmosCoinBackedPath` address ([backed minting](../ibc/backed-minting.md)) |
| `allowSpecialWrapping` | `false` | Transfers to or from a `cosmosCoinWrapperPaths` address ([wrapper paths](../ibc/cosmos-coin-wrapper-paths.md)) |

Collection approvals only.

## How it works

The check is bidirectional: whether the path address is the sender or the recipient, the approval must carry the flag. Path addresses have no keys and no user-level approvals, so these approvals also need the matching [override](overrides.md).

When a flag is `true` the chain validates the approval:

- `mustPrioritize` must be `true`. Transfers through paths always prioritize.
- Exactly one of `fromListId` or `toListId` must resolve to a whitelist of exactly one address, and that address must be the path address for this collection.

### Backed minting approval

```ts
const backingApproval: CollectionApproval<bigint> = {
  fromListId: specialBackedPathAddress,
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
    overridesFromOutgoingApprovals: true,
  },
};
```

### Wrapper approval

```ts
const wrapperApproval: CollectionApproval<bigint> = {
  toListId: specialWrapperAddress,
  fromListId: 'AllWithoutMint',
  initiatedByListId: 'All',
  transferTimes: [{ start: 1n, end: 18446744073709551615n }],
  tokenIds: [{ start: 1n, end: 100n }],
  ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
  approvalId: 'wrapper-approval',
  version: 0n,
  approvalCriteria: {
    allowSpecialWrapping: true,
    mustPrioritize: true,
    overridesToIncomingApprovals: true,
  },
};
```

Path addresses are registered as reserved protocol addresses, so forceful transfers out of them are blocked. See [Overrides](overrides.md).

## Related

- [Backed minting](../ibc/backed-minting.md)
- [Cosmos coin wrapper paths](../ibc/cosmos-coin-wrapper-paths.md)
- [Prioritized approvals](../concepts/prioritized-approvals.md)
- [Overrides](overrides.md)
