import * as actType from "../constants/userList";
import { GROUP_ID } from "@/constants";
import { userApi } from "@/api";

const actGetUserList = (keyword = "") => {
  return (dispatch) => {
    dispatch(actUserListRequest());

    const fetchUserList = async () => {
      try {
        const params = { maNhom: GROUP_ID };
        const userList = await userApi.getUserList(params, keyword);
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

export default actGetUserList;
