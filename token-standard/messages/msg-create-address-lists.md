---
description: "MsgCreateAddressLists creates immutable, reusable address lists that approvals and permissions reference by ID."
---

# MsgCreateAddressLists

Creates one or more address lists. Anyone can sign it. A list is an immutable, shorthand ID for a set of addresses, used in approvals and permissions to save gas and avoid repeating long inline lists.

## Example

```bash
bb tx tokenization create-address-lists ./address-lists.json --from <key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgCreateAddressLists } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgCreateAddressLists({
  creator: client.address,
  addressLists: [
    {
      listId: 'teamwallets',
      addresses: ['bb1abc...', 'bb1def...'],
      whitelist: true,
      uri: '',
      customData: ''
    }
  ]
});

const result = await client.signAndBroadcast([msg]);
```

```json
{
  "creator": "bb1abc...",
  "addressLists": [
    {
      "listId": "teamwallets",
      "addresses": ["bb1abc...", "bb1def..."],
      "whitelist": true,
      "uri": "",
      "customData": ""
    }
  ]
}
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Stored as `createdBy` on each list. |
| `addressLists` | `AddressListInput[]` | yes | Lists to create in one transaction. |

`AddressListInput`:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `listId` | string | yes | Alphanumeric ID. Must be unused. |
| `addresses` | string[] | yes | Valid `bb1...` addresses, or `Mint`. No duplicates, no empty strings. |
| `whitelist` | bool | yes | `true` includes the addresses; `false` includes everyone except them. |
| `uri` | string | no | Optional metadata URI. Validated as a URI when set. Usually empty; the BitBadges site does not use it. |
| `customData` | string | no | Optional string. Usually empty. |

The response is empty.

## Behavior

- Lists are permanent. There is no update or delete message.
- `listId` rules: not empty; not a reserved ID (`Mint`, `Manager`, `AllWithoutMint`, `None`); not a valid address; no `:` or `!`; only `a-z`, `A-Z`, `0-9`. Reserved IDs and the inversion prefix `!` are explained in [Address lists](../concepts/address-lists.md).
- Fails with `ErrAddressListAlreadyExists` if the ID is taken or reserved, `ErrInvalidAddressListId` for a bad ID, `ErrDuplicateAddresses` for repeated addresses, and `ErrInvalidURI` for a bad URI.
- Any approval or permission can reference the list by ID, or by `!listId` for its inverse.

## Related

- [Address lists](../concepts/address-lists.md)
- [GetAddressList](../queries/get-address-list.md)
