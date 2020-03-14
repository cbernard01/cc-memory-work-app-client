import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import ccReducer from "./ccReducer";

export default combineReducers({
  form: formReducer,
  cc: ccReducer
});
