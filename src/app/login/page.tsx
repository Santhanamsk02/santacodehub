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
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <main className="flex items-center justify-center w-full">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <div className="inline-block mx-auto p-3 bg-primary text-primary-foreground rounded-full mb-4">
              <GraduationCap className="h-10 w-10" />
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
