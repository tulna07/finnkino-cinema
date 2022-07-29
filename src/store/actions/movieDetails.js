import {
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAIL,
} from "../constants/movieDetails";
import { movieApi } from "@/api";

const actFetchMovieDetails = (movieId) => {
  return (dispatch) => {
    dispatch(actMovieDetailsRequest());

    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await movieApi.getMovieDetails(movieId);
        dispatch(actMovieDetailsSuccess(movieDetails));
      } catch (error) {
        dispatch(actMovieDetailsFail(error));
      }
    };

    fetchMovieDetails();
  };
};

const actMovieDetailsRequest = () => {
  return {
    type: GET_MOVIE_DETAILS_REQUEST,
  };
};

const actMovieDetailsSuccess = (data) => {
  return {
    type: GET_MOVIE_DETAILS_SUCCESS,
    payload: data,
  };
};

const actMovieDetailsFail = (error) => {
  return {
    type: GET_MOVIE_DETAILS_FAIL,
    payload: error,
  };
};

export default actFetchMovieDetails;
