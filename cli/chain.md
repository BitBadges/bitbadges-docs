---
description: "Chain-native bb commands from bitbadgeschaind: keys, tx, query, sign-arbitrary, genesis, and node operation."
---

# Chain commands

`bb` is the chain node binary `bitbadgeschaind`, a Cosmos SDK binary with the BitBadges modules. This page covers the native commands: key management, transactions, queries, offline signing, and node operation. The SDK verbs (`build`, `deploy`, `api`, and the rest) are forwarded to `bitbadges-cli` and documented on the other CLI pages.

## Example

```bash
bb keys add alice
bb tx tokenization create-collection ./create-collection.json \
  --from alice --chain-id bitbadges-1 --node https://rpc.bitbadges.io:443 \
  --gas auto --gas-adjustment 1.5 --fees 10000ubadge
bb query tokenization collection 2 --node https://rpc.bitbadges.io:443 --output json
bb sign-arbitrary alice "auth challenge text"
```

The query prints the on-chain collection document (mainnet output, permissions and default balances trimmed):

```json
{
  "collection": {
    "collectionId": "2",
    "collectionMetadata": {
      "uri": "ipfs://QmXSWKxRjpEVqnUnQP6mwsAqrWHo6KAsKzzhYXNu9KKmGj",
      "customData": ""
    },
    "tokenMetadata": [
      {
        "uri": "ipfs://QmXSWKxRjpEVqnUnQP6mwsAqrWHo6KAsKzzhYXNu9KKmGj",
        "customData": "",
        "tokenIds": [{ "start": "1", "end": "1" }]
      }
    ],
    "customData": "",
    "manager": "",
    "collectionApprovals": [],
    "standards": [],
    "isArchived": false,
    "validTokenIds": [{ "start": "1", "end": "1" }]
  }
}
```

Endpoints and chain IDs: [Network](../chain/README.md). Mainnet is `bitbadges-1`; testnet (`bitbadges-2`) is offline.

{% hint style="info" %}
Ask your agent. Queries have MCP equivalents (`query_collection`, `query_balance`, `query_dynamic_store`); signing does not, by design. "Fetch collection 2 from chain and summarize its approvals" works; the `bb tx` step stays with you and your keyring.
{% endhint %}

## keys

BitBadges supports Ethereum-style `eth_secp256k1` keys and standard Cosmos `secp256k1` keys. The default keyring backend is `test` (unencrypted). Use `--keyring-backend os` or `file` outside development.

```bash
bb keys add alice                          # new key; save the mnemonic
bb keys add alice --recover                # from a mnemonic
bb keys add alice --key-type secp256k1     # Cosmos key, required by sign-arbitrary
bb keys list
bb keys show alice
bb keys show alice --bech val              # validator operator form
bb keys export alice                       # armored private key
bb keys import alice keyfile.armor
bb keys delete alice
```

## tx

```bash
bb tx tokenization transfer-tokens ./transfer.json --from alice --chain-id bitbadges-1 \
  --node https://rpc.bitbadges.io:443 --gas auto --gas-adjustment 1.5 --fees 10000ubadge
```

| Flag | Default | Description |
| --- | --- | --- |
| `--from` | required | Key name or address |
| `--chain-id` | `bitbadgeschain` | Cosmos chain ID (`bitbadges-1` on mainnet) |
| `--node` | `tcp://localhost:26657` | Node RPC endpoint (`https://rpc.bitbadges.io:443` on mainnet) |
| `--gas` | `200000` | Gas limit, or `auto` to simulate |
| `--gas-adjustment` | `1.0` | Multiplier with `--gas auto` |
| `--fees` | | For example `10000ubadge` |
| `--keyring-backend` | `test` | `os`, `file`, `test` |
| `--broadcast-mode` | `sync` | `sync`, `async`, `block` |
| `--dry-run` | `false` | Simulate without broadcasting |
| `--generate-only` | `false` | Print the unsigned transaction JSON |

