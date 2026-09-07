import type { Metadata } from 'next';

import { ApiReference } from '@/components/docs/ApiReference';
import { docsConfig } from '@/lib/docs/config';

export const metadata: Metadata = {
  title: 'API Reference',
  description: 'Interactive reference and request playground for the BitBadges API.',
};

export default function ApiReferencePage() {
  return (
    <ApiReference
      specUrl={`${docsConfig.basePath}${docsConfig.openapiUrl}`}
      backTo={{ href: '/api', label: 'Back' }}
    />
  );
}
