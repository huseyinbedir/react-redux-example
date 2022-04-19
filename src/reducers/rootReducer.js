import { combineReducers } from "redux";

import { userReducer } from ".";
import { todosReducer } from "./todosReducer";

const rootReducer = combineReducers({
    userReducer,
    todosReducer

})

export default rootReducer;