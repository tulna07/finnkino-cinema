import {
  GET_USER_LIST_REQUEST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAIL,
} from "../constants/userList";

const initialState = {
  loading: false,
  error: null,
  data: null,
  movieType: "now",
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case GET_USER_LIST_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case GET_USER_LIST_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userListReducer;
