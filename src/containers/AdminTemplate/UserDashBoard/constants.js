const headCells = [
  {
    id: "STT",
    numeric: false,
    disablePadding: true,
    label: "Số thứ tự",
    sortFunction: true,
  },
  {
    id: "taiKhoan",
    numeric: false,
    disablePadding: false,
    label: "Tài khoản",
    sortFunction: false,
  },
  {
    id: "matKhau",
    numeric: false,
    disablePadding: false,
    label: "Mật khẩu",
    sortFunction: false,
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "Email",
    sortFunction: true,
  },
  {
    id: "soDienThoai",
    numeric: false,
    disablePadding: false,
    label: "Số điện thoại",
    sortFunction: true,
  },
  {
    id: "hanhDong",
    numeric: false,
    disablePadding: false,
    label: "Hành động",
    sortFunction: false,
  },
];

export default headCells;
