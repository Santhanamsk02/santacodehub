import Link from 'next/link';
import type { Course } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`} className="block group">
      <Card className="neumorphic-outset border-none overflow-hidden h-full flex flex-col transition-transform group-hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="text-lg font-bold font-headline mb-1">{course.title}</CardTitle>
          <CardDescription className="text-sm">{course.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-end">
          <div>
            <p className="text-xs text-muted-foreground mb-1">{course.progress}% complete</p>
            <Progress value={course.progress} className="h-2 neumorphic-inset" />
          </div>
        </CardContent>
        <CardFooter className="pt-4">
          <Button className="w-full neumorphic-button bg-foreground text-background hover:bg-foreground/90">
            Study Now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
