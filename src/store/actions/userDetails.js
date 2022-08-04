import * as actType from "../constants/userDetails";
import { GROUP_ID } from "@/constants";
import { userApi } from "@/api";

const actUserDetailsRequest = () => {
  return {
    type: actType.GET_USER_DETAILS_REQUEST,
  };
};

export const actUserDetailsSuccess = (data) => {
  return {
    type: actType.GET_USER_DETAILS_SUCCESS,
    payload: data,
  };
};

const actUserDetailsFail = (error) => {
  return {
    type: actType.GET_USER_DETAILS_FAIL,
    payload: error,
  };
};

const actGetUserDetails = (keyword = "") => {
  return (dispatch) => {
    dispatch(actUserDetailsRequest());

    const fetchUserDetails = async () => {
      try {
        const params = { maNhom: GROUP_ID };
        const userDetails = await userApi.getUserDetails(params, keyword);
        dispatch(actUserDetailsSuccess(userDetails));
      } catch (error) {
        dispatch(actUserDetailsFail(error));
      }
    };

    fetchUserDetails();
  };
};

export default actGetUserDetails;
