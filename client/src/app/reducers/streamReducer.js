import _ from "lodash";
import {
  FATCH_STREAMS,
  FATCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  CREATE_STREAM,
} from "../types";

export const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case FATCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case FATCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
