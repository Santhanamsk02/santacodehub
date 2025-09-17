'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Clipboard } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';


type CodeSnippetProps = {
  javaCode: string;
  pythonCode: string;
};

export function CodeSnippet({ javaCode, pythonCode }: CodeSnippetProps) {
  const [activeTab, setActiveTab] = useState('java');
  const { toast } = useToast();

  const copyToClipboard = () => {
    const codeToCopy = activeTab === 'java' ? javaCode : pythonCode;
    navigator.clipboard.writeText(codeToCopy);
    toast({
      title: 'Copied to clipboard!',
      description: `The ${activeTab.toUpperCase()} code has been copied.`,
    })
  };

  return (
    <div className="relative">
      <Tabs defaultValue="java" onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-between items-center mb-2">
          <TabsList>
            <TabsTrigger value="java">Java</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
          </TabsList>
          <Button variant="ghost" size="icon" onClick={copyToClipboard} aria-label="Copy code">
            <Clipboard className="h-4 w-4" />
          </Button>
        </div>
        <TabsContent value="java">
          <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
            <code>{javaCode}</code>
          </pre>
        </TabsContent>
        <TabsContent value="python">
          <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
            <code>{pythonCode}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  );
}
