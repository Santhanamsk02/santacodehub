import type { SubTopic } from '@/lib/data';
import { SubTopicGrid } from './subtopic-grid';
import type { Course } from '@/lib/data';

export function CourseContent({ subTopics, course }: { subTopics: SubTopic[], course: Course }) {
  if (subTopics.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <p>Select a topic to see its content, or check if this topic has lessons.</p>
      </div>
    );
  }

  return (
    <SubTopicGrid subTopics={subTopics} courseId={course.id} />
  );
}
