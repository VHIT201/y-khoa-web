"use client";

import { ReactNode, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";

import {
  LayoutDashboard,
  Stethoscope,
  User,
  Users,
  CalendarCheck,
  LogOut,
} from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

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

  const menuItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/specialties", label: "Quản lý chuyên khoa", icon: Stethoscope },
    { href: "/admin/doctors", label: "Quản lý bác sĩ", icon: User },
    { href: "/admin/appointments", label: "Quản lý Đặt lịch", icon: CalendarCheck },
    { href: "/admin/users", label: "Quản lý user", icon: Users },
  ];

  return (
    <div className="h-screen bg-background relative overflow-hidden">
      <header className="bg-white shadow-md h-20 fixed top-0 left-0 right-0 p-4 border-b border-border z-30">
        <div className="flex justify-between items-center w-full h-full mx-auto">
          <div className="flex items-center gap-3">
            <img
              src="https://aih.com.vn/storage/logo-aih.png"
              alt="Medical Logo"
              className="h-12 w-auto object-cover bg-white rounded-md"
            />
            <span className="text-xl font-bold text-gray-800">
              Hệ thống Y khoa Vạn Hạnh
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-800">
                Xin chào, <span className="text-primary">Bác sĩ Hoàng</span>
              </p>
              <p className="text-xs text-muted-foreground">Khoa Nội tổng hợp</p>
            </div>
            <img
              src="https://aih.com.vn/storage/doctors/7c1121282da8ad9011a7b4d978eb24b8.png"
              alt="User Avatar"
              className="h-10 w-10 rounded-full border-2 border-primary object-cover"
            />
          </div>
        </div>
      </header>

      <div className="flex h-screen pt-20">

        <aside className="w-64 bg-white h-full fixed left-0 top-20 bottom-0 p-4 overflow-y-auto border-r border-border shadow-md z-20">
          <nav className="flex flex-col gap-1.5">
            {menuItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/admin" && pathname.startsWith(item.href));

              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`
                        flex items-center gap-3 p-3 rounded-lg font-medium text-sm transition-all duration-200
                        ${isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-gray-600 hover:bg-gray-100 hover:text-primary"
                    }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-6 bg-gray-50 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}