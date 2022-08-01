import {
  GET_CINEMA_LIST_REQUEST,
  GET_CINEMA_LIST_SUCCESS,
  GET_CINEMA_LIST_FAIL,
} from "../constants/cinemaSystem";
import { cinemaApi } from "@/api";

const actGetCinemaList = () => {
  return (dispatch) => {
    dispatch(actGetCinemaListRequest());
    const fetchCinemaList = async () => {
      const result = await cinemaApi.getCinemaSystemSchedule();
      try {
        dispatch(actGetCinemaListSuccess(result));
      } catch (error) {
        dispatch(actGetCinemaListFail(error));
      }
    };

    fetchCinemaList();
  };
};

const actGetCinemaListRequest = () => {
  return {
    type: GET_CINEMA_LIST_REQUEST,
  };
};

const actGetCinemaListSuccess = (data) => {
  return {
    type: GET_CINEMA_LIST_SUCCESS,
    payload: data,
  };
};

const actGetCinemaListFail = (error) => {
  return {
    type: GET_CINEMA_LIST_FAIL,
    payload: error,
  };
};

export default actGetCinemaList;
