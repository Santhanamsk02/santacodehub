import { MainLayout } from '@/components/layout/main-layout';
import type { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  // Simple layout for admin, can be expanded later
  return <div className="bg-background min-h-screen">{children}</div>;
}
