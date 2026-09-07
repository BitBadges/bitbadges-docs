---
description: "The x/custom-hooks IBC middleware: transfer_tokens (run MsgTransferTokens on an inbound transfer) and swap_and_action (swap, then transfer or forward)."
---

# IBC hooks: transfer tokens and swap and action

`x/custom-hooks` is IBC middleware that reads a JSON memo on an inbound ICS-20 transfer and runs an action after the coins land. Two hook types exist. `transfer_tokens` runs a `MsgTransferTokens` (mint, distribute, sell) in the same atomic transaction. `swap_and_action` swaps the received coins and then transfers or forwards the output, similar to Skip:Go and other IBC aggregators.

```json
{
  "transfer_tokens": {
    "collection_id": "123",
    "transfers": [
      {
        "from": "Mint",
        "to_addresses": [
          "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"
        ],
        "balances": [
          {
            "amount": "1",
            "badge_ids": [
              { "start": "1", "end": "1" }
            ],
            "ownership_times": [
              { "start": "1", "end": "18446744073709551615" }
            ]
          }
        ],
        "prioritized_approvals": [],
        "merkle_proofs": [],
        "eth_signature_proofs": [],
        "memo": "",
        "only_check_prioritized_collection_approvals": false,
        "only_check_prioritized_incoming_approvals": false,
        "only_check_prioritized_outgoing_approvals": false
      }
    ],
    "fail_on_error": true,
    "recover_address": ""
  }
}
```

## How the middleware runs

1. Intercept the inbound IBC transfer packet.
2. Parse the hook data from the memo. The memo is limited to 64 KB.
3. Execute the IBC transfer first, so the coins arrive.
4. Derive an intermediate sender address from the channel and the original sender.
5. Run the hook action (`transfer_tokens` or `swap_and_action`).
6. On failure, return an error acknowledgement, which rolls back the whole packet.

Native `x/tokenization` assets cannot be IBC transferred. Only x/bank assets can trigger a hook.

Only one hook per memo. A memo with both `swap_and_action` and `transfer_tokens` fails.

```go
type HookData struct {
    SwapAndAction  *SwapAndAction       `json:"swap_and_action,omitempty"`
    TransferTokens *TransferTokensAction `json:"transfer_tokens,omitempty"`
}
```

### Intermediate sender

The module derives a deterministic address from the IBC channel and the original sender. That address receives the IBC coins, is the `creator` of any executed `MsgTransferTokens`, and executes any swap. It is granted the auto-approval flags on the collection automatically, but your collection approvals must still authorize it (for example, a mint approval whose `initiatedByList` includes it or uses a wildcard list).

```ts
import { deriveIntermediateSender } from 'bitbadges';

// Derive the intermediate sender for a given channel + source address
const creator = deriveIntermediateSender('channel-0', 'osmo1p0rrel3365scadq5k9pv0x0zp9j22js6x44a9w', 'bb');
// Use this address in your collection's approval initiatedByList
```

### Atomicity

All operations run in a cached context. If the IBC transfer succeeds but the hook fails, everything is rolled back and the packet gets an error acknowledgement. State commits only when every step succeeds. For `transfer_tokens` with `fail_on_error: false`, the fallback to `recover_address` is also atomic.

## `transfer_tokens`

The hook runs `MsgTransferTokens` on `collection_id` as the intermediate sender. Send ATOM from Osmosis and mint a token on BitBadges in one transaction.

### Fields

`TransferTokensAction`:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `collection_id` | string | yes | Collection to execute transfers on |
| `transfers` | `Transfer[]` | yes | Same format as `MsgTransferTokens` transfers |
| `fail_on_error` | bool | yes | `true`: fail the whole IBC transfer on error. `false`: fall back to `recover_address` |
| `recover_address` | string | if `fail_on_error` is `false` | Address that receives the IBC coins on failure |

Transfer object (snake_case keys, converted to camelCase internally for protobuf processing):

| Field | Type | Description |
| --- | --- | --- |
| `from` | string | Sender address (`"Mint"` to mint) |
| `to_addresses` | string[] | Recipients |
| `balances` | `Balance[]` | Balances to transfer; token ID ranges use the `badge_ids` key |
| `prioritized_approvals` | `ApprovalIdentifierDetails[]` | Prioritized approval identifiers |
| `merkle_proofs` | `MerkleProof[]` | Merkle challenge solutions, if any |
| `eth_signature_proofs` | `ETHSignatureProof[]` | ETH signature proofs, if any |
| `memo` | string | Transfer memo |
| `only_check_prioritized_collection_approvals` | bool | Only check collection-level approvals |
| `only_check_prioritized_incoming_approvals` | bool | Only check incoming approvals |
| `only_check_prioritized_outgoing_approvals` | bool | Only check outgoing approvals |

### Error handling

`fail_on_error: true` (default): a failed token transfer rolls back the IBC transfer. The sender gets the coins back on the source chain through the standard error acknowledgement.

`fail_on_error: false`: a failed token transfer sends the IBC coins to `recover_address`. The IBC transfer itself succeeds (success acknowledgement) but no token transfer runs. Use this when the sender should not have to recover coins on the source chain.

