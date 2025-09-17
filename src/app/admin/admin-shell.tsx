'use client';
import { useState } from "react";
import { AdminNav } from "./_components/admin-nav";
import { AdminPageContent } from "./_components/admin-page-content";

export type AdminView = 'add-course' | 'add-topic' | 'add-sub-topic';

export function AdminShell() {
    const [activeView, setActiveView] = useState<AdminView>('add-course');

    return (
        <div className="flex w-full h-full">
            <aside className="hidden md:flex flex-col w-64 min-h-full bg-background border-r">
                <AdminNav activeView={activeView} setActiveView={setActiveView} />
            </aside>
            <div className="flex-1 flex justify-center p-4">
                <AdminPageContent activeView={activeView} />
            </div>
        </div>
    )
}
