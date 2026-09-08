---
description: "Sign a BitBadges transaction by hand with MetaMask, Privy, or ethers.js by sending the payload's EVM precompile call."
---

# Sign with an Ethereum Wallet

With `evmAddress` in the `TxContext`, `createTransactionPayload` converts the messages into a call to a BitBadges EVM precompile. An Ethereum wallet signs and sends that call like any contract transaction. Use [Signing Client](signing-client.md) unless you need this level of control.

## Example

```ts
import { createTransactionPayload, MsgTransferTokens, type TxContext } from 'bitbadges';
import { ethers } from 'ethers';

const ALICE = 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d';

const msg = new MsgTransferTokens({
  creator: ALICE,
  collectionId: '1',
  transfers: [
    {
      from: ALICE,
      toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'],
      balances: [{ amount: '1', tokenIds: [{ start: '1', end: '1' }], ownershipTimes: [{ start: '1', end: '18446744073709551615' }] }]
    }
  ]
});

const txContext: TxContext = {
  sender: {
    address: ALICE, // bb1 form of the same account
    sequence: '0',
    accountNumber: '17246720312988307372', // decimal string, as the API returned it
    publicKey: '' // not needed for EVM
  },
  fee: { amount: '0', denom: 'ubadge', gas: '200000' },
  memo: '',
  evmAddress: '0x0bc63cfe31d5218eb414b142c799e20964a54a1a' // enables precompile conversion
};

const payload = createTransactionPayload(txContext, msg.toProto());
if (!payload.evmTx) throw new Error('Messages are not supported for EVM transactions');

const { to, data } = payload.evmTx;

const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

// Simulate: estimate gas
const gasEstimate = await signer.estimateGas({ to, data, value: 0n });

// Send
const tx = await signer.sendTransaction({ to, data, value: 0n, gasLimit: gasEstimate });
const receipt = await tx.wait();
console.log('tx hash:', receipt?.hash);
```

With Privy:

```ts
import { useSendTransaction } from '@privy-io/react-auth';
import { BitBadgesAPI, BigIntify, createTransactionPayload, type TxContext } from 'bitbadges';

function useEthereumSigning() {
  const { sendTransaction } = useSendTransaction();
  const api = new BitBadgesAPI({ convertFunction: BigIntify });

  const signAndBroadcast = async (evmAddress: string, bitbadgesAddress: string, messages: any[]) => {
    const { account } = await api.getAccount({ address: bitbadgesAddress });

    const txContext: TxContext = {
      sender: { address: bitbadgesAddress, sequence: account.sequence ?? 0n, accountNumber: account.accountNumber, publicKey: '' },
      fee: { amount: '0', denom: 'ubadge', gas: '200000' },
      memo: '',
      evmAddress
    };

    const payload = createTransactionPayload(txContext, messages);
    if (!payload.evmTx) throw new Error('Messages not supported for EVM transactions');

    const result = await sendTransaction({ to: payload.evmTx.to, data: payload.evmTx.data, value: 0n }, { address: evmAddress });

    return { txHash: result.hash, precompileAddress: payload.evmTx.to, functionName: payload.evmTx.functionName };
  };

  return { signAndBroadcast };
}
```

## Fields

`payload.evmTx`:

| Field | Type | Description |
| --- | --- | --- |
| `to` | `string` | Precompile address, chosen from the message type |
| `data` | `string` | ABI-encoded call data |
| `value` | `string` | Always `"0"` |
| `functionName` | `string` | The precompile function, for logging |

| Precompile | Address | Messages |
| --- | --- | --- |
| Tokenization | `0x0000000000000000000000000000000000001001` | Every `x/tokenization` message: `MsgTransferTokens`, `MsgCreateCollection`, `MsgUniversalUpdateCollection`, `MsgSetIncomingApproval`, `MsgSetOutgoingApproval`, `MsgSetCollectionApprovals`, `MsgSetTokenMetadata`, `MsgSetCollectionMetadata`, dynamic store messages, and the rest |
| Gamm | `0x0000000000000000000000000000000000001002` | `MsgCreateBalancerPool`, `MsgJoinPool`, `MsgExitPool`, `MsgSwapExactAmountIn`, `MsgSwapExactAmountInWithIBCTransfer` |
| Send manager | `0x0000000000000000000000000000000000001003` | `MsgSend` (native coin transfers) |

## Behavior

- `sender.address` must be the `bb1` form and `evmAddress` the `0x` form of the same account. The SDK converts addresses inside the message fields.
- `publicKey` is not used on the EVM path. The signature is a standard EIP-155 transaction signature.
- If you set only `evmAddress` and no `sender`, the payload contains only `evmTx`. With both, you also get the Cosmos payloads and can fall back.
- `payload.evmTx` is `undefined` when any message has no precompile mapping. Check for it and fall back to [Cosmos signing](sign-cosmos.md).
- Several tokenization messages in one payload become one `executeMultiple` call to the tokenization precompile (`functionName` is `executeMultiple`). Messages from different modules cannot share one EVM transaction.
- The wallet must be on the BitBadges EVM network: chain ID `50024` on mainnet, RPC `https://evm-rpc.bitbadges.io`. See [RPC endpoints](../../chain/evm/rpc-endpoints.md).

| | Cosmos | Ethereum |
| --- | --- | --- |
| Wallets | Keplr, Leap, Cosmostation | MetaMask, Privy, any EIP-1193 provider |
| Address in wallet | `bb1` form | `0x` form |
| Public key in context | Required | Not required |
| Signature | Cosmos `signDirect` | EIP-155 |
| What is signed | Protobuf `SignDoc` | A contract call to a precompile |

## Related

- [Transactions](README.md)
- [Tokenization Precompile](../../chain/evm/tokenization-precompile/README.md)
- [EVM developer guide](../../chain/evm/developer-guide.md)
