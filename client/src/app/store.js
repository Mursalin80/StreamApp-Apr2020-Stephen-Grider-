import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";
import { streamsReducer } from "./reducers/streamReducer";
import { reducer as formReducer } from "redux-form";

export default configureStore({
  reducer: {
    authReducer: authReducer,
    form: formReducer,
    streams: streamsReducer,
  },
});
