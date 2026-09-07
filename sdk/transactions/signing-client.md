---
description: "BitBadgesSigningClient reference, wallet adapters for Keplr, Leap, MetaMask, mnemonics and private keys, network presets, gas, sequence retry, and results."
---

# Signing Client

`BitBadgesSigningClient` signs and broadcasts with any wallet adapter in one call. It fetches and caches account info, simulates for gas, signs through Cosmos `signDirect` or an EVM precompile call, broadcasts, and retries on sequence mismatch.

## Example

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgTransferTokens } from 'bitbadges';

// Browser Cosmos wallet
const adapter = await GenericCosmosAdapter.fromKeplr('bitbadges-1');
// or GenericCosmosAdapter.fromLeap('bitbadges-1') / fromCosmostation('bitbadges-1')

const client = new BitBadgesSigningClient({ adapter });

// One unit of token ID 1 in collection 1 to bob
const messages = [
  new MsgTransferTokens({
    creator: client.address,
    collectionId: '1',
    transfers: [
      {
        from: client.address,
        toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'],
        balances: [{ amount: '1', tokenIds: [{ start: '1', end: '1' }], ownershipTimes: [{ start: '1', end: '18446744073709551615' }] }]
      }
    ]
  })
];

const result = await client.signAndBroadcast(messages);

if (result.success) console.log('tx hash:', result.txHash);
else console.error('failed:', result.code, result.error);
```

The three blocks below reuse the same `messages` array with `client.address` as `creator` and `from`.

```ts
import { BitBadgesSigningClient, GenericEvmAdapter } from 'bitbadges';
import { BrowserProvider } from 'ethers';

// Browser EVM wallet (MetaMask, Rabby, Coinbase Wallet)
const signer = await new BrowserProvider(window.ethereum).getSigner();
const adapter = await GenericEvmAdapter.fromSigner(signer);
// or GenericEvmAdapter.fromBrowserWallet() / fromProvider(window.ethereum)

const client = new BitBadgesSigningClient({ adapter });
const result = await client.signAndBroadcast(messages); // routed through the precompiles
```

```ts
import { BitBadgesSigningClient, GenericEvmAdapter, NETWORK_CONFIGS } from 'bitbadges';

// Server side (bots, agents, backends): EVM path, recommended
const adapter = await GenericEvmAdapter.fromMnemonic(process.env.MNEMONIC!, NETWORK_CONFIGS['mainnet'].evmRpcUrl);
// or GenericEvmAdapter.fromPrivateKey(process.env.PRIVATE_KEY!, NETWORK_CONFIGS['mainnet'].evmRpcUrl)

const client = new BitBadgesSigningClient({ adapter });
const result = await client.signAndBroadcast(messages);
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter } from 'bitbadges';

// Server side: Cosmos path
const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
// or GenericCosmosAdapter.fromPrivateKey(process.env.PRIVATE_KEY!, 'bitbadges-1')

const client = new BitBadgesSigningClient({ adapter });
const result = await client.signAndBroadcast(messages);
```

{% hint style="warning" %}
The same mnemonic or key yields a different address per adapter. `GenericEvmAdapter` derives an Ethereum address (keccak256, path `m/44'/60'/0'/0/0`). `GenericCosmosAdapter.fromMnemonic` also derives on `m/44'/60'/0'/0/0` but produces the Cosmos address (ripemd160 of sha256). Keplr and the chain registry default to coin type 118. Check `adapter.address` and fund that address.
{% endhint %}

## Options

```ts
interface SigningClientOptions {
  adapter: WalletAdapter; // required
  network?: 'mainnet' | 'testnet' | 'local'; // default 'mainnet'
  apiUrl?: string; // override the preset BitBadges API URL
  nodeUrl?: string; // override the preset LCD URL
  cosmosChainId?: string; // override the preset Cosmos chain ID
  evmChainId?: number; // override the preset EVM chain ID
  evmRpcUrl?: string; // override the preset EVM JSON-RPC URL
  sequenceRetryEnabled?: boolean; // default true
  maxSequenceRetries?: number; // default 3
  gasMultiplier?: number; // default 1.3
  defaultGasLimit?: number; // default 400000, used when simulate is false
  evmPrecompileGasLimit?: number; // default 2000000
  apiKey?: string; // BitBadges API key for account lookups and broadcast; create one at https://bitbadges.io/developer
}
```

```ts
interface SignAndBroadcastOptions {
  memo?: string;
  fee?: SigningFee; // { amount, denom, gas }; skips auto-calculation
  simulate?: boolean; // default true for Cosmos, false for EVM
  gasMultiplier?: number; // per-call override
}
```

```ts
interface BroadcastResult {
  txHash: string;
  success: boolean; // code === 0
  code: number; // 0 on success
  error?: string;
  rawResponse: any;
}
```

## Network Presets

```ts
import { NETWORK_CONFIGS } from 'bitbadges';

NETWORK_CONFIGS['mainnet'];
// { apiUrl: 'https://api.bitbadges.io', nodeUrl: 'https://lcd.bitbadges.io',
//   cosmosChainId: 'bitbadges-1', evmChainId: 50024, evmRpcUrl: 'https://evm-rpc.bitbadges.io' }

NETWORK_CONFIGS['testnet'];
// { apiUrl: 'https://api.bitbadges.io/testnet', nodeUrl: 'https://lcd-testnet.bitbadges.io',
//   cosmosChainId: 'bitbadges-2', evmChainId: 50025, evmRpcUrl: 'https://evm-rpc-testnet.bitbadges.io',
//   disabled: true }

