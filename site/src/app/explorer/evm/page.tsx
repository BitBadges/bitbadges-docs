import type { Metadata } from 'next';

import { ExplorerView } from '../ExplorerView';
import { getExplorer } from '../explorers';

const explorer = getExplorer('evm');

export const metadata: Metadata = {
  title: explorer.title,
  description: explorer.description,
};

export default function EvmExplorerPage() {
  return <ExplorerView id="evm" />;
}
