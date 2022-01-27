import { combineReducers } from "redux";
import exercisesReducer from "./exercises/exercisesReducer";

const rootReducer = combineReducers({
    exercises:exercisesReducer
})

export default rootReducer