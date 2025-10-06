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
      id: 1,
      name: "Nội khoa",
      description:
        "Chuyên khoa nội khoa - điều trị các bệnh lý nội khoa, quản lý bệnh nhân nội trú và ngoại trú",
      status: "active",
      doctorsCount: 12,
      patientsCount: 245,
      department: "Khoa Nội",
      headDoctor: "PGS.TS Nguyễn Văn An",
      phone: "1900-1234",
      createdAt: "2024-01-15",
      updatedAt: "2024-09-15",
    },
    {
      id: 2,
      name: "Ngoại khoa",
      description:
        "Chuyên khoa ngoại khoa - phẫu thuật và điều trị ngoại khoa, bao gồm phẫu thuật tiêu hóa, chấn thương",
      status: "active",
      doctorsCount: 15,
      patientsCount: 189,
      department: "Khoa Ngoại",
      headDoctor: "PGS.TS Trần Thị Bình",
      phone: "1900-1235",
      createdAt: "2024-01-20",
      updatedAt: "2024-09-10",
    },
    {
      id: 3,
      name: "Sản phụ khoa",
      description:
        "Chuyên khoa sản phụ khoa - chăm sóc sức khỏe phụ nữ, mang thai, sinh đẻ và các bệnh phụ khoa",
      status: "active",
      doctorsCount: 8,
      patientsCount: 156,
      department: "Khoa Sản",
      headDoctor: "PGS.TS Lê Thị Linh",
      phone: "1900-1236",
      createdAt: "2024-02-01",
      updatedAt: "2024-09-12",
    },
    {
      id: 4,
      name: "Nhi khoa",
      description:
        "Chuyên khoa nhi khoa - chăm sóc sức khỏe trẻ em từ sơ sinh đến 18 tuổi, tiêm chủng và phát triển",
      status: "active",
      doctorsCount: 10,
      patientsCount: 312,
      department: "Khoa Nhi",
      headDoctor: "PGS.TS Phạm Văn Minh",
      phone: "1900-1237",
      createdAt: "2024-02-05",
      updatedAt: "2024-09-14",
    },
    {
      id: 5,
      name: "Tim mạch",
      description:
        "Chuyên khoa tim mạch - chẩn đoán và điều trị các bệnh lý về tim mạch, can thiệp tim mạch",
      status: "active",
      doctorsCount: 9,
      patientsCount: 98,
      department: "Khoa Tim mạch",
      headDoctor: "PGS.TS Hoàng Văn Đức",
      phone: "1900-1238",
      createdAt: "2024-02-10",
      updatedAt: "2024-09-08",
    },
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
    <div className="space-y-6 p-6">
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
              className="bg-primary hover:bg-primary/90"
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
          borderColor="border-l-primary"
          textColor="text-primary"
          icon={Stethoscope}
        />

        <StatsCard
          title="Tổng bác sĩ"
          value={specialties.reduce((sum, s) => sum + s.doctorsCount, 0)}
          description={`Trung bình ${Math.round(
            specialties.reduce((sum, s) => sum + s.doctorsCount, 0) /
              specialties.length
          )}/chuyên khoa`}
          borderColor="border-l-blue-500"
          textColor="text-blue-600"
          showDot={true}
          dotColor="bg-blue-500"
        />

        <StatsCard
          title="Tổng bệnh nhân"
          value={specialties.reduce((sum, s) => sum + s.patientsCount, 0)}
          description="Đang điều trị"
          borderColor="border-l-green-500"
          textColor="text-green-600"
          showDot={true}
          dotColor="bg-green-500"
        />

        <StatsCard
          title="Tỷ lệ sử dụng"
          value={`${Math.round(
            (specialties.filter((s) => s.status === "active").length /
              specialties.length) *
              100
          )}%`}
          description="Chuyên khoa hoạt động"
          borderColor="border-l-purple-500"
          textColor="text-purple-600"
          showDot={true}
          dotColor="bg-purple-500"
        />
      </div>

      {/* Table Section */}
      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
        <Table className="border-0">
          <TableHeader className="bg-primary h-12">
            <TableRow className="hover:bg-primary">
              <TableHead className="px-4 text-white font-semibold">STT</TableHead>
              <TableHead className="px-6 text-white font-semibold">
                Chuyên khoa
              </TableHead>
              <TableHead className="px-6 text-white font-semibold">
                Khoa
              </TableHead>
              <TableHead className="px-6 text-white font-semibold">
                Trưởng khoa
              </TableHead>
              <TableHead className="px-4 text-white font-semibold">
                Bác sĩ
              </TableHead>
              <TableHead className="px-4 text-white font-semibold">
                Bệnh nhân
              </TableHead>
              <TableHead className="px-6 text-white font-semibold">
                Liên hệ
              </TableHead>
              <TableHead className="px-4 text-white font-semibold">
                Trạng thái
              </TableHead>
              <TableHead className="px-4 text-white font-semibold">
                Cập nhật
              </TableHead>
              <TableHead className="px-4 text-white font-semibold">
                Thao tác
              </TableHead>
            </TableRow>
          </TableHeader>
        <TableBody className="bg-white text-gray-700 text-center">
          {specialties.map((specialty, index) => (
            <TableRow
              key={specialty.id}
              className="hover:bg-muted/50 transition-colors border-0"
              style={{ borderBottom: "1px solid #E5E7EB" }}
            >
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <div className="text-left">
                  <div className="font-medium">{specialty.name}</div>
                  <div className="text-sm text-muted-foreground max-w-xs truncate">
                    {specialty.description}
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium text-left ">
                {specialty.department}
              </TableCell>
              <TableCell className="font-medium text-left">
                {specialty.headDoctor}
              </TableCell>
              <TableCell className="font-medium">
                {specialty.doctorsCount}
              </TableCell>
              <TableCell className="font-medium">
                {specialty.patientsCount}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{specialty.phone}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    specialty.status === "active" ? "default" : "secondary"
                  }
                  className="flex items-center gap-1 w-fit"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      specialty.status === "active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  ></div>
                  {specialty.status === "active"
                    ? "Hoạt động"
                    : "Không hoạt động"}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{specialty.updatedAt}</span>
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
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            Chưa có chuyên khoa
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Bắt đầu bằng cách thêm chuyên khoa đầu tiên.
          </p>
        </div>
      )}
      </div>
    </div>
  );
}
