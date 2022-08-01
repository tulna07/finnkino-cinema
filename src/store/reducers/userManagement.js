import * as actType from "../constants/userManagement";

const initialState = {
  loading: false,
  error: null,
  userList: null,
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.GET_USER_LIST_REQUEST:
    case actType.GET_USER_DELETE_REQUEST:
    case actType.GET_USER_ADD_REQUEST:
    case actType.GET_USER_ADD_REQUEST:
    case actType.GET_USER_EDIT_REQUEST:
      state.loading = true;
      state.userList = null;
      state.error = null;
      return { ...state };

    case actType.GET_USER_LIST_SUCCESS:
    case actType.GET_USER_DELETE_SUCCESS:
    case actType.GET_USER_ADD_SUCCESS:
    case actType.GET_USER_EDIT_SUCCESS:
      state.loading = false;
      state.userList = action.payload;
      state.error = null;
      return { ...state };

    case actType.GET_USER_LIST_FAIL:
    case actType.GET_USER_DELETE_FAIL:
    case actType.GET_USER_ADD_FAIL:
    case actType.GET_USER_EDIT_FAIL:
      state.loading = false;
      state.userList = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userListReducer;
