---
description: "Dynamic stores are BitBadges-hosted address lists you update by API, UI, or Zapier and attach to claims through the whitelist plugin."
---

# Dynamic Stores

A dynamic store is an address list that BitBadges hosts for you. You add and remove addresses from anywhere that can send an HTTP request (a backend, a cron job, an agent, a Zapier zap), then attach the store to one or more claims. Eligibility management is decoupled from claim configuration.

See the [API reference](/api-reference) for every route's request and response schema.

The TypeScript snippets use the configured `BitBadgesApi` client from the [API setup example](../README.md#example).

## Example

Add bob to the store `store_demo_01`. `STORE_SECRET` holds the store's `dataSecret` from the developer portal.

```bash
curl -X POST https://api.bitbadges.io/api/v0/storeActions/single \
  -H "Content-Type: application/json" -H "x-api-key: $BITBADGES_API_KEY" \
  -d '{ "dynamicDataId": "store_demo_01", "dataSecret": "'"$STORE_SECRET"'",
        "actionName": "add", "payload": { "address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue" } }'
```

```ts
// Single action: POST /api/v0/storeActions/single
await BitBadgesApi.performStoreAction({
  dynamicDataId: 'store_demo_01',
  dataSecret: process.env.STORE_SECRET, // omit when signed in as the creator or manager
  actionName: 'add',                    // 'add' | 'remove'
  payload: { address: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue' }
});

// Batch: POST /api/v0/storeActions/batch
await BitBadgesApi.performBatchStoreAction({
  dynamicDataId: 'store_demo_01',
  dataSecret: process.env.STORE_SECRET,
  actions: [
    { actionName: 'add', payload: { address: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue' } },
    { actionName: 'add', payload: { address: 'bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf' } },
    { actionName: 'remove', payload: { address: 'bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr' } }
  ]
});
```

Both routes answer `200` with an empty object:

```json
{}
```

Attach it to a claim with the `whitelist` plugin:

```ts
const whitelistPlugin = {
  pluginId: 'whitelist',
  instanceId: 'store-gate',
  version: '0',
  publicParams: { maxUsesPerAddress: 1, hasPrivateList: true },
  privateParams: {
    useDynamicStore: true,
    dynamicDataId: 'store_demo_01',
    dataSecret: process.env.STORE_SECRET
  }
}
```

## How It Works

1. Create a store in the [developer portal](https://bitbadges.io/developer). You receive a store ID (`dynamicDataId`) and a store secret (`dataSecret`).
2. Add or remove addresses whenever your eligibility changes.
3. Attach the store to claims with the `whitelist` plugin.
4. Users claim. BitBadges checks whether the address is in the store.

One store can back many claims. Update it once and every attached claim reflects the change.

Store actions run through a queue. Expect a 1 to 2 second delay between the API call and the store update. If a user claims right after you add them, the store may not have caught up; add a small buffer or retry on the user side. Actions in one batch are processed together, so they stay consistent relative to each other.

## Payloads

```ts
interface iPerformStoreActionSingleWithBodyAuthPayload {
  _isSimulation?: boolean;     // dry run
  dynamicDataId: string;
  dataSecret?: string;         // omit when signed in as creator or manager
  actionName: string;          // 'add' | 'remove'
  payload: { address: string };
}

interface iPerformStoreActionBatchWithBodyAuthPayload {
  _isSimulation?: boolean;
  dynamicDataId: string;
  dataSecret?: string;
  actions: { actionName: string; payload: { address: string } }[];
}
```

The developer portal shows the exact route and body for your store if you want to send the request without the SDK.

## Data Model

```ts
interface iDynamicDataDoc {
  handlerId: 'addresses';      // the only supported handler
  dynamicDataId: string;
  label: string;
  dataSecret: string;
  data: string[];              // the stored addresses
  createdBy: BitBadgesAddress;
  managedBy: BitBadgesAddress;
  publicUseInClaims?: boolean; // anyone can attach the store to a claim
  createdAt?: number;          // UNIX ms
  lastUpdated?: number;        // UNIX ms
}
```

The store document after the batch above, as the developer portal shows it to the owner (synthesized from the SDK types; `dataSecret` is only returned to the owner):

```json
{
  "_docId": "store_demo_01",
  "handlerId": "addresses",
  "dynamicDataId": "store_demo_01",
  "label": "Eligible buyers",
  "dataSecret": "dss_4f9a1c7e2b8d6f3a0e5c9b2d7a4f1e8c",
  "data": ["bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue", "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf"],
  "createdBy": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "managedBy": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "publicUseInClaims": false,
  "createdAt": "1788652800000",
  "lastUpdated": "1788739200000"
}
```

Only addresses are supported as identifiers. Emails, usernames, and platform IDs are not.

## Authentication

| Caller | Requirement |
| --- | --- |
| Signed in as creator or manager | No `dataSecret` |
| API with a key | `dataSecret` in the body |
| Attaching a store you do not own | The store must have `publicUseInClaims: true`. Reads then need no secret; add and remove still require authentication. |

Keep the secret on your backend.

## Ways to Update a Store

**UI.** Manage entries directly in the developer portal: add, remove, and view addresses.

**API.** The single and batch routes above.

**Zapier.** The BitBadges Zapier integration connects 7000+ apps. Your trigger is the app you integrate; the action is **BitBadges: Add User to Dynamic Store**. Map fields from the trigger (for example an Eventbrite attendee's address) into the store action step. Zapier docs: [Field mapping](https://help.zapier.com/hc/en-us/articles/31709122224653-Enter-data-in-Zap-fields#01JC4MFMXXJXSS7GBAYZP32XKZ), [Send data between steps by mapping fields](https://help.zapier.com/hc/en-us/articles/8496343026701-Send-data-between-steps-by-mapping-fields). The action shows several identifier fields; fill only the one that matches your store type and leave the rest blank.

Zapier can also do the criteria check. Example: a Google Form collects an email, a zap triggers on each response, a Mailchimp step checks the subscriber, and the zap adds the user to the store on success. Point in-site claimers at the form with the `url-clicker` or `custom-instructions` plugin, or from the claim description.

## Integration Patterns

```ts
// Backend webhook: a purchase makes the buyer eligible
app.post('/webhooks/shopify-purchase', async (req, res) => {
  const buyerAddress = await lookupAddress(req.body.customer.email); // your own email to address mapping
  await BitBadgesApi.performStoreAction({
    dynamicDataId: 'store_demo_01',
    dataSecret: process.env.STORE_SECRET,
    actionName: 'add',
    payload: { address: buyerAddress }
  });
  res.sendStatus(200);
});
```

```ts
// Agent or model decides eligibility
const eligible = await yourModel.evaluate(userAddress);
if (eligible) {
  await BitBadgesApi.performStoreAction({
    dynamicDataId: 'store_demo_01',
    dataSecret: process.env.STORE_SECRET,
    actionName: 'add',
    payload: { address: userAddress }
  });
}
```

```ts
// Scheduled sync from your database
const eligibleUsers = await db.query('SELECT address FROM users WHERE eligible = true');
await BitBadgesApi.performBatchStoreAction({
  dynamicDataId: 'store_demo_01',
  dataSecret: process.env.STORE_SECRET,
  actions: eligibleUsers.map((u) => ({ actionName: 'add', payload: { address: u.address } }))
});
```

A custom plugin with a status webhook can add addresses to a store when a claim succeeds, which chains claims together.

Why this shape works: the store is reusable across claims, updates apply in real time (check a user in at the door and they can claim), BitBadges holds the storage and validation so you only send update hooks, and the claim builder can attach a store in one click (select it in the templates section, or open the store's page and click **Create Claim**).

## Limits

- Off-chain stores work only in off-chain contexts (claims through the `whitelist` plugin). They are not readable on-chain.
- Only addresses are supported.
- Queue processing adds a 1 to 2 second delay.

## On-Chain Dynamic Stores

The chain has its own dynamic stores: boolean address-value stores managed by transactions and checked by approval criteria through `DynamicStoreChallenge`. They are separate from the off-chain stores on this page. See [Dynamic Store Challenges](../../token-standard/approval-criteria/dynamic-store-challenges.md) and [MsgCreateDynamicStore](../../token-standard/messages/msg-create-dynamic-store.md).

## Related

- [Plugins](plugins.md)
- [Claims](README.md)
- [Distribute with Claims](../../guides/distribute-with-claims.md)
