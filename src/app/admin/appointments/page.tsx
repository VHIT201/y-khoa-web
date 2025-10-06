'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Button } from '@/components/ui/button';

interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      patientName: 'Nguyễn Văn A',
      doctorName: 'Dr. Nguyễn Văn A',
      specialty: 'Nội khoa',
      date: '2024-01-15',
      time: '09:00',
      status: 'confirmed'
    },
    {
      id: 2,
      patientName: 'Trần Thị B',
      doctorName: 'Dr. Trần Thị B',
      specialty: 'Ngoại khoa',
      date: '2024-01-16',
      time: '14:30',
      status: 'pending'
    },
    {
      id: 3,
      patientName: 'Lê Văn C',
      doctorName: 'Dr. Lê Văn C',
      specialty: 'Sản phụ khoa',
      date: '2024-01-17',
      time: '10:00',
      status: 'completed'
    },
  ]);

  const [filterStatus, setFilterStatus] = useState<string>('all');

  const handleStatusChange = (id: number, newStatus: Appointment['status']) => {
    setAppointments(appointments.map(apt =>
      apt.id === id ? { ...apt, status: newStatus } : apt
    ));
  };

  const handleDelete = (id: number) => {
    if (confirm('Bạn có chắc muốn xóa lịch hẹn này?')) {
      setAppointments(appointments.filter(apt => apt.id !== id));
    }
  };

  const filteredAppointments = filterStatus === 'all'
    ? appointments
    : appointments.filter(apt => apt.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // const getStatusText = (status: string) => {
  //   switch (status) {
  //     case 'pending': return 'Chờ xác nhận';
  //     case 'confirmed': return 'Đã xác nhận';
  //     case 'completed': return 'Hoàn thành';
  //     case 'cancelled': return 'Đã hủy';
  //     default: return status;
  //   }
  // };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quản lý Đặt lịch</h1>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Tất cả trạng thái" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả trạng thái</SelectItem>
            <SelectItem value="pending">Chờ xác nhận</SelectItem>
            <SelectItem value="confirmed">Đã xác nhận</SelectItem>
            <SelectItem value="completed">Hoàn thành</SelectItem>
            <SelectItem value="cancelled">Đã hủy</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
        <Table className="border-0">
          <TableHeader className="h-12">
            <TableRow className="bg-primary">
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Bệnh nhân
              </TableHead>
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Bác sĩ
              </TableHead>
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Chuyên khoa
              </TableHead>
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Ngày giờ
              </TableHead>
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Trạng thái
              </TableHead>
              <TableHead className="text-center text-white uppercase font-bold text-xs px-4">
                Thao tác
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="bg-white text-gray-700 text-center">
            {filteredAppointments.map((appointment) => (
              <TableRow
                key={appointment.id}
                className="hover:bg-muted/50 transition-colors"
                style={{ borderBottom: "1px solid #E5E7EB" }}
              >
                {/* Bệnh nhân */}
                <TableCell className="text-xs text-left px-4 font-medium">
                  {appointment.patientName}
                </TableCell>

                {/* Bác sĩ */}
                <TableCell className="text-xs text-left px-4">
                  {appointment.doctorName}
                </TableCell>

                {/* Chuyên khoa */}
                <TableCell className="text-xs text-left px-4">
                  {appointment.specialty}
                </TableCell>

                {/* Ngày giờ */}
                <TableCell className="text-xs text-left px-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{appointment.date} {appointment.time}</span>
                  </div>
                </TableCell>

                {/* Trạng thái */}
                <TableCell className="text-xs text-left px-4">
                  <select
                    value={appointment.status}
                    onChange={(e) =>
                      handleStatusChange(
                        appointment.id,
                        e.target.value as Appointment["status"]
                      )
                    }
                    className={`px-2 py-1 text-xs font-semibold rounded-full border-0 ${getStatusColor(
                      appointment.status
                    )}`}
                  >
                    <option value="pending">Chờ xác nhận</option>
                    <option value="confirmed">Đã xác nhận</option>
                    <option value="completed">Hoàn thành</option>
                    <option value="cancelled">Đã hủy</option>
                  </select>
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
                    <DropdownMenuContent
                      align="end"
                      className="w-40 bg-white border-0"
                    >
                      <DropdownMenuItem
                        onClick={() => handleDelete(appointment.id)}
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


      {filteredAppointments.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Không có lịch hẹn nào
        </div>
      )}
    </div>
  );
}