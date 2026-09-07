---
description: "Chain-native bb commands from bitbadgeschaind: keys, tx, query, sign-arbitrary, genesis, and node operation."
---

# Chain commands

`bb` is the chain node binary `bitbadgeschaind`, a Cosmos SDK binary with the BitBadges modules. This page covers the native commands: key management, transactions, queries, offline signing, and node operation. The SDK verbs (`build`, `deploy`, `api`, ...) are forwarded to `bitbadges-cli` and documented on the other CLI pages.

## Example

```bash
bb keys add mykey
bb tx tokenization create-collection ./create-collection.json \
  --from mykey --chain-id bitbadges-1 --node https://lcd.bitbadges.io:443 \
  --gas auto --gas-adjustment 1.5 --fees 10000ubadge
bb query tokenization collection 1 --node https://lcd.bitbadges.io:443 --output json
bb sign-arbitrary mykey "auth challenge text"
```

Endpoints and chain IDs: [Network](../chain/README.md). Mainnet is `bitbadges-1`; testnet (`bitbadges-2`) is offline.

## keys

BitBadges supports Ethereum-style `eth_secp256k1` keys and standard Cosmos `secp256k1` keys. The default keyring backend is `test` (unencrypted). Use `--keyring-backend os` or `file` outside development.

```bash
bb keys add mykey                          # new key; save the mnemonic
bb keys add mykey --recover                # from a mnemonic
bb keys add mykey --key-type secp256k1     # Cosmos key, required by sign-arbitrary
bb keys list
bb keys show mykey [--bech val|cons]
bb keys export mykey                       # armored private key
bb keys import mykey keyfile.armor
bb keys delete mykey
```

## tx

```bash
bb tx <module> <command> [args...] --from mykey --chain-id bitbadges-1 --node <rpc> --gas auto --gas-adjustment 1.5 --fees 10000ubadge
```

| Flag | Default | Description |
| --- | --- | --- |
| `--from` | required | Key name or address |
| `--chain-id` | `bitbadgeschain` | Cosmos chain ID (`bitbadges-1` on mainnet) |
| `--node` | `tcp://localhost:26657` | Node RPC endpoint |
| `--gas` | `200000` | Gas limit, or `auto` to simulate |
| `--gas-adjustment` | `1.0` | Multiplier with `--gas auto` |
| `--fees` | | For example `10000ubadge` |
| `--keyring-backend` | `test` | `os`, `file`, `test` |
| `--broadcast-mode` | `sync` | `sync`, `async`, `block` |
| `--dry-run` | `false` | Simulate without broadcasting |
| `--generate-only` | `false` | Print the unsigned transaction JSON |

Generic subcommands under `bb tx`: `sign`, `sign-batch`, `multi-sign`, `multisign-batch`, `validate-signatures`, `broadcast`, `encode`, `decode`, `simulate`. Module subcommands follow.

### tokenization

Most commands take a JSON argument, inline or as a file path. Field names match the protobuf messages in [Messages](../token-standard/messages/README.md).

```bash
# collections
bb tx tokenization create-collection ./create-collection.json --from mykey ...
bb tx tokenization universal-update-collection ./update.json --from mykey ...
bb tx tokenization update-collection ./update.json --from mykey ...
bb tx tokenization delete-collection 1 --from mykey ...

# transfers
bb tx tokenization transfer-tokens ./transfer.json --from mykey ...

# approvals
bb tx tokenization set-incoming-approval 1 ./approval.json --from mykey ...
bb tx tokenization set-outgoing-approval 1 ./approval.json --from mykey ...
bb tx tokenization delete-incoming-approval 1 my-approval-id --from mykey ...
bb tx tokenization delete-outgoing-approval 1 my-approval-id --from mykey ...
bb tx tokenization update-user-approved-transfers ./approvals.json --from mykey ...
bb tx tokenization purge-approvals 1 true "" false '[]' --from mykey ...

# metadata and configuration
bb tx tokenization set-setcollectionmetadata ./metadata.json --from mykey ...
bb tx tokenization set-settokenmetadata ./metadata.json --from mykey ...
bb tx tokenization set-setcustomdata ./data.json --from mykey ...
bb tx tokenization set-setstandards ./standards.json --from mykey ...
bb tx tokenization set-setcollectionapprovals ./approvals.json --from mykey ...
bb tx tokenization set-valid-token-ids ./tokenids.json --from mykey ...
bb tx tokenization set-manager ./manager.json --from mykey ...
bb tx tokenization set-setisarchived ./archived.json --from mykey ...

# dynamic stores
bb tx tokenization create-dynamic-store true --from mykey ...
bb tx tokenization update-dynamic-store 1 false true --from mykey ...
bb tx tokenization set-dynamic-store-value 1 bb1abc... true --from mykey ...
bb tx tokenization delete-dynamic-store 1 --from mykey ...

# address lists and votes
bb tx tokenization create-address-lists ./lists.json --from mykey ...
bb tx tokenization cast-vote 1 collection bb1abc... my-approval-id proposal-1 100 --from mykey ...
```

