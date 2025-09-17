import type { ReactNode } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { UserNav } from '@/components/user-nav';
import { AdminNav } from './_components/admin-nav';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <aside className="hidden md:flex flex-col w-64 min-h-screen bg-background border-r">
        <div className="p-4 border-b">
          <Logo />
        </div>
        <AdminNav />
      </aside>
      <div className="flex flex-col flex-1">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
            <h1 className="text-xl font-semibold font-headline">Admin Dashboard</h1>
            <div className="ml-auto">
                <UserNav />
            </div>
        </header>
        <main className="flex-1 p-4 sm:p-6">
            {children}
        </main>
      </div>
    </div>
  );
}
