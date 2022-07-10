import axiosClient from "./config/axiosClient";

const resourceName = "QuanLyRap/";

const cinemaApi = {
  getCinemaSystemSchedule: (params) => {
    const url = resourceName + "LayThongTinLichChieuHeThongRap";
    return axiosClient.get(url, { params });
  },
  getMovieSchedule: (params) => {
    const url = resourceName + "LayThongTinLichChieuPhim";
    return axiosClient.get(url, { params });
  },
};

export default cinemaApi;
