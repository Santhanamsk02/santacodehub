'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/dashboard');
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
                <Input id="email" type="email" placeholder="m@example.com" required className="neumorphic-inset" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required className="neumorphic-inset" />
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
