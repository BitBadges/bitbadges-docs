---
description: "Builds the EIP-712 domain for a Cosmos EVM chain."
---

# Function: createEIP712Domain()

> **createEIP712Domain**(`eip155ChainId`): [`EIP712Domain`](/sdk/reference/interfaces/eip712-domain)

Defined in: [packages/bitbadgesjs-sdk/src/eip712/domain.ts:15](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/domain.ts#L15)

Builds the EIP-712 domain for a Cosmos EVM chain.

Mirrors `cosmos/evm/ethereum/eip712/domain.go::createEIP712Domain`.
The chain's ante handler reconstructs this exact domain when verifying
an EIP-712-signed Cosmos tx, so any deviation here will fail verification.

## Parameters

### eip155ChainId

`number` \| `bigint`

## Returns

[`EIP712Domain`](/sdk/reference/interfaces/eip712-domain)
