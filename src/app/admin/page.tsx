'use client';
import { useState } from 'react';
import { AdminNav } from './_components/admin-nav';
import { AdminPageContent } from './_components/admin-page-content';
import { Logo } from '@/components/logo';
import type { AdminView } from './admin-shell';

export default function AdminPage() {
    const [activeView, setActiveView] = useState<AdminView>('add-course');

    return (
        <div className="flex min-h-[calc(100vh-4rem)]">
            <aside className="hidden md:flex flex-col w-64 bg-background border-r">
                <div className="p-4 border-b">
                    <Logo />
                </div>
                <AdminNav activeView={activeView} setActiveView={setActiveView} />
            </aside>
            <div className="flex-1 flex">
                <AdminPageContent activeView={activeView} />
            </div>
        </div>
    )
}
