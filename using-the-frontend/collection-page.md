---
description: "Read one collection on bitbadges.io: the Tokens, Distribution, Details, Linked Items, and Actions tabs, and what the permission grid means."
---

# Collection Page

A collection page shows everything the chain and the BitBadges API know about one collection. The URL is `bitbadges.io/collections/<collectionId>`.

![The Tokens tab of a collection page, with total tokens, collection ID, chain, and a token card](../.gitbook/assets/frontend/collection-overview.png)

## 1. Tokens

The default tab. The stat row shows Total Tokens, Collection ID, and L1 Chain. The left column sorts and filters by name or ID. Each card is one token; click it to open the token page at `/collections/<collectionId>/<tokenId>`.

## 2. Distribution

This tab answers "who can move tokens, and under which rules". It has four sub-tabs.

![The Distribution tab with the Collection Transferability sub-tab showing a Mint approval](../.gitbook/assets/frontend/collection-distribution.png)

| Sub-tab | Shows |
| --- | --- |
| Collection Transferability | The collection-level approvals. Each card is one approval, tagged with its sender (for example Mint) and its claim count. |
| User Approvals | Your own incoming and outgoing approvals for this collection, once signed in. |
| Browse User Approvals | Any address's approvals, by address. |
| Permissions | What the manager can still change. |

How to read a transferability card:

1. The tag on the left names the sender list. Mint means new tokens come from the mint address.
2. The claim tag shows uses so far against the maximum.
3. Click the card to expand the approval criteria: which tokens, which amounts, which addresses, and which times.

An approval only allows a transfer. It never forces one. The full rules are in [Transferability](../token-standard/concepts/transferability.md).

## 3. Permissions

The Permissions sub-tab lists each manager permission as a question with a status icon.

![The Permissions sub-tab listing manager permissions, each with a green check](../.gitbook/assets/frontend/collection-permissions.png)

- A green check means the manager can still perform that action.
- A red cross means the action is locked.

Rows include updating minting transferability, updating post-mint transferability, updating the manager, archiving the collection, and updating metadata. Locked permissions are how a collection commits to its rules. See [Permissions](../token-standard/concepts/permissions.md).

## 4. Details

![The Details tab with the manager and creator on the left and the Owners sub-tab on the right](../.gitbook/assets/frontend/collection-details.png)

The left column lists Collection ID, Manager, Created By, L1 Chain, and Mint Escrow Address. The right column has sub-tabs:

- Owners: every address with a balance, searchable.
- Circulating and Unique Owners: supply stats.
- Activity: transfers in this collection.
- Summary and JSON: the collection as the chain stores it.
- Update History: every transaction that changed the collection.

## 5. Linked Items and Actions

Linked Items lists related claims, listings, and pages the manager attached. Actions shows what your address can do: transfer, set an approval, or, as the manager, update the collection. Templates with their own flow, such as auctions and storefronts, hide this tab.

## What You Can Do Here

- Open a single token, an owner, or the manager's account.
- Read every approval and the criteria behind it.
- Check which manager permissions are locked.
- Copy the collection JSON.
- Share the page or report it with the icons at the top right.

## Related

- [Transferability](../token-standard/concepts/transferability.md)
- [Permissions](../token-standard/concepts/permissions.md)
- [Balances](../token-standard/concepts/balances.md)
