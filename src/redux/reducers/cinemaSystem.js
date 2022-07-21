import {
  GET_CINEMA_LIST_REQUEST,
  GET_CINEMA_LIST_SUCCESS,
  GET_CINEMA_LIST_FAIL,
} from "../constants/cinemaSystem";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const cinemaSystemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CINEMA_LIST_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case GET_CINEMA_LIST_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case GET_CINEMA_LIST_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default cinemaSystemReducer;
