'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Edit,
  Trash2,
  Stethoscope,
  Phone,
  Calendar,
  MoreVertical,
} from "lucide-react";
import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'doctor' | 'patient';
  status: 'active' | 'inactive';
  createdAt: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'Nguyễn Văn Admin',
      email: 'admin@hospital.com',
      phone: '0123456789',
      role: 'admin',
      status: 'active',
      createdAt: '2024-01-01'
    },
    {
      id: 2,
      name: 'Dr. Trần Thị Bác sĩ',
      email: 'doctor@hospital.com',
      phone: '0987654321',
      role: 'doctor',
      status: 'active',
      createdAt: '2024-01-05'
    },
    {
      id: 3,
      name: 'Lê Văn Bệnh nhân',
      email: 'patient@hospital.com',
      phone: '0111111111',
      role: 'patient',
      status: 'active',
      createdAt: '2024-01-10'
    },
    {
      id: 4,
      name: 'Phạm Thị Inactive',
      email: 'inactive@hospital.com',
      phone: '0222222222',
      role: 'patient',
      status: 'inactive',
      createdAt: '2024-01-12'
    },
  ]);

  const [filterRole, setFilterRole] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const handleRoleChange = (id: number, newRole: User['role']) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, role: newRole } : user
    ));
  };

  const handleStatusChange = (id: number, newStatus: User['status']) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, status: newStatus } : user
    ));
  };

  const handleDelete = (id: number) => {
    if (confirm('Bạn có chắc muốn xóa người dùng này?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const filteredUsers = users.filter(user => {
    const roleMatch = filterRole === 'all' || user.role === filterRole;
    const statusMatch = filterStatus === 'all' || user.status === filterStatus;
    return roleMatch && statusMatch;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-purple-100 text-purple-800';
      case 'doctor': return 'bg-blue-100 text-blue-800';
      case 'patient': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleText = (role: string) => {
    switch (role) {
      case 'admin': return 'Admin';
      case 'doctor': return 'Bác sĩ';
      case 'patient': return 'Bệnh nhân';
      default: return role;
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quản lý user</h1>
        <div className="flex items-center gap-3">
          <Select value={filterRole} onValueChange={setFilterRole}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Tất cả vai trò" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả vai trò</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="doctor">Bác sĩ</SelectItem>
              <SelectItem value="patient">Bệnh nhân</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Tất cả trạng thái" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả trạng thái</SelectItem>
              <SelectItem value="active">Hoạt động</SelectItem>
              <SelectItem value="inactive">Không hoạt động</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
        <Table className="border-0">
          <TableHeader className="h-12">
            <TableRow className="bg-primary">
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Tên
              </TableHead>
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Email
              </TableHead>
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Số điện thoại
              </TableHead>
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Vai trò
              </TableHead>
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Trạng thái
              </TableHead>
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Ngày tạo
              </TableHead>
              <TableHead className="text-center text-white uppercase font-bold text-xs px-4">
                Thao tác
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="bg-white text-gray-700 text-center">
            {filteredUsers.map((user) => (
              <TableRow
                key={user.id}
                className="hover:bg-muted/50 transition-colors"
                style={{ borderBottom: "1px solid #E5E7EB" }}
              >
                {/* Tên */}
                <TableCell className="text-xs text-left px-4 font-medium">
                  {user.name}
                </TableCell>

                {/* Email */}
                <TableCell className="text-xs text-left px-4">
                  {user.email}
                </TableCell>

                {/* Số điện thoại */}
                <TableCell className="text-xs text-left px-4">
                  {user.phone}
                </TableCell>

                {/* Vai trò */}
                <TableCell className="text-xs text-left px-4">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value as User["role"])}
                    className={`px-2 py-1 text-xs font-semibold rounded-full border-0 ${getRoleColor(user.role)}`}
                  >
                    <option value="admin">Admin</option>
                    <option value="doctor">Bác sĩ</option>
                    <option value="patient">Bệnh nhân</option>
                  </select>
                </TableCell>

                {/* Trạng thái */}
                <TableCell className="text-xs text-left px-4">
                  <select
                    value={user.status}
                    onChange={(e) => handleStatusChange(user.id, e.target.value as User["status"])}
                    className={`px-2 py-1 text-xs font-semibold rounded-full border-0 ${getStatusColor(user.status)}`}
                  >
                    <option value="active">Hoạt động</option>
                    <option value="inactive">Không hoạt động</option>
                  </select>
                </TableCell>

                {/* Ngày tạo */}
                <TableCell className="text-xs text-left px-4">
                  {user.createdAt}
                </TableCell>

                {/* Thao tác */}
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        title="Thao tác"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40 bg-white border-0">
                      <DropdownMenuItem
                        onClick={() => handleDelete(user.id)}
                        className="cursor-pointer text-red-600 hover:bg-primary hover:text-red-700"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Xóa
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-8 ">
          Không có người dùng nào
        </div>
      )}
    </div>
  );
}