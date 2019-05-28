import hotels from "./hotelsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  hotels
});

export default rootReducer;