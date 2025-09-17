import { Suspense } from 'react';
import { AdminPageContent } from './_components/admin-page-content';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminPage() {
  return (
    <Suspense fallback={<AdminPageSkeleton />}>
      <AdminPageContent />
    </Suspense>
  );
}

function AdminPageSkeleton() {
    return (
        <div className="flex w-full">
            <div className="flex-1 flex justify-center p-4">
                <div className="w-full max-w-2xl space-y-4">
                    <Skeleton className="h-10 w-1/2" />
                    <Skeleton className="h-8 w-3/4" />
                    <div className="space-y-6 pt-4">
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-1/4" />
                            <Skeleton className="h-10 w-full" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-1/4" />
                            <Skeleton className="h-20 w-full" />
                        </div>
                        <Skeleton className="h-10 w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
