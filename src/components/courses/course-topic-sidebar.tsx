import type { Topic } from '@/lib/data';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarProps = {
  topics: Topic[];
  courseTitle: string;
  activeTopic: Topic | null;
  setActiveTopic: (topic: Topic) => void;
};

export function CourseTopicSidebar({ topics, courseTitle, activeTopic, setActiveTopic }: SidebarProps) {
  return (
    <aside className="flex flex-col w-full h-screen neumorphic-outset md:border-r">
      <div className="p-4 border-b">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/courses">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>
        </Button>
        <h2 className="text-lg font-semibold font-headline">{courseTitle}</h2>
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-2">
          {topics.map((topic) => (
            <Button
              key={topic.id}
              variant="ghost"
              onClick={() => setActiveTopic(topic)}
              className={cn(
                'w-full justify-start h-auto py-3 text-left neumorphic-button',
                activeTopic?.id === topic.id ? 'neumorphic-inset bg-primary/20' : ''
              )}
            >
              {topic.title}
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}
