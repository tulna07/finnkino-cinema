import * as actType from "../constants/userProfile";
import { userApi } from "@/api";

/*
 * Fetch user profile
 */
const actGetUserProfile = () => {
  return (dispatch) => {
    dispatch(actUserProfileRequest());

    (async () => {
      try {
        const user = await userApi.getUser();
        dispatch(actUserProfileSuccess(user));
      } catch (error) {
        dispatch(actUserProfileFail(error));
      }
    })();
  };
};

const actUserProfileRequest = () => ({
  type: actType.GET_USER_PROFILE_REQUEST,
});

const actUserProfileFail = (error) => ({
  type: actType.GET_USER_PROFILE_FAIL,
  payload: error,
});

const actUserProfileSuccess = (data) => ({
  type: actType.GET_USER_PROFILE_SUCCESS,
  payload: data,
});

export { actGetUserProfile };