Generic subcommands under `bb tx`: `sign`, `sign-batch`, `multi-sign`, `multisign-batch`, `validate-signatures`, `broadcast`, `encode`, `decode`, `simulate`. Module subcommands follow.

### tokenization

Most commands take a JSON argument, inline or as a file path. Field names match the protobuf messages in [Messages](../token-standard/messages/README.md). Every line below also takes the flags from the `tx` table; `FLAGS` stands for `--from alice --chain-id bitbadges-1 --node https://rpc.bitbadges.io:443 --gas auto --gas-adjustment 1.5 --fees 10000ubadge`.

```bash
FLAGS="--from alice --chain-id bitbadges-1 --node https://rpc.bitbadges.io:443 --gas auto --gas-adjustment 1.5 --fees 10000ubadge"

# collections
bb tx tokenization create-collection ./create-collection.json $FLAGS
bb tx tokenization universal-update-collection ./update.json $FLAGS
bb tx tokenization update-collection ./update.json $FLAGS
bb tx tokenization delete-collection 1 $FLAGS

# transfers
bb tx tokenization transfer-tokens ./transfer.json $FLAGS

# approvals
bb tx tokenization set-incoming-approval 1 ./approval.json $FLAGS
bb tx tokenization set-outgoing-approval 1 ./approval.json $FLAGS
bb tx tokenization delete-incoming-approval 1 agent-daily-budget $FLAGS
bb tx tokenization delete-outgoing-approval 1 agent-daily-budget $FLAGS
bb tx tokenization update-user-approved-transfers ./approvals.json $FLAGS
bb tx tokenization purge-approvals 1 true "" false '[]' $FLAGS

# metadata and configuration
bb tx tokenization set-setcollectionmetadata ./metadata.json $FLAGS
bb tx tokenization set-settokenmetadata ./metadata.json $FLAGS
bb tx tokenization set-setcustomdata ./data.json $FLAGS
bb tx tokenization set-setstandards ./standards.json $FLAGS
bb tx tokenization set-setcollectionapprovals ./approvals.json $FLAGS
bb tx tokenization set-valid-token-ids ./tokenids.json $FLAGS
bb tx tokenization set-manager ./manager.json $FLAGS
bb tx tokenization set-setisarchived ./archived.json $FLAGS

# dynamic stores
bb tx tokenization create-dynamic-store true $FLAGS
bb tx tokenization update-dynamic-store 1 false true $FLAGS
bb tx tokenization set-dynamic-store-value 1 bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue true $FLAGS
bb tx tokenization delete-dynamic-store 1 $FLAGS

# address lists and votes
bb tx tokenization create-address-lists ./lists.json $FLAGS
bb tx tokenization cast-vote 1 collection bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d multisig-approval proposal-1 100 $FLAGS
```

Example `transfer.json` (alice sends bob one unit of token ID 1 in collection 1):

```json
{
  "collectionId": "1",
  "transfers": [
    {
      "from": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "toAddresses": ["bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"],
      "balances": [
        {
          "amount": "1",
          "tokenIds": [{ "start": "1", "end": "1" }],
          "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }]
        }
      ]
    }
  ]
}
```

| Command | Arguments |
| --- | --- |
| `create-collection`, `update-collection`, `universal-update-collection`, `set-manager`, `set-valid-token-ids`, `set-setcollectionmetadata`, `set-settokenmetadata`, `set-setcustomdata`, `set-setstandards`, `set-setcollectionapprovals`, `set-setisarchived`, `create-address-lists`, `transfer-tokens`, `update-user-approved-transfers` | `[tx-json-or-file]` |
| `delete-collection` | `[collection-id]` |
| `set-incoming-approval`, `set-outgoing-approval` | `[collection-id] [approval-json-or-file]` |
| `delete-incoming-approval`, `delete-outgoing-approval` | `[collection-id] [approval-id]` |
| `purge-approvals` | `[collection-id] [purge-expired] [approver-address] [purge-counterparty-approvals] [approvals-to-purge-json-or-file]` |
| `create-dynamic-store` | `[default-value]` |
| `update-dynamic-store` | `[store-id] [default-value] [global-enabled]` |
| `set-dynamic-store-value` | `[store-id] [address] [value]` |
| `delete-dynamic-store` | `[store-id]` |
| `cast-vote` | `[collection-id] [approval-level] [approver-address] [approval-id] [proposal-id] [yes-weight]` |

