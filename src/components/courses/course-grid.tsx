'use client';

import { CourseCard } from './course-card';
import type { Course } from '@/lib/data';

export function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
