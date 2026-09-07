import { z } from 'zod';

import { formatIdRanges, formatTimeRanges, Icon, rangesSchema, WidgetFrame } from './shared';

/**
 * The permissions table from the collection page: one row per permission with
 * the frontend's three states (permitted, forbidden, neutral) and time ranges.
 * Input is the on-chain `collectionPermissions` / `userPermissions` shape.
 */
const COLLECTION_PERMISSIONS: Record<string, string> = {
  canDeleteCollection: 'Delete collection',
  canArchiveCollection: 'Archive collection',
  canUpdateStandards: 'Update standards',
  canUpdateCustomData: 'Update custom data',
  canUpdateManager: 'Update manager',
  canUpdateCollectionMetadata: 'Update collection metadata',
  canUpdateTokenMetadata: 'Update token metadata',
  canUpdateCollectionApprovals: 'Update collection approvals',
  canUpdateValidTokenIds: 'Update valid token IDs',
  canAddMoreAliasPaths: 'Add alias paths',
  canAddMoreCosmosCoinWrapperPaths: 'Add coin wrapper paths',
  canUpdateOutgoingApprovals: 'Update outgoing approvals',
  canUpdateIncomingApprovals: 'Update incoming approvals',
  canUpdateAutoApproveSelfInitiatedOutgoingTransfers: 'Auto-approve self-initiated outgoing',
  canUpdateAutoApproveSelfInitiatedIncomingTransfers: 'Auto-approve self-initiated incoming',
  canUpdateAutoApproveAllIncomingTransfers: 'Auto-approve all incoming',
};

const entrySchema = z.object({
  permanentlyPermittedTimes: rangesSchema.default([]),
  permanentlyForbiddenTimes: rangesSchema.default([]),
  tokenIds: rangesSchema.optional(),
  timelineTimes: rangesSchema.optional(),
  transferTimes: rangesSchema.optional(),
  ownershipTimes: rangesSchema.optional(),
  approvalId: z.string().optional(),
  fromListId: z.string().optional(),
  toListId: z.string().optional(),
  initiatedByListId: z.string().optional(),
});

export const schema = z.object({
  permissions: z
    .record(z.string(), z.array(entrySchema))
    .refine((rec) => Object.keys(rec).every((k) => k in COLLECTION_PERMISSIONS), {
      message: `permission keys must be one of: ${Object.keys(COLLECTION_PERMISSIONS).join(', ')}`,
    }),
  /** Leave out permissions with an empty array. Default shows them as neutral. */
  hideNeutral: z.boolean().default(false),
});

export type Props = z.output<typeof schema>;

type State = 'permitted' | 'forbidden' | 'neutral';

const STATE = {
  permitted: { label: 'Permitted', icon: 'check' as const, color: '#1c9c62', hint: 'Frozen as allowed' },
  forbidden: { label: 'Forbidden', icon: 'x' as const, color: '#e0443e', hint: 'Frozen as blocked' },
  neutral: { label: 'Neutral', icon: 'unlock' as const, color: '#7c8199', hint: 'Allowed now, can still be changed' },
};

function criteriaOf(e: z.output<typeof entrySchema>): string[] {
  const out: string[] = [];
  if (e.tokenIds) out.push(`Token IDs ${formatIdRanges(e.tokenIds)}`);
  if (e.approvalId) out.push(`Approval ${e.approvalId}`);
  if (e.fromListId) out.push(`From ${e.fromListId}`);
  if (e.toListId) out.push(`To ${e.toListId}`);
  if (e.initiatedByListId) out.push(`Initiated by ${e.initiatedByListId}`);
  if (e.transferTimes) out.push(`Transfer ${formatTimeRanges(e.transferTimes)}`);
  if (e.ownershipTimes) out.push(`Ownership ${formatTimeRanges(e.ownershipTimes)}`);
  if (e.timelineTimes) out.push(`Timeline ${formatTimeRanges(e.timelineTimes)}`);
  return out;
}

