import {
  MOVIE_BANNER_REQUEST,
  MOVIE_BANNER_SUCCESS,
  MOVIE_BANNER_FAIL,
} from "./constants";
import { bannerApi } from "@/services";

const actFetchBanners = async () => {
  return (dispatch) => {
    dispatch(actMovieBannerRequest());
    const fetchBanners = async () => {
      try {
        const banners = await bannerApi.getAll();
        dispatch(actMovieBannerSuccess(banners));
      } catch (error) {
        dispatch(actMovieBannerFail(error));
      }
    };
    fetchBanners();

    // bannerApi
    //   .getAll()
    //   .then((result) => dispatch(actMovieBannerSuccess(result.data.content)))
    //   .catch((error) => dispatch(actMovieBannerFail(error)));
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
