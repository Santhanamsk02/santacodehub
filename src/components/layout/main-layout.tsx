'use client';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { BookOpen, Search, PanelLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/logo';
import { UserNav } from '@/components/user-nav';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export function MainLayout({ children }: { children: ReactNode }) {

    const sidebarNav = (
        <nav className="flex-1 p-4 space-y-2">
            <Link href="/courses" className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary-foreground bg-primary transition-all">
                <BookOpen className="h-4 w-4" />
                Courses
            </Link>
        </nav>
    );

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <aside className="hidden md:flex flex-col w-64 min-h-screen bg-background border-r">
        <div className="p-4 border-b">
          <Logo />
        </div>
        {sidebarNav}
      </aside>
      <div className="flex flex-col flex-1">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="ghost" className="md:hidden">
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64 bg-background border-r-0">
                    <div className="p-4 border-b">
                        <Logo />
                    </div>
                    {sidebarNav}
                </SheetContent>
            </Sheet>

            <div className="relative flex-1 md:ml-auto md:flex-none">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                type="search"
                placeholder="Search courses..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                />
            </div>
            <div className="ml-4">
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
