import * as actType from "../constants/userManagement";
import { GROUP_ID } from "@/constants";
import { userApi } from "@/services";

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

const actGetUserList = () => {
  return (dispatch) => {
    dispatch(actUserListRequest());

    const fetchUserList = async () => {
      try {
        const params = { maNhom: GROUP_ID };
        const userList = await userApi.getUserList(params, "");

        dispatch(actUserListSuccess(userList));
      } catch (error) {
        dispatch(actUserListFail(error));
      }
    };

    fetchUserList();
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
        alert("user added successfully");
      } catch (error) {
        dispatch(actUserAddFail(error));
      }
    };

    fetchUserAdd();
  };
};

const actGetUserSearch = (keywords) => {
  return (dispatch) => {
    dispatch(actUserListRequest());
    const fetchUserSearch = async () => {
      try {
        const userSearch = await userApi.searchUser(GROUP_ID, keywords);
        dispatch(actUserListSuccess(userSearch));
      } catch (error) {
        dispatch(actUserListFail(error));
      }
    };

    fetchUserSearch();
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

export { actGetUserList, actGetUserDetele, actGetUserAdd, actGetUserSearch, actGetUserEdit };