```json fold=4-29
{
  "transfer_tokens": {
    "collection_id": "123",
    "transfers": [
      {
        "from": "Mint",
        "to_addresses": [
          "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"
        ],
        "balances": [
          {
            "amount": "1",
            "badge_ids": [
              { "start": "1", "end": "1" }
            ],
            "ownership_times": [
              { "start": "1", "end": "18446744073709551615" }
            ]
          }
        ],
        "prioritized_approvals": [],
        "merkle_proofs": [],
        "eth_signature_proofs": [],
        "memo": "",
        "only_check_prioritized_collection_approvals": false,
        "only_check_prioritized_incoming_approvals": false,
        "only_check_prioritized_outgoing_approvals": false
      }
    ],
    "fail_on_error": false,
    "recover_address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
  }
}
```

### Minimal-value triggers

The hook rides on standard ICS-20 rails. There is no restriction on which denom or amount carries the memo. A negligible amount of any ICS-20 asset works as a pure trigger:

```text
IBC MsgTransfer fields:
  token: { denom: "ubadge", amount: "1" }   (0.000001 BADGE, effectively free)
  memo:  the transfer_tokens JSON shown above
```

The transferred coin does not need to relate to the token transfer:

- Send 1 `ubadge` to trigger an NFT mint.
- Send 1 `uatom` to trigger a token distribution.
- Send any ICS-20 asset available on the source chain.

The business logic lives in the `transfers` array and the collection's approvals. If the transfer is only a trigger, pick the cheapest denom on the source chain. The coins end up with the intermediate sender (or `recover_address` on failure).

### Use cases and limits

Cross-chain minting, cross-chain purchases (pay with IBC coins, receive tokens atomically), cross-chain airdrops, and bridge-and-transfer in one step.

- Memo size: 64 KB maximum.
- Only x/bank assets can trigger the hook.
- The target collection must already exist.
- Standard approval rules apply; the intermediate sender must be authorized.

## `swap_and_action`

Swaps the received coins through an [x/gamm](../../chain/modules/gamm/README.md) pool and then performs one post-swap action: a local transfer or an IBC transfer. The memo format follows Skip Protocol's implementation with minor differences; some Skip features are not supported.

### Types

```go
type SwapAndAction struct {
    UserSwap                  *UserSwap       `json:"user_swap,omitempty"`
    MinAsset                  *MinAsset       `json:"min_asset,omitempty"`
    TimeoutTimestamp          *uint64         `json:"timeout_timestamp,omitempty"`
    PostSwapAction            *PostSwapAction `json:"post_swap_action,omitempty"`
    DestinationRecoverAddress string          `json:"destination_recover_address,omitempty"`
    Affiliates                []Affiliate     `json:"affiliates,omitempty"`
}
```

```go
type UserSwap struct {
    SwapExactAssetIn *SwapExactAssetIn `json:"swap_exact_asset_in,omitempty"`
}
```

```go
type SwapExactAssetIn struct {
    SwapVenueName string      `json:"swap_venue_name,omitempty"`
    Operations    []Operation `json:"operations"`
}
```

```go
type Operation struct {
    Pool     string `json:"pool"`     // Pool ID as string
    DenomIn  string `json:"denom_in"`
    DenomOut string `json:"denom_out"`
}
```

```go
type MinAsset struct {
    Native *NativeAsset `json:"native,omitempty"`
}
```

```go
type NativeAsset struct {
    Denom  string `json:"denom"`
    Amount string `json:"amount"`
}
```

```go
type PostSwapAction struct {
    IBCTransfer *IBCTransferInfo `json:"ibc_transfer,omitempty"`
    Transfer    *TransferInfo    `json:"transfer,omitempty"`
}
```

Exactly one of `IBCTransfer` or `Transfer` must be set.

```go
type TransferInfo struct {
    ToAddress string `json:"to_address"`
}
```

```go
type IBCTransferInfo struct {
    IBCInfo *IBCInfo `json:"ibc_info,omitempty"`
}
```

```go
type IBCInfo struct {
    SourceChannel  string `json:"source_channel"`
    Receiver       string `json:"receiver"`
    Memo           string `json:"memo,omitempty"`
    RecoverAddress string `json:"recover_address,omitempty"`
}
```

```go
type Affiliate struct {
    BasisPointsFee string `json:"basis_points_fee"`
    Address        string `json:"address"`
}
```

### Affiliates

`affiliates` names fee recipients who take a share of the swap output. Useful for referral programs, partnerships, and revenue sharing. In the example, alice takes 10 basis points (0.1%) and bob takes 25 (0.25%).

- Optional. No affiliates means no fee.
- Fees are in basis points (1 basis point = 0.01%, 100 basis points = 1%).
- Several affiliates can be listed; each receives its own fee.
- Fees are taken from the swap output before any post-swap action.
- Addresses must be valid Bech32 addresses on the destination chain.

```json
{
  "affiliates": [
    {
      "basis_points_fee": "10",
      "address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
    },
    {
      "basis_points_fee": "25",
      "address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"
    }
  ]
}
```

