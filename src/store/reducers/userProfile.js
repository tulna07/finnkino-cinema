import * as actType from "../constants/userProfile";

const initialState = {
  data: null,
  loading: false,
  error: "",
};

const userProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actType.GET_USER_PROFILE_REQUEST:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actType.GET_USER_PROFILE_FAIL:
      return {
        ...state,
        data: null,
        loading: false,
        error: payload,
      };

    case actType.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    default:
      return state;
  }
};

export default userProfileReducer;
