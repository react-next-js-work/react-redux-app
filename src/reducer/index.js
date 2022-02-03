//register all reducers here only in one file
import changeNumber from "./IncrementDecrementReducer";
import {combineReducers} from "redux";
//pass all reducers here
const rootReducer = combineReducers({
    changeNumber,
})

export default rootReducer
