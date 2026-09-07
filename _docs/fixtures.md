# Example fixtures

Every example in the docs uses these values so pages agree with each other. Addresses are well-formed bech32 (valid checksums) derived from fixed bytes; they are not funded accounts. Never put a real mnemonic or private key in a page; use `process.env.MNEMONIC` or `<key-name>` for keyring names.

| Name | Role | Cosmos address | EVM address |
| --- | --- | --- | --- |
| alice | collection creator and manager | `bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d` | `0x0bc63cfe31d5218eb414b142c799e20964a54a1a` |
| bob | recipient, buyer, subscriber | `bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue` | `0x092bb4851ae26850588243e7bef22a56287f4739` |
| carol | second user, bidder, voter | `bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf` | `0x1615a3cf0b91cce87d0ef014ac76f0d5aa47d4fd` |
| agent | an AI agent's own key | `bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr` | `0x3e3adf18d0b45a3639a6cf6188b813507e958440` |

| Fixture | Value |
| --- | --- |
| Demo NFT collection | id `1`, name "Demo NFTs", 100 tokens, manager alice |
| Demo fungible token | id `2`, name "Demo Coin", 1,000,000 units of token ID 1 |
| Demo subscription | id `3`, name "Demo Membership", 30-day intervals |
| Keyring name | `alice` (as in `--from alice`) |
| Chain ID | `bitbadges-1` |
| Full time range | `{ "start": "1", "end": "18446744073709551615" }` |
| Now | `1788739200000` ms (2026-09-06T00:00:00Z); one day is `86400000` |
| Denoms | `ubadge` (BADGE), `badges:1:utoken` (wrapped collection 1), USDC as documented on the network page |
| Metadata URIs | `ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json` and `.../{id}.json` |
| Claim id | `claim_demo_01` |
| Tx hash | `E5B4C3A6E5B1F3B9F0F4C1F2B7A6D5C4E3F2A1B0C9D8E7F6A5B4C3D2E1F0A9B8` |