Files are easier than inline JSON for anything beyond a one-liner. Prefer `bb build` plus `bb deploy --with-keyring` for the common shapes; it validates before it signs.

### gamm

```bash
bb tx gamm create-pool --pool-file ./pool.json $FLAGS
bb tx gamm join-pool 2 1000000 1000000000ubadge,1000000ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8 $FLAGS
bb tx gamm exit-pool 2 1000000 1ubadge,1ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8 $FLAGS
bb tx gamm swap-exact-amount-in '[{"poolId":"2","tokenOutDenom":"ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"}]' 1000000000ubadge 1 '[]' $FLAGS
bb tx gamm swap-exact-amount-out '[{"poolId":"2","tokenInDenom":"ubadge"}]' 2000000000 1000000ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8 $FLAGS
```

Positional order: `join-pool [pool-id] [share-out-amount] [token-in-maxs]`, `exit-pool [pool-id] [share-in-amount] [token-out-mins]`, `swap-exact-amount-in [routes] [token-in] [token-out-min-amount] [affiliates]`, `swap-exact-amount-out [routes] [token-in-max-amount] [token-out]`.

The pool-entry and exit variants (`join-swap-extern-amount-in`, `join-swap-share-amount-out`, `exit-swap-extern-amount-out`, `exit-swap-share-amount-in`) and `swap-exact-amount-in-with-ibc-transfer` follow the same pattern. Arguments and flags are in `bb tx gamm <command> --help`. Message semantics: [gamm messages](../chain/modules/gamm/messages.md).

## query

```bash
NODE="--node https://rpc.bitbadges.io:443 --output json"

bb query tokenization collection 1 $NODE
bb query tokenization balance 1 bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d $NODE
bb query tokenization balance-for-token 1 bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d 7 1788739200000 $NODE
bb query tokenization collection-stats 1 $NODE
bb query tokenization params $NODE
bb query tokenization address-list "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d:bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue" $NODE
bb query tokenization dynamic-store 1 $NODE
bb query tokenization dynamic-store-value 1 bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue $NODE
bb query tokenization wrappable-balances ubadge bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d $NODE
bb query tokenization is-address-reserved-protocol bb1gycvn0nc50lh753dgk4qys5p2sdws8aw7ec9v9gg65pkhm6hqq3qjd3t3n $NODE
bb query tokenization all-reserved-protocol-addresses $NODE
bb query tokenization approvals-trackers 2 outgoing bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d agent-daily-budget agent-daily-budget overall "" $NODE
bb query tokenization num-used-for-merkle-challenge 1 collection bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d code-claim code-claim 0 $NODE
bb query tokenization num-used-for-eth-signature-challenge 1 collection bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d eth-gated eth-gated 0x9f1c2b3a4d5e6f708192a3b4c5d6e7f8091a2b3c4d5e6f708192a3b4c5d6e7f8 $NODE
bb query tokenization vote 1 collection bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d multisig-approval proposal-1 bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf $NODE
bb query tokenization votes 1 collection bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d multisig-approval proposal-1 $NODE

bb query gamm pools $NODE
bb query gamm pool 2 $NODE
bb query gamm pool-params 2 $NODE
bb query gamm spot-price 2 ubadge ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8 false $NODE
bb query gamm estimate-swap-exact-amount-in 2 1000000000ubadge --swap-route-pool-ids=2 --swap-route-denoms=ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8 $NODE
bb query gamm pools-with-filter 1000000 balancer $NODE
bb query bank balances bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d $NODE
bb query tx 903D4A6E205AD77D334933E3C9BB455012D8A334AA2D98DFD301C3F7E8AB92C6 $NODE
bb query block --type=height 10000000 $NODE
```

