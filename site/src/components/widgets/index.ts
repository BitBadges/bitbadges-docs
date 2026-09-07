/**
 * Widget registry: the single place the markdown plugin, the gallery page and
 * the tests look up a widget by its directive name.
 *
 * Adding a widget: create `<Name>.tsx` exporting `{ schema, Component,
 * examples }`, add it here, run `bun test -u tests/widgets.test.ts` to record
 * its snapshots, then refresh the gallery images (see `_docs/architecture.md`).
 */
import type { ReactNode } from 'react';
import type { z } from 'zod';

import * as address from './Address';
import * as addressList from './AddressList';
import * as approvalCriteria from './ApprovalCriteria';
import * as collectionCard from './CollectionCard';
import * as permissionsGrid from './PermissionsGrid';
import * as swap from './Swap';
import * as transferabilityRow from './TransferabilityRow';

export type WidgetExample = { name: string; props: unknown };

export type WidgetDef = {
  schema: z.ZodType;
  Component: (props: never) => ReactNode;
  examples: readonly WidgetExample[];
};

export const widgets = {
  address,
  'address-list': addressList,
  'approval-criteria': approvalCriteria,
  'collection-card': collectionCard,
  'permissions-grid': permissionsGrid,
  swap,
  'transferability-row': transferabilityRow,
} satisfies Record<string, WidgetDef>;

export type WidgetName = keyof typeof widgets;

export const widgetNames = Object.keys(widgets) as WidgetName[];

export function isWidgetName(name: string): name is WidgetName {
  return Object.prototype.hasOwnProperty.call(widgets, name);
}

/**
 * Validate raw props against the widget's schema and return the element.
 * Throws a zod error with the widget name on invalid input.
 */
export function createWidgetElement(name: WidgetName, rawProps: unknown): ReactNode {
  const def = widgets[name] as WidgetDef;
  const parsed = def.schema.safeParse(rawProps);
  if (!parsed.success) {
    const issues = parsed.error.issues.map((i) => `${i.path.join('.') || '(root)'}: ${i.message}`).join('; ');
    throw new Error(`widget "${name}": invalid props: ${issues}`);
  }
  return (def.Component as (props: unknown) => ReactNode)(parsed.data);
}
