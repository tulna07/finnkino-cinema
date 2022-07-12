import axiosClient from "./axiosClient";

const bannerApi = {
  getAll: (params) => {
    const url = "QuanLyPhim/LayDanhSachBanner";
    return axiosClient.get(url, { params });
  },
};

export default bannerApi;
