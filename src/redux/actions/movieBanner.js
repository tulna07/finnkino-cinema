import {
  GET_MOVIE_BANNER_REQUEST,
  GET_MOVIE_BANNER_SUCCESS,
  GET_MOVIE_BANNER_FAILED,
} from "../constants/movieBanner";
import { movieApi } from "@/services";

const actFetchBanners = () => {
  return (dispatch) => {
    dispatch(actMovieBannerRequest());
    const fetchBanners = async () => {
      try {
        const banners = await movieApi.getBannerList();
        dispatch(actMovieBannerSuccess(banners));
      } catch (error) {
        dispatch(actMovieBannerFailed(error));
      }
    };
    fetchBanners();
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

const actMovieBannerFailed = (error) => {
  return {
    type: GET_MOVIE_BANNER_FAILED,
    payload: error,
  };
};

export default actFetchBanners;
