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

const { account } = await api.getAccount({ address: 'bb1...' });
console.log(account.accountNumber, account.sequence);
```

`BitBadgesAPI` wraps every REST route with typed request and response classes. If `apiKey` or `apiUrl` is omitted, the client reads `BITBADGES_API_KEY` and `BITBADGES_API_URL` from the environment. Every numeric field in a response is converted with `convertFunction` (`BigIntify`, `Numberify`, or `Stringify`). See [Types](types.md) for why.

The API is a hosted service with keys and credits. Base URL, credits, limits, and pagination are documented under [BitBadges API](../api/README.md). The full route list is at [API reference](../api-reference).

## Sign and broadcast

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
        toAddresses: ['bb1...'],
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

## Convert addresses

```ts
import { convertToBitBadgesAddress, convertToEthAddress } from 'bitbadges';

const bb = convertToBitBadgesAddress('0x14574a6DFF2Ddf9e07828b4345d3040919AF5652');
// bb1z3t55m0l9h0eupuz3dp5t5cypyv674jj7mz2jw
const eth = convertToEthAddress(bb);
```

## Package layout

Everything is exported from the package root. The source folders map to these areas.

| Area | Source folder | What it holds |
| --- | --- | --- |
| Core helpers | `core/` | `Balance`, `BalanceArray`, `UintRange`, `UintRangeArray`, `AddressList`, `TransferWithIncrements`, approval utilities, `interpretTransaction`, simulation event parsing |
| API client | `api-indexer/` | `BitBadgesAPI`, request and response classes, `BitBadgesCollection`, `BitBadgesUserInfo`, metadata classes, `interpretCollection` |
| Transactions | `transactions/` | SDK message classes (`MsgTransferTokens`, `MsgCreateCollection`, ...), `TxContext`, `createTransactionPayload`, `createTxBroadcastBody`, EVM precompile conversion |
| Signing | `signing/` | `BitBadgesSigningClient`, `GenericCosmosAdapter`, `GenericEvmAdapter`, `NETWORK_CONFIGS` |
| Addresses | `address-converter/` | `convertToBitBadgesAddress`, `convertToEthAddress`, `isAddressValid` |
| Proto | `proto/` | Generated protobuf classes, exported as `proto.tokenization`, `proto.cosmos`, `proto.gamm`, ... |
| Node REST | `node-rest-api/` | Typed helpers for chain LCD routes |
| CLI and MCP | `cli/`, `builder/` | The `bb` CLI commands and the MCP builder tools. Documented under [CLI](../cli/README.md) and [Agents](../agents/README.md) |

## Pages in this section

| Page | Read it when |
| --- | --- |
| [React quickstart](react-quickstart.md) | You are wiring a React or Next.js app: connect a wallet, query, sign |
| [Types](types.md) | You need the class vs interface rules, `NumberType`, and the converters |
| [Snippets](snippets/README.md) | You need a working example for balances, ranges, transfers, lists, metadata, approvals, or interpreters |
| [Transactions](transactions/README.md) | You build, sign, and broadcast transactions, with the signing client or by hand |

## Related

- [Token standard concepts](../token-standard/concepts/README.md)
- [TypeDoc reference](https://bitbadges.github.io/bitbadgesjs/)
- [bitbadgesjs on GitHub](https://github.com/bitbadges/bitbadgesjs)
