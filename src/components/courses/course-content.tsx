import type { SubTopic } from '@/lib/data';
import { SubTopicCard } from './subtopic-card';

export function CourseContent({ subTopics }: { subTopics: SubTopic[] }) {
  if (subTopics.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <p>Select a topic to see its content, or check if this topic has lessons.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {subTopics.map((subTopic) => (
        <SubTopicCard key={subTopic.id} subTopic={subTopic} />
      ))}
    </div>
  );
}
