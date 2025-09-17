import { subTopics, topics, courses } from '@/lib/data';
import { notFound } from 'next/navigation';
import { SubTopicCard } from '@/components/courses/subtopic-card';
import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

type SubTopicPageProps = {
    params: {
        courseId: string;
        subTopicId: string;
    };
};

export default function SubTopicPage({ params }: SubTopicPageProps) {
    const subTopic = subTopics.find(st => st.id === params.subTopicId);
    
    if (!subTopic) {
        notFound();
    }
    
    const parentTopic = topics.find(t => t.id === subTopic.topicId);
    const parentCourse = courses.find(c => c.id === parentTopic?.courseId);

    return (
        <MainLayout>
            <div className="space-y-4">
                 <Button variant="ghost" asChild className="mb-4">
                    <Link href={`/courses/${params.courseId}`}>
                        <ChevronLeft className="h-4 w-4 mr-2" />
                        Back to {parentTopic?.title || parentCourse?.title || 'Course'}
                    </Link>
                </Button>
                <SubTopicCard subTopic={subTopic} />
            </div>
        </MainLayout>
    );
}
