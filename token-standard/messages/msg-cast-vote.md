---
description: "MsgCastVote casts or updates a weighted yes/no vote on a voting challenge inside an approval's criteria."
---

# MsgCastVote

Casts or replaces the signer's vote on a voting challenge. Only addresses in the challenge's `voters` list can vote. Voting challenges implement weighted-quorum multisig approval of transfers.

## Example

```bash
# [collection-id] [approval-level] [approver-address] [approval-id] [proposal-id] [yes-weight]
bb tx tokenization cast-vote 1 collection "" multisig-approval proposal-1 100 --from carol --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgCastVote } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgCastVote({
  creator: 'bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf',
  collectionId: 1n,
  approvalLevel: 'collection',
  approverAddress: '',
  approvalId: 'multisig-approval',
  proposalId: 'proposal-1',
  yesWeight: 100n
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json
{
  "creator": "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf",
  "collectionId": "1",
  "approvalLevel": "collection",
  "approverAddress": "",
  "approvalId": "multisig-approval",
  "proposalId": "proposal-1",
  "yesWeight": "100"
}
```

A vote on a user-level approval names the approver:

```json
{
  "creator": "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf",
  "collectionId": "1",
  "approvalLevel": "outgoing",
  "approverAddress": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "approvalId": "delegation-approval",
  "proposalId": "delegation-proposal-1",
  "yesWeight": "80"
}
```

A partial vote of `"yesWeight": "60"` allocates 60% to yes and 40% to no.

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Voter. Must appear in the challenge's `voters` list. |
| `collectionId` | Uint | yes | Collection. Cannot be `0`. |
| `approvalLevel` | string | yes | `collection`, `incoming`, or `outgoing`. |
| `approverAddress` | string | yes | Empty for `collection`. The user's address for `incoming` or `outgoing`. |
| `approvalId` | string | yes | Approval that holds the voting challenge. |
| `proposalId` | string | yes | `proposalId` of the `VotingChallenge`. |
| `yesWeight` | Uint | yes | Percentage (0 to 100) of the voter's weight allocated to yes. The rest counts as no. |

The response is empty.

## Behavior

- The vote is stored under the key `collectionId-approverAddress-approvalLevel-approvalId-proposalId-voter` with a `votedAt` timestamp. Casting again with the same parameters overwrites the previous vote.
- Contribution to the yes tally is `voterWeight * yesWeight / 100`. Example: weight 200 and `yesWeight` 75 contribute 150. Quorum is met when the yes tally is at least `quorumThreshold` percent of the total weight of all listed voters, not only those who voted.
- When the challenge sets `delayAfterQuorum` or `resetAfterExecution`, the chain keeps a tracker with `quorumReachedTimestamp`. The timestamp is set the first time quorum is met and cleared when a vote drops the tally below quorum, which restarts the delay.
- Errors: `creator` not in `voters`; `yesWeight` above 100; invalid `approvalLevel`; `approverAddress` set for `collection` or empty for user levels; approval or `proposalId` not found (`Voting challenge not found`); collection not found.
- The vote does not move tokens. A later `MsgTransferTokens` that uses the approval passes the challenge when quorum (and any delay) is satisfied.

## Related

- [Voting challenges](../approval-criteria/voting-challenges.md)
- [GetVote](../queries/get-vote.md)
- [GetVotes](../queries/get-votes.md)
- [MsgTransferTokens](msg-transfer-tokens.md)
