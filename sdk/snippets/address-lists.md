---
description: "Build and query AddressList objects in the bitbadges SDK, membership checks, inversion, removal, and the reserved Mint and All lists."
---

# Address Lists

`AddressList` is a whitelist or blacklist of addresses with an ID. It is the base type behind every `fromList`, `toList`, and `initiatedByList` in approvals, and `BitBadgesAddressList` from the API extends it.

## Example

```ts
import { AddressList } from 'bitbadges';

const BOB = 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue';

const list = new AddressList({
  listId: 'demo-allowlist',
  addresses: [BOB],
  whitelist: true,
  uri: '',
  customData: '',
  createdBy: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d'
});

list.checkAddress(BOB); // true

const inverted = list.toInverted(); // whitelist: false, same addresses
inverted.checkAddress(BOB); // false

list.remove(BOB); // in place
list.isEmpty(); // true

const mintList = AddressList.Reserved('Mint'); // only the Mint address
const all = AddressList.AllAddresses(); // every address
const allButBob = AddressList.Reserved(`!${BOB}`);
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
