---
description: "Convert between 0x Ethereum addresses and bb1 BitBadges addresses, and validate addresses, with the bitbadges SDK."
---

# Address conversions

Every account has one `bb1` (bech32) address and one `0x` (hex) address that encode the same bytes. The SDK converts between them and validates either form.

## Example

```bash
bb account convert 0x14574a6DFF2Ddf9e07828b4345d3040919AF5652
bb account validate bb1z3t55m0l9h0eupuz3dp5t5cypyv674jj7mz2jw
```

```ts
import { convertToBitBadgesAddress, convertToEthAddress, isAddressValid } from 'bitbadges';

const bb = convertToBitBadgesAddress('0x14574a6DFF2Ddf9e07828b4345d3040919AF5652');
// "bb1z3t55m0l9h0eupuz3dp5t5cypyv674jj7mz2jw"

const eth = convertToEthAddress('bb1z3t55m0l9h0eupuz3dp5t5cypyv674jj7mz2jw');
// "0x14574a6DFF2Ddf9e07828b4345d3040919AF5652"

// Validation: convertToBitBadgesAddress returns '' for invalid input
if (convertToBitBadgesAddress(userInput)) {
  // valid
}

// Or ask directly
if (isAddressValid('bb1z3t55m0l9h0eupuz3dp5t5cypyv674jj7mz2jw')) {
  // valid
}
```

## Behavior

- `convertToBitBadgesAddress` accepts a `bb1` or `0x` address and returns the `bb1` form. It returns an empty string when the input does not parse.
- `convertToEthAddress` accepts either form and returns the checksummed `0x` form.
- `isAddressValid(address, chain?)` returns a boolean. Pass a `SupportedChain` to require one format.
- The chain, the API, and the SDK message classes expect `bb1` addresses in `creator`, `from`, and `toAddresses` fields. Convert before you build a message.
- Which address a wallet controls depends on the key derivation path, not on the format. See [Signing client](../transactions/signing-client.md) for the Cosmos vs EVM adapter difference.

## Related

- [Accounts](../../token-standard/concepts/accounts.md)
- [MCP tool `convert_address`](../../agents/mcp-tools.md)
