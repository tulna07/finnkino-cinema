import {
  GET_MOVIE_BANNER_REQUEST,
  GET_MOVIE_BANNER_SUCCESS,
  GET_MOVIE_BANNER_FAIL,
} from "../constants/movieBanner";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const movieBannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_BANNER_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case GET_MOVIE_BANNER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case GET_MOVIE_BANNER_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default movieBannerReducer;
