import axiosClient from "./axiosClient";

const movieApi = {
  getMovieList: (params) => {
    const url = "/QuanLyPhim/LayDanhSachPhim";
    return axiosClient.get(url, params);
  },
};

export default movieApi;
