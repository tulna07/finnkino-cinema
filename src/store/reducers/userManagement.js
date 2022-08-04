import * as actType from "../constants/userManagement";

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const userManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.GET_USER_DELETE_REQUEST:
    case actType.GET_USER_ADD_REQUEST:
    case actType.GET_USER_EDIT_REQUEST:
    case actType.GET_USER_SEARCH_REQUEST:
      state.loading = true;
      state.success = false;
      state.error = null;
      return { ...state };

    case actType.GET_USER_DELETE_SUCCESS:
    case actType.GET_USER_ADD_SUCCESS:
    case actType.GET_USER_EDIT_SUCCESS:
    case actType.GET_USER_SEARCH_SUCCESS:
      state.loading = false;
      state.success = true;
      state.error = null;
      return { ...state };

    case actType.GET_USER_DELETE_FAIL:
    case actType.GET_USER_ADD_FAIL:
    case actType.GET_USER_EDIT_FAIL:
    case actType.GET_USER_SEARCH_FAIL:
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userManagementReducer;
