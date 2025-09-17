'use client';
import { useState } from 'react';
import type { SubTopic } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { CodeSnippet } from './code-snippet';

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
      <CardContent className="space-y-4">
        <p className="text-foreground/90">
          {language === 'english' ? subTopic.contentEn : subTopic.contentTl}
        </p>
        <CodeSnippet javaCode={subTopic.codeJava} cCode={subTopic.codeC} />
      </CardContent>
    </Card>
  );
}
