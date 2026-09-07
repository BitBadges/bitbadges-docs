---
description: "Convert between 0x Ethereum addresses and bb1 BitBadges addresses, and validate addresses, with the bitbadges SDK."
---

# Address conversions

Every account has one `bb1` (bech32) address and one `0x` (hex) address that encode the same bytes. The SDK converts between them and validates either form.

## Example

```bash
bb account convert 0x0bc63cfe31d5218eb414b142c799e20964a54a1a
bb account validate bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
```

```json
{ "ok": true, "data": { "result": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", "source": "0x0bc63cfe31d5218eb414b142c799e20964a54a1a", "target": "bb1" }, "warnings": [], "error": null }
```

```ts
import { convertToBitBadgesAddress, convertToEthAddress, isAddressValid } from 'bitbadges';

const bb = convertToBitBadgesAddress('0x0bc63cfe31d5218eb414b142c799e20964a54a1a');
// "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"

const eth = convertToEthAddress('bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d');
// "0x0bC63Cfe31D5218eB414b142c799e20964a54A1A"

// Validation: convertToBitBadgesAddress returns '' for invalid input
const userInput = 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70x'; // bad checksum
if (convertToBitBadgesAddress(userInput)) {
  console.log('valid');
} else {
  console.log('invalid'); // this branch
}

// Or ask directly
console.log(isAddressValid('bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d')); // true
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
