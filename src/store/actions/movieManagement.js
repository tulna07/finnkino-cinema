import {
  GET_MOVIE_MANAGEMENT_REQUEST,
  GET_MOVIE_MANAGEMENT_SUCCESS,
  GET_MOVIE_MANAGEMENT_FAIL,
} from "../constants/movieManagement";
import { movieApi } from "@/api";

const actMovieManagementRequest = () => {
  return {
    type: GET_MOVIE_MANAGEMENT_REQUEST,
  };
};

const actMovieManagementSuccess = (data) => {
  return {
    type: GET_MOVIE_MANAGEMENT_SUCCESS,
    payload: data,
  };
};

const actMovieManagementFail = (error) => {
  return {
    type: GET_MOVIE_MANAGEMENT_FAIL,
    payload: error,
  };
};

const actFetchMovieEdit = (movie) => {
  return (dispatch) => {
    dispatch(actMovieManagementRequest());

    const fetchMovieEdit = async () => {
      try {
        const movieEdit = await movieApi.editMovie(movie);
        dispatch(actMovieManagementSuccess(movieEdit));
      } catch (error) {
        dispatch(actMovieManagementFail(error));
      }
    };

    fetchMovieEdit();
  };
};

const actFetchMovieAdd = (movie) => {
  return (dispatch) => {
    dispatch(actMovieManagementRequest());

    const fetchMovieAdd = async () => {
      try {
        const movieAdd = await movieApi.addMovie(movie);
        dispatch(actMovieManagementSuccess(movieAdd));
      } catch (error) {
        dispatch(actMovieManagementFail(error));
      }
    };

    fetchMovieAdd();
  };
};

const actFetchMovieDelete = (movieId) => {
  return (dispatch) => {
    dispatch(actMovieManagementRequest());

    const fetchMovieDelete = async () => {
      try {
        const movieAdd = await movieApi.deleteMovie(movieId);
        dispatch(actMovieManagementSuccess(movieAdd));
      } catch (error) {
        dispatch(actMovieManagementFail(error));
      }
    };

    fetchMovieDelete();
  };
};

export { actFetchMovieEdit, actFetchMovieAdd, actFetchMovieDelete };
