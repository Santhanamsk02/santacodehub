'use client';
import { useState } from 'react';
import type { SubTopic } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { CodeSnippet } from './code-snippet';
import { Separator } from '../ui/separator';
import Image from 'next/image';

export function SubTopicCard({ subTopic }: { subTopic: SubTopic }) {
  const [language, setLanguage] = useState<'english' | 'tanglish'>('english');

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="font-headline">{subTopic.title}</CardTitle>
          <div className="flex items-center space-x-2">
            <Label htmlFor={`lang-switch-${subTopic.id}`} className={language === 'english' ? 'text-foreground' : 'text-muted-foreground'}>English</Label>
            <Switch
              id={`lang-switch-${subTopic.id}`}
              checked={language === 'tanglish'}
              onCheckedChange={(checked) => setLanguage(checked ? 'tanglish' : 'english')}
            />
            <Label htmlFor={`lang-switch-${subTopic.id}`} className={language === 'tanglish' ? 'text-foreground' : 'text-muted-foreground'}>Tanglish</Label>
          </div>
        </div>
      </CardHeader>
      <div className="px-6 pb-6">
        <Image 
            src={subTopic.imageUrl} 
            alt={subTopic.title}
            width={600}
            height={400}
            className="rounded-lg w-full border p-1"
            data-ai-hint="abstract illustration"
            />
      </div>
      <CardContent className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-foreground/90">
            {language === 'english' ? subTopic.contentEn : subTopic.contentTl}
          </p>
        </div>
        <Separator/>
        <div>
          <h3 className="text-lg font-semibold mb-2 font-headline">Code Example</h3>
          <CodeSnippet javaCode={subTopic.codeJava} pythonCode={subTopic.codePython} />
        </div>
      </CardContent>
    </Card>
  );
}
