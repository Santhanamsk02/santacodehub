import { MainLayout } from '@/components/layout/main-layout';
import { CourseGrid } from '@/components/courses/course-grid';
import { courses } from '@/lib/data';

export default function CoursesPage() {
  const dsaCourse = courses.filter(course => course.id === 'data-structures');
  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold font-headline">Your Courses</h1>
        <p className="text-muted-foreground">Continue your learning journey and explore new skills.</p>
      </div>
      <CourseGrid courses={dsaCourse} />
    </MainLayout>
  );
}
