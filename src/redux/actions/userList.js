import {
  GET_USER_LIST_REQUEST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAIL,
} from "../constants/userList";
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
    type: GET_USER_LIST_REQUEST,
  };
};

const actUserListSuccess = (data) => {
  return {
    type: GET_USER_LIST_SUCCESS,
    payload: data,
  };
};

const actUserListFail = (error) => {
  return {
    type: GET_USER_LIST_FAIL,
    payload: error,
  };
};

export default actGetUserList;
