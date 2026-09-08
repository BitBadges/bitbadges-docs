---
description: "Wire BitBadges into a React or Next.js app: install, connect a wallet, query a collection, and sign and broadcast."
---

# React Quickstart

At the end you have a Next.js page that connects Keplr or MetaMask, shows a collection name, and sends a token transfer on mainnet.

Assumptions: Next.js 14 or newer with the App Router. The components also work in plain React or the Pages Router, but the server handlers below need equivalent backend routes in those apps. The `'use client'` directive is specific to the App Router. Examples use mainnet (`bitbadges-1`, EVM chain `50024`). Testnet is offline; see [Testnet](../chain/testnet.md).

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

export function CollectionInfo({ collectionId }: { collectionId: string }) {
  const [name, setName] = useState('');

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/collection?collectionId=${encodeURIComponent(collectionId)}`)
      .then(async (response) => {
        if (!response.ok) throw new Error('Collection lookup failed');
        return response.json();
      })
      .then((data) => {
        if (!cancelled) setName(data.name || 'Untitled');
      })
      .catch(() => {
        if (!cancelled) setName('Unable to load collection');
      });
    return () => {
      cancelled = true;
    };
  }, [collectionId]);

  return (
    <p>
      Collection #{collectionId}: {name}
    </p>
  );
}
```

Keep the API key on your server. API keys identify the credit-paying account; user authorization scopes belong to separate access tokens. There is no read-only API-key scope to make a public key safe from credit consumption. Set `BITBADGES_API_KEY` in your server environment and add this App Router handler:

```ts
// app/api/collection/route.ts
import { BitBadgesAPI, BigIntify } from 'bitbadges';

const api = new BitBadgesAPI({
  convertFunction: BigIntify,
  apiKey: process.env.BITBADGES_API_KEY
});

export async function GET(request: Request) {
  const collectionId = new URL(request.url).searchParams.get('collectionId');
  if (!collectionId || !/^[1-9]\d*$/.test(collectionId)) {
    return Response.json({ error: 'Invalid collection ID' }, { status: 400 });
  }
  try {
    const { metadata } = await api.getCollection(collectionId);
    return Response.json({ name: metadata.name });
  } catch {
    return Response.json({ error: 'Collection lookup failed' }, { status: 502 });
  }
}
```

`BitBadgesAPI` needs no wallet. Plain React apps need an equivalent backend route. Apply your app's authentication or rate limiting to this route before exposing it publicly, since requests consume your API credits.

## 5. Sign and Broadcast

```tsx
// app/components/TransferButton.tsx
'use client';

import { useState } from 'react';
import { BitBadgesSigningClient, MsgTransferTokens, type WalletAdapter } from 'bitbadges';

export function TransferButton({ adapter }: { adapter: WalletAdapter }) {
  const [txHash, setTxHash] = useState('');

  async function send() {
    const client = new BitBadgesSigningClient({
      adapter,
      network: 'mainnet',
      apiUrl: window.location.origin // Cosmos simulate/broadcast use the server route below
    });

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

Cosmos signing needs the API's simulation and broadcast routes. Forward those two operations through your server so the API key stays private:

```ts
// app/api/v0/[operation]/route.ts
import { BitBadgesAPI, BigIntify } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });

export async function POST(request: Request) {
  const operation = new URL(request.url).pathname.split('/').pop();
  if (operation !== 'simulate' && operation !== 'broadcast') {
    return Response.json({ error: 'Unknown operation' }, { status: 404 });
  }
  try {
    const body = await request.json();
    if (typeof body?.tx_bytes !== 'string') {
      return Response.json({ error: 'Expected encoded transaction bytes' }, { status: 400 });
    }
    const payload = { tx_bytes: body.tx_bytes, mode: 'BROADCAST_MODE_SYNC' };
    const result = operation === 'simulate' ? await api.simulateTx(payload) : await api.broadcastTx(payload);
    return Response.json(result);
  } catch {
    return Response.json({ error: 'Transaction request failed' }, { status: 502 });
  }
}
```

Apply the same app authentication or rate limiting as on the collection route. The server forwards transaction bytes; the wallet signs them in the browser. The client estimates gas, tracks the sequence, and retries on mismatch. EVM adapters send through the EVM RPC instead. The sender must hold the chosen token and satisfy the collection and user approvals; replace collection `1` with a collection you can transfer. If you only need wallet identity, use [Sign In with BitBadges](../api/sign-in/README.md).

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


## Next Steps

- [Signing Client](transactions/signing-client.md): every option, network preset, and error path
- [Snippets](snippets/README.md): balance lookups, metadata, transfers with increments, approval inspection
- [Types](types.md): `NumberType`, `BigIntify` and `Stringify`, the balance array
