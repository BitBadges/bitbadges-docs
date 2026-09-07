import type { Metadata } from 'next';

import { ApiReference } from '@/components/docs/ApiReference';
import { docsConfig } from '@/lib/docs/config';

export const metadata: Metadata = {
  title: 'Chain API Reference',
  description:
    'Interactive reference and request playground for the BitBadges chain LCD — the REST (gRPC-gateway) surface served by chain nodes.',
};

export default function ChainApiReferencePage() {
  return (
    <ApiReference
      specUrl={`${docsConfig.basePath}${docsConfig.chainOpenapiUrl}`}
      backTo={{ href: '/chain', label: 'Back' }}
    />
  );
}
