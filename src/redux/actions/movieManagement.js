import {
  GET_MOVIE_EDIT_REQUEST,
  GET_MOVIE_EDIT_SUCCESS,
  GET_MOVIE_EDIT_FAIL,
} from "../constants/movieManagement";

const actFetchMovieEdit = (data) => {
  return (dispatch) => {
    dispatch(actGetMovieEditRequest());
    try {
      dispatch(actGetMovieEditSuccess(data));
    } catch (error) {
      dispatch(actGetMovieEditFail(error));
    }
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

export { actFetchMovieEdit };
