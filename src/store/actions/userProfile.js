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

/*
 * Update user profile
 */
const actUpdateUserProfile = (user, setShowModal) => {
  return (dispatch) => {
    dispatch(actUpdateUserProfileRequest());

    (async () => {
      try {
        user = await userApi.updateUserProfile(user);
        dispatch(actUpdateUserProfileSuccess(user));
        setShowModal(true);
      } catch (error) {
        dispatch(actUpdateUserProfileFail(error));
      }
    })();
  };
};

const actUpdateUserProfileRequest = () => ({
  type: actType.UPDATE_USER_PROFILE_REQUEST,
});

const actUpdateUserProfileFail = (error) => ({
  type: actType.UPDATE_USER_PROFILE_FAIL,
  payload: error,
});

const actUpdateUserProfileSuccess = (data) => ({
  type: actType.UPDATE_USER_PROFILE_SUCCESS,
  payload: data,
});

/*
 * Close modal
 */
const actCloseModal = () => ({
  type: actType.CLOSE_MODAL,
});

export { actGetUserProfile, actUpdateUserProfile, actCloseModal };
