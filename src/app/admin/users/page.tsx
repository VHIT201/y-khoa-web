'use client';

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
        <div className="flex items-center space-x-4">
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="all">Tất cả vai trò</option>
            <option value="admin">Admin</option>
            <option value="doctor">Bác sĩ</option>
            <option value="patient">Bệnh nhân</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="active">Hoạt động</option>
            <option value="inactive">Không hoạt động</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tên
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Số điện thoại
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vai trò
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trạng thái
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ngày tạo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value as User['role'])}
                    className={`px-2 py-1 text-xs font-semibold rounded-full border-0 ${getRoleColor(user.role)}`}
                  >
                    <option value="admin">Admin</option>
                    <option value="doctor">Bác sĩ</option>
                    <option value="patient">Bệnh nhân</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={user.status}
                    onChange={(e) => handleStatusChange(user.id, e.target.value as User['status'])}
                    className={`px-2 py-1 text-xs font-semibold rounded-full border-0 ${getStatusColor(user.status)}`}
                  >
                    <option value="active">Hoạt động</option>
                    <option value="inactive">Không hoạt động</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.createdAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Không có người dùng nào
        </div>
      )}
    </div>
  );
}