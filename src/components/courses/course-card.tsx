import Link from 'next/link';
import type { Course } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`} className="block group">
      <Card className="border overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="text-lg font-bold font-headline mb-1">{course.title}</CardTitle>
          <CardDescription className="text-sm">{course.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow" />
        <CardFooter className="pt-4">
          <Button className="w-full">
            Study Now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
