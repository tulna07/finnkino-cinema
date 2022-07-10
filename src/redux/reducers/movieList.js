import * as actType from "../constants/movieList";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const movieListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actType.GET_MOVIE_LIST_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case actType.GET_MOVIE_LIST_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };

    case actType.GET_MOVIE_LIST_FAILED:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default movieListReducer;