With a swap output of 1,000,000 tokens: the first affiliate receives 1,000,000 x 0.001 = 1,000, the second receives 1,000,000 x 0.0025 = 2,500, and 996,500 remain for the post-swap action.

### `destination_recover_address`

By default a failed swap of asset A to asset B fails the whole IBC transfer, and asset A is rolled back to the source chain. Setting `destination_recover_address` tells the hook to keep asset A at that address on the destination chain instead. No post-swap action runs; the packet is treated as a plain IBC transfer to that address.

```json
{
  "destination_recover_address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
}
```

This applies only to swap failures, which include:

- Slippage tolerance exceeded.
- Compliance not passed.
- Insufficient funds (should never happen, since the input amount is the amount transferred via IBC).
- Calculated amount out equals zero.
- Similar swap logic errors.

It does not apply to, and standard behavior is used for:

- Misconfigured messages (wrong prefixes, missing fields).
- Invalid pool IDs.
- Standard IBC transfer failures (rate limits, timeouts).

The reasoning: on a swap failure, the user expects funds to be recoverable on the source chain. Consider a multi-swap path:

1. Send asset A from BitBadges to Osmosis.
2. Swap A to B on Osmosis.
3. Send B from Osmosis to BitBadges.
4. Swap B to C on BitBadges.

If step 4 fails, the default leaves asset B recoverable on Osmosis. With the recovery address, asset B stays recoverable on BitBadges. It is not a catch-all, but it avoids a trip to another chain in many cases.

### Validation rules

1. `post_swap_action` is required.
2. Exactly one of `ibc_transfer` or `transfer` must be set.
3. If `post_swap_action` is set, a swap must be set too.
4. Only single-operation swaps are supported.
5. The swap's `denom_in` must match the received denom; the amount is the received amount.
6. For IBC transfers, the source channel must exist.
7. All addresses must be valid Bech32 addresses.
8. Channel capabilities must exist for IBC transfers.

### Post-swap actions

Local transfer:

```json
{
  "transfer": { "to_address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue" }
}
```

IBC transfer:

```json
{
  "ibc_transfer": {
    "ibc_info": {
      "source_channel": "channel-0",
      "receiver": "cosmos1py4mfpg6uf59qkyzg0nmau322c5873ee8df8qg",
      "memo": "",
      "recover_address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
    }
  }
}
```

### Limitations

1. Single-hop swaps only.
2. GAMM pools only.
3. BitBadges native denoms cannot be IBC transferred.
4. A swap is required when using post-swap actions. For a transfer without a swap, use packet-forward-middleware.

### Examples

Swap and local transfer:

```json
{
  "swap_and_action": {
    "user_swap": {
      "swap_exact_asset_in": {
        "swap_venue_name": "bitbadges-poolmanager",
        "operations": [
          {
            "pool": "1",
            "denom_in": "ubadge",
            "denom_out": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"
          }
        ]
      }
    },
    "min_asset": {
      "native": {
        "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8",
        "amount": "1000000"
      }
    },
    "post_swap_action": {
      "transfer": { "to_address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue" }
    }
  }
}
```

Swap and IBC transfer:

```json
{
  "swap_and_action": {
    "user_swap": {
      "swap_exact_asset_in": {
        "swap_venue_name": "bitbadges-poolmanager",
        "operations": [
          {
            "pool": "1",
            "denom_in": "ubadge",
            "denom_out": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"
          }
        ]
      }
    },
    "min_asset": {
      "native": {
        "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8",
        "amount": "1000000"
      }
    },
    "post_swap_action": {
      "ibc_transfer": {
        "ibc_info": {
          "source_channel": "channel-0",
          "receiver": "cosmos1py4mfpg6uf59qkyzg0nmau322c5873ee8df8qg",
          "recover_address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
        }
      }
    },
    "timeout_timestamp": 1234567890000000000,
    "destination_recover_address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "affiliates": [
      {
        "basis_points_fee": "10",
        "address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
      }
    ]
  }
}
```

Swap with affiliates (alice takes 0.5%, bob takes 0.25%):

```json
{
  "swap_and_action": {
    "user_swap": {
      "swap_exact_asset_in": {
        "swap_venue_name": "bitbadges-poolmanager",
        "operations": [
          {
            "pool": "1",
            "denom_in": "ubadge",
            "denom_out": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"
          }
        ]
      }
    },
    "min_asset": {
      "native": {
        "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8",
        "amount": "1000000"
      }
    },
    "post_swap_action": {
      "transfer": { "to_address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue" }
    },
    "affiliates": [
      {
        "basis_points_fee": "50",
        "address": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
      },
      {
        "basis_points_fee": "25",
        "address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"
      }
    ]
  }
}
```

## Related

- [MsgTransferTokens](../messages/msg-transfer-tokens.md)
- [Backed minting](backed-minting.md)
- [x/gamm](../../chain/modules/gamm/README.md)
- [Rate limits](../../chain/modules/ibc-rate-limit.md)
