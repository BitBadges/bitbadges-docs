---
description: "Checks if an address is validly formatted. If a chain is not provided, we will try to determine the chain from the address."
---

# Function: isAddressValid()

> **isAddressValid**(`address`, `chain?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/address-converter/converter.ts:215](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/address-converter/converter.ts#L215)

Checks if an address is validly formatted. If a chain is not provided, we will try to determine the chain from the address.

## Parameters

### address

`string`

### chain?

[`SupportedChain`](/sdk/reference/enumerations/supported-chain)

## Returns

`boolean`

## Example

```ts
const valid = isAddressValid('bb1xv9tklw7a7g3ll4ht2cjm6y22p2w7pk8j3w4h6');
console.log(valid);
```
