import {
  GET_MOVIE_EDIT_REQUEST,
  GET_MOVIE_EDIT_SUCCESS,
  GET_MOVIE_EDIT_FAIL,
  GET_MOVIE_ADD_REQUEST,
  GET_MOVIE_ADD_SUCCESS,
  GET_MOVIE_ADD_FAIL,
} from "../constants/movieManagement";
import { movieApi } from "@/services";

const actFetchMovieEdit = (data) => {
  return (dispatch) => {
    dispatch(actGetMovieEditRequest());

    const fetchMovieEdit = async () => {
      try {
        dispatch(actGetMovieEditSuccess(data));
      } catch (error) {
        dispatch(actGetMovieEditFail(error));
      }
    };
  };
};

const actGetMovieEditRequest = () => {
  return {
    type: GET_MOVIE_EDIT_REQUEST,
  };
};

const actGetMovieEditSuccess = (data) => {
  return {
    type: GET_MOVIE_EDIT_SUCCESS,
    payload: data,
  };
};

const actGetMovieEditFail = (error) => {
  return {
    type: GET_MOVIE_EDIT_FAIL,
    payload: error,
  };
};

const actFetchMovieAdd = (movie) => {
  return (dispatch) => {
    dispatch(actGetMovieAddRequest());

    const fetchMovieAdd = async () => {
      try {
        const movieAdd = await movieApi.addMovie(movie);
        dispatch(actGetMovieAddSuccess(movieAdd));
      } catch (error) {
        dispatch(actGetMovieAddFail(error));
      }
    };

    fetchMovieAdd();
  };
};

const actGetMovieAddRequest = () => {
  return {
    type: GET_MOVIE_ADD_REQUEST,
  };
};

const actGetMovieAddSuccess = (data) => {
  return {
    type: GET_MOVIE_ADD_SUCCESS,
    payload: data,
  };
};

const actGetMovieAddFail = (error) => {
  return {
    type: GET_MOVIE_ADD_FAIL,
    payload: error,
  };
};

export { actFetchMovieEdit, actFetchMovieAdd };
