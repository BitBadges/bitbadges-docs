---
description: "Bookmark pagination and the views object in BitBadges API responses, with the SDK helpers that page through them."
---

# Pagination and Views

Paginated routes return a `bookmark` and `hasMore`. Pass the bookmark back to get the next page. Some routes (accounts, collections) group several paginated lists into one `views` object.

This page is also part of the [API reference](/api-reference).

## Example

```bash
# First page: empty bookmark
curl -X POST https://api.bitbadges.io/api/v0/collections \
  -H "Content-Type: application/json" -H "x-api-key: $BITBADGES_API_KEY" \
  -d '{ "collectionsToFetch": [ { "collectionId": "1",
        "viewsToFetch": [ { "viewType": "owners", "viewId": "owners", "bookmark": "" } ] } ] }'
```

```ts
const res = await BitBadgesApi.getCollections({
  collectionsToFetch: [
    {
      collectionId: '1',
      viewsToFetch: [{ viewType: 'owners', viewId: 'owners', bookmark: '' }]
    }
  ]
});

const collection = res.collections[0];
const page1 = collection.getOwnersView('owners');

// Next page
await collection.fetchNextForView(BitBadgesApi, 'owners', 'owners');
const page2 = collection.getOwnersView('owners');
```

## How Bookmark Pagination Works

1. First request: send an empty bookmark (`""`).
2. Each response includes the data, a `bookmark` for the next page, and a `hasMore` boolean.
3. Next request: send the `bookmark` from the previous response.
4. Stop when `hasMore` is `false`.

The `views` and `owners` parts of the collection response above, for a page with two owners (synthesized from the SDK types; the rest of the collection document is omitted here):

```json fold=21-33,46-58
{
  "views": {
    "owners": {
      "ids": ["1:bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", "1:bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"],
      "type": "owners",
      "pagination": { "bookmark": "eyJza2lwIjoyNX0", "hasMore": true }
    }
  },
  "owners": [
    {
      "_docId": "1:bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "collectionId": "1",
      "bitbadgesAddress": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "balances": [
        {
          "amount": "1",
          "tokenIds": [{ "start": "1", "end": "50" }],
          "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }]
        }
      ],
      "incomingApprovals": [],
      "outgoingApprovals": [],
      "userPermissions": {
        "canUpdateOutgoingApprovals": [],
        "canUpdateIncomingApprovals": [],
        "canUpdateAutoApproveSelfInitiatedOutgoingTransfers": [],
        "canUpdateAutoApproveSelfInitiatedIncomingTransfers": [],
        "canUpdateAutoApproveAllIncomingTransfers": []
      },
      "autoApproveSelfInitiatedOutgoingTransfers": true,
      "autoApproveSelfInitiatedIncomingTransfers": true,
      "autoApproveAllIncomingTransfers": false,
      "updateHistory": []
    },
    {
      "_docId": "1:bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
      "collectionId": "1",
      "bitbadgesAddress": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
      "balances": [
        {
          "amount": "1",
          "tokenIds": [{ "start": "51", "end": "51" }],
          "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }]
        }
      ],
      "incomingApprovals": [],
      "outgoingApprovals": [],
      "userPermissions": {
        "canUpdateOutgoingApprovals": [],
        "canUpdateIncomingApprovals": [],
        "canUpdateAutoApproveSelfInitiatedOutgoingTransfers": [],
        "canUpdateAutoApproveSelfInitiatedIncomingTransfers": [],
        "canUpdateAutoApproveAllIncomingTransfers": []
      },
      "autoApproveSelfInitiatedOutgoingTransfers": true,
      "autoApproveSelfInitiatedIncomingTransfers": true,
      "autoApproveAllIncomingTransfers": false,
      "updateHistory": []
    }
  ]
}
```

Routes that take a `bookmark` directly (search, claim attempts, plugin errors) use the same rule without the `views` wrapper. Check the [API reference](/api-reference) for each route.

## The Views Object

{% hint style="info" %}
The `views` object is planned for deprecation in favor of dedicated per-view routes. Prefer those routes when one exists.
{% endhint %}

Collections and accounts carry a `views` map keyed by `viewId`:

```ts
views: {
  [viewId: string]: {
    ids: string[];        // document IDs in this page
    type: string;         // the view type
    pagination: {
      bookmark: string;
      hasMore: boolean;
    };
  } | undefined;
}
```

| Field | Description |
| --- | --- |
| `viewId` | Your identifier for the view. Reuse the same `viewId` when paging the same dataset. |
| `ids` | `_docId` values. Map them to the full documents in the matching response array. |
| `type` | The view type, for example `owners`. |
| `pagination` | `bookmark` and `hasMore` for the next request. |

Documents live in the response array for their type (`activity`, `owners`, and so on). Map `ids` to documents by `_docId`:

```ts
getActivityView(viewId: string) {
  return this.views[viewId]?.ids.map((x) => this.activity.find((y) => y._docId === x)) ?? [];
}
```

### View Types

| Interface | `viewType` values (`CollectionViewKey` / `AccountViewKey`) |
| --- | --- |
| Collection | `transferActivity`, `owners`, `amountTrackers`, `challengeTrackers`, `listings`, `tokenFloorPrices` |
| Account | `siwbbRequests`, `transferActivity`, `tokensCollected`, `createdTokens`, `managingTokens`, `publicClaimActivity`, `allClaimActivity`, `pointsActivity` |

## SDK Helpers

`BitBadgesCollection` and `BitBadgesUserInfo` wrap the bookkeeping:

```ts
collection.viewHasMore('owners');                      // boolean, true when unknown
collection.getViewPagination('owners');                // { bookmark, hasMore }
collection.getViewBookmark('owners');                  // string
await collection.fetchNextForView(BitBadgesApi, 'owners', 'owners');
await collection.fetchAllForView(BitBadgesApi, 'owners', 'owners'); // all pages, 1 s between pages
collection.getView('owners', 'owners');               // typed by viewType
collection.getOwnersView('owners');
collection.getActivityView('activity');
collection.getChallengeTrackersView('challengeTrackers');
```

`fetchNextForView` accepts optional `oldestFirst` and `address` arguments for views that support them.

## Rules of Thumb

- Keep `viewId` stable while paging one dataset.
- Check for an undefined view before reading it.
- Track both `bookmark` and `hasMore`.
- Each response only contains that request's page. Merge pages yourself or use the helpers, which merge into the object.

## Related

- [BitBadges API](README.md)
- [SDK](../sdk/README.md)
