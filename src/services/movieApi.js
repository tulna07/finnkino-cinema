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
    const url = resourceName + `LayThongTinPhim?MaPhim=${params}`;
    return axiosClient.get(url);
  },
  deleteMovie: (params) => {
    const url = resourceName + "XoaPhim";
    return axiosClient.delete(url, { params });
  },
  addMovie: (movie) => {
    const url = resourceName + "ThemPhimUploadHinh";
    return axiosClient.post(url, movie);
  },
};

export default movieApi;