export function Component({ permissions, hideNeutral }: Props) {
  const rows: { name: string; state: State; times: string; criteria: string[] }[] = [];
  for (const [key, entries] of Object.entries(permissions)) {
    const name = COLLECTION_PERMISSIONS[key];
    if (entries.length === 0) {
      if (!hideNeutral) rows.push({ name, state: 'neutral', times: 'All time', criteria: [] });
      continue;
    }
    for (const entry of entries) {
      if (entry.permanentlyForbiddenTimes.length) {
        rows.push({ name, state: 'forbidden', times: formatTimeRanges(entry.permanentlyForbiddenTimes), criteria: criteriaOf(entry) });
      }
      if (entry.permanentlyPermittedTimes.length) {
        rows.push({ name, state: 'permitted', times: formatTimeRanges(entry.permanentlyPermittedTimes), criteria: criteriaOf(entry) });
      }
      if (!entry.permanentlyForbiddenTimes.length && !entry.permanentlyPermittedTimes.length) {
        rows.push({ name, state: 'neutral', times: 'All time', criteria: criteriaOf(entry) });
      }
    }
  }
  const hasCriteria = rows.some((r) => r.criteria.length);

  return (
    <WidgetFrame name="permissions-grid" className="overflow-x-auto">
      <div>
        <div role="table" className="min-w-[32rem] text-sm">
          <div role="row" className="grid grid-cols-[1.4fr_1fr_1fr] gap-3 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--bg-inset)_55%,transparent)] px-4 py-2 font-semibold text-[var(--fg)]"
            style={hasCriteria ? { gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr' } : undefined}>
            <span role="columnheader">Permission</span>
            <span role="columnheader">State</span>
            <span role="columnheader">Times</span>
            {hasCriteria && <span role="columnheader">Applies to</span>}
          </div>
          {rows.map((row, i) => {
            const s = STATE[row.state];
            return (
              <div
                key={`${row.name}-${i}`}
                role="row"
                className="grid grid-cols-[1.4fr_1fr_1fr] items-center gap-3 border-b border-[var(--border)] px-4 py-2.5 last:border-b-0 hover:bg-[color-mix(in_oklab,var(--bg-inset)_45%,transparent)]"
                style={hasCriteria ? { gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr' } : undefined}
              >
                <span role="cell" className="font-semibold text-[var(--fg)]">{row.name}</span>
                <span role="cell" className="inline-flex items-center gap-1.5" title={s.hint} style={{ color: s.color }}>
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full text-white" style={{ backgroundColor: s.color }}>
                    <Icon name={s.icon} size={10} />
                  </span>
                  {row.state !== 'neutral' && <Icon name="snowflake" size={12} />}
                  <span className="font-semibold">{s.label}</span>
                </span>
                <span role="cell" className="text-[var(--fg-muted)]">{row.times}</span>
                {hasCriteria && <span role="cell" className="text-xs text-[var(--fg-muted)]">{row.criteria.join(' · ') || 'Everything'}</span>}
              </div>
            );
          })}
        </div>
      </div>
    </WidgetFrame>
  );
}

const FOREVER = [{ start: '1', end: '18446744073709551615' }];

export const examples: { name: string; props: z.input<typeof schema> }[] = [
  {
    name: 'locked-collection',
    props: {
      permissions: {
        canDeleteCollection: [{ permanentlyForbiddenTimes: FOREVER }],
        canUpdateManager: [{ permanentlyForbiddenTimes: FOREVER }],
        canUpdateCollectionMetadata: [{ permanentlyPermittedTimes: FOREVER }],
        canUpdateTokenMetadata: [{ tokenIds: [{ start: '1', end: '100' }], permanentlyForbiddenTimes: FOREVER }],
        canUpdateCollectionApprovals: [
          { approvalId: 'mint-phase-1', permanentlyForbiddenTimes: [{ start: '1788739200000', end: '18446744073709551615' }] },
        ],
        canUpdateValidTokenIds: [],
      },
    },
  },
  {
    name: 'user-permissions',
    props: {
      permissions: {
        canUpdateOutgoingApprovals: [],
        canUpdateIncomingApprovals: [{ permanentlyForbiddenTimes: FOREVER }],
        canUpdateAutoApproveAllIncomingTransfers: [{ permanentlyPermittedTimes: FOREVER }],
      },
    },
  },
];
