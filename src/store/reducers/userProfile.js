import * as actType from "../constants/userProfile";

const initialState = {
  data: { content: null, loading: false, error: "" },
  update: { loading: false, error: "" },
};

const userProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Fetch user profile
    case actType.GET_USER_PROFILE_REQUEST:
      return {
        ...state,
        data: { content: null, loading: true, error: "" },
      };

    case actType.GET_USER_PROFILE_FAIL:
      return {
        ...state,
        data: { content: null, loading: false, error: payload },
      };

    case actType.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        data: { content: payload, loading: false, error: "" },
      };

    // Update user profile
    case actType.UPDATE_USER_PROFILE_REQUEST:
      return {
        ...state,
        update: { loading: true, error: "" },
      };

    case actType.UPDATE_USER_PROFILE_FAIL:
      return {
        ...state,
        update: { loading: false, error: payload },
      };

    case actType.UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        data: {
          content: {
            ...state.data.content,
            matKhau: payload.matKhau,
            email: payload.email,
            soDT: payload.soDT,
          },
          loading: false,
          error: "",
        },
        update: { loading: false, error: "" },
      };

    default:
      return state;
  }
};

export default userProfileReducer;
