import { topics, subTopics, courses } from '@/lib/data';
import { notFound } from 'next/navigation';
import { CourseShell } from './course-shell';
import type { Course, Topic, SubTopic } from '@/lib/data';

type CoursePageProps = {
  params: {
    courseId: string;
  };
};

export async function generateStaticParams() {
  return courses.map((course) => ({
    courseId: course.id,
  }));
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.id === params.courseId);
  if (!course) {
    notFound();
  }

  const courseTopics = topics.filter((t) => t.courseId === params.courseId);

  // Pass all data to the client component
  return <CourseShell course={course} topics={courseTopics} subTopics={subTopics} />;
}
