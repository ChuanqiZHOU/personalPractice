import { combineReducers } from "redux";
import countReducer from "./count";
import { personReducer } from "./person";
export const allReducers = combineReducers({
    countReducer,
    personReducer
});