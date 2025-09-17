import Link from 'next/link';
import type { SubTopic } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type SubTopicGridCardProps = {
    subTopic: SubTopic;
    courseId: string;
}

export function SubTopicGridCard({ subTopic, courseId }: SubTopicGridCardProps) {
  const shortDescription = subTopic.contentEn.split('.').slice(0, 1).join('.') + '.';

  return (
    <Link href={`/courses/${courseId}/${subTopic.id}`} className="block group">
      <Card className="neumorphic-outset border-none overflow-hidden h-full flex flex-col transition-transform group-hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="text-lg font-bold font-headline mb-1">{subTopic.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <CardDescription>{shortDescription}</CardDescription>
        </CardContent>
        <CardFooter className="pt-4">
          <Button className="w-full neumorphic-button bg-background text-foreground hover:bg-background/90">
            Study Topic
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
