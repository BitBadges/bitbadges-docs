# Inventory A: overview + concepts (condensed)

## Canonical concept pages (keep, current)
learn/permissions.md (1840w/17 code, canonical manager+permissions), learn/transferability.md (1603/8), learn/minting-and-circulating-supply.md (1267/8), learn/auto-scan-and-prioritized-approvals.md (1560/13), learn/alias-compatibility.md (880/7, prefix badgeslp), learn/ibc-backed-minting.md (1336/9), learn/cosmos-coin-wrapper-paths.md (2419/20), learn/ibc-transfer-tokens-hook.md (1192/4), token-standard/learn/balance-system.md (500/6), collection-setup-fields.md (2042/14), address-lists.md (501/6), uintrange.md (404/5), approval-criteria/README.md (654, iApprovalCriteria hub), address-checks, approval-trackers (593), auto-deletion-options, badge-ownership (rename token-ownership), dynamic-store-challenges, eth-signature-challenges (972), evm-query-challenges (1195; covers criteria + invariants, split), merkle-challenges (1404/10), overrides, predetermined-balances (1922/10), voting-challenges (1378).

## Merges
- max-number-of-transfers + tallied-approval-amounts -> approval-trackers (one trackers page)
- requires.md (77w) -> approval-criteria README
- user-royalties -> user-approval-settings (orphan, add)
- usdbadge-transfers.md -> rename coin-transfers.md
- overview/what-is-bitbadges (orphan, 1832w, best pitch) + README.md -> ONE intro
- overview/comparing-bitbadges-to-other-protocols (orphan) -> vs-erc3643
- overview/contributing + link-sharing -> official-links
- overview/learn/badge-concepts/standards.md (orphan, UNIQUE: `standards` field incl "No User Ownership", "AI Agent Vault") -> collection-setup-fields
- for-developers/concepts/balances.md (expansion rules unique) -> balance-system; address-mappings-lists -> address-lists; uint-ranges drop; README drop
- x-tokenization/concepts/manager.md, total-supply.md drop (covered); ibc-backed-paths -> ibc-backed-minting
- token-standard/pre-readings (orphan, fuller) + learn/pre-readings -> one

## Orphans UNIQUE, must re-home
- x-tokenization/concepts/approval-criteria/alt-time-checks.md (1010w, business-hours gating)
- x-tokenization/concepts/approval-criteria/must-prioritize.md (561w)
- token-standard/learn/approval-criteria/special-address-flags.md (532w; allowBackedMinting/allowSpecialWrapping; linked by 2 nav pages)
- token-standard/learn/approval-criteria/user-approval-settings.md (454w)
- for-developers/concepts/chain-details.md (216w; chain IDs bitbadges-1/-2, EVM chain IDs, ubadge/abadge decimals, precisebank)
- for-developers/concepts/accounts.md (191w; bb1 <-> 0x mapping)

## Drop
overview/claim-builder/README.md, badge-standard/ tree, token-standard/concepts/permissions/token-id-action-permissions.md, .gitbook/includes/untitled.md, .gitbook/assets/README.md + modules.md (TypeDoc dump, 176 broken links), SUMMARY.md.backup.* (4), for-developers/concepts/README.md

## Other
- overview/faq.md: only home of fee schedule (0.1%). overview/badge.md: PoS rewards program ends 2026-08-12 (already past today 2026-09-06 -> verify). official-links: Stoplight link, npm listed 3x.
- overview/compliance-zone-architecture.md: best-written page (35 em-dashes though). use-cases: cut 40% templated restatements. vs-erc3643: ~30 literal ` -- `.
- _docs/development-guide.md: GitBook-coupled authoring guide -> replace with new style guide / CONTRIBUTING.
- llms.txt: hand-curated absolute URLs; regenerate last.
- Dependency order: UintRange -> Balance -> Mint/supply -> AddressList -> 3 approval levels + matching -> ApprovalCriteria -> criteria leaves -> auto-scan/prioritized + versioning -> manager + permissions -> collection fields + invariants -> wrapper paths / backed minting / hooks / alias denoms (need special-address-flags first).
- Typos: somehting (faq), forcefuly, balanace.
