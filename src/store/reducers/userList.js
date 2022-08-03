import * as actType from "../constants/userList";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const userListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actType.GET_USER_LIST_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case actType.GET_USER_LIST_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };

    case actType.GET_USER_LIST_FAIL:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userListReducer;
