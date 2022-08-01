import axiosClient from "./config/axiosClient";

const resourceName = "QuanLyNguoiDung/";

const userApi = {
  login: (user) => {
    const url = resourceName + "DangNhap";
    return axiosClient.post(url, user);
  },
  register: (user) => {
    const url = resourceName + "DangKy";
    return axiosClient.post(url, user);
  },
  getUserList: (params) => {
    const url = resourceName + "LayDanhSachNguoiDung";
    return axiosClient.get(url, { params });
  },
  deleteUser: (userAccount) => {
    const url = resourceName + `XoaNguoiDung?TaiKhoan=${userAccount}`;
    return axiosClient.delete(url);
  },
  addUser: (formData) => {
    const url = resourceName + "ThemNguoiDung";
    return axiosClient.post(url, formData);
  },
  searchUser: (groupId, keyword) => {
    const url = resourceName + `TimKiemNguoiDung?MaNhom=${groupId}&tuKhoa=${keyword}`;
    return axiosClient.get(url);
  },
};

export default userApi;
