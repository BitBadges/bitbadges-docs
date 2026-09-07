---
description: "Copy-paste bot patterns on mainnet. Mint a fungible token, conditional transfer, ownership gating, event subscription, and the builder tool workflow."
---

# Bot Examples

Copy-paste patterns for bots and agents that act on mainnet. Each example is a complete script; the addresses are the docs fixtures (alice `bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d` runs the bot, bob `bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue` is the user), so swap in your own.

Testnet is offline, so every example targets mainnet. Test on a low-value collection first. Testnet status and the faucet API shape: [Testnet](../chain/testnet.md).

## 1. Mint a Fungible Token

Create a fungible token collection with server-side signing. The collection message comes from `bb build`, the MCP builder tools (`get_transaction`), or the [Create a Collection](../guides/create-a-collection.md) guide, saved as `collection.json`.

```ts
import { readFileSync } from 'node:fs';
import { BitBadgesSigningClient, GenericEvmAdapter, NETWORK_CONFIGS, MsgCreateCollection } from 'bitbadges';

const adapter = await GenericEvmAdapter.fromMnemonic(process.env.MNEMONIC!, NETWORK_CONFIGS['mainnet'].evmRpcUrl);

const client = new BitBadgesSigningClient({
  adapter,
  network: 'mainnet'
});

// collection.json holds { "messages": [{ "typeUrl": "/tokenization.MsgCreateCollection", "value": {} }] } with the value filled in
const built = JSON.parse(readFileSync('./collection.json', 'utf8'));
const msg = new MsgCreateCollection({ ...built.messages[0].value, creator: client.address });

const result = await client.signAndBroadcast([msg]);

if (result.success) {
  console.log('Collection created. TX:', result.txHash);
} else {
  console.error('Failed:', result.error);
}
```

Load the `fungible-token` skill for the message shape: `bb dev skills fungible-token` or `get_skill_instructions({ skillId: "fungible-token" })`.

## 2. Check a Balance and Transfer on a Condition

Top up bob's Demo Coin (collection 2, token ID 1) when he holds fewer than 10 units.

```ts
import { BigIntify, BitBadgesAPI, BitBadgesSigningClient, GenericEvmAdapter, NETWORK_CONFIGS, MsgTransferTokens } from 'bitbadges';

const api = new BitBadgesAPI({ apiUrl: 'https://api.bitbadges.io', apiKey: process.env.BITBADGES_API_KEY, convertFunction: BigIntify });

const COLLECTION_ID = '2';
const BOB = 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue';

// Check balance
const balanceDoc = await api.getBalanceByAddress(COLLECTION_ID, BOB);
const held = balanceDoc.balances
  .filter((b) => b.tokenIds.some((range) => range.start <= 1n && range.end >= 1n))
  .reduce((sum, b) => sum + b.amount, 0n);

// Conditional transfer
if (held < 10n) {
  const adapter = await GenericEvmAdapter.fromMnemonic(process.env.MNEMONIC!, NETWORK_CONFIGS['mainnet'].evmRpcUrl);

  const client = new BitBadgesSigningClient({
    adapter,
    network: 'mainnet'
  });

  const result = await client.signAndBroadcast([
    new MsgTransferTokens({
      creator: client.address,
      collectionId: COLLECTION_ID,
      transfers: [
        {
          from: client.address,
          toAddresses: [BOB],
          balances: [
            {
              tokenIds: [{ start: 1n, end: 1n }],
              ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
              amount: 10n - held
            }
          ]
        }
      ]
    })
  ]);

  console.log('Transfer result:', result.txHash, result.success);
}
```

## 3. Gate Access (Verify Ownership)

Check that a user owns a token before granting access.

```ts
import { BigIntify, BitBadgesAPI } from 'bitbadges';

const api = new BitBadgesAPI({ apiUrl: 'https://api.bitbadges.io', apiKey: process.env.BITBADGES_API_KEY, convertFunction: BigIntify });

const GATING_COLLECTION_ID = '1';

async function checkAccess(userAddress: string): Promise<boolean> {
  try {
    const balanceDoc = await api.getBalanceByAddress(GATING_COLLECTION_ID, userAddress);

    // Does the user own token ID 1?
    return balanceDoc.balances.some(
      (b) => b.tokenIds.some((range) => range.start <= 1n && range.end >= 1n) && b.amount > 0n
    );
  } catch (error) {
    console.error('Ownership check failed:', error);
    return false;
  }
}

const allowed = await checkAccess('bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue');
console.log(allowed ? 'grant access' : 'deny access');
```

For an HTTP-native version of this check (the server answers 402 and the agent proves ownership with a signature), use [Gate access](../guides/gate-access.md).

## 4. Subscribe to Events and React

Listen for transfers on a collection and act on each one.

