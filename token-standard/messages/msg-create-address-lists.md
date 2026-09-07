---
description: "MsgCreateAddressLists creates immutable, reusable address lists that approvals and permissions reference by ID."
---

# MsgCreateAddressLists

Creates one or more address lists. Anyone can sign it. A list is an immutable, shorthand ID for a set of addresses, used in approvals and permissions to save gas and avoid repeating long inline lists.

## Example

```bash
bb tx tokenization create-address-lists ./address-lists.json --from alice --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgCreateAddressLists } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgCreateAddressLists({
  creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  addressLists: [
    {
      listId: 'teamwallets',
      addresses: ['bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d', 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'],
      whitelist: true,
      uri: '',
      customData: ''
    }
  ]
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "addressLists": [
    {
      "listId": "teamwallets",
      "addresses": ["bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"],
      "whitelist": true,
      "uri": "",
      "customData": ""
    }
  ]
}
```

{% hint style="info" %}
Ask your agent: "Create an on-chain address list called teamwallets that contains bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d and bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue."
{% endhint %}

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Stored as `createdBy` on each list. |
| `addressLists` | `AddressListInput[]` | yes | Lists to create in one transaction. |

`AddressListInput`:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `listId` | string | yes | Alphanumeric ID. Must be unused. |
| `addresses` | string[] | yes | Valid `bb`-prefixed bech32 addresses, or `Mint`. No duplicates, no empty strings. |
| `whitelist` | bool | yes | `true` includes the addresses; `false` includes everyone except them. |
| `uri` | string | no | Optional metadata URI. Validated as a URI when set. Usually empty; the BitBadges site does not use it. |
| `customData` | string | no | Optional string. Usually empty. |

The response is empty.

## Behavior

- Lists are permanent. There is no update or delete message.
- `listId` rules: not empty; not a reserved ID (`Mint`, `Manager`, `AllWithoutMint`, `None`); not a valid address; no `:` or `!`; only `a-z`, `A-Z`, `0-9`. Reserved IDs and the inversion prefix `!` are explained in [Address Lists](../concepts/address-lists.md).
- Fails with `ErrAddressListAlreadyExists` if the ID is taken or reserved, `ErrInvalidAddressListId` for a bad ID, `ErrDuplicateAddresses` for repeated addresses, and `ErrInvalidURI` for a bad URI.
- Any approval or permission can reference the list by ID, or by `!listId` for its inverse.

## Related

- [Address Lists](../concepts/address-lists.md)
- [GetAddressList](../queries/get-address-list.md)
