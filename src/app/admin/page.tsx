'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Users, Calendar, TrendingUp, DollarSign } from 'lucide-react';
import StatCard from './components/home-cards';

// Dữ liệu mẫu cho biểu đồ
const patientTrendData = [
  { tháng: 'Tháng 1', bệnhNhân: 1200 },
  { tháng: 'Tháng 2', bệnhNhân: 1350 },
  { tháng: 'Tháng 3', bệnhNhân: 1100 },
  { tháng: 'Tháng 4', bệnhNhân: 1400 },
  { tháng: 'Tháng 5', bệnhNhân: 1600 },
  { tháng: 'Tháng 6', bệnhNhân: 1800 },
  { tháng: 'Tháng 7', bệnhNhân: 1700 },
  { tháng: 'Tháng 8', bệnhNhân: 1900 },
  { tháng: 'Tháng 9', bệnhNhân: 2100 },
  { tháng: 'Tháng 10', bệnhNhân: 2000 },
  { tháng: 'Tháng 11', bệnhNhân: 2200 },
  { tháng: 'Tháng 12', bệnhNhân: 2400 },
];

const specialtyData = [
  { chuyênKhoa: 'Nội khoa', sốBácSĩ: 45 },
  { chuyênKhoa: 'Ngoại khoa', sốBácSĩ: 38 },
  { chuyênKhoa: 'Sản phụ khoa', sốBácSĩ: 32 },
  { chuyênKhoa: 'Nhi khoa', sốBácSĩ: 28 },
  { chuyênKhoa: 'Tim mạch', sốBácSĩ: 25 },
  { chuyênKhoa: 'Da liễu', sốBácSĩ: 20 },
];

const ageGroupData = [
  { name: '0-18 tuổi', value: 25, color: '#8884d8' },
  { name: '19-35 tuổi', value: 35, color: '#82ca9d' },
  { name: '36-50 tuổi', value: 20, color: '#ffc658' },
  { name: '51-65 tuổi', value: 15, color: '#ff7c7c' },
  { name: '65+ tuổi', value: 5, color: '#8dd1e1' },
];

const revenueData = [
  { quý: 'Q1', doanhThu: 2500000 },
  { quý: 'Q2', doanhThu: 3200000 },
  { quý: 'Q3', doanhThu: 2800000 },
  { quý: 'Q4', doanhThu: 3800000 },
];

export default function AdminPage() {
  return (
    <div className="space-y-6 p-6">

      {/* Thống kê tổng quan - Card chuyên nghiệp */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Tổng Bệnh Nhân"
          value="12,456"
          percentage="+4.8%"
          percentageColor="text-primary"
          description="so với tháng trước"
          icon={Users}
        />
        <StatCard
          title="Tổng Bác Sĩ"
          value="188"
          percentage="-1.2%"
          percentageColor="text-red-500"
          description="so với tuần trước"
          icon={Users}
        />
        <StatCard
          title="Cuộc Hẹn Hôm Nay"
          value="156"
          percentage="+8%"
          percentageColor="text-primary"
          description="so với hôm qua"
          icon={Calendar}
        />
        <StatCard
          title="Doanh Thu Tháng"
          value="2.8M VND"
          percentage="+12%"
          percentageColor="text-primary"
          description="so với tháng trước"
          icon={DollarSign}
        />
      </div>

      {/* Biểu đồ xu hướng bệnh nhân */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Xu Hướng Số Lượng Bệnh Nhân Theo Tháng
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={patientTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tháng" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="bệnhNhân" stroke="var(--primary)" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Biểu đồ chuyên khoa và phân bổ độ tuổi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Số Lượng Bác Sĩ Theo Chuyên Khoa
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={specialtyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="chuyênKhoa" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sốBácSĩ" fill="var(--primary)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Phân Bổ Bệnh Nhân Theo Độ Tuổi
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ageGroupData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {ageGroupData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Biểu đồ doanh thu */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Doanh Thu Theo Quý
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quý" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="doanhThu" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}