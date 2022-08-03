import * as actType from "../constants/userManagement";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const userManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.GET_USER_DELETE_REQUEST:
    case actType.GET_USER_ADD_REQUEST:
    case actType.GET_USER_EDIT_REQUEST:
    case actType.GET_USER_SEARCH_REQUEST:
      state.loading = true;
      state.userList = null;
      state.error = null;
      return { ...state };

    case actType.GET_USER_DELETE_SUCCESS:
    case actType.GET_USER_ADD_SUCCESS:
    case actType.GET_USER_EDIT_SUCCESS:
    case actType.GET_USER_SEARCH_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      return { ...state };

    case actType.GET_USER_DELETE_FAIL:
    case actType.GET_USER_ADD_FAIL:
    case actType.GET_USER_EDIT_FAIL:
    case actType.GET_USER_SEARCH_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userManagementReducer;
