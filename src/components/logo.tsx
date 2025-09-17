import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/courses" className="flex items-center gap-2 text-xl font-bold text-foreground">
      <GraduationCap className="h-7 w-7 text-primary" />
      <span className="font-headline">SantaCodeHub</span>
    </Link>
  );
}
