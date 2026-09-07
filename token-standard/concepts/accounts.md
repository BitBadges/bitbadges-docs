---
description: "How Ethereum and Cosmos addresses map to one BitBadges account, and which form to show users."
---

# Accounts

Every account has one canonical `bb1` address. Addresses from other chains map to it, so one user can sign from an Ethereum wallet or a Cosmos wallet and hold the same balances.

## Shape

```ts
import { convertToBitBadgesAddress, convertToEthAddress, isAddressValid } from 'bitbadges';

const bitbadgesAddress = convertToBitBadgesAddress('0x14574a6DFF2Ddf9e07828b4345d3040919AF5652');
// "bb1z3t55m0l9h0eupuz3dp5t5cypyv674jj7mz2jw"

const ethAddress = convertToEthAddress('bb1z3t55m0l9h0eupuz3dp5t5cypyv674jj7mz2jw');
// "0x14574a6DFF2Ddf9e07828b4345d3040919AF5652"

isAddressValid('bb1z3t55m0l9h0eupuz3dp5t5cypyv674jj7mz2jw'); // true
```

| Term | Meaning |
| --- | --- |
| `address` | The native address the user signs with (`0x...` for Ethereum, `bb1...` for Cosmos). |
| `bitbadgesAddress` | The mapped `bb1` address. Equal to `address` for Cosmos-native users. |
| account number | A number the chain assigns the first time the address transacts or receives BADGE. |

## How it works

The 20-byte public key hash behind an Ethereum address is the same bytes behind a bech32 `bb1` address. Conversion is a re-encoding, not a lookup. The Ethereum zero address `0x0000000000000000000000000000000000000000` maps to `bb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqnrql8a`.

All chain state (balances, approvals, address lists, trackers) keys on the `bb1` form. Messages accept `bb1` addresses. The one exception is the reserved string `"Mint"`, which is a valid address in approvals and address lists but has no key pair.

Display the native address to users. Use the `bb1` form when you build messages or read state. `convertToBitBadgesAddress` returns an empty string for an invalid input, so it doubles as a validator.

## Related

- [Address lists](address-lists.md)
- [Address conversions](../../sdk/snippets/address-conversions.md)
- [Network](../../chain/README.md)
