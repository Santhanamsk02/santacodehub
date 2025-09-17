'use client';
import { useState } from 'react';
import type { SubTopic } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { CodeSnippet } from './code-snippet';
import { Separator } from '../ui/separator';

export function SubTopicCard({ subTopic }: { subTopic: SubTopic }) {
  const [language, setLanguage] = useState<'english' | 'tanglish'>('english');

  return (
    <Card className="neumorphic-outset border-none">
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
      <CardContent className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-foreground/90">
            {language === 'english' ? subTopic.contentEn : subTopic.contentTl}
          </p>
        </div>
        <Separator className='bg-border/50'/>
        <div>
          <h3 className="text-lg font-semibold mb-2 font-headline">Code Example</h3>
          <CodeSnippet javaCode={subTopic.codeJava} cCode={subTopic.codeC} />
        </div>
        <Separator className='bg-border/50'/>
        <div>
          <h3 className="text-lg font-semibold mb-2 font-headline">Key Concepts</h3>
          <p className="text-muted-foreground">This section can be used to highlight key concepts from the topic. You can add more detailed explanations, lists, or even images here.</p>
        </div>
      </CardContent>
    </Card>
  );
}
