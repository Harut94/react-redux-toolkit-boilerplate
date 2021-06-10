import { combineReducers } from "redux";
import authSlice from "./auth";


const rootReducer = combineReducers({
    auth: authSlice
});

export default rootReducer;