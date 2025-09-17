'use client';

import { useState, useEffect } from 'react';
import { topics, subTopics, courses } from '@/lib/data';
import { notFound } from 'next/navigation';
import { CourseContent } from '@/components/courses/course-content';
import { CourseTopicSidebar } from '@/components/courses/course-topic-sidebar';
import { UserNav } from '@/components/user-nav';
import type { Topic } from '@/lib/data';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';


type CoursePageProps = {
  params: {
    courseId: string;
  };
};

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.id === params.courseId);
  const courseTopics = topics.filter((t) => t.courseId === params.courseId);

  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if(courseTopics.length > 0) {
      const defaultTopic = courseTopics[0];
      if(defaultTopic) {
        setActiveTopic(defaultTopic);
      }
    }
  }, [params.courseId, courseTopics]);

  if (!course) {
    notFound();
  }

  const activeSubTopics = subTopics.filter(
    (st) => st.topicId === activeTopic?.id
  );

  const sidebarContent = (
      <CourseTopicSidebar
        topics={courseTopics}
        courseTitle={course.title}
        activeTopic={activeTopic}
        setActiveTopic={setActiveTopic}
      />
  );


  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      {isMobile ? (
         <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="fixed top-4 left-4 z-20">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80 bg-background border-r-0">
                {sidebarContent}
            </SheetContent>
        </Sheet>
      ) : (
        <div className="w-80 flex-shrink-0">
          {sidebarContent}
        </div>
      )}
      
      <div className="flex flex-col flex-1">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-xl font-semibold font-headline pl-10 md:pl-0">{activeTopic?.title || course.title}</h1>
          </div>
          <UserNav />
        </header>
        <main className="flex-1 p-4 sm:p-6">
          <CourseContent subTopics={activeSubTopics} course={course} />
        </main>
      </div>
    </div>
  );
}
