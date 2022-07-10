import axiosClient from "./config/axiosClient";

const movieApi = {
  getMovieList: (params) => {
    const url = "/QuanLyPhim/LayDanhSachPhim";
    return axiosClient.get(url, { params });
  },
};

export default movieApi;
