import Link from 'next/link';
import Image from 'next/image';
import type { Course } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`} className="block group">
      <Card className="neumorphic-outset border-none overflow-hidden h-full flex flex-col transition-transform group-hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative h-40 w-full">
            <Image
              src={course.imageUrl}
              alt={course.title}
              fill
              className="object-cover"
              data-ai-hint={course.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col">
          <CardTitle className="text-lg font-bold font-headline mb-1">{course.title}</CardTitle>
          <CardDescription className="text-sm mb-4 flex-grow">{course.description}</CardDescription>
          <div>
            <p className="text-xs text-muted-foreground mb-1">{course.progress}% complete</p>
            <Progress value={course.progress} className="h-2 neumorphic-inset" />
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full neumorphic-button bg-accent text-accent-foreground hover:bg-accent/90">
            Study Now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
