import axiosClient from "./config/axiosClient";

const resourceName = "QuanLyPhim/";

const movieApi = {
  getBannerList: () => {
    const url = resourceName + "LayDanhSachBanner";
    return axiosClient.get(url);
  },
  getMovieList: (params) => {
    const url = resourceName + "LayDanhSachPhim";
    return axiosClient.get(url, { params });
  },
  getPaginatedMovieList: (params) => {
    const url = resourceName + "LayDanhSachPhimPhanTrang";
    return axiosClient.get(url, { params });
  },
  getMovieListByDate: (params) => {
    const url = resourceName + "LayDanhSachPhimTheoNgay";
    return axiosClient.get(url, { params });
  },
  getMovieDetails: (params) => {
    const url = resourceName + "LayThongTinPhim";
    return axiosClient.get(url, { params });
  },
  deleteMovie: (params) => {
    const url = resourceName + "XoaPhim";
    return axiosClient.get(url, { params });
  },
};

export default movieApi;
