import axiosClient from "./config/axiosClient";
import apiConfig from "./config/apiConfig";

const movieApi = {
  getMovieList: (params) => {
    const url = "/QuanLyPhim/LayDanhSachPhim";
    return axiosClient.get(url, params);
  },
};

export default movieApi;
