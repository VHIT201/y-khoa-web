'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/useAuth';
import Link from 'next/link';

export default function Home() {
  const { isAuthenticated, isAdmin, isUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (isAuthenticated) {
        if (isAdmin) {
          router.push('/admin');
        } else if (isUser) {
          router.push('/user');
        }
      }
    }
  }, [isAuthenticated, isAdmin, isUser, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Chào mừng đến với hệ thống
        </h1>
        <p className="text-gray-600 mb-8">
          Vui lòng đăng nhập để tiếp tục
        </p>

        <Link
          href="/login"
          className="inline-block bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/80 transition-colors font-medium"
        >
          Đăng nhập
        </Link>

        <div className="mt-6 text-sm text-gray-500">
          <p><strong>Tài khoản demo:</strong></p>
          <p>Admin: admin/admin</p>
          <p>User: user/user</p>
        </div>
      </div>
    </div>
  );
}
