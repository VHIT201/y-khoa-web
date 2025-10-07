"use client";

import { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";
import Image from "next/image";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!isAuthenticated || !isAdmin)) {
      router.push("/login");
    }
  }, [isAuthenticated, isAdmin, loading, router]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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

  if (!isAuthenticated || !isAdmin) {
    return null; // Will redirect
  }

  if (isMobile) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Admin không áp dụng cho màn hình &lt;1024px
          </h1>
          <p className="text-gray-600">
            Vui lòng sử dụng máy tính để truy cập trang quản trị
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-background relative overflow-hidden">
      {/* Header */}
      <header className="bg-primary h-20 fixed top-0 left-0 right-0 text-white p-4 border-b border-solid border-white z-10">
        <div className="flex justify-between items-center w-full mx-auto">
          {/* Logo và tiêu đề */}
          <div className="flex items-center gap-3">
            <Image
              src="https://aih.com.vn/storage/logo-aih.png" 
              alt="Medical Logo"
              className="h-12 w-auto object-cover bg-white rounded-md"
            />
            <span className="text-xl font-semibold">Hệ thống Y khoa Vạn Hạnh</span>
          </div>

          {/* Thông tin người dùng */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm">Xin chào, <span className="font-bold">Bác sĩ Hoàng</span></p>
              <p className="text-xs text-white">Khoa Nội tổng hợp</p>
            </div>
            <Image
              src="https://aih.com.vn/storage/doctors/7c1121282da8ad9011a7b4d978eb24b8.png" 
              alt="User Avatar"
              className="h-10 w-10 rounded-full border-2 border-white"
            />
          </div>
        </div>
      </header>

      <div className="flex h-screen">
        {/* Sidebar - Fixed */}
        <aside className="w-64 bg-white fixed left-0 top-20 bottom-0 p-4 text-primary overflow-y-auto z-10">
          <nav className="space-y-2">
            <a
              href="/admin"
              className="block p-3 rounded hover:bg-primary hover:text-primary-foreground bg-primary text-white transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/admin/specialties"
              className="block p-3 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Quản lý chuyên khoa
            </a>
            <a
              href="/admin/doctors"
              className="block p-3 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Quản lý bác sĩ
            </a>
            <a
              href="/admin/appointments"
              className="block p-3 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Quản lý Đặt lịch  
            </a>
            <a
              href="/admin/users"
              className="block p-3 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Quản lý user
            </a>
          </nav>
        </aside>

        {/* Main Content - Scrollable */}
        <main className="flex-1 ml-64 mt-20 p-6 bg-gray-100 overflow-y-auto h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
