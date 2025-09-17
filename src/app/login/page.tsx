'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (email === 'admin@santacodehub.com' && password === 'admin123') {
      router.push('/admin');
    } else if (email && password) {
      router.push('/courses');
    } else {
        toast({
            title: 'Invalid Credentials',
            description: 'Please check your email and password.',
            variant: 'destructive',
        });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <main className="flex items-center justify-center w-full">
        <Card className="w-full max-w-md neumorphic-outset border-none">
          <CardHeader className="space-y-1 text-center">
            <div className="inline-block mx-auto p-4 bg-primary/20 rounded-full neumorphic-inset mb-4">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold font-headline">SantaCodeHub</CardTitle>
            <CardDescription>Enter your credentials to access your coding journey</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="m@example.com" 
                  required 
                  className="neumorphic-inset" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  className="neumorphic-inset" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full neumorphic-button bg-primary text-primary-foreground hover:bg-primary/90">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
