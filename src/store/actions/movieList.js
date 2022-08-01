import * as actType from "../constants/movieList";
import { GROUP_ID } from "@/constants";
import { movieApi } from "@/api";

const actGetMovieList = (movieName = "") => {
  return (dispatch) => {
    dispatch(actGetMovieListRequest());

    const fetchMovieList = async () => {
      try {
        const params = { maNhom: GROUP_ID };
        const movieList = await movieApi.getMovieList(params, movieName);
        dispatch(actGetMovieListSuccess(movieList));
      } catch (error) {
        dispatch(actGetMovieListFail(error));
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

const actGetMovieListFail = (error) => {
  return {
    type: actType.GET_MOVIE_LIST_FAIL,
    payload: error,
  };
};

export default actGetMovieList;
