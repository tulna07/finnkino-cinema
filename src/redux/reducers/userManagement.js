import * as actType from "../constants/userManagement";

const initialState = {
  loading: false,
  error: null,
  data: null,
  movieType: "now",
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.GET_USER_LIST_REQUEST:
    case actType.GET_USER_DELETE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case actType.GET_USER_LIST_SUCCESS:
    case actType.GET_USER_DELETE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case actType.GET_USER_LIST_FAIL:
    case actType.GET_USER_DELETE_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userListReducer;
