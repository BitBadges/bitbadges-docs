---
description: "Wire BitBadges into a React or Next.js app in four steps, install, connect a wallet, query a collection, sign and broadcast."
---

# React Quickstart

At the end you have a Next.js page that connects Keplr or MetaMask, shows a collection name, and sends a token transfer on mainnet.

Assumptions: Next.js 14 or newer with the App Router. Plain React (Vite) works the same; only the `'use client'` directive is Next.js specific. Pages Router users render the same components inside `_app.tsx`. Examples use mainnet (`bitbadges-1`, EVM chain `50024`). Testnet is offline; see [Testnet](../chain/testnet.md).

## 1. Install

```bash
npm install bitbadges ethers
```

`ethers` is only needed for MetaMask or other EVM wallets. Keplr-only apps can skip it.

## 2. Connect a Cosmos Wallet (Keplr)

```tsx
// app/components/ConnectKeplr.tsx
'use client';

import { useState } from 'react';
import { GenericCosmosAdapter, type WalletAdapter } from 'bitbadges';

export function ConnectKeplr({ onConnect }: { onConnect: (a: WalletAdapter) => void }) {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  async function connect() {
    try {
      const adapter = await GenericCosmosAdapter.fromKeplr('bitbadges-1');
      setAddress(adapter.address);
      onConnect(adapter);
    } catch (e: any) {
      setError(e.message ?? 'Failed to connect Keplr');
    }
  }

  return (
    <div>
      {address ? <p>Connected: {address}</p> : <button onClick={connect}>Connect Keplr</button>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
```

`fromKeplr` throws when the extension is missing. Detect it with `typeof window !== 'undefined' && (window as any).keplr` and send the user to [keplr.app](https://www.keplr.app/). `GenericCosmosAdapter.fromLeap` and `fromCosmostation` work the same way.

## 3. Connect an EVM Wallet (MetaMask)

```tsx
// app/components/ConnectMetaMask.tsx
'use client';

import { useState } from 'react';
import { GenericEvmAdapter, NETWORK_CONFIGS, type WalletAdapter } from 'bitbadges';

export function ConnectMetaMask({ onConnect }: { onConnect: (a: WalletAdapter) => void }) {
  const [address, setAddress] = useState('');

  async function connect() {
    const adapter = await GenericEvmAdapter.fromBrowserWallet({
      expectedChainId: NETWORK_CONFIGS['mainnet'].evmChainId // 50024; throws on the wrong network
    });
    setAddress(adapter.address);
    onConnect(adapter);
  }

  return address ? <p>Connected: {address}</p> : <button onClick={connect}>Connect MetaMask</button>;
}
```

The same user gets a different address from each adapter (Cosmos derivation vs Ethereum derivation). Pick one path per app and fund that address. Details are in [Signing Client](transactions/signing-client.md).

## 4. Query a Collection

```tsx
// app/components/CollectionInfo.tsx
'use client';

import { useEffect, useState } from 'react';
import { BitBadgesAPI, BigIntify } from 'bitbadges';

const api = new BitBadgesAPI({
  convertFunction: BigIntify,
  apiKey: process.env.NEXT_PUBLIC_BITBADGES_API_KEY // read-only key from bitbadges.io/developer
});

export function CollectionInfo({ collectionId }: { collectionId: string }) {
  const [name, setName] = useState('');

  useEffect(() => {
    api.getCollection(collectionId).then((res) => setName(res.metadata.name || 'Untitled'));
  }, [collectionId]);

  return (
    <p>
      Collection #{collectionId}: {name}
    </p>
  );
}
```

`BitBadgesAPI` needs no wallet. `NEXT_PUBLIC_*` variables reach the browser, so only expose a read-only key there. Keep keys with write scopes on your server and call your own route from the client.

## 5. Sign and Broadcast

```tsx
// app/components/TransferButton.tsx
'use client';

import { useState } from 'react';
import { BitBadgesSigningClient, MsgTransferTokens, type WalletAdapter } from 'bitbadges';

export function TransferButton({ adapter }: { adapter: WalletAdapter }) {
  const [txHash, setTxHash] = useState('');

  async function send() {
    const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

    const msg = new MsgTransferTokens({
      creator: client.address,
      collectionId: '1',
      transfers: [
        {
          from: client.address,
          toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'], // recipient
          balances: [
            {
              amount: '1',
              tokenIds: [{ start: '1', end: '1' }],
              ownershipTimes: [{ start: '1', end: '18446744073709551615' }] // forever
            }
          ]
        }
      ]
    });

    const result = await client.signAndBroadcast([msg]);
    if (result.success) setTxHash(result.txHash);
    else console.error('Failed:', result.error);
  }

  return (
    <>
      <button onClick={send}>Transfer</button>
      {txHash && <p>Tx: {txHash}</p>}
    </>
  );
}
```

The client estimates gas, tracks the sequence, and retries on mismatch. It routes through EVM precompiles when the adapter is an EVM adapter. If you only need wallet identity and not transactions, use [Sign In with BitBadges](../api/sign-in/README.md) instead.

## 6. Put It Together

```tsx
// app/page.tsx
'use client';

import { useState } from 'react';
import type { WalletAdapter } from 'bitbadges';
import { ConnectKeplr } from './components/ConnectKeplr';
import { CollectionInfo } from './components/CollectionInfo';
import { TransferButton } from './components/TransferButton';

export default function Home() {
  const [adapter, setAdapter] = useState<WalletAdapter | null>(null);

  return (
    <main>
      <h1>My BitBadges app</h1>
      <CollectionInfo collectionId="1" />
      {adapter ? <TransferButton adapter={adapter} /> : <ConnectKeplr onConnect={setAdapter} />}
    </main>
  );
}
```

The [bitbadges-frontend](https://github.com/BitBadges/bitbadges-frontend) repo is a production Next.js app built on these primitives. Read it for wallet state in React context, network switching, and transaction UX (approve, reject, pending).

## Next Steps

- [Signing Client](transactions/signing-client.md): every option, network preset, and error path
- [Snippets](snippets/README.md): balance lookups, metadata, transfers with increments, approval inspection
- [Types](types.md): `NumberType`, `BigIntify` and `Stringify`, the balance array
