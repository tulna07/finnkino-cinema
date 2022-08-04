import * as actType from "../constants/userManagement";
import { GROUP_ID } from "@/constants";
import { userApi } from "@/api";

const actUserDeleteRequest = () => {
  return {
    type: actType.GET_USER_DELETE_REQUEST,
  };
};

const actUserDeleteSuccess = (data) => {
  return {
    type: actType.GET_USER_DELETE_SUCCESS,
    payload: data,
  };
};

const actUserDeleteFail = (error) => {
  return {
    type: actType.GET_USER_DELETE_FAIL,
    payload: error,
  };
};

const actGetUserDetele = (userAccount) => {
  return (dispatch) => {
    dispatch(actUserDeleteRequest());
    const fetchUserDelete = async () => {
      try {
        const userDelete = await userApi.deleteUser(userAccount);
        dispatch(actUserDeleteSuccess(userDelete));
      } catch (error) {
        dispatch(actUserDeleteFail(error));
      }
    };

    fetchUserDelete();
  };
};

export { actGetUserDetele };
