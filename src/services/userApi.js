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
  getUserList: (params, userName) => {
    let url;
    if (userName !== "") {
      url = resourceName + `LayDanhSachNguoiDung?MaNhom=${params}&tuKhoa=${userName}`;
    } else {
      url = resourceName + "LayDanhSachNguoiDung";
      return axiosClient.get(url, params);
    }
  },
};

export default userApi;
