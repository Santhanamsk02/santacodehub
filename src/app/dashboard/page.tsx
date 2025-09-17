import { MainLayout } from '@/components/layout/main-layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold font-headline">Welcome back, Santa!</h1>
        <p className="text-muted-foreground">Here's a summary of your coding workshop.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="neumorphic-outset border-none lg:col-span-2">
          <CardHeader>
            <CardTitle>Recommended For You</CardTitle>
            <CardDescription>Courses picked just for you based on your interests.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between p-4 neumorphic-inset">
              <div>
                <h3 className="font-semibold">Advanced Sleigh Algorithms</h3>
                <p className="text-sm text-muted-foreground">Optimize your delivery route with graphs and trees.</p>
              </div>
              <Button asChild className="neumorphic-button bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#">Start</Link>
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 neumorphic-inset">
              <div>
                <h3 className="font-semibold">Toy Factory Automation with Python</h3>
                <p className="text-sm text-muted-foreground">Use scripts to manage toy production lines.</p>
              </div>
              <Button asChild className="neumorphic-button bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#">Start</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="neumorphic-outset border-none">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest achievements.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">Completed 'Java Basics for Elves' - Lesson 3.</p>
            <p className="text-sm">Earned the 'Pointer Pro' badge.</p>
            <p className="text-sm">Asked a question in 'C for Reindeer' forum.</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
