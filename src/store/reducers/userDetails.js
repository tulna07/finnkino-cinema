import * as actType from "../constants/userDetails";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.GET_USER_DETAILS_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case actType.GET_USER_DETAILS_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case actType.GET_USER_DETAILS_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userDetailsReducer;
