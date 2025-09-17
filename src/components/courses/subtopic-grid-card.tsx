import Link from 'next/link';
import type { SubTopic } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type SubTopicGridCardProps = {
    subTopic: SubTopic;
    courseId: string;
}

export function SubTopicGridCard({ subTopic, courseId }: SubTopicGridCardProps) {
  return (
    <Link href={`/courses/${courseId}/${subTopic.id}`} className="block group">
      <Card className="neumorphic-outset border-none overflow-hidden h-full flex flex-col transition-transform group-hover:-translate-y-1">
         <div className="relative h-40 w-full">
            <Image 
                src={subTopic.imageUrl} 
                alt={subTopic.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                data-ai-hint="abstract illustration"
            />
         </div>
        <CardHeader>
          <CardTitle className="text-lg font-bold font-headline mb-1">{subTopic.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow" />
        <CardFooter className="pt-4">
          <Button className="w-full neumorphic-button bg-foreground text-background hover:bg-foreground/90">
            Study Topic
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
