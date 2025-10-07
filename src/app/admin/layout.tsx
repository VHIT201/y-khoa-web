"use client";

import { ReactNode, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";
import { useRef } from "react";

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
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    { href: "/admin/users", label: "Quản lý User", icon: Users },
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

          <div className="relative" ref={menuRef}>
            <div
              onClick={() => setOpenMenu((prev) => !prev)}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors"
            >
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

            {/* Dropdown menu */}
            {openMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50 animate-fade-in">
                <button
                  onClick={() => {
                    localStorage.clear();
                    router.push('/login');
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <LogOut className="w-4 h-4 text-gray-500" />
                  Đăng xuất
                </button>
              </div>
            )}
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
                  className={
                    `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300
                        ${isActive
                      ? "bg-gradient-to-r from-primary/90 to-primary text-white shadow-lg shadow-primary/30 scale-[1.02]"
                      : "text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:shadow-md hover:shadow-primary/10"
                    }
                  `
                  }
                >
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300
                    ${isActive ? "scale-110" : "group-hover:scale-110"}
                  `}
                  />
                  <span>{item.label}</span>
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
    </div >
  );
}