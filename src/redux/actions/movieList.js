import * as actType from "../constants/movieList";
import { GROUP_ID } from "@/constants";
import { movieApi } from "@/services";

const actGetMovieList = () => {
  return (dispatch) => {
    dispatch(actGetMovieListRequest());

    const fetchMovieList = async () => {
      try {
        const params = { maNhom: GROUP_ID };
        const movieList = await movieApi.getMovieList(params);
        dispatch(actGetMovieListSuccess(movieList));
      } catch (error) {
        dispatch(actGetMovieListFailed(error));
      }
    };

    fetchMovieList();
  };
};

const actGetMovieListRequest = () => {
  return {
    type: actType.GET_MOVIE_LIST_REQUEST,
  };
};

const actGetMovieListSuccess = (data) => {
  return {
    type: actType.GET_MOVIE_LIST_SUCCESS,
    payload: data,
  };
};

const actGetMovieListFailed = (error) => {
  return {
    type: actType.GET_MOVIE_LIST_FAILED,
    payload: error,
  };
};

export default actGetMovieList;
