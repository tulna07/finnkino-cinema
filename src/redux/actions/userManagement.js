import * as actType from "../constants/userManagement";
import { GROUP_ID } from "@/constants";
import { userApi } from "@/services";

const actGetUserList = (userName = "") => {
  return (dispatch) => {
    dispatch(actUserListRequest());

    const fetchUserList = async () => {
      try {
        const params = { maNhom: GROUP_ID };
        const userList = await userApi.getUserList(params, userName);
        dispatch(actUserListSuccess(userList));
      } catch (error) {
        dispatch(actUserListFail(error));
      }
    };

    fetchUserList();
  };
};

const actUserListRequest = () => {
  return {
    type: actType.GET_USER_LIST_REQUEST,
  };
};

const actUserListSuccess = (data) => {
  return {
    type: actType.GET_USER_LIST_SUCCESS,
    payload: data,
  };
};

const actUserListFail = (error) => {
  return {
    type: actType.GET_USER_LIST_FAIL,
    payload: error,
  };
};

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

export { actGetUserList, actGetUserDetele };
