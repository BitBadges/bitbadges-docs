---
description: "Build and query AddressList objects in the bitbadges SDK, membership checks, inversion, removal, and the reserved Mint and All lists."
---

# Address lists

`AddressList` is a whitelist or blacklist of addresses with an ID. It is the base type behind every `fromList`, `toList`, and `initiatedByList` in approvals, and `BitBadgesAddressList` from the API extends it.

## Example

```ts
import { AddressList } from 'bitbadges';

const list = new AddressList({
  listId: 'abc123',
  addresses: ['bb1hsk6jryyqjfhp5g4g7j0qldj9nqdj0qc02fgmh'],
  whitelist: true,
  uri: '',
  customData: '',
  createdBy: 'bb1hsk6jryyqjfhp5g4g7j0qldj9nqdj0qc02fgmh'
});

list.checkAddress('bb1hsk6jryyqjfhp5g4g7j0qldj9nqdj0qc02fgmh'); // true

const inverted = list.toInverted(); // whitelist: false, same addresses
inverted.checkAddress('bb1hsk6jryyqjfhp5g4g7j0qldj9nqdj0qc02fgmh'); // false

list.remove('bb1hsk6jryyqjfhp5g4g7j0qldj9nqdj0qc02fgmh'); // in place
list.isEmpty(); // true

const mintList = AddressList.Reserved('Mint'); // only the Mint address
const all = AddressList.AllAddresses(); // every address
const allButOne = AddressList.Reserved('!bb1hsk6jryyqjfhp5g4g7j0qldj9nqdj0qc02fgmh');
```

## Behavior

| Call | Returns | Notes |
| --- | --- | --- |
| `checkAddress(address)` | `boolean` | Membership after applying `whitelist` |
| `invert()` / `toInverted()` | this / new | Flips `whitelist` |
| `remove(addresses)` / `toRemoved(addresses)` | this / new | Accepts one address or another list |
| `union(other)` / `toUnion(other)` | this / new | Merges membership |
| `getOverlaps(other)` / `getOverlapDetails(other)` | list / `[inThisOnly, both, inOtherOnly]` | Set algebra |
| `isEmpty()` | `boolean` | No address passes `checkAddress` |
| `AddressList.Reserved(id)` | list | Parses a reserved ID: `Mint`, `All`, `AllWithMint`, `None`, `AllWithout<addr:addr>`, one address, `addr:addr` joined addresses, and a `!` prefix to invert. Throws on an unknown ID |
| `AddressList.AllAddresses()` | list | Same as `Reserved('All')` |

Lists created on chain with `MsgCreateAddressLists` are immutable. Reserved IDs never need to be created.

## Related

- [Address lists concept](../../token-standard/concepts/address-lists.md)
- [MsgCreateAddressLists](../../token-standard/messages/msg-create-address-lists.md)