```ts
import WebSocket from 'ws';

const RPC_WS = 'wss://rpc.bitbadges.io/websocket';

function connect() {
  const ws = new WebSocket(RPC_WS);

  ws.on('open', () => {
    ws.send(
      JSON.stringify({
        jsonrpc: '2.0',
        method: 'subscribe',
        id: 1,
        params: {
          query: "tm.event='Tx' AND message.action='/tokenization.MsgTransferTokens'"
        }
      })
    );
    console.log('Listening for transfers');
  });

  ws.on('message', async (data: WebSocket.Data) => {
    const msg = JSON.parse(data.toString());

    if (msg.result?.data?.value?.TxResult) {
      const txHash = msg.result.events?.['tx.hash']?.[0];
      console.log('Transfer detected:', txHash);
      await handleTransfer(txHash);
    }
  });

  ws.on('close', () => {
    console.log('Disconnected, reconnecting in 5s');
    setTimeout(connect, 5000);
  });
}

async function handleTransfer(txHash: string) {
  // your logic: notify, update a database, trigger another transaction
  console.log(`Processing transfer ${txHash}`);
}

connect();
```

Query syntax and event types: [WebSocket Events](../chain/websocket-events.md).

## 5. Builder Tool Workflow

With the [MCP Builder Tools](mcp-tools.md) (Claude Desktop, Claude Code, Cursor), build a collection with the session tools and verify before handing off. Every call below is the JSON the client sends; the same files work with `bb dev tools call <name> --args-file`.

```text
# 1. Load the skill
get_skill_instructions({ "skillId": "fungible-token" })

# 2. Build with per-field tools (all in parallel)
set_standards({ "standards": ["Fungible Tokens"] })
set_valid_token_ids({ "tokenIds": [{ "start": "1", "end": "1" }] })
set_default_balances({
  "defaultBalances": {
    "balances": [],
    "outgoingApprovals": [],
    "incomingApprovals": [],
    "autoApproveSelfInitiatedOutgoingTransfers": true,
    "autoApproveSelfInitiatedIncomingTransfers": true,
    "autoApproveAllIncomingTransfers": true
  }
})
set_permissions({ "preset": "locked-approvals" })
set_collection_metadata({
  "name": "Demo Coin",
  "description": "Token managed by my AI agent",
  "image": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/coin.png"
})
add_approval({
  "approvalId": "public-mint",
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "tokenIds": [{ "start": "1", "end": "1" }],
  "approvalCriteria": {
    "overridesFromOutgoingApprovals": true,
    "overridesToIncomingApprovals": true,
    "approvalAmounts": {
      "overallApprovalAmount": "1000000",
      "perToAddressApprovalAmount": "10",
      "perFromAddressApprovalAmount": "0",
      "perInitiatedByAddressApprovalAmount": "0",
      "amountTrackerId": "public-mint",
      "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
    }
  }
})

# 3. (Optional) auto-mint to yourself at creation
add_transfer({
  "transfers": [
    {
      "from": "Mint",
      "toAddresses": ["bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"],
      "balances": [
        {
          "amount": "10",
          "tokenIds": [{ "start": "1", "end": "1" }],
          "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }]
        }
      ],
      "prioritizedApprovals": [
        { "approvalId": "public-mint", "approvalLevel": "collection", "approverAddress": "", "version": "0" }
      ],
      "onlyCheckPrioritizedCollectionApprovals": true
    }
  ]
})

# 4. Verify (in parallel)
validate_transaction({})
review_collection({})
simulate_transaction({})

# 5. Export and hand off
get_transaction({})
get_review_url({})   # give the user reviewUrl to review and sign
```

### CLI Template Build

```bash
# Vault token (prints transaction JSON)
bb build vault --backing-coin USDC --name "Demo Vault" --description "USDC vault" \
  --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/vault.png --explain

# Subscription collection
bb build subscription --interval monthly --price 10 --denom USDC --recipient bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d \
  --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json

# Review and sign in the browser
bb build vault --backing-coin USDC --name "Demo Vault" --description "USDC vault" \
  --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/vault.png | bb preview - --open
```

Every template builder: [Build](../cli/build.md).

### Query Sequence (No Signing)

```text
search({ "query": "Demo Coin" })
  -> query_collection({ "collectionId": "2" })
  -> query_balance({ "collectionId": "2", "address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue" })
  -> verify_ownership({ "address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue", "collectionId": "2", "tokenId": "1" })
```

The builder builds and validates but never signs or broadcasts. Sign with the SDK signing client, the chain binary, or the review-and-sign link.

## Tips for Agents

- Simulate before broadcasting. Use `simulate_transaction`, `bb simulate`, or the signing client's `simulate: true` option to catch errors before spending gas.
- Test on a low-value collection first. Testnet is offline; see [Testnet](../chain/testnet.md) for status and the faucet shape.
- Check `result.success` and `result.error` after every broadcast.
- The signing client handles nonce and sequence with retries.
- Keep credentials in environment variables (`MNEMONIC`, `BITBADGES_API_KEY`). Never hardcode them.
- Bound what an agent can spend with an on-chain [Spending Authorization](spending-authorization.md).

## Related

- [Signing Client](../sdk/transactions/signing-client.md)
- [Claims API](../api/claims/endpoints.md) for automated minting through claims
- [Agents](README.md)
