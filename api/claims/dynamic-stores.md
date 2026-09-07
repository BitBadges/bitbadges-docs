---
description: "Dynamic stores are BitBadges-hosted address lists you update by API, UI, or Zapier and attach to claims through the whitelist plugin."
---

# Dynamic stores

A dynamic store is an address list that BitBadges hosts for you. You add and remove addresses from anywhere that can send an HTTP request (a backend, a cron job, an agent, a Zapier zap), then attach the store to one or more claims. Eligibility management is decoupled from claim configuration.

## Example

```bash
curl -X POST https://api.bitbadges.io/api/v0/storeActions/single \
  -H "Content-Type: application/json" -H "x-api-key: <key>" \
  -d '{ "dynamicDataId": "<store-id>", "dataSecret": "<store-secret>",
        "actionName": "add", "payload": { "address": "bb1abc..." } }'
```

```ts
// Single action: POST /api/v0/storeActions/single
await BitBadgesApi.performStoreAction({
  dynamicDataId: 'your-store-id',
  dataSecret: 'your-store-secret', // omit when signed in as the creator or manager
  actionName: 'add',               // 'add' | 'remove'
  payload: { address: 'bb1...' }
});

// Batch: POST /api/v0/storeActions/batch
await BitBadgesApi.performBatchStoreAction({
  dynamicDataId: 'your-store-id',
  dataSecret: 'your-store-secret',
  actions: [
    { actionName: 'add', payload: { address: 'bb1abc...' } },
    { actionName: 'add', payload: { address: 'bb1def...' } },
    { actionName: 'remove', payload: { address: 'bb1xyz...' } }
  ]
});
```

Attach it to a claim with the `whitelist` plugin:

```ts
{
  pluginId: 'whitelist',
  instanceId: 'my-whitelist',
  version: '0',
  publicParams: { maxUsesPerAddress: 1 },
  privateParams: {
    useDynamicStore: true,
    dynamicDataId: 'your-store-id',
    dataSecret: 'your-store-secret'
  }
}
```

## How it works

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

## Data model

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

Only addresses are supported as identifiers. Emails, usernames, and platform IDs are not.

## Authentication

| Caller | Requirement |
| --- | --- |
| Signed in as creator or manager | No `dataSecret` |
| API with a key | `dataSecret` in the body |
| Attaching a store you do not own | The store must have `publicUseInClaims: true`. Reads then need no secret; add and remove still require authentication. |

Keep the secret on your backend.

## Ways to update a store

**UI.** Manage entries directly in the developer portal: add, remove, and view addresses.

**API.** The single and batch routes above.

**Zapier.** The BitBadges Zapier integration connects 7000+ apps. Your trigger is the app you integrate; the action is **BitBadges: Add User to Dynamic Store**. Map fields from the trigger (for example an Eventbrite attendee's address) into the store action step. Zapier docs: [Field mapping](https://help.zapier.com/hc/en-us/articles/31709122224653-Enter-data-in-Zap-fields#01JC4MFMXXJXSS7GBAYZP32XKZ), [Send data between steps by mapping fields](https://help.zapier.com/hc/en-us/articles/8496343026701-Send-data-between-steps-by-mapping-fields). The action shows several identifier fields; fill only the one that matches your store type and leave the rest blank.

Zapier can also do the criteria check. Example: a Google Form collects an email, a zap triggers on each response, a Mailchimp step checks the subscriber, and the zap adds the user to the store on success. Point in-site claimers at the form with the `url-clicker` or `custom-instructions` plugin, or from the claim description.

## Integration patterns

```ts
// Backend webhook: a purchase makes the buyer eligible
app.post('/webhooks/shopify-purchase', async (req, res) => {
  const buyerAddress = await lookupAddress(req.body.customer.email);
  await BitBadgesApi.performStoreAction({
    dynamicDataId: 'eligible-buyers',
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
    dynamicDataId: 'ai-eligible',
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
  dynamicDataId: 'daily-eligible',
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

## On-chain dynamic stores

The chain has its own dynamic stores: boolean address-value stores managed by transactions and checked by approval criteria through `DynamicStoreChallenge`. They are separate from the off-chain stores on this page. See [Dynamic store challenges](../../token-standard/approval-criteria/dynamic-store-challenges.md) and [MsgCreateDynamicStore](../../token-standard/messages/msg-create-dynamic-store.md).

## Related

- [Plugins](plugins.md)
- [Claims](README.md)
- [Distribute with claims](../../guides/distribute-with-claims.md)
