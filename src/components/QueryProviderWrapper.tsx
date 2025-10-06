'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { queryClient } from '../lib/queryClient';

interface QueryProviderWrapperProps {
  children: ReactNode;
}

export default function QueryProviderWrapper({ children }: QueryProviderWrapperProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}