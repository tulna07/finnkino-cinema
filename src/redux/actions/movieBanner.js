import {
  MOVIE_BANNER_REQUEST,
  MOVIE_BANNER_SUCCESS,
  MOVIE_BANNER_FAIL,
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
        dispatch(actMovieBannerFail(error));
      }
    };
    fetchBanners();
  };
};

const actMovieBannerRequest = () => {
  return {
    type: MOVIE_BANNER_REQUEST,
  };
};

const actMovieBannerSuccess = (data) => {
  return {
    type: MOVIE_BANNER_SUCCESS,
    payload: data,
  };
};

const actMovieBannerFail = (error) => {
  return {
    type: MOVIE_BANNER_FAIL,
    payload: error,
  };
};

export default actFetchBanners;
