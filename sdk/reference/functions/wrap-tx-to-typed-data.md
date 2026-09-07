---
description: "Wraps an Amino StdSignDoc-shaped object into an EIP-712 TypedData object that's accepted by ethsignTypedDatav4 and ethers Signer.signTypedData."
---

# Function: wrapTxToTypedData()

> **wrapTxToTypedData**(`signDoc`, `eip155ChainId`): [`EIP712TypedData`](/sdk/reference/interfaces/eip712-typed-data)

Defined in: [packages/bitbadgesjs-sdk/src/eip712/wrap.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/wrap.ts#L20)

Wraps an Amino StdSignDoc-shaped object into an EIP-712 TypedData object
that's accepted by `eth_signTypedData_v4` and ethers `Signer.signTypedData`.

Mirrors `cosmos/evm/ethereum/eip712/eip712.go::WrapTxToTypedData`. The
resulting typed-data is what the BitBadges chain ante handler reconstructs
during EIP-712 signature verification — drift here breaks verification.

## Parameters

### signDoc

`Record`\<`string`, `unknown`\>

Cosmos Amino StdSignDoc (object form, same shape as the
  output of `makeSignDoc` in `transactions/messages/signDoc.ts`).

### eip155ChainId

`number` \| `bigint`

The numeric EIP-155 chain id. Note this is the EVM
  chain id (e.g. 50025 for BitBadges testnet), NOT the Cosmos chain-id
  string.

## Returns

[`EIP712TypedData`](/sdk/reference/interfaces/eip712-typed-data)
