import {
  GET_MOVIE_MANAGEMENT_REQUEST,
  GET_MOVIE_MANAGEMENT_SUCCESS,
  GET_MOVIE_MANAGEMENT_FAIL,
} from "../constants/movieManagement";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const movieManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_MANAGEMENT_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case GET_MOVIE_MANAGEMENT_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case GET_MOVIE_MANAGEMENT_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default movieManagementReducer;
