'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
    // data demo
    {
      "id": 1,
      "name": "Dr. Nguyễn Hồng Trung",
      "specialty": "Chấn thương chỉnh hình",
      "email": "nguyenhongtrung.ctch@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 2,
      "name": "Dr. Nguyễn Viết Thịnh",
      "specialty": "Chấn thương chỉnh hình",
      "email": "nguyenvietthinh.ctch@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 3,
      "name": "Dr. Quách Hồng Anh",
      "specialty": "Khám sức khỏe",
      "email": "quachhonganh.ksk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 4,
      "name": "Dr. Lê Thị Hoa Thắm",
      "specialty": "Mắt",
      "email": "lethihoatham.mat@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 5,
      "name": "Dr. Vũ Lệ Xuân",
      "specialty": "Mắt",
      "email": "vulexuan.mat@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 6,
      "name": "Dr. Bùi Thị Thùy Tâm",
      "specialty": "Nhi",
      "email": "buithithuytam.nhi@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 7,
      "name": "Dr. Huỳnh Hoàng Anh",
      "specialty": "Nhi",
      "email": "huynhhoanganh.nhi@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 8,
      "name": "Dr. Ngô Vũ Bích Ngọc",
      "specialty": "Nhi",
      "email": "ngovubichngoc.nhi@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 9,
      "name": "Dr. Nguyễn Hiền",
      "specialty": "Nhi",
      "email": "nguyenhien.nhi@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 10,
      "name": "Dr. Nguyễn Thị Anh Đào",
      "specialty": "Nhi",
      "email": "nguyenthianhdao.nhi@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 11,
      "name": "Dr. Nguyễn Thị Hồng Huyên",
      "specialty": "Nhi",
      "email": "nguyenthihonghuyen.nhi@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 12,
      "name": "Dr. Nguyễn Trường Giang",
      "specialty": "Nhi",
      "email": "nguyentruonggiang.nhi@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 13,
      "name": "Dr. Trần Thị Lam",
      "specialty": "Nhi",
      "email": "tranthilam.nhi@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 14,
      "name": "Dr. Trần Võ",
      "specialty": "Nhi",
      "email": "tranvo.nhi@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 15,
      "name": "Dr. Hoàng Thọ Khánh Toàn",
      "specialty": "Nội tổng hợp",
      "email": "hoangthokhanhtoan.nth@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 16,
      "name": "Dr. Lã Thị Bạch Lý",
      "specialty": "Nội tổng hợp",
      "email": "lathibachly.nth@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 17,
      "name": "Dr. Nguyễn Ngọc Lan Anh",
      "specialty": "Nội tổng hợp",
      "email": "nguyenngoclananh.nth@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 18,
      "name": "Dr. Nguyễn Thái Trân",
      "specialty": "Nội tổng hợp",
      "email": "nguyenthaitran.nth@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 19,
      "name": "Dr. Nguyễn Tùng Lâm",
      "specialty": "Nội tổng hợp",
      "email": "nguyentunglam.nth@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 20,
      "name": "Dr. Trần Thị Tố Quyên",
      "specialty": "Nội tổng hợp",
      "email": "tranthitoquyen.nth@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 21,
      "name": "Dr. Trương Dạ Uyên",
      "specialty": "Nội tiết",
      "email": "truongdauyen.noitiet@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 22,
      "name": "Dr. Nguyễn Thịnh Vượng",
      "specialty": "Nội tiết",
      "email": "nguyenthinhvuong.noitiet@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 23,
      "name": "Dr. Nguyễn Công Dũng",
      "specialty": "Ngoại tổng quát",
      "email": "nguyencongdung.ntq@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 24,
      "name": "Dr. Lưu Nguyễn An Thuận",
      "specialty": "Ngoại tổng quát",
      "email": "luunguyenanthuan.ntq@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 25,
      "name": "Dr. Ngô Thanh Mai",
      "specialty": "Ngoại tổng quát",
      "email": "ngothanhmai.ntq@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 26,
      "name": "Dr. Quách Triều Giang",
      "specialty": "Ngoại tổng quát",
      "email": "quachtrieugiang.ntq@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 27,
      "name": "Dr. Võ Bích Đại Hào",
      "specialty": "Ngoại tổng quát",
      "email": "vobichdaihao.ntq@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 28,
      "name": "Dr. Nguyễn Mạnh Hùng",
      "specialty": "Ngoại thần kinh và Cột sống",
      "email": "nguyenmanhhung.ntk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 29,
      "name": "Dr. Nguyễn Thị Như Ái",
      "specialty": "PHCN/Vật lý trị liệu",
      "email": "nguyenthinhuai.phcn@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 30,
      "name": "Dr. Trần Thanh Phong",
      "specialty": "Răng (Nha)",
      "email": "tranthanhphong.rang@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 31,
      "name": "Dr. Nguyễn Đức Trình",
      "specialty": "Răng (Nha)",
      "email": "nguyenductrinh.rang@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 32,
      "name": "Dr. Võ Thái Châu",
      "specialty": "Răng (Nha)",
      "email": "vothaichau.rang@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 33,
      "name": "Dr. Huỳnh Thị Bạch Tuyết",
      "specialty": "Sản - Phụ khoa",
      "email": "huynhthibachtuyet.spk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 34,
      "name": "Dr. Hồ Nguyên Tiến",
      "specialty": "Sản - Phụ khoa",
      "email": "honguyentien.spk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 35,
      "name": "Dr. Lê Thị Thanh Loan",
      "specialty": "Sản - Phụ khoa",
      "email": "lethithanhloan.spk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 36,
      "name": "Dr. Nguyễn Phương Nam",
      "specialty": "Sản - Phụ khoa",
      "email": "nguyenphuongnam.spk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 37,
      "name": "Dr. Phạm Thị Thanh Thảo",
      "specialty": "Sản - Phụ khoa",
      "email": "phamthithanhthao.spk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 38,
      "name": "Dr. Quách Văn",
      "specialty": "Sản - Phụ khoa",
      "email": "quachvan.spk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 39,
      "name": "Dr. Robert Francois Marie Riche",
      "specialty": "Sản - Phụ khoa",
      "email": "robertriche.spk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 40,
      "name": "Dr. Trần Thị Phượng Hằng",
      "specialty": "Sản - Phụ khoa",
      "email": "tranthiphuonghang.spk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 41,
      "name": "Dr. Vũ Nhật Linh",
      "specialty": "Sản - Phụ khoa",
      "email": "vunhatlinh.spk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 42,
      "name": "Dr. Vũ Văn Phi",
      "specialty": "Sản - Phụ khoa",
      "email": "vuvanphi.spk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 43,
      "name": "Dr. Dương Thùy Trang",
      "specialty": "Sản - Phụ khoa",
      "email": "duongthuytrang.spk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 44,
      "name": "Dr. Trần Quang Phúc",
      "specialty": "Tai mũi họng",
      "email": "tranquangphuc.tmh@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 45,
      "name": "Dr. Nguyễn Đình Mỹ",
      "specialty": "Tai mũi họng",
      "email": "nguyendinhmy.tmh@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 46,
      "name": "Dr. Lê Quang Vy",
      "specialty": "Tâm thần",
      "email": "lequangvy.tt@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 47,
      "name": "Dr. Lê Phạm Anh Vy",
      "specialty": "Dinh dưỡng",
      "email": "lephamanhvy.dd@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 48,
      "name": "Dr. Trần Thị Khuê Vy",
      "specialty": "Tim mạch",
      "email": "tranthikhuevy.tm@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 49,
      "name": "Dr. Dương Thúy Liên",
      "specialty": "Tim mạch",
      "email": "duongthuylien.tm@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 50,
      "name": "Dr. Nguyễn Hồng Thanh",
      "specialty": "Tiêu hóa",
      "email": "nguyenhongthanh.th@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 51,
      "name": "Dr. Mai Viễn Phương",
      "specialty": "Tiêu hóa",
      "email": "maivienphuong.th@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 52,
      "name": "Dr. Nguyễn Ngọc Tiến",
      "specialty": "Tiết niệu & Nam khoa",
      "email": "nguyenngoctien.tnnk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 53,
      "name": "Dr. Nguyễn Minh Duật",
      "specialty": "Tiết niệu & Nam khoa",
      "email": "nguyenminhduat.tnnk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 54,
      "name": "Dr. Nguyễn Xuân Chiến",
      "specialty": "Tiết niệu & Nam khoa",
      "email": "nguyenxuanchien.tnnk@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 55,
      "name": "Dr. Trần Thị Thu Thảo",
      "specialty": "Thẩm mỹ da",
      "email": "tranthithuthao.tmd@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 56,
      "name": "Dr. Saijo Yasuo",
      "specialty": "Ung bướu",
      "email": "saijoyasuo.ub@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 57,
      "name": "Dr. Võ Thanh Nhân",
      "specialty": "Ung bướu",
      "email": "vothanhnhan.ub@hospital.com",
      "phone": "0123456789",
      "status": "active"
    },
    {
      "id": 58,
      "name": "Bà Hồ Ngọc Bảo Trân",
      "specialty": "Tư vấn tâm lý",
      "email": "hongocbaotran.tvtl@hospital.com",
      "phone": "0123456789",
      "status": "active"
    }
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
        <Button
          onClick={handleAdd}
          className="bg-button hover:bg-button/90 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-button/20"
        >
          <Plus className="w-4 h-4 mr-2" />
          Thêm bác sĩ
        </Button>
      </div>

      {/* Table Section */}
      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
        <Table className="border-0 w-lvw xl:w-full">
          <TableHeader className="h-12">
            <TableRow className="bg-primary">
              <TableHead className="text-center text-white uppercase pl-4">
                STT
              </TableHead>
              <TableHead className="text-left text-white uppercase">
                Tên bác sĩ
              </TableHead>
              <TableHead className="text-left text-white uppercase">
                Chuyên khoa
              </TableHead>
              <TableHead className="text-left text-white uppercase">
                Email
              </TableHead>
              <TableHead className="text-left text-white uppercase">
                Liên hệ
              </TableHead>
              <TableHead className="text-center text-white uppercase">
                Trạng thái
              </TableHead>
              <TableHead className="text-center text-white uppercase pr-4">
                Thao tác
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="bg-white text-gray-700 text-center">
            {doctors.map((doctor, index) => (
              <TableRow
                key={doctor.id}
                className="hover:bg-muted/50 transition-colors"
                style={{ borderBottom: "1px solid #E5E7EB" }}
              >
                <TableCell className="pl-4">{index + 1}</TableCell>

                <TableCell className="text-left">
                  {doctor.name}
                </TableCell>

                <TableCell className="text-left">
                  {doctor.specialty}
                </TableCell>

                <TableCell className="text-left">
                  {doctor.email}
                </TableCell>

                <TableCell className="text-left">
                  {doctor.phone}
                </TableCell>

                <TableCell className="text-center">
                  <Badge
                    variant={doctor.status === "active" ? "default" : "secondary"}
                    className="inline-flex w-fit items-center gap-1 px-2 mx-auto"
                  >
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${doctor.status === "active" ? "bg-green-500" : "bg-red-500"
                        }`}
                    />
                    <span>
                      {doctor.status === "active" ? "Hoạt động" : "Không hoạt động"}
                    </span>
                  </Badge>
                </TableCell>

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
                        onClick={() => handleEdit(doctor)}
                        className="cursor-pointer text-primary hover:bg-primary hover:text-blue-600"
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        Sửa
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(doctor.id)}
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


      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingDoctor ? "Chỉnh sửa thông tin bác sĩ" : "Thêm bác sĩ mới"}
            </DialogTitle>
            <DialogDescription>
              {editingDoctor
                ? "Cập nhật chi tiết thông tin của bác sĩ."
                : "Điền thông tin chi tiết để thêm bác sĩ mới vào hệ thống."}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="doctorName">Tên bác sĩ</Label>
                <Input
                  id="doctorName"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nhập tên bác sĩ"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialty">Chuyên khoa</Label>
                <Input
                  id="specialty"
                  type="text"
                  value={formData.specialty}
                  onChange={(e) =>
                    setFormData({ ...formData, specialty: e.target.value })
                  }
                  placeholder="Nhập chuyên khoa"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Nhập email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Trạng thái</Label>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData({ ...formData, status: value as "active" | "inactive" })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Hoạt động</SelectItem>
                  <SelectItem value="inactive">Không hoạt động</SelectItem>
                </SelectContent>
              </Select>
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
                {editingDoctor ? "Cập nhật" : "Thêm"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}