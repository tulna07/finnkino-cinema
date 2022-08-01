import * as actType from "../constants/movieList";

const initialState = {
  loading: false,
  error: null,
  data: null,
  movieType: "now",
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

    case actType.GET_MOVIE_LIST_FAIL:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };

    case actType.SET_MOVIE_TYPE_NOW:
      state.movieType = "now";
      return { ...state };

    case actType.SET_MOVIE_TYPE_SOON:
      state.movieType = "soon";
      return { ...state };

    default:
      return { ...state };
  }
};

export default movieListReducer;
