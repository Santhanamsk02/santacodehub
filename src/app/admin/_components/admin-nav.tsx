'use client';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookPlus, FilePlus, ListPlus } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function AdminNav() {
    const searchParams = useSearchParams();
    const activeView = searchParams.get('view') || 'add-course';

    const navItems = [
        {
            view: 'add-course',
            label: 'Add Course',
            icon: BookPlus
        },
        {
            view: 'add-topic',
            label: 'Add Topic',
            icon: ListPlus
        },
        {
            view: 'add-sub-topic',
            label: 'Add Sub-Topic',
            icon: FilePlus
        }
    ];

    return (
        <nav className="flex-1 p-4 space-y-2">
            {navItems.map(item => (
                <Button key={item.view} variant="ghost" asChild className={cn('w-full justify-start', activeView === item.view && 'neumorphic-inset bg-primary/10')}>
                    <Link href={`/admin?view=${item.view}`}>
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.label}
                    </Link>
                 </Button>
            ))}
        </nav>
    )
}
