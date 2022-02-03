import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import exercisesReducer from "./exercises/exercisesReducer";
import routineReducer from "./routines/routinesReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["routines"],
};

const rootReducer = combineReducers({
  exercises: exercisesReducer,
  routines: routineReducer,
});

export default persistReducer(persistConfig, rootReducer);
