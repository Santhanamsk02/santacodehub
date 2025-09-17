import type { ReactNode } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { UserNav } from '@/components/user-nav';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <div className="flex flex-col flex-1">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
            <div className='flex items-center gap-4'>
                <div className="md:hidden p-0 border-0">
                  <Logo />
                </div>
                <h1 className="text-xl font-semibold font-headline hidden md:block">Admin Dashboard</h1>
            </div>
            <div className="ml-auto">
                <UserNav />
            </div>
        </header>
        <main className="flex-1">
            {children}
        </main>
      </div>
    </div>
  );
}
