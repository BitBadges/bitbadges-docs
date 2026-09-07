---
description: "Reserved, inline, and stored address lists, the ! inversion syntax, and how Mint is handled in each."
---

# Address Lists

An address list is a named set of addresses used by the `fromListId`, `toListId`, and `initiatedByListId` fields of approvals and permissions. A list is either a whitelist (only these addresses) or a blacklist (everyone except these).

## Shape

```json
{
  "listId": "vipMembers",
  "addresses": [
    "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
    "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf"
  ],
  "whitelist": true,
  "uri": "",
  "customData": "",
  "createdBy": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
}
```

```proto
message AddressList {
  string listId = 1;
  repeated string addresses = 2;
  bool whitelist = 3;
  string uri = 4;
  string customData = 5;
  string createdBy = 6;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `listId` | string | yes | Identifier used in approvals |
| `addresses` | string[] | yes | `bb1` addresses. `"Mint"` is allowed. |
| `whitelist` | bool | yes | `true`: only `addresses` match. `false`: everyone except `addresses` matches. |
| `uri` | string | no | Metadata link |
| `customData` | string | no | Free-form string, or inline JSON metadata |
| `createdBy` | string | set by chain | Creator of a stored list |

Matching is one function:

```js
function checkAddress(address, list) {
  const found = list.addresses.includes(address);
  return list.whitelist ? found : !found;
}
```

{% hint style="info" %}
Ask your agent:

```text
Add a mint approval to collection 1 that only alice and bob can initiate. Pass the two addresses as an inline list.
```

The MCP builder tools (`add_approval`) produce the objects on this page.
{% endhint %}

## How It Works

There are three kinds of list ID. The chain resolves reserved and inline IDs on the fly with no storage; stored lists live in state.

### Reserved IDs

| ID | Resolves to | Meaning |
| --- | --- | --- |
| `"Mint"` | `{ addresses: ["Mint"], whitelist: true }` | Only the Mint address |
| `"All"` or `"AllWithMint"` | `{ addresses: [], whitelist: false }` | Every address, including Mint |
| `"None"` | `{ addresses: [], whitelist: true }` | No address |
| `"AllWithout<a>:<b>:..."` | `{ addresses: [a, b, ...], whitelist: false }` | Every address except those listed (colon-separated) |
| `"<a>:<b>:..."` | `{ addresses: [a, b, ...], whitelist: true }` | Only the addresses listed |

A single `bb1` address is therefore a valid list ID that matches only that address. `"AllWithoutMint"` is the common "everyone except Mint" list.

### Inversion

Prefix an ID with `!` to flip `whitelist`. Use `!(...)` when the ID itself could be ambiguous. Inversion works on reserved IDs, inline lists, and stored list IDs.

```js
'!Mint';                    // everyone except Mint (same as AllWithoutMint)
'!All';                     // no one
'!bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d:bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'; // everyone except alice and bob
'!(AllWithoutMint)';        // only Mint
'!vipMembers';              // everyone except the stored vipMembers list
```

The chain treats `"!x"` as inverted when the ID does not end with `)`, and `"!(x)"` as inverted always.

### Mint Handling

`"All"` and any blacklist include `"Mint"`. Because the Mint address has unlimited balance, a `fromListId` that includes it by accident lets anyone mint. Use `"Mint"` for mint approvals and `"!Mint"` or `"AllWithoutMint"` for everything else. See [Minting and Supply](minting-and-supply.md).

```json
[
  { "fromListId": "AllWithoutMint", "toListId": "All" },
  { "fromListId": "Mint", "toListId": "All" }
]
```

### Stored Lists

Create a stored list with [MsgCreateAddressLists](../messages/msg-create-address-lists.md). Stored lists are immutable and global: any collection can reference the same list ID. They save gas when a long list is referenced more than once.

ID rules for stored lists:

- Alphanumeric only (`a-z`, `A-Z`, `0-9`). No `:` or `!`.
- Not empty.
- Not a reserved ID (`"All"`, `"Mint"`, `"None"`, `"Manager"`, `"AllWithoutMint"`).
- Not a valid `bb1` address.
- Unique. Creating an ID that already exists fails.
- Addresses inside must be unique and valid (`"Mint"` allowed).

Off-chain lists also exist in the BitBadges API. They are editable and deletable but are not chain state and cannot be used in on-chain approvals.

### Examples

```json
{
  "fromListId": "AllWithoutMint",
  "toListId": "All",
  "initiatedByListId": "All"
}
```

```json
{
  "fromListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d:bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue:bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf",
  "toListId": "AllWithoutMint:bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr",
  "initiatedByListId": "All"
}
```

```json
{
  "fromListId": "vipMembers",
  "toListId": "!bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr",
  "initiatedByListId": "All"
}
```

### Cost

| Kind | Storage | Best for |
| --- | --- | --- |
| Reserved | none | Mint, All, None, small exclusions |
| Inline | none | fewer than about 10 addresses used once |
| Stored | on-chain | large lists, or any list referenced repeatedly |

### Reference: SDK Resolver

```ts
function getReservedList(addressListId: string, allowAliases?: boolean): AddressList {
  let inverted = false;
  let addressList: AddressList | undefined = undefined;

  if (addressListId[0] === '!') {
    inverted = true;
    addressListId = addressListId.slice(1);
  }

  if (addressListId === 'Mint') {
    addressList = { listId: 'Mint', addresses: ['Mint'], whitelist: true, uri: '', customData: '', createdBy: '' };
  } else if (addressListId.startsWith('AllWithout')) {
    addressList = { listId: addressListId, addresses: [], whitelist: false, uri: '', customData: '', createdBy: '' };
    const addresses = addressListId.slice(10).split(':');
    for (let address of addresses) {
      addressList.addresses.push(address);
    }
  } else if (addressListId === 'AllWithMint' || addressListId === 'All') {
    addressList = { listId: addressListId, addresses: [], whitelist: false, uri: '', customData: '', createdBy: '' };
  } else if (addressListId === 'None') {
    addressList = { listId: 'None', addresses: [], whitelist: true, uri: '', customData: '', createdBy: '' };
  } else {
    const addressesToCheck = addressListId.split(':');
    let allAreValid = true;
    // For tracker IDs, aliases (non-address strings) are allowed
    if (!allowAliases) {
      for (let address of addressesToCheck) {
        if (address != 'Mint' && !convertToBitBadgesAddress(address)) {
          allAreValid = false;
        }
      }
    }
    if (allAreValid) {
      addressList = { listId: addressListId, addresses: addressesToCheck, whitelist: true, uri: '', customData: '', createdBy: '' };
    }
  }

  if (inverted && addressList) {
    addressList.whitelist = !addressList.whitelist;
  }
  if (!addressList) {
    throw new Error(`Invalid address list ID: ${addressListId}`);
  }
  return addressList;
}
```

## Related

- [Transferability](transferability.md)
- [MsgCreateAddressLists](../messages/msg-create-address-lists.md)
- [GetAddressList](../queries/get-address-list.md)
- [Address list snippets](../../sdk/snippets/address-lists.md)
