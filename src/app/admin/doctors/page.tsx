'use client';

import { useState } from 'react';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
}

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([
    { id: 1, name: 'Dr. Nguyễn Văn A', specialty: 'Nội khoa', email: 'nguyenvana@hospital.com', phone: '0123456789', status: 'active' },
    { id: 2, name: 'Dr. Trần Thị B', specialty: 'Ngoại khoa', email: 'tranthib@hospital.com', phone: '0987654321', status: 'active' },
    { id: 3, name: 'Dr. Lê Văn C', specialty: 'Sản phụ khoa', email: 'levanc@hospital.com', phone: '0111111111', status: 'inactive' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    email: '',
    phone: '',
    status: 'active'
  });

  const handleAdd = () => {
    setEditingDoctor(null);
    setFormData({ name: '', specialty: '', email: '', phone: '', status: 'active' });
    setIsModalOpen(true);
  };

  const handleEdit = (doctor: Doctor) => {
    setEditingDoctor(doctor);
    setFormData({
      name: doctor.name,
      specialty: doctor.specialty,
      email: doctor.email,
      phone: doctor.phone,
      status: doctor.status
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Bạn có chắc muốn xóa bác sĩ này?')) {
      setDoctors(doctors.filter(d => d.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingDoctor) {
      setDoctors(doctors.map(d =>
        d.id === editingDoctor.id
          ? { ...d, ...formData, status: formData.status as 'active' | 'inactive' }
          : d
      ));
    } else {
      const newDoctor: Doctor = {
        id: Math.max(...doctors.map(d => d.id)) + 1,
        ...formData,
        status: formData.status as 'active' | 'inactive'
      };
      setDoctors([...doctors, newDoctor]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quản lý bác sĩ</h1>
        <button
          onClick={handleAdd}
          className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80 transition-colors"
        >
          Thêm bác sĩ
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tên bác sĩ
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Chuyên khoa
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Số điện thoại
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trạng thái
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {doctor.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {doctor.specialty}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {doctor.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {doctor.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    doctor.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {doctor.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    onClick={() => handleEdit(doctor)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(doctor.id)}
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {editingDoctor ? 'Sửa bác sĩ' : 'Thêm bác sĩ'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Tên bác sĩ</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Chuyên khoa</label>
                <input
                  type="text"
                  value={formData.specialty}
                  onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Số điện thoại</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Trạng thái</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full p-2 border rounded"
                >
                  <option value="active">Hoạt động</option>
                  <option value="inactive">Không hoạt động</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80"
                >
                  {editingDoctor ? 'Cập nhật' : 'Thêm'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}