Example `transfer.json`:

```json
{
  "collectionId": "1",
  "transfers": [
    {
      "from": "bb1abc...",
      "toAddresses": ["bb1xyz..."],
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
bb tx gamm create-pool ...
bb tx gamm join-pool ... | exit-pool ...
bb tx gamm swap-exact-amount-in ... | swap-exact-amount-out ...
bb tx gamm join-swap-extern-amount-in ... | join-swap-share-amount-out ... | exit-swap-extern-amount-out ... | exit-swap-share-amount-in ...
bb tx gamm swap-exact-amount-in-with-ibc-transfer ...
```

Arguments and flags are in `bb tx gamm <command> --help`. Message semantics: [gamm messages](../chain/modules/gamm/messages.md).

## query

```bash
bb query tokenization collection 1
bb query tokenization balance 1 bb1abc...
bb query tokenization balance-for-token 1 bb1abc... 7 <time>
bb query tokenization collection-stats 1
bb query tokenization params
bb query tokenization address-list <id>
bb query tokenization dynamic-store <store-id>
bb query tokenization dynamic-store-value <store-id> <address>
bb query tokenization wrappable-balances <denom> <address>
bb query tokenization is-address-reserved-protocol <address>
bb query tokenization all-reserved-protocol-addresses
bb query tokenization approvals-trackers <collectionId> <approvalLevel> <approverAddress> <approvalId> <amountTrackerId> <trackerType> <approvedAddress>
bb query tokenization num-used-for-merkle-challenge <collectionId> <approvalLevel> <approverAddress> <approvalId> <challengeTrackerId> <leafIndex>
bb query tokenization num-used-for-eth-signature-challenge <collectionId> <approvalLevel> <approverAddress> <approvalId> <challengeTrackerId> <signature>
bb query tokenization vote <collection-id> <approval-level> <approver-address> <approval-id> <proposal-id> <voter-address>
bb query tokenization votes <collection-id> <approval-level> <approver-address> <approval-id> <proposal-id>

bb query gamm pools | pool <id> | pool-params <poolID> | spot-price | estimate-swap-exact-amount-in | estimate-swap-exact-amount-out | pools-with-filter <min_liquidity> <pool_type>
bb query bank balances bb1abc...
bb query tx <hash>
bb query block --type=height <n>
```

Every query accepts `--node <rpc>` and `--output json`. `q` is an alias for `query`. One page per query with the response shape: [Queries](../token-standard/queries/README.md).

## sign-arbitrary

```bash
bb sign-arbitrary mykey "auth challenge text"
echo -n "auth challenge text" | bb sign-arbitrary mykey
bb sign-arbitrary mykey --message-file challenge.txt
bb sign-arbitrary mykey "..." --output-mode raw          # only the base64 signature
```

```json
{ "format": "adr36", "algo": "secp256k1", "address": "bb1abc...", "pubKey": "AhUw...", "signature": "LIq6...", "message": "auth challenge text" }
```

Signs any message with a keyring key in ADR-36 format, offline, with no chain access. The output feeds `bb auth login --signature ... --public-key ... --message ...`; see [Auth](auth.md). The signed bytes equal Keplr's `serializeSignDoc(makeADR36AminoSignDoc(...))` and verify with `verifyADR36Amino`.

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
| `init`, `genesis` | Initialize a home directory; genesis subcommands (`gentx`, `collect-gentxs`, `validate`, ...) |
| `status`, `version` | Node status; binary version |
| `config` | Manage `client.toml` (chain-owned; the SDK's settings live under `bb settings`) |
| `export`, `rollback`, `index-eth-tx` | Cosmos EVM additions |
| `pre-upgrade` | Pre-upgrade hook for cosmovisor |
| `prune`, `snapshots`, `comet` (`tendermint`), `debug` | Standard Cosmos SDK maintenance |

Running a validator or full node: [Run a node](../chain/run-a-node.md). Build from source: [CLI](README.md#chain-binary-from-source).

## SDK alternative

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic('<mnemonic>', 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter });
const result = await client.signAndBroadcast([msg]);
```

The [signing client](../sdk/transactions/signing-client.md) handles gas estimation, sequence management, and broadcasting for every message type.

## Related

- [Messages](../token-standard/messages/README.md)
- [Queries](../token-standard/queries/README.md)
- [Deploy](deploy.md)
- [Network](../chain/README.md)