`bb query bank balances` for an address that holds nothing prints `{ "balances": [], "pagination": {} }`.

Every query accepts `--node <rpc>` and `--output json`. `q` is an alias for `query`. One page per query with the response shape: [Queries](../token-standard/queries/README.md).

## sign-arbitrary

```bash
bb sign-arbitrary alice "auth challenge text"
echo -n "auth challenge text" | bb sign-arbitrary alice
bb sign-arbitrary alice --message-file challenge.txt
bb sign-arbitrary alice "auth challenge text" --output-mode raw          # only the base64 signature
```

Output for a throwaway `secp256k1` key (real signature, produced offline):

```json
{
  "address": "bb1hz59w73vsqygl7z9zl49yvwjnl534n0yyexmkf",
  "algo": "secp256k1",
  "format": "adr36",
  "message": "auth challenge text",
  "pubKey": "A7TliNEJ+WoiaZvtnrOrdIuLIaVayagqvp47kF2L3Np3",
  "signature": "Bk/AuuDrt/kChEgF4myQJMCX//1wqoEffd+4RghpKaU0q2QRpVjw0zaf+WHs3FnM8AsEnKm3CeMLc/2/AfKQ9A=="
}
```

Signs any message with a keyring key in ADR-36 format, offline, with no chain access. The output feeds `bb auth login --signature "$SIG" --public-key "$PUBKEY" --message "$MSG"`; see [Auth](auth.md). The signed bytes equal Keplr's `serializeSignDoc(makeADR36AminoSignDoc(...))` and verify with `verifyADR36Amino`.

| Flag | Description |
| --- | --- |
| `--message-file <path>` | Read the message from a file (mutually exclusive with the positional and stdin) |
| `--output-mode <json\|raw>` | Default `json` |
| keyring flags, `--home` | Standard Cosmos keyring selection |

Only `secp256k1` keys are supported; an `eth_secp256k1` key errors with a pointer to `bb keys add <name> --key-type secp256k1`. EIP-191 support is a planned `--format eip191` flag.

## Node operation

| Command | Purpose |
| --- | --- |
| `start` | Run the node (Cosmos EVM server flags for JSON-RPC and EVM config) |
| `init`, `genesis` | Initialize a home directory; genesis subcommands (`gentx`, `collect-gentxs`, `validate`, and the rest) |
| `status`, `version` | Node status; binary version |
| `config` | Manage `client.toml` (chain-owned; the SDK's settings live under `bb settings`) |
| `export`, `rollback`, `index-eth-tx` | Cosmos EVM additions |
| `pre-upgrade` | Pre-upgrade hook for cosmovisor |
| `prune`, `snapshots`, `comet` (`tendermint`), `debug` | Standard Cosmos SDK maintenance |

Running a validator or full node: [Run a node](../chain/run-a-node.md). Build from source: [CLI](README.md#chain-binary-from-source).

## SDK alternative

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgTransferTokens } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgTransferTokens({
  creator: client.address,
  collectionId: '1',
  transfers: [
    {
      from: client.address,
      toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'],
      balances: [
        {
          amount: '1',
          tokenIds: [{ start: '1', end: '1' }],
          ownershipTimes: [{ start: '1', end: '18446744073709551615' }]
        }
      ]
    }
  ]
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

The [signing client](../sdk/transactions/signing-client.md) handles gas estimation, sequence management, and broadcasting for every message type.

## Related

- [Messages](../token-standard/messages/README.md)
- [Queries](../token-standard/queries/README.md)
- [Deploy](deploy.md)
- [Network](../chain/README.md)
