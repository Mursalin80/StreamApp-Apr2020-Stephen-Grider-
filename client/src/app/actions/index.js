import cusAxios from "../../api/streams";
import history from "../../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FATCH_STREAM,
  FATCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValue) => {
  return async (dispatch, getState) => {
    const { userId } = getState().authReducer;

    const responce = await cusAxios.post("/streams", { ...formValue, userId });
    dispatch({ type: CREATE_STREAM, payload: responce.data });
    history.push("/");
  };
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const responce = await cusAxios.get("/streams");
    dispatch({ type: FATCH_STREAMS, payload: responce.data });
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const responce = await cusAxios.get(`/streams/${id}`);
    dispatch({ type: FATCH_STREAM, payload: responce.data });
  };
};

export const editStream = (id, formVal) => {
  return async (dispatch) => {
    const responce = await cusAxios.patch(`/streams/${id}`, formVal);
    dispatch({ type: EDIT_STREAM, payload: responce.data });
    history.push("/");
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await cusAxios.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
    history.push("/");
  };
};
