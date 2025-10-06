"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import StatsCard from "./components/stats-card";

interface Specialty {
  id: number;
  name: string;
  description: string;
  status: "active" | "inactive";
  doctorsCount: number;
  patientsCount: number;
  department: string;
  headDoctor: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export default function SpecialtiesPage() {
  const [specialties, setSpecialties] = useState<Specialty[]>([
    {
      "id": 1,
      "name": "Nội tổng hợp",
      "description": "Chuyên khoa chẩn đoán, điều trị và quản lý các bệnh lý nội khoa không cần phẫu thuật như hô hấp, tiêu hóa, gan mật, thận, thần kinh.",
      "status": "active",
      "doctorsCount": 6,
      "patientsCount": 245,
      "department": "Khoa Nội",
      "headDoctor": "Dr. Nguyễn Thái Trân",
      "phone": "1900-1234",
      "createdAt": "2024-01-15",
      "updatedAt": "2025-10-06"
    },
    {
      "id": 2,
      "name": "Ngoại tổng quát",
      "description": "Chuyên khoa phẫu thuật và điều trị các bệnh lý ngoại khoa tại các cơ quan như tiêu hóa, gan mật, tuyến giáp, và cấp cứu chấn thương.",
      "status": "active",
      "doctorsCount": 5,
      "patientsCount": 189,
      "department": "Khoa Ngoại",
      "headDoctor": "Dr. Ngô Thanh Mai",
      "phone": "1900-1235",
      "createdAt": "2024-01-20",
      "updatedAt": "2025-10-06"
    },
    {
      "id": 3,
      "name": "Sản - Phụ khoa",
      "description": "Chuyên khoa chăm sóc sức khỏe phụ nữ, khám thai, quản lý thai kỳ, sinh đẻ, và điều trị các bệnh lý phụ khoa, hiếm muộn.",
      "status": "active",
      "doctorsCount": 10,
      "patientsCount": 156,
      "department": "Khoa Sản",
      "headDoctor": "Dr. Lê Thị Thanh Loan",
      "phone": "1900-1236",
      "createdAt": "2024-02-01",
      "updatedAt": "2025-10-06"
    },
    {
      "id": 4,
      "name": "Nhi",
      "description": "Chuyên khoa chăm sóc sức khỏe trẻ em từ sơ sinh đến tuổi vị thành niên, khám bệnh, tiêm chủng, tư vấn dinh dưỡng và phát triển.",
      "status": "active",
      "doctorsCount": 9,
      "patientsCount": 312,
      "department": "Khoa Nhi",
      "headDoctor": "Dr. Bùi Thị Thùy Tâm",
      "phone": "1900-1237",
      "createdAt": "2024-02-05",
      "updatedAt": "2025-10-06"
    },
    {
      "id": 5,
      "name": "Tim mạch",
      "description": "Chuyên khoa chẩn đoán, điều trị các bệnh lý về tim và mạch máu, bao gồm tăng huyết áp, suy tim và các thủ thuật can thiệp.",
      "status": "active",
      "doctorsCount": 2,
      "patientsCount": 98,
      "department": "Khoa Tim mạch",
      "headDoctor": "Dr. Dương Thúy Liên",
      "phone": "1900-1238",
      "createdAt": "2024-02-10",
      "updatedAt": "2025-10-06"
    },
    {
      "id": 6,
      "name": "Tiêu hóa",
      "description": "Chuyên khoa về các bệnh lý đường tiêu hóa, gan mật và tụy. Thực hiện nội soi chẩn đoán và điều trị bệnh tiêu hóa.",
      "status": "active",
      "doctorsCount": 2,
      "patientsCount": 115,
      "department": "Khoa Tiêu hóa",
      "headDoctor": "Dr. Nguyễn Hồng Thanh",
      "phone": "1900-1239",
      "createdAt": "2024-02-15",
      "updatedAt": "2025-10-06"
    },
    {
      "id": 7,
      "name": "Tiết niệu & Nam khoa",
      "description": "Chuyên khoa chẩn đoán, điều trị các vấn đề về hệ tiết niệu ở nam và nữ, cùng các bệnh lý và rối loạn sức khỏe nam giới.",
      "status": "active",
      "doctorsCount": 3,
      "patientsCount": 78,
      "department": "Khoa Tiết niệu",
      "headDoctor": "Dr. Nguyễn Ngọc Tiến",
      "phone": "1900-1240",
      "createdAt": "2024-02-20",
      "updatedAt": "2025-10-06"
    },
    {
      "id": 8,
      "name": "Ung bướu",
      "description": "Chuyên khoa tầm soát, chẩn đoán và điều trị các loại ung thư bằng các phương pháp hóa trị, xạ trị và phẫu thuật.",
      "status": "active",
      "doctorsCount": 3,
      "patientsCount": 55,
      "department": "Khoa Ung bướu",
      "headDoctor": "Dr. Saijo Yasuo",
      "phone": "1900-1241",
      "createdAt": "2024-03-01",
      "updatedAt": "2025-10-06"
    },
    {
      "id": 9,
      "name": "Răng (Nha)",
      "description": "Chuyên khoa chăm sóc sức khỏe răng miệng, bao gồm khám, điều trị nha chu, nhổ răng, trám răng và phục hình thẩm mỹ.",
      "status": "active",
      "doctorsCount": 3,
      "patientsCount": 130,
      "department": "Khoa Răng Hàm Mặt",
      "headDoctor": "Dr. Võ Thái Châu",
      "phone": "1900-1242",
      "createdAt": "2024-03-05",
      "updatedAt": "2025-10-06"
    },
    {
      "id": 10,
      "name": "Tai mũi họng",
      "description": "Chuyên khoa khám, chẩn đoán và điều trị các bệnh lý ở tai, mũi và họng, bao gồm viêm xoang, viêm amidan và các vấn đề thính giác.",
      "status": "active",
      "doctorsCount": 2,
      "patientsCount": 85,
      "department": "Khoa Tai Mũi Họng",
      "headDoctor": "Dr. Trần Quang Phúc",
      "phone": "1900-1243",
      "createdAt": "2024-03-10",
      "updatedAt": "2025-10-06"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSpecialty, setEditingSpecialty] = useState<Specialty | null>(
    null
  );
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "active",
    doctorsCount: 0,
    patientsCount: 0,
    department: "",
    headDoctor: "",
    phone: "",
  });

  const handleAdd = () => {
    setEditingSpecialty(null);
    setFormData({
      name: "",
      description: "",
      status: "active",
      doctorsCount: 0,
      patientsCount: 0,
      department: "",
      headDoctor: "",
      phone: "",
    });
  };

  const handleEdit = (specialty: Specialty) => {
    setEditingSpecialty(specialty);
    setFormData({
      name: specialty.name,
      description: specialty.description,
      status: specialty.status,
      doctorsCount: specialty.doctorsCount,
      patientsCount: specialty.patientsCount,
      department: specialty.department,
      headDoctor: specialty.headDoctor,
      phone: specialty.phone,
    });
  };

  const handleDelete = (id: number) => {
    if (confirm("Bạn có chắc muốn xóa chuyên khoa này?")) {
      setSpecialties(specialties.filter((s) => s.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSpecialty) {
      setSpecialties(
        specialties.map((s) =>
          s.id === editingSpecialty.id
            ? {
              ...s,
              ...formData,
              status: formData.status as "active" | "inactive",
              updatedAt: new Date().toISOString().split("T")[0],
            }
            : s
        )
      );
    } else {
      const newSpecialty: Specialty = {
        id: Math.max(...specialties.map((s) => s.id)) + 1,
        name: formData.name,
        description: formData.description,
        status: formData.status as "active" | "inactive",
        doctorsCount: formData.doctorsCount,
        patientsCount: formData.patientsCount,
        department: formData.department,
        headDoctor: formData.headDoctor,
        phone: formData.phone,
        createdAt: new Date().toISOString().split("T")[0],
        updatedAt: new Date().toISOString().split("T")[0],
      };
      setSpecialties([...specialties, newSpecialty]);
    }
    setIsModalOpen(false);
    setFormData({
      name: "",
      description: "",
      status: "active",
      doctorsCount: 0,
      patientsCount: 0,
      department: "",
      headDoctor: "",
      phone: "",
    });
  };

  return (
    <div className="flex flex-col gap-5 pb-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Stethoscope className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Quản lý chuyên khoa
            </h1>
            <p className="text-gray-600 mt-1">
              Quản lý các chuyên khoa trong bệnh viện
            </p>
          </div>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={handleAdd}
              className="bg-button hover:bg-button/90"
            >
              <Plus className="w-4 h-4 mr-2" />
              Thêm chuyên khoa
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingSpecialty
                  ? "Chỉnh sửa chuyên khoa"
                  : "Thêm chuyên khoa mới"}
              </DialogTitle>
              <DialogDescription>
                {editingSpecialty
                  ? "Cập nhật thông tin chuyên khoa"
                  : "Thêm chuyên khoa mới vào hệ thống"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Tên chuyên khoa</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Nhập tên chuyên khoa"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Khoa</Label>
                  <Input
                    id="department"
                    type="text"
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    placeholder="Nhập tên khoa"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Mô tả</Label>
                <Input
                  id="description"
                  type="text"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Nhập mô tả chuyên khoa"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="headDoctor">Trưởng khoa</Label>
                  <Input
                    id="headDoctor"
                    type="text"
                    value={formData.headDoctor}
                    onChange={(e) =>
                      setFormData({ ...formData, headDoctor: e.target.value })
                    }
                    placeholder="Nhập tên trưởng khoa"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input
                    id="phone"
                    type="text"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="doctorsCount">Số bác sĩ</Label>
                  <Input
                    id="doctorsCount"
                    type="number"
                    value={formData.doctorsCount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        doctorsCount: parseInt(e.target.value) || 0,
                      })
                    }
                    placeholder="0"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patientsCount">Số bệnh nhân</Label>
                  <Input
                    id="patientsCount"
                    type="number"
                    value={formData.patientsCount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        patientsCount: parseInt(e.target.value) || 0,
                      })
                    }
                    placeholder="0"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Trạng thái</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        status: value as "active" | "inactive",
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Hoạt động</SelectItem>
                      <SelectItem value="inactive">Không hoạt động</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Hủy
                </Button>
                <Button type="submit">
                  {editingSpecialty ? "Cập nhật" : "Thêm mới"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Tổng chuyên khoa"
          value={specialties.length}
          description={`${specialties.filter((s) => s.status === "active").length} đang hoạt động`}
          textColor="text-green-500"
          dotColor="bg-green-500"
        />

        <StatsCard
          title="Tổng bác sĩ"
          value={specialties.reduce((sum, s) => sum + s.doctorsCount, 0)}
          description={`Trung bình ${Math.round(
            specialties.reduce((sum, s) => sum + s.doctorsCount, 0) /
            specialties.length
          )} bác sĩ / chuyên khoa`}
          textColor="text-blue-500"
          dotColor="bg-blue-500"
        />

        <StatsCard
          title="Tổng bệnh nhân"
          value={specialties.reduce((sum, s) => sum + s.patientsCount, 0)}
          description="Đang điều trị"
          textColor="text-primary"
          dotColor="bg-primary"
        />

        <StatsCard
          title="Tỷ lệ sử dụng"
          value={`${Math.round(
            (specialties.filter((s) => s.status === "active").length /
              specialties.length) *
            100
          )}%`}
          description="Chuyên khoa hoạt động"
          textColor="text-purple-500"
          dotColor="bg-purple-500"
        />
      </div>

      {/* Table Section */}
      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
        <Table className="border-0">
          <TableHeader className="h-12">
            <TableRow className="bg-primary">
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                STT
              </TableHead>
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Chuyên khoa
              </TableHead>
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Khoa
              </TableHead>
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Trưởng khoa
              </TableHead>
              <TableHead className="text-center text-white uppercase font-bold text-xs px-4">
                Bác sĩ
              </TableHead>
              <TableHead className="text-center text-white uppercase font-bold text-xs px-4">
                Bệnh nhân
              </TableHead>
              <TableHead className="text-center text-white uppercase font-bold text-xs px-4">
                Liên hệ
              </TableHead>
              <TableHead className="text-center text-white uppercase font-bold text-xs px-4">
                Trạng thái
              </TableHead>
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Cập nhật
              </TableHead>
              <TableHead className="text-left text-white uppercase font-bold text-xs px-4">
                Thao tác
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="bg-white text-gray-700 text-center">
            {specialties.map((specialty, index) => (
              <TableRow
                key={specialty.id}
                className="hover:bg-muted/50 transition-colors"
                style={{ borderBottom: "1px solid #E5E7EB" }}
              >
                <TableCell className="text-xs">{index + 1}</TableCell>
                <TableCell>
                  <div className="text-left px-2">
                    <div className="text-xs">{specialty.name}</div>
                    <div className="text-xs text-justify text-muted-foreground max-w-xs truncate">
                      {specialty.description}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-xs text-left px-4">
                  {specialty.department}
                </TableCell>
                <TableCell className="text-xs text-left px-4">
                  {specialty.headDoctor}
                </TableCell>
                <TableCell className="text-xs text-center px-2">
                  {specialty.doctorsCount}
                </TableCell>
                <TableCell className="text-xs text-center px-2">
                  {specialty.patientsCount}
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-1 px-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs">{specialty.phone}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      specialty.status === "active" ? "default" : "secondary"
                    }
                    className="inline-flex w-fit items-center gap-1 px-2 mx-auto"
                  >
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${specialty.status === "active"
                        ? "bg-green-500"
                        : "bg-red-500"
                        }`}
                    />
                    <span>
                      {specialty.status === "active"
                        ? "Hoạt động"
                        : "Không hoạt động"
                      }
                    </span>
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center items-center gap-1 px-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs">{specialty.updatedAt}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 "
                        title="Thao tác"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40 bg-white border-0">
                      <DropdownMenuItem
                        onClick={() => handleEdit(specialty)}
                        className="cursor-pointer text-primary hover:bg-primary hover:text-blue-600"
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        Chỉnh sửa
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(specialty.id)}
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

        {specialties?.length === 0 && (
          <div className="text-center py-8">
            <Stethoscope className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-xs text-xs text-gray-900">
              Chưa có chuyên khoa
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Bắt đầu bằng cách thêm chuyên khoa đầu tiên.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
