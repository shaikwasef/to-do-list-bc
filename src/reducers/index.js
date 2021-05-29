import { combineReducers } from "redux";
import {taskReducer} from "./taskReducer"
import {accountReducer , methodsReducer} from "./connectionParamsReducer"
import {completeTaskReducer} from "./completeTaskReducer"

export const allReducers = combineReducers({taskReducer,accountReducer,methodsReducer,completeTaskReducer});
