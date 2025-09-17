'use client';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookPlus, FilePlus, ListPlus } from "lucide-react";
import type { AdminView } from "../admin-shell";

type AdminNavProps = {
    activeView: AdminView;
    setActiveView: (view: AdminView) => void;
}

export function AdminNav({ activeView, setActiveView }: AdminNavProps) {
    const navItems = [
        {
            view: 'add-course' as AdminView,
            label: 'Add Course',
            icon: BookPlus
        },
        {
            view: 'add-topic' as AdminView,
            label: 'Add Topic',
            icon: ListPlus
        },
        {
            view: 'add-sub-topic' as AdminView,
            label: 'Add Sub-Topic',
            icon: FilePlus
        }
    ];

    return (
        <nav className="flex-1 p-4 space-y-2">
            {navItems.map(item => (
                <Button key={item.view} variant="ghost" onClick={() => setActiveView(item.view)} className={cn('w-full justify-start', activeView === item.view && 'bg-muted')}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                </Button>
            ))}
        </nav>
    )
}
