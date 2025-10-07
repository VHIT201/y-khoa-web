'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Loader2, User, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  console.log('dsadsads ', error)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simple authentication logic
    if (username === 'admin' && password === 'admin') {
      // Store user info in localStorage (in real app, use proper auth)
      localStorage.setItem('user', JSON.stringify({ username: 'admin', role: 'admin' }));
      router.push('/admin');
    } else if (username === 'user' && password === 'user') {
      localStorage.setItem('user', JSON.stringify({ username: 'user', role: 'user' }));
      router.push('/user');
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không đúng');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Image (7/12 width) */}
      <div className="hidden lg:flex lg:w-7/12 relative">
        <Image
          src="/login/BV-QT-My-2.jpg"
          alt="Bệnh viện Quốc tế Mỹ"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Chào mừng đến với</h1>
            <h2 className="text-2xl font-semibold drop-shadow-md">Hệ thống Quản lý Bệnh viện</h2>
          </div>
        </div>
        {/* Theme Toggle on left side */}

      </div>

      {/* Right side - Login Form (5/12 width on desktop, full width on mobile) */}
      <div className="w-full lg:w-5/12 flex items-center justify-center p-8 bg-white">
        <Card className="w-full max-w-md border-2 border-solid border-primary shadow-2xl bg-white">
          <CardHeader className="text-center pb-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 shadow-lg shadow-primary/30 mx-auto">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-primary">
              Đăng nhập
            </CardTitle>
            <CardDescription className="text-primary/80 font-medium">
              Vui lòng nhập thông tin đăng nhập
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-semibold text-primary">
                  Tên đăng nhập
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary/60" />
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 h-10 focus:border-primary focust:border-solid-primary text-gray-800"
                    placeholder="Nhập tên đăng nhập"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-semibold text-primary">
                  Mật khẩu
                </Label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary/60" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 border-2 h-10 border-primary/30 focus:border-primary text-gray-800 placeholder:text-primary/50"
                    placeholder="Nhập mật khẩu"
                    required
                  />
                </div>
              </div>

              {/* {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 shadow-sm">
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                </div>
              )} */}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/20"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Đang đăng nhập...
                  </>
                ) : (
                  'Đăng nhập'
                )}
              </Button>
            </form>

            {/* Demo accounts */}
            <div className="mt-8 text-center">
              <Card className="bg-white border-2 border-primary/20 shadow-sm">
                <CardContent className="p-4">
                  <p className="text-sm font-semibold text-primary mb-3">
                    Tài khoản demo:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center bg-primary/5 rounded px-3 py-2 border border-primary/10">
                      <span className="text-primary font-medium"><strong>Admin:</strong> admin</span>
                      <span className="text-primary/70">/ admin</span>
                    </div>
                    <div className="flex justify-between items-center bg-primary/5 rounded px-3 py-2 border border-primary/10">
                      <span className="text-primary font-medium"><strong>User:</strong> user</span>
                      <span className="text-primary/70">/ user</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}