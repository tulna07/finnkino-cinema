import {
  GET_MOVIE_BANNER_REQUEST,
  GET_MOVIE_BANNER_SUCCESS,
  GET_MOVIE_BANNER_FAIL,
} from "../constants/movieBanner";
import { movieApi } from "@/api";

const actFetchBanners = () => {
  return (dispatch) => {
    dispatch(actMovieBannerRequest());
    const fetchMovieBanners = async () => {
      try {
        const banners = await movieApi.getBannerList();
        dispatch(actMovieBannerSuccess(banners));
      } catch (error) {
        dispatch(actMovieBannerFail(error));
      }
    };
    fetchMovieBanners();
  };
};

const actMovieBannerRequest = () => {
  return {
    type: GET_MOVIE_BANNER_REQUEST,
  };
};

const actMovieBannerSuccess = (data) => {
  return {
    type: GET_MOVIE_BANNER_SUCCESS,
    payload: data,
  };
};

const actMovieBannerFail = (error) => {
  return {
    type: GET_MOVIE_BANNER_FAIL,
    payload: error,
  };
};

export default actFetchBanners;
