'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Clipboard } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';


type CodeSnippetProps = {
  javaCode: string;
  cCode: string;
};

export function CodeSnippet({ javaCode, cCode }: CodeSnippetProps) {
  const [activeTab, setActiveTab] = useState('java');
  const { toast } = useToast();

  const copyToClipboard = () => {
    const codeToCopy = activeTab === 'java' ? javaCode : cCode;
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
          <TabsList className="neumorphic-inset p-1 bg-transparent">
            <TabsTrigger value="java" className="data-[state=active]:neumorphic-outset data-[state=active]:bg-primary/20 data-[state=active]:shadow-none">Java</TabsTrigger>
            <TabsTrigger value="c" className="data-[state=active]:neumorphic-outset data-[state=active]:bg-primary/20 data-[state=active]:shadow-none">C</TabsTrigger>
          </TabsList>
          <Button variant="ghost" size="icon" onClick={copyToClipboard} className="neumorphic-button" aria-label="Copy code">
            <Clipboard className="h-4 w-4" />
          </Button>
        </div>
        <TabsContent value="java">
          <pre className="neumorphic-inset p-4 rounded-lg overflow-x-auto text-sm">
            <code>{javaCode}</code>
          </pre>
        </TabsContent>
        <TabsContent value="c">
          <pre className="neumorphic-inset p-4 rounded-lg overflow-x-auto text-sm">
            <code>{cCode}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  );
}
