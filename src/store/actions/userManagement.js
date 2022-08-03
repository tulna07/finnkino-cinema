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

const actUserAddRequest = () => {
  return {
    type: actType.GET_USER_ADD_REQUEST,
  };
};

const actUserAddSuccess = (data) => {
  return {
    type: actType.GET_USER_ADD_SUCCESS,
    payload: data,
  };
};

const actUserAddFail = (error) => {
  return {
    type: actType.GET_USER_ADD_FAIL,
    payload: error,
  };
};

const actUserEditRequest = () => {
  return {
    type: actType.GET_USER_EDIT_REQUEST,
  };
};

const actUserEditSuccess = (data) => {
  return {
    type: actType.GET_USER_EDIT_SUCCESS,
    payload: data,
  };
};

const actUserEditFail = (error) => {
  return {
    type: actType.GET_USER_EDIT_FAIL,
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

const actGetUserAdd = (userData) => {
  return (dispatch) => {
    dispatch(actUserAddRequest());

    const fetchUserAdd = async () => {
      try {
        const userAdd = await userApi.addUser(userData);
        dispatch(actUserAddSuccess(userAdd));
      } catch (error) {
        dispatch(actUserAddFail(error));
      }
    };

    fetchUserAdd();
  };
};

const actGetUserEdit = (data) => {
  return (dispatch) => {
    dispatch(actUserEditRequest());
    const fetchUserEdit = async () => {
      try {
        const userEdit = await userApi.editUser(data);
        dispatch(actUserEditSuccess(userEdit));
      } catch (error) {
        dispatch(actUserEditFail(error));
      }
    };

    fetchUserEdit();
  };
};

export { actGetUserDetele, actGetUserAdd, actGetUserEdit };
