---
anchor: RB-EXPLORER-EMBED
---

# Embedding the Explorers in the Docs

The docs site shows both block explorers in an Explorer tab. This records the
infrastructure change that made the ping.pub explorer embeddable, because it
loosened a cluster-wide default and future readers should know why.

## [1] What Was Changed, 2026-09-07

`explorer.bitbadges.io` sent `x-frame-options: SAMEORIGIN`, so a cross-origin
iframe from `docs.bitbadges.io` rendered blank. `evm.explorer.bitbadges.io`
sends no framing headers at all and needed no change.

Two edits on the k3s cluster (`138.197.122.4`):

```bash
# 1. ingress-nginx v1.13 ships allow-snippet-annotations=false. Both keys are
#    required before a configuration-snippet annotation is honoured.
kubectl -n ingress-nginx patch cm ingress-nginx-controller --type merge \
  -p '{"data":{"allow-snippet-annotations":"true","annotations-risk-level":"Critical"}}'

# 2. Clear the header on that one ingress and allow the docs origin.
kubectl annotate ingress bitbadges-explorer-ingress --overwrite \
  'nginx.ingress.kubernetes.io/configuration-snippet=more_clear_headers "X-Frame-Options"; add_header Content-Security-Policy "frame-ancestors '"'"'self'"'"' https://docs.bitbadges.io" always;'
```

Verify:

```bash
curl -sI https://explorer.bitbadges.io | grep -iE 'x-frame-options|content-security-policy'
# expect no x-frame-options, and:
# content-security-policy: frame-ancestors 'self' https://docs.bitbadges.io
```

## [2] The Tradeoff, Stated Plainly

`allow-snippet-annotations` is **cluster-wide**, and this controller also fronts
`api.bitbadges.io`, `bitbadges.io`, and both explorers. It was disabled by
default in ingress-nginx 1.9 after CVE-2021-25742, where anyone who can create
an Ingress can inject nginx configuration. On a single-tenant cluster with one
author that is acceptable; it stops being acceptable the moment someone else can
create Ingress objects, or a workload is given the RBAC to do so.

If that changes, move the header fix into the explorer image itself and set
`allow-snippet-annotations` back to `false`.

## [3] Two CSP Headers

The response now carries two `Content-Security-Policy` headers: the app's own,
and the one added here. Browsers enforce the intersection. The app's header has
no `frame-ancestors` directive, so it does not restrict framing today. If the
explorer app ever adds one, the intersection wins and the embed goes blank with
no other symptom. That is the first thing to check if it breaks.

## [4] Rollback

Backups were taken before the change:

```bash
ssh -i ~/.ssh/bitbadges-mainnet-rpc root@138.197.122.4 \
  "kubectl -n ingress-nginx apply -f /root/rollback-2026-09-07/ingress-nginx-cm.yaml && \
   kubectl apply -f /root/rollback-2026-09-07/explorer-ingress.yaml"
```

Removing only the annotation restores `SAMEORIGIN` without touching the
controller:

```bash
kubectl annotate ingress bitbadges-explorer-ingress \
  nginx.ingress.kubernetes.io/configuration-snippet-
```
