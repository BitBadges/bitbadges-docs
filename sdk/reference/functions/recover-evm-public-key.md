---
description: "Given an EIP-712 typed-data payload and the 65-byte signature produced by signing it, recover the signer's compressed pubkey and matching Ethereum address."
---

# Function: recoverEvmPublicKey()

> **recoverEvmPublicKey**(`typed`, `signature`): [`RecoveredKey`](/sdk/reference/interfaces/recovered-key)

Defined in: [packages/bitbadgesjs-sdk/src/eip712/recover.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/recover.ts#L33)

Given an EIP-712 typed-data payload and the 65-byte signature
produced by signing it, recover the signer's compressed pubkey and
matching Ethereum address.

## Parameters

### typed

[`EIP712TypedData`](/sdk/reference/interfaces/eip712-typed-data)

### signature

`string`

## Returns

[`RecoveredKey`](/sdk/reference/interfaces/recovered-key)