NETWORK_CONFIGS['local'];
// { apiUrl: 'http://localhost:3001', nodeUrl: 'http://localhost:1317',
//   cosmosChainId: 'bitbadges-1', evmChainId: 90123, evmRpcUrl: 'http://localhost:8545' }
```

```ts
const client = new BitBadgesSigningClient({ adapter }); // mainnet
const local = new BitBadgesSigningClient({ adapter, network: 'local' });
const custom = new BitBadgesSigningClient({ adapter, network: 'mainnet', apiUrl: 'https://api.example.com' });
```

The testnet preset is marked `disabled` and the client throws when you select it. Set `BITBADGES_TESTNET_OFFLINE=false` in the environment to bypass the guard for a private chain that reuses the testnet chain ID. See [Testnet](../../chain/testnet.md).

## Wallet Adapters

```ts
// Cosmos: browser
GenericCosmosAdapter.fromKeplr(chainId: string)
GenericCosmosAdapter.fromLeap(chainId: string)
GenericCosmosAdapter.fromCosmostation(chainId: string)
GenericCosmosAdapter.fromBrowserWallet(wallet: KeplrLike, chainId: string, prefix = 'bb')

// Cosmos: server side
GenericCosmosAdapter.fromMnemonic(mnemonic: string, chainId: string, options?: string | { prefix?: string })
GenericCosmosAdapter.fromPrivateKey(privateKey: string, chainId: string, options?: string | { prefix?: string })

// EVM: server side
GenericEvmAdapter.fromMnemonic(mnemonic: string, evmRpcUrl: string, options?: EvmAdapterOptions)
GenericEvmAdapter.fromPrivateKey(privateKey: string, evmRpcUrl: string, options?: EvmAdapterOptions)

// EVM: browser
GenericEvmAdapter.fromSigner(signer: ethers.Signer, options?: EvmAdapterOptions)
GenericEvmAdapter.fromProvider(provider: EIP1193Provider, options?: EvmAdapterOptions)
GenericEvmAdapter.fromBrowserWallet(options?: EvmAdapterOptions)
```

`EvmAdapterOptions` has one field, `expectedChainId`. When set, the adapter throws if the wallet is on another network: "Wallet is connected to chain X, but expected chain Y."

```ts
const adapter = await GenericEvmAdapter.fromSigner(signer, { expectedChainId: NETWORK_CONFIGS['mainnet'].evmChainId });
```

Every adapter implements `WalletAdapter`: `chainType`, `address`, `getPublicKey()`, and either `signDirect()` (Cosmos) or `sendEvmTransaction()` plus `estimateEvmGas()` (EVM). The client picks the path from `chainType`. EVM adapters cannot sign Cosmos `signDirect` payloads. Implement the interface yourself to plug in a custom signer.

## Gas and Fees

```ts
await client.signAndBroadcast(messages); // simulate, then gasLimit = gasUsed * gasMultiplier
await client.signAndBroadcast(messages, { simulate: false }); // use defaultGasLimit
await client.signAndBroadcast(messages, { fee: { amount: '10000000', denom: 'ubadge', gas: '500000' } });
```

`simulate(messages, { memo? })` returns `{ gasUsed, gasLimit, fee, events? }` without signing. `simulateAndReview` adds parsed events and per-address net changes; see [Simulation Balance Diffs](../snippets/simulation-balance-diffs.md).

## Sequence and Account Cache

```ts
const info = await client.getAccountInfo(); // cached: { address, accountNumber, sequence, publicKey }
const fresh = await client.getAccountInfo(true); // refetch
client.clearCache();
```

After a successful broadcast the cached sequence increments. On a sequence mismatch error the client clears the cache, refetches, and retries up to `maxSequenceRetries` times when `sequenceRetryEnabled` is true. `accountNumber` and `sequence` are bigints at runtime.

## Multiple Messages

```ts
import { MsgTransferTokens, MsgSetTokenMetadata, MsgSetCollectionMetadata } from 'bitbadges';

const BASE = 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi';

await client.signAndBroadcast(
  [
    new MsgTransferTokens({
      creator: client.address,
      collectionId: '1',
      transfers: [
        {
          from: client.address,
          toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'],
          balances: [{ amount: '1', tokenIds: [{ start: '1', end: '1' }], ownershipTimes: [{ start: '1', end: '18446744073709551615' }] }]
        }
      ]
    }),
    new MsgSetTokenMetadata({
      creator: client.address,
      collectionId: '1',
      tokenMetadata: [{ uri: `${BASE}/{id}.json`, tokenIds: [{ start: '1', end: '100' }], customData: '' }],
      canUpdateTokenMetadata: []
    }),
    new MsgSetCollectionMetadata({
      creator: client.address,
      collectionId: '1',
      collectionMetadata: { uri: `${BASE}/collection.json`, customData: '' },
      canUpdateCollectionMetadata: []
    })
  ],
  { memo: 'Batch update' }
);
```

Messages run in order. On the EVM path, several tokenization messages become one `executeMultiple` precompile call. Mixing modules (tokenization plus gamm) in one EVM transaction is not supported; use the Cosmos path for that.

## Errors

```ts
try {
  const result = await client.signAndBroadcast(messages);
  if (!result.success) {
    // Broadcast happened; the chain rejected it
    console.error(result.code, result.error);
  }
} catch (error) {
  // Before broadcast: wallet rejected, network down, unsupported message on EVM
  console.error((error as Error).message);
}
```

## Related

- [Transactions](README.md)
- [Sign with a Cosmos Wallet](sign-cosmos.md)
- [Sign with an Ethereum Wallet](sign-ethereum.md)
- [Broadcast](broadcast.md)
