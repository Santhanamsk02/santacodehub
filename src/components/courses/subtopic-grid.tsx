import type { SubTopic } from '@/lib/data';
import { SubTopicGridCard } from './subtopic-grid-card';

type SubTopicGridProps = {
    subTopics: SubTopic[];
    courseId: string;
}

export function SubTopicGrid({ subTopics, courseId }: SubTopicGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {subTopics.map((subTopic) => (
        <SubTopicGridCard key={subTopic.id} subTopic={subTopic} courseId={courseId} />
      ))}
    </div>
  );
}
