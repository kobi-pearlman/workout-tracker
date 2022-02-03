import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "../rootReducer";

const middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
