---
description: "Install the bitbadges TypeScript SDK, create a BitBadgesAPI client, sign and broadcast transactions, and find the helper you need."
---

# BitBadges SDK

The `bitbadges` npm package is the TypeScript SDK for the BitBadges API, the chain, and transaction signing. Use it from a browser app, a backend, or an agent.

## Install

```bash
npm install bitbadges
```

The package name is `bitbadges`. Install `ethers` as well if you sign with an EVM wallet or a server-side key. The SDK loads `ethers` on demand for those paths.

## Query the BitBadges API

```ts
import { BitBadgesAPI, BigIntify } from 'bitbadges';

const api = new BitBadgesAPI({
  convertFunction: BigIntify, // responses arrive as strings; convert numbers to bigint
  apiKey: process.env.BITBADGES_API_KEY, // create one at https://bitbadges.io/developer
  // apiUrl defaults to https://api.bitbadges.io
});

const { collection, metadata } = await api.getCollection('1');
console.log(metadata.name, collection.collectionApprovals.length);

const { account } = await api.getAccount({ address: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d' });
console.log(account.accountNumber, account.sequence);
```

{% hint style="info" %}
Ask your agent. With the [MCP builder tools](../agents/setup.md) wired, the queries on this page are one prompt away:

```text
Fetch collection 1 and the account bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d and summarize both.
```

Building and signing still end in a review link you open yourself.
{% endhint %}

`BitBadgesAPI` wraps every REST route with typed request and response classes. If `apiKey` or `apiUrl` is omitted, the client reads `BITBADGES_API_KEY` and `BITBADGES_API_URL` from the environment. Every numeric field in a response is converted with `convertFunction` (`BigIntify`, `Numberify`, or `Stringify`). See [Types](types.md) for why.

The API is a hosted service with keys and credits. Base URL, credits, limits, and pagination are documented under [BitBadges API](../api/README.md). The full route list is at [API reference](../api-reference).

## Sign and Broadcast

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgTransferTokens } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromKeplr('bitbadges-1');
const client = new BitBadgesSigningClient({ adapter }); // network defaults to 'mainnet'

const result = await client.signAndBroadcast([
  new MsgTransferTokens({
    creator: client.address,
    collectionId: '1',
    transfers: [
      {
        from: client.address,
        toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'],
        balances: [
          {
            amount: '1',
            tokenIds: [{ start: '1', end: '1' }],
            ownershipTimes: [{ start: '1', end: '18446744073709551615' }]
          }
        ]
      }
    ]
  })
]);

console.log(result.success, result.txHash);
```

`BitBadgesSigningClient` fetches the account, simulates for gas, signs with a wallet adapter, broadcasts, and retries on sequence mismatch. Adapters exist for Keplr, Leap, Cosmostation, MetaMask, any EIP-1193 provider, and server-side mnemonics or private keys. The full pipeline and the manual path are under [Transactions](transactions/README.md).

## Convert Addresses

```ts
import { convertToBitBadgesAddress, convertToEthAddress } from 'bitbadges';

const bb = convertToBitBadgesAddress('0x0bc63cfe31d5218eb414b142c799e20964a54a1a');
// bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
const eth = convertToEthAddress(bb);
// 0x0bC63Cfe31D5218eB414b142c799e20964a54A1A
```

## Package Layout

Everything is exported from the package root. The source folders map to these areas.

| Area | Source folder | What it holds |
| --- | --- | --- |
| Core helpers | `core/` | `Balance`, `BalanceArray`, `UintRange`, `UintRangeArray`, `AddressList`, `TransferWithIncrements`, approval utilities, `interpretTransaction`, simulation event parsing |
| API client | `api-indexer/` | `BitBadgesAPI`, request and response classes, `BitBadgesCollection`, `BitBadgesUserInfo`, metadata classes, `interpretCollection` |
| Transactions | `transactions/` | SDK message classes (`MsgTransferTokens`, `MsgCreateCollection`, and the rest), `TxContext`, `createTransactionPayload`, `createTxBroadcastBody`, EVM precompile conversion |
| Signing | `signing/` | `BitBadgesSigningClient`, `GenericCosmosAdapter`, `GenericEvmAdapter`, `NETWORK_CONFIGS` |
| Addresses | `address-converter/` | `convertToBitBadgesAddress`, `convertToEthAddress`, `isAddressValid` |
| Proto | `proto/` | Generated protobuf classes, exported as `proto.tokenization`, `proto.cosmos`, `proto.gamm`, and the other modules |
| Node REST | `node-rest-api/` | Typed helpers for chain LCD routes |
| CLI and MCP | `cli/`, `builder/` | The `bb` CLI commands and the MCP builder tools. Documented under [CLI](../cli/README.md) and [Agents](../agents/README.md) |

## Pages in This Section

| Page | Read it when |
| --- | --- |
| [React Quickstart](react-quickstart.md) | You are wiring a React or Next.js app: connect a wallet, query, sign |
| [Types](types.md) | You need the class vs interface rules, `NumberType`, and the converters |
| [Snippets](snippets/README.md) | You need a working example for balances, ranges, transfers, lists, metadata, approvals, or interpreters |
| [Transactions](transactions/README.md) | You build, sign, and broadcast transactions, with the signing client or by hand |

## Related

- [Token standard concepts](../token-standard/concepts/README.md)
- [SDK reference](reference/README.md)
- [bitbadgesjs on GitHub](https://github.com/bitbadges/bitbadgesjs)
