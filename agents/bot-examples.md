---
description: "Copy-paste bot patterns on mainnet. Mint a fungible token, conditional transfer, ownership gating, event subscription, and the builder tool workflow."
---

# Bot examples

Copy-paste patterns for bots and agents that act on mainnet. Each example is a complete script skeleton; fill in the collection configuration and addresses.

Testnet is offline, so every example targets mainnet. Test on a low-value collection first. Testnet status and the faucet API shape: [Testnet](../token-standard/network/testnet.md).

## 1. Mint a fungible token

Create a fungible token collection with server-side signing.

```ts
import { BitBadgesSigningClient, GenericEvmAdapter, NETWORK_CONFIGS, MsgCreateCollection } from 'bitbadges';

const adapter = await GenericEvmAdapter.fromMnemonic(
  process.env.BOT_MNEMONIC!,
  NETWORK_CONFIGS['mainnet'].evmRpcUrl
);

const client = new BitBadgesSigningClient({
  adapter,
  network: 'mainnet'
});

const result = await client.signAndBroadcast([
  MsgCreateCollection.create({
    creator: client.address,
    // ... collection configuration
    // See MsgCreateCollection for the full field list
  })
]);

if (result.success) {
  console.log('Collection created! TX:', result.txHash);
} else {
  console.error('Failed:', result.error);
}
```

Generate the collection configuration with `bb build fungible-token` or the [Create a collection](../guides/create-a-collection.md) guide.

## 2. Check a balance and transfer on a condition

```ts
import { BitBadgesAPI, BitBadgesSigningClient, GenericEvmAdapter, NETWORK_CONFIGS, MsgTransferTokens } from 'bitbadges';

const api = new BitBadgesAPI({ apiUrl: 'https://api.bitbadges.io' });

// Check balance
const balanceRes = await api.getBalance({
  collectionId: '1',
  address: 'bb1targetaddress...'
});

const balance = balanceRes.balance; // token ID ranges, amounts, ownership times

// Conditional transfer
if (/* condition based on balance */) {
  const adapter = await GenericEvmAdapter.fromMnemonic(
    process.env.BOT_MNEMONIC!,
    NETWORK_CONFIGS['mainnet'].evmRpcUrl
  );

  const client = new BitBadgesSigningClient({
    adapter,
    network: 'mainnet'
  });

  const result = await client.signAndBroadcast([
    MsgTransferTokens.create({
      creator: client.address,
      collectionId: '1',
      transfers: [{
        from: client.address,
        toAddresses: ['bb1targetaddress...'],
        balances: [{
          tokenIds: [{ start: 1n, end: 1n }],
          ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
          amount: 1n
        }]
      }]
    })
  ]);

  console.log('Transfer result:', result.txHash);
}
```

## 3. Gate access (verify ownership)

Check that a user owns a token before granting access.

```ts
import { BitBadgesAPI } from 'bitbadges';

const api = new BitBadgesAPI({ apiUrl: 'https://api.bitbadges.io' });

async function checkAccess(userAddress: string): Promise<boolean> {
  try {
    const balanceRes = await api.getBalance({
      collectionId: '5',  // your gating collection
      address: userAddress
    });

    // Does the user own token ID 1?
    const hasAccess = balanceRes.balance.balances.some(b =>
      b.tokenIds.some(range => range.start <= 1n && range.end >= 1n) &&
      b.amount > 0n
    );

    return hasAccess;
  } catch (error) {
    console.error('Ownership check failed:', error);
    return false;
  }
}

const allowed = await checkAccess('bb1useraddress...');
if (allowed) {
  // grant access
} else {
  // deny access
}
```

For an HTTP-native version of this check (the server answers 402 and the agent proves ownership with a signature), use [Gate access](../guides/gate-access.md).

## 4. Subscribe to events and react

Listen for transfers on a collection and act on each one.

```ts
import WebSocket from 'ws';

const ws = new WebSocket('wss://rpc.bitbadges.io/websocket');

ws.on('open', () => {
  ws.send(JSON.stringify({
    jsonrpc: '2.0',
    method: 'subscribe',
    id: 1,
    params: {
      query: "tm.event='Tx' AND message.action='/tokenization.MsgTransferTokens'"
    }
  }));
  console.log('Listening for transfers...');
});

ws.on('message', async (data: WebSocket.Data) => {
  const msg = JSON.parse(data.toString());

  if (msg.result?.data?.value?.TxResult) {
    const txHash = msg.result.events?.['tx.hash']?.[0];
    console.log('Transfer detected:', txHash);
    await handleTransfer(txHash);
  }
});

async function handleTransfer(txHash: string) {
  // your logic: notify, update a database, trigger another transaction
  console.log(`Processing transfer ${txHash}`);
}

ws.on('close', () => {
  console.log('Disconnected, reconnecting in 5s...');
  setTimeout(() => {
    // reconnect
  }, 5000);
});
```

Query syntax and event types: [WebSocket events](../token-standard/network/websocket-events.md).

## 5. Builder tool workflow

With the [MCP builder tools](mcp-tools.md) (Claude Desktop, Claude Code, Cursor), build a collection with the session tools and verify before handing off.

```text
# 1. Load the skill
get_skill_instructions({ skillId: "fungible-token" })

# 2. Build with per-field tools (all in parallel)
set_standards({ standards: ["Fungible Token"] })
set_valid_token_ids({ tokenIds: [{ start: "1", end: "1" }] })
set_default_balances({ ... })
set_permissions({ preset: "locked-approvals" })
set_collection_metadata({ name: "My Bot Token", description: "Token managed by my AI agent" })
add_approval({ approvalId: "public-mint", fromListId: "Mint", toListId: "All", ... })

# 3. (Optional) auto-mint to yourself at creation
add_transfer({ from: "Mint", toAddresses: ["bb1youraddress..."], balances: [...] })

# 4. Verify (in parallel)
validate_transaction()
review_collection()
simulate_transaction()

# 5. Export and hand off
get_transaction()
get_review_url()   # give the user reviewUrl to review and sign
```

### CLI template build

```bash
# Vault token (prints transaction JSON)
bb build vault --backing-coin USDC --name "My Vault" --explain

# Subscription collection
bb build subscription --interval monthly --price 10 --denom USDC --recipient bb1...

# Review and sign in the browser
bb build vault --backing-coin USDC --name "My Vault" | bb preview - --open
```

All 21 template builders: [Build](../cli/build.md).

### Query sequence (no signing)

```text
search({ query: "my collection name" })
  -> query_collection({ collectionId: "123" })
  -> query_balance({ collectionId: "123", address: "bb1..." })
  -> verify_ownership({ address: "bb1...", collectionId: "123", tokenId: "1" })
```

The builder builds and validates but never signs or broadcasts. Sign with the SDK signing client, the chain binary, or the review-and-sign link.

## Tips for agents

- Simulate before broadcasting. Use `simulate_transaction`, `bb simulate`, or the signing client's `simulate: true` option to catch errors before spending gas.
- Test on a low-value collection first. Testnet is offline; see [Testnet](../token-standard/network/testnet.md) for status and the faucet shape.
- Check `result.success` and `result.error` after every broadcast.
- The signing client handles nonce and sequence with retries.
- Keep credentials in environment variables (`BITBADGES_MNEMONIC`, `BITBADGES_API_KEY`). Never hardcode them.
- Bound what an agent can spend with an on-chain [Spending authorization](spending-authorization.md).

## Related

- [Signing client](../sdk/transactions/signing-client.md)
- [Claims API](../api/claims/endpoints.md) for automated minting through claims
- [Agents](README.md)
