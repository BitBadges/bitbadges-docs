import type { Metadata } from 'next';

import { ExplorerView } from '../ExplorerView';
import { getExplorer } from '../explorers';

const explorer = getExplorer('cosmos');

export const metadata: Metadata = {
  title: explorer.title,
  description: explorer.description,
};

export default function CosmosExplorerPage() {
  return <ExplorerView id="cosmos" />;
}
