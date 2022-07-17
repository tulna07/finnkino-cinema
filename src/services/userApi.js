import axiosClient from "./config/axiosClient";

const resourceName = "QuanLyNguoiDung/";

const userApi = {
  login: (user) => {
    const url = resourceName + "DangNhap";
    return axiosClient.post(url, user);
  },
};

export default userApi;
