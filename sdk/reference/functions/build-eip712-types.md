---
description: "Builds the EIP-712 type schema for a flattened Cosmos sign-doc payload."
---

# Function: buildEIP712Types()

> **buildEIP712Types**(`flattenedPayload`, `numPayloadMsgs`): [`EIP712Types`](/sdk/reference/type-aliases/eip712-types)

Defined in: [packages/bitbadgesjs-sdk/src/eip712/types-builder.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/types-builder.ts#L21)

Builds the EIP-712 type schema for a flattened Cosmos sign-doc payload.

Mirrors `cosmos/evm/ethereum/eip712/types.go::createEIP712Types` plus the
recursion in `recursivelyAddTypesToRoot`. Any deviation here changes the
EIP-712 hash and breaks chain-side verification, so this file is
intentionally a near-line-for-line port.

## Parameters

### flattenedPayload

`Record`\<`string`, `unknown`\>

### numPayloadMsgs

`number`

## Returns

[`EIP712Types`](/sdk/reference/type-aliases/eip712-types)
